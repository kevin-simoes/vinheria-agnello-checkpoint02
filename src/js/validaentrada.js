function validar(condicao) {

    return condicao;

}

let nomeValido = false;
let nome;

while (!nomeValido) {

    nome = prompt("Digite o nome do vinho:");

    nomeValido = validar(

        nome !== null &&
        nome.trim() !== "" &&
        !/\d/.test(nome)

    );

    if (!nomeValido) {

        alert("Nome inválido. Não digite números.");

    }
}

let tipoValido = false;
let tipo;

while (!tipoValido) {

    tipo = prompt("Digite o tipo do vinho:");

    tipoValido = validar(

        tipo === "Tinto" ||
        tipo === "Branco" ||
        tipo === "Rosé"

    );

    if (!tipoValido) {

        alert("Digite apenas Tinto, Branco ou Rosé.");

    }
}

let anoValido = false;
let ano;

while (!anoValido) {

    ano = prompt("Digite o ano da safra:");

    anoValido = validar(

        ano !== null &&
        ano.trim() !== "" &&
        !isNaN(ano) &&
        Number(ano) > 0 &&
        Number(ano) <= 2026

    );

    if (!anoValido) {

        alert("Digite um ano válido.");

    }
}

let quantidadeValida = false;
let quantidade;

while (!quantidadeValida) {

    quantidade = prompt("Digite a quantidade de vinhos:");

    quantidadeValida = validar(

        quantidade !== null &&
        quantidade.trim() !== "" &&
        !isNaN(quantidade) &&
        Number(quantidade) > 0

    );

    if (!quantidadeValida) {

        alert("Digite uma quantidade válida.");

    }
}

function classificarVinho(ano) {

    const idade = 2026 - Number(ano);

    if (idade <= 2) {

        return "Jovem";

    } else if (idade <= 5) {

        return "Amadurecido";

    } else {

        return "Antigo";

    }
}


const classificacao = classificarVinho(ano);

console.log("--- Detalhes do Vinho ---");

console.log("Nome:", nome);
console.log("Tipo:", tipo);
console.log("Ano:", ano);
console.log("Quantidade:", quantidade);
console.log("Classificação:", classificacao);