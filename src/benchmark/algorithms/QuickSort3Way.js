/**
 * Quick Sort 3 Way
 *
 * Time: O(N*logN)
 * Space: O(logN) (stack size)
 *
 * + same properties as Quick Sort
 * + handles equal elements thus reducing sub arrays sizes
 */

const swap = function(items, firstIndex, secondIndex) {
    let temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
};

/**
 * Partition array using Dijkstra Dutch Flag algorithm:
 *
 * [lo, lt - 1] - elements lower than pivot
 * [lt, i - 1] - elements equal to pivot
 * [i, gt] - unchecked elements
 * [gt + 1, hi] - elements greater than pivot
 */
const partition = function(items, lo, hi) {
    let pivot = items[lo],
        lt = lo,
        gt = hi;

    for(let i = lo; i <= gt;) {
        if(items[i] < pivot) {
            swap(items, lt++, i++);

        } else if(items[i] > pivot) {
            swap(items, gt--, i);

        } else {
            i++;
        }
    }

    return [ lt - 1, gt + 1 ];
};

const _quickSort = function(items, left, right) {

    if (items.length > 1) {

        const bounds = partition(items, left, right);

        if (left < bounds[0]) {
            _quickSort(items, left, bounds[0]);
        }

        if (bounds[1] < right) {
            _quickSort(items, bounds[1], right);
        }

    }

    return items;

};

const quickSort3Way = function(a) {
    return _quickSort(a, 0, a.length - 1);
};

module.exports.sort = quickSort3Way;