"""Rebuild the CC0 derivatives from their public source recordings. Requires ffmpeg.
Original downloads stay in a temporary directory, not in the shipped game.
"""
import io, tempfile, urllib.request, zipfile, subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[1]
urls={
 'breath.wav':'https://opengameart.org/sites/default/files/breathing%20tired.wav',
 'wood.wav':'https://opengameart.org/sites/default/files/steps%20in%20wood%20floor.wav',
 'splash.wav':'https://opengameart.org/sites/default/files/splash1_0.wav',
 'sand.mp3':'https://opengameart.org/sites/default/files/sand_footsteps_0.mp3',
 'creak.flac':'https://opengameart.org/sites/default/files/tree_creak.flac',
 'rpg.zip':'https://opengameart.org/sites/default/files/RPGsounds_Kenney.zip',
 **{f'stone{i}.ogg':'https://opengameart.org/sites/default/files/'+('01-footstep_0' if i==1 else f'{i:02d}-footstep')+'.ogg' for i in [1,2,3]}}
with tempfile.TemporaryDirectory(prefix='nacre-foley-') as tmp:
 tmp=Path(tmp);out=root/'dist/assets/foley';out.mkdir(parents=True,exist_ok=True)
 for name,url in urls.items():
  with urllib.request.urlopen(url,timeout=30) as response:(tmp/name).write_bytes(response.read())
 with zipfile.ZipFile(tmp/'rpg.zip') as z:
  for name in ['cloth1.ogg','metalLatch.ogg']:(tmp/name).write_bytes(z.read('OGG/'+name))
 def clip(src,name,start=0,duration=None,gain=1,lp=6000,fade=.015):
  cmd=['ffmpeg','-v','error','-y','-ss',str(start),'-i',str(tmp/src)]
  if duration:cmd+=['-t',str(duration)]
  filt=f'highpass=f=65,lowpass=f={lp},volume={gain},afade=t=in:d={fade}'
  if duration:filt+=f',afade=t=out:st={max(0,duration-.05)}:d=0.05'
  subprocess.run(cmd+['-af',filt,'-ac','1','-ar','24000','-c:a','libmp3lame','-b:a','64k',str(out/(name+'.mp3'))],check=True)
 for i in [1,2,3]:clip(f'stone{i}.ogg',f'stone{i}',gain=3,lp=4000)
 for i,start in enumerate([.05,.54,1.08],1):clip('wood.wav',f'wood{i}',start,.40,.7,4000)
 for i,start in enumerate([.12,2.58,3.2],1):clip('sand.mp3',f'sand{i}',start,.36,.6,4500)
 clip('breath.wav','breath',0,3.17,4,3200);clip('splash.wav','splash',.38,2.1,.7,5000);clip('splash.wav','stroke',.55,.62,.3,3000)
 clip('cloth1.ogg','cloth',gain=1,lp=4200,fade=.025);clip('metalLatch.ogg','metal',gain=.5,lp=2300,fade=.025);clip('creak.flac','creak',gain=.8,lp=3200,fade=.025)
