"""NACRE: a fully polygonal conservatory, authored procedurally in Blender.

Run: blender -b --python scripts/build-conservatory-3d.py
All authoring helpers use glTF coordinates: X forward, Y up, Z toward camera.
There are no texture dependencies or downloaded third-party assets.
"""
import bpy, math, random, json
from pathlib import Path
from mathutils import Vector

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'dist/assets3d/conservatory.glb'
PREVIEW = Path('/workspace/scratch/b90ecc47e9fb/nacre-conservatory-3d.png')
random.seed(7341)
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
for m in list(bpy.data.materials): bpy.data.materials.remove(m)

def material(name, color, rough=.7, metal=0, emission=0, alpha=1):
    m=bpy.data.materials.new(name); m.diffuse_color=(*color,alpha);m.use_nodes=True
    p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,alpha)
    p.inputs['Roughness'].default_value=rough;p.inputs['Metallic'].default_value=metal
    if emission:
        p.inputs['Emission Color'].default_value=(*color,1);p.inputs['Emission Strength'].default_value=emission
    if alpha<1:
        p.inputs['Alpha'].default_value=alpha
        m.surface_render_method='DITHERED'
    return m

M=[material('Limestone | pearl ash',(.36,.43,.38),.78),
   material('Limestone | wet sage',(.235,.32,.285),.62),
   material('Limestone | pale cut edge',(.48,.51,.425),.71),
   material('Basalt | submerged',(.052,.105,.107),.82),
   material('Bronze | oxidised',(.13,.235,.208),.52,.58),
   material('Bronze | worn edge',(.35,.29,.16),.4,.65),
   material('Living roots | dark jade',(.055,.13,.095),.94),
   material('Leaves | silver green',(.18,.29,.21),.84),
   material('Membrane | smoked jade',(.12,.25,.225),.35,.22),
   material('Warm stone | amber dust',(.36,.245,.16),.78),
   material('Distant glazing | pale aqua',(.15,.29,.275),.5,.15),
   material('Lantern pearl | warm',(.98,.66,.30),.4,0,.7),
   material('Moss | sea green',(.095,.19,.125),.98)]

# Vertex pigmentation is portable to glTF and avoids runtime texture downloads.
for mi,m in enumerate(M):
    if mi==11:continue
    node=m.node_tree.nodes.new('ShaderNodeVertexColor');node.layer_name='Patina'
    m.node_tree.links.new(node.outputs['Color'],m.node_tree.nodes.get('Principled BSDF').inputs['Base Color'])

# Buckets by room and material retain efficient frustum culling in the browser.
B={}
def bucket(mi,x):
    key=(int(max(0,min(4,x//28))),mi)
    if key not in B:B[key]=[[],[]]
    return B[key]
def add(verts,faces,mi=0):
    if not verts:return
    v,f=bucket(mi,sum(p[0] for p in verts)/len(verts)); offset=len(v)
    v.extend([(x,-z,y) for x,y,z in verts]); f.extend([tuple(i+offset for i in face) for face in faces])

def box(x,y,z,w,h,d,mi=0,bevel=0):
    # Chamfered horizontal outline makes cut stone read as a crafted solid.
    b=min(bevel,w*.22,d*.22)
    pts=[(-w/2+b,-d/2),(w/2-b,-d/2),(w/2,-d/2+b),(w/2,d/2-b),(w/2-b,d/2),(-w/2+b,d/2),(-w/2,d/2-b),(-w/2,-d/2+b)] if b else [(-w/2,-d/2),(w/2,-d/2),(w/2,d/2),(-w/2,d/2)]
    verts=[(x+a,y+hh,z+c) for hh in [-h/2,h/2] for a,c in pts];n=len(pts)
    faces=[tuple(range(n-1,-1,-1)),tuple(range(n,2*n))]+[(i,(i+1)%n,(i+1)%n+n,i+n)for i in range(n)]
    add(verts,[tuple(reversed(f)) for f in faces],mi)

def tube(points,r,mi=4,sides=6, taper=1):
    pts=[Vector(p) for p in points]; verts=[];faces=[]
    for i,p in enumerate(pts):
        t=(pts[min(len(pts)-1,i+1)]-pts[max(0,i-1)]).normalized()
        reference=Vector((0,0,1)) if abs(t.z)<.9 else Vector((0,1,0))
        u=t.cross(reference).normalized();v=t.cross(u).normalized()
        rr=(r[i]if isinstance(r,list)else r*(1-(1-taper)*i/max(1,len(pts)-1)))
        for k in range(sides):verts.append(tuple(p+(u*math.cos(k*math.tau/sides)+v*math.sin(k*math.tau/sides))*rr))
        if i:
            for k in range(sides):a=(i-1)*sides+k;b=(i-1)*sides+(k+1)%sides;faces.append((a,b,b+sides,a+sides))
    faces.extend([tuple(range(sides-1,-1,-1)),tuple(range((len(pts)-1)*sides,len(pts)*sides))]);add(verts,faces,mi)

def lathe(x,z,profile,mi=4,n=12):
    verts=[(x+r*math.cos(k*math.tau/n),y,z+r*math.sin(k*math.tau/n)) for y,r in profile for k in range(n)]
    faces=[]
    for j in range(len(profile)-1):
        for k in range(n):a=j*n+k;b=j*n+(k+1)%n;faces.append((a,b,b+n,a+n))
    add(verts,[tuple(reversed(f)) for f in faces],mi)

def arch(cx,z,width,base,height,mi=4,r=.055):
    pts=[]
    for i in range(25):
        t=math.pi*i/24
        pts.append((cx-width*.5*math.cos(t),base+height*math.sin(t)**.86,z))
    tube(pts,r,mi,6)

def leaf(origin,tip,width,mi=7):
    o=Vector(origin);t=Vector(tip);m=o.lerp(t,.48);direction=t-o
    side=direction.cross(Vector((0,0,1))).normalized()*width
    if side.length<.001:side=Vector((width,0,0))
    ridge=m+Vector((0,.025,.07));verts=[tuple(o),tuple(m-side),tuple(t),tuple(m+side),tuple(ridge)]
    add(verts,[(0,1,4),(1,2,4),(2,3,4),(3,0,4)],mi)

def frond(x,y,z,size=1,seed=0):
    rr=random.Random(seed);length=size*rr.uniform(.7,1.35);dx=rr.uniform(-.7,.7)*size;dz=rr.uniform(-.6,.6)*size
    points=[(x+dx*t,y+length*(t-.3*t*t),z+dz*t)for t in [i/8 for i in range(9)]]
    tube(points,.012*size,6,4,taper=.15)
    for j in range(1,8):
        p=Vector(points[j]);u=j/8;span=math.sin(u*math.pi)*.45*size
        for sign in [-1,1]:leaf(tuple(p),tuple(p+Vector((span*sign,.12*size,-.07*size))),.08*size)

def root(x,y,z,scale=1,seed=0):
    rr=random.Random(seed)
    # Forks have tapering growth, rather than constant-radius cables.
    for branch in range(3):
        span=rr.uniform(1.2,2.8)*scale;side=rr.choice([-1,1]);pts=[]
        for j in range(9):
            t=j/8;pts.append((x+side*span*t,y+.22*scale*math.sin(t*math.pi)+.06*math.sin(5*t),z+.45*scale*t*rr.uniform(.8,1.1)))
        tube(pts,.10*scale,6,5,taper=.06)

def rock(x,y,z,sx,sy,sz,seed=0,mi=3):
    rr=random.Random(seed);verts=[];faces=[];n=9
    for j in range(6):
        phi=-math.pi/2+j*math.pi/5
        for k in range(n):
            th=k*math.tau/n;v=rr.uniform(.86,1.12)
            verts.append((x+sx*math.cos(phi)*math.cos(th)*v,y+sy*math.sin(phi),z+sz*math.cos(phi)*math.sin(th)*v))
    for j in range(5):
        for k in range(n):a=j*n+k;b=j*n+(k+1)%n;faces.append((a,b,b+n,a+n))
    add(verts,[tuple(reversed(f))for f in faces],mi)

def quay(a,b,top=0):
    w=b-a
    box((a+b)/2,top-1.55,0,w,3.05,3.25,3)
    # Distinct cornice, recessed channel and massive lower foundation.
    for depth,height,h,mi in [(1.7,top-.23,.18,2),(1.59,top-.48,.2,1),(1.49,top-.77,.34,0)]:
        box((a+b)/2,height,depth,w,h,.18,mi,.04)
    n=max(1,int(w/1.4))
    for i in range(n):
        x=a+(i+.5)*w/n
        for zz in [-.78,.78]:
            mi=0 if random.random()<.6 else 1
            box(x,top-.09,zz,w/n-.025,.17,1.53,mi,.065)
            if i%5==1:
                # Narrow fossil seams in the paving catch grazing light.
                tube([(x-.42,top+.002,zz-.35),(x-.05,top+.003,zz-.12),(x+.23,top+.002,zz+.23)],.012,5,4)
        # Ashlar blocks on the visible, wet quay face.
        for row in range(2):
            xx=x+(.25 if row else 0)
            if xx+w/n/2>b:continue
            box(xx,top-1.08-row*.66,1.615,w/n-.055,.61,.11,1 if i%3 else 0,.045)
        if i%4==0:
            box(x,top-1.55,1.74,.22,2.3,.33,1,.055)
        if i%7==0:root(x,top-.03,-1.32,.5,i+int(a))
    # Vertical broken ends are visually closed even beside water.
    for x in [a+.07,b-.07]:box(x,top-.24,0,.14,.48,3.4,2,.04)

quay(-5,43.1666667);quay(43.1666667,50.1666667,3);quay(50.1666667,65.3333333)
quay(68,101.6666667);quay(120,132)
for a,b,h in [(8.1666667,10.1666667,.6666667),(95,96.5,.75)]:
    box((a+b)/2,h/2,0,b-a,h,2.6,0,.12)
    box((a+b)/2,h-.065,0,b-a+.06,.13,2.68,2,.06)
    for x in [a+.2,b-.2]:box(x,h*.43,1.32,.15,h*.7,.08,5,.02)

# Open side pools and low submerged buttresses deepen the near plane.
for a,b in [(-8,43),(50,65.33),(68,101.66),(120,136)]:
    box((a+b)/2,-3.45,-3.3,b-a,.25,4,3)
for x in range(-3,136,8):
    box(x,-2.3,-2.6,.65,4.2,1.4,3,.12)
    box(x,-.72,-3.2,.8,.22,2.2,1,.08)

# Each bay is genuinely spatial: rear arcade, roof ribs and secondary distant arcade.
for x in range(-4,137,8):
    zone=9 if 52<x<89 else 0
    for z,scale in [(-3.05,1),(-12.7,.93)]:
        box(x,-.57,z,1.1,1.14,1.05,3,.16)
        box(x,.18,z,.92,.36,.9,2,.1)
        lathe(x,z,[(.36,.39),(.49,.39),(.55,.29),(.72,.26),(6.8,.18),(7.05,.26),(7.18,.32),(7.35,.32)],zone,12)
        # Tapered external flutes and collar rings.
        for k in range(6):
            t=k*math.tau/6;tube([(x+.245*math.cos(t),.7,z+.245*math.sin(t)),(x+.17*math.cos(t),6.82,z+.17*math.sin(t))],.025,4,5)
        lathe(x,z,[(1.02,.275),(1.10,.275),(1.13,.24),(6.45,.19),(6.54,.24),(6.61,.24)],5,12)
    # Transverse curved roof carries repeated glass tracery overhead.
    roof=[(x,7.3+5.1*math.sin(i*math.pi/24),-3.05-9.65*i/24)for i in range(25)]
    tube(roof,.085,4,7)
    roof2=[(x+.19,y-.18,z)for _,y,z in roof];tube(roof2,.026,5,5)
    for j in [4,8,12,16,20]:
        _,y,z=roof[j];tube([(x-.24,y-.2,z),(x+.24,y-.2,z)],.028,5,5)
    for z in [-3.05,-12.7]:
        arch(x+4,z,8,6.9,4.25,4,.095)
        arch(x+4,z+.035,7.5,7.0,3.78,5,.022)
        # Art-nouveau pointed crown, two curved curling forms inside the spandrel.
        for side in [-1,1]:
            pts=[(x+4+side*(1.4*math.sin(t*math.pi)),9.35+1.25*t,z+.02)for t in [i/16 for i in range(17)]]
            tube(pts,.028,5,5)
        # Clerestory mullions with irregular missing panes.
        for k in range(1,8):
            px=x+k
            if random.random()<.75:
                yy=6.9+4.25*math.sqrt(max(0,1-((k-4)/4)**2))
                tube([(px,6.85,z),(px,yy,z)],.025,4,5)
        tube([(x,6.9,z),(x+8,6.9,z)],.05,4,6)
    # Ground-level rear arched doors bring depth without obscuring the path.
    arch(x+4,-12.65,6.3,.8,5.1,4,.09)
    tube([(x+.85,.7,-12.65),(x+.85,1.0,-12.65)],.09,4)
    for k in range(1,7):
        px=x+.85+k*.9;hh=.8+5.1*math.sqrt(max(0,1-((px-(x+4))/3.15)**2))
        tube([(px,.7,-12.7),(px,hh,-12.7)],.04,4,6)
    box(x+4,.32,-12.8,7.75,.63,.48,zone,.09)
    # Aged wall panels behind the trellis, fully opaque for predictable sorting.
    if x%24==4:
        # Fractured panes retain irregular shards instead of closing the whole bay.
        add([(x+.2,.64,-13.1),(x+3.6,.64,-13.1),(x+2.7,3.0,-13.1),(x+.2,5.2,-13.1)],[(0,1,2,3)],10)
        add([(x+4.5,6.6,-13.1),(x+7.7,6.6,-13.1),(x+7.7,2.1,-13.1)],[(0,1,2)],10)

# A second receding colonnade, visually separate from the playable greenhouse.
for x in range(-10,145,12):
    box(x,3.4,-23,.78,7.5,.9,3,.09)
    arch(x+6,-23,12,6.8,4.8,4,.14)
    box(x+6,2.7,-24,11.7,6,.4,8,.07)

# Roof ridge and long delicate purlins. Not a screen-filling opaque ceiling.
for z,y in [(-3.1,7.35),(-5.6,10.9),(-7.8,12.25),(-10.1,10.9),(-12.7,7.35)]:
    for a,b in [(-7,39),(42,85),(89,138)]:tube([(a,y,z),(b,y,z)],.06,4,6)

# A few surviving leaded roof panes, in the background plane only.
for x in range(0,136,8):
    if x%24==0:continue
    for z,y in [(-11.3,9.75),(-9.7,11.5)]:
        verts=[(x+.1,y-.35,z-.65),(x+7.85,y-.35,z-.65),(x+7.85,y+.35,z+.65),(x+.1,y+.35,z+.65)]
        add(verts,[(0,1,2,3)],10)

# Botanical specimens rooted behind the route, individually shaped.
for i in range(52):
    x=random.uniform(-4,135);z=random.uniform(-11,-3.3);y=random.uniform(.05,.2)
    size=random.uniform(.55,1.45)
    rock(x,y-.48,z,size*.6,.52,size*.45,i,3)
    rock(x+.1,y-.05,z,size*.42,.13,size*.34,i+200,7)
    for j in range(3):frond(x+random.uniform(-.1,.1),y,z,size*(.7+j*.15),i*11+j)
    if i%3==0:root(x,y,z,random.uniform(.7,1.2),i+100)

# Long dark vines wrap selected columns with asymmetrical branches and taper.
for i,x in enumerate(range(4,135,16)):
    z=-3.15
    pts=[(x+.42*math.sin(j*.75),j*.52,z+.32*math.cos(j*.75))for j in range(15)]
    tube(pts,[.13*(1-j/18)for j in range(15)],6,6)
    for j in [3,7,11]:
        p=pts[j]
        branch=[p,(p[0]+.7,p[1]+.3,p[2]-.1),(p[0]+1.1,p[1]+.8,p[2]-.3)]
        tube(branch,.052,6,5,taper=.05)
        for k in [1,2]:leaf(branch[k],(branch[k][0]+.38,branch[k][1]+.15,branch[k][2]+.08),.16)

# Fossil reliefs under the quay are understated authored curves.
for x in [3,15,32,56,72,88,99,123]:
    pts=[]
    for j in range(41):
        t=j/40*math.pi*3.8;r=.48*(1-j/43)
        pts.append((x+r*math.cos(t),-1.15+r*math.sin(t),1.70))
    tube(pts,.027,2,5)

# Large nacre rings hang in the far depth, with broken chains and warm cores.
for i,x in enumerate([12,36,59,86,111,128]):
    z=-8.4;cy=5.7
    for r,mi,th in [(1.23,4,.07),(1.08,5,.026),(.76,4,.028)]:
        pts=[(x+r*math.cos(j*math.tau/48),cy+r*math.sin(j*math.tau/48),z)for j in range(49)];tube(pts,th,mi,6)
    tube([(x,cy+1.25,z),(x,10.8,z)],.025,4,5)
    for k in range(8):
        a=k*math.tau/8;tube([(x+.78*math.cos(a),cy+.78*math.sin(a),z),(x+1.2*math.cos(a),cy+1.2*math.sin(a),z)],.018,5,5)
    # Interior small pearl has warm surface, actual point lighting left to game.
    lathe(x,z,[(cy-.2,.035),(cy-.12,.12),(cy+.12,.1),(cy+.23,.02)],11,12)

# Near edge tufts and limited cropped foreground structure, never crossing the path.
for i,x in enumerate([-3,13,30,52,70,90,122,131]):
    for j in range(4):frond(x+j*.18,-.35,3.9,1.1,i*31+j)
for x in [-5,37,85,134]:
    lathe(x,4.5,[(-3,.48),(-.6,.4),(-.4,.49),(-.2,.49),(0,.33),(7.5,.25),(8,.45)],3,12)

# Warm fractured exit portal, separated from the swimming area.
for x in [123,129]:
    box(x,3.3,-5.8,.62,6.6,.65,2,.1)
arch(126,-5.8,6,6.4,2.1,5,.12)
box(126,3.9,-6.0,5.9,7.6,.12,11,.08)
for x in [124.3,125.15,126,126.85,127.7]:tube([(x,.0,-5.77),(x,7.4,-5.77)],.032,4,5)

objects=[]
for (room,mi),(verts,faces) in sorted(B.items()):
    mesh=bpy.data.meshes.new(f'Room{room}_{M[mi].name}');mesh.from_pydata(verts,[],faces);mesh.update()
    obj=bpy.data.objects.new(mesh.name,mesh);bpy.context.collection.objects.link(obj);obj.data.materials.append(M[mi]);objects.append(obj)
    if mi!=11:
        colors=mesh.color_attributes.new(name='Patina',type='FLOAT_COLOR',domain='POINT')
        base=M[mi].diffuse_color
        for i,v in enumerate(mesh.vertices):
            x,zz,h=v.co;depth=-zz
            cloud=.88+.055*math.sin(x*1.31+depth*.7)+.045*math.sin(x*.42-h*.68)+.025*math.cos(depth*3.1+x*2.3)
            wet=.74+.26*max(0,min(1,(h+.15)/2.4)) if mi in [0,1,2,4,5,9] else 1
            grain=cloud*wet
            colors.data[i].color=(base[0]*grain,base[1]*grain,base[2]*grain,1)
    # Smooth only tubes/small polygons; stone remains intentionally faceted.
    if mi in [4,5,6,7,11]:
        for p in mesh.polygons:p.use_smooth=True

OUT.parent.mkdir(parents=True,exist_ok=True)
bpy.ops.object.select_all(action='DESELECT')
for o in objects:o.select_set(True)
bpy.context.view_layer.objects.active=objects[0]
bpy.ops.export_scene.gltf(filepath=str(OUT),export_format='GLB',use_selection=True,export_animations=False,export_cameras=False,export_lights=False,export_yup=True,export_materials='EXPORT',export_extras=True)
tris=sum(sum(max(0,len(p.vertices)-2)for p in o.data.polygons)for o in objects)
print('NACRE_ENV_STATS',json.dumps({'meshes':len(objects),'triangles':tris,'bytes':OUT.stat().st_size}))

# Offline proof image. Lighting/camera aren't shipped with the GLB.
scene=bpy.context.scene
scene.render.engine='CYCLES';scene.cycles.samples=40
scene.cycles.use_denoising=False
scene.world.color=(.15,.2,.19)
scene.world.use_nodes=True
scene.world.node_tree.nodes['Background'].inputs[0].default_value=(.18,.27,.27,1)
scene.world.node_tree.nodes['Background'].inputs[1].default_value=.12

def location(p):return Vector((p[0],-p[2],p[1]))
def light(name,p,color,power,size=8):
    data=bpy.data.lights.new(name,'AREA');data.energy=power;data.color=color;data.shape='DISK';data.size=size
    o=bpy.data.objects.new(name,data);scene.collection.objects.link(o);o.location=location(p)
    o.rotation_euler=(location((p[0]-1,0,-2))-o.location).to_track_quat('-Z','Y').to_euler()
    return o
for x in range(0,140,12):light('Skylight',(x,12,-1),(.54,.85,.83),700,7)
for x in [11,35,58,84,111,127]:light('Warm bounce',(x,5,-6),(.95,.61,.28),650,4)
light('Camera fill',(15,5,9),(.45,.63,.62),180,12)
bpy.ops.object.camera_add(location=location((15,5,18)))
cam=bpy.context.object;cam.rotation_euler=(location((18,1.5,0))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.lens=38;scene.camera=cam
scene.render.resolution_x=1440;scene.render.resolution_y=810;scene.render.resolution_percentage=100
scene.view_settings.view_transform='AgX';scene.view_settings.look='AgX - Medium High Contrast';scene.view_settings.exposure=.35
scene.render.image_settings.file_format='PNG';scene.render.filepath=str(PREVIEW)
bpy.ops.wm.save_as_mainfile(filepath='/workspace/scratch/b90ecc47e9fb/nacre-conservatory-3d.blend')
bpy.ops.render.render(write_still=True)
