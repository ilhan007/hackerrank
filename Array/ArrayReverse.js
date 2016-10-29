/*
 * Given an array of N integers, reverse the array
 */

/* The JavaScript way */
(function(aNumbers) {
	    return aNumbers.reverse();
})([1, 2, 3, 4, 5]);


(function(aNumbers) {
		var fnReverse = function(aArray) {
			return aArray.map(function(iValue, iIndex, aArray) {
				return aArray[aArray.length - 1 - iIndex];
			});
		};

	    return fnReverse(aNumbers);
})([1, 2, 3, 4, 5]);