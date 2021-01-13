/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-13 13:06:08
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-13 16:29:20
*/

var VSHADER_SOURCE = `
    attribute vec4 a_Position;
    void main() {
        gl_Position = a_Position;
    }
`;

var FSHADER_SOURCE = `
    precision mediump float;
    uniform vec4 u_FragColor;
    void main() {
        gl_FragColor = u_FragColor;
    }
`;

function main() {
    var canvas = document.getElementById('webgl');
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.error(' gl init error');
        return;
    }
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.error(' shader init error');
        return;
    }
    var n = initVertexBuffer(gl);
    gl.clearColor(0.0, 0.0, 0.0, 1,0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    // webgl方法gl.drayArrays()既强大有灵活，通过第一个参数不通知就可以有7中不同方式来绘制图形
    gl.drawArrays(gl.TRIANGLE_STRIP, 0 , n); // 三角形
    // gl.drawArrays(gl.POINTS, 0 , n);
    // gl.drawArrays(gl.LINES, 0 , n);
}

function initVertexBuffer(gl) {
    // 正方形
    // 四个点就可以画一个正方形，上个例子中我们利用6个点画了一个正方形
    var vertices = new Float32Array([
        // 0.5, 0.5,
        // -0.5, 0.5,
        // -0.5, -0.5,
        // 0.5, -0.5
        -0.5, 0.5,
        -0.5, -0.5,
        0.5, 0.5,
        0.5, -0.5
    ]);
    var n = vertices.length / 2;
    console.log('n', n);
    // 创建缓冲区
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log(' Failed to create the buffer object');
        return -1;
    }
    // 绑定缓冲区
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    // 想缓冲区写入对象
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var a_Postion = gl.getAttribLocation(gl.program, 'a_Position');
    var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
    gl.uniform4f(u_FragColor, 1.0, 0.0, 0.0, 1.0);
    // 将缓冲区分配给a_Position
    gl.vertexAttribPointer(a_Postion, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Postion);
    return n;
}

