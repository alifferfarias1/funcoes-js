function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) { // callback pode ou nao ser recebido ai checamos com um if
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());
}
function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}


// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Olá mundo!') // podemos pensar nela como uma boneca russa
//         });
//     });
// });



f1(f1CallBack)  // outra forma de fazer uma função de callback | coisas que você chama quando algo termina de ocorrer

function f1CallBack(){
    f2(f2CallBack);
}

function f2CallBack(){
    f3(f3CallBack);
}

function f3CallBack(){
    console.log('Hello World!')
}

