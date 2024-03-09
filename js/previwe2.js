$(function(){
  new WOW().init();
})

$('.overlay').hide();

$('.img_wrap').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [

    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        arrows:true,
      }
    },
]
});
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.img_wrap'
});