$(document).ready(function(){

    //로드 이벤트
    $(window).on('load',function(){
        setTimeout(function(){
            $('.topFirstVisit .txt').addClass('on');
        },1000)
        
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
    let academic = new Swiper('.academicCont .inner',{
        slidesPerView:'auto',
        spaceBetween: 0,
        freeMode: true,
        observer: true,
        observeParents: true,
      });
    $('.academicDepth2 .tab a').click(function(e){
        e.preventDefault();
        console.log($(this).parent().index())
        $(this).parents('.academicDepth2').find('.tab').removeClass('on');
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