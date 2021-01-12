/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-12 18:38:31
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-12 21:21:18
*/
var VSHADER_SOURCE = `
    attribute vec4 a_Position;
    attribute float a_PointSize;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = a_PointSize;
    }
`;

var FSHADER_SOURCE = `
    precision mediump float;
    uniform vec4 u_FragColor;
    void main() {
        gl_FragColor = u_FragColor;
    }
`;

function initCertexBuffers(gl) {
    var vertices = new Float32Array([
        0.0, 0.5, -0.5, -0.5, 0.5, -0.5
    ]);
    var n = 3;
    // 创建缓存对象
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }
    // 将缓冲对象绑定到目标对象
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    // 向缓存对象中写入数据
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
    gl.vertexAttrib1f(a_PointSize, 10.0);
    var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
    gl.uniform4f(u_FragColor, 1.0, 0.0, 0.0, 1.0);
    // 将缓冲区对象分配给a_Position变量
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    // 连接a_Position变量与分配给他的缓存对象
    gl.enableVertexAttribArray(a_Position);
    return n;
}

function main() {
    var canvas = document.getElementById('webgl');
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.error('init gl error');
        return;
    }
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.error('init shader error');
        return;
    }
    // 设置顶点
    var n = initCertexBuffers(gl);
    if (n < 0) {
        console.log('failed to set this position of vertices');
        return;
    }
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, n);
}

// 使用缓冲区向顶点着色器传入多个顶点的数据  
// 1. 创建缓冲区对象（gl.createBuffer()）
// 2. 绑定缓冲区对象（gl.bindBuffer()）
// 3. 将数据写入缓冲区对象（gl.bufferData()）
// 4. 将缓冲区对象分配给一个attribute变量（gl.vertexAttribPointer（））
// 5. 开启attribute变量（gl.enableVertexAttribArray()）

// 1. 创建缓冲区： var x = gl.createBuffer() // x非null，失败null
// 删除缓冲区：gl.deleteBuffer(x);

// 2. 绑定缓冲区:gl.bindBuffer(gl.ARRAY_BUFFER, x)
// mdn: https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindBuffer

// 3. 向缓冲区对象写入数据(gl.bufferData())
// mdn: https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData

// 这里为什不能直接向缓冲区写入数据，因为我们没办法直接操作缓冲区数据，
// 所以要向缓冲区写数据，必须先绑定。

// wegbl使用的类型化数组
// Int8Array
// UInt8Array
// Int16Array
// UInt16Array
// Int32Array
// UInt32Array
// Float32Array  单精度32位
// Float64Arryy  双精度64位

// 方法：get(index), set(index, value), set(array, offset)
// length,BYTES_PER_ELEMENT


