/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-11 17:49:34
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-12 01:18:09
*/

// js传值给webgl方式：attribute和uniform
var VSHADER_SOURCE = `
    attribute vec4 a_Position;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = 10.0;
    }`;

var FSHADEr_source = `
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }`;
function main() {
    var canvas = document.getElementById('webgl');
    var gl = getWebGLContext(canvas);
    // 初始化着色器
    if (!initShaders(gl, VSHADER_SOURCE, FSHADEr_source)) {
        console.log('init shaders error');
        return;
    }
    // 获取attribute的存储位置
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log('failed to get the storage location of a_Position');
        return;
    }
    // 将顶点位置传输给attribute变量
    gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
    // 设置背景色
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // 清除canvas
    gl.clear(gl.COLOR_BUFFER_BIT);
    // 绘制一个点
    gl.drawArrays(gl.POINTS, 0, 1);
}