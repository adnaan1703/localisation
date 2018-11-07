const {en, en_custom, pluralise} = require("../constants/pluralisation");
const {config} = require("../config");
const IntlMessageFormat = require("intl-messageformat");
const memoizeFormatConstructor = require('intl-format-cache');

const intlFetchData = function () {
    for (let i = 0; i < config.ITERATION; i++) {
        let output;
        const enNumPhotos = new IntlMessageFormat(en.NUM_PHOTOS, 'en-US');
        output = enNumPhotos.format({numPhotos: 0});
        output = enNumPhotos.format({numPhotos: 1});
        output = enNumPhotos.format({numPhotos: 10});
    }
};

const intlCachedFetchData = function () {
    const getFormat = memoizeFormatConstructor(IntlMessageFormat);
    for (let i = 0; i < config.ITERATION; i++) {
        let output;
        const enNumPhotos = getFormat(en.NUM_PHOTOS, 'en-US');
        output = enNumPhotos.format({numPhotos: 0});
        output = enNumPhotos.format({numPhotos: 1});
        output = enNumPhotos.format({numPhotos: 10});
    }
};

const intlCustomFetchData = function () {
    for (let i = 0; i < config.ITERATION; i++) {
        let output;
        const photos = en_custom.NUM_PHOTOS;
        output = pluralise(photos, 0);
        output = pluralise(photos, 1);
        output = pluralise(photos, 10);
    }
};

module.exports.intlFetchData = intlFetchData;
module.exports.intlCachedFetchData = intlCachedFetchData;
module.exports.intlCustomFetchData = intlCustomFetchData;

