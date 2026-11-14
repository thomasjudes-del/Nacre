"""Convert the CMU 09_01 ASF/AMC running capture to a compact side-view loop.
FK follows ASF bone axis bases, root channels and the published hierarchy.
No runtime dependencies: output is a plain JS data table.
"""
from pathlib import Path
import re,json
import numpy as np
from scipy.spatial.transform import Rotation
root=Path(__file__).resolve().parents[1]
asf=(root/'art-source/mocap/09.asf').read_text();amc=(root/'art-source/mocap/09_01.amc').read_text()
bones={}
for block in re.findall(r'begin(.*?)end',asf.split(':bonedata')[1].split(':hierarchy')[0],re.S):
 d={};
 for line in block.splitlines():
  v=line.split()
  if v and v[0] in ['name','direction','length','axis','dof']:d[v[0]]=v[1:]
 if not d:continue
 d['C']=Rotation.from_euler('xyz',[float(x)for x in d['axis'][:3]],degrees=True).as_matrix();d['offset']=np.array(list(map(float,d['direction'])))*float(d['length'][0]);bones[d['name'][0]]=d
children={}
for line in asf.split(':hierarchy')[1].splitlines():
 v=line.split()
 if len(v)>1:children[v[0]]=v[1:]
frames=[]
for line in amc.splitlines():
 v=line.split()
 if not v or v[0][0] in '#:':continue
 if v[0].isdigit():frames.append({})
 else:frames[-1][v[0]]=list(map(float,v[1:]))
xyz=[]
for f in frames:
 pos={'root':np.array(f['root'][:3])};rot={'root':Rotation.from_euler('xyz',f['root'][3:],degrees=True).as_matrix()}
 def visit(parent):
  for name in children.get(parent,[]):
   d=bones[name];angles=[0.,0.,0.]
   for axis,value in zip(d.get('dof',[]),f.get(name,[])):angles['xyz'.index(axis[1])]=value
   C=d['C'];M=Rotation.from_euler('xyz',angles,degrees=True).as_matrix();rot[name]=rot[parent]@C@M@C.T;pos[name]=pos[parent]+rot[name]@d['offset'];visit(name)
 visit('root');xyz.append(pos)
keys=['root','lowerback','upperback','thorax','lowerneck','upperneck','head','lhipjoint','lfemur','ltibia','lfoot','ltoes','rhipjoint','rfemur','rtibia','rfoot','rtoes','lclavicle','lhumerus','lradius','lhand','rclavicle','rhumerus','rradius','rhand']
P=np.array([[p[k]for k in keys]for p in xyz]);vel=P[-1,0]-P[0,0];vel[1]=0;forward=vel/np.linalg.norm(vel);side=np.cross(forward,[0,1,0]);
ground=np.quantile(P[:,[keys.index(k)for k in ['ltoes','rtoes','lfoot','rfoot']],1],.02);height=np.median(P[:,keys.index('head'),1])-ground;scale=100/height
Q=np.zeros((len(P),len(keys),3));Q[:,:,0]=np.einsum('ijk,k->ij',P-P[:,0:1],forward)*scale;Q[:,:,1]=-(P[:,:,1]-ground)*scale;Q[:,:,2]=np.einsum('ijk,k->ij',P-P[:,0:1],side)*scale
# Find a full left/right gait cycle with the best position continuity.
best=(1e9,0,0)
for start in range(20,min(160,len(P)-105)):
 for period in range(65,100):
  if start+period>=len(P):continue
  err=np.mean((Q[start]-Q[start+period])**2)
  if err<best[0]:best=(err,start,period)
err,start,period=best;data=Q[start:start+period].copy()
# Close the tiny capture seam by distributing endpoint drift through the cycle.
drift=Q[start+period]-Q[start]
for i in range(period):data[i]-=drift*i/period
stride=np.dot(P[start+period,0]-P[start,0],forward)*scale
payload={'source':'CMU Graphics Lab 09_01','fps':120,'start':start,'period':period,'stride':round(float(stride),4),'keys':keys,'frames':np.round(data,3).tolist()}
(root/'dist/run-capture.js').write_text('(function(r){const d='+json.dumps(payload,separators=(',',':'))+';if(typeof module!=="undefined")module.exports=d;r.NacreRunCapture=d;})(typeof window!=="undefined"?window:globalThis);\n')
print({'frames':len(frames),'loop':(start,period),'rms_seam':float(err**.5),'stride':stride,'height':height,'scale':scale,'forward':forward.tolist(),'ground':ground})
(root/'art-source/mocap/loop.json').write_text(json.dumps(payload,indent=2))
