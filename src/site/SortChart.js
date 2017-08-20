var Chart = require("chart.js");
var Color = require("./SortColors");

/**
 * Map test suites results to Chart data
 *
 * @returns {labels, datasets}
 */
function suiteResultsToData() {
    var suiteName = window.location.hash.substring(1).replace(/-/g, " ");
    var suiteResults = window.results[suiteName];
    if(!suiteResults)
        suiteResults = window.results[Object.keys(window.results)[0]];

    return {
        labels: suiteResults.map(function(result) {
            return result.array;
        }),
        datasets: mapSuiteResultsToDataSet(suiteResults).sort(function(dataset1, dataset2) {
            return dataset1.totalTime > dataset2.totalTime;
        })
    }
}

/**
 * Map every suite result to Chart dataset
 *
 * @param suiteResults suite results
 * @returns {Array} datasets
 */
function mapSuiteResultsToDataSet(suiteResults) {
    var methodTimes = suiteResults.reduce(function(methods, result) {
        for(var methodName in result.methods) {
            methods[methodName] = methods[methodName] || [];
            methods[methodName].push(result.methods[methodName]);
        }
        return methods;
    }, {});

    var dataSets = [];
    for(var methodName in methodTimes) {
        var color = Color.getColor(methodName);

        dataSets.push({
            label: methodName,
            fill: false,
            data: methodTimes[methodName],
            totalTime: methodTimes[methodName].reduce(function(total, time) {
                return total + time;
            }, 0),
            borderColor: color,
            backgroundColor: color
        });
    }

    return dataSets;
}

/**
 * Render chart to display suite results
 */
function renderChart() {
    var ctx = document.getElementById("sortChart").getContext('2d');

    return new Chart(ctx, {
        type: 'line',
        data: suiteResultsToData(),
        options: {
            responsive: true,
            maintainAspectRatio: false,
            hoverMode: 'index',
            tooltips: {
                mode: 'index',
                intersect: false,
                itemSort: function(a, b) {
                    return a.yLabel > b.yLabel;
                },
                callbacks: {
                    label: function(tooltipItem, data) {
                        return tooltipItem.yLabel.toFixed(7);
                    }
                }
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Time (sec)'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Array Size (elements)'
                    }
                }]
            },
            layout: {
                padding: 10
            }
        }
    });
}

function updateChart(chart) {
    chart.data = suiteResultsToData();
    chart.update();
}

module.exports.renderChart = renderChart;
module.exports.updateChart = updateChart;

