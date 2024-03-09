$(function(){
  $('#top_menu ul li:nth-child(1)').click(function(){
    $('#year-1400,#year-1500,#year-1800,#year-1900,#now').stop(true).css({opacity:0}),
    $('#year-1300').stop(true).css({opacity:1})
  })
  $('#top_menu ul li:nth-child(2)').click(function(){
    $('#year-1300,#year-1500,#year-1800,#year-1900,#now').stop(true).css({opacity:0}),
    $('#year-1400').stop(true).css({opacity:1})
    $(this).css({color:'#8C5F46'})
    $('#top_menu ul li:nth-child(1)').css({color:'#C8A591'})
  })
  $('#top_menu ul li:nth-child(3)').click(function(){
    $('#year-1400,#year-1300,#year-1800,#year-1900,#now').stop(true).css({opacity:0}),
    $('#year-1500').stop(true).css({opacity:1})
    $(this).css({color:'#8C5F46'})
    $('#top_menu ul li:nth-child(1)').css({color:'#C8A591'})
  })
  $('#top_menu ul li:nth-child(4)').click(function(){
    $('#year-1400,#year-1500,#year-1300,#year-1900,#now').stop(true).css({opacity:0}),
    $('#year-1800').stop(true).css({opacity:1})
    $(this).css({color:'#8C5F46'})
    $('#top_menu ul li:nth-child(1)').css({color:'#C8A591'})
  })
  $('#top_menu ul li:nth-child(5)').click(function(){
    $('#year-1400,#year-1500,#year-1800,#year-1300,#now').stop(true).css({opacity:0}),
    $('#year-1900').stop(true).css({opacity:1})
    $(this).css({color:'#8C5F46'})
    $('#top_menu ul li:nth-child(1)').css({color:'#C8A591'})
  })
  $('#top_menu ul li:nth-child(6)').click(function(){
    $('#year-1400,#year-1500,#year-1800,#year-1900,#year-1300').stop(true).css({opacity:0}),
    $('#now').stop(true).css({opacity:1})
    $(this).css({color:'#8C5F46'})
    $('#top_menu ul li:nth-child(1)').css({color:'#C8A591'})
  })

  $('#top_menu ul li',this).click(function(){
    $(this).stop(true).css({
      color:'#8C5F46',
      transition:'all 0.3s'
    })
    $('#top_menu ul li').not(this).stop(true).css({color:'#C8A591',transition:'all 0.3s'})
  })
})