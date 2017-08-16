const config = require("./SuitsConfig");
const testSuite = require("./SortTestMethod");

const test = function() {

    for(let groupName in config) {

        console.log("## " + groupName);

        let suiteGroup = config[groupName];
        for (let suiteName in suiteGroup) {

            console.log("### Test: " + suiteName);

            console.log(" Method | Time | Delta ");
            console.log(" ------ | ---- | ----- ");

            const results = testSuite(suiteGroup[suiteName]);
            for (let i = 0; i < results.length; i++) {

                let timeInMS = results[i].time/1000000 + "ms";
                let deltaFromBestResult = i === 0 ? "–" :
                    (Math.abs(results[0].time - results[i].time)/1000000 + "ms");

                console.log((i === 0 ? "**" + results[i].name + "**" : results[i].name)
                    + " | " + timeInMS
                    + " | " + deltaFromBestResult);

            }

        }
    }

};

test();