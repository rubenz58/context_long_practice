function boundFuncTimer(obj, func, delay) {
  // Your code here

  let funk = func.bind(obj);

  setTimeout(funk, delay);

  /* Write a function named boundFuncTimer(obj, func, delay) that will accept am object obj, a function func, and delay which is a number representing milliseconds. The boundFuncTimer should invoke the function func with obj as its context after a delay. */
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;