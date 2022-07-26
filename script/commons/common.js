let wholeUtil = {
  init: function () {
      this.bind();
  },

  bind: function () {
      $('.wholeMenu').scroll(function () {
        wholeUtil.menuSelect();
      });
  },

  menuSelect: function () {
    $('.wholeMenuNav').find('.on').removeClass('on');
    //$('.wholeMenuNav').find('.strong').removeClass('strong');
    if (this.checkVisible($('#wm1'))) {
      $('[href="#wm1"]').parent('div').addClass('on');
    } else if (this.checkVisible($('#wm2'))) {
      $('[href="#wm2"]').parent('div').addClass('on');
    } else if (this.checkVisible($('#wm3'))) {
      $('[href="#wm3"]').parent('div').addClass('on');
    } else if (this.checkVisible($('#wm4'))) {
      $('[href="#wm4"]').parent('div').addClass('on');
    } else if (this.checkVisible($('#wm5'))) {
      $('[href="#wm5"]').parent('div').addClass('on');
    } else if (this.checkVisible($('#wm6'))) {
      $('[href="#wm6"]').parent('div').addClass('on');
    } else if (this.checkVisible($('#wm7'))) {
      $('[href="#wm7"]').parent('div').addClass('on');
    } else if (this.checkVisible($('#wm8'))) {
      $('[href="#wm8"]').parent('div').addClass('on');
    } else if (this.checkVisible($('#wm9'))) {
      $('[href="#wm9"]').parent('div').addClass('on');
    } else if (this.checkVisible($('#wm10'))) {
      $('[href="#wm10"]').parent('div').addClass('on');
    } else if (this.checkVisible($('#wm11'))) {
      $('[href="#wm11"]').parent('div').addClass('on');
    } else if (this.checkVisible($('#wm12'))) {
      $('[href="#wm12"]').parent('div').addClass('on');
    } else if (this.checkVisible($('#wm13'))) {
      $('[href="#wm13"]').parent('div').addClass('on');
    } else if (this.checkVisible($('#wm14'))) {
      $('[href="#wm14"]').parent('div').addClass('on');
    }
  },

  checkVisible: function (elm, eval) {
      eval = eval || 'object visible';
      let viewportHeight = $(window).height(); // Viewport Height
      let scrolltop = $(window).scrollTop(); // Scroll Top
      let y;
      try {
          y = $(elm).offset().top;
      } catch (e) {
          y = $(window).height();
      }

      let elementHeight = $(elm).height();

      if (eval == 'object visible') return y < viewportHeight + scrolltop  && y > scrolltop - elementHeight + 63;
      if (eval == 'above') return y < viewportHeight + scrolltop;
  },
};

$(document).ready(function(){

  let winWidth = window.innerWidth || document.documentElement.clientWidth;
  let lastScrollTop = 0;
  let btnH = $('.detailBtns').height();
  let floatingH = $('.floating').height();
  let wholeTopH = $('.wholeMenuTop').outerHeight(true)
  $('.detailBtns').css('bottom', floatingH);
  $(window).on('scroll',function(event){
    winWidth = window.innerWidth || document.documentElement.clientWidth;
    let scroll = $(this).scrollTop();
    floatingH = $('.floating').height();
    if(scroll > 0){
      $('#divHeader').addClass('fix');
      if($('#divContents').hasClass('up')){
        $('#divContents').addClass('on');
      }
    }else{
      $('#divHeader').removeClass('fix');
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

  $('.wholeMenu').on('scroll',function(){
    scroll = $(this).scrollTop();
    wholeTopH = $('.wholeMenuTop').outerHeight(true)
    $('.wholeMenuNav .tab').removeClass('strong');
    if(scroll > wholeTopH + 16){
      $('.wholeMenuNav').addClass('fix');
      $('.wholeMenuList').addClass('on');
    }else{
      $('.wholeMenuNav').removeClass('fix');
      $('.wholeMenuList').removeClass('on');
    }
  });

  $(window).on('resize',function(){
    winWidth = window.innerWidth || document.documentElement.clientWidth;
    if(winWidth > 767){
      $('.floating .menu>li.foreign a').css('margin-top',-32)
    }else{
      $('.floating .menu>li.foreign a').css('margin-top',-10)
    }
  });

  let tabSlide = new Swiper('#divTabMenu .inner',{
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

//상세검색
$('.detailSearchBtn').click(function(e){
  e.preventDefault();
  $('.detailSearch').slideDown();
});
$('.detailSearchClose').click(function(e){
  e.preventDefault();
  $('.detailSearch').hide();
});
let detailShTab = new Swiper('.detailShTab .inner',{
  slidesPerView:'auto',
  spaceBetween: 0,
  freeMode: true,
});

$('.detailShTab .toggleBtn').click(function(){
  if($(this).hasClass('on')){
    $(this).removeClass('on');
    $('.detailShTab').removeClass('all');
    detailShTab = new Swiper('.detailShTab .inner',{
      slidesPerView:'auto',
      spaceBetween: 0,
      freeMode: true,
    });
  }else{ 
    $(this).addClass('on');
    $('.detailShTab').addClass('all')
    detailShTab.destroy();
    
  }
  return false;
});
$('.detailShTab a').click(function(e){
  e.preventDefault();
  $('.detailShTab .tab').removeClass('on')
  $(this).parent().addClass('on')
  $('.detailShTabCont').hide();
  $('.detailShTabCont').eq($(this).parent().index()).show();
});

$('.detailShInput>ul>li:nth-of-type(3) .addInput').click(function(e){
  e.preventDefault();
  $(this).hide();
  $(this).prev('.selType3').show();
  $('.detailShInput>ul>li').eq(3).show();
});
$('.detailShInput>ul>li:nth-of-type(4) .addInput').click(function(e){
  e.preventDefault();
  $(this).hide();
  $(this).prev('.selType3').show();
  $('.detailShInput>ul>li').eq(4).show();
}); 


//wholeMenu
$('.allMenu>a').click(function(e){
  e.preventDefault();
  $('.blackBg1').show();
  $('.wholeMenu').addClass('on');
});
$('.wholeMenuClose').click(function(e){
  e.preventDefault();
  $('.blackBg1').hide();
  $('.wholeMenu').removeClass('on');
});
let wholeMenuNav = new Swiper('.wholeMenuNav .inner',{
  slidesPerView:'auto',
  spaceBetween: 0,
  freeMode: true,
});


$('.wholeMenuNav .tab>a').click(function(){
  let i1 = $(this).parent().index();
  $('.wholeMenuNav .tab').removeClass('on');
  $('.wholeMenuNav .tab').addClass('strong');
  $(this).parent().addClass('on');
  $(this).parent().removeClass('strong');
  wholeMenuNav.slideTo(i1);

});

  wholeUtil.init();
});    