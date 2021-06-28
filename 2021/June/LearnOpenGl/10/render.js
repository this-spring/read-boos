/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-06-25 21:36:48
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-06-28 15:34:53
 */
var addon = require('bindings')('render');

console.log(addon.add("ttt")); // 'world'

// setTimeout(() =>{
            // RenderText(*shadert, "LearnOpenGL.com", 540.0f, 570.0f, 0.5f, glm::vec3(0.3, 0.7f, 0.9f));

    addon.openglRenderText('this', 540.0, 570.0, 0.5, 0.3, 0.7, 0.9);
// }, 0)