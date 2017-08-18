/**
 * Selection Sort
 */

const selectionSort = function(a) {

	const exchange = function(array, i, j) {
		let tmp = array[i];
		array[i] = array[j];
		array[j] = tmp;
	};

	for(let i = 0; i < a.length; i++) {

		let min = i;

		for(let j = i + 1; j < a.length; j++) {
			if(a[j] < a[min]) {
				min = j;
			}
		}

		if(min != i) {
			exchange(a, i, min);
		}
	}

	return a;

};

module.exports.sort = selectionSort;