/**
 * Insertion Sort
 */

var insertionSort = function(a) {

	var exchange = function(array, i, j) {
		var tmp = array[i];
		array[i] = array[j];
		array[j] = tmp;
	}

	for(var i = 1; i < a.length; i++) {
		for(var j = i; j > 0 && (a[j] < a[j - 1]); j--) {
			exchange(a, j, j - 1);
		}
	}
}

module.exports.sort = insertionSort;