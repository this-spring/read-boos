<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-02-25 23:50:59
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-03-01 22:42:28
-->
### 非坐标数据传入顶点着色器  

可以通过创建缓存去对象方式传入。例如我们可以创建两个缓冲区对象一个传入顶点，一个传入point_size  

### 使用一个缓存区对象传入多种数据

我们可以只建立一个缓存区对象，然后通过vertexAttribPointer来指定每个a_Position和a_PointSize从哪里以及取多少数据。例如：  
```
var verticesSize = new Float32Array([
    0.0, 0.5, 10.0,
    -0.5, -0.5, 20.0,
    0.5, -0.5, 30.0
]);
....
var FSIZE = verticesSizes.BYTES_PER_ELEMENTS;
gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 3 * FSIZE, 0);
2：代表取两个长度x,y
3 * FSIZE：代表每次取偏移的字节数(stride)
0: 代表每次取得选项中从第几个开始偏移(offset)

gl.vertexAttributePointer(a_PointSize, 1, gl.FLOAT, false, 3 * FSIZE, 2 * FSIZE)
```

### 几何形状的装配和光栅化  

图形装配：这一步任务是，将孤立的顶点坐标装配成几何图形。几何图形的类别由gl.drawArrays()函数的第一个参数决定  

光栅化：这一步的任务是，将装配好的几何图形转化为片元的过程称为光栅化  

gl_Position实际上是**几何图形装配**阶段的输入数据。几何图形装配过程又被称为**图元装配过程**,因为被装配出的基本图形又称为**图元**

**片元数目就是这个三角形最终在屏幕上锁覆盖的像素数**  

### 调用片元着色器  
一旦光栅化过程结束后，程序就开始足片元调用片元着色器。片元着色器被调用多次，每调用一次就处理一个片元，对于每个片元，片元着色器计算出该片元的颜色，并写入**颜色缓冲区**，当最后一个片元被处理完成，浏览器就会渲染颜色缓冲区结果。  

### 总结webgl渲染流程  
编写顶点着色器和片元着色器->顶点着色器进行绘制点操作->图元装配（根据点绘制图形）->光栅化(根据图形进行片元处理)->顶点着色器进行片元处理->将颜色信息输出到颜色缓冲区->显示到屏幕上