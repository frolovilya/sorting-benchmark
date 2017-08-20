const ArrayGenerator = require("../utils/ArrayGenerator");

const SelectionSort = require("../algorithms/SelectionSort");
const InsertionSort = require("../algorithms/InsertionSort");
const ShellSort = require("../algorithms/ShellSort");
const MergeSort = require("../algorithms/MergeSort");
const QuickSort = require("../algorithms/QuickSort");
const StdSort = require("../algorithms/StdSort");

const slowSorts = [
    SelectionSort.sort,
    InsertionSort.sort
];

const fastSorts = [
    ShellSort.sort,
    MergeSort.sort,
    QuickSort.sort,
    StdSort.sort
];

const allSorts = slowSorts.concat(fastSorts);

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

const size = (from, to, step = 1) => {
    return {
        size: {
            from: from,
            to: to,
            step: step
        }
    };
};

const check = (sorts) => {
    return {
        methods: sorts
    };
};

/*
 * Test methods on tiny arrays
 */
Object.assign(config, {
    "From 0 to 100": {
        array: {
            ...randomized,
            ...withElementsInRange(0, 1000),
            ...size(0, 100, 5)
        },
        ...check(allSorts)
    },
    "From 0 To 100 Duplicate Keys": {
        array: {
            ...randomized,
            ...withElementsInRange(0, 2),
            ...size(0, 100, 5)
        },
        ...check(allSorts)
    },
    "From 0 To 100 Sorted Array": {
        array: {
            ...sorted,
            ...size(0, 100, 5)
        },
        ...check(allSorts)
    },
    "From 0 To 100 Sorted Array Desc": {
        array: {
            ...descSorted,
            ...size(0, 100, 5)
        },
        ...check(allSorts)
    }
});

/*
 * Test methods on small size arrays
 */
Object.assign(config, {
    "From 100 To 1000": {
        array: {
            ...randomized,
            ...withElementsInRange(0, 10000),
            ...size(100, 1000, 50)
        },
        ...check(allSorts)
    },
    "From 100 To 1000 Duplicate Keys": {
        array: {
            ...randomized,
            ...withElementsInRange(0, 5),
            ...size(100, 1000, 50)
        },
        ...check(allSorts)
    },
    "From 100 To 1000 Sorted Array": {
        array: {
            ...sorted,
            ...size(100, 1000, 50)
        },
        ...check(allSorts)
    },
    "From 100 To 1000 Sorted Array Desc": {
        array: {
            ...descSorted,
            ...size(100, 1000, 50)
        },
        ...check(allSorts)
    }
});

/*
 * Test methods on medium size arrays
 */
Object.assign(config, {
    "From 1000 To 10000": {
        array: {
            ...randomized,
            ...withElementsInRange(0, 100000),
            ...size(1000, 10000, 500)
        },
        ...check(allSorts)
    },
    "From 1000 To 10000 Duplicate Keys": {
        array: {
            ...randomized,
            ...withElementsInRange(0, 10),
            ...size(1000, 10000, 500)
        },
        ...check(allSorts)
    },
    "From 1000 To 10000 Sorted Array": {
        array: {
            ...sorted,
            ...size(1000, 10000, 500)
        },
        ...check(allSorts)
    },
    "From 1000 To 10000 Sorted Array Desc": {
        array: {
            ...descSorted,
            ...size(1000, 10000, 500)
        },
        ...check(allSorts)
    }
});

/*
 * Test methods on big size arrays
 */
Object.assign(config, {
    "From 10000 To 100000": {
        array: {
            ...randomized,
            ...withElementsInRange(0, 1000000),
            ...size(10000, 100000, 5000)
        },
        ...check(fastSorts)
    },
    "From 10000 To 100000 Duplicate Keys": {
        array: {
            ...randomized,
            ...withElementsInRange(1, 20),
            ...size(10000, 100000, 5000)
        },
        ...check(fastSorts)
    },
    "From 10000 To 100000 Sorted Array": {
        array: {
            ...sorted,
            ...size(10000, 100000, 5000)
        },
        ...check(fastSorts)
    },
    "From 10000 To 100000 Sorted Array Desc": {
        array: {
            ...descSorted,
            ...size(10000, 100000, 5000)
        },
        ...check(fastSorts)
    }
});

/*
 * Test only fast methods on large arrays
 */
Object.assign(config, {
    "From 100'000 to 1'000'000": {
        array: {
            ...randomized,
            ...withElementsInRange(0, 10000000),
            ...size(100000, 1000000, 50000)
        },
        ...check(fastSorts)
    },
    "From 1'000'000 to 10'000'000": {
        array: {
            ...randomized,
            ...withElementsInRange(0, 100000000),
            ...size(1000000, 10000000, 1000000)
        },
        ...check(fastSorts)
    }
});

module.exports = config;
