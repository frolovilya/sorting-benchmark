/**
 * Standard sort
 */

const stdSort = function(a) {
    a.sort((a, b) => a > b);
};

module.exports.sort = stdSort;