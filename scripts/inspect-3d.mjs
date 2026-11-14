/* CPU scene validation/export. This runs the real Three scene and animation,
 * but deliberately does not claim to exercise a WebGL driver or shader. */
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import * as T from '../dist/vendor/three/three.module.js';
import {GLTFLoader} from '../dist/vendor/three/loaders/GLTFLoader.js';
const require=createRequire(import.meta.url),root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
globalThis.window={NacreConvoy:require('../dist/convoy-logic.js'),NacreConservatoryView:require('../dist/conservatory-view.js')};
globalThis.devicePixelRatio=1;
const {ConservatoryArt}=await import('../dist/conservatory-art.mjs');
export async function scene(){
 const loader=new GLTFLoader();
 const assets=await Promise.all(['conservatory','traveller'].map(async name=>{const b=fs.readFileSync(path.join(root,'dist/assets3d',name+'.glb'));return loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');}));
 const renderer={shadowMap:{},info:{render:{calls:0,triangles:0}},setPixelRatio(){},setSize(){},render(s,c){s.updateMatrixWorld(true);c.updateMatrixWorld(true);s.traverse(o=>{if(o.isSkinnedMesh)o.skeleton.update();});}};
 const art=new ConservatoryArt({getBoundingClientRect:()=>({width:1280,height:720})},{renderer,assets});await art.loading;return art;
}
export function snapshot(art){
 const meshes=[],textures={};const tex=t=>{if(!t?.image?.data)return null;if(!textures[t.uuid])textures[t.uuid]={width:t.image.width,height:t.image.height,data:Array.from(t.image.data)};return t.uuid;};art.scene.updateMatrixWorld(true);
 art.scene.traverseVisible(o=>{if(!o.isMesh)return;const g=o.geometry,a=g.attributes.position,mats=Array.isArray(o.material)?o.material:[o.material];
 const positions=[],point=new T.Vector3();for(let i=0;i<a.count;i++){point.fromBufferAttribute(a,i);if(o.isSkinnedMesh)o.applyBoneTransform(i,point);point.applyMatrix4(o.matrixWorld);positions.push(...point.toArray().map(n=>+n.toFixed(5)));}
 const index=g.index?Array.from(g.index.array):Array.from({length:a.count},(_,i)=>i);
 const colors=g.attributes.color?Array.from(g.attributes.color.array).map(n=>+n.toFixed(4)):null;
 const material=m=>({name:m.name,color:(m.color||m.uniforms?.color?.value||new T.Color('#99aa99')).toArray(),roughness:m.roughness??.25,metalness:m.metalness??.1,opacity:m.uniforms?.opacity?.value??m.opacity??1,emissive:m.emissive?.toArray(),emissiveIntensity:m.emissiveIntensity??0,vertexColors:!!m.vertexColors,map:tex(m.map),roughnessMap:tex(m.roughnessMap),water:o===art.water});
 meshes.push({name:o.name,positions,index,colors,uv:g.attributes.uv?Array.from(g.attributes.uv.array):null,colorSize:g.attributes.color?.itemSize,groups:g.groups,materials:mats.map(material)});
 });
 const lights=[];art.scene.traverseVisible(o=>{if(o.isLight)lights.push({type:o.type,color:o.color.toArray(),intensity:o.intensity,position:o.getWorldPosition(new T.Vector3()).toArray(),target:o.target?.getWorldPosition(new T.Vector3()).toArray()});});
 return {background:art.scene.background?.toArray(),meshes,textures,lights,camera:{matrix:art.camera.matrixWorld.elements,fov:art.camera.fov,aspect:art.camera.aspect},fog:art.scene.fog.color.toArray(),note:'Actual Three scene / poses exported on CPU; Blender reference render, not a WebGL screenshot.'};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const art=await scene(),{frames}=require('../tests/conservatory-route.cjs').route(true),seconds=+(process.argv[2]||14.3);
 let s;for(let i=0;i<Math.min(frames.length,Math.floor(seconds*60));i++){s=frames[i].state;art.render(s,1/60);}
 const output=process.argv[3]||'/tmp/nacre-scene.json';fs.writeFileSync(output,JSON.stringify(snapshot(art)));console.log(JSON.stringify({output,seconds,pose:art.actor.pose,x:s.x,y:s.y,meshes:snapshot(art).meshes.length}));
}
