const test=require('node:test'),assert=require('node:assert/strict');
const {route}=require('./conservatory-route.cjs');
test('both hands approach the shore before climb without a one-frame teleport',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),a=await scene();let prev=null,entry=0,max=0;
 const {frames,s}=route(true);
 for(const {state}of frames){a.render(state);a.actor.root.updateMatrixWorld(true);
 const hands=['L','R'].map(side=>a.actor.bones[side+'handbone'].matrixWorld.elements.slice(12,15));
 if(prev&&state.x>7090&&state.x<7185){hands.forEach((p,j)=>{const d=Math.hypot(...p.map((v,i)=>v-prev[j][i]));max=Math.max(max,d);assert(d<.14,'continuous reaching motion');});}
 if(state.climb?.t===0&&state.x>7000){entry++;hands.forEach((p,j)=>assert(Math.hypot(...p.map((v,i)=>v-prev[j][i]))<.01,'grip already placed at climb entry'));}
 prev=hands;
 }assert.equal(entry,1);assert(max>.01);assert(s.finished);assert.equal(s.deaths,0);
});
test('turning back from the shore releases the anticipatory reach',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),a=await scene(),L=require('../dist/conservatory-logic.js');const s=L.createState();Object.assign(s,{swimming:true,x:7176,y:595,vx:0,face:1});
 for(let i=0;i<60;i++)a.actor.update(s,1/60);
 s.face=-1;s.vx=-185;for(let i=0;i<60;i++){s.x-=185/60;a.actor.update(s,1/60);}
 assert(a.actor.actions.swim.getEffectiveWeight()>.99);assert(a.actor.actions.crouch.getEffectiveWeight()<.01);assert(Math.abs(a.actor.model.position.y+.35)<.001);
});
