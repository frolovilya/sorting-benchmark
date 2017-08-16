/**
 * Array generation helper methods
 */

var getRandomIntInclusive = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.randomizedArray = function(size, from, to) {
	var a = [];
	for(var i = 0; i < size; i++) {
		a.push(getRandomIntInclusive(from, to));
	}

	return a;
};

module.exports.sortedArray = function(size) {
	var a = [];
	for(var i = 0; i < size; i++) {
		a.push(i);
	}

	return a;
};
