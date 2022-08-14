const characters = "abcdefghklmop12345678";

const generateKey = (length, characters) => {
    let key = '';

    for (let i = 0; i < length; i++) {
        const index = (Math.random() * (characters.length - 1)).toFixed(0);
        key += characters[index]
    }

    return key;
}

const key = generateKey(1000, characters);

console.log('debug key', key);
