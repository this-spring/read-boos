cmake_minimum_required(VERSION 2.8)
project(test_opengl)

set(CMAKE_VERBOSE_MAKEFILE OFF)

# glfw和glew的头文件目录，这是我的路径，你可以换成你自己的
include_directories(/usr/local/include)
aux_source_directory("./" SRCS)

set(CMAKE_CXX_FLAGS "-g -std=c++11 -Wformat")

# glew的库目录路径
link_directories(/usr/local/Cellar/glew/2.1.0_1/lib)
# glfw的库目录路径
link_directories(/usr/local/Cellar/glfw/3.3.1/lib)
add_executable(test_opengl ${SRCS} ${HDRS})

# 指定glew库
target_link_libraries(test_opengl GLEW)
# 指定glfw库
target_link_libraries(test_opengl GLFW)