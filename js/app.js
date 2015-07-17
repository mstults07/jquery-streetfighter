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
    var key = e.which;
    if (key == 88) {
        $('.ryu-ready').hide();
    	$('.ryu-cool').show();
    }
	});
  $(document).keyup(function(e){
    var key = e.which;
    if (key == 88) {
    	$('.ryu-ready').finish().show();
    	$('.ryu-cool').finish().hide();
    }
	});
});

function Intro() {
	$('#theme-song')[0].volume = 0.3;
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