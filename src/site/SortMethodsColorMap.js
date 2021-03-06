/**
 * Map sort method name to fixed color
 *
 * @param sortName sort name
 * @returns {string} color
 */
function getColor(sortName) {
    var colors = {
        selectionSort: "rgb(54, 162, 235)",
        insertionSort: "rgb(75, 192, 192)",
        shellSort: "rgb(201, 203, 207)",
        mergeSort: "rgb(255, 159, 64)",
        quickSort: "rgb(153, 102, 255)",
        quickSort3Way: "rgb(156, 90, 175)",
        stdSort: "rgb(255, 99, 132)",
        other: "rgb(255, 205, 86)"
    };

    var color = colors[sortName];

    return color ? color : colors["other"];
}

module.exports.getColor = getColor;