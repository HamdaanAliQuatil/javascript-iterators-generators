const numbersObject = { a: 1, b: 2, c: 3, d: 4, e: 5 };

numbersObject[Symbol.iterator] = function(){
    // multiply odd keys by 2 and devide even keys by 2
    // return the value property and the done property
    let obj = this;
    let index = 0;
    let keys = Object.keys(obj);
    return {
        next(){
            let key = keys[index++];
            let value = obj[key];
            value = index % 2 === 0 ? value / 2 : value * 2;
            return {
                value: value,
                done: index > keys.length
            }
        }
    }
}

for ( let i of numbersObject){
    console.log(i);
}