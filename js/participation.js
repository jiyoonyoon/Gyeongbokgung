$(function(){
  new WOW().init();
})

$(window).scroll(function(){		
  if($('body, html').scrollTop() > 150){	
    $('.section1 .con1 > span').stop(true).css({
      Animation :'line 1s linear'
    })
  }
  if($('body, html').scrollTop() > 550){	
    $('.section1 .con2 > span').stop(true).css({
      Animation :'line 1s linear'
    })
  }
  if($('body, html').scrollTop() > 1000){	
    $('.section1 .con3 > span').stop(true).css({
      Animation :'line 1s linear'
    })
  }
})

$('.container button').click(function(){
  $('#dim').css({display:'block'})
})
$('.popup button').click(function(){
  $('#dim').css({display:'none'})
})