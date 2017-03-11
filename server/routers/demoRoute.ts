//处理http请求路由的中间件(get,post,put,delete)
const koaRouter = require('koa-router');

import {originChecker} from './validate';

import {userDatas} from '../model';

import userDao from '../dao';


//创建koa-router实例
const router = koaRouter({
    //路由前缀,目的是用来做path过滤,没有api前缀的path不会被match
    prefix: '/api'
});

/**
* 定义match路由.
* 注意:定义prefix属性后,路由中必须有prefix属性规定的前缀才能match到相关的router.
* for example:
* OK:
* method:get -> http://localhost:3000/api/ return "home page"
* method:get -> http://localhost:3000/api/2 return something
* method:post -> $.ajax({url:'http://localhost:3000/api/second',type:'post',data:{index:2},success:function(res){console.info(res)}})
* 
* ERROR:
* method:get -> http://localhost:3000/sb/2 return Forbidden
* method:post -> $.ajax({url:'http://localhost:3000/sb/second',type:'post',data:{index:2},success:function(res){console.info(res)}})
*/


/**
 * 常用请求操作处理
 * req.params.xxxxx 从path中的变量
 * req.query.xxxxx 从get中的?xxxx=中
 * req.body.xxxxx 从post中的变量
 */

router
    .get('/', async (ctx, next) => {
        ctx.body = "home page";
    })

    .get('/first', async (ctx, next) => {
        ctx.body = userDatas[ctx.query.index];
    })

    .post('/second', async (ctx, next) => {
        var {index} = ctx.request.body;
        ctx.body = `${JSON.stringify(userDatas[index])}`;
    })

    .get('/getUserInfo',async(ctx,next)=>{
        var userInfoPromise=userDao.queryAll();

        await userInfoPromise.then(res=>{
            ctx.body={data:res,msg:"success"};
        })
        .catch(error=>{
            ctx.body={msg:error}
        });
    })

    .post('/addUserInfo',async(ctx,next)=>{
        var userInfoPromise=userDao.add(ctx.request);
        await userInfoPromise.then(res=>{
            ctx.body={msg:"添加成功"};
        })
        .catch(error=>{
            ctx.body={msg:error};
        });
    })

export default router;