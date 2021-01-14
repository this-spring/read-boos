/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-11 17:49:34
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-12 11:56:15
*/

// js传值给webgl方式：attribute和uniform
var VSHADER_SOURCE = `
    // 变量声明必须按照以下的格式：<存储限定符><类型><变量> = attribute vec4 a_Position
    attribute vec4 a_Position;
    attribute float a_PointSize;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = a_PointSize;
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
    var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
    if (a_Position < 0) {
        console.log('failed to get the storage location of a_Position');
        return;
    }
    // 将顶点位置传输给attribute变量
    // gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
    var p = new Float32Array([0.0, 0.5, 0.0]);
    gl.vertexAttrib3fv(a_Position, p);

    // 设置pointSize
    gl.vertexAttrib1f(a_PointSize, 20.0);
    // 设置背景色
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // 清除canvas
    gl.clear(gl.COLOR_BUFFER_BIT);
    // 绘制一个点
    gl.drawArrays(gl.POINTS, 0, 1);
}

// 1. 想webgl传递变量需要使用setAttribute和uniform
// 2. 变量赋值时候首先获取变量在glsl语言中的位置：gl.getAttribLocation(gl.program, 'a_Position');
// 3. attribute变量赋值，gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0)


// gl.vertexAttrib3f的同族函数:作用从js向顶点着色器中attribute变量传值  

// gl.vertexAttrib1f(location, v0) // 仅传第一个值，这个值将被填充到attribute变量第一个分量中，第二个第三个将被设为0，第四个将被设为1。下面api类似
// gl.vertexAttrib1f(location, v0, v1)
// gl.vertexAttrib1f(location, v0, v1, v2)
// gl.vertexAttrib1f(location, v0, v1, v2, v3)


// 方法的矢量版本，名字以“v”结尾  
// var position = new Float32Array([1.0, 2.0, 3.0, 1.0]);
// gl.vertexAttrib4fv(a_Position, position);


// webgl命名规范
// <基础函数名><参数个数><参数类型>
// gl.vertexAttrib3f(location, v0, v1, v2);
// gl.vertexAttrib：基础函数名
// 3：参数个数，代表attribute的矢量中的元素个数
// f：参数类型