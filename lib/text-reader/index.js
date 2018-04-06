
module.exports = (text) => {
    console.log('text = ', text);
    const matches = ['[', ']', '{', '}', '(', ')'];
    const brackets = {
        array: [],
        pairs: {
            ']': '[',
            '}': '{',
            ')': '(',
        },
    };

    for (let i = 0; i < text.length; i += 1) {
        const character = text[i];
        if (matches.some(el => el === text[i])) {
            if (brackets.array[brackets.array.length - 1]
                && brackets.array[brackets.array.length - 1] === brackets.pairs[character]) {
                brackets.array.pop();
            } else {
                brackets.array.push(text[i]);
            }
        }
    }
    console.log('brackets.array.length = ', brackets.array.length);
    if (brackets.array.length) {
        return false;
    }
    return true;
};
