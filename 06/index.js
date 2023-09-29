const  customLogger = {
    actions: [bytes, logx],
    [Symbol.iterator](){
        let actionIndex = 0;
        const actions = this.actions;
        let argument = null;

        return{
            next(){
                if (actionIndex < actions.length){
                    const action = actions[actionIndex++];

                    if (actionIndex === 1){
                        argument = action();
                    }

                    return { value: action, done: false, argument };
                }
                else {
                    return { done: true };
                }
            },

            return(value){
                console.log("Iterator is closed with a value ", value);
                
                actionIndex = actions.length;
                return { done: true, value };
            },

            throw(error){
                console.error(`Error occured during iteration ${error}`);
                return { done: true };
            },
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

const actionIt = customLogger[Symbol.iterator]();

try {
    let result = actionIt.next();
    while(!result.done){
        const { value, argument } = result;
        value(argument);
        result = actionIt.next();
    }
} catch (error){
    actionIt.throw(error);
} finally {
    actionIt.return("Final value");
}