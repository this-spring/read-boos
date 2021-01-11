/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-11 14:25:05
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-11 15:25:35
 */
function main() {
    var canvas = document.getElementById('webgl');
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.error(' not support gl ');
        return;
    }
    // gl.clearColor(r, g, b, a) ：指定背景色  r,g,b,a 值得范围0-1，值越大颜色越亮，因为webgl遵循glsl语言，所以值是0-1
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    // 用指定的背景色清空绘图区域，传入COLOR_BUFFER_BIT告诉webgl清空颜色缓存区，webgl有很多缓冲区包括：颜色缓冲区、深度缓存区、模板缓冲区等
    gl.clear(gl.COLOR_BUFFER_BIT);
}