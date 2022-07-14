$(document).ready(function(){

  //원문보기 여러개
  $('.viewOriginBtn').click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on');
      $(this).next('.viewOriginList').stop().slideUp();
    }else{
      $(this).addClass('on')
      $(this).next('.viewOriginList').stop().slideDown();
    }
    return false;
  });

  //목차보기 버튼
  $('.divViewListBtn').click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on');
      $(this).parents('.btns').find('.divViewList').stop().slideUp();
    }else{
      $(this).addClass('on')
      $(this).parents('.btns').find('.divViewList').stop().slideDown();
    }
    return false;
  });

});    