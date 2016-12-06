export async function isStaticAssetsCache (ctx,next){
    if (ctx.request.get('If-Modified-Since')&&ctx.request.get('If-Modified-Since') == ctx.response.get('Last-Modified')) {
            ctx.status = 304;
        }
        await next();
}