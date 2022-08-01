let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = "0"

function somarAoSaldo(numero: number): void {
    const soma = Number(campoSaldo.innerHTML) + numero

    campoSaldo.innerHTML = soma.toString();
}

function limparSaldo(): void {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});