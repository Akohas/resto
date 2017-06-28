import $ from 'jquery';
import { slick } from 'slick';

$(function(){
  $('.slider__container').slick({
  	slidesToShow: 4,
  	arrows: false,
  	dots: true,
    infinite: false,
  	// variableWidth: true,
    responsive: [
			{
        breakpoint: 1024,
        settings: {
          variableWidth: false,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
        }
      },

		]

  });



  $('.rating__item').on('click', function(){
  	var index = $(this).closest('.rating__item').index();
  })


	$('.nav-icon').on('click', function(){
		$(this).toggleClass('nav-icon_active');
        $('.nav').toggleClass('nav_active');

	})
})


