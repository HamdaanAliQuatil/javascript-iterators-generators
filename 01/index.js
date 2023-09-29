function iteratorFuntion(start, finish){
    let index = start;
    let count = 0;

    return {
        next(){
            let result;
            if ( index < finish ){
                result = { value: index, done: false };
                index++;
                count++;
                return result;
            }
            return { value: count, done: true }
        }
    }
}

const iterator = iteratorFuntion(0, 10);
let result = iterator.next();
while(!result.done){
    console.log(result.value);
    result = iterator.next();
}