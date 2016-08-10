# Construindo uma Aplicação E-commerce com MEAN (livro)

## Resumo dos Capítulos e Anotações Relevantes

### Capítulo 1 - Introdução

* **MongoDB**;  
* **ExpressJS**;  
* **AngularJS**;  
* **NodeJS**.

Algumas empresas, como Walmart, Groupon, Netflix, etc, optaram pelo NodeJS devido a sua escalabilidade e ganho em performance e produtividade. E desistiram de frameworks *enterprise*, como Spring MVC, Java e RoR (Ruby on Rails).


* Programação assíncrona;
* Uma única linguagem, desde o front-end ao back-end, JAVASCRIPT s2;
* APIs baseadas em JSON, SPAs, real time apps.


#### Funcionamento das SPAs e aplicativos MEAN

Quando uma solicitação do cliente, via navegador, chega para o servidor, o primeiro a recebe-lá é o *ExpressJS*, que roda sobre o *NodeJS*, que conecta, se necessário, ao *MongoDB*. E por fim, o *ExpressJS* devolve a resposta do pedido pro cliente.

1. Usuário envia requisição;
2. ExpressJS recebe e trata, sobre o *NodeJS*;
3. Chama o MongoDB, se necessário;
4. Devolve a resposta da requisição pro usuário.


#### NodeJS

Plataforma que permite rodar código JS no servidor, fora do navegador.

#### ExpressJS

É um framework web para o NodeJS. É um servidor web bastante transparente que não permite apenas criarmos apps web, mas como expor APIs, RESTful, JSON. Bastante modular.

#### MongoDB

Banco de dados orientado a documentos, NoSQL.

#### AngularJS

Framework MVC, para o front-end. Para aprimorarmos as tags HTML e manter o sincronismo das views e models em tempo real. Facilita a criação de SPAs.


#### Comandos para Rodar a aplicação

`grunt`: monta a aplicação;  
`grunt serve`: visualiza o app em modo de desenvolvimento;  
`grunt serve:dist`: visualiza o app em modo de produção.  
*Para rodar o app, o serviço do MongoDB deve estar sendo executado*


#### Estrutura de arquivos

```
app
|--- client
|------ app > componentes específicos do app
|------ assets > fontes, img, etc
|------ components > componentes reusaveis ou que não sejam específicos do app
|
|
|--- e2e > end to end > testes
|
|
|--- server
|------ api > API do srv para as aplicações
|------ auth > autenticação
|------ components > componentes reusáveis do app
|------ config > configuração do app
|--------- local.env.js > variáveis de ambiente
|--------- environment > configuração de ambiente do Node
|------ views > views renderizadas pelo servidor
```


#### Requisitos do MVP

* Adicionar produtos com título, preço, descrição, foto e quantidade;
* Página de checkout (pagamento) de produtos para usuários não cadastrados;
* Uma integração de pagamento (PayPal).

##### User stories

1. Como **vendedor**  
1.1 **criar produtos**;

2. Como **usuário**  
2.1 **ver todos os produtos publicados e informações sobre eles** quando clico no link do produto;  
2.2 **buscar produtos** para encontrar rapidamente o que estou procurando;  
2.3 ter um **menu por categoria**;  
2.4 ter **informação em tempo real** sobre o produto, se tem em estoque, esgotado;  
2.5 **pagar os produtos sem fazer login**;  
2.6 **criar um conta** para salvar meus dados, endereço de entrega, histório de compras, vender produtos;  

3. Como **administrador**  
3.1 **gerenciar os papéis dos usuários**, para criar admins, vendedores e também revogar permissão de vendas;  
3.2 **gerenciar todos os produtos**, banir os que não forem apropriados;  
3.3 **resumo de atividades** e estado dos pedidos.  


### Capítulo 2 - AngularJS

AngularJS > *HTML enhanced for web apps* (HTML apriomarado para apps web)

Nos últimos 20 anos, O JS tem sido usado basicamente para validação de formulários, animações e efeitos visuais. No seu inicio, testes de código JS era manual. O AngularJS é conhecido por sua excelência em testabilidade e possui inúmeros testes e *test runners*. Karma, para automação nativa de testes; Protractor para testes fim a fim.


#### Diretivas

São extensões HTML na forma de atributos, tags, classes CSS e até mesmo comentários HTML.

* ng-app;  
* ng-class;  
* ng-view;  
* ui-views;  
* etc.


#### Módulos

O AngularJS oferece uma variável global que contém muitas funções, como `module`.

A função `angular.module` pode funcionar tanto como *getter* ou *setter*.  

* *getter*: chamando o módulo;  
* *setter*: configurando o módulo.


#### Rotas no AngularUI

A funcionalidade de roteamento permite que o usuário tenh uma URL, que vai refletir exatamente o estado atual da aplicação.  

O roteador do AngularJS UI permite definir views e estados. Rotas, controllers e estados são associados a templates HTML através do `$stateProvider`.


#### Controllers e Escopos

Um *controller* interage com as views e os models. Os *controllers* são responsáveis pela carga dos dados e sua representação nas *views*.


##### O que é o `$http`?

É um serviço nativo do AngularJS que facilita a comunicação com servidores remotos. Será utilizado para fazer a comunicação com o servidor ExpressJS.


##### O que é o `$scope`?

É um objeto que "cola" o *controller* às *views*, providenciando a famosa vinculação de mão dupla. Cada vez que uma variável é atualizada no `$scope`, a alteração é renderizada automaticamente no HTML. E vice-versa.


#### Fábricas (`factory`) e Serviços (`services`)

Serviços são objetos ou funções únicas vinculadas aos *controllers* ou outros componentes usando um recurso chamado **Injeção de Dependência (Dependency Injection - DI)**. O `this` assume a instância da função. Retornam um construtor de função, e é necessário usar o operador `new`.

As fábricas permitem criar *closures*. Onde o `this` assume o valor devolvido pela função ao ser chamada.


#### Criando um catálogo

* `ui-sref`: chama o estado especificado e passa os parâmetros que combinem com o URL definido nas rotas.


#### Filtros

Permitem modificar a saída de uma expressão. Seja no DOM com pipe ou usando o serviço `$filter`.


#### CRUD

* Create;  
* Read;  
* Update;  
* Delete.

Primeiramente será feito um CRUD independente do servidor, os dados estarão na memória.

* `query` vai retornar todos os produtos da coleção;  
* `get` vai retornar apenas um dos produtos.

Nada externo à fábrica terá acesso a `example_products`. Ela é privada, enquanto todos os métodos no objeto devolvido são públicos. Essa técnica é conhecida como **fechamento (closure)**.

* `$state`: permite redirecionamento para um estado ou rota diferente;  
* `$stateParams`: é um objeto que contém todas as variáveis da URL.


#### Rotas

* `ng-model`: ele vincula o produto a `$scope.product`.

> Os nomes de templates parciais, por exemplo, o formulário de novo produto, devem começar com um caractere de sublinhado.


### Capítulo 3 - MongoDB

Os banco de dados são a parte mais crítica em uma aplicação de ecommerce. Eles precisam ser flexíveis o bastante para se adaptar as necessidades de crescimento e ser adequado ao catálogo atual de produtos. Além disso, a escalabilidade é outro fator importante.

* Quantos pedidos por minuto a aplicação suporta?  
* Qual o tempo médio de resposta durante os picos de acesso? E durante os periodos tranquilos?  
* Quanto tempo leva para encontrar um produto quando o inventário é grande?  
* O schema usado hoje é suficiente para demandas futuras?  

O NoSQL concentra-se em **escalabilidade**, **desempenho** e **alta disponibilidade**.

O fato de o MongoDB ser independentes de *schemas* traz uma grande flexibilidade para a aplicação, devido que podemos adicionar campos sem que seja necessário alterar os dados anteriores.


#### Aggregators (Agregadores)  

* `$sum`: soma todas as linhas/campos;  
* `$match`: filtra documentos baseado na query informada;  
* `$group`: GROUP BY;  
* `$sort`: ORDER BY.


##### Exemplo 1 - Soma o preço de todos os produtos

```js
db.products.aggregate([{
  $group: {
    _id: null,
    total: { $sum: $price }
  }
}])
```

##### Exemplo 2 - Soma o preço de todos os produtos por título e mosta apenas cujo título é Product

```js
db.products.aggregate([
  {
    $match: { title: 'Product' }
  },
  {
    $group: {
      _id: '$title',
      total: { $sum: '$price' }
    }
  }
])
```


#### Schemas

São a maneira pela qual o Mongoose define tipos de dados e a validação aos documentos do MongoDB. O Mongoose permite que sejam estabelecidos *schemas* rigorosos e flexíveis.


#### Middlewares no Mongoose

É um conjunto de *hooks* que são executados antes (**pre**) ou depois (**post**) de certas ações, como inicialização, validação, atualização, gravação ou apagamento. São normalmente usados para disparar eventos personalizados e executar tarefas assíncronas ou validações complexas.


#### CommonJS

Oferece módulos em JavaScript para rodarem no servidor e resolverem problemas de dependência e escopo.  

* `require`;  
* `module.exports`;  
* `exports`: função similiar a `module.exports`. Sempre devolvem o objeto `module.exports` e não a função `exports`.


### Capítulo 4 - NodeJS e ExpressJS

#### API RESTful

**- REST: REpresentation State Transfer** ou **transferência de estado representacional**

É um padrão moderno para criar serviços web escalonáveis. Sua aceitação se dá conta devido a sua simplicidade, desempenho e facilidade de manutenção. O ExpressJS é um dos servidores web mais populares que rodam sobre o NodeJS e tem suporte nativo a APIs do tipo RESTful sobre HTTP e JSON.  

O REST é uma interface uniforme, não orientada a eventos. Baseia-se no protocolo HTTP, usando os métodos verbais: **GET**, **POST**, **PUT**, **PATCH** e **DELETE**.  

**- URI - Uniform Resource Identifier** ou **identificador uniforme de recursos**.  

* PUT vs PATCH: PUT é usado para substituir completamente um recurso existente, enquanto PATCH é usado para atualizações parciais desse recurso.


#### ExpressJS

É um servidor web composto principalmente de rotas, middlewares e views. No MEANSHOP será usado apenas as rotas e middlewares, as views ficam com o AngularJS.

O middleware é uma função que possui 3 parâmetros: `request`, `response` e `next`. Diferente das rotas que não possui `next`.


#### Testes, TDD, BDD

##### TDD

**Test Driven Development** ou **Desenvolvimento Guiado por Testes**  

Cada recurso é implementado duplamente, no código de produção e no código de testes. Isso vai nos ajudar e detectar erros mais rápido e reduzir o tempo de depuração.


##### BDD

**Behavior Driven Development** ou **Desenvolvimento Guiado por Comportamento**  

É construído sobre o TDD. Normalmente os testes são chamados de *specs* (especificações).  

Muitos dos testes em estilo BDD estão agrupados nos blocos `describe`. Dentro desses blocos estão os blocos `it`. Eles são funções JS que pedem dois parâmetros, string de texto e callback. A string de texto é a expressão (descrição) do teste em si e o callback é o teste em si.  

Algumas funções de callback chama o parâmetro `done`. A função `done()` ajuda a testar funções async.

O bloco de `beforeEach` é executado antes do `it`. Serve para testar cada bloco de forma isolada.


### Capítulo 5 - Conectando o AngularJS à API REST do ExpressJS

O `ngResource` é um serviço do AngularJS que serve para conexão à APIs do tipo RESTful.


#### Upload de imagens

##### No AngularJS

Não é uma tarefa das mais simples. Não podemos apenas vincular o arquivo a uma tag de nome de arquivo no HTML e esperar que isso vai funcionar. Utilizar as bibliotecas `ng-file-upload` e `ng-file-upload-shim`, instalando-as com Bower.


##### No NodeJS

Quando o app envia uma solicitação POST com uma imagem, é preciso adicionar no backend um código para que o servidor saiba o que fazer. Para isso, usaremos a dependência `connect-multiparty`.


##### Testando APIs RESTful no AngularJS

* Karma e Mocha/Chai/SinonJS para testes de unidade;  
* Protractor para testes e2e (fim a fim).


###### `ngMock`

É um módulo nativo do AngularJS que injeta variáveis em testes e falsos serviços do AngularJS. Como:  

* `$httpBackend`: falso backend HTTP


### Capítulo 6 - Autenticação e Autorização

Autenticação é permitir que os usuários loguem nos sistemas, que se autentiquem. Seja por meio de usuário e senha ou através de um perfil de redes sociais.  

Autorização atribui papéis aos usuários, ou seja, o que ele poderá ou não fazer no sistema após estar autenticado.


#### Autenticação por sessão

É uma das mais comuns e emprega cookies para gravar um **identificador de sessão** (*session ID*) que é relacionado (na maioria das vezes) ao **identificador do usuário** (*user ID*). E, uma vez que o usuário faz login, o *sesion ID* é repassado a cada solicitação.


#### Autenticação por token - JWT (Json Web Token)

Ao invés de cookies, ele emprega tokens web em formato JSON. Esse token é adicionado ao cabeçalho HTTP de todas as solicitações do navegador.


#### Autenticação por OAuth

Permite que usuários façam login no sistema com apenas um clique, utilizando as credenciais de redes sociais, como Facebook, Twitter, Google, etc.


#### Autenticação com PassportJS

É um módulo instalável via `npm` que pode ser adicionado aos middlewares ExpressJS, empregando sessões para agregar a funcionalidade de login e mais de 300 estratégias de autenticação.


##### MemoryStore

Os dados da sessão são gravados na memória do servidor. Isso não é bom e não é recomendado!


##### MongoStore

É uma solução melhor. As sessões podem ser escalonadas à media que escalonamos nosso database. Ou seja, salvamos no database.


#### Estratégias e rotas de autenticação

No ecommerce serão utilizadas 4 estratégias:

1. Local, com email e senha;  
2. Facebook;  
3. Twitter;  
4. Google.


`index.js` > define as rotas  
`passport.js` > define as estratégias


`Passport.use` define o método de validação da combinação email/senha.  
`Passport.authenticate` é usado para associar a estratégia de autenticação a uma rota.


### Capítulo 7 - Checkout


#### `ngCart`

Trabalhar com open source possui uma enorme vantagem para desenvolver soluções e, em muitas vezes não é preciso deservolvermos algo do zero. Primeiro verificamos se já existe um módulo que atende o que precisamos.  

E, como é de se esperar no mundo MEAN, temos o módulo **ngCart**, que é um módulo responsável pelo carrinho de compras. Ele oferece algumas diretivas e serviços muito úteis para levantarmos nosso carrinho de compras.


#### Braintree

> Uma maneira simples, robusto para aceitar pagamentos ou permitir a compra de quase qualquer lugar - em seu aplicativo móvel ou online. No topo da amplitude de clientes PayPal e Venmo, nossas integrações fáceis dará acesso a vários métodos de pagamento, preços simples, proteção de alto nível e suporte de classe mundial.


O MEANSHOP vai receber pagamentos via PayPal, cartões de débito/crédito.  

**Braintree não funciona no Brasil, yet!**


A diretiva `braintree-dropin` serve para renderizar os formulários default de cartões de débito/crédito e o botão do PayPal. Esse formulário já está preparado para fazer as validações e checagens de segurança.


### Capítulo 8 - Busca e navegação

`ng-focus` vai redirecionar a pagina assim que o usuario clicar no campo de busca, ele vai pra pagina de produtos.  

**URL slugs** são URLs legíveis por humanos e por mecanismos de busca. Ao invés de ter uma URL como `/categories/8877aa6asds55` é melhor oferecer uma URL amigável, como `/categories/books`.


### Capítulo 9 - Colocando em produção

Independente do tipo de aplicação, a fase de *deployment* é decisiva para o seu sucesso. Aqui determinamos o número de usuários simultâneos, o tempo de carga da aplicação e muitos outros detalhes. E **esses números não devem ser negligenciados!**


#### Ambientes de aplicação

Normalmente uma aplicação passa seu ciclo de vida por 4 ambientes distintos:


1. Desenvolvimento;  
2. Testes;  
3. Produção: onde o código é considerado estável e pronto para usuários finais;  
4. Aceitação (triagem): idêntico ao de produção, mas onde os devs interagem com novos recuros. O database é um snapshot (cópia) do database real em produção.


Cada embiente de aplicação possui um database próprio e independente.


#### Otimizações para ambientes de produção

* Minificação;  
* Concatenação;  
* Uso de CDNs.


#### Escalonamento de aplicações web

##### Vertical  

O mais simples de todos. Requer a atualização de hardware, pois conta com apenas 1 servidor. É a maneira mais fácil de fazer *deploy* de uma aplicação, colocando tudo em apenas um servidor.


##### Horizontal  

O mais complicado, porém, o melhor a longo prazo. Pois ele envolve distribuir a carga por vários servidores. Dividir tarefas entre vários servidores provou ser a maneira mais econômica de escalonar aplicações.  

Empresas como Google, Facebook, Amazon usam inúmeros *clusters* de máquinas para servir milhões de usuários simultâneos.


#### Ambiente de computação na nuvem

* Heroku e Openshift: abstraem toda a complexidade de configurar os servidores e permitem que eles possam ser escalonados. Cabendo a nós nos precoupar apenas com a aplicação.  
* VPS - Virtual Private Servers: permite a configuração manual do servidor.


#### Platform as a Service (PaaS)

É um tipo de computação na nuvem muito conveniente. Pois nos permite implantar rapidamente uma aplicação, sem perder tempo configurando o servidor.


### Capítulo 10 - Adicionando recursos personalizados com alta qualidade
