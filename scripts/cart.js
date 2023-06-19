const cartItems = JSON.parse(localStorage.getItem('cart'));
renderCart();
function renderCart() {
    let cartHTML = '';
    cartItems.forEach((cartItem, index) => {
      cartHTML += `
        <div class="cart-item">
            <img src="${cartItem.image}" alt="cart-item-image">
            <div class="product-info">
                <div class="name-price">
                    <span class="product-name">${cartItem.productName}</span>
                    <span class="product-price">₹${cartItem.price}</span>
                </div>
                <div class="quantity">
                    <label id="quantity-label" for="quantity">quantity:</label>
                    <input class="update" type="number" value="${cartItem.quantity}" disabled>
                    <button class="update-btn">Update</button>
                    <button onClick="deleteCartItem(${index})" class="delete-btn">Delete</button>
                </div>
            </div>
        </div>`;
    });
    document.querySelector('.js-cart-items').innerHTML = cartHTML;
  
    // Attach event listeners to update buttons
    const updateButtons = document.querySelectorAll('.update-btn');
    updateButtons.forEach((updateBtn, index) => {
    updateBtn.addEventListener('click', () => {
    const quantityInput = updateBtn.parentNode.querySelector('.update');
    if (updateBtn.innerHTML === 'Update') 
    {
        quantityInput.disabled = false;
        updateBtn.innerHTML = 'Save';
        quantityInput.classList.add('update-clicked');
    } 
    else 
    {
        quantityInput.disabled = true;
        updateBtn.innerHTML = 'Update';
        quantityInput.classList.remove('update-clicked');
        const updatedQuantity = parseInt(quantityInput.value);
        cartItems[index].quantity = updatedQuantity;
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    calculateCost();
  });
});
calculateCost();
}

function deleteCartItem(index){
    cartItems.splice(index, 1);
    renderCart();
    calculateCost();
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

function calculateCost(){
    const itemsCount = document.querySelector('#item-count');
    const itemPrice = document.querySelector('#item-price');
    const tax = document.querySelector('#tax-amount');
    const total = document.querySelector('#total-amount');
    const deliveryCharge = document.querySelector('#delivery-charge');
    let Cost = 0;
    let quantity = 0;
    let totalCost = 0;
    let taxAmount = 0;
    cartItems.forEach((item, index) => {
        const itemQuantity = parseInt(item.quantity);
        const price = parseInt(item.price);
        const itemCost = itemQuantity * price;
        Cost += itemCost;
        quantity += item.quantity;
    });
    taxAmount = Cost * 0.05;
    totalCost = quantity > 0 ? (taxAmount + Cost + 40) : (taxAmount + Cost);

    itemsCount.innerHTML = `items(${quantity})`;
    itemPrice.innerHTML = `₹${Cost}`;
    tax.innerHTML = `₹${Math.floor(taxAmount)}`;
    total.innerHTML = `₹${Math.floor(totalCost)}`;
    deliveryCharge.innerHTML = totalCost !== 0 ? `₹40` : `₹0`;
}
