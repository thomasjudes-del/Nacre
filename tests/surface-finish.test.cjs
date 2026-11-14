const test=require('node:test'),assert=require('node:assert/strict');

test('material masks are repeatable, bounded and mipmapped without external images',async()=>{
 const T=await import('../dist/vendor/three/three.module.js'),{finishMaps}=await import('../dist/surface-finish.mjs');
 const stone=finishMaps('stone'),again=finishMaps('stone'),bronze=finishMaps('bronze');
 assert.deepEqual(stone.map.image.data,again.map.image.data);
 assert.notDeepEqual(stone.map.image.data,bronze.map.image.data);
 for(const maps of [stone,bronze])for(const tex of Object.values(maps)){
  assert.equal(tex.image.width,128);assert.equal(tex.image.height,128);
  assert.equal(tex.wrapS,T.RepeatWrapping);assert.equal(tex.wrapT,T.RepeatWrapping);
  assert.equal(tex.minFilter,T.LinearMipmapLinearFilter);assert(tex.generateMipmaps);
  assert.equal(tex.colorSpace,T.NoColorSpace);
  const values=tex.image.data;assert(values.every(Number.isFinite));
  for(let i=3;i<values.length;i+=4)assert.equal(values[i],255);
  assert(Math.min(...values)>100);assert(new Set(values).size>15);
 }
});

test('surface finish preserves shape, vertex paint and shared materials',async()=>{
 const T=await import('../dist/vendor/three/three.module.js'),{SurfaceFinish}=await import('../dist/surface-finish.mjs');
 const geo=new T.BoxGeometry(2,3,4),paint=new T.BufferAttribute(new Float32Array(geo.attributes.position.count*3).fill(.3),3);
 geo.setAttribute('color',paint);
 const mat=new T.MeshStandardMaterial({color:0x506050,vertexColors:true}),root=new T.Group(),a=new T.Mesh(geo,mat),b=new T.Mesh(geo,mat);
 const untouched=new T.Mesh(geo,new T.MeshStandardMaterial()),actor=new T.SkinnedMesh(geo,mat);
 root.add(a,b,untouched,actor);const finish=new SurfaceFinish();finish.apply(root,m=>m===mat?'stone':null);
 assert.equal(a.material,b.material);assert.notEqual(a.material,mat);
 assert.deepEqual(a.material.color.toArray(),[1,1,1]);assert.notDeepEqual(mat.color.toArray(),[1,1,1]);
 assert.deepEqual(a.geometry.attributes.position.array,geo.attributes.position.array);
 assert.deepEqual(a.geometry.index.array,geo.index.array);
 assert.deepEqual(a.geometry.attributes.color.array,paint.array);
 assert.equal(a.geometry.attributes.uv.count,geo.attributes.position.count);
 assert(a.geometry.attributes.uv.array.every(Number.isFinite));
 assert.equal(a.material.map,finish.maps.stone.map);
 assert.equal(untouched.geometry,geo);assert.equal(untouched.material.map,null);assert.equal(actor.material,mat);
});

test('real conservatory shares four maps and keeps traveller and water untreated',async()=>{
 const {scene}=await import('../scripts/inspect-3d.mjs'),art=await scene(),maps=new Set();let treated=0;
 art.scene.traverse(o=>{if(!o.isMesh)return;for(const m of Array.isArray(o.material)?o.material:[o.material])if(m.map){
  treated++;maps.add(m.map);maps.add(m.roughnessMap);
  assert(o.geometry.attributes.uv.array.every(Number.isFinite));
  if(m.vertexColors)assert.deepEqual(m.color.toArray(),[1,1,1]);
  assert(!o.isSkinnedMesh);
 }});
 assert(treated>20);assert.equal(maps.size,4);assert(!art.water.material.map);
 art.actor.root.traverse(o=>{if(o.isMesh)for(const m of Array.isArray(o.material)?o.material:[o.material])assert(!m.map);});
});
