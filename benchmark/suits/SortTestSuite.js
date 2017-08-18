/**
 * Perform single sort on array, return execution time
 *
 * @param sortMethod sort method to test
 * @param array input array
 * @returns {number} time in nanoseconds
 */
const singleExperiment = function(sortMethod, array) {
    const startTime = process.hrtime();

    sortMethod(array);

    const resultTime = process.hrtime(startTime);

    return resultTime[0] * 1e9 + resultTime[1];
};

/**
 * Generate array of given size with arrayProps
 *
 * @param arraySize array size to generate
 * @param arrayProps array props from suit config
 * @returns {Array}
 */
const generateArray = function(arraySize, arrayProps) {
    return arrayProps.generator(arraySize, arrayProps.range);
};

/**
 * Test suite.
 * Returns {arraySizes, [{methodName, totalTime}]} sorted by totalTime in ascending order.
 *
 * @param suite test suite
 * @returns {*}
 */
const testSuite = function(suite) {

    let results = {};
    let arrays = [];

    for(let arraySize = suite.array.size.from;
        arraySize <= suite.array.size.to;
        arraySize += suite.array.size.step) {

        arrays.push(arraySize);

        let array = generateArray(arraySize, suite.array);

        suite.methods.map((method) => {

            let experimentTime = 0;
            for (let i = 0; i < suite.numberOfSorts; i++) {
                experimentTime += singleExperiment(method, array)
            }
            experimentTime /= suite.numberOfSorts;

            results[method.name] = results[method.name] || [];
            results[method.name].push(Math.round(experimentTime));
        });

    }

    return {
        arrays: arrays,
        methods: Object.keys(results).map((methodName) => {
            return {
                name: methodName,
                times: results[methodName],
                totalTime: results[methodName].reduce((time, total) => time + total, 0)
            }
        }).sort((r1, r2) => {
            return r1.totalTime > r2.totalTime;

        })
    };

};

module.exports = testSuite;