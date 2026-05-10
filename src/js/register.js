import {
    validarNome,
    validarTipo,
    validarAno,
    validarQuantidade,
    classificarVinho
} from './validaentrada.js';

document.addEventListener("DOMContentLoaded", () => {

  const botao = document.getElementById("btnCadastro");


  botao.addEventListener("click", () => {

    let continuar = true;
    let qtdcadastros=0;
    let nomeantigo;
    let antigo=2026;
    let estoquebaixo=0;

    Cadastro();

    function perguntar(mensagem,funcaoValidacao = null, mensagemErro = "Entrada inválida.") {
      while(true){
        const resposta = prompt(mensagem);

        if (resposta === null) {
          alert("Cadastro cancelado.");
          return null;
        }

        if(funcaoValidacao == null || funcaoValidacao(resposta)){
          return resposta;
        }

        alert(mensagemErro);
      }
    }    

    function antigos(ano,nome){
      if(ano<antigo){
        antigo=ano;
        nomeantigo=nome;
      }
      console.log("O Vinho mais antigo é o:",nomeantigo);
      return nomeantigo;
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

    function mostrarDados(nome,tipo,ano,quantidade,classificacao){
        alert("Vinho cadastrado com sucesso!");
        console.log("--- Dados do Vinho ---");
        console.log("Nome:", nome);
        console.log("Tipo:", tipo);
        console.log("Ano:", ano);
        console.log("Quantidade:", quantidade);
        console.log("Classificação:", classificacao);
    }
  
    function Cadastro(){
      while (continuar) {

        const nome = perguntar("Digite o nome do vinho:",validarNome,"Nome inválido. Não digite números.");
        if (nome === null) return;

        const tipo = perguntar("Digite o tipo do vinho (Tinto, Branco, Rosé):",validarTipo,"Digitar apenas Tinto, Branco ou Rosé.");
        if (tipo === null) return;

        const ano = perguntar("Digite o ano da safra:",validarAno,"Digite um ano válido.");
        if (ano === null) return;

        const quantidade = perguntar("Digite a quantidade em estoque:",validarQuantidade,"Digite uma quantidade válida.");
        if (quantidade === null) return;
        const anoNumero = Number(ano);
        const quantidadeNumero = Number(quantidade);
        const classificacao = classificarVinho(anoNumero);

        qtdcadastros++;
        console.log("Quantidade de Cadastros:",qtdcadastros);

        antigos(anoNumero,nome);
        verificarEstoque(quantidadeNumero);

        mostrarDados(nome, tipo, anoNumero, quantidadeNumero, classificacao);
      
        continuar = confirm("Deseja cadastrar outro vinho?");
      }
      alert("Cadastro finalizado!");
      alert("Numero de Cadastros:"+ qtdcadastros);
      alert("Quantidade de Vinhos com estoque baixo:"+estoquebaixo);
      alert("O Vinho com a safra mais antiga é:"+ nomeantigo);
    }
    
  });

});