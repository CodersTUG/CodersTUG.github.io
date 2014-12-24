$(window).load(function(){
  //#pastEvents .block-item-post p
  // js-slider-item
  $('.js-slider-item').flexslider({
    animation: "slide",
    slideshow: false,
    slideshowSpeed: 3000,
    animationSpeed: 800,
    pauseOnHover: false,
    pauseOnAction: false,
    controlNav: false,
    touch: false,
    randomize: false,
    directionNav: true,
    start: function(slider){
      $('body').removeClass('loading');
    }
  });

  // js-slider-item-auto
  $('.js-slider-item-auto').flexslider({
    animation: "fade",
    slideshow: true,
    slideshowSpeed: 3000,
    animationSpeed: 800,
    controlNav: false,
    randomize: true,
    directionNav: false,
    pauseOnHover: false,
    pauseOnAction: false,
    start: function(slider){
      $('body').removeClass('loading');
    }
  });

  $(".js-menu").click(function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(this.href).offset().top - 80 }, 600);
      $(".js-menu").removeClass('active');
      $(this).addClass('active');
  })
  
  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100)
        $('#back-top').fadeIn();
      else
        $('#back-top').fadeIn();
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

  // animation simple hide/show
  $('.js-simple-animation').on('inview', function (event, visible) {
    visible == true && $(this).addClass('on');
  });

  // animation atomic hide/show
  $('.js-atomic-animation').on('inview', function(e, isInView, visiblePartX, visiblePartY) {
    var elem = $(this);
    if (elem.data('inviewtimer')) {
      clearTimeout(elem.data('inviewtimer'));
      elem.removeData('inviewtimer');
    }
    if (isInView) {
      elem.data('inviewtimer', setTimeout(function() {
        $(elem).addClass('on');
      }, 2000));
    }
  });

  /* SBLOCCA PER ATTIVARE */
  // scrollbar documentation http://manos.malihu.gr/jquery-custom-content-scroller/
  var scrollBar = $(".block-text-scroll-bar");
  scrollBar.length !== 0 && scrollBar.mCustomScrollbar({
    scrollButtons:{
      enable:false
    },
    mouseWheel: false,
    advanced:{
      updateOnContentResize: true
    }
  });

  // VIDEO YOUTUBE e VIMEO LIQUID
  $(function() {
    // Find all YouTube videos
    var $allVideos = $("iframe[src^='http://www.youtube.com'],iframe[src^='http://player.vimeo.com']"),
    // The element that is fluid width
    $fluidEl = $("#section-1-module");
    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {
      $(this)
        .data('aspectRatio', this.height / this.width)
        .removeAttr('height')
        .removeAttr('width');
    });
    $(window).resize(function() {
      var newWidth = $fluidEl.width();
      // Resize all videos according to their own aspect ratio
      $allVideos.each(function() {
        var $e = $(this);
        $e.width(newWidth)
          .height(newWidth * $e.data('aspectRatio'));
      });
    }).resize();
  });

  $('.js-menu').on('click', function(e) {
    $('.nav-collapse').addClass("close-menu");
    $('.nav-collapse').removeClass("in");
    e.preventDefault();
  });
  
  $('.navigation-menu').on('click', function(e) {
    $('.nav-collapse').removeClass("close-menu");
    e.preventDefault();
  });
});