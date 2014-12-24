$(window).load(function(){
  //#pastEvents .block-item-post p
  $('.js-menu').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $(this.href).offset().top - 80 }, 600);
    $('.js-menu').removeClass('active');
    $(this).addClass('active');
    $('#nav-collapse')
      .addClass('close-menu')
      .removeClass('in');
  });
  
  $('#menuToggle').on('click', function(e) {
    $('#nav-collapse').removeClass('close-menu');
    e.preventDefault();
  });
});