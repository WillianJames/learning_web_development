/*
Há 3 formas de definir funções no javascript:
1 - Declaration
2 - Function expression
3 - Arrow functions
OBS: No javascript funções são consideradas valores como 
quaisquer outros(number, string...), portanto é possivel guardá-las em variáveis
 */

//Declaration
function fatorial(n){
    if(n < 0) return;

    let result = 1;

    for(let i = n; i >= 2; i--){
        result *= i;
    }

    return result;
}

//Function expression
let pow = function(x, n){return x ** n};

//Arrow function
let sum = (a, b) => a + b;