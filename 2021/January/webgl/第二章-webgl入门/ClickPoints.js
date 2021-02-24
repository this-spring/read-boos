/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-12 12:29:31
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-02-22 18:58:14
*/
// 注：gl_开头的都是变量
var VSHADER_SOURCE = `
    attribute vec4 a_Position;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = 10.0;
    }
`;

var FSHADER_SOURCE = `
    // 下面这行限定精度范围
    precision mediump float;
    uniform vec4 u_FragColor;
    void main() {
        gl_FragColor = u_FragColor;
    }
`;

function main() {
    var g_points = [];
    var u_points = [];
    var canvas = document.getElementById('webgl');
    var gl = getWebGLContext(canvas);
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.error(' initShader error');
        return;
    }
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
    console.log(` a_Position：${a_Position} u_FragColor:${u_FragColor}`); //  a_Position：0 u_FragColor:[object WebGLUniformLocation]
    if (!u_FragColor) {
        console.error(' u_FragColor error');
        return;
    }
    canvas.onclick = (ev) => {
        var x = ev.clientX;
        var y = ev.clientY;
        var rect = ev.target.getBoundingClientRect();
        // 坐标系平移的时候，点的原则是左加右减
        x = ((x - rect.left) - canvas.height / 2) / (canvas.height / 2);
        y = ((canvas.width / 2 - (y - rect.top)) / (canvas.width / 2));
        // 坐标存储g_points
        g_points.push(x);
        g_points.push(y);
        if (x >= 0 && y >= 0) {
                    gl.clear(gl.COLOR_BUFFER_BIT);

            u_points.push([1.0, 0.0, 0.0, 1.0]);
             // 片元着色器
             gl.uniform4fv(u_FragColor, [1.0, 0.0, 0.0, 1.0]);
             // 顶点着色器
             gl.vertexAttrib2f(a_Position, x , y);
             // 绘制点
             gl.drawArrays(gl.POINTS, 0, 1);
        } else if (x < 0 && y >=0) {
            u_points.push([0.0, 1.0, 0.0, 1.0]);
        } else if (x <= 0 && y <= 0) {
            u_points.push([0.0, 0.0, 1.0, 1.0]);
        } else {
            u_points.push([1.0, 1.0, 1.0, 1.0]);
        }
        return;
        // 如果注释掉这个代码，每次点击后颜色缓冲区就被webgl重置为默认背景色(0.0,0.0,0.0,0.0)
        // 所以我们需要用gl.clear()来用指定的背景色清空
        // gl.clear(gl.COLOR_BUFFER_BIT);
        for (let i = 0, j = 0, len = g_points.length; i < len; i += 2, j ++) {
            // 片元着色器
            gl.uniform4fv(u_FragColor, u_points[j]);
            // 顶点着色器
            gl.vertexAttrib2f(a_Position, g_points[i], g_points[i + 1]);
            // 绘制点
            gl.drawArrays(gl.POINTS, 0, 1);
        }
    }
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

// uniform变量
// <存储限定符><类型><变量>
// uniform vec4 u_FragColor 

// 获取uniform变量存储地址
// var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
// 如果uniform变量不存在或者命名使用了保留字前缀，那么函数返回值是null而不是-1  

// 向uniform变量赋值  
// gl.uniform4f(u_FragColor, v0, v1, v2, v3);
// gl.uniform4fv(u_FragColor, [0.0, 0.0, 0.0, 1.0]);

// gl.uniform1f(location, v0);的同族函数  
// gl.uniform2f(location, v0, v1);的同族函数  
// gl.uniform3f(location, v0, v1, v2);的同族函数  
// gl.uniform4f(location, v0, v1, v2, v3);的同族函数  

// 总结：
// 1. 顶点着色器是一个点一个点操作的
// 2. 片元着色器是一个片元一个片元操作的