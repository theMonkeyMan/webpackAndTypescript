import koa from 'koa';

var koaServer=new koa();

koaServer.use(async (ctx,next)=>{
    try{
        next();
    }
    catch(err){
        ctx.body='server inside faild';
        ctx.status=err.status||500;
    }
})

koaServer.use(async (ctx)=>{
    ctx.body='hello guy';
});

koaServer.listen(3000);
console.info('server is launch,and listen port 3000.');