# CP1-FrontEnd-VinhariaAgnelo
Esse projeto se trata sobre  um trabalho onde temos que fazer um site para uma vinharia contendo os elementos aprendidos em sala de aula, segue abaixo os requisitos obrigatórios para o projeto:

- 5 Arquivos HTML criados (index.html, products.html, history.html, team.html e contact.html);
- index.html com navegação para as demais páginas;
- Heading tags e parágrafos aplicados;
- Lista ul/ol usada em pelo menos uma das páginas (history.html);
- Tabela HTML com conteúdo relevante (products.html);
- Formulário com input, textarea e botão (contact.html);
- Tags semânticas aplicadas corretamente;
- Meta tags (keywords, description) em cada página;
- Estilos com CSS usando classes e ids;
- Imagens em todas as páginas;
- Vídeo inserido;
- Menu de navegação funcional;
- Links internos e externos funcionando;
- Cada integrante com pelo menos 2 commits;
- Projeto publicado no GitHub Pages;

## Sobre o projeto (Parte técnica)

### Estrutura
Segue abaixo a estrutura do projeto:

```bash
.
├── src/
│   ├── assets/
│   │   └── imgs/
│   ├── css/
│   │   ├── local/
│   │   │   ├── sections/
│   │   │   │   ├── footer.css
│   │   │   │   └── header.css
│   │   │   ├── contact.css
│   │   │   ├── main.css
│   │   │   ├── products.css
│   │   │   ├── style.css
│   │   │   ├── team.css
│   │   │   └── variables.css
│   │   └── global.css
│   ├── js/
│   │   └── script.js
│   ├── pages/
│   │   ├── contact.html
│   │   ├── history.html
│   │   ├── products.html
│   │   └── team.html
│   │   └── register.html
│   └── index.html
├── LICENSE
└── README.md
```
### Estilo do site
Para estilizar o site, nós usamos os estilos globais dentro de variables.css e aplicamos no main.css, veja abaixo as variáveis usadas para o projeto:

#### Variáveis Globais (Cores e Fontes)


```css
:root {
    --color-primary: #1C1D21;
    --color-secondary: #F7F4EF;
    --color-tertiary: #F85036;
    --color-transparent: #ffffffc1;

    --fonte-titulo: 'Cinzel', serif;
    --fonte-texto: 'Montserrat', sans-serif;
}

```


Com isso, qualquer página do projeto já vem com o estilo pré-definido, para situações mais específicas como definições de main, div, span, etc. Nós usamos os arquivos dentro da pasta local.

### Header e Footer
Semelhante aos estilos específicos, header e footer são usados a partir de arquivos css únicos, ambas seções estilizadas na pasta sections.

### Importância do global.css
Como dito anteriormente, as páginas html precisam importar diversos arquivos css para funcionar corretamente, para organizar a importação no arquivo html, usamos o global.css que funciona como um processamento de todas os arquivos css, unificando tudo em um único arquivo, precisando importar um único arquivo ao invés de 5 por exemplo.

### Páginas HTML

#### index.html
Nessa tela é onde o cliente tem a sua primeira impressão da vinharia, por isso foi pensado com mais cuidado pra incentivar o cliente a navegar para as páginas seguintes, contendo um hero chamativo para ver os produtos e contato da vinharia. Mais abaixo com uma apresentação dos melhores produtos com uma breve descrição. Na sequência uma div onde comenta sobre as principais características da vinharia, além de um vídeo informativo sobre como servir um vinho. Por fim, um footer creditando a equipe e com links que levam aos tópicos das outras páginas.

#### products.html
Nessa tela é onde o cliente tem acesso aos vinhos da vinharia, contendo seu nome e informações junto de uma tabela com informações dos ingredientes dos vinhos.

#### history.html
Nessa tela é onde o cliente tem acesso a história da vinharia, contando desde a origem da marca, seleção dos vinhos, lista dos vinhos mais vendidos, entre outros.

#### team.html
Nessa tela é onde o cliente conhece a equipe de programadores do site, com os links do linkedin e github de cada um.

#### contact.html
Nessa tela é onde o cliente acessa o formulário da vinharia, com informações da vinharia como telefone, email, endereço, entre outras informações. Além disso tem um formulário com inputs a serem preenchidos e um textarea pra mensagem que o cliente quer fazer com a vinharia.

## Link do site
Veja o projeto funcionando aqui: [Vinharia Agnello](https://luansmf.github.io/CP1-FrontEnd-VinhariaAgnelo/)

## Equipe de programadores
### João Pedro Nóbrega Pereira
[Git Hub](https://github.com/nobrejohnn)<br>
[Linkedin](https://www.linkedin.com/in/jo%C3%A3o-pedro-n%C3%B3brega-8aba55293/)
### Kevin Simões de Souza Lima
[Git Hub](https://github.com/kevin-simoes)<br>
[Linkedin](https://www.linkedin.com/in/kevin-sim%C3%B5es-362750350/)
### Luan Sá Muniz dos Santos de Freitas
[Git Hub](https://github.com/LuanSMF)<br>
[Linkedin](https://www.linkedin.com/in/luans%C3%A1muniz/)

#### Autor do Texto
#### Kevin Simões
