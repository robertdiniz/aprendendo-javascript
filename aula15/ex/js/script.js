const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.querySelector('#texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> Raíz quadrada: ${Math.sqrt(numero)} </p>`
texto.innerHTML += `<p> Seu número é inteiro: ${Number.isInteger(numero)} </p>`
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)} </p>`
texto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)} </p>`
texto.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)} </p>`
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`
