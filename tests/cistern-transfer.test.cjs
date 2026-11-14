const test=require('node:test'),a=require('node:assert/strict'),L=require('../dist/world-logic.js'),F=require('../dist/ferry-motion.js');
const run=(s,n,input={})=>{for(let i=0;i<n;i++)L.step(s,typeof input==='function'?input(s):input);};
function state(){const s=L.createState('red');s.checkpoint=3;L.restart(s);s.deaths=0;s.water=s.pressure=0;return s;}
function atWater(offset=0,reverse=false){const s=state();let lo=2,hi=6;for(let n=0;n<40;n++){const mid=(lo+hi)/2;if(F.sample(mid).x<3890+offset)lo=mid;else hi=mid;}s.ferryClock=reverse?14-(lo+hi)/2:(lo+hi)/2;s.x=L.ferryX(s)+12;return s;}
test('receiver tolerates off-centre braking in both directions and opens a real exit',()=>{
 for(const reverse of [false,true])for(const offset of [-40,-20,0,20,40]){const s=atWater(offset,reverse);run(s,240,{hold:true});a(s.ferryFill>.8,offset+' '+reverse+' fill '+s.ferryFill);a(s.exitGate>.98);a(s.braking);a.equal(s.deaths,0);}
 const missed=atWater(100);run(missed,240,{hold:true});a.equal(missed.ferryFill,0);a.equal(missed.exitGate,0);
});
test('a single unbraked trip is insufficient; right quay remains safe with a closed exit',()=>{
 const s=state();s.x=3672;run(s,480);a(s.ferryFill<.6);s.x=4300;s.vx=0;run(s,120,{axis:1});a(s.x<=F.exitGate.x-26);a(!s.finished);a.equal(s.deaths,0);const x=s.x;run(s,900);a.equal(s.x,x);a.equal(s.deaths,0);
});
test('closed exit stops walking and jumping in either direction, with a safe occupied closing stroke',()=>{
 for(const side of [-1,1])for(const jump of [false,true]){const s=state();s.x=4370+side*65;run(s,80,(q)=>({axis:-side,jump:jump&&q.onGround}));a(side<0?s.x<=4344:s.x>=4396);a.equal(s.deaths,0);}
 const s=state();s.x=4370;s.exitGate=.52;s.ferryFill=0;run(s,120);a(s.exitGate*220>=102);a.equal(s.y,400);a.equal(s.deaths,0);
});
test('late departure can refill on return; gate latches after crossing and remains passable backwards',()=>{
 const s=atWater();run(s,200,{hold:true});a(s.exitGate>.95);run(s,1800);a.equal(s.deaths,0); // stay aboard, including several returns
 let full=false;for(let i=0;i<1800&&!full;i++){L.step(s,{hold:L.catchment(s.ferryClock)>.65});full=s.ferryFill>.98;}a(full);
 for(let i=0;i<900&&s.x<4440;i++){const f=L.ferryX(s);L.step(s,{axis:f>4050||s.x>4200?1:0,jump:s.x>4140&&s.x<4200&&s.onGround});}
 a(s.x>4400);a(s.exitLatched);for(let i=0;i<90&&s.x>4280;i++)L.step(s,{axis:-1});a(s.x<4344);a.equal(s.deaths,0);
});
test('pause preserves receiver, falling retries locally, all existing save checkpoints remain reconstructible',()=>{
 const s=atWater();run(s,200,{hold:true});s.paused=true;const before=JSON.stringify(s);run(s,100,{axis:1});a.equal(JSON.stringify(s),before);s.paused=false;
 s.onGround=false;s.y=830;run(s,40);a.equal(s.deaths,1);a.equal(s.x,3380);a.equal(s.ferryFill,0);a.equal(s.exitGate,0);a(!s.exitLatched);
 for(const checkpoint of [1,2,3]){const q=L.createState('red');q.checkpoint=checkpoint;L.restart(q);a.equal(q.checkpoint,checkpoint);a(Number.isFinite(q.exitGate));}
 const end=require('./frontier-route.cjs').route('red',true,L);a(end.s.finished);a.equal(end.s.deaths,0);a(end.frames.some(q=>q.braking&&q.ferryFill>.9));a(end.frames.some(q=>q.x>4400&&q.exitLatched));
});
test('visible transfer uses shared water overlap and gate dimensions, without solids on the body path',async()=>{
 const T=await import('../dist/vendor/three/three.module.js'),art=await(await import('../scripts/inspect-worlds.mjs')).worldScene(),s=atWater();
 for(const fill of [0,.3,.7,1]){s.ferryFill=fill;s.exitGate=fill;art.render(s);const box=new T.Box3().setFromObject(art.transfer.gate);a(Math.abs(box.min.y-(110+fill*220)/60)<.04);a(Math.abs(box.max.y-box.min.y-3.5)<.06);a(Math.abs(art.transfer.gate.position.x-4370/60)<1e-9);a(Math.abs(art.transfer.float.position.y-(.22+fill*1.15))<1e-9);}
 const tank=new T.Box3().setFromObject(art.transfer.tank);a(tank.max.z<-.8);a.equal(art.transfer.stream.position.x,F.receiver.streamX/60);s.ferryClock=0;art.render(s);a(art.transfer.ripple.visible);s.ferryClock=4.1;art.render(s);a(!art.transfer.ripple.visible);
});
test('player at the closed exit can reboard from the right, refill in reverse and finish without reset',()=>{
 const s=state();s.x=4300;let phase=0;
 for(let i=0;i<2400&&!s.finished;i++){
  let axis=0,jump=false,hold=false;const f=L.ferryX(s),offset=s.x-f;
  if(phase===0){if(s.x>4230)axis=-1;else phase=1;}
  if(phase===1&&f>4050){jump=true;axis=-1;phase=2;}
  else if(phase===2){axis=offset>35?-1:0;if(s.onGround&&s.x<4200)phase=3;}
  else if(phase===3){axis=offset<15?.4:offset>30?-.4:0;hold=L.catchment(s.ferryClock)>.7&&L.brakeReach(s);if(s.ferryFill>.98)phase=4;}
  else if(phase===4){if(f>=4050||s.x>4200)axis=1;if(s.x>4140&&s.x<4200&&s.onGround)jump=true;}
  if(s.x>4750)axis=require('./frontier-route.cjs').exitAxis(s,L);L.step(s,{axis,jump,hold});
 }
 a.equal(phase,4);a(s.finished&&s.exitLatched);a.equal(s.deaths,0);
});
