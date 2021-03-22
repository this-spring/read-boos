<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-11 11:46:47
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-03-23 01:05:10
-->

## 第二章  

### webgl的api  

mdn: https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/drawArrays

### gl.drawArrays()  

### webgl坐标系（右手系）

### gl.getAttribLocation(gl.program, 'a_Position')   
找不到返回-1  

### gl.vertexAttrib3f('a_Position', 0.0, 0.0, 0.0)

1f、2f、3f....  

gl.vertexAttrib3fv(position, new Float32Array([1.0, 2.0, 3.0]))

虽然我们声明的是vec4但是我们传递的是3f这是因为webgl会自动帮我们补充一个1.0，对于齐次坐标系来说1.0加不加都可以，对于颜色来说1.0是不透明。  

返回值无(void)

### uniform变量  

只有顶点着色器可以使用attribute变量，片元着色器只能使用uniform变量或者varying变量  

### const u_Color = gl.getUniformLocation(gl.program, 'u_Color')  

返回值，如果存在则返回一个特殊值，如果不存在则返回null  

### gl.uniform4f(u_COlor, 1.0, 0.0, 0.0)

1f、2f、3f...同attribute变量  
uniform[1234][fi][v]()  

返回值void







### end
五子棋