function callOnTarget(func, obj1, obj2) {
  // Your code here
  /* Write a function named callOnTarget(func, obj1, obj2) that will accept a function func and two objects, obj1 and obj2. callOnTarget should return the result of the function func invoked with obj1 as its context and obj2 as the first argument. */

  let result = func.call(obj1, obj2);
  return result;




}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;