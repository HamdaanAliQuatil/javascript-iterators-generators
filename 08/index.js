function* randomNumbers() {
    try{
        var rn = Math.floor(Math.random() * 100);
        console.log("rn", rn);
        yield rn;
        console.log("Continued here");
        var rn2 = yield;
        console.log("rn2", rn2);
        if(rn2){
            rn += rn2;
        }
        console.log("rn updated", rn);
    }catch (error){
        console.error("Error in the generator", error);
    }
}

const it = randomNumbers();
var result = it.next();
console.log("result it", result);
console.log(it.next());
it.throw("THIS");
console.log(it.next(100));