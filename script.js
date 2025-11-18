// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCatBtn = document.getElementById("clear-cart-btn");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

let cartProducts = []

productList.addEventListener("click", (e) => {
	if(e.target.matches("button")){
		cartList.innerHTML = ""
		const cartProduct = products.find(product => product.id === Number(e.target.getAttribute("data-id")));
		
		cartProducts.push(cartProduct)
		sessionStorage.setItem("cart", JSON.stringify(cartProducts))
	
		renderCart()
	}
})


// Render cart list
function renderCart() {
	// console.log(JSON.parse(sessionStorage.getItem("addedToCart")))
	JSON.parse(sessionStorage.getItem("cart")).forEach(product => {
		const li = document.createElement("li");
		li.innerHTML = `${product.name} - $${product.price}`;
		cartList.appendChild(li)
	})
}

clearCatBtn.addEventListener('click', clearCart)
// Add item to cart
function addToCart(productId) {}

// Remove item from cart
function removeFromCart(productId) {}

// Clear cart
function clearCart() {
	sessionStorage.clear();
	cartProducts = [];
	cartList.innerHTML = ""
}

// Initial render
renderProducts();
// renderCart();
