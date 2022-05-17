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

const hc = document.createElement("h2")
hc.className = "compras"
hc.innerText = "Carrinho de compras"
divB.appendChild(hc)

const divR = document.createElement("div")
divR.className = "container"
divP.appendChild(divR);

//Construção da lista
function listaDeItens(array){
    
let image =  array.img    
let tag = array.tag
let  title = array.nameItem
let imageDescription = array.description
let price = array.value
let add =  array.addCart

const li = document.createElement("li")

const img = document.createElement("img")
li.appendChild(img)

const p1 = document.createElement("p")
p1.className = "tag"
li.appendChild(p1)

const h2 = document.createElement("h2")
h2.className = "title"
li.appendChild(h2)

const p2 = document.createElement("p")
p2.className = "category"
li.appendChild(p2)

const strong = document.createElement("strong")
strong.className = "price"
li.appendChild(strong)

const botao = document.createElement("button")
botao.className = "add"
li.appendChild(botao)


//Recuperando os valores
img.src = image; 
p1.innerText = tag;
h2.innerText = title;
p2.innerText = imageDescription;
strong.innerText = `R$${price}`;
botao.innerText= add;

return li
}

const saida = listaDeItens(data)

const ul = document.createElement("ul")
mainVitrine.appendChild(ul)

//Chamada da lista
function contruir(array){

  for(let i=0;i<array.length;i++){
  let busca = listaDeItens(array[i])
  ul.appendChild(busca)
  }
}
contruir(data)


botao.addEventListener('click', addCart);
function addCart(){
  divR.innerText = li
}