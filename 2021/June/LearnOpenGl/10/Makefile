###
 # @Author: xiuquanxu
 # @Company: kaochong
 # @Date: 2021-06-22 15:10:54
 # @LastEditors: xiuquanxu
 # @LastEditTime: 2021-06-23 14:13:20
### 
CXX=g++

CXXFLAGS = -I ../include/  \
		-I /usr/local/include/  \
		-I /usr/include/ \
		-L /usr/lib/ \
		-L /usr/local/Cellar/glew/2.1.0_1/lib/  \
		-L ../lib/  \
		-lfreetype \
		-lbz2 \
		-lglfw  \
		-lglad  \
		-lz \
		-lpng \
		

CXXFLAGS+=-framework OpenGL

src=render.cpp
target=app

${target}: ${src}
	${CXX} ${CXXFLAGS} $< -o $@

clean:
	rm -rf ${target}

