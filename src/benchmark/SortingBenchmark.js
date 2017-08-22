const config = require("./suites/SuitesConfig");
const SuiteTest = require("./suites/SuiteBenchmark");
const fs = require('fs');

let args = process.argv.slice(2);
let resultsFilePath = args[0] || "../docs/results.js";

/**
 * Save generated results as javascript file
 *
 * @param results
 */
const saveResults = function(results) {
    console.log("Saving results...");

    const source = "window.results=" + JSON.stringify(results);

    fs.writeFile(resultsFilePath, source, (err) => {
        if(err) {
            return console.log(err);
        }

        console.log("Done!");
    });
};

/**
 * Test all suites and await for results
 *
 * @returns {Array}
 */
const generateResults = async function() {
    let results = [];
    for(let i = 0; i < config.length; i++) {
        let suiteConfig = config[i];

        console.log("Performing test: " + suiteConfig.name);

        let suiteResults = await SuiteTest.test(suiteConfig);

        results.push({
            name: suiteConfig.name,
            results: suiteResults
        });
    }

    return results;
};

const performTest = async function() {
    saveResults(await generateResults());
};

performTest();