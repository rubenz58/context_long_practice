function bindToAnArg(func, arg) {
  // Your code here

  let funk = func.bind(this, arg);
  
  return funk;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;