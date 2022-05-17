/* 

* arrays/objetos podem ser const.
* não retribua valor de uma array.

this é em relação ao objeto próprio

podemos criar uma função para criar novos objetos.
 
*/


function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade, fala() { console.log(`${this.nome} ${this.sobrenome} é gay.`) } }
}

const pessoa1 = criaPessoa('Ricardo', 'Oliveira', 17);
const pessoa2 = criaPessoa('Daniel', 'Maciel', 17);

pessoa1.fala();
pessoa2.fala();

console.log(pessoa1.nome, pessoa2.nome)
console.log(pessoa1.sobrenome, pessoa2.sobrenome)