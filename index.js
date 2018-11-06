const IntlMessageFormat = require("intl-messageformat");
const memoizeFormatConstructor = require('intl-format-cache');
const {PerformanceObserver, performance} = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0].name + ' -> ' + items.getEntries()[0].duration);
});
obs.observe({entryTypes: ['function']});

const MESSAGES = {
    'en-US': {
        NUM_PHOTOS: 'You have {numPhotos, plural, ' +
            '=0 {no photos.}' +
            '=1 {one photo.}' +
            'other {# photos.}}',
        HELLO: 'Hello world'
    },

    'es-MX': {
        NUM_PHOTOS: 'Usted {numPhotos, plural, ' +
            '=0 {no tiene fotos.}' +
            '=1 {tiene una foto.}' +
            'other {tiene # fotos.}}',
        HELLO: 'Bonjour Mothafucka'
    }
};

const CUSTOM = {
    'en-US': {
        NUM_PHOTOS: 'You have this',
        HELLO: 'Hello world'
    },

    'es-MX': {
        NUM_PHOTOS: 'You have this',
        HELLO: 'Hello world'
    }
};

let output;
performance.mark('a');

const enNumPhotos = new IntlMessageFormat(MESSAGES['en-US'].NUM_PHOTOS, 'en-US');
output = enNumPhotos.format({numPhotos: 1000});
console.log(output); // => "You have 1,000 photos."
performance.mark('b');

const esNumPhotos = new IntlMessageFormat(MESSAGES['es-MX'].NUM_PHOTOS, 'es-MX');
output = esNumPhotos.format({numPhotos: 1000});
console.log(output); // => "Usted tiene 1,000 fotos."
performance.mark('c');

const enHello = new IntlMessageFormat(MESSAGES['en-US'].HELLO, 'en-US');
console.log(enHello.format());

const esHello = new IntlMessageFormat(MESSAGES['es-MX'].HELLO, 'es-MX');
console.log(esHello.format());

performance.measure('a to b', 'a', 'b');
performance.measure('b to c', 'b', 'c');
performance.measure('a to c', 'a', 'c');

function everything() {
    for (let i = 0; i < 1000; i++) {
        const enNumPhotos = new IntlMessageFormat(MESSAGES['en-US'].NUM_PHOTOS, 'en-US');
        output = enNumPhotos.format({numPhotos: 0});
        output = enNumPhotos.format({numPhotos: 1});
        output = enNumPhotos.format({numPhotos: 10});
    }
}

function everythingCached() {
    for (let i = 0; i < 1000; i++) {
        const enNumPhotos = memoizeFormatConstructor(IntlMessageFormat)(MESSAGES['en-US'].NUM_PHOTOS, 'en-US');
        output = enNumPhotos.format({numPhotos: 0});
        output = enNumPhotos.format({numPhotos: 1});
        output = enNumPhotos.format({numPhotos: 10});
    }
}

function custom() {
    for(let i = 0; i<1000; i++) {
        output = CUSTOM["en-US"].HELLO;
    }
}

const wrapped = performance.timerify(everything);
const wrappedCache = performance.timerify(everythingCached);
const wrapCustom = performance.timerify(custom);
wrapped();
wrappedCache();
wrapCustom();
