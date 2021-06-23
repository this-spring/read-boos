###
 # @Author: xiuquanxu
 # @Company: kaochong
 # @Date: 2021-06-22 15:10:54
 # @LastEditors: xiuquanxu
 # @LastEditTime: 2021-06-23 14:46:05
### 
g++ hello-window.cpp \
    -framework OpenGL \
    -I ../../include/ \
    -I /usr/local/include \
    -L /usr/local/Cellar/glew/2.1.0_1/lib \
    -L ../../lib/  \
    -lglfw \
    -lglad \
    -o hello-window.a
