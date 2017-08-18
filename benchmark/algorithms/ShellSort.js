/**
 * Shell Sort
 */

const shellSort = function(a) {

	const exchange = function(array, i, j) {
		let tmp = array[i];
		array[i] = array[j];
		array[j] = tmp;
	};

	let N = a.length;
	let h = 1;

	while (h < N / 3) h = 3*h + 1;

	while (h >= 1) {

		for(let i = h; i < N; i++) {
			for(let j = i; j >= h && (a[j] < a[j - h]); j -= h) {
				exchange(a, j, j - h);
			}
		}
		h = Math.floor(h / 3);
	}

};

module.exports.sort = shellSort;