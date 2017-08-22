var SelectedSuite = require("./SelectedSuite");

/**
 * Render suites menu.
 */
function renderMenu() {
    var menuElement = document.getElementById("suitesMenu");
    menuElement.innerHTML = "";

    var selectedSuiteIndex = SelectedSuite.getSelectedSuiteIndex();

    for(var i = 0; i < window.results.length; i++) {
        var suiteName = window.results[i].name;

        var li = document.createElement("li");
        li.innerHTML = suiteName;

        if(i === selectedSuiteIndex) {
            li.className = "selected";
        }

        (function(suiteName, index) {
            li.onclick = function () {
                window.location.hash = index + "/" + suiteName.replace(/ /g, "-")
            };
        })(suiteName, i);

        menuElement.appendChild(li);
    }

}

module.exports.renderMenu = renderMenu;