$(document).ready(function(){

  //검색목록 시작

  //검색 셀렉트박스 말줄임표시
  // $('.setArrow1 option').each(function(){
  //   let length = 4; //표시할 글자 수 정하기
  
  // $(this).each(function(){
  //   if($(this).text().length > length){
  //     $(this).text($(this).text().substr(0, length) + '...'); //지정한 글자수 이후 표시할 텍스트 '...'
  //     }
  //   });
  // });


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

  //원문보기 팝업
  $('.viewOrigin').click(function(e){
    e.preventDefault();
    $('.blackBg1').show();
    $('.viewOriginPop').addClass('on');
    
  });

  $('.viewOriginPopClose').click(function(e){
    e.preventDefault();
    $('.blackBg1').hide();
    $('.viewOriginPop').removeClass('on');
    
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

  //강의보기 버튼
  $('.videoListPopBtn').click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on');
      $(this).parents('.btns').find('.videoListPop').stop().slideUp();
    }else{
      $(this).addClass('on')
      $(this).parents('.btns').find('.videoListPop').stop().slideDown();
    }
    return false;
  });


  //facet
  $('.facetBtn').click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on');
      $('.facet').removeClass('on');
    }else{
      $(this).addClass('on');
      $('.facet').addClass('on');
    }
    return false;
  });
  $('.facetClose').click(function(){
    $('.facetBtn').removeClass('on');
    $('.facet').removeClass('on');
    return false;
  });

  $('.facetList>li>a').click(function(){
    if($(this).parent().hasClass('on')){
      $(this).parent().removeClass('on');
      $(this).next('.listCont').slideUp()
    }else{
      $(this).parent().addClass('on');
      $(this).next('.listCont').slideDown()
    }
    return false;
  });

  $('.facetCont .facetList>li .listCont a.allToggleBtn').click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on');
      $(this).prev().removeClass('all')
    }else{
      $(this).addClass('on');
      $(this).prev().addClass('all')
    }
    return false;
  });

	$(document).on('click', '.facetCont .facetList .listCont>ul>li label', function() {
		if(!$(this).prev().is(":checked")==true){
			$('.btnAction').removeClass('on');
			$(this).parent().find('.btnAction').addClass('on');
      $(this).parent().addClass('on');
		} else {
			$(this).parent().find('.btnAction').removeClass('on');
      $(this).parent().removeClass('on');
		}
	});


	
	$(document).on('click', '.facetCont .facetList .listCont>ul>li input:checkbox', function() {
		if(!$(this).is(":checked")){
		$('.facetCont .facetList .listCont>ul>li input:checkbox').each(function(key, val) {
			if(val.checked) {
				$('.btnAction').removeClass('on');
				$(val).parent().find('.btnAction').addClass('on');
				return false;
			}
		});
		}
	});

  //학술지 패싯
  $('.thesisFacet .titArea .tit').click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on');
      $(this).parent().next('.thFacetCont').stop().slideUp();
    }else{
      $(this).addClass('on');
      $(this).parent().next('.thFacetCont').stop().slideDown();
    }
    return false;
  });
  
  $('.thShList .thShListBtn').click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on');
      $(this).parents('li').find('ul').slideUp();
    }else{
      $(this).addClass('on');
      $(this).parents('li').find('ul').slideDown();
    }
    return false;
  });


});    


