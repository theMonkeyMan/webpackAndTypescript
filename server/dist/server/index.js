"use strict";
var koa = require("koa");
var path = require('path');
//http request body 解析中间件,主要处理请求参数在request body中的request method,例如post请求
var bodyParser = require('koa-bodyparser');
var routers_1 = require("./routers");
//创建koa实例
var koaServer = new koa();
koaServer
    .use(routers_1.originChecker)
    .use(bodyParser())
    .use(routers_1.filterRouter)
    .use(routers_1.isStaticAssetsCache)
    .use(routers_1.router.routes())
    .use(routers_1.router.allowedMethods());
koaServer.listen(3000);
console.info('server is launch,and listen port 3000.');
