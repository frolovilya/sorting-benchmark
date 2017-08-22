var Chart = require("./SortTimeChart");
var Menu = require("./SuitesMenu");

Menu.renderMenu();
var sortChart = Chart.renderChart();

window.addEventListener("hashchange", function() {
    Menu.renderMenu();
    Chart.updateChart(sortChart);
});