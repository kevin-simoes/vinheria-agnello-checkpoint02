<div align="center">
    <h1>
        🍷<br>
        Checkpoint 02 de Web Development
    </h1>
</div>
<div align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div><br>

Esse projeto se trata sobre  um trabalho onde temos que fazer um site para uma vinharia contendo os elementos aprendidos em sala de aula, segue abaixo os requisitos obrigatórios para o projeto:

<details>
  <summary style="font-size: 1.5em; font-weight: 600;">
    Requisitos
  </summary>

  <ul>
    <li>
      Reaproveite a ideia de cadastro de vinhos.
    </li>
    <li>
      Permita o cadastro de vários vinhos em sequência, perguntando ao final se deseja cadastrar outro.
    </li>
    <li>
      Crie funções reutilizáveis:
      <ul>
        <li>Para validar entradas</li>
        <li>Para verificar se o estoque está baixo (menos de 5)</li>
        <li>Para classificar o vinho (jovem, amadurecido, antigo)</li>
        <li>Para mostrar os dados no console com aviso por <code>alert()</code></li>
      </ul>
    </li>
    <li>
      Evite repetir código: funções são obrigatórias.
    </li>
    <li>
      Escopo deve ser respeitado:
      <ul>
        <li>Variáveis declaradas dentro das funções devem ser usadas localmente</li>
      </ul>
    </li>
    <li>
      Ao final, exiba:
      <ul>
        <li>Quantos cadastros foram feitos</li>
        <li>Quantos vinhos têm estoque baixo</li>
        <li>O vinho com a safra mais antiga (comparando manualmente dentro das iterações)</li>
      </ul>
    </li>
  </ul>
</details>

## Implementações do CP 02

### validaentrada.js

Nesse arquivo foi implementado funções para verificar o valor informado que o usuário passa para o prompt, analisando possíveis erros de digitação e sempre avisando ao usuário que foi preenchido de maneira errada se for o caso, além de repetir até chegar ao valor correto(coisa que não tinha antes no projeto). Além de uma função pra classificar o vinho de acordo com a safra.

### register.js

register.js é o arquivo principal da funcionalidade do cadastro, importando as funções do validaentrada.js, além de ter funções como verificar qual é o vinho com a safra mais antiga com os que o usuário cadastrou, verificar se o estoque tá baixo(menor que 5), registrar as informações no console.log após o cadastro do vinho. Ao final da execução, é mostrado todas as informações pedidas no requisitos.

## Equipe de programadores
### João Pedro Nóbrega Pereira
<ul>
  <li>
    <strong>João Pedro Nóbrega Pereira</strong> — RM: 570322
  </li>

  <li>
    <strong>Kevin Simões de Souza Lima</strong> — RM: 571942
  </li>

  <li>
    <strong>Luan Sá Muniz dos Santos</strong> — RM: 569136
  </li>
</ul>

## Link do GitHub Pages
[Link do projeto](https://kevin-simoes.github.io/vinheria-agnello-checkpoint02/)