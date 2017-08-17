
const singleExperiment = function(sortMethod, arrayProps, arraySize) {
    const array = arrayProps.generator(arraySize, arrayProps.range);

    const startTime = process.hrtime();

    sortMethod(array);

    const resultTime = process.hrtime(startTime);

    return resultTime[0] * 1e9 + resultTime[1];
};

module.exports = function(suite) {

    return suite.methods.map((method) => {

        let totalTime = 0;
        for(let arraySize = suite.array.size.from;
            arraySize <= suite.array.size.to;
            arraySize += suite.array.size.step) {

            let experimentTime = 0;
            for(let i = 0; i < suite.numberOfSorts; i++) {
                experimentTime += singleExperiment(method, suite.array, arraySize)
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
