/**
 * Parse window.location.hash, get current suite index
 *
 * @returns {Number}
 */
function getSelectedSuiteIndex() {
    var selectedSuiteIndex = parseInt(window.location.hash.substring(1).split("/")[0]);
    if(!selectedSuiteIndex) {
        selectedSuiteIndex = 0;
    }

    return selectedSuiteIndex;
}

module.exports.getSelectedSuiteIndex = getSelectedSuiteIndex;