const test=require('node:test'),assert=require('node:assert/strict'),{route}=require('./conservatory-route.cjs');
test('both hands leave every ledge continuously, including the water exit',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),art=await scene(),{frames,s}=route(true);let previous=null,checks=0;const edges=new Set();
 for(const {state:q}of frames){art.render(q,1/60);art.actor.root.updateMatrixWorld(true);const hands=['L','R'].map(side=>{const e=art.actor.bones[side+'handbone'].matrixWorld.elements;return[e[12],e[13],e[14]];});
  if(q.climb&&q.climb.t>.34&&q.climb.t<.36&&previous){
   for(let j=0;j<2;j++)assert(Math.hypot(...hands[j].map((n,i)=>n-previous[j][i]))<.01,'first release frame does not pop');
   edges.add(q.climb.edge);checks++;
  }
  if(q.climb&&q.climb.t>.30&&q.climb.t<.54)assert(hands.flat().every(Number.isFinite));
  previous=hands;
 }
 assert.equal(checks,3);assert(edges.has(7200));assert.equal(s.deaths,0);assert(s.finished);
});
