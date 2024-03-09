$(function(){
    new WOW().init();
  })

// main animate효과

const element = document.querySelector('.maintextall');
element.style.setProperty('--animate-delay', '0.5s');



// main animate효과//

console.clear();

// animation on scroll
AOS.init({
    //once:true,
    duration:800,
    easing: 'ease',
});


// 3차 visual stroy slick 적용
$('.v-story-slider').slick({
    dots:false,
    draggable:false,
    arrows:true,
    adaptiveHeight:true,
    centerMode:true,
    centerPadding:'20vw',
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            centerPadding:'20vw',
          }
        },
        {
          breakpoint: 770,
          settings: {
            centerPadding:'0',
            arrows:true,
          }
        },
    ],
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    /* 자바스크립트
    if (currentSlide !== nextSlide) {
        document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
            // timeout required or Slick will overwrite the classes
            setTimeout(() => next.classList.add('slick-current', 'slick-center'));
        });
    }
    */
    // IE 호환성을 고려한 제이쿼리
    if (currentSlide !== nextSlide) {
        $('.slick-center + .slick-cloned').each(function(index, node) {
            var $node = $(node);
            
            setTimeout(function() {
                $node.addClass('slick-current');
                $node.addClass('slick-center');
            });
        });
    }
}); // 이 코드는 slick infinite 가 맨끝에서 다시 처음으로 돌아가거나 할때도 트랜지션이 적용되기 위한 코드입니다.

  var mainSlider = $('.se4');

  mainSlider.slick({
    slidesToShow: 1,
    slidesToScroll : 1,
    dots: false,
    infinite: true,
    centerMode: true,
});
mainSlider.on('wheel', function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickPrev');
  } else {
    $(this).slick('slickNext');
  }
});


// famliy
setInterval(function(){
  $('.famliy ul').delay('2500')
  $('.famliy ul').animate({marginLeft:'-227px'},1000)
  $('.famliy ul').delay('2500')
  $('.famliy ul').animate({marginLeft:'-454px'},1000)
  $('.famliy ul').delay('2500')
  $('.famliy ul').animate({marginLeft:'-681px'},1000)
  $('.famliy ul').delay('2500')
  $('.famliy ul').animate({marginLeft:'-900px'},1000)
  $('.famliy ul').delay('2500')
  $('.famliy ul').animate({marginLeft:'0px'},1000)
})