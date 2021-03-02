/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let head = 0;
    let tail = s.length - 1;
    let error = 0;
    var find = function(i, j) {
        while(i <= j) {
            if (s[i] == s[j]) {
                i += 1;
                j -= 1;
            } else {
                if (error == 0) {
                    head = i;
                    tail = j;
                }
                error += 1;
                return false;
            }
        }
        return true;
    }
    if (!find(head, tail)) {
        return find(head + 1, tail) || find(head, tail - 1);;
    }
    return true;
};