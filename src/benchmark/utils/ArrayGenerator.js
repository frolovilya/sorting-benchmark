/**
 * Generate random integer
 *
 * @param min number
 * @param max number
 * @returns {number}
 */
const generateRandomIntInclusive = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generate array of given size with random elements in given range
 *
 * @param size array size to generate
 * @param range elements range {min, max}
 * @returns {Array}
 */
const randomizedArray = function(size, range) {
	let a = [];
	for(let i = 0; i < size; i++) {
		a.push(generateRandomIntInclusive(range.min, range.max));
	}

	return a;
};

/**
 * Generate sorted array of given size (0..size)
 *
 * @param size array size to generate
 * @returns {Array}
 */
const sortedArray = function(size) {
	let a = [];
	for(let i = 0; i < size; i++) {
		a.push(i);
	}

	return a;
};

/**
 * Generate descending order sorted array of given size (size..0)
 *
 * @param size array size to generate
 * @returns {Array}
 */
const descSortedArray = function(size) {
    return sortedArray(size).sort((a, b) => a < b);
};

module.exports.randomizedArray = randomizedArray;
module.exports.sortedArray = sortedArray;
module.exports.descSortedArray = descSortedArray;
