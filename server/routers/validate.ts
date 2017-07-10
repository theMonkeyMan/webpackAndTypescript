//处理静态资源的中间件,html,css,js等
// var koaStatic=require('koa-static');

import * as path from 'path';

//配合koa-static中间件做请求发送,目前在项目中使用其代替koa-static
const koaSend = require('koa-send');

import validOriginArray from './validOriginArray';

var staticPath = path.join(__dirname, '../../../..');

//路由权限过滤
export async function filterRouter(ctx, next) {
    //请求路径中不包含api字符串(代表后台接口请求路径前缀)或dist字符串(代表静态资源请求路径前缀)时,返回请求被禁止
    // if (ctx.path != '/' && !ctx.path.includes('api') && !ctx.path.includes('dist') && !ctx.path.includes('node_modules')) {
    //     return ctx.body = 'Forbidden';
    // }

    // //给客户端发送资源
    // ctx.response.redirect("/dist/index.html");
    // console.info(`${staticPath}/dist/${ctx.path}index.html`);
    console.info(ctx.path);
    //以.切割请求路径
    var extensionMath = ctx.path.split('.');

    //扩展名集合
    var extensionArray: any = ['js', 'css', 'jpg', 'png'];
    
    //获取请求的静态资源文件的扩展名
    var extesion=extensionMath[extensionMath.length - 1];

    //如果请求的资源文件扩展名不在扩展名集合中,则默认请求根目录html文件
    if (!extensionArray.includes(extesion)) {
        //让所有路由都能接收根目录index.html文件
        await koaSend(ctx, `/index.html`, {
            //设置资源文件根目录
            root: `${staticPath}/dist/`,
            // maxAge: 365 * 24 * 60 * 60
        });
    }

    //如果请求路径中包含node_modules关键字,则将根目录指向node_modules目录
    if (ctx.path.indexOf('node_modules') >= 0) {
        await koaSend(ctx, ctx.path.split('node_modules/')[1], {
            //设置资源文件根目录
            root: `${staticPath}/node_modules`,
            // maxAge: 365 * 24 * 60 * 60
        });
    }
    //将静态资源的根目录指向项目根目录
    else {
        await koaSend(ctx, ctx.path, {
            //设置资源文件根目录
            root: `${staticPath}`,
            // maxAge: 365 * 24 * 60 * 60
        });
    }

    await next();
}

//校验合法域名
export async function originChecker(ctx, next) {
    //遍历合法域集合,过滤非法域
    for (var i = 0; i < validOriginArray.length; i++) {
        if (ctx.request.header.origin && ctx.request.header.origin.indexOf(validOriginArray[i]) >= 0) {
            await ctx.response.set('Access-Control-Allow-Origin', ctx.request.header.origin);
        }
    }
    await next();
}