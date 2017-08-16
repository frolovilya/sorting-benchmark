const config = require("./SuitsConfig");
const testSuite = require("./SortTestMethod");

const test = function() {

    for(let suiteName in config) {
        console.log("------------------------------");

        console.log("Performing test: " + suiteName);

        const results = testSuite(config[suiteName]);

        console.log(results.map((result) => {
            return result.name + "(" + result.time + ", " + Math.abs(results[0].time - result.time) + ")"
        }).join(" | "));
        console.log("Best: " + results[0].name);
    }

};

test();