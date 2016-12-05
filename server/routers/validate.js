//处理静态资源的中间件,html,css,js等
// var koaStatic=require('koa-static');

//配合koa-static中间件做请求发送,目前在项目中使用其代替koa-static
const koaSend = require('koa-send');

import validOriginArray from './validOriginArray';

//路由权限过滤
export async function filterRouter(ctx, next) {
    //请求路径中不包含api字符串(代表后台接口请求路径前缀)或dist字符串(代表静态资源请求路径前缀)时,返回请求被禁止
    if (ctx.path != '/' && !ctx.path.includes('api') && !ctx.path.includes('dist')) {
        return ctx.body = 'Forbidden';
    }
    //给客户端发送资源
    if (ctx.path == '/') {
        await koaSend(ctx, `/dist/index.html`,{
            maxAge:365*24*60*60
        });
    }
    else {
        await koaSend(ctx, ctx.path,{
            maxAge:365*24*60*60
        });
    }
    await next();
}

//校验合法域名
export async function originChecker(ctx,next) {
    //遍历合法域集合,过滤非法域
    for (var i = 0; i < validOriginArray.length; i++) {
        if (ctx.request.header.origin && ctx.request.header.origin.indexOf(validOriginArray[i]) >= 0) {
            await ctx.response.set('Access-Control-Allow-Origin', ctx.request.header.origin);
        }
    }
    await next();
}