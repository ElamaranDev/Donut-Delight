
document.addEventListener("DOMContentLoaded", function() {
  var menuItems = document.querySelectorAll(".menu-category");
  var categoryHeader = document.querySelectorAll(".category-header");

  var scrollUpOffset = 100;

  menuItems.forEach(function(menuItem, index) {

    menuItem.addEventListener("click", function() {

      var target = this.getAttribute("data-target");
      var targetHeader = document.getElementById(target);
      var targetOffset = targetHeader.offsetTop - scrollUpOffset;
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth"
      });
    });
  });

  window.addEventListener("scroll", function() {
    var currentPosition = window.scrollY;

    categoryHeader.forEach(function(header, index) {
      
      var headerOffset = header.offsetTop - 100;

      if (currentPosition >= headerOffset - scrollUpOffset) {
        menuItems.forEach(function(menuItem) {
          menuItem.classList.remove("active");
        });

        menuItems[index].classList.add("active");
      }
    });
  });
});

// looping through the items array to display the items in menu page

// adding category 1 elements in menu page

function addToCategory1(){
  let itemsHTML = '';
  menuItems.forEach((item, index) => {
   if(item.category === "donut combos"){
      itemsHTML += `
                  <div data-category=${item.category} class="category-element">
                      <img id="donut-combo-img-1" class="donut-image" src="${item.image}" alt="">
                      <div class="product-name-price">
                          <span class="product-name">${item.name}</span>
                          <span class="product-price">₹${item.price}</span>
                      </div>
                      <button id="img1-add-btn" class="add-btn">ADD</button>
                  </div>`;
   }
  });
  document.querySelector('.js-donut-combos').innerHTML = itemsHTML;
}

// adding category 2 elements in menu page

function addToCategory2(){
  let itemsHTML = '';
  menuItems.forEach((item, index) => {
   if(item.category === "sandwiches and bakery"){
      itemsHTML += `
                  <div data-category=${item.category} class="category-element">
                      <img id="donut-combo-img-1" class="donut-image" src="${item.image}" alt="">
                      <div class="product-name-price">
                          <span class="product-name">${item.name}</span>
                          <span class="product-price">₹${item.price}</span>
                      </div>
                      <button id="img1-add-btn" class="add-btn">ADD</button>
                  </div>`;
   }
  });
  document.querySelector('.js-sandwiches-and-bakery').innerHTML = itemsHTML;
}

// adding category 3 elements in menu page

function addToCategory3(){
  let itemsHTML = '';
  menuItems.forEach((item, index) => {
   if(item.category === "donuts"){
      itemsHTML += `
                  <div data-category=${item.category} class="category-element">
                      <img id="donut-combo-img-1" class="donut-image" src="${item.image}" alt="">
                      <div class="product-name-price">
                          <span class="product-name">${item.name}</span>
                          <span class="product-price">₹${item.price}</span>
                      </div>
                      <button id="img1-add-btn" class="add-btn">ADD</button>
                  </div>`;
   }
  });
  document.querySelector('.js-donuts').innerHTML = itemsHTML;
}

// adding category 4 elements in menu page


function addToCategory4(){
  let itemsHTML = '';
  menuItems.forEach((item, index) => {
   if(item.category === "hot beverages"){
      itemsHTML += `
                  <div data-category=${item.category} class="category-element">
                      <img id="donut-combo-img-1" class="donut-image" src="${item.image}" alt="">
                      <div class="product-name-price">
                          <span class="product-name">${item.name}</span>
                          <span class="product-price">₹${item.price}</span>
                      </div>
                      <button id="img1-add-btn" class="add-btn">ADD</button>
                  </div>`;
   }
  });
  document.querySelector('.js-hot-beverages').innerHTML = itemsHTML;
}

// adding category 5 elements in menu page

function addToCategory5(){
  let itemsHTML = '';
  menuItems.forEach((item, index) => {
   if(item.category === "cold beverages"){
      itemsHTML += `
                  <div data-category=${item.category} class="category-element">
                      <img id="donut-combo-img-1" class="donut-image" src="${item.image}" alt="">
                      <div class="product-name-price">
                          <span data-item-name="item-name" class="product-name">${item.name}</span>
                          <span data-item-price="item-price" class="product-price">₹${item.price}</span>
                      </div>
                      <button id="img1-add-btn" class="add-btn add-to-cart-btn">ADD</button>
                  </div>`;
   }
  });
  document.querySelector('.js-cold-beverages').innerHTML = itemsHTML;
}

addToCategory1();
addToCategory2();
addToCategory3();
addToCategory4();
addToCategory5();

// // Adding event listener to search bar
// const inputItem = document.querySelector('.search-bar');
// const categorySegment = document.querySelector('.category-elements');
// const MenuItemsList = document.querySelectorAll('.category-element');
// const productNames = document.querySelectorAll('.product-name');
// inputItem.addEventListener('input', searchItem);

// // Search items in menu
// function searchItem() {
//   const searchItem = inputItem.value.toLowerCase();
//   productNames.forEach((productName, index) => {
//     const textContent = productName.textContent.toLowerCase();
//     if (textContent.includes(searchItem)) {
//       MenuItemsList[index].style.display = 'block';
//     } else {
//       MenuItemsList[index].style.display = 'none';
//     }
//   });
// }

// Adding event listener to search bar
const inputItem = document.querySelector('.search-bar');
const MenuItemsList = document.querySelectorAll('.category-element');
const productNames = document.querySelectorAll('.product-name');
let categoryCounts = {}; // Object to store category counts

inputItem.addEventListener('input', searchItem);

// Search items in menu
function searchItem() {
  const searchItem = inputItem.value.toLowerCase();
  categoryCounts = {}; // Reset category counts
  productNames.forEach((productName, index) => {
    const textContent = productName.textContent.toLowerCase();
    const category = MenuItemsList[index].getAttribute('data-category');

    if (textContent.includes(searchItem)) {
      MenuItemsList[index].style.display = 'block';

      // Increment category count
      if (categoryCounts.hasOwnProperty(category)) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
    } else {
      MenuItemsList[index].style.display = 'none';
    }
  });
    updateCategoryCount(categoryCounts);
    hideEmptyCategoryDivs();
    console.log(categoryCounts); // Output category counts
}

// update the count of items in the menu

function updateCategoryCount(categoryCounts) {
  const categoryOneCount = document.querySelector('#donut-combos-count');
  const categoryTwoCount = document.querySelector('#sandwiches-and-bakery-count');
  const categoryThreeCount = document.querySelector('#donuts-count');
  const categoryFourCount = document.querySelector('#hot-beverages-count');
  const categoryFiveCount = document.querySelector('#cold-beverages-count');

  if (categoryCounts.hasOwnProperty('donut')) {
    categoryOneCount.innerText = categoryCounts['donut'];
  } else {
    categoryOneCount.innerText = '0';
  }

  if (categoryCounts.hasOwnProperty('sandwiches')) {
    categoryTwoCount.innerText = categoryCounts['sandwiches'];
  } else {
    categoryTwoCount.innerText = '0';
  }

  if (categoryCounts.hasOwnProperty('donuts')) {
    categoryThreeCount.innerText = categoryCounts['donuts'];
  } else {
    categoryThreeCount.innerText = '0';
  }

  if (categoryCounts.hasOwnProperty('hot')) {
    categoryFourCount.innerText = categoryCounts['hot'];
  } else {
    categoryFourCount.innerText = '0';
  }

  if (categoryCounts.hasOwnProperty('cold')) {
    categoryFiveCount.innerText = categoryCounts['cold'];
  } else {
    categoryFiveCount.innerText = '0';
  }
}

function hideEmptyCategoryDivs() {
  const parentDivs = document.querySelectorAll('.category-elements');
  const noItemsMessage = document.querySelector('.no-items');

  let visibleParentDivs = 0;

  parentDivs.forEach(parentDiv => {
    const categoryElements = parentDiv.querySelectorAll('.category-element');
    const visibleCategoryElements = Array.from(categoryElements).filter(element => {
      return element.style.display !== 'none';
    });

    if (visibleCategoryElements.length > 0) {
      visibleParentDivs++;
      parentDiv.parentNode.style.display = 'block';
    } else {
      parentDiv.parentNode.style.display = 'none';
    }
  });

  if (visibleParentDivs === 0) {
    noItemsMessage.style.display = 'block';
  } else {
    noItemsMessage.style.display = 'none';
  }
}


//Adding items to cart
const cartCount = document.querySelector('.cart-count');
let count = 0;
document.querySelectorAll('.add-btn')
 .forEach((button, index) => {
    button.addEventListener('click', () => {
        count += 1;
        button.innerHTML = "ADDED";
        cartCount.innerHTML = count;
    });
});




