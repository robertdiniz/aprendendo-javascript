/* 

Um array é nada mais do que uma lista.

push() -> coloca um novo elemento ao final do array;

shift() -> remove o primeiro elemento;

unshift() -> move os elementos e adiciona um novo no início;

pop() -> remove o último elemento;
* se estiver numa variável retorna o elemento removido;

delete -> deleta algum elemento de um array/objeto;

instanceof -> podemos verificar se é array, objeto;


*/
//              0        1         2            3        4
let alunos = ['Luiz', 'Maria', 'Ricardo']; // Robert, Lorenna

alunos.push('Robert');
alunos.push('Lorenna');

console.log(alunos.slice(0, -2))

// alunos.pop('Ricardo');
// alunos.push('Mylena');
// alunos.unshift('Robert');