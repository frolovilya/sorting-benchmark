const ArrayGenerator = require("../../utils/ArrayGenerator");

const SelectionSort = require("../../algorithms/SelectionSort");
const InsertionSort = require("../../algorithms/InsertionSort");
const ShellSort = require("../../algorithms/ShellSort");
const MergeSort = require("../../algorithms/MergeSort");
const QuickSort = require("../../algorithms/QuickSort");
const StdSort = require("../../algorithms/StdSort");
const SwissSort = require("../../algorithms/SwissSort");

const allSorts = [
    SelectionSort.sort,
    InsertionSort.sort,
    ShellSort.sort,
    MergeSort.sort,
    QuickSort.sort,
    StdSort.sort
];

let config = {};

const randomized = {
    generator: ArrayGenerator.randomizedArray,
};
const sorted = {
    generator: ArrayGenerator.sortedArray
};
const descSorted = {
    generator: ArrayGenerator.descSortedArray
};

const withElementsInRange = (min, max) => {
    return {
        range: {
            min: min,
            max: max
        }
    }
};

const grow = (from, to, step = 1) => {
    return {
        size: {
            from: from,
            to: to,
            step: step
        }
    };
};

const check = (sorts, numberOfSorts) => {
    return {
        methods: sorts,
        numberOfSorts: numberOfSorts
    };
};

/*
 * Test methods on tiny arrays
 */
Object.assign(config, {
    "Tiny Arrays": {
        "From 1 To 50": {
            array: {
                ...randomized,
                ...withElementsInRange(1, 1000),
                ...grow(1, 50)
            },
            ...check(allSorts, 100)
        },
        "From 1 To 50 Duplicate Keys": {
            array: {
                ...randomized,
                ...withElementsInRange(1, 5),
                ...grow(1, 50)
            },
            ...check(allSorts, 100)
        },
        "From 1 To 50 Sorted Array": {
            array: {
                ...sorted,
                ...grow(1, 50)
            },
            ...check(allSorts, 100)
        },
        "From 1 To 50 Sorted Array Desc": {
            array: {
                ...descSorted,
                ...grow(1, 50)
            },
            ...check(allSorts, 100)
        }
    }
});

/*
 * Test methods on small size arrays
 */
Object.assign(config, {
    "Small Arrays": {
        "From 50 To 500": {
            array: {
                ...randomized,
                ...withElementsInRange(1, 1000),
                ...grow(50, 500, 50)
            },
            ...check(allSorts, 100)
        },
        "From 50 To 500 Duplicate Keys": {
            array: {
                ...randomized,
                ...withElementsInRange(1, 10),
                ...grow(50, 500, 50)
            },
            ...check(allSorts, 100)
        },
        "From 50 To 500 Sorted Array": {
            array: {
                ...sorted,
                ...grow(50, 500, 50)
            },
            ...check(allSorts, 100)
        },
        "From 50 To 500 Sorted Array Desc": {
            array: {
                ...descSorted,
                ...grow(50, 500, 50)
            },
            ...check(allSorts, 100)
        }
    }
});

/*
 * Test methods on medium size arrays
 */
Object.assign(config, {
    "Medium Arrays": {
        "From 1000 To 10000": {
            array: {
                ...randomized,
                ...withElementsInRange(1, 1000),
                ...grow(1000, 10000, 1000)
            },
            ...check(allSorts, 10)
        },
        "From 1000 To 10000 Duplicate Keys": {
            array: {
                ...randomized,
                ...withElementsInRange(1, 100),
                ...grow(1000, 10000, 1000)
            },
            ...check(allSorts, 10)
        },
        "From 1000 To 10000 Sorted Array": {
            array: {
                ...sorted,
                ...grow(1000, 10000, 1000)
            },
            ...check(allSorts, 10)
        },
        "From 1000 To 10000 Sorted Array Desc": {
            array: {
                ...descSorted,
                ...grow(1000, 10000, 1000)
            },
            ...check(allSorts, 10)
        }
    }
});

/*
 * Test methods on big size arrays
 */
Object.assign(config, {
    "Big Arrays": {
        "From 10000 To 100000": {
            array: {
                ...randomized,
                ...withElementsInRange(1, 10000),
                ...grow(10000, 100000, 10000)
            },
            ...check(allSorts.slice(2), 10)
        },
        "From 10000 To 100000 Duplicate Keys": {
            array: {
                ...randomized,
                ...withElementsInRange(1, 100),
                ...grow(10000, 100000, 10000)
            },
            ...check(allSorts.slice(2), 10)
        },
        "From 10000 To 100000 Sorted Array": {
            array: {
                ...sorted,
                ...grow(10000, 100000, 10000)
            },
            ...check(allSorts.slice(2), 10)
        },
        "From 10000 To 100000 Sorted Array Desc": {
            array: {
                ...descSorted,
                ...grow(10000, 100000, 10000)
            },
            ...check(allSorts.slice(2), 10)
        }
    }
});

/*
 * Test only fast methods on large arrays
 */
Object.assign(config, {
    "Large Arrays": {
        "Sort 500'000": {
            array: {
                ...randomized,
                ...withElementsInRange(1, 500000),
                ...grow(500000, 500000)
            },
            ...check(allSorts.slice(2), 2)
        },
        "Sort 1'000'000": {
            array: {
                ...randomized,
                ...withElementsInRange(1, 1000000),
                ...grow(1000000, 1000000)
            },
            ...check(allSorts.slice(2), 2)
        },
        "Sort 10'000'000": {
            array: {
                ...randomized,
                ...withElementsInRange(1, 10000000),
                ...grow(10000000, 10000000)
            },
            ...check(allSorts.slice(2), 2)
        }
    }
});

module.exports = config;
