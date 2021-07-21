/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-06-28 15:57:05
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-06-28 19:28:32
*/
#include <iostream>
#include <napi.h>
#include "render.h"

Napi::Env *global_env = nullptr;
Napi::Function *JsRenderText = nullptr;
Napi::Function *JsEvalJs = nullptr;

// void pollHtml() {
//     (&JsRenderText).Call(*global_env->Global());
// }

void RunCallback(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::Function cb = info[0].As<Napi::Function>();
  cb.Call(env.Global(), {Napi::String::New(env, "hello world")});
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  return Napi::Function::New(env, RunCallback);
}

void BindMethod(const Napi::CallbackInfo& info) {
    JsRenderText = &(info[0].As<Napi::Function>());
    JsEvalJs = &(info[1].As<Napi::Function>());
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    global_env = &env;
    exports.Set(Napi::String::New(env, "BindMethod"), Napi::Function::New(env, BindMethod));
    return exports;
}

// 固定的宏使用
NODE_API_MODULE(addon, Init);