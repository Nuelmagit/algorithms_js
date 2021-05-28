const letters = {
    a: 2,
    b: 2,
    c: 2,
    d: 3,
    e: 3,
    f: 3,
    g: 4,
    h: 4,
    i: 4,
    j: 5,
    k: 5,
    l: 5,
    m: 6,
    n: 6,
    o: 6,
    p: 7,
    q: 7,
    r: 7,
    s: 7,
    t: 8,
    u: 8,
    v: 8,
    w: 9,
    x: 9,
    y: 9,
    z: 9
}


const padNumer = {
    1: {},
    2: {
        a: true,
        b: true,
        c: true
    },
    3: {
        d: true,
        e: true,
        f: true
    },
    4: {
        g: true,
        h: true,
        i: true
    },
    5: {
        j: true,
        k: true,
        l: true
    },
    6: {
        m: true,
        n: true,
        o: true
    },
    7: {
        p: true,
        q: true,
        r: true,
        s: true
    },
    8: {
        t: true,
        u: true,
        v: true
    },
    9: {
        w: true,
        x: true,
        y: true,
        z: true
    },
    0: {
        a: true,
        b: true,
        c: true
    },
}




const main = (number, words) => {
    const availableWords = [];
    const numberAsString = number + '';
    words.forEach(word => {
        const numericWord = [];
        word.split('').forEach(char => {
            numericWord.push(letters[char])
        })

        if (numberAsString.includes(numericWord.join(''))) {
            availableWords.push(word);
        }

    });

    return availableWords;
}


console.log(main(3662277, ["foo", "bar", "baz", "foobar", "emo", "cap", "car", "cat"]))