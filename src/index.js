module.exports = function check(str, bracketsConfig) {
  let arr = [];
  if (str.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    for (let x = 0; x < bracketsConfig.length; x++) {
      if ((str[i] == bracketsConfig[x][1]) && (arr[arr.length - 1] ==  bracketsConfig[x][0])) {
        arr.pop(arr.length - 1);
      } else if (bracketsConfig[x][0] == str[i]) {
        arr.push(str[i]);
      }
    }    
  }
  return arr.length == 0;
}