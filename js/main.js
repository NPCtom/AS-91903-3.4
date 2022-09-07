
// scrolling menu
$('.nav-item a[href^="#"]').click(function(e) {
  e.preventDefault();
  var target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top -0
  },500);
});

// scrolling menu
$('.down-icone a[href^="#"]').click(function(e) {
  e.preventDefault();
  var target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top -0
  },500);
});



// animation

  new WOW().init();

  