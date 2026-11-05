const fs=require('fs'),vm=require('vm'),assert=require('assert');
const data=fs.readFileSync('dist/data.js','utf8'),app=fs.readFileSync('dist/app.js','utf8');
const start=app.indexOf('function planPipeline('),end=app.indexOf('function drawPlan(');
const ctx=vm.createContext({});vm.runInContext(data+'\n'+app.slice(start,end)+'\nthis.tools=TOOLS;this.categories=CATEGORIES;this.plan=planPipeline;',ctx);
assert.equal(ctx.tools.length,120);assert.equal(new Set(ctx.tools.map(t=>t.name)).size,120);
for(const t of ctx.tools){for(const k of ['id','name','category','desc','pro','con','fit','url','delivery','level'])assert(t[k],t.name+' missing '+k);assert(ctx.categories.some(c=>c[0]===t.category));assert(new URL(t.url).protocol==='https:');}
let checked=0;
for(const env of ['local','aws','gcp','azure'])for(const source of ['db','api','files','events'])for(const latency of ['daily','hourly','realtime'])for(const volume of ['small','medium','large'])for(const team of ['small','expert'])for(const consumers of ['one','many'])for(const replay of [true,false]){
 const c={env,source,latency,volume,team,consumers,replay,quality:true,platform:'테스트'};const p=ctx.plan(c);
 assert(p.nodes.length>=4);assert(p.nodes.every(n=>n.name&&n.role));assert(p.orchestration);assert(p.reasons.length>0);assert(p.nodes[p.nodes.length-1].role==='CONSUME');
 if(env==='gcp'&&source==='db'&&latency==='realtime'&&consumers==='many')assert(!p.nodes.some(n=>n.name==='Datastream'),'Datastream needs an explicitly supported target path');
 if(latency!=='realtime')assert(!p.nodes.some(n=>['Apache Kafka','Amazon MSK'].includes(n.name)));
 if(env==='local'&&volume==='small'&&latency==='daily')assert(p.nodes.some(n=>n.name==='PostgreSQL'));
 checked++;
}
console.log(JSON.stringify({tools:ctx.tools.length,categories:ctx.categories.length,configurationsChecked:checked,status:'passed'}));
