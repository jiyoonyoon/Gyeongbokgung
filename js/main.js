
  // 문서의 내용이 모두 로드 되면 할일
  // DOMContentLoaded
  // document.addEventListener('DOMContentLoaded',function(){
  // 클래스명 container 변수명 $slideWrap
  // 클래스명 mainslide 변수명 $slideContainer
  // 클래스명 slide 변수명 $slide
  // 이전버튼 변수명 navPrev
  // 다음버튼 변수명 navNext
  // 변수  지정
  var $slideWrap = document.querySelector('.maincon'),
      $slideContainer = document.querySelector('.mainslide'),
      $slide = document.querySelectorAll('.slide'),
      $navPrev= document.getElementById('prev'),
      $navNext= document.getElementById('next'),
      $currentIndex = 0,
      $timer = undefined,
      $pagerHTML = '',
      $pager = document.querySelector('.pager'),
      // $pagerBtn = document.querySelectorAll('.pager span'),
      $slideCount = $slide.length;

  for(var a = 0; a < $slideCount; a++){
    $slide[a].style.left = a * 100 + '%';
    // <span data-idx="0">1</span>
    // var i =2; i = i+2;//$pagerHTML =$pagerHTML +<span".
    $pagerHTML +=  '<span data-idx="'+ a +'">'+ (a+1) +'</span>';

    $pager.innerHTML = $pagerHTML;
  }
  $pagerBtn = document.querySelectorAll('.pager span');

  // 슬라이드 이동 함수
function goToSlide(idx){
  $slideContainer.classList.add('animated');
  $slideContainer.style.left = -100 * idx + '%';  
  $currentIndex = idx;

  //모든 $pagerBtn에 active 제거, 클릭된 그 요소에만 active 추가
  for(var y = 0; y < $pagerBtn.length ; y++){
    $pagerBtn[y].classList.remove('active') 
   }
   $pagerBtn[idx].classList.add('active');
}//goTOSlide
goToSlide(0);

// 다음버튼 클릭하면 할 일
$navPrev.addEventListener('click',function(){
  // goToSlide($currentIndex - 1);

  if($currentIndex == 0){
    goToSlide($slideCount - 1);
  }else{
    goToSlide($currentIndex - 1);
  }

})
$navNext.addEventListener('click',function(){
  // goToSlide($currentIndex + 1);

  if($currentIndex == $slideCount - 1){
    goToSlide(0);
  }else{
    goToSlide($currentIndex + 1);
  }

})
// 자동 슬라이드

  //4초마다 goToSlide(숫자); 0,1,2,3,4,5,...
  //setInterval(할일,4000);
  //할일은 함수 = 할일 = function(){실제 할일}
  
// 자동 슬라이드 함수
function stertAutoSlide(){
  $timer = setInterval(function(){
  //실제 할일 = goToSlide(숫자);
  //ci 0 4초 후 ni 1, di 1 4초 후 ni 2...ci 5 4초 후 ni 0
  var nextIdx = ($currentIndex + 1) % $slideCount ;
  goToSlide(nextIdx)
},5000);
}
stertAutoSlide();

function stopAutoSlide(){
  clearInterval($timer);
}
/*
$slideWrap에 마우스가 들어오면 할 일, 나가면 할 일
*/
$slideWrap.addEventListener('mouseenter',function(){
  clearInterval($timer);
});
$slideWrap.addEventListener('mouseleave',function(){
  stertAutoSlide();
});

// pager로 슬라이드 이동하기
for(var x = 0; x < $pagerBtn.length;x++){
  $pagerBtn[x].addEventListener('click',function(event){
    console.log(event.target);

    var pagerNum = event.target.getAttribute('data-idx');
    goToSlide(pagerNum);
    
    
  })
}
$(function(){
// section2

$(window).scroll(function(){		
  if($('body, html').scrollTop() > 1700){	
    $('.section2 .text_box > span').stop(true).css({
      Animation :'ani 1.5s linear'
    })
  }
})

// section3

$('.se3_con').mouseover(function(){
  $(this).find('.img_box li:nth-child(2)').stop(true).animate({opacity:0},500)
}).mouseout(function(){
  $(this).find('.img_box li:nth-child(2)').stop(true).animate({opacity:1},500)
})

// section4
  $('.se4_con').mouseover(function(){
    $('.se4_text_wrap',this).css({display:'block'})
  }).mouseout(function(){
    $('.se4_text_wrap',this).css({display:'none'})
  })
})


//  알림판

$(".notice li:first").css("opacity",1);
$(".notedot li:first").css("background", "#8C5F46");

$(".notedot li").click(function(){
  var $index = $(this).index();
  slide($index);
});

setInterval("show()", 3000);
    	var cnt = 0;

function show(){ 
    cnt++; 
      if( cnt < $(".notice li").length ) { 
    slide(cnt);
  } else {
      cnt=0; 
      slide(cnt);
  }
}

function slide(cnt){
$(".notice li").css("opacity", 0);
 $(".notice li").eq(cnt).css("opacity", 1);
 $(".notedot li").css("background", "#C8A591");
 $(".notedot li").eq(cnt).css("background", "#8C5F46");
}