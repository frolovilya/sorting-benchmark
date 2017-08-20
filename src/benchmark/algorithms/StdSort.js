/**
 * Standard sort
 */

const stdSort = function(a) {
    return a.sort((a, b) => a > b);
};

module.exports.sort = stdSort;