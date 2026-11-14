const test=require('node:test'),assert=require('node:assert/strict'),L=require('../dist/convoy-logic.js'),{route}=require('./convoy-route.cjs'),{Motion}=require('../dist/motion.js');
const advance=(s,seconds,input={})=>{for(let i=0;i<Math.round(seconds*60);i++)L.step(s,input);return s;};
test('complete convoy route uses ordinary inputs, climbs, hides, escapes and swims',()=>{const {s,frames}=route(true);assert.equal(s.finished,true);assert.equal(s.deaths,0);assert.ok(s.time>35&&s.time<50);for(const key of ['grabbing','climb','swimming','escaped'])assert.ok(frames.some(f=>f.state[key]));assert.ok(frames.some(f=>f.state.crouch===1));assert.ok(frames.some(f=>f.state.hunterTime>0));});
test('running blindly into the first search has consequences',()=>{const s=L.createState();for(let i=0;i<600&&!s.deaths;i++)L.step(s,{axis:1});assert.equal(s.deaths,1);assert.equal(s.checkpoint,1);});
test('physical covers shield the traveller through the complete search cycle',()=>{const s=Object.assign(L.createState(),{x:1240,scanTime:0,vehicleTime:5,checkpoint:1});advance(s,12);assert.equal(s.deaths,0);assert.equal(s.crouch,1);});
test('the high ledge cannot be bypassed by repeated jumps without the box',()=>{const s=Object.assign(L.createState(),{x:2560,searchPassed:true,scanTime:9});for(let i=0;i<600;i++)L.step(s,{axis:1,jump:s.onGround});assert.ok(s.x<L.C.wall);assert.equal(s.deaths,0);});
test('held contact pushes and pulls the box, releasing restores running',()=>{const s=Object.assign(L.createState(),{x:2210,searchPassed:true,scanTime:9});advance(s,1,{axis:1,hold:true});assert.ok(s.boxX>2380);const at=s.boxX;advance(s,.5,{axis:-1,hold:true});assert.ok(s.boxX<at);assert.equal(s.face,1);advance(s,.35,{axis:-1});assert.equal(s.grabbing,false);assert.equal(s.vx,-320);assert.ok(Math.abs(s.boxV)<.01);});
test('first pursuit catches a traveller who stops in its path',()=>{const s=Object.assign(L.createState(),{x:3260,searchPassed:true,checkpoint:3});for(let i=0;i<180&&!s.deaths;i++)L.step(s,{});assert.equal(s.deaths,1);advance(s,1);assert.equal(s.checkpoint,3);assert.equal(s.chaseTime,-1);});
test('leaving the culvert while the second patrol watches causes a retry',()=>{const s=Object.assign(L.createState(),{x:4950,escaped:true,inspection:1,checkpoint:4,searchPassed:true});advance(s,.5);assert.equal(s.deaths,1);advance(s,1);assert.equal(s.x,4560);assert.equal(s.escaped,true);assert.equal(s.inspection<1,true);});
test('waiting for the patrol opens a crossing window without an interaction button',()=>{const s=Object.assign(L.createState(),{x:4630,escaped:true,inspection:1,checkpoint:4,searchPassed:true});advance(s,7.4);advance(s,2,{axis:1});assert.equal(s.deaths,0);assert.ok(s.x>5100);});
test('jumping in the low culvert cannot penetrate its roof',()=>{const s=Object.assign(L.createState(),{x:4600,escaped:true,inspection:9,searchPassed:true});advance(s,1,{jump:true});assert.equal(s.jumps,0);assert.ok(s.y>=495);});
test('swimming replaces lethal falling, and the pursuing custodian stops at the bank',()=>{const s=Object.assign(L.createState(),{x:6200,y:590,escaped:true,inspection:9,searchPassed:true,hunterTime:3,hunterX:6000,checkpoint:5});advance(s,5,{axis:1});assert.equal(s.deaths,0);assert.ok(s.x>7100);assert.equal(s.hunterX,L.C.dive-30);assert.ok(s.y<650);advance(s,2,{axis:1});assert.equal(s.finished,true);});
test('pause freezes patrols, pursuit and locomotion',()=>{const s=Object.assign(L.createState(),{paused:true,inspection:4,scanTime:3,chaseTime:2,hunterTime:1});const before=JSON.stringify(s);advance(s,5,{axis:1,jump:true});assert.equal(JSON.stringify(s),before);});
test('crouched locomotion keeps both articulated leg lengths',()=>{const m=new Motion();let s=Object.assign(L.createState(),{crouch:1});for(let i=0;i<100;i++){s.time+=1/60;s.x+=3;s.vx=180;const p=m.update(s,1/60);for(const f of p.feet){assert.ok(Math.abs(Math.hypot(f.hip.x-f.knee.x,f.hip.y-f.knee.y)-26)<.01);assert.ok(Math.abs(Math.hypot(f.ankle.x-f.knee.x,f.ankle.y-f.knee.y)-25)<.15);}}});

test("saved checkpoints restore coherent patrol and pursuit states without touching the main game",()=>{for(let cp=1;cp<=5;cp++){const s=L.recoverCheckpoint(cp);assert.equal(s.checkpoint,cp);assert.equal(s.deaths,0);advance(s,.2);assert.equal(s.deaths,0);}assert.equal(L.recoverCheckpoint(99).checkpoint,0);assert.equal(L.recoverCheckpoint(NaN).x,130);});

test('the entire drawn refuge protects and keeps the traveller crouched',()=>{
 for(const x of [4801,4830,4869,4919]){const s=Object.assign(L.recoverCheckpoint(4),{x,inspection:2});advance(s,.6);assert.equal(s.deaths,0);assert.equal(s.crouch,1);assert.equal(L.patrolVisible(s),false);}
});
test('patrol detection shares the swept light footprint and frees the exit progressively',()=>{
 for(const inspection of [1,7.2,7.5,7.8,8.1,8.2]){const s=Object.assign(L.recoverCheckpoint(4),{inspection});const p=L.patrol(s);
 for(const x of [p.left-1,p.left+1,p.right+1]){s.x=x;assert.equal(L.patrolVisible(s),p.active&&x>p.left&&x<p.right);}}
 const s=Object.assign(L.recoverCheckpoint(4),{x:4900,inspection:7.7});advance(s,.4);assert.equal(s.deaths,0);
});
test('the patrol retreats away from the refuge without a position discontinuity',()=>{
 const s=L.recoverCheckpoint(4);let previous=5290;
 for(let t=7;t<12;t+=.01){s.inspection=t;const p=L.patrol(s);assert.ok(p.vehicleX>=previous);assert.ok(p.vehicleX-previous<1.16);previous=p.vehicleX;}
});

test('climbing keeps both full-grip hands fixed to the ledge in world space',()=>{
 const {contactHand}=require('../dist/motion.js'),{frames}=route(true),m=new Motion();let count=0;
 for(const {state:s} of frames){const p=m.update(s,1/60);if(!p.contacts||p.contacts.weight!==1)continue;
 for(const front of [false,true]){const h=contactHand(s,p,front),co=Math.cos(p.lean),si=Math.sin(p.lean);
 const flip=Math.abs(p.turn)<.18?Math.sign(p.turn||s.face)*.18:p.turn;
 const x=s.x+flip*((front?p.reach*1.3:0)+h.x*co-(h.y+45)*si),y=s.y+p.bob+p.breath-45+h.x*si+(h.y+45)*co;
 assert.ok(Math.abs(x-s.climb.edge)<.001);assert.ok(Math.abs(y-s.climb.top+2)<.001);assert.ok(Number.isFinite(h.x+h.y));count++;}}
 assert.ok(count>40);
});
test('ledge ascent raises the body before transferring it over the edge',()=>{
 const s=Object.assign(L.createState(),{x:2577,y:390,searchPassed:true,climb:{t:0,x:2577,y:390,top:330,edge:2590,targetX:2614}});
 advance(s,.1);assert.equal(s.x,2577);assert.ok(s.y<390);advance(s,.5);assert.equal(s.climb,null);assert.equal(s.onGround,true);assert.ok(s.x>=2590);assert.equal(s.y,330);
});
test('released climbing hands return without stretching the arms behind the body',()=>{const {contactHand}=require('../dist/motion.js'),m=new Motion();for(const {state:s} of route(true).frames){const p=m.update(s,1/60);if(!s.climb)continue;for(const front of [true,false]){const h=contactHand(s,p,front);assert.ok(Math.hypot(h.x+(front?4:6),h.y+(front?72:71))<59);}}});

test('swimmer settles at the surface and cannot pass through the left bank',()=>{const s=Object.assign(L.recoverCheckpoint(5),{x:6500,y:590,swimming:true});advance(s,4);assert.ok(Math.abs(s.y-595)<2);advance(s,4,{axis:-1});assert.equal(s.deaths,0);assert.ok(s.x>=L.C.dive+12);advance(s,1,{axis:1});assert.ok(s.x>L.C.dive+180);});
test('swimming posture enters continuously and becomes upright at the ladder',()=>{let s=Object.assign(L.createState(),{swimming:true,x:6500,y:540});assert.equal(L.swimAngle(s),0);s.y=580;assert.equal(L.swimAngle(s),1.15);s.face=-1;assert.equal(L.swimAngle(s),-1.15);s.face=1;s.x=L.C.bank-20;assert.equal(L.swimAngle(s),0);s.x-=1;assert.ok(L.swimAngle(s)<.001);});
test('pursuer never inherits swimming, climbing or carrying from the traveller',()=>{const s=Object.assign(L.createState(),{hunterX:6070,swimming:true,climb:{edge:7200},seed:'held',crouch:1,guiding:true});const p=L.pursuerPose(s);assert.equal(p.swimming,false);assert.equal(p.climb,null);assert.equal(p.seed,'none');assert.equal(p.crouch,0);assert.equal(p.guiding,false);assert.equal(p.vx,0);assert.equal(p.y,510);});
test('both swimming arms animate instead of using the jumping back arm',()=>{const m=new Motion(),s=Object.assign(L.createState(),{x:6500,y:595,swimming:true,onGround:false,vx:185});const samples=[];for(let i=0;i<100;i++){s.time+=1/60;const p=m.update(s,1/60);samples.push(p.backHand.y);}assert.ok(Math.max(...samples)-Math.min(...samples)>50);});


test('custodian clears the obstacle with an airborne pose and smooth ground contacts',()=>{
 for(const x of [5650.001,5700,5745,5790,5839.999]){const p=L.pursuerPose(Object.assign(L.createState(),{hunterX:x}));assert.equal(p.onGround,false);assert.ok(p.y<510);if(x>=5700&&x<=5790)assert.ok(p.y<465);assert.ok(Number.isFinite(p.vy));}
 for(const x of [5650,5840]){const p=L.pursuerPose(Object.assign(L.createState(),{hunterX:x}));assert.equal(p.onGround,true);assert.equal(p.vy,0);assert.equal(p.y,510);}
});
test('custodian brakes monotonically before water and settles into a watching pose',()=>{
 const s=Object.assign(L.recoverCheckpoint(5),{x:6500,y:595,swimming:true,hunterTime:2,hunterX:5930});let old=378,min=378;
 for(let i=0;i<120;i++){L.step(s,{});assert.ok(s.hunterV<=old+.001);assert.ok(s.hunterX<=6070);if(s.hunterV>0)min=Math.min(min,s.hunterV);old=s.hunterV;}
 assert.equal(s.hunterX,6070);assert.equal(s.hunterV,0);assert.ok(min<40);assert.equal(L.pursuerPose(s).watching,1);assert.equal(s.deaths,0);
});


test('water entry dissipates falling momentum without a long involuntary dive',()=>{
 for(const vy of [150,450,900]){const s=Object.assign(L.recoverCheckpoint(5),{x:6300,y:541,vy,onGround:false});let maxY=0,splashes=0;
 for(let i=0;i<180;i++){L.step(s,{});maxY=Math.max(maxY,s.y);splashes+=s.events.filter(e=>e==='splash').length;}
 assert.ok(maxY<605);assert.ok(Math.abs(s.y-595)<1);assert.equal(splashes,1);assert.equal(s.splashX,6300);assert.equal(s.deaths,0);}
});
test('water entry remains bounded at 30Hz and 60Hz and pause freezes splash',()=>{
 for(const dt of [1/30,1/60]){const s=Object.assign(L.recoverCheckpoint(5),{x:6300,y:541,vy:700,onGround:false});for(let t=0;t<3;t+=dt)L.step(s,{},dt);assert.ok(Math.abs(s.y-595)<1);s.paused=true;const age=s.splashAge;L.step(s,{},dt);assert.equal(s.splashAge,age);}
});
