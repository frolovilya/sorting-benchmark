/**
 * Render suits menu.
 * Using suite name (with replaced " " to "-") as menu element id.
 */
function renderMenu() {
    var menuElement = document.getElementById("suitsMenu");
    menuElement.innerHTML = "";

    var suiteNames = Object.keys(window.results);
    var selectedSuiteIndex = suiteNames.indexOf(window.location.hash.substring(1).replace(/-/g, " "));
    if(selectedSuiteIndex < 0) {
        selectedSuiteIndex = 0;
    }

    suiteNames.map(function(suiteName, index) {

        var li = document.createElement("li");
        li.innerHTML = suiteName;

        if(index === selectedSuiteIndex) {
            li.className = "selected";
        }

        li.setAttribute("data-suite-name", suiteName.replace(/ /g, "-"));
        li.onclick = function() {
            window.location.hash = li.getAttribute("data-suite-name");
        };

        menuElement.appendChild(li);

    });
}

module.exports.renderMenu = renderMenu;