const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),G=require('../dist/controls.js');
const L=require('../dist/conservatory-logic.js');
test('conservatory route finishes through left jump and independent right hold gestures',()=>{
 const ctx={window:{NacreConservatoryLogic:L}};vm.runInNewContext(fs.readFileSync('dist/conservatory-pilot.js','utf8'),ctx);
 const pilot=ctx.window.NacreConservatoryPilot(),s=L.createState();let jump=false,holding=false,x=100,priorAxis=0,gestureJumps=0;
 const g=new G(e=>{if(e==='jump'){jump=true;gestureJumps++;}},()=>L.interactable(s));g.down(1,x,300,844,0);
 for(let i=0;i<9000&&!s.finished;i++){
  const intended=pilot(s),now=i/60,axis=intended.axis||0;
  if(axis!==priorAxis){x+=axis===0?-priorAxis*20:axis*40;g.move(1,x,300);priorAxis=axis;}
  if(intended.hold&&!holding){g.down(2,700,300,844,now);holding=true;}
  if(!intended.hold&&holding){g.up(2,now);holding=false;}
  if(intended.jump){g.move(1,x,300);g.move(1,x,270);}else g.move(1,x,300);
  g.tick(now);L.step(s,{axis:g.axis||0,jump,hold:g.veil});jump=false;
 }
 assert(s.finished,'touch-command route must finish');assert.equal(s.deaths,0);assert(gestureJumps>=4);assert(s.gateLatched);assert(s.x>L.C.bank);
});
