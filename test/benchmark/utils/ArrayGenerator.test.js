const assert = require("assert");
const ArrayGenerator = require("../../../src/benchmark/utils/ArrayGenerator");

describe("ArrayGenerator", function() {

    describe("#randomizedArray(size, range)", function() {

        it("should return array of given size", function() {
            const size = 5;
            const range = {min: 0, max: 100};

            assert.equal(size, ArrayGenerator.randomizedArray(size, range).length)
        });

        it("should generate elements in given range", function() {
            const size = 10;
            const range = {min: 0, max: 100};

            ArrayGenerator.randomizedArray(size, range).map((element) => {
                assert(element >= 0 && element <= 100)
            });
        });

        it("should return random array each time", function() {
            const size = 1;
            const range = {min: 0, max: 1000000};
            const array1 = ArrayGenerator.randomizedArray(size, range);
            const array2 = ArrayGenerator.randomizedArray(size, range);

            assert.notEqual(array1[0], array2[0]);
        });

    });

    describe("#sortedArray(size)", function() {

        it("should return array of given size", function() {
            const size = 8;

            assert.equal(size, ArrayGenerator.sortedArray(size).length)
        });

        it("should return sorted numbers starting from 0 to size-1", function() {
            const size = 10;
            const array = ArrayGenerator.sortedArray(size);

            for(let i = 0; i < array.length; i++) {
                assert.equal(array[i], i);
            }
        });

        it("should return same array each time", function() {
            const size = 10;
            const array1 = ArrayGenerator.sortedArray(size);
            const array2 = ArrayGenerator.sortedArray(size);

            for(let i = 0; i < array1.length; i++) {
                assert.equal(array1[i], array2[i]);
            }
        });

    });

    describe("#descSortedArray(size)", function() {

        it("should return array of given size", function() {
            const size = 7;

            assert.equal(size, ArrayGenerator.descSortedArray(size).length)
        });

        it("should return sorted numbers in descending order starting from size-1 to 0", function() {
            const size = 10;
            const array = ArrayGenerator.descSortedArray(size);

            for(let i = 0; i < array.length; i++) {
                assert.equal(array[i], size - 1 - i);
            }
        });

        it("should return same array each time", function() {
            const size = 10;
            const array1 = ArrayGenerator.descSortedArray(size);
            const array2 = ArrayGenerator.descSortedArray(size);

            for(let i = 0; i < array1.length; i++) {
                assert.equal(array1[i], array2[i]);
            }
        });

    });


});
