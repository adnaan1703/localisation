export const basicEnCustom = {
    HELLO: (...args) => 'hello ' + args[0]
};

export const basicEnI18n = {
    HELLO: 'hello {name}'
};

export const pluralEnI18n = {
    NUM_PHOTOS: 'You have {numPhotos, plural, ' +
        '=0 {no photos.}' +
        '=1 {one photo.}' +
        'other {# photos.}}'
};

export const pluranEnCustom = {
    NUM_PHOTOS: {
        neutral: 'no photos',
        singular: 'one photos',
        other: (value) => value + ' photos'
    }
};
