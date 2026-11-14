import fs from 'node:fs';
import {createRequire} from 'node:module';
import {scene,snapshot} from './inspect-3d.mjs';
const require=createRequire(import.meta.url),L=require('../dist/conservatory-logic.js'),art=await scene();
const s=structuredClone(require('../tests/conservatory-route.cjs').route(true).frames.find(f=>f.state.swimming&&f.state.x>6500).state);
for(let i=0;i<300;i++){L.step(s,{axis:-1});art.render(s,1/60);if(s.climb?.edge===6100&&s.climb.t>=.30){fs.writeFileSync(process.argv[2]||'/tmp/bank-return.json',JSON.stringify(snapshot(art)));break;}}
