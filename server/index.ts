import * as koa from 'koa';

import * as koaCompress from 'koa-compress';

import * as session from 'koa-session';

import * as mysqlStore from 'koa-mysql-session';

var exec=require('child_process').exec;

var os=require('os');

var path = require('path');

//http request body 解析中间件,主要处理请求参数在request body中的request method,例如post请求
var bodyParser = require('koa-bodyparser');

import { filterRouter, router, originChecker, isStaticAssetsCache } from './routers';

//创建koa实例
var koaServer = new koa();

var mysqlConfig={
    host:'127.0.0.1',
    user:'root',
    password:'',
    port:3306,
    database:'myHome'
};

var store=new mysqlStore(mysqlConfig);

koaServer.keys=['myHome'];

koaServer
    //校验合法域名
    .use(originChecker)
    //转义post等请求的参数结构
    .use(bodyParser())
    //路由权限过滤
    .use(filterRouter)

    .use(isStaticAssetsCache)
    .use(session({store:store},koaServer))
    /**
    * routes代表router对象配置的所有路径match规则集合,类型为Array,每一个请求都会遍历routes()集合里面的路由规则,
    * match到后执行相应的函数.for example:
    * method:post -> $.ajax({url:'http://localhost:3000/api/second',type:'post',data:{index:2},success:function(res){console.info(res)}})
    * 发送以上的请求会进入到koaServer配置的中间件->router.routes()中,然后遍历routes()集合里配置的规则,
    * 例如:
    * router.get('/',...)
    * router.get('/first/:index')
    * router.post('/second')
    * 这些都是在router对象中配置的路由规则,若match到后,会执行相应的回调函数.
    */
    .use(router.routes())
    //允许接收所有的请求方式,for example:get post put delete等.
    .use(router.allowedMethods())
    .use(koaCompress())
    .use(async(ctx,next)=>{
        if(!ctx['session'].view){
            ctx['session'].view=0;
        }
        logger(ctx['session'].view++);
        // ctx['session'].age=24;
    })
koaServer.listen(3000).addListener('listening',function(){
    // var osPlatform=os.platform();
    // if(osPlatform.includes("win32")||osPlatform.includes("win64")){
    //     exec(`start http://127.0.0.1:3000`);
    // }
    // else{
    //     exec(`open http://127.0.0.1:3000`);
    // }
})
console.info('server is launch,and listen port 3000.');

function logger(data){
    console.info(`path: ${__filename}:\n`, data);
}