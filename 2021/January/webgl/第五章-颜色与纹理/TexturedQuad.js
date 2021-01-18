/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-18 14:48:06
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-19 00:37:43
*/
var VSHADER_SOURCE = `
    attribute vec4 a_Position;
    attribute vec2 a_TexCoord;
    varying vec2 v_TexCoord;
    void main() {
        gl_Position = a_Position;
        v_TexCoord = a_TexCoord;
    }
`;

var FSHADER_SOURCE = `
    precision mediump float;
    uniform sampler2D u_Sampler;
    varying vec2 v_TexCoord;
    void main() {
        gl_FragColor = texture2D(u_Sampler, v_TexCoord);
    }
`;

function main() {
    var canvas = document.getElementById('webgl');
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.error('init gl error');
        return;
    }
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('iniit shaders error');
        return;
    }
    var n = initVertexBuffers(gl);
    // gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // // gl.drawArrays(gl.POINTS, 0, n);
    // gl.drawArrays(gl.TRIANGLES, 0, n);
    if (!initTextures(gl, n)) {

    }
}

function initVertexBuffers(gl) {
    var verticesTexCoords = new Float32Array([
        -0.5, 0.5, 0.0, 1.0,
        -0.5, -0.5, 0.0, 0.0,
        0.5, 0.5, 1.0, 1.0,
        0.5, -0.5, 1.0, 0.0,
    ]);
    var n = 4;
    var vertexTexCoordBuffer = gl.createBuffer();
    if (!vertexTexCoordBuffer) {
        console.error(' createBuffer error');
        return;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, verticesTexCoords, gl.STATIC_DRAW);
    var FSIZE = verticesTexCoords.BYTES_PER_ELEMENT;
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 4 * FSIZE, 0);
    gl.enableVertexAttribArray(a_Position);

    // 将纹理坐标分配给a_TexCoord
    var a_TexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord');
    gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, 4 * FSIZE, 2 * FSIZE);
    gl.enableVertexAttribArray(a_TexCoord);
    return n;
}

function initTextures(gl, n) {
    // 创建纹理对象
    var texture = gl.createTexture();
    if (!texture) {
        console.error('init texture error');
        return;
    }
    // 获取u_Sampler存储位置
    var u_Sampler =gl.getUniformLocation(gl.program, 'u_Sampler');
    if (!u_Sampler) {
        console.error('init sampler error');
        return;
    }
    var image = new Image();
    if (!image) {
        console.error('init image error');
        return;
    }
    image.onload = function() {
        // 
        loadTexture(gl, n, texture, u_Sampler, image);
    }
    image.src = '../resources/sky.jpg'
    return true;
}

function loadTexture(gl, n, texture, u_Sampler, image) {
    // 对纹理图像进行y轴反转
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    // 开启0号纹理单元
    gl.activeTexture(gl.TEXTURE0);
    // 向target绑定纹理对象
    gl.bindTexture(gl.TEXTURE_2D, texture);
    // 配置纹理对象
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    // 配置纹理图像
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    // 将0号纹理传给着色器
    gl.uniform1i(u_Sampler, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);
}