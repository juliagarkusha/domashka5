const characters = "abcdefghklmop12345678";

const generateKey = (length, characters) => {
    let key = '';

    for (let i = 0; i <= length; i++) {
        key += characters[(Math.random() * length).toFixed(0)]
    }

    return key;
}

const key = generateKey(17, characters);

console.log('debug key', key)
