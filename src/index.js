
module.exports = function check(str, bracketsConfig) {
  let lengthConfig = bracketsConfig.length;
  let pair = {};
  let status = {};
  
  for (i = 0; i < lengthConfig; i++) {
    pair[bracketsConfig[i][0]] = bracketsConfig[i][1];
    status[bracketsConfig[i][1]] = "closed";

  }
  let stack = [];
  let lengthStr = str.length;
  for (i = 0; i < lengthStr; i++) {
    let char = str[i];
    for (j = 0; j < lengthConfig; j++) {
      if (char != pair[char]) {
        if (char == bracketsConfig[j][0]) {
          stack.push(pair[char]);
          break;
        }
        else
          if (char == bracketsConfig[j][1]) {
            if (0 === stack.length)
              return false;
            if (stack[stack.length - 1] != char)
              return false;
            stack.pop();
            break;
          };
      }
      else
        if (status[char] == "closed") {
          stack.push(pair[char]);
          status[char] = "opened";
          break;
          
        }
        else
          if (status[char] == "opened") {
            if (0 === stack.length)
              return false;
            if (stack[stack.length - 1 ] != char)
              return false;
              console.log(stack.length);
            stack.pop();
            status[char] = "closed";
            break;
          };

    };

  };
  if (stack.length)
    return false;
  return true;
}
