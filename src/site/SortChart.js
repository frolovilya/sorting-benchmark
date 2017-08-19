var Chart = require("chart.js");
var Color = require("./SortColors");

function suiteResultsToData() {
    var suiteName = window.location.hash.substring(1).replace(/-/g, " ");
    var suiteResults = window.results[suiteName];
    if(!suiteResults)
        suiteResults = window.results[Object.keys(window.results)[0]];

    return {
        labels: suiteResults.map(function(result) {
            return result.array;
        }),
        datasets: mapSuiteResultsToDataSet(suiteResults)
    }
}

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
            borderColor: color,
            backgroundColor: color
        });
    }

    return dataSets;
}

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
