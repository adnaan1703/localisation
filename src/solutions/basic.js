import { basicEnCustom, basicEnI18n } from "../catalog";
import IntlMessageFormat from 'intl-messageformat';
import memoizeFormatConstructor from 'intl-format-cache';
import { ITERATION } from "../config";

export const intlFetchData = function () {
    for (let i = 0; i < ITERATION; i++) {
        const intlFormat = new IntlMessageFormat(basicEnI18n.HELLO, 'en-US');
        const output = intlFormat.format({name: 'Adnaan'});
    }
};

export const intlCachedFetchData = function () {
    const getFormat = memoizeFormatConstructor(IntlMessageFormat);
    for (let i = 0; i < ITERATION; i++) {
        const intlFormat = getFormat(basicEnI18n.HELLO, 'en-US');
        const output = intlFormat.format({name: 'Adnaan'});
    }
};

export const intlCustomFetchData = function () {
    for (let i = 0; i < ITERATION; i++) {
        const output = basicEnCustom.HELLO('Adnaan');
    }
};
