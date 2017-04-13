// dao/userDao.js
// 实现与MySQL交互
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import mysql from 'mysql';
var mysql = require('mysql');
var config_1 = require("./config");
var sql_1 = require("./sql");
var $conf = config_1.dbConfig;
var $sql = sql_1.userInfoSqlMapping;
// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);
// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    }
    else {
        res.json(ret);
    }
};
var userDao = {
    add: function (req) {
        var thePromise = new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                // 获取前台页面传过来的参数
                var param = req.body;
                // 建立连接，向表中插入值
                // 'INSERT INTO user(name, age,sex) VALUES(0,?,?)',
                connection.query($sql.insert, [param.name, param.age, param.sex], function (err, result) {
                    if (result) {
                        resolve(result);
                    }
                    else {
                        reject(err);
                    }
                    // 释放连接
                    connection.release();
                });
            });
        });
        return thePromise;
    },
    queryAll: function () {
        var thePromise = new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                connection.query($sql.queryAll, [], function (err, result) {
                    if (result) {
                        resolve(result);
                    }
                    else {
                        reject(err);
                    }
                    // 释放连接
                    connection.release();
                });
            });
        });
        return thePromise;
    }
};
exports.default = userDao;
