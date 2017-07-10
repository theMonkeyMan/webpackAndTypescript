var exec = require('child_process').exec;

var os = require('os');

function firstPlugin(options) {
    console.info(options);
}

firstPlugin.prototype.apply = function (compiler) {
    console.info(compiler);
    compiler.plugin('done', function () {
        console.info("\n hello world!");
        exec(`nodemon -x babel-node ./server/dist/server/index.js`);
    });
}

module.exports = firstPlugin;