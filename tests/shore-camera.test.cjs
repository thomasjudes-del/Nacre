const test=require('node:test'),assert=require('node:assert/strict'),V=require('../dist/conservatory-view.js'),L=require('../dist/conservatory-logic.js');
test('shore composition is continuous, reversible and stable at rest',()=>{
 for(const aspect of [16/9,19.5/9,4/3]){let prev=null;const values=[];
  for(let x=6750;x<=7690;x++){const s={...L.createState(),x,swimming:x<7180,y:x<7180?595:510};const c=V.camera(s,aspect);if(prev)for(const k of ['y','eyeY','z','eyeOffset'])assert(Math.abs(c[k]-prev[k])<.04,k+' has no framing jump');prev=c;values.push(c);assert.deepEqual(c,V.camera({...s,time:999},aspect));}
  values.reverse().forEach((c,i)=>assert.deepEqual(c,V.camera({...L.createState(),x:7690-i,swimming:7690-i<7180,y:7690-i<7180?595:510},aspect)));
 }
 const s={...L.createState(),x:7200};const c=V.camera(s);assert(c.z<11);assert(c.eyeY-c.y>3.5);assert(c.x-s.x/60<.7);
});
test('shore camera keeps head, hands and leading foot in frame on complete route',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),T=await import('../dist/vendor/three/three.module.js'),{route}=require('./conservatory-route.cjs');const {frames,s}=route(true);const a=await scene();let count=0;
 for(const {state}of frames){a.render(state,1/60);if(state.climb&&state.x>7000){a.actor.root.updateMatrixWorld(true);for(const n of ['head','Lhandbone','Rhandbone','Lfoot']){const p=a.actor.bones[n].getWorldPosition(new T.Vector3()).project(a.camera);assert(Math.abs(p.x)<.8&&Math.abs(p.y)<.85,n+' framed');}count++;}}
 assert(count>20);assert(s.finished);assert.equal(s.deaths,0);
});
