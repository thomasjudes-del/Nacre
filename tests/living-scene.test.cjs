const test=require('node:test'),assert=require('node:assert/strict'),L=require('../dist/conservatory-logic.js');
test('fresh entry falls, lands and settles safely, with immediate directional control and no replay on recovery',()=>{
 const s=L.createState();assert(!s.onGround);let landed=0;
 for(let i=0;i<150;i++){L.step(s,{});landed+=s.events.filter(e=>e==='land').length;}
 assert.equal(landed,1);assert.equal(s.deaths,0);assert(s.onGround&&!s.entrance);assert(s.x>130&&s.x<300);assert.equal(s.vx,0);
 const reverse=L.createState();for(let i=0;i<12;i++)L.step(reverse,{axis:-1});assert(reverse.vx<0&&reverse.x<130);assert(reverse.entranceControlled);
 const paused=L.createState();paused.paused=true;const before=structuredClone(paused);L.step(paused,{});assert.deepEqual(paused,before);
 for(let cp=0;cp<=5;cp++){const recovered=L.recoverCheckpoint(cp);assert(!recovered.entrance);assert(recovered.onGround);}
 s.respawn=.001;L.step(s,{});assert(!s.entrance);assert(s.onGround);
});
test('moth reacts to approaching its crate once, guides toward the dial, and remains frozen on pause',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),art=await scene(),s=L.recoverCheckpoint(2);s.x=1900;
 L.step(s,{});assert.equal(s.mothStart,undefined);s.x=2100;L.step(s,{});assert(s.events.includes('wings'));const start=s.mothStart;
 art.life.update(s);const origin=art.life.moth.position.clone();assert(Math.abs(origin.x-(s.boxX/60-.22))<.01);
 for(let i=0;i<240;i++){L.step(s,{});assert(!s.events.includes('wings'));}assert.equal(s.mothStart,start);
 art.life.update(s);assert(Math.abs(art.life.moth.position.x-41.1)<.01);assert(Math.abs(art.life.moth.position.y-2.66)<.01);
 s.paused=true;const position=art.life.moth.position.clone();for(let i=0;i<60;i++){L.step(s,{});art.life.update(s);}assert(art.life.moth.position.equals(position));
});
test('idle spine breathes and head glances while feet stay planted; pause does not accumulate additive rotations',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),art=await scene(),T=await import('../dist/vendor/three/three.module.js'),s=L.recoverCheckpoint(0);s.x=300;
 const heads=[],feet=[];for(let i=0;i<720;i++){s.time+=1/60;art.actor.update(s,1/60);art.actor.root.updateMatrixWorld(true);if(i>120){heads.push(art.actor.bones.head.rotation.y);feet.push(art.actor.bones.Lfoot.getWorldPosition(new T.Vector3()).y);}}
 assert(Math.max(...heads)-Math.min(...heads)>.2);assert(Math.max(...feet)-Math.min(...feet)<.01);const base=new T.Euler().setFromQuaternion(art.actor.lifeBase.chest);assert(art.actor.bones.chest.rotation.z-base.z<-.025);
 const before=Object.fromEntries(Object.entries(art.actor.bones).map(([k,b])=>[k,b.quaternion.clone()]));for(let i=0;i<100;i++)art.actor.update(s,0);
 for(const [k,q]of Object.entries(before))assert(q.toArray().every((v,i)=>Math.abs(v-art.actor.bones[k].quaternion.toArray()[i])<1e-6),k);
});
