$(window).load(function(){
  $('#menuToggle').on('click', function(e) {
    e.preventDefault();
  });

  $('.js-menu').on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(href).offset().top - 80 }, 600);
    $('.js-menu').removeClass('active');
    $(this).addClass('active');
    $('#nav-collapse').removeClass('in');
  });

  //#pastEvents .block-item-post p
});