/* 

if - se, condição
else if -  se não, se condição
else - se não.

0 - 12 - bom dia
13 - 17 - boa tarde
18 - 23 - boa noite

*/

const hora = 23;

if (hora >= 0 && hora <= 12) {
    console.log('Bom dia')
} else if (hora >= 13 && hora <= 17) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('Ajuste seu relógio.')
}