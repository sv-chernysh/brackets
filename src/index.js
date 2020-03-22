module.exports = function check(str, bracketsConfig) {
  // your solution
    if (str.length % 2) return false;
    let newStr = str;
    while (newStr.length % 2 === 0 && newStr !== "") {
        let checkLength = newStr.length;
        for (let i = 0; i < bracketsConfig.length; i++) {
            let position = newStr.indexOf(bracketsConfig[i].join(''));
            if (position !== -1) {
                newStr = newStr.slice(0, position) + newStr.slice(position + 2);
            }
        }
        if (checkLength === newStr.length) break;
    }
    return !newStr;
};
