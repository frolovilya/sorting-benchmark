const InsertionSort = require("./InsertionSort");
const ShellSort = require("./ShellSort");
const MergeSort = require("./MergeSort");

var swissSort = function(a) {
	if(a.length < 15)
		InsertionSort.sort(a);
	else if(a.length < 150)
		ShellSort.sort(a);
	else 
		MergeSort.sort(a);
}

module.exports.sort = swissSort;