$(document).ready(function(){
	if (window.matchMedia('(min-width:993px) and (max-width: 2000px)').matches){
		$('#services').click(function(){
		
		$('.hide_li').slideToggle();

	});

	}
	
	

	if (window.matchMedia('(min-width:769px) and (max-width: 992px)').matches){
		$('li:nth-child(1)').click(function(){

		$('.navigation_left li:nth-child(2)').slideToggle(1000);
		$('.navigation_left li:nth-child(3)').slideToggle(1000);
		$('.navigation_left li:nth-child(4)').slideToggle(1000);

		$('.navigation_right li:nth-child(2)').slideToggle(1000);
		$('.navigation_right li:nth-child(3)').slideToggle(1000);
		$('.navigation_right li:nth-child(4)').slideToggle(1000);
	})
		$('#services').click(function(){
			$('.hide_li').hide();
		})


	}

	if (window.matchMedia('(min-width: 769px) and (max-width: 992px)').matches){
		$('.abou_us_left li').show();
		$('.abou_us_right li').show();
	}

	// if (window.matchMedia('(max-width: 768px)').matches){
	// 	$('#services').click(function(){
	// 		$('.navigation_left li:nth-child(2)').show();
	// 		$('.navigation_left li:nth-child(3)').show();
	// 		$('.navigation_left li:nth-child(4)').show();
	// 	});

	// 	$('li:nth-child(1)').click(function(){
	// 		$('.navigation_right li:nth-child(2)').show();
	// 		$('.navigation_right li:nth-child(3)').show();
	// 		$('.navigation_right li:nth-child(4)').show();
	// 	}
	// }

	$('.fixed_title').click(function(){
		$(this).css({
			'background': 'silver', 'transition': '0.8s ease', 'border-top': '2px solid #000'
		})
	})


	$('#MEET_US_NOW').click(function(){
		$(this).css({
			'background': 'red', 'transition': '1s'
		})
	})

	$('#CONTACT_US').click(function(){
		$(this).css({
			'background': 'green', 'transition': '1s', 'border': '2px solid #000', 'color': '#000'
		})
		alert("Контактний номер : 380 97 714 421");
		$('#MEET_US_NOW').css({
			'transform': 'rotate(360deg)', 'transition': '1s', 'border': '2px solid #000'
		})
	})


	if (window.matchMedia('(min-width: 200px) and (max-width: 768px)').matches){
			$('#MEET_US_NOW, #CONTACT_US').wrapAll("<div class='btn_wrap'></div>")

	}


	// Gallery

	$('.top_title_gallery img').click(function(){
		$('.bottom_title_gallery img').css({
			'border': '2px solid #000', 'transition': '1s', 'transform': 'rotate(360deg)'
		});
		$('.bottom_title_gallery').click(function(){
			$('.bottom_title_gallery img').css({'border': 'none'})
		})

		$('.bottom_title_gallery img').click(function(){
			$('.top_title_gallery img').css({
			'border': '2px solid #000', 'transition': '1s', 'transform': 'rotate(-360deg)'
		});
			$('.top_title_gallery').click(function(){
			$('.top_title_gallery img').css({'border': 'none'})
		})

		})
	})




		// BUY OXXO NOW!

		$('#CONTACT_US_2').click(function(){
			$('#BUY_NOW').css({
				'transform': 'rotate(-360deg)', 'transition': '1s',
			})
		})

		$('#BUY_NOW').click(function(){
			$('#CONTACT_US_2').css({
				'transform': 'rotate(-360deg)', 'transition': '1s', 'border': '2px solid #000', 'color': '#000'
			})
		})



		// contct_info

		$('.inner_contact_form input[type="submit"]').hover(function(){
			$('.inner_contact_form input, textarea').css({
				'border': '2px solid #000', 'transition': '0.4s'
			})

			$('.inner_contact_form input, textarea').click(function(){
				$(this).css({
					'border': 'none'
				})
			})
		})
});