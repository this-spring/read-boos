/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-13 20:33:48
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-13 21:20:53
*/
var VSHADER_SOURCE = `
    attribute vec4 a_Position;
    // mat4就是一个4*4的矩阵类型，定义后
    uniform mat4 u_xformMatrix;
    void main() {
        // 矩阵与矢量相乘运算
        gl_Position = a_Position * u_xformMatrix;
    }
`;

var FSHADER_SOURCE = `
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`;

function main() {
    var canvas = document.getElementById('webgl');
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log(' gl init error');
        return;
    }
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log(' shader init error');
        return;
    }
    var n = initBuffer(gl);
    var cosb = 0.5;
    var sinb = 0.5;
    // 由于矩阵是二维的，而数组是一维的，所以没办法很好的表示二维数组
    // 这里我们可以采用行主序和列主序来排列，在这里采用的是列主序
    // 所以其实原来的矩阵是这样的：
    // [cosb, -sinb, 0.0, 0.0
    //  sinb, cosb, 0.0, 0.0
    // 0.0, 0.0, 1.0, 0.0
    // 0.0, 0.0, 0.0, 1.0]
    var xformMatrix = new Float32Array([
        cosb, sinb, 0.0, 0.0,
        -sinb, cosb, 0.0 ,0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0,
    ]);
    var u_xformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix');
    gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initBuffer(gl) {
    var vextices = new Float32Array([
        0.0, 0.5,
        -0.5, -0.5,
        0.5, -0.5
    ]);

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vextices, gl.STATIC_DRAW);
    // 将缓冲区给a_Positoin
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);
    return vextices.length / 2;
}

// 英文：Matrix   [ˈmeɪtrɪks]
// 给矩阵赋值：gl.uniforMatrix4fv(u_xformMatrix, false, xforMatrix)
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniformMatrix