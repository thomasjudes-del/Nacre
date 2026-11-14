"""NACRE original skinned traveller. Blender 4.3+, no paid assets.
Run: blender -b --python scripts/build-character-3d.py
CMU 09_01 is retargeted from the project's three-dimensional joint table.
"""
import bpy, math, json, sys
from mathutils import Vector, Matrix, Quaternion
from pathlib import Path
R=Path(__file__).resolve().parents[1]
OUT=R/'dist/assets3d'; OUT.mkdir(exist_ok=True)
QA=R/'art-source/character-3d';QA.mkdir(exist_ok=True)
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
for a in list(bpy.data.actions):bpy.data.actions.remove(a)

def mat(name,color,rough=.7,metal=0):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
 bs=m.node_tree.nodes.get('Principled BSDF');bs.inputs['Base Color'].default_value=(*color,1);bs.inputs['Roughness'].default_value=rough;bs.inputs['Metallic'].default_value=metal
 return m
coat=mat('Petrol wool',(.045,.145,.14),.88)
coatLight=mat('Worn teal piping',(.08,.185,.18),.85)
lining=mat('Warm charcoal lining',(.055,.065,.063),.9)
pants=mat('Slate trousers',(.047,.061,.062),.9)
leather=mat('Weathered boots',(.055,.046,.039),.8)
skin=mat('Soft warm skin',(.42,.26,.18),.83)
skinShade=mat('Warm facial planes',(.29,.13,.085),.82)
hair=mat('Deep brown hair',(.025,.021,.019),.88)
hairLight=mat('Hair highlights',(.052,.041,.027),.84)
eye=mat('Eyes',(.018,.018,.016),.7)
bronze=mat('Aged brass',(.3,.23,.115),.55,.55)
scarf=mat('Undyed linen',(.28,.3,.255),.93)
objects=[]
# Coordinates are Blender: X forward, Z up, Y width. glTF converts to Y up.
J={'root':(0,0,.99),'spine':(.0,0,1.20),'chest':(.005,0,1.34),'neck':(.005,0,1.43),'head':(.02,0,1.52),'top':(.02,0,1.67)}
for side,s in [('L',1),('R',-1)]:
 J.update({side+'hip':(0,s*.088,.89),side+'knee':(.018,s*.09,.485),side+'ankle':(0,s*.083,.085),side+'toe':(.17,s*.083,.035),side+'shoulder':(0,s*.17,1.385),side+'elbow':(0,s*.265,1.105),side+'wrist':(.01,s*.31,.865),side+'hand':(.025,s*.32,.785)})
bones=[('pelvis','root','spine',None),('spine','spine','chest','pelvis'),('chest','chest','neck','spine'),('neck','neck','head','chest'),('head','head','top','neck')]
for side in ['L','R']:
 bones += [(side+'thigh',side+'hip',side+'knee','pelvis'),(side+'shin',side+'knee',side+'ankle',side+'thigh'),(side+'foot',side+'ankle',side+'toe',side+'shin'),(side+'upperarm',side+'shoulder',side+'elbow','chest'),(side+'forearm',side+'elbow',side+'wrist',side+'upperarm'),(side+'handbone',side+'wrist',side+'hand',side+'forearm')]
armD=bpy.data.armatures.new('Traveller skeleton');arm=bpy.data.objects.new('Traveller',armD);bpy.context.collection.objects.link(arm);bpy.context.view_layer.objects.active=arm;arm.select_set(True)
bpy.ops.object.mode_set(mode='EDIT')
for name,h,t,parent in bones:
 b=armD.edit_bones.new(name);b.head=J[h];b.tail=J[t]
 if parent:b.parent=armD.edit_bones[parent]
bpy.ops.object.mode_set(mode='OBJECT')

def mesh(name,verts,faces,material,weights=None):
 me=bpy.data.meshes.new(name);me.from_pydata(verts,[],faces);me.update();ob=bpy.data.objects.new(name,me);bpy.context.collection.objects.link(ob);ob.data.materials.append(material)
 for p in me.polygons:p.use_smooth=True
 if weights:
  for i,w in enumerate(weights):
   for n,v in w.items():
    vg=ob.vertex_groups.get(n) or ob.vertex_groups.new(name=n);vg.add([i],v,'REPLACE')
  mod=ob.modifiers.new('Skin','ARMATURE');mod.object=arm;ob.parent=arm
 objects.append(ob);return ob

def boneweights(b):return lambda p:{b:1}
def torso_weights(p):
 z=p[2]
 if z<.94:
  w=min(.65,(.94-z)/.22*.65);side='L'if p[1]>0 else'R';return {'pelvis':1-w,side+'thigh':w}
 if z<.98:return {'pelvis':1}
 if z<1.20:
  t=(z-.98)/.22;return {'pelvis':1-t,'spine':t}
 if z<1.34:
  t=(z-1.20)/.14;return {'spine':1-t,'chest':t}
 return {'chest':1}

def loft(name,rings,n,material,wfn,warp=None):
 verts=[]
 for z,cx,rx,ry in rings:
  for j in range(n):
   a=j*2*math.pi/n;p=(cx+rx*math.cos(a),ry*math.sin(a),z)
   if warp:p=warp(p,a,z)
   verts.append(p)
 faces=[]
 for i in range(len(rings)-1):
  for j in range(n):faces.append((i*n+j,i*n+(j+1)%n,(i+1)*n+(j+1)%n,(i+1)*n+j))
 faces += [tuple(range(n-1,-1,-1)),tuple((len(rings)-1)*n+j for j in range(n))]
 if name=='Tailored coat':
  verts=[(v[0]*1.14,v[1]*1.06,v[2])for v in verts]
 return mesh(name,verts,faces,material,[wfn(v)for v in verts])

def segment(name,a,b,radii,material,bone,segments=16):
 A=Vector(a);B=Vector(b);d=(B-A).normalized();u=d.cross(Vector((1,0,0)))
 if u.length<.1:u=d.cross(Vector((0,1,0)))
 u.normalize();v=d.cross(u).normalized();verts=[]
 for t,r1,r2 in radii:
  c=A+(B-A)*t
  for j in range(segments):
   th=j*2*math.pi/segments;verts.append(c+u*(math.cos(th)*r1)+v*(math.sin(th)*r2))
 faces=[]
 for i in range(len(radii)-1):
  for j in range(segments):faces.append((i*segments+j,i*segments+(j+1)%segments,(i+1)*segments+(j+1)%segments,(i+1)*segments+j))
 faces +=[tuple(range(segments-1,-1,-1)),tuple((len(radii)-1)*segments+j for j in range(segments))]
 return mesh(name,verts,faces,material,[{bone:1}for v in verts])

def limb(name,A,B,C,radii,material,upper,lower,n=24):
 A,B,C=Vector(A),Vector(B),Vector(C);verts=[];weights=[]
 for t,r1,r2 in radii:
  center=A+(B-A)*t if t<=1 else B+(C-B)*(t-1)
  if .8<t<1.2:
   blend=(t-.8)/.4;d=((B-A).normalized()*(1-blend)+(C-B).normalized()*blend).normalized()
  else:d=(B-A).normalized()if t<=1 else(C-B).normalized()
  u=d.cross(Vector((1,0,0))).normalized();v=d.cross(u).normalized()
  wt=max(0,min(1,(t-.76)/.48))
  for j in range(n):
   a=j/n*2*math.pi;verts.append(center+u*(r1*math.cos(a))+v*(r2*math.sin(a)));weights.append({upper:1-wt,lower:wt})
 faces=[]
 for i in range(len(radii)-1):
  for j in range(n):faces.append((i*n+j,i*n+(j+1)%n,(i+1)*n+(j+1)%n,(i+1)*n+j))
 faces+=[tuple(range(n-1,-1,-1)),tuple((len(radii)-1)*n+j for j in range(n))]
 return mesh(name,verts,faces,material,weights)

def ellipsoid(name,location,scale,material,bone=None,seg=24,rings=16):
 bpy.ops.mesh.primitive_uv_sphere_add(segments=seg,ring_count=rings,location=location);ob=bpy.context.object;ob.name=name
 for v in ob.data.vertices:v.co=Vector((v.co.x*scale[0],v.co.y*scale[1],v.co.z*scale[2]))+Vector(location)
 ob.location=(0,0,0);ob.data.materials.append(material)
 for p in ob.data.polygons:p.use_smooth=True
 if bone:
  vg=ob.vertex_groups.new(name=bone);vg.add(list(range(len(ob.data.vertices))),1,'REPLACE');mo=ob.modifiers.new('Skin','ARMATURE');mo.object=arm;ob.parent=arm
 objects.append(ob);return ob

def curve_mesh(name,points,radius,material,bone):
 cu=bpy.data.curves.new(name,'CURVE');cu.dimensions='3D';cu.resolution_u=8;cu.bevel_depth=radius;cu.bevel_resolution=2
 sp=cu.splines.new('BEZIER');sp.bezier_points.add(len(points)-1)
 for p,co in zip(sp.bezier_points,points):p.co=co;p.handle_left_type='AUTO';p.handle_right_type='AUTO'
 ob=bpy.data.objects.new(name,cu);bpy.context.collection.objects.link(ob);bpy.context.view_layer.objects.active=ob;ob.select_set(True);bpy.ops.object.convert(target='MESH');ob=bpy.context.object;ob.data.materials.append(material)
 vg=ob.vertex_groups.new(name=bone);vg.add(list(range(len(ob.data.vertices))),1,'REPLACE');mo=ob.modifiers.new('Skin','ARMATURE');mo.object=arm;ob.parent=arm;objects.append(ob);ob.select_set(False);return ob

# Tailored coat volume: soft waist, overlapping front panels, rounded shoulders.
loft('Tailored coat',[(.72,-.012,.125,.173),(.79,-.009,.126,.165),(.90,-.008,.115,.15),(1.02,-.008,.096,.128),(1.10,-.008,.096,.139),(1.22,-.005,.112,.163),(1.31,0,.105,.185),(1.36,0,.095,.183),(1.385,0,.081,.15),(1.40,0,.067,.10)],40,coat,torso_weights,lambda p,a,z:(p[0]+(.008*math.cos(5*a)*(1.2-z) if z<1.2 else 0),p[1],p[2]+(.018*math.cos(2*a)if z<.8 else 0)))
# Belt and front seam track the pelvis and upper body.
loft('Soft waist belt',[(1.028,-.008,.098,.13),(1.058,-.008,.10,.134)],40,lining,boneweights('pelvis'))
ellipsoid('Bronze clasp',(.095,-.025,1.048),(.008,.022,.017),bronze,'pelvis',16,8)
curve_mesh('Coat overlap seam',[(.113,-.027,.735),(.113,-.025,.86),(.098,-.023,1.025),(.105,-.022,1.16),(.102,-.018,1.29)],.0025,coatLight,'pelvis')
for z in [1.15,1.255]:ellipsoid('Small matte fastening',(.112,-.023,z),(.004,.008,.008),bronze,'spine',12,8)
# Neck is attached anatomically, with a linen collar and split lapels.
loft('Neck',[(1.385,.005,.041,.044),(1.46,.011,.039,.041),(1.49,.011,.044,.043)],24,skin,boneweights('neck'))
loft('Linen scarf collar',[(1.395,.001,.064,.079),(1.43,.004,.055,.062),(1.448,.007,.047,.052)],32,scarf,boneweights('neck'))
for s in [-1,1]:
 mesh('Folded coat lapel',[(.075,s*.05,1.43),(.105,s*.12,1.37),(.12,s*.063,1.255),(.10,s*.01,1.37)],[(0,1,2,3)],coatLight,[{'chest':1}]*4)
# Legs with formed thigh/knee/calves rather than straight cylinders.
for side,s in [('L',1),('R',-1)]:
 limb(side+' shaped trousers',J[side+'hip'],J[side+'knee'],J[side+'ankle'],[(0,.066,.069),(.2,.068,.07),(.5,.056,.061),(.8,.044,.048),(.9,.041,.045),(1,.04,.045),(1.1,.042,.047),(1.23,.043,.046),(1.5,.037,.040),(1.8,.029,.033),(2,.027,.031)],pants,side+'thigh',side+'shin')
 # Boot upper and shaped heel / toe box overlap without exposed ball joints.
 segment(side+' boot shaft',J[side+'ankle'],(.0,s*.083,.245),[(0,.037,.044),(.2,.04,.044),(.65,.037,.039),(1,.036,.039)],leather,side+'shin',20)
 ellipsoid(side+' boot foot',(.065,s*.083,.060),(.125,.045,.052),leather,side+'foot',28,12)
 ellipsoid(side+' boot sole',(.065,s*.083,.023),(.129,.047,.018),lining,side+'foot',28,10)
 curve_mesh(side+' boot stitch',[(-.022,s*.118,.085),(-.024,s*.119,.18),(.01,s*.118,.225)],.0016,coatLight,side+'shin')
 # Full sleeves shaped around shoulder and elbow with linen cuff.
 limb(side+' continuous tailored sleeve',J[side+'shoulder'],J[side+'elbow'],J[side+'wrist'],[(-.14,.004,.004),(-.09,.032,.033),(0,.061,.061),(.15,.065,.064),(.4,.058,.056),(.7,.047,.048),(.86,.044,.046),(1,.043,.044),(1.14,.043,.043),(1.4,.039,.038),(1.7,.034,.034),(2,.030,.031)],coat,side+'upperarm',side+'forearm')
 segment(side+' cuff',Vector(J[side+'wrist'])+Vector((0,0,.015)),Vector(J[side+'wrist'])+Vector((0,0,-.015)),[(0,.032,.033),(1,.031,.032)],coatLight,side+'forearm',20)
 # Palm silhouette includes a small thumb, not a sphere.
 segment(side+' hand',J[side+'wrist'],J[side+'hand'],[(0,.027,.025),(.22,.031,.026),(.5,.030,.026),(.82,.026,.020),(1,.017,.016)],skin,side+'handbone',20)
 ellipsoid(side+' thumb',(.038,s*.315,.833),(.022,.018,.034),skin,side+'handbone',16,10)
# Sculpted head. Ring widths form jaw, cheek, brow and cranium; front vertices form a nose.
def facewarp(p,a,z):
 x,y,zz=p;fr=max(0,math.cos(a))**24
 nose=.027*math.exp(-((z-1.563)/.018)**2)
 eyeInset=.009*math.exp(-((z-1.59)/.015)**2)
 x+=fr*(nose-eyeInset)
 return (x,y,zz)
loft('Sculpted face',[(1.47,.025,.035,.037),(1.485,.029,.050,.047),(1.51,.020,.065,.056),(1.535,.011,.073,.062),(1.56,.004,.078,.064),(1.585,.001,.077,.066),(1.61,-.002,.074,.065),(1.635,-.005,.070,.062),(1.657,-.01,.054,.05),(1.67,-.014,.022,.025)],48,skin,boneweights('head'),facewarp)
for s in [-1,1]:
 ellipsoid('Ear',(-.025,s*.065,1.56),(.018,.012,.029),skin,'head',20,12)
 ellipsoid('Ear fold',(-.022,s*.075,1.56),(.010,.0025,.016),skinShade,'head',16,10)
 ellipsoid('Dark attentive eye',(.062,s*.0415,1.588),(.010,.010,.0045),eye,'head',20,10)
 curve_mesh('Soft brow',[(.055,s*.027,1.605),(.062,s*.039,1.606),(.055,s*.052,1.601)],.0025,hair,'head')
curve_mesh('Quiet mouth',[(.079,-.018,1.524),(.083,0,1.522),(.079,.018,1.524)],.0017,skinShade,'head')
# Irregular short bob, swept across forehead; flat back planes avoid toy-like hair sphere.
verts=[];faces=[];n=48;nr=14
for k in range(nr):
 t=k/(nr-1)
 for j in range(n):
  a=j/n*2*math.pi;front=math.cos(a);limit=1.34 if front>.45 else (2.06 if front<-.2 else 1.8)
  phi=.02+t*limit;rx=.088;ry=.077
  x=-.014+rx*math.sin(phi)*math.cos(a);y=ry*math.sin(phi)*math.sin(a);z=1.592+.097*math.cos(phi)
  z+=.007*math.sin(3*a)*t;x+=.004*math.sin(7*a)*t
  verts.append((x,y,z))
for k in range(nr-1):
 for j in range(n):faces.append((k*n+j,k*n+(j+1)%n,(k+1)*n+(j+1)%n,(k+1)*n+j))
mesh('Swept short hair',verts,faces,hair,[{'head':1}]*len(verts))
for s in [-1,1]:
 curve_mesh('Swept fringe',[(.0,s*.015,1.683),(.05,s*.038,1.66),(.077,s*.052,1.62),(.048,s*.061,1.594)],.006,hair,'head')
 curve_mesh('Temple lock',[(-.004,s*.073,1.65),(-.025,s*.08,1.605),(-.044,s*.072,1.548)],.007,hairLight,'head')
# Curved rear satchel, old survey equipment, subtle leather shoulder strap.
ellipsoid('Flat field satchel',(-.118,.085,1.075),(.044,.085,.11),lining,'pelvis',24,16)
curve_mesh('Satchel shoulder strap',[(-.075,.11,1.19),(-.09,.13,1.35),(.025,.13,1.385),(.105,.075,1.24),(.103,.012,1.08),(.09,-.08,1.01)],.010,leather,'chest')

# Join body meshes, preserving named vertex groups/materials; one skin, shared motion.
bpy.ops.object.select_all(action='DESELECT')
for ob in objects:ob.select_set(True)
bpy.context.view_layer.objects.active=objects[0];bpy.ops.object.join();body=bpy.context.object;body.name='TravellerMesh'
# One armature modifier after joining; all pieces share identical skeleton coordinates.
for mod in list(body.modifiers):body.modifiers.remove(mod)
mod=body.modifiers.new('Full body skin','ARMATURE');mod.object=arm
body.parent=arm

# Animation retargeting from source 3D joints.
D=json.load(open(R/'art-source/mocap/loop.json'));idx={n:i for i,n in enumerate(D['keys'])};scale=.016
mapping={'root':'root','spine':'upperback','chest':'thorax','neck':'lowerneck','head':'upperneck','top':'head'}
for side,src in [('L','l'),('R','r')]:
 mapping.update({side+'hip':src+'hipjoint',side+'knee':src+'femur',side+'ankle':src+'tibia',side+'toe':src+'toes',side+'shoulder':src+'clavicle',side+'elbow':src+'humerus',side+'wrist':src+'radius',side+'hand':src+'hand'})
rest={k:Vector(v) for k,v in J.items()}
for pb in arm.pose.bones:pb.rotation_mode='QUATERNION'

def pose_targets(target,frame):
 # Global bone matrices are solved in hierarchy order; local keyed transforms export to glTF.
 for name,h,t,parent in bones:
  pb=arm.pose.bones[name];a=Vector(target[h]);b=Vector(target[t]);base=arm.data.bones[name]
  q=(base.tail_local-base.head_local).normalized().rotation_difference((b-a).normalized())
  M=q.to_matrix().to_4x4()@base.matrix_local;M.translation=a
  pb.matrix=M;bpy.context.view_layer.update()
 for pb in arm.pose.bones:
  pb.keyframe_insert('location',frame=frame);pb.keyframe_insert('rotation_quaternion',frame=frame);pb.keyframe_insert('scale',frame=frame)

def newaction(name):
 arm.animation_data_create();a=bpy.data.actions.new(name);arm.animation_data.action=a;return a

def finishaction(a,end):
 for fc in a.fcurves:
  for k in fc.keyframe_points:k.interpolation='LINEAR'
 track=arm.animation_data.nla_tracks.new();track.name=a.name;strip=track.strips.new(a.name,1,a);strip.action_frame_start=1;strip.action_frame_end=end
 arm.animation_data.action=None;track.mute=True
 return track
tracks=[]
a=newaction('run')
for i in range(D['period']+1):
 f=D['frames'][i%D['period']];target={}
 for k,src in mapping.items():
  x,y,z=f[idx[src]];target[k]=Vector((x*scale,z*scale,-y*scale))
 # Retain natural 3D pelvis/shoulder swing; small crown extension uses captured neck direction.
 target['top']=target['head']+(target['top']-target['head'])*1.10
 pose_targets(target,i+1)
tracks.append(finishaction(a,D['period']+1))
a=newaction('idle')
for i in range(0,241,12):
 phase=i/240*2*math.pi;t={k:v.copy()for k,v in rest.items()}
 for k in ['spine','chest','neck','head','top','Lshoulder','Rshoulder','Lelbow','Relbow','Lwrist','Rwrist','Lhand','Rhand']:
  t[k].x+=.004*math.sin(phase);t[k].z+=.004*(1-math.cos(phase))
 pose_targets(t,i+1)
tracks.append(finishaction(a,241))
a=newaction('jump')
for i,phase in [(0,0),(18,1),(48,2),(78,3),(96,4)]:
 t={k:v.copy()for k,v in rest.items()}
 if phase in [1,2,3]:
  for side,s in [('L',1),('R',-1)]:
   t[side+'knee']+=Vector((.11 if side=='L' else -.10,0,.11))
   t[side+'ankle']+=Vector((-.11 if side=='L' else -.17,0,.20))
   t[side+'toe']+=Vector((-.11 if side=='L' else -.17,0,.20))
   t[side+'elbow']+=Vector((-.07,0,.08));t[side+'wrist']+=Vector((.10,0,.18));t[side+'hand']+=Vector((.13,0,.20))
 pose_targets(t,i+1)
tracks.append(finishaction(a,97))
a=newaction('crouch')
for i in [0,120]:
 t={k:v.copy()for k,v in rest.items()}
 for k in t:
  if k not in ['Lankle','Rankle','Ltoe','Rtoe']:t[k].z-=.35
 for side in ['L','R']:
  t[side+'knee'].x+=.25;t[side+'knee'].z=.27
  for k in ['elbow','wrist','hand']:t[side+k].x+=.16
 for k in ['chest','neck','head','top']:t[k].x+=(rest[k].z-1.0)*.48
 pose_targets(t,i+1)
tracks.append(finishaction(a,121))
# Original crouched locomotion: planted support feet, opposite arm swing,
# pelvis weight transfer and a small counter-motion in the head. No new mocap.
a=newaction('crouchwalk')
stride=1.55; support=.60
for i in range(0,121,3):
 phase=i/120; wave=math.sin(phase*2*math.pi)
 t={k:v.copy() for k,v in rest.items()}
 for k in t: t[k].z-=.35
 for k in ['root','spine','chest','neck','head','top','Lhip','Rhip','Lshoulder','Rshoulder','Lelbow','Relbow','Lwrist','Rwrist','Lhand','Rhand']:
  t[k].z+=.012*math.cos(phase*4*math.pi)
  t[k].y+=.012*wave
 for k in ['chest','neck','head','top']:t[k].x+=(rest[k].z-1.0)*.48
 for side,off,sign in [('L',0,1),('R',.5,-1)]:
  f=(phase+off)%1; span=stride*support
  if f<support:
   x=span/2-stride*f; lift=0
  else:
   u=(f-support)/(1-support); h=u*u*(3-2*u)
   x=-span/2+span*h-stride*(1-support)*(2*u**3-3*u*u+u)
   lift=.105*math.sin(math.pi*u)**2
  ankle=Vector((x,sign*.09,.085+lift)); hip=t[side+'hip']
  t[side+'ankle']=ankle;t[side+'toe']=ankle+Vector((.17,0,-.05))
  # Two-link knee solve keeps the thigh and shin lengths unchanged.
  l1=(rest[side+'hip']-rest[side+'knee']).length;l2=(rest[side+'knee']-rest[side+'ankle']).length
  d=ankle-hip;length=d.length;d.normalize();pole=Vector((1,0,0));pole=(pole-d*pole.dot(d)).normalized()
  along=(l1*l1-l2*l2+length*length)/(2*length)
  t[side+'knee']=hip+d*along+pole*math.sqrt(max(0,l1*l1-along*along))
  swing=-sign*.065*wave
  t[side+'shoulder'].x+=sign*.018*wave
  for k in ['elbow','wrist','hand']:
   t[side+k].x+=.16+swing*(1 if k=='elbow' else 1.4)
  t[side+'wrist'].z+=.05;t[side+'hand'].z+=.05
 t['head'].x-=.005*wave;t['top'].x-=.005*wave
 pose_targets(t,i+1)
tracks.append(finishaction(a,121))
a=newaction('swim')
rot=Matrix.Rotation(math.radians(76),3,'Y')
for i in range(0,181,6):
 phase=i/180*2*math.pi;t={k:Vector((0,0,.99))+rot@(v-rest['root']) for k,v in rest.items()}
 t['top']=t['head']+Vector((.015,0,.15))
 for side,offset in [('L',0),('R',math.pi)]:
  s=1 if side=='L'else-1;p=phase+offset;shoulder=t[side+'shoulder']
  t[side+'elbow']=shoulder+Vector((.10+.18*math.cos(p),s*.11,-.12+.07*math.sin(p)))
  t[side+'wrist']=shoulder+Vector((.12+.38*math.cos(p-.35),s*.12,-.15+.13*math.sin(p-.35)))
  t[side+'hand']=t[side+'wrist']+Vector((.075*math.cos(p),s*.015,-.015))
  t[side+'knee'].z+=.04*math.sin(p);t[side+'ankle'].z+=.065*math.sin(p-.4);t[side+'toe'].z+=.065*math.sin(p-.4)
 pose_targets(t,i+1)
tracks.append(finishaction(a,181))
# Reset neutral and export all NLA tracks separately.
arm.animation_data.action=None
for tr in tracks:tr.mute=False
for pb in arm.pose.bones:pb.matrix_basis=Matrix.Identity(4)
bpy.context.scene.render.fps=120
bpy.ops.object.select_all(action='DESELECT');arm.select_set(True);body.select_set(True);bpy.context.view_layer.objects.active=arm
bpy.ops.export_scene.gltf(filepath=str(OUT/'traveller.glb'),export_format='GLB',use_selection=True,export_animations=True,export_animation_mode='NLA_TRACKS',export_anim_slide_to_zero=True,export_force_sampling=True,export_frame_range=False,export_skins=True,export_morph=False,export_yup=True)
print('EXPORTED',OUT/'traveller.glb', 'vertices',len(body.data.vertices),'triangles',sum(len(p.vertices)-2 for p in body.data.polygons))
if '--export-only' in sys.argv: sys.exit(0)
# QA: neutral portrait and two running phases, rendered with physically consistent soft light.
for tr in tracks:tr.mute=True
arm.animation_data.action=bpy.data.actions['idle'];bpy.context.scene.frame_set(1)
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=32;scene.cycles.use_denoising=False
scene.render.resolution_x=960;scene.render.resolution_y=960;scene.render.resolution_percentage=100
scene.world.color=(.12,.12,.12)
scene.view_settings.view_transform='AgX'
bpy.ops.mesh.primitive_plane_add(size=200,location=(0,0,-.002));floor=bpy.context.object;floor.data.materials.append(mat('QA floor',(.07,.085,.087),.9))
def area(name,pos,power,color,size):
 bpy.ops.object.light_add(type='AREA',location=pos);l=bpy.context.object;l.name=name;l.data.energy=power;l.data.color=color;l.data.shape='DISK';l.data.size=size;l.rotation_euler=(Vector((0,0,1))-l.location).to_track_quat('-Z','Y').to_euler()
area('Pearl window',(3,-4,5),460,(.72,.85,1),4)
area('Warm reflected edge',(-2,3,3),500,(1,.66,.38),3)
area('Soft front',(4,4,2.5),150,(.6,.8,.85),3)
bpy.ops.object.camera_add(location=(3.6,-6,2.2));cam=bpy.context.object;cam.rotation_euler=(Vector((0,0,.94))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=2.15;scene.camera=cam
scene.render.filepath=str(QA/'traveller-idle.png');bpy.ops.render.render(write_still=True)
arm.animation_data.action=bpy.data.actions['run'];scene.frame_set(18)
scene.render.filepath=str(QA/'traveller-run.png');bpy.ops.render.render(write_still=True)
arm.animation_data.action=bpy.data.actions['swim'];scene.frame_set(35)
scene.render.filepath=str(QA/'traveller-swim.png');bpy.ops.render.render(write_still=True)
bpy.ops.wm.save_as_mainfile(filepath=str(QA/'traveller-source.blend'))
