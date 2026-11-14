"""Offline reference from actual Three mesh, camera and pose data. Not WebGL QA.
blender -b --python scripts/render-3d-reference.py -- input.json output.png
"""
import bpy,sys,json,math
from mathutils import Matrix,Vector
args=sys.argv[sys.argv.index('--')+1:];data=json.load(open(args[0]))
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
images={}
for key,spec in data.get('textures',{}).items():
 im=bpy.data.images.new(key,width=spec['width'],height=spec['height']);im.colorspace_settings.name='Non-Color';im.pixels.foreach_set([v/255 for v in spec['data']]);im.update();images[key]=im
def coord(v):return (v[0],-v[2],v[1])
for item in data['meshes']:
 p=item['positions'];indices=item['index'];me=bpy.data.meshes.new(item['name'] or 'mesh')
 me.from_pydata([coord(p[i:i+3]) for i in range(0,len(p),3)],[],[indices[i:i+3] for i in range(0,len(indices),3)]);me.update()
 if item.get('uv'):
  uv=me.uv_layers.new(name='UVMap');values=item['uv']
  for loop in me.loops:uv.data[loop.index].uv=values[loop.vertex_index*2:loop.vertex_index*2+2]
 ob=bpy.data.objects.new(me.name,me);bpy.context.collection.objects.link(ob)
 for spec in item['materials']:
  m=bpy.data.materials.new(spec['name'] or 'material');m.use_nodes=True;bs=m.node_tree.nodes.get('Principled BSDF')
  bs.inputs['Base Color'].default_value=(*spec['color'],1);bs.inputs['Roughness'].default_value=spec['roughness'];bs.inputs['Metallic'].default_value=spec['metalness']
  if spec.get('water') and not data.get('background'):bs.inputs['Base Color'].default_value=(.025,.09,.085,1);bs.inputs['Roughness'].default_value=.16;bs.inputs['Metallic'].default_value=.75
  if spec.get('emissive'):bs.inputs['Emission Color'].default_value=(*spec['emissive'],1);bs.inputs['Emission Strength'].default_value=spec['emissiveIntensity']
  if spec['opacity']<1:bs.inputs['Alpha'].default_value=spec['opacity']
  if spec['vertexColors'] and item['colors']:
   n=m.node_tree.nodes.new('ShaderNodeVertexColor');n.layer_name='Color';m.node_tree.links.new(n.outputs['Color'],bs.inputs['Base Color'])
  if spec.get('map'):
   nodes=m.node_tree.nodes;links=m.node_tree.links;tex=nodes.new('ShaderNodeTexImage');tex.image=images[spec['map']];tex.extension='REPEAT'
   mul=nodes.new('ShaderNodeMixRGB');mul.blend_type='MULTIPLY';mul.inputs[0].default_value=1;mul.inputs[1].default_value=(*spec['color'],1)
   if spec['vertexColors'] and item['colors']:links.new(n.outputs['Color'],mul.inputs[1])
   links.new(tex.outputs['Color'],mul.inputs[2]);links.new(mul.outputs[0],bs.inputs['Base Color'])
  if spec.get('roughnessMap'):
   tex=m.node_tree.nodes.new('ShaderNodeTexImage');tex.image=images[spec['roughnessMap']];tex.extension='REPEAT'
   mul=m.node_tree.nodes.new('ShaderNodeMath');mul.operation='MULTIPLY';mul.inputs[1].default_value=spec['roughness'];m.node_tree.links.new(tex.outputs['Color'],mul.inputs[0]);m.node_tree.links.new(mul.outputs[0],bs.inputs['Roughness'])
  me.materials.append(m)
 for group in item['groups']:
  for poly in me.polygons[group['start']//3:(group['start']+group['count'])//3]:poly.material_index=group['materialIndex']
 if item['colors']:
  layer=me.color_attributes.new(name='Color',type='FLOAT_COLOR',domain='POINT');c=item['colors'];n=item['colorSize']
  for i,x in enumerate(layer.data):x.color=(*c[i*n:i*n+3],1)
 for poly in me.polygons:poly.use_smooth=True
camera=bpy.data.cameras.new('Actual gameplay camera');ob=bpy.data.objects.new('Actual gameplay camera',camera);bpy.context.collection.objects.link(ob)
e=data['camera']['matrix'];three=Matrix([[e[col*4+row] for col in range(4)]for row in range(4)]);conv=Matrix(((1,0,0,0),(0,0,-1,0),(0,1,0,0),(0,0,0,1)));ob.matrix_world=conv@three
camera.sensor_fit='VERTICAL';camera.angle_y=math.radians(data['camera']['fov']);bpy.context.scene.camera=ob
for l in data['lights']:
 if l['type']=='HemisphereLight':continue
 typ='SUN' if l['type']=='DirectionalLight' else 'SPOT' if l['type']=='SpotLight' else 'POINT'
 ld=bpy.data.lights.new(l['type'],typ);ld.color=l['color'];ld.energy=l['intensity'] if typ=='SUN' else l['intensity']*12.56
 lo=bpy.data.objects.new(l['type'],ld);bpy.context.collection.objects.link(lo);lo.location=coord(l['position'])
 if l.get('target'):lo.rotation_euler=(Vector(coord(l['target']))-lo.location).to_track_quat('-Z','Y').to_euler()
 if typ=='SUN':ld.angle=.12
 if typ=='POINT':ld.shadow_soft_size=1
 if typ=='SPOT':ld.spot_size=1;ld.spot_blend=.8
s=bpy.context.scene;s.render.engine='CYCLES';s.cycles.device='CPU';s.cycles.samples=48;s.cycles.use_denoising=False
s.world.use_nodes=True;s.world.node_tree.nodes['Background'].inputs[0].default_value=(*data.get('background',[.15,.24,.23]),1);s.world.node_tree.nodes['Background'].inputs[1].default_value=.24
s.render.resolution_x=1280;s.render.resolution_y=720;s.render.resolution_percentage=100;s.view_settings.view_transform='AgX';s.render.filepath=args[1];bpy.ops.render.render(write_still=True)
