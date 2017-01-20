"use strict";
var validate_1 = require("./validate");
exports.filterRouter = validate_1.filterRouter;
exports.originChecker = validate_1.originChecker;
var demoRoute_1 = require("./demoRoute");
exports.router = demoRoute_1.default;
var staticCache_1 = require("./staticCache");
exports.isStaticAssetsCache = staticCache_1.isStaticAssetsCache;
