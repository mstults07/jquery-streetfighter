$(document).ready(function() {
	Intro();

  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })

  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })

  .mousedown(function() {
    // play hadouken sound
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
  		{'left': '1020px'},
 		 500, 
  		function() {
    		$(this).hide();
    		$(this).css('left', '520px');
  		}
	);
  })

  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
  
  $(document).keydown(function(e){
    if (e.which == 88) {
        $('.ryu-ready').hide();
        $('.ryu-still').hide();
        $('.ryu-throwing').hide();
    	$('.ryu-cool').show();
    }
	})
  .keyup(function(e){
    if (e.which == 88) {
    	$('.ryu-ready').show();
    	$('.ryu-cool').hide();
    }
	});
});

function Intro() {
	$('#theme-song')[0].volume = 0.2;
 	$('#theme-song')[0].play();
 	$('.sf-logo').fadeIn(3500, function() {
    	$(this).fadeOut(1000, function() {
        	$('.text').fadeIn(1000);
    	});
  	})
}

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}