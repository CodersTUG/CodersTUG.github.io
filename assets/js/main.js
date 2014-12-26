window.twttr = (function (d, s, id) {
  var t, js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src= "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  return window.twttr || (t = { _e: [], ready: function (f) { t._e.push(f) } });
}(document, "script", "twitter-wjs"));

$(window).load(function(){
  $('#menuToggle').on('click', function(e) {
    e.preventDefault();
  });

  $('.js-menu').on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(href).offset().top - 115 }, 600);
    $('.js-menu').removeClass('active');
    $(this).addClass('active');
    $('#navigationMenu').removeClass('in');
  });

  var padding = 15;
  var maxHeight;
  var toBeSameHeight = '#pastEvents .block-text';
  $(window)
    .on('resize', function () {
      maxHeight = 10;

      $(toBeSameHeight)
        .height('auto')
        .each(function () {
          var thisEight = $(this).height();
          maxHeight = thisEight > maxHeight ? thisEight : maxHeight;
        })
        .height(maxHeight);
      
      twttr.widgets.load();
    })
    .resize();
});