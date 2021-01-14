/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-14 19:03:58
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-14 19:45:40
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
        console.log(' init gl error');
        return;
    }
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log(' init shader error');
        return;
    }
    var n = initBuffer(gl);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    var modelMatrix = new Matrix4();
    var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');

    function tick() {
        draw(gl, u_ModelMatrix, n, modelMatrix);
        requestAnimationFrame(tick)
    }
    tick();
}
let cout = 0;
function draw(gl, u_ModelMatrix, n, modelMatrix) {
    cout += 10;
    var angle = cout;
    modelMatrix.setRotate(angle, 0.0, 0.0, 1.0);
    gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0 ,n);
}


function initBuffer(gl) {
    var vextices = new Float32Array([
        0.0, 0.5,
        -0.5, -0.5,
        0.5, -0.5,
    ]);
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vextices, gl.STATIC_DRAW);
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);
    return vextices.length / 2;
}