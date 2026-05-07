document.addEventListener("DOMContentLoaded", () => {

  const botao = document.getElementById("btnCadastro");

  botao.addEventListener("click", () => {

    function perguntar(mensagem) {
      const resposta = prompt(mensagem);

      if (resposta === null) {
        alert("Cadastro cancelado.");
        return null;
      }

      return resposta;
    }

    let continuar = true;

    while (continuar) {

      const nome = perguntar("Digite o nome do vinho:");
      if (nome === null) return;

      const tipo = perguntar("Digite o tipo do vinho (Tinto, Branco, Rosé):");
      if (tipo === null) return;

      const ano = perguntar("Digite o ano da safra:");
      if (ano === null) return;

      const quantidade = perguntar("Digite a quantidade em estoque:");
      if (quantidade === null) return;

      console.log("LISTA DE VINHOS: ");
      console.log("Nome:", nome);
      console.log("Tipo:", tipo);
      console.log("Ano:", ano);
      console.log("Quantidade:", quantidade);

      continuar = confirm("Deseja cadastrar outro vinho?");
    }

    alert("Cadastros finalizados!");

  });

});