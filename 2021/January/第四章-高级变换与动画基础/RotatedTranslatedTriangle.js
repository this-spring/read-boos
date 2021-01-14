/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-14 15:33:51
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-14 18:19:35
*/

var VSHADER_SOURCE = `
    attribute vec4 a_Position;
    uniform mat4 u_ModelMatrix;
    void main() {
        gl_Position = a_Position * u_ModelMatrix;
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
        console.log('gl init error');
        return;
    }
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('shaders init error');
        return;
    }
    var n = initBuffer(gl);
    var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
    // 设置值
    // 创建Matrix4对象进行模型变换
    var modelMatrix = new Matrix4();
    // 计算模型矩阵
    var angle = 90.0;
    var mx = 0.5;
    // 旋转
    modelMatrix.setRotate(angle, 0, 0 , 1);
    // 平移
    modelMatrix.translate(mx, 0, 0);
    // 将模型矩阵传输给顶点着色器
    gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0 ,n);
}

function initBuffer(gl) {
    var vextices = new Float32Array([
        0.0, 0.5,
        -0.5, -0.5,
        0.5, -0.5
    ]);
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    // 创建缓存区
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vextices, gl.STATIC_DRAW);
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);
    return vextices.length / 2;
}