var Benchmark = function() {
	this._suites = {};
	this._suiteFunction = null;
};

Benchmark.prototype.addSuite = function(suiteName, parameters) {
	this._suites[suiteName] = parameters;
};
Benchmark.prototype.getSuite = function(suiteName) {
	return this._suites[suiteName];
};

Benchmark.prototype.setSuiteFunction = function(f) {
	this._suiteFunction = f;
};

Benchmark.prototype.performSuite = function(suiteName) {
	console.log("--------------------");
	console.log("Performing suite '" + suiteName + "':");

	if(this._suites[suiteName])
		this._suiteFunction(this._suites[suiteName]);
}

Benchmark.prototype.performAllSuites = function() {
	for(var suiteName in this._suites) {
		this.performSuite(suiteName);
	}
}

module.exports.Benchmark = Benchmark;