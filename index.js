
const productsth = document.querySelector('.product_container')
const productsthAll = document.querySelectorAll('.product_cardie')
        
upDateCartUI()


let newArr = []
function getProductApi() {
    fetch("https://fakestoreapi.com/products").then(function (response) {
        return response.json()
    }).then(function (products) {
      
       
        newArr = products
        // console.log(products)
         addProduct()

    })

}
getProductApi()


let index=0
function addProduct() {

      
    newArr.forEach(function (product,index) {
      let newDiv=document.createElement('div')
      newDiv.setAttribute( 'class', 'd-flex flex-column justify-content-center align-items-center  product_cardie')
      let newButton=document.createElement('button')
      newButton.classList.add('button_now')
      newButton.textContent='Add to Cart'

      newButton.addEventListener('click', (e)=>{
         e.stopPropagation()
        addToCart(product)}
    
    
    )

      newDiv.innerHTML=`
            <img src="${product.image}" alt="${product.category.name}" id="product_cardie_image">
            <h3 class="text-success fs-5 mt-2">${product.title.slice(0,25)}...</h3>
            <strong class="product_cardie_text one">$${product.price}</strong>
      
      `
       newDiv.appendChild(newButton)
       newDiv.addEventListener('click',(e)=> viewProduct(product))
       productsth.appendChild(newDiv)
       



        
        
    })
    

}

//udate  cart UI

// Add to cart Function
function addToCart(product){
    // alert(JSON.stringify(product))
    addProductToCart(product)
    console.log(getCart())

    // quantity=getCart().length
    // input.value=quantity
    // input.style.backgroundColor='rgb(43, 42, 42)'


}

function viewProduct(product){

            localStorage.setItem('productId', product.id)
            window.location.href="./indiv-page.html"

}
