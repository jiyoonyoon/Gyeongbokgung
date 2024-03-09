// headerTop

$(window).on('resize', function(){
	console.log('resize event!');
    if (window.innerWidth <= 905) {
      $(' header .headerWarp .headerTop .text_box').css({
        display:'none'
      })
      $('header .title').on('mouseover',function(){
        $(' header .headerWarp .headerTop .text_box').stop(true).css({
          display:'block'
        }),
        $('#bgc').stop(true).css({
          display:'block'
        });
      }).on('mouseout',function(){
        $(' header .headerWarp .headerTop .text_box').stop(true).css({
          display:'none'
        }),
        $('#bgc').stop(true).css({
          display:'none'
        });
      })
    } else {
      $('header .title').off();
      $(' header .headerWarp .headerTop .text_box').css({
        display:'block'
      })
    }
});

// wow

$(function(){
  new WOW().init();
})

// section color 효과

$(window).scroll(function(){		
  if($('body, html').scrollTop() > 2500){	
    $('.color .conbox .con1 .col1').stop(true).css({
      Animation :'anir 1s linear',
    }),
    $('.color .conbox .con1 .col2').stop(true).css({
      Animation :'anir 1.5s linear'
    }),
    $('.color .conbox .con1 .col3').stop(true).css({
      Animation :'anir 2s linear'
    }),
    $('.color .conbox .con1 .col4').stop(true).css({
      Animation :'anir 2.5s linear'
    })
  }
  if($('body, html').scrollTop() > 2850){	
    $('.color .conbox .con2 .col1').stop(true).css({
      Animation :'anil 1s linear'
    }),
    $('.color .conbox .con2 .col2').stop(true).css({
      Animation :'anil 1.5s linear'
    }),
    $('.color .conbox .con2 .col3').stop(true).css({
      Animation :'anil 2s linear'
    })
  }
})