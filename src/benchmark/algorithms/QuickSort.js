/**
 * Quick Sort
 *
 * Time: O(N*logN)
 * Space: O(logN) (stack size)
 *
 * + fastest sort in average;
 * - can degrade to O(N^2);
 * - non-stable
 */

const swap = function(items, firstIndex, secondIndex) {
	let temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
};

/**
 * Partition array:
 * 1. define pivot element V;
 * 2. restructure array to have all elements x <= V <= y
 */
const partition = function(items, left, right) {
	let pivot = items[Math.floor((right + left) / 2)],
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

const _quickSort = function(items, left, right) {

	let index;

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

};

const quickSort = function(a) {
	return _quickSort(a, 0, a.length - 1);
};

module.exports.sort = quickSort;