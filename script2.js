// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Example product data (Replace this with your API call if you have one)
    const products = [
        {
            id: 1,
            name: "Joggers",
            description: "Comfortable and stylish joggers",
            price: 200.00,
            image: "./images/Spring And Fall New Korean Students Tide Shoes Casual Shoes Sports Shoes Running Shoes - Black Orange _ Size42.jpeg"
        },
        {
            id: 2,
            name: "Running Shoes",
            description: "Durable running shoes for everyday use",
            price: 150.00,
            image: "./images/download (1).jpeg"
        }
        // Add more products as needed
    ];

    // Function to display products
    function displayProducts(products) {
        const productContainer = document.querySelector('.product_container');
        products.forEach(product => {
            const productCard = `
                <div class="product_card">
                    <img width="200px" height="200px" src="${product.image}" alt="${product.name}" />
                    <h3 class="text-success fs-5 mt-2">${product.name}</h3>
                    <p class="text-start product_cardie_text">${product.description}</p>
                    <strong class="product_cardie_text one">N${product.price.toFixed(2)}</strong>
                    <button class="c-cart button_now" type="button" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            productContainer.insertAdjacentHTML('beforeend', productCard);
        });
    }

    // Display products on page load
    displayProducts(products);

    // Add to cart functionality
    const cart = [];

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCartCount();
    }

    function updateCartCount() {
        const cartCount = document.querySelector('.cart-icon span');
        cartCount.textContent = cart.length;
    }

    // Event listener for Add to Cart buttons
    document.querySelector('.product_container').addEventListener('click', (event) => {
        if (event.target.classList.contains('button_now')) {
            const productId = parseInt(event.target.dataset.id);
            addToCart(productId);
        }
    });
});
