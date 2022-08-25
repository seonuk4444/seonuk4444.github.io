$(document).ready(function(){

  $('.academicTab>ul>li>a').click(function(e){
    e.preventDefault();
    $('.academicTab').addClass('on');
    $('.academicTab>ul>li>a').removeClass('on');
    $(this).addClass('on')
    $('.academicDepth2>div').hide();
    $('.academicDepth2>div').eq($(this).parent().index()).show();

  });

  let tabSlide3 = new Swiper('.swipeTab.type3 .inner',{
    slidesPerView:'auto',
    spaceBetween: 0,
    freeMode: true,
    observer: true,
    observeParents: true,
  });

  $('.sjSrc .sjSrcBtn').click(function(e){
    e.preventDefault();
    let ph = $('.sjSrcPop .popHeader').outerHeight(true);
    $('.sjSrcPop .popCont').css({'height':'calc(100% - ' +ph+'px)'})
    $('.blackBg1').show();
    $('.sjSrcPop').addClass('on');
  });
  $('.sjSrcPop .divPopupClose').click(function(e){
      e.preventDefault();
      $('.blackBg1').hide();
      $('.sjSrcPop').removeClass('on');
      $(this).parents('.divPopup').removeClass('long');
  });

});    