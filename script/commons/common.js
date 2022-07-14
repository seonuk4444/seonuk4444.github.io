$(document).ready(function(){

  var lastScrollTop = 0;
  var btnH = $('.detailBtns').height();
  var floatingH = $('.floating').height();
  $('.detailBtns').css('bottom', floatingH)
  $(window).on('scroll',function(event){
    var scroll = $(this).scrollTop();
    floatingH = $('.floating').height();
    if (scroll > lastScrollTop){
        // downscroll code
        $('.detailBtns').css('bottom',- scroll + btnH)
        $('.floating').css('bottom',- scroll)
        if(scroll > floatingH){
          $('.detailBtns').css('bottom',0)
          $('.floating').css('bottom',- floatingH)
        }
    } else{
      $('.detailBtns').css('bottom', floatingH)
      $('.floating').css('bottom',0)
    }
    lastScrollTop = scroll;
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

  $('.toggleBtn').click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on');
      $('#divTabMenu').removeClass('all')
      tabSlide = new Swiper('#divTabMenu .inner',{
        slidesPerView:'auto',
        spaceBetween: 0,
        freeMode: true,
      });
    }else{ 
      $(this).addClass('on');
      $('#divTabMenu').addClass('all')
      tabSlide.destroy();
      
    }
    return false;
  });
  

  function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
    let paths = document.querySelectorAll("path");
    let mode=repeat?'infinite':'forwards'
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
    }
}
setTextAnimation(0.1,5,2,'linear','#ffa800',true);


});    