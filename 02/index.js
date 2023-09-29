const arr = [0, 1, 2];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())