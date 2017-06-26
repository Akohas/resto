import $ from 'jquery';
import { slick } from 'slick';

$(function(){
  $('.slider__container').slick({
  	slidesToShow: 4,
  	arrows: false,
  	dots: true,
  	variableWidth: true,

  });



  $('.rating__item').on('click', function(){
  	var index = $(this).closest('.rating__item').index();
  })
})


