import fs from 'node:fs';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {snapshot} from './inspect-3d.mjs';
import {GLTFLoader} from '../dist/vendor/three/loaders/GLTFLoader.js';
import {SerreArt} from '../dist/serre-art.mjs';
const require=createRequire(import.meta.url),L=require('../dist/serre-logic.js'),{policy}=require('../tests/route.cjs');
window.NacreLogic=L;
export function route(){const s=L.createState(),p={},frames=[];s.started=true;for(let i=0;i<18000&&!s.finished;i++){L.step(s,policy(L,s,p),1/60);frames.push(structuredClone(s));}return frames;}
export async function scene(){const b=fs.readFileSync(new URL('../dist/assets3d/traveller.glb',import.meta.url)),actor=await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');const renderer={shadowMap:{},setPixelRatio(){},setSize(){},render(s,c){s.updateMatrixWorld(true);c.updateMatrixWorld(true);s.traverse(o=>{if(o.isSkinnedMesh)o.skeleton.update();});}};const art=new SerreArt({getBoundingClientRect:()=>({width:1280,height:720})},{actor,renderer});await art.loading;return art;}
if(process.argv[1]===fileURLToPath(import.meta.url)){const art=await scene(),frames=route(),target=+(process.argv[2]||1280);let state;for(const s of frames){art.render(s,1/60);state=s;if(s.x>=target)break;}const output=process.argv[3]||'/tmp/serre.json';fs.writeFileSync(output,JSON.stringify(snapshot(art)));console.log(JSON.stringify({output,state:{x:state.x,seed:state.seed,lift:state.lift},route:{seconds:frames.at(-1).time,finished:frames.at(-1).finished,falls:frames.at(-1).fallCount}}));}
