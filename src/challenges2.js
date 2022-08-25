// Desafio 11
function testaNumero(numeros) {
  for (let i = 0; i < numeros.length; i += 1) {
    if ((numeros[i] < 0) || (numeros[i] > 9)) return false;
  } return true;
}

function procuraRepitido(vetor, pos, contador) {
  for (let j = 0; j < vetor.length; j += 1) {
    if (pos === vetor[j]) contador += 1;
  }
  return contador;
}

function testaRepitido(vetor) {
  let contador = 0;
  for (let i = 0; i < vetor.length; i += 1) {
    contador = procuraRepitido(vetor, vetor[i], contador);
    if (contador > 2) return false;
    contador = 0;
  }
  return true;
}

function geraNumero(vetor) {
  let padrao = '(xx) xxxxx-xxxx';
  let alterado = '';
  let len = 0;
  for (let i = 0; i < padrao.length; i += 1) {
    if (padrao[i] === 'x') {
      alterado += `${vetor[len]}`;
      len += 1;
    } else {
      alterado += `${padrao[i]}`;
    }
  }
  return alterado;
}

function generatePhoneNumber(vetor) {
  if (vetor.length !== 11) return 'Array com tamanho incorreto.';
  if ((!testaNumero(vetor)) || (!testaRepitido(vetor))) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return geraNumero(vetor);
}

// Desafio 12
function valorAbsoluto(n) {
  return Math.abs(n);
}

function testaSoma(a, b, c) {
  if (valorAbsoluto(a) > valorAbsoluto(b) + valorAbsoluto(c)) return false;
  if (valorAbsoluto(b) > valorAbsoluto(a) + valorAbsoluto(c)) return false;
  if (valorAbsoluto(c) > valorAbsoluto(a) + valorAbsoluto(b)) return false;
  return true;
}

function testaDiferenca(a, b, c) {
  if (valorAbsoluto(a) < valorAbsoluto(b) - valorAbsoluto(c)) return false;
  if (valorAbsoluto(b) < valorAbsoluto(a) - valorAbsoluto(c)) return false;
  if (valorAbsoluto(c) < valorAbsoluto(a) - valorAbsoluto(b)) return false;
  return true;
}

function triangleCheck(lA, lB, lC) {
  let soma = testaSoma(lA, lB, lC);
  let diferenca = testaDiferenca(lA, lB, lC);
  if (soma && diferenca) return true;
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
