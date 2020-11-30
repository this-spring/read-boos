###
 # @Author: xiuquanxu
 # @Company: kaochong
 # @Date: 2020-12-01 00:24:40
 # @LastEditors: xiuquanxu
 # @LastEditTime: 2020-12-01 00:31:28
### 
# 如果不加--dir=. 的话会有Capabilities insufficient”，这便是 “Capability-based Security” 在 WASI 身上的体现
/Users/xuxiuquan/github/wasmtime-v0.21.0-x86_64-macos/wasmtime wasi-app.wasm  --dir=.