// CPU scene reference only: no WebGL context or browser capture.
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {worldScene} from './inspect-worlds.mjs';
import {snapshot} from './inspect-3d.mjs';
const require=createRequire(import.meta.url),L=require('../dist/world-logic.js');
const stage=process.argv[2]||'blast',art=await worldScene(),s=L.createState('red');
s.checkpoint=4;L.restart(s);s.x=stage==='rest'?6300:5000;s.pulseClock=stage==='warning'?2.5:4.5;
for(let i=0;i<90;i++)art.render(s,1/60);
fs.writeFileSync(process.argv[3]||'/tmp/gallery.json',JSON.stringify(snapshot(art)));
console.log(JSON.stringify({stage,x:s.x,pulseClock:s.pulseClock}));
