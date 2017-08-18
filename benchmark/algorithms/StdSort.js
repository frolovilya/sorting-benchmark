/**
 * Standard sort
 */

const stdSort = function(a) {
    a.sort((a, b) => a > b);
    return a;
};

module.exports.sort = stdSort;