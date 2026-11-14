import fs from 'node:fs';import {createRequire} from 'node:module';import {fileURLToPath} from 'node:url';
import {snapshot} from './inspect-3d.mjs';
import {Frontier3D} from '../dist/frontier-3d.mjs';
import {GLTFLoader} from '../dist/vendor/three/loaders/GLTFLoader.js';
const require=createRequire(import.meta.url);
export async function worldScene(){const b=fs.readFileSync(new URL('../dist/assets3d/traveller.glb',import.meta.url)),gltf=await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');const renderer={shadowMap:{},setPixelRatio(){},setSize(){},render(s,c){s.updateMatrixWorld(true);c.updateMatrixWorld(true);s.traverse(o=>{if(o.isSkinnedMesh)o.skeleton.update();});}};const art=new Frontier3D({getBoundingClientRect:()=>({width:1280,height:720})},{renderer,actor:gltf});await art.loading;return art;}
if(process.argv[1]===fileURLToPath(import.meta.url)){const chapter=process.argv[2]||'desert',x=+(process.argv[3]||900),a=await worldScene(),{frames}=require('../tests/frontier-route.cjs').route(chapter,true,require('../dist/world-logic.js'));let last;for(const s of frames){a.render(s,1/60);last=s;if(s.x>=x)break;}fs.writeFileSync(process.argv[4]||'/tmp/world.json',JSON.stringify(snapshot(a)));console.log(JSON.stringify({chapter,x:last.x,seconds:last.time,pose:a.actor.pose}));}
