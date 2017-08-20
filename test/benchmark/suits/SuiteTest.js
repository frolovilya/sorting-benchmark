const assert = require("assert");
const SuiteTest = require("../../../src/benchmark/suits/SuiteTest");
const ArrayGenerator = require("../../../src/benchmark/utils/ArrayGenerator");
const InsertionSort = require("../../../src/benchmark/algorithms/InsertionSort");

describe("SuiteTest", function() {

    describe("#test(suiteConfig)", function() {

        const suiteConfig = {
            array: {
                generator: ArrayGenerator.randomizedArray,
                range: {
                    min: 0,
                    max: 100
                },
                size: {
                    from: 0,
                    to: 10,
                    step: 5
                }
            },
            methods: [InsertionSort.sort]
        };

        const promise = SuiteTest.test(suiteConfig);

        it("should return correct test results", function() {
            return promise.then((results) => {
                assert(Array.isArray(results));
            });
        });

        it("should return one result for each array size (config.array.size)", function() {
            return promise.then((results) => {
                assert.equal(results.length, 3);
            });
        });

        it("should return results for each tested method", function() {
            return promise.then((results) => {
                assert.notEqual(results[0].methods["insertionSort"], undefined);
            });
        });

        it("should return test method result as number (execution time)", function() {
            return promise.then((results) => {
                assert.equal(typeof results[0].methods["insertionSort"], "number");
            });
        });

    });

});

