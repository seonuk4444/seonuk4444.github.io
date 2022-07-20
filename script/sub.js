$(document).ready(function(){

  var searhCnt = $('.topSearch').length;
  if(searhCnt > 0){
    $('#divContents').addClass('up');
  }else{
    $('#divContents').removeClass('up');
    $('#divContents').css('margin-top',0)

  }


  var tabSlide = new Swiper('.swipeTab .inner',{
    slidesPerView:'auto',
    spaceBetween: 0,
    freeMode: true,
  });

  $('.swipeTab .tab a').click(function(e){
    e.preventDefault();
  });

  $(window).on('load',function(){
    var chk = $('.swipeTab .tab.on').index();
    tabSlide.slideTo(chk)
  });

  $('.swipeTab .toggleBtn').click(function(){
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