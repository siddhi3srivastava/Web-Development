const products = [
    { id: 1, name: "Apples", price: 1.5 },
    { id: 2, name: "Bananas", price: 0.99 },
    { id: 3, name: "Milk", price: 2.49 },
    { id: 4, name: "Bread", price: 1.99 }
  ];
  
  const cart = [];
  
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");
  
  function renderProducts() {
    products.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product-item");
      div.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  } 
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    cartItems.innerHTML = "";
    let sum = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(li);
      sum += item.price;
    });
    total.textContent = sum.toFixed(2);
  }
  
  renderProducts();
  
