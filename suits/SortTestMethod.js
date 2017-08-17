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
 * Returns {methodName, totalTime} sorted by totalTime in ascending order
 *
 * @param suite test suite
 * @returns {Array}
 */
const testSuite = function(suite) {

    return suite.methods.map((method) => {

        let totalTime = 0;
        for(let arraySize = suite.array.size.from;
            arraySize <= suite.array.size.to;
            arraySize += suite.array.size.step) {

            let experimentTime = 0;
            for(let i = 0; i < suite.numberOfSorts; i++) {
                experimentTime += singleExperiment(method, generateArray(arraySize, suite.array))
            }
            experimentTime /= suite.numberOfSorts;

            totalTime += Math.round(experimentTime);
        }

        return {
            name: method.name,
            time: totalTime
        }

    }).sort((r1, r2) => {
        return r1.time > r2.time;

    });

};

module.exports = testSuite;