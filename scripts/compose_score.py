"""NACRE v0.2: an original 104-second chamber-ambient score.
Reproducible modal piano, bowed harmonics and a diffuse stereo room.
No external recordings, generative API, MIDI soundfont or background noise bed.
"""
from pathlib import Path
import numpy as np
from scipy.signal import fftconvolve, butter, sosfilt
from scipy.io.wavfile import write
import subprocess, json
SR=24000; DURATION=104; N=SR*DURATION
rng=np.random.default_rng(94722)
mix=np.zeros((N,2),np.float64)
def hz(m):return 440*2**((m-69)/12)
def add(sig,start,volume,pan=0):
 i=int(start*SR);stop=min(N,i+len(sig));sig=sig[:stop-i]*volume
 if len(sig)<1:return
 mix[i:stop,0]+=sig*np.sqrt((1-pan)/2)
 mix[i:stop,1]+=sig*np.sqrt((1+pan)/2)
def piano(note,start,vol=.22,pan=0,reverse=False):
 dur=7.5;t=np.arange(int(SR*dur))/SR;f=hz(note);sig=np.zeros_like(t)
 detune=rng.normal(0,.00025)
 for k in range(1,13):
  freq=f*k*np.sqrt(1+.000035*k*k)
  decay=np.exp(-t/(3.8/(k**.6)))
  beating=(np.sin(2*np.pi*freq*t)+.42*np.sin(2*np.pi*freq*(1+detune)*t+rng.uniform(-.07,.07)))
  sig+=beating*decay*np.exp(-k*.25)/(k**.55)
 sig*=1-np.exp(-t/.014)
 sig*=np.minimum(1,(dur-t)/.7)
 if reverse:sig=sig[::-1].copy()*.35
 add(sig,start,vol,pan)
def bowed(note,start,duration,vol,pan):
 t=np.arange(int(SR*duration))/SR;f=hz(note);sig=np.zeros_like(t)
 attack=np.sin(np.minimum(t/3.0,1)*np.pi/2)**2
 release=np.sin(np.minimum((duration-t)/4.5,1)*np.pi/2)**2
 for voice in range(3):
  det=(voice-1)*.0013+rng.normal(0,.00015)
  slow=.0025*np.sin(t*.37+voice*1.9)+.0012*np.sin(t*1.1+voice)
  vib=.0017*np.sin(2*np.pi*4.6*t+voice)*np.minimum(t/2,1)
  phase=2*np.pi*np.cumsum(f*(1+det+slow+vib))/SR
  for k in range(1,8):
   breath=.82+.18*np.sin(t*(.22+k*.027)+voice+k)
   sig+=np.sin(phase*k+rng.random())*breath/(k**1.8)*np.exp(-k/5)
 sig*=attack*release/3
 add(sig,start,vol,pan)
# Pedal tones and deliberately unresolved upper voices. Long overlaps avoid chord blocks.
chords=[([45,52,59,60,64],0),([41,52,57,59,64],18),([38,53,57,60,64],36),([40,52,57,59,62],54),([45,52,59,60,64],72),([45,52,59,64],89)]
for notes,start in chords:
 for j,note in enumerate(notes):
  bowed(note,start+j*.21,min(26,DURATION-start-j*.21),.055 if j else .075,(j-2)*.29)
# A sparse, human-timed recurring motif. Silences matter more than density.
phrases=[(2.3,[69,76,71,72,67,71]),(21.2,[69,76,71,72,64,67]),(40.5,[69,72,76,74,72,71]),(59.4,[68,71,76,74,71,64]),(77.7,[69,76,71,72,79,76]),(92,[71,72,76,69])]
offsets=[0,2.65,5.75,7.2,11.35,14.8]
for p,(start,notes) in enumerate(phrases):
 for j,note in enumerate(notes):
  onset=start+offsets[j]+rng.uniform(-.11,.11)
  if onset<DURATION-5:piano(note,onset,.19+rng.uniform(-.035,.025),np.sin(j*2.1+p)*.27)
for start,note in [(15,76),(33,79),(51,76),(69,83),(88,76)]:piano(note,start,.13,.45,True)
# Felt-like high frequency damping, no looping hiss or wind source.
for c in range(2):mix[:,c]=sosfilt(butter(2,4300,fs=SR,output='sos'),mix[:,c])
wet=np.zeros_like(mix)
for c in range(2):
 length=int(SR*4.2);tt=np.arange(length)/SR
 ir=rng.normal(0,1,length)*np.exp(-tt/1.04)
 ir=sosfilt(butter(2,2600,fs=SR,output='sos'),ir)
 ir[:int(.045*SR)]=0
 ir/=np.sqrt(np.sum(ir*ir))
 wet[:,c]=fftconvolve(mix[:,c]*.78+mix[:,1-c]*.22,ir,mode='full')[:N]
 mix[:,c]+=wet[:,c]*.30
# Gentle long echo in the stereo field, then a true fade to silence at the loop seam.
for delay,gain in [(1.63,.11),(3.21,.065)]:
 d=int(delay*SR);mix[d:,0]+=mix[:-d,1]*gain;mix[d:,1]+=mix[:-d,0]*gain
fade=np.minimum(1,np.arange(N)/SR/3)*np.minimum(1,(N-1-np.arange(N))/SR/6)
mix*=fade[:,None]
peak=np.max(np.abs(mix));mix*=.80/peak
out=Path('/workspace/scratch/2d0625450850/nacre-score-v2.wav')
write(out,SR,(mix*32767).astype(np.int16))
dest=Path(__file__).resolve().parents[1]/'dist/assets/nacre-les-eaux-muettes.mp3'
subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(out),'-codec:a','libmp3lame','-b:a','160k','-ar','44100',str(dest)],check=True)
print(json.dumps({'duration_seconds':DURATION,'peak_dbfs':float(20*np.log10(np.max(np.abs(mix)))),'rms_dbfs':float(20*np.log10(np.sqrt(np.mean(mix**2)))),'bytes':dest.stat().st_size,'path':str(dest)}))
