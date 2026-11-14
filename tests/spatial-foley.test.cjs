const test=require('node:test'),a=require('node:assert/strict');
const A=require('../dist/recorded-foley.js'),L=require('../dist/world-logic.js');
function heard(x,clock){const s=L.createState('red');Object.assign(s,{x,pulseClock:clock,checkpoint:4,drainOpen:true});const b=new A.BodySounds();b.update(s,1/60);return b.update(s,1/60).filter(c=>Number.isInteger(c.vent));}
test('two valves remain separate sound sources across the old 5500 switch',()=>{
 // The second valve warns on both sides of the old arbitrary listener threshold.
 const before=heard(5499,10.5),after=heard(5501,10.5);
 a.equal(before.length,1);a.equal(after.length,1);a.equal(before[0].vent,1);a.equal(after[0].vent,1);
 a.equal(before[0].sourceX,5760);a.equal(after[0].sourceX,5760);
});
test('valve is heard from the dry approach and fades by the resting bay',()=>{
 a(heard(4810,2.5).some(c=>c.vent===0&&c.name==='metal'));
 a.equal(heard(6500,4.5).length,0);
});

test('overlapping phases are audible from both sides, and retain their opposite directions',()=>{
 const cues=heard(5490,2.5);a.deepEqual(cues.map(c=>c.vent),[0,1]);
 a.equal(cues[0].name,'metal');a.equal(cues[1].name,'stroke');
 a(A.spatialCue(cues[0],{chapter:'red',x:5490}).pan<0);
 a(A.spatialCue(cues[1],{chapter:'red',x:5490}).pan>0);
});
test('spatial gain, filter and room are continuous on approach, reversal and gallery exit',()=>{
 const cue={sourceX:5760,range:520,gain:.29};let prev;
 for(let x=5200;x<=6500;x++){
  const q=A.spatialCue(cue,{chapter:'red',x});a(q.gain>=0&&q.gain<=.29);a(q.wet>=.039&&q.wet<=.18);
  if(prev){a(Math.abs(prev.gain-q.gain)<.002);a(Math.abs(prev.cutoff-q.cutoff)<12);a(Math.abs(prev.wet-q.wet)<.001);}
  a.deepEqual(q,A.spatialCue(cue,{chapter:'red',x,face:-1}));prev=q;
 }
 a.equal(A.spatialCue(cue,{chapter:'red',x:6500}).gain,0);
 a(A.acousticSpace({chapter:'red',x:5500}).wet>A.acousticSpace({chapter:'red',x:6300}).wet);
 a.equal(A.spatialCue(cue,{chapter:'red',x:5760,swimming:true}).cutoff,1000);
});
test('foot materials match the wooden ferry and the mineral salt landing',()=>{
 a.equal(A.surface({chapter:'red',x:3700,y:400}),'wood');
 a.equal(A.surface({chapter:'red',x:4400,y:400}),'stone');
 a.equal(A.surface({chapter:'desert',x:8500,y:600}),'stone');
 a.equal(A.surface({chapter:'desert',x:7300,y:510}),'sand');
});
function context(){const nodes=[];const param=()=>({value:0,setValueAtTime(v){this.value=v;},setTargetAtTime(v){this.value=v;}});
 const node=()=>{const n={gain:param(),frequency:param(),delayTime:param(),pan:param(),playbackRate:param(),connect(){},disconnect(){this.disconnected=true;}};nodes.push(n);return n;};
 const ctx={state:'running',currentTime:0,createBufferSource:()=>({...node(),start(){},stop(){this.onended?.();}}),createGain:node,createBiquadFilter:node,createDelay:node,createStereoPanner:node};
 return {ctx,nodes,fx:node()};
}
test('a playing source follows listener distance; pause also clears delayed tails',()=>{
 const audio=context(),f=new A.RecordedFoley(audio);f.buffers.metal={};
 f.play({name:'metal',sourceX:5760,gain:.3},{chapter:'red',x:5760});
 const [src,g]=[...f.graphs.entries()][0];a.equal(g.gain.gain.value,.3);
 f.tick({chapter:'red',x:6050},1/60);a(g.gain.gain.value<.3);a(g.pan.pan.value<0);
 src.onended();a.equal(f.voices.size,0);a.equal(f.graphs.size,1);
 f.stop();a.equal(f.graphs.size,0);a(g.delay.disconnected);a(g.echo.disconnected);
 for(let i=0;i<16;i++)f.play({name:'metal',gain:.2},{chapter:'red',x:5000});
 a.equal(f.voices.size,8);f.stop();a.equal(f.voices.size,0);a.equal(f.graphs.size,0);
});
test('complete red route with new sound preserves simulation and retries reset valve cadence',()=>{
 const {route}=require('./frontier-route.cjs'),out=route('red',true,L),b=new A.BodySounds();let vents=new Set();
 for(const s of out.frames){const before=JSON.stringify(s);for(const cue of b.update(s,1/60))if(Number.isInteger(cue.vent))vents.add(cue.vent);a.equal(JSON.stringify(s),before);}
 a(out.s.finished);a.equal(out.s.deaths,0);a.deepEqual([...vents].sort(),[0,1]);
 b.reset();const s=L.createState('red');Object.assign(s,{x:4810,pulseClock:2.5});b.update(s,1/60);a(b.update(s,1/60).some(c=>c.vent===0));
});
