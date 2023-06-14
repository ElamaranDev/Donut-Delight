
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

// products array object

const menuItems = [
// donut combos
{
  name: 'Classic Box of 6',
  price: 450,
  image: 'images/menuitems/c1/1.jpg',
  category: 'donut combos'
},
{
  name: 'ATF Box of 3',
  price: 330,
  image: 'images/menuitems/c1/2.jpg',
  category: 'donut combos'
},
{
  name: 'ATF Box of 6',
  price: 550,
  image: 'images/menuitems/c1/3.jpg',
  category: 'donut combos'
},
{
  name: 'ATF Box of 12',
  price: 999,
  image: 'images/menuitems/c1/4.jpg',
  category: 'donut combos'
},
{
  name: 'Delights Best Box of 6',
  price: 650,
  image: 'images/menuitems/c1/5.jpg',
  category: 'donut combos'
},
{
  name: 'Delights Best Box of 3',
  price: 390,
  image: 'images/menuitems/c1/5.jpg',
  category: 'donut combos'
},
// sandwiches and bakery
{
  name: 'Blueberry Muffin',
  price: 150,
  image: 'images/menuitems/c2/1.jpg',
  category: 'sandwiches and bakery'
},
{
  name: 'Chocolate Walnut Browinee',
  price: 160,
  image: 'images/menuitems/c2/2.jpg',
  category: 'sandwiches and bakery'
},
{
  name: 'Cheesy Toasty',
  price: 149,
  image: 'images/menuitems/c2/3.jpg',
  category: 'sandwiches and bakery'
},
{
  name: 'Creamy Chicken Vol-Au-Vent',
  price: 159,
  image: 'images/menuitems/c2/4.jpg',
  category: 'sandwiches and bakery'
},
{
  name: 'Chicken Baguette',
  price: 190,
  image: 'images/menuitems/c2/5.jpg',
  category: 'sandwiches and bakery'
},
{
  name: 'Smoked Chicken Pie',
  price: 190,
  image: 'images/menuitems/c2/6.jpg',
  category: 'sandwiches and bakery'
},
{
  name: 'Oatmeal Cookie',
  price: 80,
  image: 'images/menuitems/c2/7.jpg',
  category: 'sandwiches and bakery'
},
{
  name: 'Paneer Tikka Sandwich',
  price: 190,
  image: 'images/menuitems/c2/8.jpg',
  category: 'sandwiches and bakery'
},
// donuts
{
  name: 'Choco Mandarin Donut',
  price: 110,
  image: 'images/menuitems/c3/1.jpg',
  category: 'donuts'
},
{
  name: 'Black Forest Donut',
  price: 110,
  image: 'images/menuitems/c3/2.jpg',
  category: 'donuts'
}, {
  name: 'Red Crunch Donut',
  price: 130,
  image: 'images/menuitems/c3/3.jpg',
  category: 'donuts'
},
{
  name: 'Butterscotch Crumble Donut',
  price: 130,
  image: 'images/menuitems/c3/4.jpg',
  category: 'donuts'
},
{
  name: 'Classic Caramel Donut',
  price: 110,
  image: 'images/menuitems/c3/5.jpg',
  category: 'donuts'
},
{
  name: 'Classic Glazed Donut',
  price: 70,
  image: 'images/menuitems/c3/6.jpg',
  category: 'donuts'
},
{
  name: 'Chocolate Frosted Donut',
  price: 70,
  image: 'images/menuitems/c3/7.jpg',
  category: 'donuts'
},
{
  name: 'Deadly Chocolate Donut',
  price: 90,
  image: 'images/menuitems/c3/8.jpg',
  category: 'donuts'
},
{
  name: 'Alive Chocolate Donut',
  price: 70,
  image: 'images/menuitems/c3/9.jpg',
  category: 'donuts'
},
{
  name: 'Party Eclair',
  price: 80,
  image: 'images/menuitems/c3/10.jpg',
  category: 'donuts'
},
{
  name: 'Chocolate Overdose Donut',
  price: 80,
  image: 'images/menuitems/c3/11.jpg',
  category: 'donuts'
},
{
  name: 'Rainbow Donut',
  price: 100,
  image: 'images/menuitems/c3/12.jpg',
  category: 'donuts'
},
{
  name: 'Cookie Wheel Donut',
  price: 80,
  image: 'images/menuitems/c3/13.jpg',
  category: 'donuts'
},
{
  name: 'Choco Pop Donut',
  price: 80,
  image: 'images/menuitems/c3/14.jpg',
  category: 'donuts'
},
{
  name: 'Cinnamon Donut',
  price: 69,
  image: 'images/menuitems/c3/15.jpg',
  category: 'donuts'
},
// Hot beverages
{
  name: 'Filter Coffee',
  price: 120,
  image: 'images/menuitems/c4/1.jpg',
  category: 'hot beverages'
},
{
  name: 'Cappuccino',
  price: 150,
  image: 'images/menuitems/c4/2.jpg',
  category: 'hot beverages'
},
{
  name: 'Classic Hot Chocolate',
  price: 180,
  image: 'images/menuitems/c4/3.jpg',
  category: 'hot beverages'
},
{
  name: 'Americano',
  price: 150,
  image: 'images/menuitems/c4/4.jpg',
  category: 'hot beverages'
},
{
  name: 'Cafe Latte',
  price: 150,
  image: 'images/menuitems/c4/5.jpg',
  category: 'hot beverages'
},
{
  name: 'Flat White',
  price: 180,
  image: 'images/menuitems/c4/6.jpg',
  category: 'hot beverages'
},
{
  name: 'Cafe Mocha',
  price: 159,
  image: 'images/menuitems/c4/7.jpg',
  category: 'hot beverages'
},
{
  name: 'Caramel Macchiato',
  price: 190,
  image: 'images/menuitems/c4/8.jpg',
  category: 'hot beverages'
},
// cold beverages
{
name: 'Iced Cappuccino',
price: 190,
image: 'images/menuitems/c5/1.jpg',
category: 'cold beverages'
},
{
name: 'Iced Cafe Latte',
price: 190,
image: 'images/menuitems/c5/2.jpg',
category: 'cold beverages'
},
{
name: 'Classic Lemonade',
price: 150,
image: 'images/menuitems/c5/3.jpg',
category: 'cold beverages'
},
{
name: 'Virgin Mojito',
price: 149,
image: 'images/menuitems/c5/4.jpg',
category: 'cold beverages'
},
{
name: 'Coffee Frappe',
price: 190,
image: 'images/menuitems/c5/5.jpg',
category: 'cold beverages'
},
{
name: 'Mocha Chip Frappe',
price: 190,
image: 'images/menuitems/c5/6.jpg',
category: 'cold beverages'
},
{
name: 'Hazelnut Frappe',
price: 250,
image: 'images/menuitems/c5/7.jpg',
category: 'cold beverages'
},
{
name: 'Caramel Frappe',
price: 209,
image: 'images/menuitems/c5/8.jpg',
category: 'cold beverages'
}]

// end of items array 

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


