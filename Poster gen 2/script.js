function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".progress__fill").style.width = `${value}%`;
    progressBar.querySelector(".progress__text").textContent = `${value}%`;
  }
  
  const myProgressBar = document.querySelector(".progress");
  
  /* Example */
  updateProgressBar(myProgressBar, 100);
  
  
  // variables
const shipping = 12;
const vat = 0.2;
var total = 0;


/*
function about(){
  alert("these are the istructions..");
}
*/

function updateOrder(){
  console.log("updating order");

  // get value of selection 
  var size = document.getElementById("posterSize");
  var sizeDescription = size.options[size.selectedIndex].text;
  var sizeCost = size.value;
  document.getElementById("orderSize").innerHTML = sizeDescription;

// poster style
  var style = document.getElementById("posterStyle");
  var styleDescription = style.options[style.selectedIndex].text;
  var styleCost = style.value;
  document.getElementById("orderStyle").innerHTML = styleDescription;

// quantity
var quantity = document.getElementById("posterQuantity");
var quantityValue = quantity.value;
 document.getElementById("orderQuantity").innerHTML = quantityValue;
  // document.getElementById("orderTotal").innerHTML = sizeCost;

  
 // ******************
  // Update order summary
  // *************
  total = calculateTotal(sizeCost,styleCost,quantityValue);
  document.getElementById("orderTotal").innerHTML = total;
  document.getElementById("shippingCost").innerHTML = shipping;
}

function calculateTotal(size,style,qty){
  var orderTotal  = size * style * qty + shipping +vat;
  return orderTotal;
}

document.getElementById("btnOrder").addEventListener("click", updateOrder);
