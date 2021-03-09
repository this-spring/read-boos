var findLongestWord = function(s, dictionary) {
    dictionary = dictionary.sort();
    let res = '';
    function find(item) {
        let sPr = 0;
        let iPr = 0;
        while(sPr < s.length && iPr < item.length) {
            if (s[sPr] == item[iPr]) {
                sPr += 1;
                iPr += 1;
            } else {
                sPr += 1;
            }
        }
        if (iPr == item.length) {
            return true;
        }
        return false;
    }
    for (let i = 0; i < dictionary.length;i += 1) {
        if (find(dictionary[i])) {
            res = dictionary[i].length > res.length ? dictionary[i] : res;
        }
    }
    return res
};