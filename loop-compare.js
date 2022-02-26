let first = { a: 1, b: 2 };
let second = { a: 1, b: 2 };

if (JSON.stringify(first) === JSON.stringify(second)) {
    // console.log('first===second');
}

function compareObject(first, second) {
    if (Object.keys(first).length !== Object.keys(second).length) {
        return false;
    }
    for (const product in first) {
        if (first[product] !== second[product]) {
            return false;
        }
    }
    return true;
}

console.log(compareObject(first, second));



