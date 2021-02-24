<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-31 13:29:35
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-02-22 18:18:26
-->
## 顶点着色器和片元着色器的理解  
webgl 里面的基本图元是三角形，所有图形都是有很多个三角形组成的，顶点着色器为这些三角形的顶点着色，三角形内部区域的颜色会由 gpu 进行插值填充，你可以通过片元着色器为三角形区域内的每一个点着色，从而替代默认的插值方式

## gl常用的操作  

```
设置背景色  
gl.clearColor(0.0, 0.0, 0.0, 1.0)

清除canvas
gl.clear(gl.COLOR_BUFFER_BIT)

绘制
gl.drawArrays(gl.POINTS, 0, 1);
```  


## js和gles语言交互(attribute和uniform)  

### attribute使用

#### 1. 顶点着色器声明  
```
var VSHADER_SOURCE = `
    attribute vec4 a_Position;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = 10.0;
    }
`;
```

#### 2. js获取attribute变量存储位置
```
var a_Position = gl.getAttribLocatioin(gl.program, 'a_Position');
```

#### 3. 将顶点位置传输给attribute变量
```
gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0)
```

### uniform使用  
只有顶点着色器才能使用attribute变量，使用片元着色器时，你需要使用uniform变量，或者你可以使用varying。uniform变量用来从js向顶点着色器和片元着色器传输一致(不变)的数据。


#### 1. 顶点着色器声明
```
var FSHADER_SOURCE = `
    precision mediump float;
    uniform vec4 u_FragColor;
    void main() {
        gl_FragColor = u_FragColor;
    }
`;
```

#### 2. js获取uniform变量存储位置  
```
var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
if (!u_FragColor) {
    console.log('error');
}
```  

#### 3.将顶点位置传输给uniform变量
```
gl.uniform4f(u_FragColor, 0, 0, 0, 0);
```