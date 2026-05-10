export function validarNome(nome) {

    return (
        nome !== null &&
        nome.trim() !== "" &&
        !/\d/.test(nome)
    );

}

export function validarTipo(tipo) {

    return (
        tipo.toLowerCase() === "tinto" ||
        tipo.toLowerCase() === "branco" ||
        tipo.toLowerCase() === "rosé"
    );

}

export function validarAno(ano) {

    return (
        ano !== null &&
        ano.trim() !== "" &&
        !isNaN(ano) &&
        Number(ano) > 0 &&
        Number(ano) <= 2026
    );

}

export function validarQuantidade(quantidade) {

    return (
        quantidade !== null &&
        quantidade.trim() !== "" &&
        !isNaN(quantidade) &&
        Number(quantidade) > 0
    );

}

export function classificarVinho(ano) {

    const idade = 2026 - Number(ano);

    if (idade <= 2) {

        return "Jovem";

    } else if (idade <= 5) {

        return "Amadurecido";

    } else {

        return "Antigo";

    }
}