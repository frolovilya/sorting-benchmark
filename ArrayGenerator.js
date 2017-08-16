/**
 * Array generation helper methods
 */

const generateRandomIntInclusive = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.randomizedArray = function(size, range) {
	let a = [];
	for(let i = 0; i < size; i++) {
		a.push(generateRandomIntInclusive(range.min, range.max));
	}

	return a;
};

module.exports.sortedArray = function(size) {
	let a = [];
	for(let i = 0; i < size; i++) {
		a.push(i);
	}

	return a;
};

module.exports.descSortedArray = function(size) {
    let arr = module.exports.sortedArray(size);

    return arr.sort((a, b) => a < b);
};
