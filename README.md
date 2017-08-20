# sorting-benchmark
Testing different sorting algorithms performance on Node.js with integer arrays of various size and structure.

[https://frolovilya.github.io/sorting-benchmark/]

## Test Conditions
Each sort method is being tested on array of integers. 

Array sizes vary from 0 to 10'000'000 elements depending on sort method general performance.

Array elements are generated using the following structure patterns:
* Randomized 
  * With elements in given range (min, max)
  * With duplicating elements (many repeating elements)
* Sorted
  * In ascending order (already sorted)
  * In descending order (worst case scenario)
  
See [suits config](https://github.com/frolovilya/sorting-benchmark/blob/master/src/benchmark/suits/SuitsConfig.js) sources for detailed information.

Time measurement is performed by [Benchmark.js](https://benchmarkjs.com) framework to ensure data accuracy.

Sort alogithms and benchmarking code is written in pure ES6 without any transpiling.

## Running Benchmark
In case you want to test sort methods performance on your local system (Node.js required):
```
git clone https://github.com/frolovilya/sorting-benchmark.git
npm run benchmark
```
Open index.html from /docs folder to view generated results.

## Contributing
Contributions are welcome. 

Make sure you changes don't break the current functionality by adding and running tests:
```
npm test
```
Re-build website scripts if needed:
```
npm run build-site
```
