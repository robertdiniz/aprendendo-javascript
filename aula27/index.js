// Operação Ternária
// (condição) ? 'true' : 'false';

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario)

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao)