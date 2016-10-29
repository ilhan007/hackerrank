/*
* A left rotation operation on an array of size N shifts
* each of the array's elements one unit to the left.
* For example,
* if left rotations are performed on array [1,2,3,4,5], 
* then the array would become [3,4,5,1,2].

* Given an array of N integers and a number K, perform K left rotations on the array. 
*/
(function(aNumbers, iLeftRotations) {
	    var bNoRotation = aNumbers.length === iLeftRotations || iLeftRotations === 0;

	    if (bNoRotation) {
	        return aNumbers;
	    }
	    
	    for (var i = 0; i < iLeftRotations; i++) {
	        aNumbers.push(aNumbers.shift());
	    }

	    return aNumbers;
})([1, 2, 3, 4, 5], 3);