const productCard = document.querySelector(".product_container")
let newArray = []

console.log("happy")
////Fetching product api
function getProduct() {
    fetch("https://fakestoreapi.com/products/")
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
             <h3 class="text-success fs-5 mt-2">${eachProduct.title.slice(0, 10)}</h3>
             <strong class="product_cardie_text one">$${eachProduct.price}</strong>
             <button class="c-cart button_now" type="button">View product</button>
          </div>
        `
    })
    productCard.innerHTML = displayProduct
    // viewPost()
}

















//categorize product in my javascript
const categories = {};

newArray.forEach(eachProduct =>{
    if (!category[eachProduct.category]){
        category[eachProduct.category] = [];
    }
    categories[eachProduct.category].push(eachProduct)
});

//Rendering categories
for (const category in category) {
    const categorysection = document.createElement("section")
    categorysection.innerHTML = `<h2>${category}</h2><div class="product_categories"></div>`;

    const productList = categorysection.querySelector("product_categories");
    category[category].forEach(eachProduct=>{
        const productElement = createProductElement(eachProduct);
        productList.appendChild(productElement);

    });

    categoriesContainer.appendChild(categorysection)
}



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

function viewProduct() {
    // let v
}