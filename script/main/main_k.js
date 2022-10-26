$(document).on('ready',function(){

    //로드 이벤트
    $(window).on('load',function(){
        setTimeout(function(){
            $('.topFirstVisit .txt').addClass('on');
        },2000)
        
    });

    //팝업존
    let popZone = new Swiper('.popZone .inner',{
        slidesPerView:'auto',
        spaceBetween: 0,
        freeMode: true,
    });
  
    //학술자료 탭
    $('.academicTab>li>a').click(function(e){
        e.preventDefault();
        $('.academicTab>li').removeClass('on');
        $(this).parent().addClass('on');
        $('.academicContW .academicCont').hide();
        $('.academicContW .academicCont').eq($(this).parent().index()).show();

    });
    $('.academicDepth2>li>a').click(function(e){
        e.preventDefault();
        $(this).parents('.academicDepth2').find('li').removeClass('on');
        $(this).parent().addClass('on');
        $(this).parents('.academicCont').find('.acaInnerCont').hide();
        $(this).parents('.academicCont').find('.acaInnerCont').eq($(this).parent().index()).show();
    });
    $('.academicDepth3W .acaInnerCont>ul>li>a').click(function(e){
        e.preventDefault();
        $('.academicDepth3W .acaInnerCont>ul>li').removeClass('on');
        $(this).parent().addClass('on');
    });

    
});    