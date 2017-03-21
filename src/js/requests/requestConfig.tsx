"use strict";

import * as qs from "qs";

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(response.status)
    }
}


export async function post(api, data, opts = {}, search = {}) {
    const query = Object.assign({ r: api }, search);
    let url = query.r;



    return new Promise(function (resolve, reject) {

        let timer = setTimeout(() => {
            reject("请求超时,请重试");
        }, 10000);
        if (!opts['method']) {
            opts = {
                method: "POST",
                headers: opts['headers'] || {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: qs.stringify(data)
            }
        }

        fetch(url, opts)
            .then(status)
            .then(res => {
                clearTimeout(timer);
                if (res.ok) {
                    res.json()
                        .then(json => {
                            resolve(json);
                        })
                }
                else {
                    resolve(res.text());
                }
            })
            .catch((err) => {
                clearTimeout(timer);
                if ("number" === (typeof err)) {
                    if (err >= 400 && err < 500) {
                        reject("请求错误:" + err);
                    }
                    else if (err >= 500) {
                        reject("服务器错误:" + err);
                    }
                }
                else {
                    reject("网络请求失败");
                }
            })
    });

}

export async function get(api, search = {}, opts = {}) {
    const query = Object.assign({ r: api }, search);
    let url = query.r;



    return new Promise(function (resolve, reject) {

        let timer = setTimeout(() => {
            reject("请求超时,请重试");
        }, 10000);


        fetch(url, opts)
            .then(status)
            .then(res => {
                clearTimeout(timer);
                if (res.ok) {
                    res.json()
                        .then(json => {
                            resolve(json);
                        })
                }
                else {
                    resolve(res.text());
                }
            })
            .catch((err) => {
                clearTimeout(timer);
                if ("number" === (typeof err)) {
                    if (err >= 400 && err < 500) {
                        reject("请求错误:" + err);
                    }
                    else if (err >= 500) {
                        reject("服务器错误:" + err);
                    }
                }
                else {
                    reject("网络请求失败");
                }
            });
    })
}