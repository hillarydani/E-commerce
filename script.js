const productCard = document.querySelector(".product_container");
const cartCount = document.getElementById("cart-count");
let newArray = [];
let cart = [];

// Fetching product API
function getProduct() {
    fetch("https://fakestoreapi.com/products?limit=8")
        .then(response => response.json())
        .then((data) => {
            newArray = data;
            addProduct();
        });
}

getProduct();

// // Rendering Products
// function addProduct() {
//     let displayProduct = "";
//     newArray.forEach((eachProduct) => {
//         displayProduct += `
//             <div class="product_card">
//                 <img width="200px" height="200px" src="${eachProduct.image}" id="product_cardie_image" />
//                 <h3 class="fs-5 mt-2 po-text">${eachProduct.title.slice(0, 10)}</h3>
//                 <strong class="product_cardie_text one">$${eachProduct.price}</strong>
//                 <button class="c-cart button_now" type="button" onclick="addToCart(${eachProduct.id})">Add to cart</button>
//             </div>
//         `;
//     });
//     productCard.innerHTML = displayProduct;
// }


//add product
// function addProduct() {
//     let displayProduct = "";

//     newArray.forEach((eachProduct) => {
//         displayProduct += `
//             <div class="product_card" data-id="${eachProduct.id}">
//              <img width="200px" height="200px" src=${eachProduct.image} id="product_cardie_image" />
//              <h3 class="fs-5 mt-2 po-text">${eachProduct.title.slice(0, 10)}</h3>
//              <strong class="product_cardie_text one">$${eachProduct.price}</strong>
//              <button class="c-cart button_now" type="button">Add to cart</button>
//           </div>
//         `;
//     });
//     productCard.innerHTML = displayProduct;

//     // Add event listener to each product card
//     document.querySelectorAll('.product_card').forEach(card => {
//         card.addEventListener('click', (e) => {
//             if (!e.target.classList.contains('c-cart')) {
//                 const productId = card.getAttribute('data-id');
//                 localStorage.setItem('productId', productId);
//                 window.location.href = "./individual.html";
//             }
//         });
//     });
// }



function addProduct() {
    let displayProduct = "";

    newArray.forEach((eachProduct) => {
        displayProduct += `
            <div class="product_card" data-id="${eachProduct.id}">
                <img width="200px" height="200px" src="${eachProduct.image}" id="product_cardie_image" />
                <h3 class="fs-5 mt-2 po-text">${eachProduct.title.slice(0, 10)}</h3>
                <strong class="product_cardie_text one">$${eachProduct.price}</strong>
                <button class="c-cart button_now" type="button">Add to cart</button>
            </div>
        `;
    });
    productCard.innerHTML = displayProduct;

    // Add event listener to each "Add to Cart" button
    document.querySelectorAll('.c-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the card click event
            const productId = button.closest('.product_card').getAttribute('data-id');
            addToCart(Number(productId));
        });
    });

    // Add event listener to each product card for redirection
    document.querySelectorAll('.product_card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('c-cart')) {
                const productId = card.getAttribute('data-id');
                localStorage.setItem('productId', productId);
                window.location.href = "./individual.html";
            }
        });
    });
}




  
   ////Fetching category product api
   function getCategoryProduct() {
    fetch("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then((data) => {
            newArray = data;
            addCategoryProduct();
            console.log("After",newArray)
        })
}

getCategoryProduct();


////RENDERING CATEGORIES
function addCategoryProduct() {
    // let productLayout = document.getElementById('post-layout')
    let displayProduct = "";


    const productCategory = document.querySelector(".product_categories")
    newArray.forEach((eachProduct, index) => {
        displayProduct += `
            <div class="product_card">
             <h3 class= "fs-5 mt-2 po-text">${eachProduct}</h3>
             <button class="c-cart button_now" type="button">Veiw More</button>
          </div>
        `
    })
    productCategory.innerHTML = displayProduct
}


// Add to Cart Function
function addToCart(productId) {
    const product = newArray.find((item) => item.id === productId);
    cart.push(product);
    updateCartCount();
}

// Update Cart Count in Navigation Bar
function updateCartCount() {
    cartCount.textContent = cart.length;
}
