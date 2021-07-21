/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-06-28 16:05:19
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-06-28 17:28:45
*/
#include <thread>
#include <iostream>
#include "render.h"

int main() {
    // pthread_t threads[1];
    // int indexs[1];
    // int ret = pthread_create(&threads[0], NULL, initRender, (void *)&(indexs[0]));
    // std::thread t{initRender};
    // t.join();

    initRender();
    return 0;
}
