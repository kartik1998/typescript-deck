/* generics */
function merge<T, U>(a: T, b: U) {
    return Object.assign(a, b);
}

const mergedObj = merge({ name: 'Ken'}, {age: 30 });
const sampleMerge = merge<string, number>('', 1);
console.log(mergedObj);


