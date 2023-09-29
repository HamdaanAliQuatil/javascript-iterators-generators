const customIteratorObject = {
    obj: { a: 1, b:2, c: 3, d: 4, e: 5 },
    [Symbol.iterator](){
        let obj = this.obj;
        let index = 0;
        let keys = Object.keys(obj);

        return{
            next(){
                return {
                    value: obj[keys[index++]],
                    done: index > keys.length
                }
            }
        }
    }
}

for ( let i of customIteratorObject){
    console.log(i);
}