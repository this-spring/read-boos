/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-06-25 00:34:56
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-06-25 17:17:40
 */

#include <napi.h>

double add2(double a, double b) {
    return a + b;
}

Napi::Value Add(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    // 接受参数
    double arg0 = info[0].As<Napi::Number>().DoubleValue();
    double arg1 = info[1].As<Napi::Number>().DoubleValue();
    // 相加
    double res = add2(arg0, arg1);
    Napi::Number num = Napi::Number::New(env, res);
    return num;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    // add函数挂载到exports上
    exports.Set(Napi::String::New(env, "add"), Napi::Function::New(env, Add));
    return exports;
}


int main() {
    printf("xxx");
}

// 固定的宏使用
NODE_API_MODULE(addon, Init)