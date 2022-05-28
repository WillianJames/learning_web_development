import {fatorial, pow, sum} from './function_examples.js';

let fatorialNum = 5;
let powNums = [10, 2];
let sumNums = [25, 25];

alert(`O fatorial de ${fatorialNum} é ${fatorial(fatorialNum)}`);
alert(`${powNums[0]} elevado a ${powNums[1]} é ${pow(powNums[0], powNums[1])}`);
alert(`A soma de ${sumNums[0]} + ${sumNums[1]} é igual a ${sum(sumNums[0], sumNums[1])}`);