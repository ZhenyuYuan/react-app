'use strict';
const path = require('path');

module.export = {
    process(src, filename) {
        return `module.export = ${JSON.stringify(path.basename(filename))};`;
    },
};