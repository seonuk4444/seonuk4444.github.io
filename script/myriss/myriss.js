$(document).ready(function(){

    $('.optBtn1').click(function(e){
        e.preventDefault();
        if($(this).hasClass('on')){
          $(this).removeClass('on');
          $(this).next('.optType1').slideUp();
        }else{
          $(this).addClass('on');
          $(this).next('.optType1').slideDown();
        }
      });

    $(".shelf .favorRadio[name='shelf']:radio").change(function () {
        $('.shelf').removeClass('mainShelf')
       $(this).parents('.shelf').addClass('mainShelf');         
    });

    //내 책장수정 팝업
    $('.shelfBtns .edit').click(function(e){
        e.preventDefault();
        let ph = $('.myPop .popHeader').outerHeight(true);
        $('.myPop .popCont').css({'height':'calc(100% - ' +ph+'px)'})
        $('.blackBg1').show();
        $('.myPop').addClass('on');
    });

    $('.creatShelf').click(function(e){
      e.preventDefault();
      let ph = $('.myPop .popHeader').outerHeight(true);
      $('.myPop .popCont').css({'height':'calc(100% - ' +ph+'px)'})
      $('.blackBg1').show();
      $('.myPop').addClass('on');
  });

    $('.myPop .divPopupClose').click(function(e){
        e.preventDefault();
        $('.blackBg1').hide();
        $('.myPop').removeClass('on');
    });

    //카테고리 팝업
    $('#interestCodeName1').click(function(){
        let ph = $('.categoryPop .popHeader').outerHeight(true);
        $('.categoryPop .popCont').css({'height':'calc(100% - ' +ph+'px)'})
        $('.blackBg1').show();
        $('.categoryPop').addClass('on');
    });
    $('.categoryPopClose').click(function(e){
        e.preventDefault();
        $('.categoryPop').removeClass('on');
    });

    //내보내기
  $('.export').click(function(e){
    e.preventDefault();
    let ph = $('.exportPop .popHeader').outerHeight(true);
    $('.exportPop .popCont').css({'height':'calc(100% - ' +ph+'px)'})
    $('.blackBg1').show();
    $('.exportPop').addClass('on');
  });
  $('.exportPopClose').click(function(e){
    e.preventDefault();
    $('.blackBg1').hide();
    $('.exportPop').removeClass('on');
  });

  //최신논문들 팝업
  $('.interKeyList .viewListBtns a').click(function(e){
    e.preventDefault();
    $('.interKeyList .viewListBtns a').removeClass('on');
    $(this).addClass('on');
    $('.blackBg1').show();
    $('.thesisPop').addClass('on')
  });  

  $('.thesisPopClose').click(function(e){
    e.preventDefault();
    $('.interKeyList .viewListBtns a').removeClass('on');
    $('.blackBg1').hide();
    $('.thesisPop').removeClass('on');
  });

  //월간이용현황
  let graphTab = new Swiper('.graphTab .inner',{
    slidesPerView:'auto',
    spaceBetween: 0,
    freeMode: true,
  });
});    