// alert("uiiuui")


function cartInit(){
    localStorage.setItem('cartInfo', [])

}

function getCart(){
  let result= localStorage.getItem('cartInfo')
  if(!result){
        cartInit()
        return []
    
  }

  return  JSON.parse(result)
}

function addProductToCart(product){
      let products= getCart()
      products.push({product, count:1})
      console.log(products, product)
    localStorage.setItem('cartInfo', JSON.stringify(products) )
    upDateCartUI()


}

function removeProduct(productId){
    let products= getCart()
    products=products.filter(cart=>cart.product.id !== productId)
    localStorage.setItem('cartInfo', JSON.stringify(products))
    upDateCartUI()
    getCart()
    window.location.reload();

}

function incrementProductCount(productId){
     let products= getCart()
    products=products.map(cart=>{
        let updatedCart
        if(cart.product.id == productId){
             updatedCart= {...cart, count:cart.count *1 +1 }
            getCart()
            window.location.reload();
            return updatedCart

        }
        else{
            return cart
        }

       
    })
    localStorage.setItem('cartInfo', JSON.stringify(products))
    
}
 

function decrementProductCount(productId){
     let products= getCart()
    products=products.map(cart=>{
        
        if(cart.product.id == productId){
            return {...cart, count:cart.count *1 -1 }

        }
        else{
            return cart
        }

    })
    products=products.filter(cart=> cart.count>0)
    localStorage.setItem('cartInfo', JSON.stringify(products))
    upDateCartUI()
    
}
 
function upDateCartUI(){
    let productCount= getCart().length
    let cartInfo =document.querySelectorAll('.cart-info')
    console.log(cartInfo)
    cartInfo.forEach(e=>{
      e.value=productCount

    })
    
    if(productCount > 0){
        // cartInfo.style.backgroundColor='rgb(43, 42, 42)'
    
    }
    

}