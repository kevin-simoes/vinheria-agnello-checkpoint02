document.addEventListener("DOMContentLoaded", () => {

  const botao = document.getElementById("btnCadastro");

  function perguntar(mensagem) {

    const resposta = prompt(mensagem);

    if (resposta === null) {
      alert("Cadastro cancelado.");
      return null;
    }

    return resposta;
  }

  function verificarEstoque(quantidade) {

    if (quantidade < 5) {
      alert("Estoque baixo!");
      console.log("Estoque baixo! Quantidade em estoque:", quantidade);
    } else {
      alert("Estoque suficiente.");
      console.log("Estoque suficiente. Quantidade em estoque:", quantidade);
    }

  }

  function perguntarQuantidade() {

    let quantidade;

    while (true) {

      quantidade = perguntar("Digite a quantidade em estoque:");

      if (quantidade === null) {
        return null;
      }

      quantidade = Number(quantidade);

      if (!isNaN(quantidade)) {
        return quantidade;
      }

      alert("Digite apenas números!");

    }

  }

  botao.addEventListener("click", () => {

    let continuar = true;

    while (continuar) {

      const nome = perguntar("Digite o nome do vinho:");
      if (nome === null) return;

      const tipo = perguntar("Digite o tipo do vinho (Tinto, Branco, Rosé):");
      if (tipo === null) return;

      const ano = perguntar("Digite o ano da safra:");
      if (ano === null) return;

      const quantidade = perguntarQuantidade();
      if (quantidade === null) return;

      verificarEstoque(quantidade);

      console.log("Nome:", nome);
      console.log("Tipo:", tipo);
      console.log("Ano:", ano);
    

      continuar = confirm("Deseja cadastrar outro vinho?");
    }

    alert("Cadastros finalizados!");

  });

});