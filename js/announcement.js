$(function(){

  // section2 slideUp,slideDown 효과

  $('.overlay').hide();

  $(window).scroll(function(){		
    if($('body, html').scrollTop() > 1200){	
      $('.overlay').stop(true).slideDown(1000)
    }
    else{
     $('.overlay').stop(true).slideUp(1000) 
    }
  })

  $('#left').mouseover(function(){
    $(this).slideUp(1000),
    $('#right').stop(true).slideDown(1000)
  })
  $('#right').mouseover(function(){
    $(this).slideUp(1000),
    $('#left').stop(true).slideDown(1000)
  })

  function fade(){
    $('.img_box ul li:nth-child(1)').animate({opacity:1},3000)
    $('.img_box ul li:nth-child(2)').animate({opacity:0},3000)
    $('.img_box ul li:nth-child(3)').animate({opacity:0},3000)
    $('.img_box ul li:nth-child(4)').animate({opacity:0},3000)

    $('.img_box ul li:nth-child(1)').animate({opacity:0},4000)
    $('.img_box ul li:nth-child(2)').animate({opacity:1},4000)
    $('.img_box ul li:nth-child(3)').animate({opacity:0},4000)
    $('.img_box ul li:nth-child(4)').animate({opacity:0},4000)

    $('.img_box ul li:nth-child(1)').animate({opacity:0},5000)
    $('.img_box ul li:nth-child(2)').animate({opacity:0},5000)
    $('.img_box ul li:nth-child(3)').animate({opacity:1},5000)
    $('.img_box ul li:nth-child(4)').animate({opacity:0},5000)

    $('.img_box ul li:nth-child(1)').animate({opacity:0},6000)
    $('.img_box ul li:nth-child(2)').animate({opacity:0},6000)
    $('.img_box ul li:nth-child(3)').animate({opacity:0},6000)
    $('.img_box ul li:nth-child(4)').animate({opacity:1},6000,fade)
  }
  fade()
})
