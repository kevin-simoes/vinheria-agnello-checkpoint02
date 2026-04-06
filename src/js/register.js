console.log("JS carregado");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado");

  const botao = document.getElementById("btnCadastro");

  botao.addEventListener("click", () => {


    const nome = prompt("Digite o nome do vinho:");
    const tipo = prompt("Digite o tipo do vinho (Tinto, Branco, Rosé):");
    const ano = prompt("Digite o ano da safra:");
    const quantidade = prompt("Digite a quantidade em estoque:");


    const dados = {
      nome,
      tipo,
      ano,
      quantidade
    };

    console.log("DADOS DO VINHO:");
    console.log(dados);

    console.log("Nome do Vinho:", dados.nome);
    console.log("Tipo do Vinho:", dados.tipo);
    console.log("Ano da Safra:", dados.ano);
    console.log("Quantidade:", dados.quantidade);


    alert("Cadastro realizado! Veja os detalhes no console.");

  });
});