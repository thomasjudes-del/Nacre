const test=require('node:test'),assert=require('node:assert/strict'),shots=require('../trailer/edit-v5.json');
test('V5 retains distinct real-time gameplay intervals and a frame-exact unresolved pursuit',()=>{
 assert.equal(shots.reduce((n,s)=>n+Math.round(s.d*30),0),1395);
 for(let i=0;i<shots.length;i++){const a=shots[i];assert.ok(Math.abs(a.b-a.a-a.d)<1e-8);for(const b of shots.slice(i+1))if(a.m===b.m)assert.ok(a.b<=b.a||b.b<=a.a);}
 const last=shots.at(-1);assert.equal(last.m,'conv');const frames=require('./convoy-route.cjs').route(true).frames.map(f=>f.state),s=frames[Math.floor((last.b-1/30)*60)];assert.equal(s.swimming,false);assert.ok(s.hunterTime>0);assert.ok(s.y>510);assert.equal(s.finished,false);
});
