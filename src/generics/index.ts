/* generics */
function merge<T, U>(a: T, b: U) {
    return Object.assign(a, b);
}

const mergedObj = merge({ name: 'Ken'}, {age: 30 });
const sampleMerge = merge<string, number>('', 1);
console.log(mergedObj);

/* setting constraints */

/**
 * @T has to be an object
 * @U has to be a number
 */
function mergeConstraint<T extends object, U extends number>(a: T, b: U) {
    return {a, b};
}

