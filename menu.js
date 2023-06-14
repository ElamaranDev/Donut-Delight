
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
                  <div class="category-element">
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
                  <div class="category-element">
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
                  <div class="category-element">
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
                  <div class="category-element">
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
                  <div class="category-element">
                      <img id="donut-combo-img-1" class="donut-image" src="${item.image}" alt="">
                      <div class="product-name-price">
                          <span class="product-name">${item.name}</span>
                          <span class="product-price">₹${item.price}</span>
                      </div>
                      <button id="img1-add-btn" class="add-btn">ADD</button>
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

//finished


