/**
 * Insertion Sort
 */

const insertionSort = function(a) {

	const exchange = function(array, i, j) {
		let tmp = array[i];
		array[i] = array[j];
		array[j] = tmp;
	};

	for(let i = 1; i < a.length; i++) {
		for(let j = i; j > 0 && (a[j] < a[j - 1]); j--) {
			exchange(a, j, j - 1);
		}
	}

	return a;

};

module.exports.sort = insertionSort;