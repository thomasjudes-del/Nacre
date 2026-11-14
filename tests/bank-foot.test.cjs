const test=require('node:test'),assert=require('node:assert/strict');
const {route}=require('./conservatory-route.cjs');
test('shore exit lifts then plants the lead foot without sinking through stone',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),a=await scene();const {frames,s}=route(true);let planted=0,prev=null,maxStep=0;
 for(const {state}of frames){a.render(state,1/60);a.actor.root.updateMatrixWorld(true);
  if(state.climb&&state.x>7000){const t=state.climb.t,p=a.actor.bones.Lfoot.matrixWorld.elements.slice(12,15);
   if(prev)maxStep=Math.max(maxStep,Math.hypot(...p.map((x,i)=>x-prev[i])));
   if(t>=.30){assert(p[1]>=.083,'foot stays above stone');}
   if(t>=.30&&t<=.39){assert(Math.abs(p[0]-120.25)<.005);assert(Math.abs(p[1]-.105)<.005);planted++;}
   prev=p;
  }
 }assert(planted>=5);assert(maxStep<.26,'no single-frame teleport');assert(s.finished);assert.equal(s.deaths,0);
});
test('shore traction raises the pelvis before releasing the hands without a pose jump',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),a=await scene();
 const {frames,s}=route(true);let raised=0,prev=null,maxStep=0;
 for(const {state}of frames){
  a.render(state,1/60);a.actor.root.updateMatrixWorld(true);
  if(!state.climb||state.x<=7000)continue;
  const p=a.actor.bones.pelvis.matrixWorld.elements.slice(12,15);
  if(prev)maxStep=Math.max(maxStep,Math.hypot(...p.map((x,i)=>x-prev[i])));
  if(state.climb.t>=.28&&state.climb.t<=.34){
   assert(p[1]>.12,'pelvis clears the stone during the supported pull');
   assert(a.actor.bones.Lupperarm.matrixWorld.elements[13]>.52,'torso rises with the pelvis');
   raised++;
  }
  prev=p;
 }
 assert(raised>=4);assert(maxStep<.12,'continuous pelvis through the release');
 assert(s.finished);assert.equal(s.deaths,0);
});
