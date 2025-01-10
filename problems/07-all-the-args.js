function allTheArgs(func, ...args) {
  // Your code here

  let funk = func.bind(this, args);

  return funk;

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;