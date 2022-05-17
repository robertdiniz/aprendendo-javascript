function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${peso.value} kg e ${altura.value} de altura.</p>`

        console.log(pessoas)

        /* A forma que eu fiz */
        // function criaPessoa(nome, sobrenome, peso, altura) {
        //     return pessoas.push({
        //         nome: nome,
        //         sobrenome: sobrenome,
        //         peso: peso,
        //         altura: altura
        //     })
        // }
        // criaPessoa(nome.value, sobrenome.value, peso.value, altura.value);
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();