
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
  