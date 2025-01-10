function changeContext(func, obj) {
  // Your code here
  let result = func.call(obj);
  return result;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;