import koa from 'koa';


var router = require('koa-router')({
    prefix:'/api'
});

var bodyParser = require('koa-bodyparser');

var koaServer=new koa();

var users=[
    "Bob",
    "Tom",
    "Richard"
];

router
.get('/',async(ctx,next)=>{
    ctx.body="home page";
})

.param('user',async(id,ctx,next)=>{
    ctx.user=users[id];
    console.info(id)
    if (!ctx.user) return ctx.status = 404;
    next();
})
.get('/first/:user',async(ctx,next)=>{
    ctx.body=`
        <html>
            <head>
                <script src="http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js"></script>
            </head>
            <body>
                <div style="background:red;">${ctx.user}</div>
            </body>
        </html>
    `;
});

var postRouter=new require('koa-router')({
    prefix:'/api'
});

postRouter.post('/second',async(ctx,next)=>{
   var {user}=ctx.request.body;
    ctx.body=`${users[user]}`;
})

koaServer
.use(bodyParser())
.use(router.routes())
.use(postRouter.routes())
.use(router.allowedMethods())

koaServer.listen(3000);
console.info('server is launch,and listen port 3000.');