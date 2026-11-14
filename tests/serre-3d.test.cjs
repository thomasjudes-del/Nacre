const test=require('node:test'),assert=require('node:assert/strict'),L=require('../dist/serre-logic.js');
test('original serre complete route, every dynamic structure agrees with simulation and skeleton stays finite',async()=>{
 const {scene,route}=await import('../scripts/inspect-serre.mjs'),art=await scene(),frames=route();assert.equal(frames.at(-1).finished,true);assert.equal(frames.at(-1).fallCount,0);
 for(let i=0;i<frames.length;i+=7){const s=frames[i];art.render(s,7/60);assert.ok(Math.abs(art.cart.position.x-s.cartX/60)<1e-9);assert.ok(Math.abs(art.lift.position.y-140*s.lift/60)<1e-9);art.actor.root.traverse(o=>assert.ok(o.matrixWorld.elements.every(Number.isFinite),o.name));for(let side=0;side<2;side++)for(const p of art.bridges[side]){if(s.bridges[side]===1)assert.ok(Math.abs(p.root.position.y-(510-L.bridgeHeight(p.x))/60)<1e-9);}}
 for(const aspect of [16/9,844/390,4/3]){art.camera.aspect=aspect;art.camera.updateProjectionMatrix();for(const x of [190,1298,1970,2750,4020,5180,6650]){const s={...L.createState(),x};art.cameraReady=false;art.render(s,0);const head=art.actor.bones.head.getWorldPosition(art.focus.clone()).project(art.camera);assert.ok(Math.abs(head.x)<1&&Math.abs(head.y)<1,JSON.stringify({x,aspect,head}));}}
});
test('serre bird flies once on approach, pauses, resets; bridge failure and recovery remain local',async()=>{
 const {scene}=await import('../scripts/inspect-serre.mjs'),art=await scene(),s=L.createState();s.started=true;s.x=1060;s.time=5;art.render(s,1/60);s.time=6;art.render(s,1/60);const a=art.bird.root.position.clone();art.render(s,0);assert.ok(a.equals(art.bird.root.position));s.x=400;s.time=10;art.render(s,1/60);assert.ok(art.bird.root.position.x>=a.x);s.time=0;art.render(s,1/60);assert.equal(art.bird.departed,null);
 Object.assign(s,{x:1800,y:510,seed:'socket',checkpoint:1230,started:true});for(let i=0;i<250;i++)L.step(s,{},1/60);assert.equal(s.fallCount,1);assert.equal(s.x,1230);assert.equal(s.seed,'held');assert.equal(s.bridges[0],0);
});
test('3D serre: cart load tolerates offsets, sluice stops both directions and permits visible clearance',()=>{
 for(const offset of [-40,-20,0,20,40]){const s=L.createState();Object.assign(s,{started:true,cartX:L.C.plate+offset,x:3350});L.step(s,{},1/60);assert.ok(s.weightOn,offset);}
 for(const side of [-1,1]){const s=L.createState();Object.assign(s,{started:true,x:L.C.sluice+side*60,y:370,cartX:3790,onGround:true});for(let i=0;i<60;i++)L.step(s,{axis:-side},1/60);assert.ok(side<0?s.x<=L.C.sluice-25:s.x>=L.C.sluice+25);}
 const s=L.createState();Object.assign(s,{started:true,x:4160,y:370,sluice:.75,cartX:L.C.plate,onGround:true});for(let i=0;i<45;i++)L.step(s,{axis:1},1/60);assert.ok(s.x>4250);
});
test('serre checkpoint save/reload preserves a solvable sequence at every checkpoint',()=>{
 const {policy}=require('./route.cjs');const s=L.createState(),pilot={},saved=[];s.started=true;let last=190;
 for(let i=0;i<12000&&!s.finished;i++){L.step(s,policy(L,s,pilot),1/60);if(s.checkpoint>last&&s.respawn===0){last=s.checkpoint;saved.push(JSON.parse(JSON.stringify({...s,x:s.checkpoint,y:L.C.ground,vx:0,vy:0,onGround:true,events:[],collapseTime:0,escaped:s.checkpoint>=3250})));}}
 assert.equal(saved.length,4);
 for(const q of saved){Object.assign(q,{started:true,paused:false,finished:false,respawn:0,vx:0,vy:0,events:[],grabbing:false,watchAlert:0,watchTime:0});const p={stage:q.checkpoint>=6020?10:q.checkpoint>=4480?8:q.checkpoint>=3250?5:0};for(let i=0;i<12000&&!q.finished;i++)L.step(q,policy(L,q,p),1/60);assert.equal(q.finished,true,'checkpoint '+q.checkpoint);assert.equal(q.fallCount,0);}
});
