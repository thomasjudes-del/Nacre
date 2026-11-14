const test=require('node:test'),a=require('node:assert/strict');
test('salt vault stone never crosses the walking or jumping lane in either direction',async()=>{
 const T=await import('../dist/vendor/three/three.module.js'),{SaltPassage}=await import('../dist/salt-passage.mjs');
 const root=new T.Group(),mat=new T.MeshStandardMaterial({side:T.DoubleSide}),art=new SaltPassage(root,{shell:mat,salt:mat,bronze:mat,stone:mat});root.updateMatrixWorld(true);
 for(const mesh of art.vaults){const box=new T.Box3().setFromObject(mesh),cx=(box.min.x+box.max.x)/2;
 // Player silhouette and jump apex, including lateral thickness, not only a centre ray.
 for(const z of [-.3,0,.3])for(const y of [.05,.7,1.7,2.1,3.25])for(const d of [-1,1]){
 const ray=new T.Raycaster(new T.Vector3(cx-d*3,y,z),new T.Vector3(d,0,0),0,6);
 // Entire reachable silhouette, including the apex, fits below the stone.
 a.equal(ray.intersectObject(mesh).length,0,`stone in walking lane at ${cx}, ${y}, ${z}`);
 }
 const roof=new T.Raycaster(new T.Vector3(cx,0,0),new T.Vector3(0,1,0),0,4).intersectObject(mesh);
 a(roof.length>0);
 const sight=new T.Raycaster(new T.Vector3(cx,3,12),new T.Vector3(0,-1.8,-12).normalize(),0,12.1);a.equal(sight.intersectObject(mesh).length,0,'camera-facing side must reveal traveller');a(roof[0].distance>3.3,'jump clearance');
 a(box.min.x<cx-100/60&&box.max.x>cx+100/60,'protected ground lies under roof');
 }
});
test('each refuge permits walking back out, jumping inside and recovering after exposure',()=>{
 const L=require('../dist/world-logic.js');
 for(const x of L.saltShelters)for(const axis of [-1,1]){
 const s=L.createState();Object.assign(s,{x:x-axis*130,checkpoint:3,shutterLatched:true,bridge:1});
 for(let i=0;i<62;i++)L.step(s,{axis,jump:i===25});
 a.equal(s.deaths,0);a(axis*(s.x-x)>100,'crossed refuge');
 for(let i=0;i<62;i++)L.step(s,{axis:-axis});
 a.equal(s.deaths,0);a(axis*(s.x-x)<-100,'returned through refuge');
 s.x=x;s.vx=0;s.y=510;s.onGround=true;s.stormClock=6;s.exposure=.8;
 for(let i=0;i<60;i++)L.step(s,{});a.equal(s.exposure,0);a.equal(s.deaths,0);
 }
});
