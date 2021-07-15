// JS referente ao Toggle Menu Mobile
const btnMobile = document.getElementById("btn-mobile");
const btnMobileClose = document.getElementById("btn-close");

function toggleMenu() {
  const nav = document.getElementById("menu");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobileClose.addEventListener("click", toggleMenu);

// JS referente ao Loading Category
const getList = async () => {
  const categories = await baseFetch("list");
  const menu = document.getElementById("nav-category");

  for (let i = 0; i < categories.items.length; i++) {
    let menuItem = document.createElement("li");
    let linkItem = document.createElement("a");

    let iNumber = i + 1;
    linkItem.setAttribute("href", "catalog.html?categories=" + iNumber);

    linkItem.textContent = categories.items[i].name.toUpperCase();
    menuItem.appendChild(linkItem);
    menu.appendChild(menuItem);
  }
};

getList();

// JS referente ao Loading Products
const getProducts = async () => {
  const urlString = window.location.href;
  const url = new URL(urlString);
  const paramId = url.searchParams.get("categories");
  const convertId = String(paramId);

  const allProducts = await baseFetch(convertId);

  for (let i = 0; i < allProducts.items.length; i++) {
    const layout = `
    <div>
      <img src="../${allProducts.items[i].image}" alt="Tênis Adidas Preto" />
      <h3 class="name-product">${allProducts.items[i].name}</h3>
      <h3 class="price-product">${allProducts.items[i].price.toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL" }
      )}</h3>
      <button>LOREM IPSUM</button>
    </div>
  `;
    const containerProducts = document.getElementById("products");
    containerProducts.innerHTML += layout;
  }
};

getProducts();
