/**
 * Array generation helper methods
 */

const generateRandomIntInclusive = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomizedArray = function(size, range) {
	let a = [];
	for(let i = 0; i < size; i++) {
		a.push(generateRandomIntInclusive(range.min, range.max));
	}

	return a;
};

const sortedArray = function(size) {
	let a = [];
	for(let i = 0; i < size; i++) {
		a.push(i);
	}

	return a;
};

const descSortedArray = function(size) {
    return sortedArray(size).sort((a, b) => a < b);
};

module.exports.randomizedArray = randomizedArray;
module.exports.sortedArray = sortedArray;
module.exports.descSortedArray = descSortedArray;
