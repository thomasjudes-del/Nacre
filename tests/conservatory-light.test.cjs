const test=require('node:test'),assert=require('node:assert/strict');
const {route}=require('./conservatory-route.cjs');

test('lighting zones are continuous in both directions and preserve a readable fill',async()=>{
 const {lightingAt}=await import('../dist/conservatory-light.mjs');
 let prev=lightingAt(-5);
 for(let x=-4.95;x<132;x+=.05){
  const p=lightingAt(x);
  for(const k of Object.keys(p)){assert(Number.isFinite(p[k]),k);assert(Math.abs(p[k]-prev[k])<.09,'no abrupt zone switch: '+k);}
  assert(p.fill>=.57&&p.rim>=1.9);assert(p.key>.5);assert(p.fogDensity<=.0331);prev=p;
 }
 assert(lightingAt(78).key<lightingAt(20).key,'shelter attenuates overhead light');
 assert(lightingAt(110).basin>.99);assert(lightingAt(126).dawn>.99);
 assert(lightingAt(126).key>lightingAt(110).key,'last shore opens into light');
});

test('full real scene traversal keeps light budget fixed and adds no shadow map',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),art=await scene(),{frames,s}=route(true);
 const count=()=>{let lights=0,shadows=0;art.scene.traverse(o=>{if(o.isLight){lights++;if(o.castShadow)shadows++;}});return{lights,shadows};};
 const budget=count(),origin=art.lighting.shore.position.toArray();
 const colors=new Set();
 for(let i=0;i<frames.length;i++){
  const state=frames[i].state,unchanged=JSON.stringify(state);art.render(state,1/60);
  assert.equal(JSON.stringify(state),unchanged,'lighting does not mutate gameplay or saves');
  assert.deepEqual(count(),budget);assert.equal(budget.shadows,1);
  assert.deepEqual(art.lighting.shore.position.toArray(),origin);
  assert(art.sun.color.toArray().every(Number.isFinite));
  if(i%60===0)colors.add(art.sun.color.getHex());
 }
 assert(colors.size>10);assert(s.finished);assert.equal(s.deaths,0);
 // Loading a checkpoint/revisiting a place derives the same cues, with no stale timer.
 const L=require('../dist/conservatory-logic.js'),cp=L.recoverCheckpoint(4);
 art.render(cp,1/60);const key=art.sun.color.toArray(),intensity=art.sun.intensity;
 art.render(s,1/60);art.render(cp,1/60);
 assert.deepEqual(art.sun.color.toArray(),key);assert.equal(art.sun.intensity,intensity);
});
