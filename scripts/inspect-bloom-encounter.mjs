import fs from 'node:fs';
import {createRequire} from 'node:module';
import {scene,snapshot} from './inspect-3d.mjs';
const require=createRequire(import.meta.url),L=require('../dist/conservatory-logic.js'),art=await scene(),s=L.recoverCheckpoint(5);
Object.assign(s,{x:7360,y:510,onGround:true,hunterTime:9,hunterX:6070,hunterRest:1,time:45,bloomOpen:Number(process.argv[2]||0)});
for(let i=0;i<90;i++)art.render(s,1/60);
fs.writeFileSync(process.argv[3]||'/tmp/bloom.json',JSON.stringify(snapshot(art)));
