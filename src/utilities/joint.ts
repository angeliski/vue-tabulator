// ----------------------------------------//
// Just pick the most appropriate version //
// ----------------------------------------//
// Attribution: https://github.com/Dayjo/joint
/**
 * Joint for joining more than 2 functions.
 * Joins an array of functions together to return a single function
 * @param  {array} a An array of functions
 * @return {function} Returns a function which is an accumilation of functions in 'a'
 */
export default function joint(a: Function[]): Function {
  // const b: Function;
  let C: any;

  const b = a[(a.length - 1)];

  a.pop();

  if (a.length > 1) {
    C = joint(a);
  } else {
    [C] = a;
  }

  return (...args: any[]) => {
    b.apply(new C(...args), args);
  };
}
