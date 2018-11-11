export const transform = function (message, count) {
    if (count === 0)
        return message.neutral;
    else if (count === 1)
        return message.singular;
    else return message.other(count);
};

export default transform;
