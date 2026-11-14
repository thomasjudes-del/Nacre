const test=require('node:test'),assert=require('node:assert/strict'),L=require('../dist/world-logic.js'),{route}=require('./frontier-route.cjs');
const run=(s,input,n)=>{for(let i=0;i<n;i++)L.step(s,input);};
function bank(x){return Object.assign(L.createState('red'),{x,y:340,time:5.5,checkpoint:1});}
test('closed cistern gate blocks walking and jumping from both directions, with immediate retreat',()=>{
 for(const dir of [-1,1])for(const jumping of [false,true]){
  const s=bank(dir===1?1810:1950);for(let i=0;i<60;i++)L.step(s,{axis:dir,jump:jumping&&i===0});
  assert.equal(s.gate,0);assert(dir===1?s.x<=1844:s.x>=1896);assert.equal(s.deaths,0);
  const x=s.x;run(s,{axis:-dir},20);assert((s.x-x)*dir<0);
 }
});
test('gate follows water, never elapsed time; full stroke latches through drainage and old checkpoints',()=>{
 for(const time of [0,12,100]){const s=bank(1450);s.time=time;run(s,{},180);assert.equal(s.gate,0);}
 const s=bank(1450);s.water=s.pressure=.8;let clicks=0;for(let i=0;i<180;i++){L.step(s);clicks+=(s.events||[]).filter(n=>n==='gate-ready').length;}
 assert.equal(s.gate,1);assert(s.gateLatched);assert.equal(clicks,1);s.drainOpen=true;run(s,{},900);assert.equal(s.gate,1);assert(s.water<.1);
 for(const cp of [1,2]){const q=L.createState('red');q.checkpoint=cp;L.restart(q);assert.equal(q.gate,1);assert(q.gateLatched);run(q,{axis:1},90);assert(q.x>1900);}
});
test('partly open gate has head clearance and stops descending on an occupied opening',()=>{
 const s=bank(1870);s.gate=.6;s.water=s.pressure=.544;L.step(s,{jump:true});
 let bumped=false;for(let i=0;i<25;i++){L.step(s);const bottom=340-s.gate*210;assert(s.y-102>=bottom-1e-6);if(s.vy===0)bumped=true;}assert(bumped);
 s.gate=.5;s.water=s.pressure=0;s.y=340;s.onGround=true;s.vy=0;run(s,{},240);assert(s.gate>=102/210);assert.equal(s.x,1870);
});
test('completed full route supports backtracking through latched gate and rapid retry after early basin entry',()=>{
 const {s,frames}=route('red',true,L);assert(s.finished&&s.deaths===0);const atDrain=frames.find(s=>s.drainOpen);assert(atDrain);
 const q={...atDrain,events:[]};run(q,{axis:-1},150);assert(q.x<1870);assert.equal(q.deaths,0);assert(q.gateLatched);
 const r={...atDrain,x:2600,y:510,vx:0,onGround:true,events:[]};run(r,{},60);assert.equal(r.deaths,1);assert.equal(r.checkpoint,2);assert(r.drainOpen&&r.gateLatched);
});
test('visual float, gate clearance, flow, and paused transforms match hydraulic state',async()=>{
 const {worldScene}=await import('../scripts/inspect-worlds.mjs'),T=await import('../dist/vendor/three/three.module.js'),a=await worldScene();
 const s=bank(2180);s.water=s.pressure=.8;s.gate=1;s.gateLatched=true;a.render(s);
 const works=a.cisternWorks;assert(!works.jet.visible);assert.equal(works.float.position.y,2.95+.8*3.5);assert(Math.abs(a.gate.position.y-(510-340+L.cisternGate.travel)/60)<1e-9);
 const box=new T.Box3().setFromObject(a.gate);assert(box.min.y>(510-340+102+96)/60);assert((box.max.x-box.min.x)*30<=L.cisternGate.halfWidth);
 s.drainOpen=true;a.render(s);assert(works.jet.visible);assert(Math.abs(works.rings[0].position.y-a.water.position.y-.012)<1e-9);assert(a.wheel.position.z<0&&a.drainWheel.position.z<0);const y=works.float.position.y;s.paused=true;run(s,{},300);a.render(s,0);assert.equal(works.float.position.y,y);
 s.water=0;a.render(s);assert(!works.jet.visible);assert(works.rings.every(r=>!r.visible));
});
