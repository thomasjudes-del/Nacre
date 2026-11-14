import fs from 'node:fs';
import {createRequire} from 'node:module';
import {scene,snapshot} from './inspect-3d.mjs';
const require=createRequire(import.meta.url),art=await scene(),{frames}=require('../tests/conservatory-route.cjs').route(true);
const end=frames.findIndex(f=>f.state.x>6750);
for(const f of frames.slice(Math.max(0,end-180),end+1))art.render(f.state,1/60);
fs.writeFileSync(process.argv[2]||'/tmp/wake.json',JSON.stringify(snapshot(art)));
