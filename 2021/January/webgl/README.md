<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-11 11:46:47
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-03-25 23:26:11
-->

## 第二章  

### webgl的api  

mdn: https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/drawArrays

### gl.drawArrays()  

根据着色器画点、线、三角形

### webgl坐标系（右手系）

### gl.getAttribLocation(gl.program, 'a_Position')   
获取attribute变量的locatioin
找不到返回-1  

### gl.vertexAttrib3f('a_Position', 0.0, 0.0, 0.0)
给attribute变量进行赋值
1f、2f、3f....  

gl.vertexAttrib3fv(position, new Float32Array([1.0, 2.0, 3.0]))

虽然我们声明的是vec4但是我们传递的是3f这是因为webgl会自动帮我们补充一个1.0，对于齐次坐标系来说1.0加不加都可以，对于颜色来说1.0是不透明。  

返回值无(void)

### uniform变量  

只有顶点着色器可以使用attribute变量，片元着色器只能使用uniform变量或者varying变量  

### const u_Color = gl.getUniformLocation(gl.program, 'u_Color')  
获取uniform变量

返回值，如果存在则返回一个特殊值，如果不存在则返回null  

### gl.uniform4f(u_COlor, 1.0, 0.0, 0.0)
给uniform变量赋∏值
1f、2f、3f...同attribute变量  
uniform[1234][fi][v]()  

返回值void

## 第三章  

### 使用缓冲区对象  

缓冲区对象是给顶点着色器使用的  

### gl.createBuffer()  
创建缓冲区
返回值：  
返回一个用于存储顶点数据或着色数据的WebGLBuffer对象

### gl.deleteBuffer(buffer)  
删除参数buffer的缓存区对象
返回值：
null
### gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);  

返回值：  
none

### gl.bindData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)  
绑定缓冲区

### gl.vertexAttribPointer(location, size, type, nomalized, stride, offset)  
该方法可以将整个缓冲区对象分配给attribute变量
location: attribute变量位置  
size: 每个顶点分量个数(若size币attribute变量小，确实分量将按照与gl.vertexAttib[1234]f()相同规则补全,比如size为1，那么2，3分量自动设置为0，4分量为1)  
type:  gl.FLOAT等类型  
normalize: 表明是否将非浮点型的数据诡异化到[0,1]或[-1,1]区间  
stride: 指定相邻两个顶点间的字节数默认为0  
offset：指定缓冲区对象中的偏移量，从第几个字节开始  

### gl.enableVertexAttribArray(location)  
开启attribute变量  

### gl.disableVertexAttribArray(locaction)  
关闭分配

### 平移  
直接在原来的基础点上加上需要平移的距离  
eg：  
```
vec4(原) + vec4(移动) = vec4(目标)  

shader:  
attribute vec4 a_Position;
uniform vec4 u_Translation;
void main() {
    gl_Position = a_Position + u_Translation;
}
```

### 旋转  
```
旋转：  
1. 旋转轴
2. 旋转方向
3. 旋转角度
```
旋转计算公式：  
```
x1 = x*cos@ - y*sin@;
y1 = x*sin@ + y*cos@;
z1 = z;
shader: 
attribute vec4 a_Position;
uniform float u_Cos;
uniform float u_Sin;
void main() {
    gl_Positioin.x = a_Position.x * u_Cos - a_Position.y * u_Sin;
    gl_Position.y = a_Position.x * u_Sin + a_Position * u_Cos;
    gl_Position.z = a_Position.z;
    gl_Positin.w = 1.0;
}
```

### 变换矩阵  
变换矩阵非常适合计算机图形学
矩阵 * 矢量 = 新的矢量  
```
[
    x1
    y1
    z1
]

=
[
    a b c,
    d e f,
    g h j,
]
*
[
    x
    y
    z
]
``` 

### 通过矩阵实现旋转  
```
实现方式为根据公式：  
x1 = x*cos@ - y*sin@;
y1 = x*sin@ + y*cos@;
z1 = z;
可知：  
[
    x1
    y1
    z1
    1
]
=
[
    cos@  -sin@ 0 0
    sin@  cos@  0 0
    0        0  1 0
    0        0  0 1
]
*
[
    x
    y
    z
    1
]
```
在通过矩阵进行变换时候有一个问题，那就是我们使用的TypeArray(Float32Array)是一维数组没有办法存储二维数组，因此我们采用主列序或者主行序存储。webgl中采用主列序进行存储。  

因此上面的数据存储为：  
```
var matrix = new Float32Array([
    cos@, sin@, 0, 0,
    0sin@, cos@, 0, 0,
    ...
    ...
])
```
### 通过矩阵进行平移  
```
根据公式：
x1 = x + Tx
y1 = y + Ty
z1 = z + Tz
1 = 1
可知：
var matrix = new Float32Array([
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    Tx, Ty, Tz, 1.0
])
```  

### 通过矩阵进行缩放  

```
根据公式：
x1 = x * Sx
y1 = y * Sy
z1 = z * Sz
可知：  
var matrix = new Float32Array([
    Sx, 0, 0, 0,
    0, Sy, 0, 0,
    0, 0, Sz, 0,
    0, 0, 0, 1
]);
```  

## 总结  
1. 熟悉webgl各种API。获取Attribute和Unifrom变量然后进行赋值。以及掌握使用顶点着色器的缓冲区。
2. 掌握了通过矩阵进行平移、旋转、变换操作。
3. 使用时候注意各种异常处理包括，getAttribLocation时候返回-1处理。
4. 通过平移等matrix编写shader即可实现平移等操作。