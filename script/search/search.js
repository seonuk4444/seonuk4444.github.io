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
  $('body').click(function(e){
    if(!$('.facet').has(e.target).length){
        $('.facet').removeClass('on');
        $('.facetBtn').removeClass('on');
    }
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


});    