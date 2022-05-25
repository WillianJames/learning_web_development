// Add your code here

let num1 = prompt('Informe o primeiro número: ', 0);
let num2  = prompt('Informe o segundo número: ', 0);

alert(`A soma dos números é ${soma(num1, num2)}`);

function soma(num1, num2){
  if((typeof num1 || typeof num2) == 'string'){
    num1 = Number(num1);
    num2 = Number(num2);
  } 
  let soma = num1 + num2;
  return soma;
}