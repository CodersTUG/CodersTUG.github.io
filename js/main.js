$(window).load(function(){


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

// PLACEOLDER
//Assign to those input elements that have 'placeholder' attribute
if($.browser.msie){
   $('input[placeholder]').each(function(){ 
       
        var input = $(this);       
       
        $(input).val(input.attr('placeholder'));
               
        $(input).focus(function(){
             if (input.val() == input.attr('placeholder')) {
                 input.val('');
             }
        });
       
        $(input).blur(function(){
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        });
    });
};


// SHOW BOX
	
$(".js-collapse-box").hide();
$(".js-collapse-box").removeClass( "hidden" );
$(".js-show-element").click(function(){
	$(this).next().slideToggle('fast', function(){
		$(this).prev(".js-show-element").toggleClass("active");
		});
	return false;
});

/* go to */

$("#section-1").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-1-module").offset().top-80
    }, 600);
	
	$('a').each(function () {
		  $(this).removeClass('active');
	  })
	  $(this).addClass('active');
	
})

$("#section-2").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-2-module").offset().top-80
    }, 600);
	
	$('a').each(function () {
		  $(this).removeClass('active');
	  })
	  $(this).addClass('active');
	
})

$("#section-3").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-3-module").offset().top-80
    }, 600);
	
	$('a').each(function () {
		  $(this).removeClass('active');
	  })
	  $(this).addClass('active');
	
})

$("#section-4").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-4-module").offset().top-80
    }, 600);
	
	$('a').each(function () {
		  $(this).removeClass('active');
	  })
	  $(this).addClass('active');
	
})

$("#section-5").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-5-module").offset().top-80
    }, 600);
	
	$('a').each(function () {
		  $(this).removeClass('active');
	  })
	  $(this).addClass('active');
	
})


// fade in #back-top
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeIn();
		}
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

$('.js-simple-animation').bind('inview', function (event, visible) {
						 
   if (visible == true) {
	  $(this).addClass('on'); 
   }

});

// animation atomic hide/show

$('.js-atomic-animation').bind('inview', function(e, isInView, visiblePartX, visiblePartY) {
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
$(".block-text-scroll-bar").mCustomScrollbar({
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
	var $allVideos = $("iframe[src^='http://www.youtube.com']"),

		// The element that is fluid width
		$fluidEl = $("#main-article");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

		$(this)
			.data('aspectRatio', this.height / this.width)
			
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');

	});

	// When the window is resized
	// (You'll probably want to debounce this)
	$(window).resize(function() {

		var newWidth = $fluidEl.width();
		
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {

			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));

		});

	// Kick off one resize to fix all videos on page load
	}).resize();

});

$(function() {
							
	// Find all YouTube videos
	var $allVideosVimeo = $("iframe[src^='http://player.vimeo.com']"),

		// The element that is fluid width
		$fluidEl = $("#main-article");

	// Figure out and save aspect ratio for each video
	$allVideosVimeo.each(function() {

		$(this)
			.data('aspectRatio', this.height / this.width)
			
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');

	});

	// When the window is resized
	// (You'll probably want to debounce this)
	$(window).resize(function() {

		var newWidth = $fluidEl.width();
		
		// Resize all videos according to their own aspect ratio
		$allVideosVimeo.each(function() {

			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));

		});

	// Kick off one resize to fix all videos on page load
	}).resize();

});
  
});