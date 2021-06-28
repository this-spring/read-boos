/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-06-25 00:34:50
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-06-25 21:33:55
 */
var addon = require('bindings')('hello');

console.log(addon.add(1,2)); // 'world'

// var addon = require('bindings')('render');

// console.log(addon.add()); // 'world'