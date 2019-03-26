'use strict';

module.exports = {
    process() {
        return 'module.export = {};';
    },
    getCacheKey() {
        //The output is always the same.
        return 'cssTransform';
    },
};