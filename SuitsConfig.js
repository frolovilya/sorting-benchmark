const ArrayGenerator = require("./ArrayGenerator");

const SelectionSort = require("./algorithms/SelectionSort");
const InsertionSort = require("./algorithms/InsertionSort");
const ShellSort = require("./algorithms/ShellSort");
const MergeSort = require("./algorithms/MergeSort");
const QuickSort = require("./algorithms/QuickSort");
const StdSort = require("./algorithms/StdSort");
const SwissSort = require("./algorithms/SwissSort");

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
    "From 1 To 50 Step 1": {
        array: {
            ...randomized,
            ...withElementsInRange(1, 1000),
            ...grow(1, 50)
        },
        ...check(allSorts, 1000)
    },
    "From 1 To 50 Step 1 Duplicate Keys": {
        array: {
            ...randomized,
            ...withElementsInRange(1, 2),
            ...grow(1, 50)
        },
        ...check(allSorts, 1000)
    },
    "From 1 To 50 Step 1 Sorted Array": {
        array: {
            ...sorted,
            ...grow(1, 50)
        },
        ...check(allSorts, 1000)
    },
    "From 1 To 50 Step 1 Sorted Array Desc": {
        array: {
            ...descSorted,
            ...grow(1, 50)
        },
        ...check(allSorts, 1000)
    }
});

/*
 * Test methods on small size arrays
 */
Object.assign(config, {
    "From 50 To 500 Step 50": {
        array: {
            ...randomized,
            ...withElementsInRange(1, 1000),
            ...grow(50, 500, 50)
        },
        ...check(allSorts, 1000)
    },
    "From 50 To 500 Step 50 Duplicate Keys": {
        array: {
            ...randomized,
            ...withElementsInRange(1, 2),
            ...grow(50, 500, 50)
        },
        ...check(allSorts, 1000)
    },
    "From 50 To 500 Step 50 Sorted Array": {
        array: {
            ...sorted,
            ...grow(50, 500, 50)
        },
        ...check(allSorts, 1000)
    },
    "From 50 To 500 Step 20 Sorted Array Desc": {
        array: {
            ...descSorted,
            ...grow(50, 500, 50)
        },
        ...check(allSorts, 1000)
    }
});

/*
 * Test methods on medium size arrays
 */
Object.assign(config, {
    "From 1000 To 10000 Step 1000": {
        array: {
            ...randomized,
            ...withElementsInRange(1, 1000),
            ...grow(1000, 10000, 1000)
        },
        ...check(allSorts, 10)
    },
    "From 1000 To 10000 Step 1000 Duplicate Keys": {
        array: {
            ...randomized,
            ...withElementsInRange(1, 2),
            ...grow(1000, 10000, 1000)
        },
        ...check(allSorts, 10)
    },
    "From 1000 To 10000 Step 1000 Sorted Array": {
        array: {
            ...sorted,
            ...grow(1000, 10000, 1000)
        },
        ...check(allSorts, 10)
    },
    "From 1000 To 10000 Step 1000 Sorted Array Desc": {
        array: {
            ...descSorted,
            ...grow(1000, 10000, 1000)
        },
        ...check(allSorts, 10)
    }
});

/*
 * Test only fast methods on large arrays
 */
Object.assign(config, {
    "Sort 1'000'000": {
        array: {
            ...randomized,
            ...withElementsInRange(1, 1000),
            ...grow(1000000, 1000000)
        },
        ...check(allSorts.slice(2), 1)
    },
    "Sort 10'000'000": {
        array: {
            ...randomized,
            ...withElementsInRange(1, 1000),
            ...grow(10000000, 10000000)
        },
        ...check(allSorts.slice(2), 1)
    }
});

module.exports = config;
