let resultado = document.getElementById("resultado");

function adicionar(valor) {
  resultado.value += valor;
}

function limpar() {
  resultado.value = "";
}

function apagar() {
  resultado.value = resultado.value.slice(0, -1);
}

function calcular() {
  resultado.value = eval(resultado.value);
}