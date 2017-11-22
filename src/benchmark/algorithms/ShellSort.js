/**
 * Shell Sort
 *
 * Time: O(N^2)
 * Space: O(1)
 *
 * + better performance than insertion sort;
 * + less exchanges due to using window to reach far distance elements;
 * + no extra space;
 * - non-stable
 */
const shellSort = function(a) {

	const exchange = function(array, i, j) {
		let tmp = array[i];
		array[i] = array[j];
		array[j] = tmp;
	};

	let N = a.length;

    // find initial window size
	let h = 1;
	while (h < N / 3) h = 3*h + 1;

	while (h >= 1) {
		// insertion sort on h-sized window
		for(let i = h; i < N; i++) {
			for(let j = i; j >= h && (a[j] < a[j - h]); j -= h) {
				exchange(a, j, j - h);
			}
		}
		h = Math.floor(h / 3);
	}

	return a;

};

module.exports.sort = shellSort;