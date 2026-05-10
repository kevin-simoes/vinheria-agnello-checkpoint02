document.addEventListener("DOMContentLoaded", () => {

  const botao = document.getElementById("btnCadastro");


  botao.addEventListener("click", () => {

    let continuar = true;
    let qtdcadastros=0;
    let nomeantigo;
    let antigo=2026;
    let estoquebaixo=0;

    Cadastro();

    function perguntar(mensagem) {

      const resposta = prompt(mensagem);

      if (resposta === null) {
        alert("Cadastro cancelado.");
        return null;
      }

      return resposta;
    }    

    function antigos(ano,nome){
      if(ano<antigo){
        antigo=ano;
        nomeantigo=nome;
      }
      console.log("O Vinho mais antigo é o :",nomeantigo);
    }
    
    function verificarEstoque(quantidade) {

      if (quantidade < 5) {
        alert("Estoque baixo!");
        estoquebaixo++;
        console.log("Quantidade de Vinhos com Estoque baixo:", estoquebaixo);
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
    function Cadastro(){
      while (continuar) {

        qtdcadastros++;
        console.log("Quantidade de Cadastros:",qtdcadastros);

        const nome = perguntar("Digite o nome do vinho:");
        if (nome === null) return;

        const tipo = perguntar("Digite o tipo do vinho (Tinto, Branco, Rosé):");
        if (tipo === null) return;

        const ano = perguntar("Digite o ano da safra:");
        antigos(ano,nome);
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
    }
    
  });

});