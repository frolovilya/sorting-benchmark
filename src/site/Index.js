var Chart = require("./SortChart");
var Menu = require("./Menu");

Menu.renderMenu();
var sortChart = Chart.renderChart();

window.addEventListener("hashchange", function() {
    Menu.renderMenu();
    Chart.updateChart(sortChart);
});