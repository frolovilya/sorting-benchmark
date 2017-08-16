/**
 * Shell Sort
 */

var shellSort = function(a) {

	var exchange = function(array, i, j) {
		var tmp = array[i];
		array[i] = array[j];
		array[j] = tmp;
	}

	var N = a.length;
	var h = 1;

	while (h < N / 3) h = 3*h + 1;

	while (h >= 1) {

		for(var i = h; i < N; i++) {
			for(var j = i; j >= h && (a[j] < a[j - h]); j -= h) {
				exchange(a, j, j - h);
			}
		}
		h = Math.floor(h / 3);
	}

	
}

module.exports.sort = shellSort;