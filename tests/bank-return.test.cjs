const test=require('node:test'),a=require('node:assert/strict'),L=require('../dist/conservatory-logic.js');
const {route}=require('./conservatory-route.cjs');
for(const hz of [30,60])test(`pool return to entrance bank and re-entry at ${hz} Hz`,()=>{
 const s=structuredClone(route(true).frames.find(f=>f.state.swimming&&f.state.x>6500).state);s.hunterX=-10000;const deaths=s.deaths;
 for(let i=0;i<hz*6&&!(s.onGround&&s.x<6100);i++)L.step(s,{axis:-1},1/hz);
 a(s.onGround&&s.x<6100,'left shore must be reachable');a.equal(s.deaths,deaths);
 for(let i=0;i<hz*10&&s.x<7240;i++)L.step(s,{axis:1},1/hz);
 a(s.x>=7240&&!s.swimming,'can re-enter and cross normally');a.equal(s.deaths,deaths);
});

test('return toward waiting guard causes capture and checkpoint recovery, not a water softlock',()=>{
 const s=structuredClone(route(true).frames.find(f=>f.state.swimming&&f.state.x>6500).state);
 for(let i=0;i<400&&!s.capture;i++)L.step(s,{axis:-1});
 a(s.capture,'visible shore guard captures the returning player');
 for(let i=0;i<180;i++)L.step(s,{});
 a.equal(s.deaths,1);a.equal(s.checkpoint,5);a(!s.capture&&!s.climb&&!s.swimming);
});
test('left shore foot support mirrors the existing right shore on CPU',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),art=await scene();
 const s=structuredClone(route(true).frames.find(f=>f.state.swimming&&f.state.x>6500).state);s.hunterX=-10000;let planted=0;
 for(let i=0;i<240;i++){L.step(s,{axis:-1});art.render(s,1/60);if(s.climb&&s.climb.edge===6100&&s.climb.t>=.30&&s.climb.t<=.39){art.actor.root.updateMatrixWorld(true);const p=art.actor.bones.Lfoot.matrixWorld.elements.slice(12,15);a(Math.abs(p[0]-(6100/60-.25))<.005);a(p[1]>=.083);planted++;}}a(planted>=4);
});
