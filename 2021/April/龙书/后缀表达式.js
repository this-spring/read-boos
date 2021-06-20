/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-04-07 22:02:04
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-04-07 22:13:14
*/
// 中缀 1 + 2 - 3
// 后缀 12+3-
const test = '12+3-';
function Back(str) {
    str = str.split('');
    let i = 0;
    while(i < str.length) {
        console.log(str[i]);
        if (str[i] == '+') {
            str[i] = parseInt(str[i - 1]) + parseInt(str[i - 2]);
        } else  if (str[i] == '-') {
            str[i] = parseInt(str[i - 1]) - parseInt(str[i - 2]);
        } else  if (str[i] == '*') {
            str[i] = parseInt(str[i - 1]) * parseInt(str[i - 2]);
        } else  if (str[i] == '/') {
            str[i] = parseInt(str[i - 1]) / parseInt(str[i - 2]);
        }
        i += 1;
    }
    console.log(str);
    return str[str.length - 1];
}
console.log(Back(test));
