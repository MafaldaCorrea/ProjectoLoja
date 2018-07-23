$(document).ready(() => {

	//details gallery

	$('.one').on('click', () => {
		$('.gallery').hide();
		$('.first').show();
	});

	$('.two').on('click', () => {
		$('.gallery').hide();
		$('.second').show();
	}); 

	$('.three').on('click', () => {
		$('.gallery').hide();
		$('.third').show();
	});

	$('.four').on('click', () => {
		$('.gallery').hide();
		$('.fourth').show();
	});

	//details gallery mobile 

	var imgcount = 0;

	$('.rightDetails').on('click', () => {
		$('.detailsGallery .gallery').hide();
		++imgcount;

		if($('.detailsGallery .gallery').length <= imgcount) {
			imgcount = 0;
		}

		$($('.detailsGallery .gallery')[imgcount]).show();
	});

	$('.leftDetails').on('click', () => {
		$('.detailsGallery .gallery').hide();
		--imgcount;
		
		if(imgcount == -1) {
			imgcount = $('.detailsGallery .gallery').length - 1;
		}

		$($('.detailsGallery .gallery')[imgcount]).show();

	});

	//hero gallery

	var imgcount = 0;

	$('.arrowRight').on('click', () => {
		++imgcount;

		if($('.hero figure').length <= imgcount) {
			imgcount = 0;
		}

		$('.hero figure').fadeOut(600);
		$($('.hero figure')[imgcount]).fadeIn(600);
	});

	$('.arrowLeft').on('click', () => {
		--imgcount;
		
		if(imgcount == -1) {
			imgcount = $('.hero figure').length - 1;
		}

		$('.hero figure').fadeOut(600);
		$($('.hero figure')[imgcount]).fadeIn(600);

	});

	setInterval(() => {
		++imgcount;

		if($('.hero figure').length <= imgcount) {
			imgcount = 0;
		}

		$('.hero figure').fadeOut(600);
		$($('.hero figure')[imgcount]).fadeIn(600);
	},2000);

	//slider gallery

	$('.icon-arrow-left-thick').click(function(){
      $('.sliderpic > li:last-child')
        .prev()
        .end()
        .prependTo('.sliderpic');
    });

      $('.icon-arrow-right-thick').click(function(){
      $('.sliderpic > li:first')
        .prev()
        .end()
        .appendTo('.sliderpic');
    });


    //zoom 

    $('#zoom1').zoom();

    $('.imgOne').on('click', () => {
		$('.main').attr("src", "./images/floral-plimsoll-1.jpg");
		$('#zoom1').zoom();
	}); 

    $('.imgTwo').on('click', () => {
		$('.main').attr("src", "./images/floral-plimsoll-2.jpg");
		$('#zoom1').zoom();
	}); 

	$('.imgThree').on('click', () => {
		$('.main').attr("src", "./images/floral-plimsoll-3.jpg");
		$('#zoom1').zoom();
	}); 

	$('.imgFour').on('click', () => {
		$('.main').attr("src", "./images/floral-plimsoll-4.jpg");
		$('#zoom1').zoom();
	}); 

}); 
