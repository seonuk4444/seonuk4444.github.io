$(document).ready(function(){

  var searhCnt = $('.topSearch').length;
  console.log(searhCnt)
  if(searhCnt > 0){
    $('#divContents').addClass('up');
  }else{
    $('#divContents').removeClass('up');
    $('#divContents').css('margin-top',0)

  }

  var lastScrollTop = 0;
  var btnH = $('.detailBtns').height();
  var floatingH = $('.floating').height();
  $('.detailBtns').css('bottom', floatingH)
  $(window).on('scroll',function(event){
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
      $('.floating .menu>li.foreign a').css('margin-top',-32)
    }
    lastScrollTop = scroll;
  });


  //검색상세화면 뜨는 팝업 -> common js 로 옮길예정
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


  var tabSlide = new Swiper('.swipeTab .inner',{
    slidesPerView:'auto',
    spaceBetween: 0,
    freeMode: true,
  });

  $('.swipeTab').click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on');
      $('.swipeTabBg').hide();
      $('.swipeTab').removeClass('all');
      tabSlide = new Swiper('.swipeTab .inner',{
        slidesPerView:'auto',
        spaceBetween: 0,
        freeMode: true,
      });
    }else{ 
      $(this).addClass('on');
      $('.swipeTabBg').show();
      $('.swipeTab').addClass('all')
      tabSlide.destroy();
      
    }
    return false;
  });
  

//   function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
//     let paths = document.querySelectorAll("path");
//     let mode=repeat?'infinite':'forwards'
//     for (let i = 0; i < paths.length; i++) {
//         const path = paths[i];
//         const length = path.getTotalLength();
//         path.style["stroke-dashoffset"] = `${length}px`;
//         path.style["stroke-dasharray"] = `${length}px`;
//         path.style["stroke-width"] = `${strokeWidth}px`;
//         path.style["stroke"] = `${strokeColor}`;
//         path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
//         path.style["animation-delay"] = `${i * delay}s`;
//     }
// }
// setTextAnimation(0.1,5,2,'linear','#ffa800',true);


});    