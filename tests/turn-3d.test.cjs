const test=require('node:test'),assert=require('node:assert/strict');
test('turn accelerates gradually and settles without overshoot at different frame rates',async()=>{
 const {turnStep}=await import('../dist/turn-3d.mjs');let ends=[];
 for(const hz of [30,60,120]){let a=0,v=0,previous=0;
 for(let i=0;i<hz;i++){const r=turnStep(a,v,-1,1/hz);a=r.angle;v=r.velocity;assert(Number.isFinite(a));assert(a>=previous-1e-9&&a<=Math.PI+1e-9);if(i===0)assert(a<.06,'no first-frame snap');previous=a;}
 assert(Math.abs(a-Math.PI)<.001);ends.push(a);
 for(let i=0;i<hz;i++){const r=turnStep(a,v,1,1/hz);a=r.angle;v=r.velocity;}assert(Math.abs(a)<.001);
 }assert(Math.max(...ends)-Math.min(...ends)<.001);
});
test('real actor supports repeated direction reversals with finite complete-body poses',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),a=await scene(),L=require('../dist/conservatory-logic.js');const s=L.createState();
 for(let i=0;i<240;i++){s.face=i%60<30?1:-1;s.vx=s.face*320;a.actor.update(s,1/60);a.actor.root.updateMatrixWorld(true);for(const b of Object.values(a.actor.bones))assert(b.matrixWorld.elements.every(Number.isFinite));assert(Math.abs(a.actor.turnVelocity)<=12.0001);}
});
