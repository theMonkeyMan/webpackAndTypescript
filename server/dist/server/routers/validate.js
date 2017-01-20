//处理静态资源的中间件,html,css,js等
// var koaStatic=require('koa-static');
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
//配合koa-static中间件做请求发送,目前在项目中使用其代替koa-static
var koaSend = require('koa-send');
var validOriginArray_1 = require("./validOriginArray");
//路由权限过滤
function filterRouter(ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //请求路径中不包含api字符串(代表后台接口请求路径前缀)或dist字符串(代表静态资源请求路径前缀)时,返回请求被禁止
                    if (ctx.path != '/' && !ctx.path.includes('api') && !ctx.path.includes('dist')) {
                        return [2 /*return*/, ctx.body = 'Forbidden'];
                    }
                    if (!(ctx.path == '/')) return [3 /*break*/, 2];
                    return [4 /*yield*/, koaSend(ctx, "/dist/index.html", {
                            maxAge: 365 * 24 * 60 * 60
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, koaSend(ctx, ctx.path, {
                        maxAge: 365 * 24 * 60 * 60
                    })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [4 /*yield*/, next()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.filterRouter = filterRouter;
//校验合法域名
function originChecker(ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < validOriginArray_1.default.length)) return [3 /*break*/, 4];
                    if (!(ctx.request.header.origin && ctx.request.header.origin.indexOf(validOriginArray_1.default[i]) >= 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, ctx.response.set('Access-Control-Allow-Origin', ctx.request.header.origin)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, next()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.originChecker = originChecker;
