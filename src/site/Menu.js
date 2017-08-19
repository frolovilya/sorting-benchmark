/**
 * Render suits menu
 */
function renderMenu() {
    var menuElement = document.getElementById("suitsMenu");
    menuElement.innerHTML = "";

    Object.keys(window.results).map(function(suiteName) {
        var li = document.createElement("li");
        li.innerHTML = suiteName;
        li.setAttribute("data-suite-name", suiteName.replace(/ /g, "-"));
        if(window.location.hash.substring(1) === li.getAttribute("data-suite-name")) {
            li.className = "selected";
        }
        li.onclick = function() {
            window.location.hash = li.getAttribute("data-suite-name");
        };

        menuElement.appendChild(li);
    });
}

module.exports.renderMenu = renderMenu;