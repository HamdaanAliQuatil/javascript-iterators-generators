const customIteratorObject = {
    obj: { a: 1, b:2, c: 3, d: 4, e: 5 },
    *[Symbol.iterator]() {
        for ( const key in this.obj ){
            yield this.obj[key];
        }
    }
}

for ( let i of customIteratorObject){
    console.log(i);
}

const  customLogger = {
    actions: [bytes, logx],
    *[Symbol.iterator]() {
        let argument = null;

        for ( const action of this.actions ){
            if ( !argument && action === bytes ){
                try{
                    argument = action();
                } catch (error){
                    yield { action, error };
                    return;
                }
            }
            yield { action, argument }
        }
    }
}

function bytes(){
    if (Math.random() < 0.5 )
        throw new Error("Error in the bytes function");

    return "0x01";
}

function logx(arg){
    console.log("logx", arg);
}

for ( const { action, argument, error } of customLogger ){
    if (error){
        console.error(`Error ocurred during iteration: ${error}`);
    }
    else {
        action(argument);
    }
}

console.log("Itertor is closed");