const config = require("./suits/SuitsConfig");
const testSuite = require("./suits/SortTestSuite");
const fs = require('fs');


let args = process.argv.slice(2);
let resultsFilePath = args[0] || "../docs/results.js";

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

const generateResults = function() {

    let results = [];

    for (let suiteName in config) {
        let suite = config[suiteName];

        console.log("Performing test: " + suiteName);

        results.push({
            suiteName: suiteName,
            results: testSuite(suite)
        });
    }

    return results;

};

const performTest = function() {
    saveResults(generateResults());
};

performTest();