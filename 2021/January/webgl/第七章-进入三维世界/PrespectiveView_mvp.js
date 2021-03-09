/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-26 20:28:32
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-03-09 13:14:58
*/

var VSHADER_SOURCE = `
    attribute vec4 a_Position;
    attribute vec4 a_Color;
    uniform mat4 u_ViewMatrix;
    uniform mat4 u_ModelMatrix;
    uniform mat4 u_ProjMatrix;
    varying vec4 v_Color;
    void main() {
        gl_Position = u_ProjMatrix * u_ModelMatrix * u_ViewMatrix * a_Position;
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
    var u_ProjMatrix = gl.getUniformLocation(gl.program, 'u_ProjMatrix');
    var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
    var modelMatrix = new Matrix4(); // 模型矩阵
    var viewMatrix = new Matrix4();
    var projMatrix = new Matrix4();
    // 设置模型矩阵
    modelMatrix.setTranslate(0.75, 0, 0);
    // 设置视图矩阵
    viewMatrix.setLookAt(0, 0, 5, 0, 0, -100, 0, 1, 0);
    // 设置透视投影矩阵
    projMatrix.setPerspective(30, canvas.width / canvas.height, 1, 100);
    // 视点、观察点、正方向
    gl.uniformMatrix4fv(u_ViewMatrix, false, viewMatrix.elements);
    gl.uniformMatrix4fv(u_ProjMatrix, false, projMatrix.elements);
    gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, n); // Draw the rectangle
    // 为另一侧三角形计算矩阵模型
    modelMatrix.setTranslate(-0.75, 0, 0);
    gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initVertexBuffers(gl) {
    var verticesColors = new Float32Array([
   // Three triangles on the right side
   0.75,  1.0,  -4.0,  0.4,  1.0,  0.4, // The back green one
   0.25, -1.0,  -4.0,  0.4,  1.0,  0.4,
   1.25, -1.0,  -4.0,  1.0,  0.4,  0.4, 

   0.75,  1.0,  -2.0,  1.0,  1.0,  0.4, // The middle yellow one
   0.25, -1.0,  -2.0,  1.0,  1.0,  0.4,
   1.25, -1.0,  -2.0,  1.0,  0.4,  0.4, 

   0.75,  1.0,   0.0,  0.4,  0.4,  1.0,  // The front blue one 
   0.25, -1.0,   0.0,  0.4,  0.4,  1.0,
   1.25, -1.0,   0.0,  1.0,  0.4,  0.4, 

   // Three triangles on the left side
  -0.75,  1.0,  -4.0,  0.4,  1.0,  0.4, // The back green one
  -1.25, -1.0,  -4.0,  0.4,  1.0,  0.4,
  -0.25, -1.0,  -4.0,  1.0,  0.4,  0.4, 

  -0.75,  1.0,  -2.0,  1.0,  1.0,  0.4, // The middle yellow one
  -1.25, -1.0,  -2.0,  1.0,  1.0,  0.4,
  -0.25, -1.0,  -2.0,  1.0,  0.4,  0.4, 

  -0.75,  1.0,   0.0,  0.4,  0.4,  1.0,  // The front blue one 
  -1.25, -1.0,   0.0,  0.4,  0.4,  1.0,
  -0.25, -1.0,   0.0,  1.0,  0.4,  0.4, 
    ]);
    var n = 18;
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

// Matrix4.setPerspectivre(fov, aspect, near, far) // 定义透视投影可视空间
// fov: 指定垂直视角，可视空间顶面和底面的夹角，必须大于0
// aspect：近剪裁面的宽和高的比
// near：指定近剪裁面和远剪裁面的位置