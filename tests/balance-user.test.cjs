const test=require('node:test'),assert=require('node:assert/strict'),L=require('../dist/conservatory-logic.js');
test('crate standing on the visible plate works without pixel-perfect alignment',()=>{
 for(const gap of [0,10,20,30,40]){const s=L.recoverCheckpoint(2);Object.assign(s,{boxX:L.plateX-gap,x:L.plateX-gap,y:438,onGround:true});for(let i=0;i<120;i++)L.step(s,{});assert.equal(s.platePressure,1,'dial reacts with gap '+gap);assert.equal(s.gate,1);L.step(s,{axis:1,jump:true});for(let i=0;i<180&&!s.gateLatched;i++)L.step(s,{axis:1});assert(s.gateLatched,'can reach ledge and pass with gap '+gap);assert.equal(s.deaths,0);}
});
test('partial overlap registers weight but a distant crate cannot open gate',()=>{
 const s=L.recoverCheckpoint(2);Object.assign(s,{boxX:L.plateX-80,x:L.plateX-80,y:438,onGround:true});for(let i=0;i<120;i++)L.step(s,{});assert(s.platePressure>0&&s.platePressure<.48);assert.equal(s.gate,0);assert.equal(L.plateCoverage(L.plateX-150),0);
});
test('return from closed gate works with a misaligned crate',()=>{
 for(const gap of [10,20,30,40]){const s=L.recoverCheckpoint(2);Object.assign(s,{x:2746,y:330,onGround:true,boxX:L.plateX-gap});for(let i=0;i<240;i++)L.step(s,{axis:s.x>s.boxX-10?-1:0});assert.equal(s.gate,1);assert(s.plateLoaded);L.step(s,{axis:1,jump:true});for(let i=0;i<180&&!s.gateLatched;i++)L.step(s,{axis:1});assert(s.gateLatched);assert.equal(s.deaths,0);}
});
