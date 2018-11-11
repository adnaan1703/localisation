import IntlMessageFormat from 'intl-messageformat';
import memoizeFormatConstructor from 'intl-format-cache';
import { ITERATION } from "../config";
import { pluralEnI18n, pluranEnCustom } from '../catalog';
import transform from '../transform';

export const intlFetchData = function () {
    for (let i = 0; i < ITERATION; i++) {
        const enNumPhotos = new IntlMessageFormat(pluralEnI18n.NUM_PHOTOS, 'en-US');
        enNumPhotos.format({numPhotos: 0});
        enNumPhotos.format({numPhotos: 1});
        enNumPhotos.format({numPhotos: 10});
    }
};

export const intlCachedFetchData = function () {
    const getFormat = memoizeFormatConstructor(IntlMessageFormat);
    for (let i = 0; i < ITERATION; i++) {
        const enNumPhotos = getFormat(pluralEnI18n.NUM_PHOTOS, 'en-US');
        enNumPhotos.format({numPhotos: 0});
        enNumPhotos.format({numPhotos: 1});
        enNumPhotos.format({numPhotos: 10});
    }
};

export const intlCustomFetchData = function () {
    for (let i = 0; i < ITERATION; i++) {
        const photos = pluranEnCustom.NUM_PHOTOS;
        transform(photos, 0);
        transform(photos, 1);
        transform(photos, 10);
    }
};
