// From Pairs. Write a method that returns an object composed of key-value pairs.
// EX: Input [[a,2], [b,4], [c,6]] => Output {a: 2, b: 4, c: 6} (7


function pairsToObject(pairs) {
    let obj = {};
    pairs.forEach(pair => {
        obj[pair[0]] = pair[1];
    });
    return obj;
}
console.log(pairsToObject([['a', 2], ['b', 4], ['c', 6]])); 