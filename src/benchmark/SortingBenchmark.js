const config = require("./suits/SuitsConfig");
const SortTestSuite = require("./suits/SortTestSuite");
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
 * @returns {Promise.<{}>}
 */
const generateResults = async function() {
    let results = {};

    for (let suiteName in config) {
        let suite = config[suiteName];

        console.log("Performing test: " + suiteName);

        results[suiteName] = await SortTestSuite.testSuite(suite);
    }

    return results;

};

const performTest = async function() {
    saveResults(await generateResults());
};

performTest();