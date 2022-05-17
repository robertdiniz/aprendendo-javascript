function myApp() {

    // Pegar os 'resultados' dentro do 'form'
    // e alterar os valores dentro da div resultados

    const form = document.querySelector('.form');
    const calculo = form.querySelector('#calculo');
    calculo.innerHTML = ``;
    // Evento do botão para calcular

    function calcular(evento) {
        evento.preventDefault();
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        const pesoValor = Number(peso.value.replace(',', '.'));
        const alturaValor = Number(altura.value.replace(',', '.'));
        const calculo = form.querySelector('#calculo');
        const imc = (pesoValor / alturaValor ** 2).toFixed(2);

        console.log(pesoValor);
        console.log(alturaValor);


        if (!pesoValor && !alturaValor) {
            calculo.innerHTML = `<p>Erro, faltou algum dado ou não inseriu nenhum.</p>`;
            return;
        } else if (imc >= 0 && imc <= 18.5) {
            calculo.innerHTML = `<p>seu <strong>IMC</strong> é de ${imc}, abaixo do peso.</p>`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            calculo.innerHTML = `<p>Seu <strong>IMC</strong> é ${imc}, peso normal.</p>`;
        } else if (imc >= 25 && imc <= 29.9) {
            calculo.innerHTML = `<p>Seu <strong>IMC</strong> é ${imc}, sobrepeso.</p>`;
        } else if (imc >= 30 && imc <= 34.9) {
            calculo.innerHTML = `<p>Seu <strong>IMC</strong> é ${imc}, obesidade grau 1.</p>`;
        } else if (imc >= 35 && imc <= 39.9) {
            calculo.innerHTML = `<p>Seu <strong>IMC</strong> é ${imc}, obesidade grau 2.</p>`;
        } else if (imc >= 40) {
            calculo.innerHTML = `<p>Seu <strong>IMC</strong> é ${imc}, obesidade grau 3.</p>`;
        }

    }

    form.addEventListener('submit', calcular);


}

myApp();