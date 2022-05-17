// let umaString = "um \"texto\"";
// usamos a \" \" para inserir aspas na nossa string.

/*
                                    0    1    2
* As Strings são indexadas. TEXTO ['t', 'e', 'x', ...]

charAt() -> busca elementos

charCodeAt() -> busca elemento com valor ascii

concat() -> serve para concatenar

indexOf() -> busca o elemento e imprime o lugar, se caso não existir retorna -1.
* podemos dar dois argumentos, indexOf('o', 3) -> vai buscar 'o' partir do elemento 3.

lastIndexof() -> mesma função de indexOf, mas começa buscar elementos do final da string.

replace() -> substituir a palavra para outra coisa.
* podemos usar exp. regulares, como /r/ (buscar r na string).

slice() -> recortamos um trecho da string.
* passamos dois argumentos o início e o fim.

split() -> divide uma String.
* pode escolher a posição de início

toUppercase() -> transforma os caracteres para uppercase.
toLocaleLowerCase() -> transforma os caracteres para minusculo.

*/

let umaString = "Robert Mackenniitt Diniz Ferreira";

console.log(umaString.replace('t', 'M'));








