'use strict';
const path = require('path');

module.exports = {
    process(src, filename) {
        return `module.export = ${JSON.stringify(path.basename(filename))};`;
    },
};