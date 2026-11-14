const L=require('../dist/frontier-logic.js');
function route(chapter,capture=false,logic=L){const L=logic;const s=L.createState(chapter),frames=[];let released=false,wound=false,vented=false,filled=false;
for(let i=0;i<6000&&!s.finished;i++){let axis=1,jump=false,hold=false;
if(chapter==='desert'){
 if(s.x>780&&!released){hold=true;if(s.stoneX>=1117){hold=false;released=true;}}
 if(released&&s.x<1180&&s.onGround)jump=true;
 if(s.x>1260&&s.bridge<.95)axis=0;
 if(L.crust&&s.x>8150&&s.x<8220&&s.onGround)jump=true;
 if(L.saltWeather&&s.x>=4800&&s.x<6800){const w=L.saltWeather(s);if(w.sheltered&&w.phase>=3.5)axis=0;}
 if(s.shutter!==undefined&&s.x>2560&&s.x<2665&&!wound){axis=0;hold=true;if(s.shutter>.99){wound=true;hold=false;}}
}else{
 if(!released&&s.x>=490){axis=0;hold=true;if(s.pressure>.98){released=true;hold=false;}}
 if(s.x>675&&s.x<700&&s.onGround)jump=true;
 if(s.x>1030&&s.x<1120&&s.water<.76)axis=0;
 if(s.x>1140&&s.x<1220&&s.onGround)jump=true;
 if(L.ferryX&&s.x>3400&&s.x<4200){const ferry=L.ferryX(s);if(s.x<3540){if(ferry>3700)axis=0;}else if(s.x<4200){axis=0;if(s.ferryFill>=.98)filled=true;if(L.catchment&&!filled&&!s.exitLatched&&ferry<4000){const offset=s.x-ferry;axis=offset<14?1:offset>25?-1:0;hold=offset>6&&offset<66&&L.catchment(s.ferryClock)>.65;}else if(ferry>=4050){axis=1;if(s.x>4140&&s.onGround)jump=true;}}}
 if(s.drain!==undefined){
  if(s.x>2140&&s.x<2245&&!vented){axis=0;hold=true;if(s.drainOpen){vented=true;hold=false;}}
  if(vented&&s.x>2300&&s.water>.14)axis=0;
  if(s.onGround&&((s.x>2620&&s.x<2680)||(s.x>2870&&s.x<2930)||(s.x>3130&&s.x<3200)))jump=true;
 }
}
if(L.pulse&&chapter==='red'&&s.x>4750)axis=exitAxis(s,L);
const input={axis,hold,jump};L.step(s,input);if(capture)frames.push({...s});}
return{s,frames};}
function exitAxis(s,L){for(let i=0;i<L.pulse.vents.length;i++){const p=L.pulse.sample(s,i);if(s.x>p.x-p.half-100&&s.x<p.x-p.half-35&&p.phase>=1&&p.phase<7.2)return 0;}return 1;}
module.exports={route,exitAxis};if(require.main===module)for(const c of ['desert','red']){const {s}=route(c);console.log(c,s);}
