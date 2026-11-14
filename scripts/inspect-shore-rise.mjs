import {scene,snapshot} from './inspect-3d.mjs';
import fs from 'node:fs';import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),{frames}=require('../tests/conservatory-route.cjs').route(true),a=await scene(),rows=[];
for(const {state:s}of frames){a.render(s,1/60);if(s.climb&&s.x>7000){a.actor.root.updateMatrixWorld(true);rows.push({t:s.climb.t,pelvis:a.actor.bones.pelvis.matrixWorld.elements.slice(12,15),shoulder:a.actor.bones.Lupperarm.matrixWorld.elements.slice(12,15)});if(Math.abs(s.climb.t-.3)<.001&&process.argv[2])fs.writeFileSync(process.argv[2],JSON.stringify(snapshot(a)));}}
console.log(JSON.stringify(rows));
