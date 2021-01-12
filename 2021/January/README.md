<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-11 11:46:47
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-12 20:05:48
-->
## webgl的api  
获取顶点着色器变量和设置顶点着色器变量  
获取：  
```
attribute:var a_Position = gl.getAttribLocation(gl.program, 'name'); // 顶点着色器(数据rgba)
uniform:var u_FragColor = gl.getUniformLocation(gl.progrem, 'name'); // 片元着色器（数据是xyzw（齐次坐标系））
```

设置:  
```
顶点着色器：gl.vertexAttrib4f(a_Position, v0, v1, v2, v3);
片元着色器：gl.uniform4f(u_FragColor, v0, v1, v2, v3);
```

画点：  
```
gl.drawArrays(gl.POINTS, 0, n);
```  

设置缓存区颜色:  
```
gl.clearColor(0.0, 0.0, 0.0, 1.0);
```  

填充颜色：  
``
gl.color(gl.COLOR_BUFFER_BIG);
```