const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const L=require('../dist/convoy-logic.js'),V=require('../dist/conservatory-view.js'),{route}=require('./convoy-route.cjs');
test('3D cameras frame the logical route, with unchanged deterministic completion',()=>{
 const {s,frames}=route(true);assert.equal(s.finished,true);assert.equal(s.deaths,0);assert.equal(frames.length,2499);
 const poses=new Set();for(const {state}of frames){for(const aspect of [16/9,19.5/9,4/3]){const c=V.camera(state,aspect);assert.ok(Object.values(c).every(Number.isFinite));assert.ok(c.z>10&&c.z<25);}poses.add(V.pose(state));}
 for(const pose of ['run','push','climb','crouch','jump','swim'])assert.ok(poses.has(pose),pose);
 assert.equal(V.point(L.C.wall,L.C.ledge).y,3);assert.equal(V.point(60,510).x,1);
});
test('real Three skeleton, camera and interaction poses stay finite for the complete route',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),art=await scene(),{frames}=route(true);let skins=0;art.actor.model.traverse(o=>{if(o.isSkinnedMesh)skins++;});assert.ok(skins>0);
 const T=await import('../dist/vendor/three/three.module.js'),ray=new T.Raycaster();art.scene.updateMatrixWorld(true);for(const[x,y,present]of [[20,0,true],[44,3,true],[66,0,false],[69,0,true],[110,0,false],[122,0,true]]){ray.set(new T.Vector3(x,y+.15,0),new T.Vector3(0,-1,0));ray.far=.3;assert.equal(ray.intersectObject(art.world,true).length>0,present,'3D ground at '+x);}
 const headY=[],hands=[],contacts=[],ledgeContacts=[];for(const {state:s}of frames){art.render(s,1/60);art.scene.updateMatrixWorld(true);for(const [name,bone]of Object.entries(art.actor.bones))assert.ok(bone.matrixWorld.elements.every(Number.isFinite),name);
  assert.ok(art.camera.matrixWorld.elements.every(Number.isFinite));
  const feet=new T.Vector3(s.x/60,(510-s.y)/60,0).project(art.camera),crown=new T.Vector3(s.x/60,(510-s.y)/60+1.69,0).project(art.camera);
  assert.ok(Math.abs(feet.x)<.9,'player remains horizontally framed');
  if(s.onGround&&!s.crouch&&!s.grabbing){const fraction=(crown.y-feet.y)/2;assert.ok(fraction>.15&&fraction<.27,'readable character size without losing the action');}
  if(art.actor.pose==='run'&&s.x>650&&s.x<1000){headY.push(art.actor.bones.head.matrixWorld.elements[13]);hands.push(art.actor.bones.Lhandbone.matrixWorld.elements[12]-s.x/60);}
  if(s.grabbing){const b=art.actor.bones.Lhandbone.matrixWorld.elements;contacts.push(Math.hypot(b[12]-(s.boxX-s.face*(L.C.boxHalf+2))/60,b[13]-1.05,b[14]+.19));}
  if(s.climb&&s.climb.t<.34){const b=art.actor.bones.Lhandbone.matrixWorld.elements;ledgeContacts.push(Math.hypot(b[12]-s.climb.edge/60,b[13]-(510-s.climb.top)/60-.035,b[14]+.19));}
 }
 assert.ok(Math.max(...headY)-Math.min(...headY)>.025,'head participates in running');
 assert.ok(Math.max(...hands)-Math.min(...hands)>.25,'arms swing through the gait');
 assert.ok(contacts.length>0);assert.ok(Math.max(...contacts)<.2,'hand remains near push contact');
 assert.ok(ledgeContacts.length>0);assert.ok(Math.max(...ledgeContacts)<.01,'hands planted during ledge support');
 assert.equal(art.actor.pose,'idle');
});
test('self-contained glTF assets include genuine skin and animation without remote dependencies',()=>{
 for(const name of ['traveller','conservatory']){const b=fs.readFileSync(path.join(__dirname,'../dist/assets3d/'+name+'.glb'));assert.equal(b.toString('utf8',0,4),'glTF');const j=JSON.parse(b.toString('utf8',20,20+b.readUInt32LE(12)));assert.ok(j.meshes.length>0);assert.ok((j.buffers||[]).every(x=>!x.uri));assert.ok(!(j.images||[]).some(x=>x.uri?.startsWith('http')));if(name==='traveller'){assert.ok(j.skins[0].joints.length>=17);for(const n of ['run','idle','jump','crouch','crouchwalk','swim'])assert.ok(j.animations.some(a=>a.name===n));}}
});
test('crouched locomotion plants support feet, lifts the other foot and settles when stopped',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),art=await scene(),T=await import('../dist/vendor/three/three.module.js');
 for(const face of [1,-1]){
  const s=L.createState();Object.assign(s,{crouch:1,vx:210*face,face,x:4650});
  const samples=[];
  for(let i=0;i<180;i++){s.x+=s.vx/60;art.actor.update(s,1/60);art.actor.root.updateMatrixWorld(true);const b=art.actor.bones;samples.push({phase:art.actor.actions.crouchwalk.time,L:b.Lfoot.getWorldPosition(new T.Vector3()),R:b.Rfoot.getWorldPosition(new T.Vector3()),head:b.head.getWorldPosition(new T.Vector3()),hand:b.Lhandbone.getWorldPosition(new T.Vector3()).x-s.x/60});}
  let supports=0;for(let i=70;i<samples.length;i++){const a=samples[i-1],b=samples[i];if(a.phase>.05&&b.phase<.55&&b.phase>a.phase){assert.ok(Math.abs(a.L.x-b.L.x)<.003,'support foot does not slide in world space');supports++;}}
  assert.ok(supports>20);
  const settled=samples.slice(60);assert.ok(Math.max(...settled.map(s=>s.L.y))>.17,'swing foot clears floor');
  assert.ok(Math.max(...settled.map(s=>s.head.y))<1.24,'head stays below refuge ceiling');
  assert.ok(Math.max(...settled.map(s=>s.hand))-Math.min(...settled.map(s=>s.hand))>.12,'upper body is not frozen');
  s.vx=0;for(let i=0;i<90;i++)art.actor.update(s,1/60);art.actor.root.updateMatrixWorld(true);const before=art.actor.bones.Lfoot.getWorldPosition(new T.Vector3());
  for(let i=0;i<30;i++)art.actor.update(s,1/60);art.actor.root.updateMatrixWorld(true);
  assert.ok(before.distanceTo(art.actor.bones.Lfoot.getWorldPosition(new T.Vector3()))<.001,'stationary crouch does not pedal');
 }
});
test('shelter lighting is fixed to architecture, local and does not add shadow maps',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),art=await scene();
 const origins=art.shelterLights.map(l=>l.position.toArray());
 assert.equal(origins.length,2);
 for(const l of art.shelterLights){assert.equal(l.castShadow,false);assert.ok(l.distance<=6);assert.ok(l.position.y<1.35);assert.ok(l.position.x>L.C.refuge/60&&l.position.x<L.C.refugeExit/60);}
 const s=L.createState();for(const x of [130,4650,7200]){s.x=x;art.render(s,1/60);assert.deepEqual(art.shelterLights.map(l=>l.position.toArray()),origins);}
});
test('camera reveals the head below the shelter front beam',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),art=await scene(),T=await import('../dist/vendor/three/three.module.js'),{frames}=route(true);
 let checked=0;for(const {state:s}of frames){art.render(s,1/60);if(s.x>4660&&s.x<4700){art.scene.updateMatrixWorld(true);const head=art.actor.bones.head.getWorldPosition(new T.Vector3()),direction=head.clone().sub(art.camera.position),ray=new T.Raycaster(art.camera.position,direction.clone().normalize(),0,direction.length()-.02);assert.equal(ray.intersectObject(art.refuge,true).length,0,'shelter does not occlude the head in its central passage');checked++;}}
 assert.ok(checked>5);
});
test('guardian costume follows skeleton and lantern rises into a watching pose',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),a=await scene(),T=await import('../dist/vendor/three/three.module.js'),{frames}=route(true);let seen=0,watch=0,move=0,first=null,changed=false;
 assert.ok(a.guard.wardrobe);assert.equal(a.actor.wardrobe,undefined);
 for(const {state:s}of frames){a.render(s,1/60);if(s.hunterTime<0)continue;seen++;const w=a.guard.wardrobe,p=w.mantle.geometry.attributes.position.array;assert.ok(p.every(Number.isFinite));if(!first)first=Array.from(p);else if(p.some((v,i)=>Math.abs(v-first[i])>.01))changed=true;
 a.guard.root.updateMatrixWorld(true);const hand=a.guard.bones.Rhandbone.getWorldPosition(new T.Vector3()),lamp=w.lantern.getWorldPosition(new T.Vector3());assert.ok(hand.distanceTo(lamp)<.001,'lantern grip remains attached');
 const local=a.guard.root.worldToLocal(hand.clone());if(s.hunterRest>.7)watch=Math.max(watch,local.y);else if(s.hunterV>300)move=Math.max(move,local.y);
 }assert.ok(seen>100&&changed);assert.ok(watch>1.15,'lantern raised while watching');assert.equal(a.guard.wardrobe.light.castShadow,false);
});
