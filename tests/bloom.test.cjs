const test=require('node:test'),assert=require('node:assert/strict');
const L=require('../dist/conservatory-logic.js'),V=require('../dist/conservatory-view.js');
test('final bay remains safe when the player stops to observe and can resume',()=>{
 const {frames}=require('./conservatory-route.cjs').route(true);
 const s=structuredClone(frames.find(f=>f.state.x>7370).state);
 for(let i=0;i<1200;i++)L.step(s,{});
 assert.equal(s.deaths,0);assert(!s.finished);assert(s.onGround);
 for(let i=0;i<120&&!s.finished;i++)L.step(s,{axis:1});assert(s.finished);
});
test('bloom breathing is reversible in time, frozen at pause, and adds no lights',async()=>{
 const T=await import('../dist/vendor/three/three.module.js'),{ConservatoryBloom}=await import('../dist/conservatory-bloom.mjs');
 const scene=new T.Scene(),b=new ConservatoryBloom(scene),state={time:3};
 b.update(state);const pose=()=>b.petals.map(p=>p.scale.toArray());const before=pose();
 b.update(state);assert.deepEqual(pose(),before);b.update({time:8});assert.notDeepEqual(pose(),before);b.update(state);assert.deepEqual(pose(),before);
 let triangles=0;scene.traverse(o=>{assert(!o.isLight);if(o.isMesh){const p=o.geometry.attributes.position;assert(Array.from(p.array).every(Number.isFinite));triangles+=(o.geometry.index?.count||p.count)/3;}});assert(triangles<8000);
});
test('final bay framing widens continuously without losing the character',async()=>{
 const T=await import('../dist/vendor/three/three.module.js');
 for(const aspect of [16/9,19.5/9,4/3]){let previous;
  for(let x=7290;x<=7470;x++){
   const c=V.camera({...L.createState(),x,y:510},aspect);
   if(previous)for(const key of ['x','y','z','eyeY'])assert(Math.abs(c[key]-previous[key])<.05);
   const camera=new T.PerspectiveCamera(c.fov,aspect,.1,300);camera.position.set(c.x+c.eyeOffset,c.eyeY,c.z);camera.lookAt(c.x,c.y,0);camera.updateMatrixWorld();
   for(const y of [0,1.7]){const p=new T.Vector3(x/60,y,0).project(camera);assert(Math.abs(p.x)<.8&&Math.abs(p.y)<.85);}
   previous=c;
  }
 }
});
