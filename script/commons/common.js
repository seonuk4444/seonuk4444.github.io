$(document).ready(function(){

  var winWidth = window.innerWidth || document.documentElement.clientWidth;
  var lastScrollTop = 0;
  var btnH = $('.detailBtns').height();
  var floatingH = $('.floating').height();
  
  $('.detailBtns').css('bottom', floatingH);
  $(window).on('scroll',function(event){
    winWidth = window.innerWidth || document.documentElement.clientWidth;
    var scroll = $(this).scrollTop();
    floatingH = $('.floating').height();
    if(scroll > 0){
      $('.topSearch').addClass('fix');
      if($('#divContents').hasClass('up')){
        $('#divContents').addClass('on');
      }
    }else{
      $('.topSearch').removeClass('fix');
      if($('#divContents').hasClass('up')){
        $('#divContents').removeClass('on');
      }
    }

    
    if (scroll > lastScrollTop){
        // downscroll code
        $('.floating').addClass('on')
        $('.detailBtns').css('bottom',0)
        $('.floating').css('bottom',- floatingH)
        $('.floating .menu>li.foreign a').css('margin-top',0)
        
    } else{
      $('.detailBtns').css('bottom', floatingH)
      $('.floating').css('bottom',0)
      $('.floating').removeClass('on')
      if(winWidth > 767){
        $('.floating .menu>li.foreign a').css('margin-top',-32)
      }else{
        $('.floating .menu>li.foreign a').css('margin-top',-10)
      }
      
    }
    lastScrollTop = scroll;
  });

  $(window).on('resize',function(){
    winWidth = window.innerWidth || document.documentElement.clientWidth;
    if(winWidth > 767){
      $('.floating .menu>li.foreign a').css('margin-top',-32)
    }else{
      $('.floating .menu>li.foreign a').css('margin-top',-10)
    }
  });


  var option = {
    slidesPerView:'auto',
    spaceBetween: 0,
    freeMode: true,
  }


  var tabSlide = new Swiper('#divTabMenu .inner',{
    slidesPerView:'auto',
    spaceBetween: 0,
    freeMode: true,
  });

 //검색상세화면 뜨는 팝업
 $('.searchInputW').on('click focus', function(){
  $('html, body').css('overflow','hidden');
  $('.blackBg1').show();
  $('#divSearch').addClass('on');
});

$('.searchClose').click(function(){
  $('html, body').css('overflow','visible');
  $('.blackBg1').hide();
  $('#divSearch').removeClass('on');
  return false;
});

$('.shBtn').click(function(){
  if($(this).hasClass('on')){
    $(this).removeClass('on');
    $(this).next('.shManage').slideUp();
  }else{
    $(this).addClass('on');
    $(this).next('.shManage').slideDown();
  }
  return false;
});


});    