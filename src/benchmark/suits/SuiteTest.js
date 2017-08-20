const Benchmark = require("benchmark");

/**
 * Generate arrays with given arrayProps
 *
 * @param arrayProps array props from suit config
 * @returns {[Array]}
 */
const generateArrays = function(arrayProps) {
    let arrays = [];

    for(let arraySize = arrayProps.size.from;
        arraySize <= arrayProps.size.to;
        arraySize += arrayProps.size.step) {

        arrays.push(arrayProps.generator(arraySize, arrayProps.range));
    }

    return arrays;
};

/**
 * Test suite.
 * For each generated array test all sort methods.
 *
 * @param suiteConfig test suite config
 * @returns Promise<[{arraySize, {methodName: time}}]>
 */
const testSuite = async function(suiteConfig) {
    const arrays = generateArrays(suiteConfig.array);

    return Promise.all(arrays.map((array) => new Promise((resolve, reject) => {
        let suite = new Benchmark.Suite;

        suiteConfig.methods.forEach((method) => {
            suite.add(method.name, () => {
                method(array.slice(0))
            }, {
                maxTime: 0.001
            })
        });

        suite.on('cycle', function(event) {
            console.log(String(event.target));

        }).on('complete', function() {
            resolve({
                array: array.length,
                methods: this.reduce((methods, method) => {
                    methods[method.name] = method.stats.mean;
                    return methods;
                }, {})
            });
        });

        suite.run({ 'async': true });
    })));
};


module.exports.test = testSuite;