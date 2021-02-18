/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-26 20:28:32
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-27 13:16:59
*/

var VSHADER_SOURCE = `
    attribute vec4 a_Position;
    attribute vec4 a_Color;
    uniform mat4 u_ViewMatrix;
    varying vec4 v_Color;
    void main() {
        gl_Position = u_ViewMatrix * a_Position;
        v_Color = a_Color;
    }
`;

var FSHADER_SOURCE = `
    #ifdef GL_ES
    precision mediump float;
    #endif
    varying vec4 v_Color;
    void main() {
        gl_FragColor = v_Color;
    }
`;

function main() {
    let canvas = document.getElementById('webgl');
    var nf = document.getElementById('nearFar');
    let gl = getWebGLContext(canvas);
    if (!gl) {
        console.error('init gl error');
        return;
    }
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.error('init shader error');
        return;
    }
    var n = initVertexBuffers(gl);
    gl.clearColor(0, 0, 0, 1);
    var u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');
    var viewMatrix = new Matrix4();
    var projMatrix = new Matrix4();
    var g_eyex = 0.0, g_eyey = 0.0, g_eyez = 0.25;
    var g_near = 0.0;
    var g_far = 0.5;
    document.onkeydown = function(ev) {
        // if (ev.keyCode === 39) {
        //     g_eyex += 0.01;
        // } else {
        //     g_eyex -= 0.01;
        // } 
        if (ev.keyCode == 39) {
            g_near += 0.01;
        } else if (ev.keyCode == 37) {
            g_near -= 0.01;
        } else if (ev.keyCode == 38) {
            g_far += 0.01;
        } else {
            g_far -= 0.01;
        }
        draw();
    }
    function draw() {
        projMatrix.setOrtho(-1, 1, -1, 1, g_near, g_far);
        viewMatrix.setLookAt(g_eyex, g_eyey, g_eyez, 0, 0, 0, 0, 1, 0);
        gl.uniformMatrix4fv(u_ViewMatrix, false, projMatrix.elements);
        gl.clear(gl.COLOR_BUFFER_BIT);
        nf.innerHTML = `near:${Math.round(g_near * 100) / 100} far: ${Math.round(g_far * 100) / 100}`;
        gl.drawArrays(gl.TRIANGLES, 0, n); // Draw the rectangle
    }
}

function initVertexBuffers(gl) {
    var verticesColors = new Float32Array([
        0.0,  0.5,  -0.4,  1.0,  0.0,  0.0, // 红
        -0.5, -0.5,  -0.4,  1.0,  0.0,  0.0,
         0.5, -0.5,  -0.4,  1.0,  0.0,  0.0, 
       
         0.5,  0.4,  -0.2,  0.0,  1.0,  0.0, // 绿
        -0.5,  0.4,  -0.2,  0.0,  1.0,  0.0,
         0.0, -0.6,  -0.2,  0.0,  1.0,  0.0, 
    
         0.0,  0.5,   0.0,  0.0,  0.0,  1.0,  // 蓝
        -0.5, -0.5,   0.0,  0.0,  0.0,  1.0,
         0.5, -0.5,   0.0,  0.0,  0.0,  1.0,
    ]);
    var n = 9;
    // 缓冲区
    var vertexColorbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, verticesColors, gl.STATIC_DRAW);
    var FSIZE = verticesColors.BYTES_PER_ELEMENT;
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE * 6, 0);
    gl.enableVertexAttribArray(a_Position);  // Enable the assignment of the buffer object
  
    // Get the storage location of a_Position, assign buffer and enable
    var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
    if(a_Color < 0) {
      console.log('Failed to get the storage location of a_Color');
      return -1;
    }
    // Assign the buffer object to a_Color variable
    gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3);
    gl.enableVertexAttribArray(a_Color);  // Enable the assignment of the buffer object
    return n;
}