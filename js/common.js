$(function(){
  // headertop 효과

  // menu 효과
  $('.menu>li',this).mouseover(function(){
    $('.menu>li').not(this).stop(true).css({color:'#ccc',transition:'all 0.3s'})
  })
  .mouseout(function(){
    $('.menu>li').css({color:'#333',transition:'all 0.3s'})
  })
  $('.menu>li>a',this).click(function(){
    $(this).css({color:'#8C5F46'})
  })
  // submenu나타나게 함  
  $('.subpointer').mouseover(function(){
    $('.submenu').css({display: 'block'})

    var windowWidth = window.outerWidth;

    //창 가로 크기가 600 미만일 경우
    if(windowWidth < 600){
      $('.submenu').css({display: 'none'})
    }else {
    //창 가로 크기가 600보다 클 경우
      $('.submenu').css({display: 'block'})
    }
    
  })
  .mouseout(function(){
    $('.submenu').css({display: 'none'})
  })

  // .right li:last-child 효과
  $('header .right>li:last-child').mouseover(function(){
    $(this).css({
      backgroundColor:'#f0f0f0',
      border: 'none',
      color:'#333',
      transition:'all 0.3s'})
    })
  $('header .right>li:last-child').mouseout(function(){
    $(this).css({
      backgroundColor:'#fff',
      border: '1px solid #ccc',
      color:'#333',
      transition:'all 0.3s'})
    })

})