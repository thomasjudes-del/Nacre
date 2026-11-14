import fs from 'node:fs';
import {createRequire} from 'node:module';
import {worldScene} from './inspect-worlds.mjs';
import {snapshot} from './inspect-3d.mjs';
const require=createRequire(import.meta.url),L=require('../dist/world-logic.js');
const {frames}=require('../tests/frontier-route.cjs').route('red',true,L);
const stage=process.argv[2]||'drain',art=await worldScene();let state;
for(const s of frames){art.render(s,1/60);state={...s};if(stage==='gate'?s.x>=1760:s.drainOpen)break;}
if(stage==='drain')for(let i=0;i<90;i++){L.step(state,{});art.render(state,1/60);}
fs.writeFileSync(process.argv[3]||'/tmp/cistern.json',JSON.stringify(snapshot(art)));
console.log({stage,x:state.x,water:state.water,gate:state.gate,drainOpen:state.drainOpen});
