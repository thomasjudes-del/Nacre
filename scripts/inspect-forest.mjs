import fs from 'node:fs';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {snapshot} from './inspect-3d.mjs';
import {GLTFLoader} from '../dist/vendor/three/loaders/GLTFLoader.js';
import {ForestArt} from '../dist/forest-art.mjs';
const require=createRequire(import.meta.url),L=require('../dist/forest-logic.js'),{createPilot}=(globalThis.NacreForest=L,require('../dist/forest-pilot.js'));
window.NacreForest=L;
export function route(){const s=L.createState(),pilot=createPilot(),frames=[];for(let i=0;i<12000&&!s.finished;i++){L.step(s,pilot(s),1/60);frames.push(structuredClone(s));}return frames;}
export async function scene(){const b=fs.readFileSync(new URL('../dist/assets3d/traveller.glb',import.meta.url)),actor=await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');const renderer={shadowMap:{},setPixelRatio(){},setSize(){},render(s,c){s.updateMatrixWorld(true);c.updateMatrixWorld(true);s.traverse(o=>{if(o.isSkinnedMesh)o.skeleton.update();});}};const art=new ForestArt({getBoundingClientRect:()=>({width:1280,height:720})},{actor,renderer});await art.loading;return art;}
if(process.argv[1]===fileURLToPath(import.meta.url)){const art=await scene(),frames=route(),target=+(process.argv[2]||1300);let state;for(const s of frames){art.render(s,1/60);state=s;if(s.x>=target)break;}const output=process.argv[3]||'/tmp/forest.json';fs.writeFileSync(output,JSON.stringify(snapshot(art)));console.log(JSON.stringify({output,state:{x:state.x,hunterX:state.hunterX,swimming:state.swimming},route:{seconds:frames.at(-1).time,finished:frames.at(-1).finished,deaths:frames.at(-1).deaths}}));}
