import koa from 'koa';

var path=require('path');

//处理http请求路由的中间件(get,post,put,delete)
var koaRouter=require('koa-router');

//http request body 解析中间件,主要处理请求参数在request body中的request method,例如post请求
var bodyParser = require('koa-bodyparser');

//处理静态资源的中间件,html,css,js等
// var koaStatic=require('koa-static');

//配合koa-static中间件做请求发送,目前在项目中使用其代替koa-static
var koaSend=require('koa-send');

//创建koa实例
var koaServer=new koa();

//创建koa-router实例
var router = koaRouter({
    //路由前缀,目的是用来做path过滤,没有api前缀的path不会被match
    prefix:'/api'
});

//模拟数据
var users=[
    {
        name:'Bob'
    },
    {
        name:'Tom'
    },
    {
        name:'Richard'
    }
];

//合法域集合
let validOriginArray=[
    "http://www.qq.com",
    "http://www.zhuangbigou.com",
    "http://localhost",
];

/*
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
router
.get('/',async(ctx,next)=>{
    ctx.body="home page";
})

.get('/first/:index',async(ctx,next)=>{
    ctx.body=users[ctx.params.index];
})

.post('/second',async(ctx,next)=>{
    //遍历合法域集合,过滤非法域
    for(var i=0;i<validOriginArray.length;i++){
        if(ctx.request.header.origin.indexOf(validOriginArray[i])>=0){
            ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
        }
    }
    
   var {index}=ctx.request.body;
    ctx.body=`${JSON.stringify(users[index])}`;
})

//路由权限过滤
async function filterRouter(ctx,next)
{
    //请求路径中不包含api字符串(代表后台接口请求路径前缀)或dist字符串(代表静态资源请求路径前缀)时,返回请求被禁止
    if (!ctx.path.includes('api')&&!ctx.path.includes('dist')) {
        return ctx.body = 'Forbidden';
    }
    //给客户端发送资源
    await koaSend(ctx,ctx.path);
    next();
}

koaServer
//转义post等请求的参数结构
.use(bodyParser())
//路由权限过滤
.use(filterRouter)
/*
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

koaServer.listen(3000);
console.info('server is launch,and listen port 3000.');