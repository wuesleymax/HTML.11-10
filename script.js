let displayValue = '';
let operacao = null;
let num1 = null;

function adicionarDigito(digito) {
    displayValue += digito; // Adiciona o dígito ao valor exibido
    document.getElementById('display').value = displayValue; // Atualiza o display
}

function setOperacao(op) {
    if (displayValue === '') return; // Ignora se o display estiver vazio
    num1 = parseFloat(displayValue); // Converte o valor do display para número
    operacao = op; // Define a operação
    displayValue = ''; // Limpa o display para o próximo número
}

function calcular() {
    if (num1 === null || displayValue === '' || operacao === null) return; // Verifica se tudo está definido
    const num2 = parseFloat(displayValue); // Converte o segundo número
    let resultado;

    if (operacao === '+') {
        resultado = num1 + num2;
    } else if (operacao === '-') {
        resultado = num1 - num2;
    } else if (operacao === '*') {
        resultado = num1 * num2;
    } else if (operacao === '/') {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = 'Erro: Divisão por zero';
        }
    }

    document.getElementById('display').value = resultado; // Mostra o resultado no display
    displayValue = ''; // Limpa o valor exibido
    num1 = null; // Reseta o primeiro número
    operacao = null; // Reseta a operação
}

function limpar() {
    displayValue = ''; // Limpa o valor exibido
    num1 = null; // Reseta o primeiro número
    operacao = null; // Reseta a operação
    document.getElementById('display').value = ''; // Limpa o display
}