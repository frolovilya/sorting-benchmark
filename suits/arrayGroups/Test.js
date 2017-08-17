const config = require("./SuitsConfig");
const testSuite = require("../SortTestMethod");

const performTest = function() {

    for(let groupName in config) {

        console.log("## " + groupName);

        let suiteGroup = config[groupName];
        for (let suiteName in suiteGroup) {

            console.log("### Test: " + suiteName);

            console.log(" Method | Time | Delta ");
            console.log(" ------ | ---- | ----- ");

            const results = testSuite(suiteGroup[suiteName]);
            for (let i = 0; i < results.length; i++) {

                let timeInMS = (results[i].time/1000000).toFixed(4);
                let deltaFromBestResult = (Math.abs(results[0].time - results[i].time)/1000000).toFixed(4);

                console.log((i === 0 ? "**" + results[i].name + "**" : results[i].name)
                    + " | " + timeInMS + "ms"
                    + " | " + (i === 0 ? "-" : deltaFromBestResult + "ms"));

            }

        }
    }

};

module.exports = performTest;