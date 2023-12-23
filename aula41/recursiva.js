// funções recursivas são funções que se chamam

function recursivas(max){
    if( max >= 10) return
    max++;
    console.log(max);
    recursivas(max)
    
}


recursivas(7);