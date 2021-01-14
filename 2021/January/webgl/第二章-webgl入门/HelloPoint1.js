/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-11 15:29:50
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-11 17:33:36
*/
// 顶点着色器  
var VSHADER_SOURCE = `void main() {
    gl_Position = vec4(0.5, 0, 0, 1.0); // 设置坐标
    gl_PointSize = 10.0;
}`;
// 片元着色器
var FSHADER_SOURCE = `void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;
function main() {
    var canvas = document.getElementById('webgl');
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.error('gl init error');
        return;
    }
    // 初始化着色器
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.error('init shader error');
        return;
    }
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
    
}

// 着色器是什么：在三维场景中，简单的用线和点来描述空间是不够的的，你必须要考虑光照等因素。着色器可以高度完成这些工作，提供丰富的效果
// 顶点着色器用来描述顶点特性的

// 片元着色器用来描述片元处理过程。片元可以理解为像素  

// 这里需要注意一个问题：webgl是如何加载字符串的glsl语法的

// GLSL语言中的数据类型
// 1. float
// 2. vec4(float1, float2, float3, float4) = vec4(r, g, b, a)
