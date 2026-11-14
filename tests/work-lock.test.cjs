const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path'),{spawn,spawnSync}=require('node:child_process');
const script=path.resolve(__dirname,'../scripts/work-lock.py');
test('checkout lock excludes other holders and permits only its owner to release',async()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'nacre-lock-'));
 const call=(...args)=>spawnSync('python3',[script,...args,'--git-dir',dir],{encoding:'utf8'});
 const holder=spawn('python3',['-u',script,'hold','--git-dir',dir,'--owner','automated-test']);
 try{
 const info=await new Promise((resolve,reject)=>{holder.stdout.once('data',b=>resolve(JSON.parse(b.toString())));holder.once('error',reject);holder.once('exit',code=>{if(code)reject(new Error('holder exited '+code));});});
 assert.equal(info.status,'LOCKED');
 assert.equal(call('hold','--owner','intruder').status,1);
 assert.equal(call('release','--token','wrong').status,2);
 assert.equal(JSON.parse(call('status').stdout).active,true);
 const closed=new Promise(resolve=>holder.once('exit',resolve));
 assert.equal(call('release','--token',info.token).status,0);await closed;
 assert.equal(JSON.parse(call('status').stdout).active,false);
 assert.ok(fs.existsSync(path.join(dir,'nacre-work.lock')),'inode remains stable after release');
 assert.equal(fs.existsSync(path.join(dir,'nacre-work.owner.json')),false);
 }finally{holder.kill();fs.rmSync(dir,{recursive:true,force:true});}
});
