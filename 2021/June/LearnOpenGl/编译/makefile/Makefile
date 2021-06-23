# target: source
# 	command...


# $<：第一个依赖文件；

# $@：目标；

# $^：所有不重复的依赖文件，以空格分开​


# obj = main.o fun1.o fun2.o  
# target = app  
# CC = gcc  

# $(target): $(obj)  
#     $(CC) $(obj) -o $(target)  

# %.o: %.c  
#     $(CC) -c $< -o $@

# 模板
# CXX=g++

# CXXFLAGS=-DEBUG -fPIC \
#         -DKC_OS_MAC \
#         -I ../common \
#         -I ../ios \
#         -I . -I ../include \
# 		-L . -L ../lib \
# 		-lpthread \
# 		-lavcodec.57 \
# 		-lavdevice.57 \
# 		-lavfilter.6 \
# 		-lavformat.57 \
# 		-lavutil.55 \
# 		-lswresample.2 \
#         -lkc_mac_common \
# 		-lswscale.4

# CXXFLAGS += -framework CoreVideo -framework AudioToolbox
# CXXFLAGS += -framework CoreAudio -framework AudioUnit -framework Foundation -framework AVFoundation -framework CoreMedia -framework Cocoa
# CXXFLAGS += -framework ForceFeedback -framework Carbon -framework IOKit -weak_framework QuartzCore -weak_framework Metal

# objects = CaptureCamera.o

# tests = ../common/EnumDevices.o CaptureCamera.o main.o

# lib: $(objects)
# 	$(CXX) -dynamiclib $(CXXFLAGS) -o ../lib/libcamera_capture.dylib $(objects) -Wl,-rpath,@loader_path,-rpath,@loader_path/../lib

# $(objects): %.o: %.cpp
# https://www.cnblogs.com/liqiu/archive/2013/03/15/2961518.html // %.o:%.cpp解释
# 	$(CXX) $(CXXFLAGS) -c $< -o $@

# test: $(tests)
# 	$(CXX) $(CXXFLAGS) -o demo $(tests) -Wl,-rpath,@loader_path,-rpath,@loader_path/../lib

# $(tests): %.o: %.cpp
# 	$(CXX) $(CXXFLAGS) -c $< -o $@

# clean:
# 	rm -f *.o *.dylib test.yuv rawvideo.yuv demo



CXX=g++

CXXFLAG = -I ../../include/ \
		-I /usr/local/include \
		-L /usr/local/Cellar/glew/2.1.0_1/lib/ \
		-L ../../lib/  \
		-lglfw \
		-lglad \

CXXFLAG+= -framework OpenGL

src=hello-window.cpp

target=app

${target}: $(src)
	${CXX}  ${CXXFLAG} $(src) -o $@

clean:
	rm -rf $(target)
