/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-13 17:21:47
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-13 18:34:13
*/

var VSHADER_SOURCE = `
    attribute vec4 a_Position;
    uniform vec4 u_Translation;
    void main() {
        gl_Position = a_Position + u_Translation;
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
        console.log('init gl error');
        return;
    }
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('init shaders error');
        return;
    }
    var n = initBuffer(gl);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initBuffer(gl) {
    var vextices = new Float32Array([
        0.5, 0,
        0, 0.5,
        -0.5, 0,
    ]);
    var Mx = 0.2;
    var My = 0.2;
    var Mz = 0.2;
    var n = vextices.length / 2;
    // 创建缓冲区
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vextices, gl.STATIC_DRAW);
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    var u_Translation = gl.getUniformLocation(gl.program, 'u_Translation');
    // 这里齐次坐标系为什么是0.0因为在顶点着色器中进行了相加操作，这个值必须为1.0.
    gl.uniform4f(u_Translation, Mx, My, Mz, 0.0);
    // 将缓冲区给a_Position
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);
    return n;
}