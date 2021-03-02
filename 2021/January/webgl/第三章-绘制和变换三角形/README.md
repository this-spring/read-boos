<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-12 18:34:55
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-02-25 12:14:18
-->
## 三角形  
不管三维模型的形状多么复杂，基本组成都是**三角形** 

## 缓冲区(buffer object)  
webgl提供了一种一次性将多个顶点同时全部传入给顶点着色器，然后画出来的的方式，即顶点着色器。

### 使用缓存区  

#### 步骤一定义缓存区  
```
var vertexBuffer = gl.createBuffer();
if (!vertexBuffer) {
    console.log("failed to create the buffer object");
    return -1;
}
```

#### 步骤二绑定缓冲区对象到目标  
```
const vertexBuffer = new Float([
    0.0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
]);
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
```

#### 步骤三向缓冲区对象中写入数据
```
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
```

#### 步骤四分配position对象
```
var a_Position = gl.getAttribLocation(gl.program, 'a_Positioin');
<!-- 告诉显卡从当前绑定的缓冲区（bindBuffer()指定的缓冲区）中读取顶点数据。

 -->
gl.vertexAttribPointer(a_Position, 2. gl.FLOAT, false, 0, 0);
```

#### 步骤五链接position变量与分配给她的缓冲对象
```
gl.enableVertexAttribArray(a_Position);
```

#### 总结webgl目前阶段渲染流程  

js代码->绑定缓冲区对象->向缓冲区对象写入数据->顶点着色器从缓冲区取数据->片元着色器进行光栅化->将结果吐给颜色颜色缓存区->渲染到浏览器

## 重点  
平移、旋转和缩放，本章重点，详细了解通过矩阵实现平移、旋转和缩放过程