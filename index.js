const body = document.querySelector("body");

// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 5,
    img: "img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 6,
    img: "img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
];

//header
let gg = data

const header = document.createElement("header")
document.body.appendChild(header)

const h1 = document.createElement("h1")
h1.innerText = "e-commerce de vestuário"
header.appendChild(h1)

const span = document.createElement("span")
header.appendChild(span)

const button1 = document.createElement("button")
button1.className = "opcao"
span.appendChild(button1)
button1.innerText = "Todos"

const button2 = document.createElement("button")
button2.className = "opcao"
span.appendChild(button2)
button2.innerText = "Acessórios"

const button3 = document.createElement("button")
button3.className = "opcao"
span.appendChild(button3)
button3.innerText = "Calçados"

const button4 = document.createElement("button")
button4.className = "opcao"
span.appendChild(button4)
button4.innerText = "Camisetas"

const mainVisao = document.createElement("main");
mainVisao.className = "visao";
document.body.appendChild(mainVisao)

//Vitrine
const mainVitrine = document.createElement("main");
mainVitrine.className = "Vitrine";
mainVisao.appendChild(mainVitrine)

//pesquisa
const divP = document.createElement("div")
divP.className = "pesquisa"
mainVisao.appendChild(divP);

const divB = document.createElement("div")
divB.className = "barra"
divP.appendChild(divB);

const input = document.createElement("input")
input.className = "search";     
input.type = "text";
input.placeholder = "Pesquise por um item"; 
divB.appendChild(input);

const buttonP = document.createElement("button");
buttonP.className = "serc-bt";
buttonP.type = "submit";
buttonP.innerText = "Pesquise"
divB.appendChild(buttonP)

const divCarrinho = document.createElement("div");
divCarrinho.className = "color"
divP.appendChild(divCarrinho);

const hc = document.createElement("h2")
hc.className = "compras"
hc.innerText = "Carrinho de compras"
divCarrinho.appendChild(hc)

const divR = document.createElement("div")
divR.className = "container"
divP.appendChild(divR);

const div_valor = document.createElement("div")
div_valor.className = "valor"
divP.appendChild(div_valor);

const span2 = document.createElement("span");
div_valor.appendChild(span2)
span2.className = "flex";

const span3 = document.createElement("span");
div_valor.appendChild(span3)
span3.className = "flex1";

const p11 = document.createElement("p");
p11.className = "p11";
p11.innerText = "Quantidade: "

const p12 = document.createElement("p");
p12.className = "p12";
p12.innerText = "0"

const p13 = document.createElement("p");
p13.className = "p13";
p13.innerText = "Total: "

const p14 = document.createElement("p");
p14.className = "p14";
p14.innerText = "R$"

span2.appendChild(p11);
span2.appendChild(p12);

span3.appendChild(p13);
span3.appendChild(p14);

//ul

const ul = document.createElement("ul")
mainVitrine.appendChild(ul)


console.log(gg)

//quantidade e valor
let quantidade = 0;
let valor = 0;
//Construção da lista
function listaDeItens(array){
    
let image =  array.img    
let tagg = array.tag
let  title = array.nameItem
let imageDescription = array.description
let price = array.value
let add =  array.addCart

const li = document.createElement("li")

const img = document.createElement("img")
img.className = 'img'
li.appendChild(img)

const p1 = document.createElement("p")
p1.className = "tag"
li.appendChild(p1)

const h2 = document.createElement("h2")
h2.className = "title"
li.appendChild(h2)

const divp2 = document.createElement("div");
divp2.className = "divp2"
li.appendChild(divp2);

const p2 = document.createElement("p")
p2.className = "category"
divp2.appendChild(p2)

const strong = document.createElement("strong")
strong.className = "price"
li.appendChild(strong)

const botao = document.createElement("button")
botao.className = "add"
li.appendChild(botao)

//add

botao.addEventListener('click',
function addCart(){

  const divAdd = document.createElement("div");
  divAdd.className = "adddiv";

  const imagem = document.createElement("img");
  imagem.src = image;
  divAdd.appendChild(imagem);

  const paragrafo = document.createElement("p");
  paragrafo.innerText = title;
  paragrafo.className = "addp";

  const preco = document.createElement("strong") ;
  preco.className = "strongadd"
  preco.innerText = `R$${price}`;

  const span4 = document.createElement("span");
  divAdd.appendChild(span4);
  span4.className = "span4"
  span4.appendChild(paragrafo);
  span4.appendChild(preco)

  const reset = document.createElement("button")
  reset.type = "reset"
  reset.className = "reset"
  reset.innerText = "Excluir item"
  divAdd.appendChild(reset)

 
    divR.appendChild(divAdd);

    //Caixa-valores

quantidade += 1
valor += price

p12.innerText = quantidade
p14.innerText = `R$${valor},00`

//Botão excluir
  reset.addEventListener('click', 
  function excluir(){
   divAdd.innerText = ""
   divR.appendChild(divAdd)

   quantidade -= 1;
   valor -= price;

   p12.innerText = quantidade
   p14.innerText = `R$${valor}`
  });
}
);

//Recuperando os valores
img.src = image; 
p1.innerText = tagg;
h2.innerText = title;
p2.innerText = imageDescription;
strong.innerText = `R$${price},00`;
botao.innerText= add;

return li
}

const saida = listaDeItens(gg)

function contruir(array){
   

  for(let i=0;i<array.length;i++){

  let busca = listaDeItens(array[i])
  ul.appendChild(busca)
  }
}
contruir(gg)

