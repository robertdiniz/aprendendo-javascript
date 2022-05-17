/* 
Primitivos (imutáveis) - string, number, boolean, undefined
null (bigint, symbol) - valores copiados

Referências (mutáveis) - arrays, objetos e functions - valores por referência

* Quando é primito o a variável copia o valor e armazena.
* Mesmo que altere a variável inicial não altera a variável cópia pois 
* mantém o dado.

* Quando é por referência as variáveis vão ficar linkadas ao
* valor armazenado na memória, se altera uma variável a outra também altera.


*/

let a = [1, 2, 3];
let b = a;

a.push(4);

console.log(a, b)

b.pop(4)

console.log(a, b)

