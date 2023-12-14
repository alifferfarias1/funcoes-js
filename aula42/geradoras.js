function* geradora1() {
    // codigo
    yield 'valor 1';
    // codigo
    yield 'valor 2';
    // codigo
    yield 'valor 3';
}

function* geradora2(){
    let i = 0;
    while(true){
        yield i;
        i++
    }
}

function* geradora3(){
    yield 1;
    yield 2;
    yield 3;
}


function* geradora4(){
    yield*geradora3();
    yield 4;
    yield 5;
    yield 6;
}



function* geradora5(){
    
    yield function(){
        console.log('vim do y1');
    };
    
    yield funcaoArrow = () =>{
        console.log('vim do y2');
        
    };
    
    return function(){
        console.log('vim do return')
    }
}


const g2 = geradora2();
const g4 = geradora4();
const g5 = geradora5();

console.log(g2.next().value)
console.log(g2.next().value)

for(let valor of g4){
    console.log(valor)
}

const func1 = g5.next().value
const func2 = g5.next().value
const func3 = g5.next().value

func1();
func2();
func3();
