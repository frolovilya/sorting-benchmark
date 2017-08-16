/*
 * Quick Sort
 */

var swap = function(items, firstIndex, secondIndex) {
	var temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
};

var partition = function(items, left, right) {
	var pivot = items[Math.floor((right + left) / 2)],
		i = left,
		j = right;

	while (i <= j) {
		while (items[i] < pivot) {
			i++;
		}
		while (items[j] > pivot) {
			j--;
		}
		if (i <= j) {
			swap(items, i, j);
			i++;
			j--;
		}
	}
	return i;
};

var _quickSort = function(items, left, right) {

	var index;

	if (items.length > 1) {

		index = partition(items, left, right);

		if (left < index - 1) {
			_quickSort(items, left, index - 1);
		}

		if (index < right) {
			_quickSort(items, index, right);
		}

	}

	return items;
}

var quickSort = function(a) {
	return _quickSort(a, 0, a.length - 1);
};

module.exports.sort = quickSort;