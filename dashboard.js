window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
  