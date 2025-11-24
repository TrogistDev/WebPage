const a = document.querySelector('.backButton')
const b = document.querySelector('html')
const darkMode = document.querySelector('.dark-mode')
const html = document.documentElement
const adProduct = document.querySelector('.addProduct')
const listProduct = document.querySelector('.prod')
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

renderProducts()


function renderProducts() {
  listProduct.innerHTML = "";
  produtos.forEach(p => {
    listProduct.innerHTML += `
    <div class="products">
      <img src="${p.img}" class="product" />
      <div class="info">
        <div class="product-content">
          <h3>${p.nome}</h3>
          <p>${p.categoria}</p>
        </div>
        <h2 class="price">${p.preco}</h2>
      </div>
    </div>`;
  });
}


darkMode.addEventListener('click', function(){
  html.classList.toggle('dark')
})

adProduct.addEventListener('click', function(){

  const novoProduto = {
    nome: "Attack on Titan's book",
    categoria: "Best one",
    preco: "$10",
    img: "imagens/produto.jpeg"
  };

  produtos.push(novoProduto);
  localStorage.setItem("produtos", JSON.stringify(produtos));
  renderProducts()
})