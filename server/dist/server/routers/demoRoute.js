"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//处理http请求路由的中间件(get,post,put,delete)
var koaRouter = require('koa-router');
var model_1 = require("../model");
//创建koa-router实例
var router = koaRouter({
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
    .get('/', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        ctx.body = "home page";
        return [2 /*return*/];
    });
}); })
    .get('/first', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        ctx.body = model_1.userDatas[ctx.query.index];
        return [2 /*return*/];
    });
}); })
    .post('/second', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
    var index;
    return __generator(this, function (_a) {
        index = ctx.request.body.index;
        ctx.body = "" + JSON.stringify(model_1.userDatas[index]);
        return [2 /*return*/];
    });
}); });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
