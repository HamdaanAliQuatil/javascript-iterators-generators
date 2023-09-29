const arr = [1, 2, 3, 4, 5];
arr.newProp = 6;
Object.defineProperty( arr, 'anotherProp', { value: 7, enumerable: true })

for ( let i of arr ){
    console.log(i);
}

for ( let i in arr ){
    console.log(i);
}

console.log(Object.values(arr));

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5};

for (let i in obj){
    console.log(i);
}

for ( let i of obj ){
    console.log(i);
}