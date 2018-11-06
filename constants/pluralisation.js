module.exports.en = {
    NUM_PHOTOS: 'You have {numPhotos, plural, ' +
        '=0 {no photos.}' +
        '=1 {one photo.}' +
        'other {# photos.}}'
};

module.exports.en_custom = {
    NUM_PHOTOS: {
        neutral: 'no photos',
        singular: 'one photos',
        other: (value) => value + ' photos'
    }
};

const pluralise = function (message, count) {
    if (count === 0)
        return message.neutral;
    else if (count === 1)
        return message.singular;
    else return message.other(count);
};

module.exports.pluralise = pluralise;