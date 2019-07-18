//----------------------------------------//
// Just pick the most appropriate version //
//----------------------------------------//
//Attribution: https://github.com/Dayjo/joint
/**
 * Joint for joining more than 2 functions.
 * Joins an array of functions together to return a single function
 * @param  {array} a An array of functions
 * @return {function} Returns a function which is an accumilation of functions in 'a'
 */
export default function joint( a: Function[] ): Function {
	let b: Function;
	let c: any;

	b = a[(a.length-1)];

	a.pop();

	if ( a.length > 1 ) {
		c = joint( a );
	} else {
		c = a[0];
	}

	return function(...args: any[]) {
		b.apply( new c(...args), args );
	};
}