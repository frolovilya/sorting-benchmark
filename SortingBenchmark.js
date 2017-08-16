const ArrayGenerator = require("./ArrayGenerator");

const SelectionSort = require("./SelectionSort");
const InsertionSort = require("./InsertionSort");
const ShellSort = require("./ShellSort");
const MergeSort = require("./MergeSort");
const QuickSort = require("./QuickSort");
const stdSort = function(a) { 
	a.sort();
};
const SwissSort = require("./SwissSort");

var benchmark = new (require("./Benchmark").Benchmark);

/*
 * Array generators
 */
var randomizedArrayGenerator = {
	generator: ArrayGenerator.randomizedArray,
	minElement: 1,
	maxElement: 1000
};
var randomizedArrayGeneratorDuplicateKeys = {
	generator: ArrayGenerator.randomizedArray,
	minElement: 1,
	maxElement: 2
};
var sortedArrayGenerator = {
	generator: ArrayGenerator.sortedArray
}
var descSortedArrayGenerator = {
	generator: function(size) {
		var arr = ArrayGenerator.sortedArray(size);
		return arr.sort(function(a, b) { return a < b; });
	}
}

var allSorts = [
	SelectionSort.sort,
	InsertionSort.sort,
	ShellSort.sort,
	MergeSort.sort,
	QuickSort.sort,
	stdSort
];
var allSortNames = [
	"Selection",
	"Insertion",
	"Shell",
	"Merge",
	"Quick",
	"std"
];

var from1To20Step1 = {
	from: 1,
	to: 20,
	step: 1
};
benchmark.addSuite("From 1 To 20 Step 1", {
	arrayGenerator: randomizedArrayGenerator,
	arraySize: from1To20Step1,
	numberOfExperiments: 1000,
	methodsToTest: allSorts,
	methodTitles: allSortNames
});
benchmark.addSuite("From 1 To 20 Step 1 Duplicate Keys", {
	arrayGenerator: randomizedArrayGeneratorDuplicateKeys,
	arraySize: from1To20Step1,
	numberOfExperiments: 1000,
	methodsToTest: allSorts,
	methodTitles: allSortNames
});
benchmark.addSuite("From 1 To 20 Step 1 Sorted Array", {
	arrayGenerator: sortedArrayGenerator,
	arraySize: from1To20Step1,
	numberOfExperiments: 1000,
	methodsToTest: allSorts,
	methodTitles: allSortNames
});
benchmark.addSuite("From 1 To 20 Step 1 Sorted Array Desc", {
	arrayGenerator: descSortedArrayGenerator,
	arraySize: from1To20Step1,
	numberOfExperiments: 1000,
	methodsToTest: allSorts,
	methodTitles: allSortNames
});

var from20To200Step10 = {
	from: 20,
	to: 200,
	step: 10
};
benchmark.addSuite("From 20 To 200 Step 10", {
	arrayGenerator: randomizedArrayGenerator,
	arraySize: from20To200Step10,
	numberOfExperiments: 1000,
	methodsToTest: allSorts,
	methodTitles: allSortNames
});
benchmark.addSuite("From 20 To 200 Step 10 Duplicate Keys", {
	arrayGenerator: randomizedArrayGeneratorDuplicateKeys,
	arraySize: from20To200Step10,
	numberOfExperiments: 1000,
	methodsToTest: allSorts,
	methodTitles: allSortNames
});
benchmark.addSuite("From 20 To 200 Step 10 Sorted Array", {
	arrayGenerator: sortedArrayGenerator,
	arraySize: from20To200Step10,
	numberOfExperiments: 1000,
	methodsToTest: allSorts,
	methodTitles: allSortNames
});
benchmark.addSuite("From 20 To 200 Step 10 Sorted Array Desc", {
	arrayGenerator: descSortedArrayGenerator,
	arraySize: from20To200Step10,
	numberOfExperiments: 1000,
	methodsToTest: allSorts,
	methodTitles: allSortNames
});

var from1000To10000Step1000 = {
	from: 1000,
	to: 10000,
	step: 1000
};
benchmark.addSuite("From 1000 To 10000 Step 1000", {
	arrayGenerator: randomizedArrayGenerator,
	arraySize: from1000To10000Step1000,
	numberOfExperiments: 1,
	methodsToTest: allSorts,
	methodTitles: allSortNames
});
benchmark.addSuite("From 1000 To 10000 Step 1000 Duplicate Keys", {
	arrayGenerator: randomizedArrayGeneratorDuplicateKeys,
	arraySize: from1000To10000Step1000,
	numberOfExperiments: 1,
	methodsToTest: allSorts,
	methodTitles: allSortNames
});
benchmark.addSuite("From 1000 To 10000 Step 1000 Sorted Array", {
	arrayGenerator: sortedArrayGenerator,
	arraySize: from1000To10000Step1000,
	numberOfExperiments: 1,
	methodsToTest: allSorts,
	methodTitles: allSortNames
});
benchmark.addSuite("From 1000 To 10000 Step 1000 Sorted Array Desc", {
	arrayGenerator: descSortedArrayGenerator,
	arraySize: from1000To10000Step1000,
	numberOfExperiments: 1,
	methodsToTest: allSorts,
	methodTitles: allSortNames
});


benchmark.addSuite("Sort 1000000", {
	arrayGenerator: randomizedArrayGenerator,
	arraySize: {
		from: 1000000,
		to: 1000000,
		step: 1
	},
	numberOfExperiments: 1,
	methodsToTest: allSorts.slice(2),
	methodTitles: allSortNames.slice(2)
});

benchmark.setSuiteFunction(function(suite) {

	var experiment = function(sortingMethod, arrayGenerator, arraySize, minElement, maxElement, numberOfSorts) {
		var time = 0;

		for(var i = 0; i < numberOfSorts; i++) {
			var a = arrayGenerator(arraySize, minElement, maxElement);

			var start = process.hrtime();
			sortingMethod(a);
			var end = process.hrtime(start);

			time += end[0] * 1e9 + end[1];
		}

		time /= numberOfSorts;

		return Math.round(time);
	};

	var sortExperiment = function(sortMethod, arraySize) {
		return experiment(
			sortMethod, 
			suite.arrayGenerator.generator, 
			arraySize, 
			suite.arrayGenerator.minElement, 
			suite.arrayGenerator.maxElement, 
			suite.numberOfExperiments
		);
	};

	console.log("methods", suite.methodTitles);

	var totalTimes = [];
	for(var arraySize = suite.arraySize.from; arraySize <= suite.arraySize.to; arraySize += suite.arraySize.step) {
		var times = suite.methodsToTest.map(function(sm) {
			return sortExperiment(sm, arraySize);
		});

		for(var t in times) {
			totalTimes[t] = totalTimes[t] || 0;
			totalTimes[t] += times[t];
		}
	}

	console.log("total", totalTimes);

	var fastestIndex = 0;
	for(var i = 0; i < totalTimes.length; i++) {
		if(totalTimes[i] < totalTimes[fastestIndex]) {
			fastestIndex = i;
		}
	}

	console.log("best: ", suite.methodTitles[fastestIndex]);

});

benchmark.performAllSuites();

