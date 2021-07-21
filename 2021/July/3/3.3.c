/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-07-19 19:39:42
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-07-19 19:43:04
 */
int printf(const char* format, ...);
int glbal_init_var = 84;
int global_uninit_var;

void func1(int i) {
    printf(" %d \n", i);
}

int main() {
    static int static_var = 85;
    static int static_var2;
    int a = 1;
    int b;
    func1(static_var + static_var2 + a + b);
    return a;
}

