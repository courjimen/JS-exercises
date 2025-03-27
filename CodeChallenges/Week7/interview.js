/**
 * Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
 * 
Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
 * 
 * */


//function that take a key val pair returns two separate arrays 
function keysAndValues(obj1) {
    //  sort(), how to store the new array to the access values of original object as well .get()
    return [Object.keys(obj1).sort(), Object.values(obj1)]
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 })) //[["a", "b", "c"], [1, 2, 3]]
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })) //[["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
console.log(keysAndValues({ key1: true, key2: false, key3: undefined })) //[["key1", "key2", "key3"], [true, false, undefined]]
console.log(keysAndValues({ c: 3, b: 1, a: 2 })) // [[a,b,c], [1,2,3]]