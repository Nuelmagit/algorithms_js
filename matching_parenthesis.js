const string = "{{}}()[()]";

const matches = {
    "{": "}",
    "[": "]",
    "(": ")",
}

var reverseMatches = {}


const initReverseMatches = () => {
    if (Object.keys(reverseMatches) > 0) return;
    for (const [key, value] of Object.entries(matches)) {
        reverseMatches[value] = key;
    }
}

const matchingParentesis = (string) => {
    initReverseMatches();

    const stack = [];

    string.split('').forEach(char => {
        const functionability = checkFunctionalityOfChar(char);

        switch (functionability) {
            case 'open':
                stack.unshift(char);
                break;
            case 'close':
                const openingCharacter = stack.shift();
                if (matches[openingCharacter] !== char)
                    throw new Error(`the ${char} in not the correct char for closing ${openingCharacter}`);
                break;
            default:
                throw new Error(`Invalid character ${char}`);
        }

    });

    if(stack.length){
        throw new Error(`Some closing tag missing`);
    }

    return true;

}


const checkFunctionalityOfChar = (char) => {
    let result = "invalid";
    if (matches[char]) {
        result = "open";
    } else if (reverseMatches[char]) {
        result = "close";
    }
    return result;
}


console.log(matchingParentesis(string))