let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0

num1 = parseFloat(num1.toFixed(2));

console.log(num1)
console.log(Number.isInteger(num1))





/* 

toString() -> transforma numa String;

toString(2) -> transforma numa String com valor binário;

toFixed() -> formata o decimais do número;

Number.isInteger() -> verifica se o número é inteiro, recebe valores booleanos;

Number.isNaN() -> verifica se a conta é inválida.

*/



