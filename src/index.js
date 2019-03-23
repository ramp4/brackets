module.exports = function check(str, bracketsConfig) {
  let lengthConfig = bracketsConfig.length;
  let pair = {};
  for (i = 0; i < lengthConfig; i++) {
    pair[bracketsConfig[i][0]] = bracketsConfig[i][1];
   
  }
  let stack = [];
  let lengthStr = str.length; 
  for (i = 0; i < lengthStr; i++) {
    let char = str.charAt(i);
        for (j = 0; j < lengthConfig; j++) {
          if (char == bracketsConfig[j][0]) { 
            stack.push(pair[char]); 
          }
          if (char == bracketsConfig[j][1]) {
            if (0 == stack.length)
              return false;
            if (stack[stack.length - 1] != char ) 
              return false;  
          stack.pop();            
          };
        };
    
  };
  if (stack.length) 
      return false;
  return true;
}
