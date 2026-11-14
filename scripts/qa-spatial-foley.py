"""Create a temporary local Web Audio probe; remove dist/qa-spatial-foley.html before packaging."""
from pathlib import Path
Path('dist/qa-spatial-foley.html').write_text('''<!doctype html><meta charset="utf-8"><title>NACRE audio QA</title>
<button id="start">Vérifier le moteur audio</button><pre id="result">Prêt</pre>
<script src="cistern-pulse.js"></script><script src="ferry-motion.js"></script><script src="recorded-foley.js"></script>
<script>
start.onclick=async()=>{start.disabled=true;try{
 const ctx=new AudioContext(),fx=ctx.createGain();fx.gain.value=.2;fx.connect(ctx.destination);await ctx.resume();
 const f=new NacreRecordedFoley.RecordedFoley({ctx,fx,muted:false});await f.load();
 const s={chapter:'red',x:5760,y:400,pulseClock:2.5,onGround:true};
 f.play({name:'metal',gain:.3,sourceX:5760},s);
 const graph=[...f.graphs.values()][0];
 const initial={gain:graph.gain.gain.value,pan:graph.pan.pan.value};
 s.x=6050;f.tick(s,1/60);
 result.textContent=JSON.stringify({state:ctx.state,status:f.status,decoded:Object.keys(f.buffers).length,initial,stage:'Lecture et déplacement'},null,2);
 setTimeout(()=>{const moved={gain:graph.gain.gain.value,pan:graph.pan.pan.value};f.play({name:'creak',gain:.2,source:'ferry'},{chapter:'red',x:3700,ferryClock:3});
 const active=f.voices.size;f.stop();result.textContent=JSON.stringify({state:ctx.state,status:f.status,decoded:Object.keys(f.buffers).length,initial,moved,activeBeforeStop:active,voicesAfterStop:f.voices.size,graphsAfterStop:f.graphs.size,stage:'Terminé'},null,2);ctx.suspend();},800);
 }catch(e){result.textContent=String(e.stack||e);}}
</script>''')
