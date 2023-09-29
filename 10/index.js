function* gen1(){
    yield 1;
    yield 2;
    yield 3;
}

function* gen2(){
    yield* gen1();
    yield 4;
}

let it = gen2();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

function gen3(){
    return [1, 2, 3];
}

function* gen4(){
    const val = yield* gen1();
}

let it2 = gen4();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
