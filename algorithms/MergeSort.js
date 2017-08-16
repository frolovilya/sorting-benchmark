/**
 * Merge Sort
 */

let aux = [];

const merge = function(a, lo, mid, hi) {
	let i = lo, j = mid + 1;

	for(let k = lo; k <= hi; k++) {
		aux[k] = a[k];
	}

	for(let k = lo; k <= hi; k++) {
		if(i > mid) a[k] = aux[j++];
		else if(j > hi) a[k] = aux[i++];
		else if(aux[j] < aux[i]) a[k] = aux[j++];
		else a[k] = aux[i++];
	}
};

const _mergeSort = function(a, lo, hi) {
	if(hi <= lo) return;
	let mid = Math.floor((hi - lo) / 2) + lo;
	_mergeSort(a, lo, mid);
	_mergeSort(a, mid + 1, hi);
	merge(a, lo, mid, hi);	
};

const mergeSort = function(a) {
	_mergeSort(a, 0, a.length - 1);
};

module.exports.sort = mergeSort;