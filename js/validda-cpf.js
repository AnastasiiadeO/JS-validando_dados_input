export default function ehUmCPF (campo) {
    const cpf = campo.value.replace(/\.|-/g, ""); //recebe dois parâmetros: o primeiro indica o conteúdo que queremos substituir (no caso, os caracteres especiais . e -), enquanto o segundo indica o conteúdo que será utilizado para substituí-lo (no caso, um campo vazio). O "g" indica que a substituição deve ser feita em todas as ocorrências de ponto (.) e traço (-) na string.
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        campo.setCustomValidity('Esse cpf não é valido');
    } 
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '444444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf);
} 
//Dessa forma conseguimos verificar se o número que inserimos no campo de CPF está nessa lista de números repetidos. Para isso criaremos um return com o método numerosRepetidos.includes(cpf). Caso o valor do CPF inserido seja encontrado na lista de repetições, o método retornará true, caso contrário retornará false.

//existe uma formula para confirmar o primeiro numero de verificacao de CPF xxxxxxxxx-?x
function validaPrimeiroDigito (cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho <9; tamanho++) {
        soma += cpf[tamanho]*multiplicador;
        multiplicador --;
    }

    soma = (soma*10)%11; //остаток от деления

    if (soma ==10 || soma ==11) {
        soma = 0;
    }

    return soma != cpf[9];
}
//existe uma formula para confirmar o segundo numero de verificacao de CPF xxxxxxxxx-x?
function validaSegundoDigito (cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho <10; tamanho++) {
        soma += cpf[tamanho]*multiplicador;
        multiplicador --;
    }

    soma = (soma*10)%11; //остаток от деления

    if (soma ==10 || soma ==11) {
        soma = 0;
    }

    return soma != cpf[10];
}