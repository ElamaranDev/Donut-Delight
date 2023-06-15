const cartItems = [];
updateCartQuantity();
function updateCartQuantity(){
    let quantity = 0;
    cartItems.forEach( item => {
     quantity += item.quantity;
    });
    console.log(quantity);
}