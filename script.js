const productCard = document.querySelector (".product_container")
let newArray = []

console.log("happy")
////Fetching product api
function getProduct() {
    fetch("https://fakestoreapi.com/products?limit=8")
        .then(response => response.json())
        .then((data) => {
            newArray = data;
            addProduct();
            
        })
}

getProduct();


////RENDERING PRODUCT
function addProduct() {
    // let productLayout = document.getElementById('post-layout')
    let displayProduct = "";

    console.log("After",newArray)

    newArray.forEach((eachProduct, index) => {
        displayProduct += `
            <div class="product_card">
             <img  width="200px" height="200px" src=${eachProduct.image} id="product_cardie_image" />
             <h3 class= "fs-5 mt-2 po-text">${eachProduct.title.slice(0, 10)}</h3>
             <strong class="product_cardie_text one">$${eachProduct.price}</strong>
             <button class="c-cart button_now" type="button">Add to cart</button>
          </div>
        `
    })
    productCard.innerHTML = displayProduct
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



// Add to cart Function
function addToCart(product){
    // alert(JSON.stringify(product))
    addProductToCart(product)
    console.log(getCart())

    // quantity=getCart().length
    // input.value=quantity
    // input.style.backgroundColor='rgb(43, 42, 42)'


}

// function enterIndividualPage(e) {
//     const image = e.target.closest("img");
//     if (!image) return;

//     const productCard = image.closest(".product_card");
//     const productIndex = Array.from(productCard.parentNode.children).indexOf(productCard);

//     const selectedProduct = newArray[productIndex];
//     localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

//     window.location.href = "./individual.html";
// }

// productCard.addEventListener("click", enterIndividualPage);




// product-details.js

// document.addEventListener('DOMContentLoaded', () => {
//     const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

//     if (selectedProduct) {
//         document.querySelector('.product-name').textContent = selectedProduct.name;
//         document.querySelector('.product-description').textContent = selectedProduct.description;
//         document.querySelector('.product-details').textContent = selectedProduct.details;
//         document.querySelector('.product-price').textContent = `N${selectedProduct.price.toFixed(2)}`;
//         document.querySelector('.product-image').src = selectedProduct.image;
//     }
// });



function viewProduct(product){

            localStorage.setItem('productId', product.id)
            window.location.href="./individual.html"

}



   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    // viewPost()
// }



//categorize product in my javascript
// const categories = {};

// newArray.forEach(eachProduct =>{
//     if (!category[eachProduct.category]){
//         category[eachProduct.category] = [];
//     }
//     categories[eachProduct.category].push(eachProduct)
// });

//Rendering categories
// for (const category in category) {
//     const categorysection = document.createElement("section")
//     categorysection.innerHTML = `<h2>${category}</h2><div class="product_categories"></div>`;

//     const productList = categorysection.querySelector("product_categories");
//     category[category].forEach(eachProduct=>{
//         const productElement = createProductElement(eachProduct);
//         productList.appendChild(productElement);

//     });

//     categoriesContainer.appendChild(categorysection)
// }



// function viewPost() {
//     let viewPost = document.querySelectorAll(".viewPost")

//     viewPost.forEach((e, index) => {
//         e.addEventListener("click", () => {
//             localStorage.setItem("blogId", index + 1)
            
//             window.location.href = "post.html"
//         })
//     })
// }





// getPost()

// function viewProduct() {
    // let v
// }