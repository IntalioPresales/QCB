$(document).ready(function(e) {
	$('.scrollbar-dynamic').scrollbar();
	$('.menu-responsive-button').click(function(e){e.preventDefault();$('.menu-section').toggleClass('ma');});
	$('.search-section input').keyup(function(){
		if($.trim($(this).val())!=''){$(this).parent().addClass('ac');$('.search-section .search-summary').addClass('ac');$('.search-box a').removeClass('before-search');}
		else{$(this).parent().removeClass('ac');$('.search-section .search-summary').removeClass('ac');$('.search-box a').addClass('before-search');}
	});
	$('.search-box a').click(function(e){e.preventDefault();$('.search-section input').val('').keyup()});
	
	$('.tabs-links a').click(function(e){
		e.preventDefault();
		var ind = $(this).index();
		$('.tabs-links a.ac').removeClass('ac');
		$(this).addClass('ac');
		$('.tab-section.ac').fadeOut("300", function(){$(this).removeClass('ac');});
		$('.tab-section:eq('+ind+')').fadeIn("300", function(){$(this).addClass('ac');});
	});
});
