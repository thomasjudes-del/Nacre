import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
const base=fileURLToPath(new URL('..',import.meta.url)).replace(/\/$/,'');
const {scene,snapshot}=await import(base+'/scripts/inspect-3d.mjs');
const {createRequire}=await import('node:module'),require=createRequire(base+'/tests/living-scene.test.cjs'),L=require(base+'/dist/conservatory-logic.js');
const art=await scene();let s=L.createState();
for(let i=0;i<270;i++){L.step(s,{});art.render(s,1/60);if(i===32)fs.writeFileSync('/tmp/nacre-entry.json',JSON.stringify(snapshot(art)));}
fs.writeFileSync('/tmp/nacre-idle.json',JSON.stringify(snapshot(art)));
s=L.recoverCheckpoint(2);s.x=2100;for(let i=0;i<65;i++){L.step(s,{});art.render(s,1/60);}fs.writeFileSync('/tmp/nacre-moth.json',JSON.stringify(snapshot(art)));
