const test=require('node:test'),a=require('node:assert/strict');
const L=require('../dist/world-logic.js'),F=require('../dist/ferry-motion.js'),A=require('../dist/recorded-foley.js'),S=require('../dist/world-score.js');
function state(){const s=L.createState('red');s.checkpoint=3;L.restart(s);s.deaths=0;return s;}
test('retreat across approach threshold does not freeze the already running ferry',()=>{const s=state();for(let i=0;i<21;i++)L.step(s,{axis:-1});a(s.x<3300&&s.x>3270);const clock=s.ferryClock;for(let i=0;i<90;i++)L.step(s);a(s.ferryClock>clock+1.49);a.equal(s.deaths,0);});
test('passive transport never counts as walking; actual steps on either bank and deck remain audible',()=>{
 const m=new A.BodySounds(),s=state();s.x=3660;let heard=[];
 for(let i=0;i<720;i++){L.step(s);heard.push(...m.update(s,1/60));}
 a.equal(s.bodyTravelX,0);a(!heard.some(c=>c.variant||c.name==='breath'));a(heard.some(c=>c.name==='creak'));
 for(let i=0;i<120;i++){L.step(s,{axis:i<60?.2:-.2});heard.push(...m.update(s,1/60));}
 a(heard.some(c=>c.variant));a.equal(s.deaths,0);
 for(const x of [3400,4300]){const q=state();q.x=x;const b=new A.BodySounds(),steps=[];for(let i=0;i<35;i++){L.step(q,{axis:x===4300?-1:1});steps.push(...b.update(q,1/60));}a(steps.some(c=>c.variant));}
});
test('mechanical announcements occur once before each departure and on docking at 30 and 60 Hz',()=>{
 for(const hz of [30,60]){const s=state(),events=[];for(let i=0;i<12*hz;i++){L.step(s,{},1/hz);for(const name of s.events)if(name.startsWith('ferry'))events.push([name,s.ferryClock]);}
 a.deepEqual(events.map(e=>e[0]),['ferry-release','ferry-dock','ferry-release','ferry-dock']);
 for(const [i,t] of [1.35,6,7.35,12].entries())a(Math.abs(events[i][1]-t)<=1/hz+.00001);
 s.paused=true;const before=s.ferryClock;for(let i=0;i<100;i++)L.step(s);a.equal(s.ferryClock,before);
 L.restart(s);a.equal(s.ferryClock,0);a.equal(s.bodyTravelX,0);
 }
});
test('mechanism sound attenuates with distance, resets on pause and is quiet at dock',()=>{
 const s=state();s.ferryClock=3;s.x=2000;const m=new A.BodySounds();m.update(s,1/60);a.equal(m.update(s,1/60).length,0);
 s.x=3700;m.update(s,1/60);a(m.update(s,1/60).some(c=>c.name==='creak'));m.reset();a.equal(m.update(s,1/60).length,0);
 s.ferryClock=6.2;a(!m.update(s,1/60).some(c=>c.name==='creak'));
 const out=[],foley=new A.RecordedFoley({});foley.play=p=>out.push(p);s.x=100;foley.event('ferry-dock',s);a.equal(out.length,0);s.x=4080;foley.event('ferry-dock',s);a.equal(out.length,1);a.equal(out[0].name,'wood1');a(out[0].gain<=.35);
});
test('brake anticipation and seating are continuous and fittings follow real deck movement',async()=>{
 a.equal(F.sample(1).prepare,0);a(F.sample(1.7).prepare>0);a.equal(F.sample(2).prepare,1);
 for(const t of [2,6,8,12]){a(Math.abs(F.sample(t-1e-5).x-F.sample(t+1e-5).x)<.001);a(Math.abs(F.sample(t-1e-5).prepare-F.sample(t+1e-5).prepare)<.001);}
 const art=await(await import('../scripts/inspect-worlds.mjs')).worldScene(),s=state();
 for(const t of [0,1.7,2,4,5.9,6,7.7,9,11.9,12]){s.ferryClock=t;art.render(s);const f=F.sample(t);a(Math.abs(art.ferry.deck.position.x-f.x/60)<1e-8);a.equal(art.ferry.drive.rotation.z,-(f.x-3660)/42);a.equal(art.ferry.brakeArm.rotation.z,-f.direction*f.prepare*.65);}
});
test('crossing leaves room for foley and exit restores score with smooth fades',()=>{
 for(const x of [2700,3400,3900,4300])a.equal(S.musicScene({chapter:'red',drainOpen:true,x}),'cistern');
 a.equal(S.musicScene({chapter:'red',drainOpen:true,x:4450}),'release');
 let w=[.2,0,0,0];w=S.advance(w,S.mixes.cistern,1/60);a(w[0]>0&&w[0]<.2);
});
test('rendered carry and gait share interpolation, but retries never sweep through the gap',()=>{
 const P=require('../dist/presentation.js'),s=state();s.x=3660;s.ferryClock=3;const previous={...s};L.step(s);const view=P.interpolate(previous,s,.5);
 a(Math.abs(view.ferryClock-(previous.ferryClock+s.ferryClock)/2)<1e-9);a.equal(view.bodyTravelX,0);
 const before={...s};L.step(s,{axis:.5});const walking=P.interpolate(before,s,.5);a(Math.abs(walking.bodyTravelX-s.bodyTravelX/2)<1e-8);
 s.x=4000;const falling={...s};L.restart(s);a.equal(P.interpolate(falling,s,.5),s);
});
