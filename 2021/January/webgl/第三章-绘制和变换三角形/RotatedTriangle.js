/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-13 18:35:49
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-13 19:59:05
*/
// 如何旋转  
// 1. 确定旋转轴
// 2. 旋转方向
// 3. 旋转角度


// 正旋转：遵循右手螺旋定则，大拇指指出屏幕外，四指旋转的方向。  
// 如果是正值那么就是正旋转，如果是负值那么就是逆旋转，所以我们不必要传入正负。通过正负判断是正负旋转


// 纠正attribute和
var VSHADER_SOURCE = `
    // attribute float sina;
    // attribute float cosa;
    uniform float sina;
    uniform float cosa;
    attribute vec4 a_Position;
    void main() {
        gl_Position.x = a_Position.x * cosa - a_Position.y * sina;
        gl_Position.y = a_Position.y * sina + a_Position.y * cosa;
        gl_Position.z = a_Position.z;
        gl_Position.w = 1.0;
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
        console.log(' init gl error');
        return;
    }
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log(' init shaders error');
        return;
    }
    var angle = 0.0;
    var radian = (Math.PI / 180.0) * angle;
    var cosa = Math.cos(radian);
    var sina = Math.sin(radian);
    var cosa = 1.0;
    var sina = 0.0;
    console.log(radian, cosa, sina);
    // var rcosa = gl.getAttribLocation(gl.program, 'cosa');
    // var rsina = gl.getAttribLocation(gl.program, 'sina');
    // gl.vertexAttrib1f(rcosa, cosa);
    // gl.vertexAttrib1f(rsina, sina);
    var rcosa = gl.getUniformLocation(gl.program, 'cosa');
    var rsina = gl.getUniformLocation(gl.program, 'sina');
    gl.uniform1f(rcosa, cosa);
    gl.uniform1f(rsina, sina);
    var n = initBuffer(gl);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    // triangles
    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initBuffer(gl) {
    var vextices = new Float32Array([
        0.5, 0.0,
        0.0, 0.5,
        -0.5, 0.0
    ]);
    // 创建缓冲区
    var vertex = gl.createBuffer();
    // 绑定缓冲区
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex);
    gl.bufferData(gl.ARRAY_BUFFER, vextices, gl.STATIC_DRAW);
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    // 将缓冲区给a_Positoin
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);
    return vextices.length / 2;
}