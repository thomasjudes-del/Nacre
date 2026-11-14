// Deterministic input policy used only by validation, never in the released game.
function policy(L,s,route){let input={},stage=route.stage||0;
if(stage===0){input.right=true;if(s.x>L.C.firstIris-130&&s.x<L.C.firstIris+70)input.veil=true;if(L.nearby(s)==='take')input.interact=true;if(s.x>930&&s.x<960)input.jump=true;if(s.seed==='held'&&L.nearby(s)==='place'){input={interact:true};stage=1;}}
else if(stage===1){stage=2;}
else if(stage===2){input.left=true;if(L.nearby(s)==='reflect'){input={interact:true,veil:true};stage=3;}}
else if(stage===3){if(!route.farReady){input.veil=true;if(s.charges[1]>.98)route.farReady=true;}else{input.right=true;if(L.nearby(s)==='retrieve'){input={};if(s.charges[0]>.85){input.interact=true;stage=4;}}}}
else if(stage===4){input.right=true;if(s.x>L.C.iris-170&&s.x<L.C.iris+80)input.veil=true;if(s.x>2750&&s.x<2780)input.jump=true;if(s.x>3310)stage=5;}
else if(stage===5){input.right=true;if(L.nearby(s)==='grab'){input={veil:true};stage=6;}}
else if(stage===6){input={left:true,veil:true};if(s.cartX<L.C.plate+5){input={};stage=7;}}
else if(stage===7){input.right=true;if(L.nearby(s)==='callLift'&&!route.calledLift){input.interact=true;route.calledLift=true;}if(s.x>s.cartX-115&&s.x<s.cartX+45)input.jump=true;if(s.x>4470)stage=8;}
else if(stage===8||stage===9){const i=stage-8,target=L.C.signals[i];input.veil=true;if(s.x<target-15)input.right=true;else if(s.x>target+18)input.left=true;else{const phase=s.watchTime%7.2;input.veil=phase>2.35&&phase<6.1;}if(s.signals[i]>=1)stage++;}
else if(stage===10){input.right=true;input.veil=!s.watchPassed;if(L.nearby(s)==='offer'){input={interact:true};stage=11;}}
if(L.C.hydraulic&&stage===10&&s.x>6000&&s.x<6560){if(s.x<6120&&(s.pond||0)<.99){input=s.x<6060?{right:true}:{veil:true};}else if(s.x>6380&&s.x<6465&&!s.transfer){input=s.x<6400?{right:true}:{interact:true};}else if(s.x>=6465&&(s.hydroGate||0)<.95)input={};}
route.stage=stage;return input;}
if(typeof module!=='undefined')module.exports={policy};else window.NacreTestRoute={policy};
