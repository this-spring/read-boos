###
 # @Author: xiuquanxu
 # @Company: kaochong
 # @Date: 2020-12-01 00:24:10
 # @LastEditors: xiuquanxu
 # @LastEditTime: 2020-12-01 00:32:28
### 
# --target=wasm32-wasi 目标设置  
# --sysroot=    设置c api对应wasi系统路径
/Users/xuxiuquan/mygithub/wasi-sdk-11.0/bin/clang  --target=wasm32-wasi --sysroot=/Users/xuxiuquan/mygithub/wasi-sdk-11.0/share/wasi-sysroot test-wasi.c -o wasi-app.wasm