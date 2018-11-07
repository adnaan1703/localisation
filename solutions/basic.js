const {en, en_custom} = require("../constants/basic");
const {config} = require("../config");
const IntlMessageFormat = require("intl-messageformat");
const memoizeFormatConstructor = require('intl-format-cache');


const intlFetchData = function () {
    for (let i = 0; i < config.ITERATION; i++) {
        const intlFormat = new IntlMessageFormat(en.HELLO, 'en-US');
        const output = intlFormat.format({name: 'Adnaan'});
    }
};

const intlCachedFetchData = function () {
    const getFormat = memoizeFormatConstructor(IntlMessageFormat);
    for (let i = 0; i < config.ITERATION; i++) {
        const intlFormat = getFormat(en.HELLO, 'en-US');
        const output = intlFormat.format({name: 'Adnaan'});
    }
};

const intlCustomFetchData = function () {
    for (let i = 0; i < config.ITERATION; i++) {
        const output = en_custom.HELLO('Adnaan');
    }
};

module.exports.intlFetchData = intlFetchData;
module.exports.intlCachedFetchData = intlCachedFetchData;
module.exports.intlCustomFetchData = intlCustomFetchData;

