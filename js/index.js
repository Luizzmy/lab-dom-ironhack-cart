

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseInt(product.querySelector('.price span').innerHTML);
  // const priceValue = price.getAttribute('span');
  const quantity = parseInt(product.querySelector('.quantity input').value);
  // let subtotal = document.getElementsByClassName('subtotal');
  let subtotal = price*quantity;
  // subtotal.innerHTML = `${(price)*(quantity)}`;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
  // console.log(quantity)
  // // console.log (priceValue)
  // console.log (subtotal)
  // console.log(price)
}
function calculateAll() {
   const products = document.getElementsByClassName('product');
   let total = 0;
    for (let i = 0; i < products.length; i++) {
     singleprod=products[i]
      updateSubtotal(singleprod)
      total += parseFloat(singleprod.querySelector('.subtotal span').innerHTML);
    }
  document.querySelector('#total-value span').innerHTML=`${total}`
  //  const singleProduct = document.querySelector('.product');
  // console.log(singleProduct)
  
  //  updateSubtotal(singleProduct);


   //updateSubtotal(products);
  // end of test
  // ITERATION 2
  //... your code goes here
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
