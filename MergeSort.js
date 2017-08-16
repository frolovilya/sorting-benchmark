/**
 * Merge Sort
 */

/*var exchange = function(array, i, j) {
	var tmp = array[i];
	array[i] = array[j];
	array[j] = tmp;
}*/

var aux = [];
var merge = function(a, lo, mid, hi) {
	var i = lo, j = mid + 1;
	for(var k = lo; k <= hi; k++) {
		aux[k] = a[k];
	}
	for(var k = lo; k <= hi; k++) {
		if(i > mid) a[k] = aux[j++];
		else if(j > hi) a[k] = aux[i++];
		else if(aux[j] < aux[i]) a[k] = aux[j++];
		else a[k] = aux[i++];
	}
}

var _mergeSort = function(a, lo, hi) {
	if(hi <= lo) return;
	var mid = Math.floor((hi - lo) / 2) + lo;
	_mergeSort(a, lo, mid);
	_mergeSort(a, mid + 1, hi);
	merge(a, lo, mid, hi);	
}

var mergeSort = function(a) {
	_mergeSort(a, 0, a.length - 1);
}

module.exports.sort = mergeSort;