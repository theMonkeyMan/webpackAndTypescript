function firstPlugin(options){
    console.info(options);
}

firstPlugin.prototype.apply=function(compiler){
    console.info(compiler);
    compiler.plugin('done',function(){
        console.info("\n hello world!");
    });
}

module.exports=firstPlugin;