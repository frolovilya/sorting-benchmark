/**
 * Selection Sort
 */

var selectionSort = function(a) {

	var exchange = function(array, i, j) {
		var tmp = array[i];
		array[i] = array[j];
		array[j] = tmp;
	}

	for(var i = 0; i < a.length; i++) {

		var min = i;

		for(var j = i + 1; j < a.length; j++) {
			if(a[j] < a[min]) {
				min = j;
			}
		}

		if(min != i) {
			exchange(a, i, min);
		}

	}
}

module.exports.sort = selectionSort;