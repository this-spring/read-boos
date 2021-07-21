/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-06-25 21:36:48
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-06-28 19:16:10
 */
var addon = require('bindings')('render');

function JsRenderText() {
    console.log("JsRenderText");
}

function JsEvalJs() {
    console.log("JsEvalJs");
}

addon.Init(JsRenderText, JsEvalJs); // 'world'

// addon.openglRenderText('this', 540.0, 570.0, 0.5, 0.3, 0.7, 0.9);
