$(document).ready(function ($) {
	"use strict";
	awe_backtotop();
	awe_owl();
	awe_category();
	awe_tab();


	$('.product-item-main .time').each(function(e){
		awe_countDown($(this));
	});

	$('.details-pro .wrap_time .time').each(function(e){
		awe_countDown2($(this));
	});




	if(navigator.userAgent.indexOf("Speed Insights") == -1) {
		awe_lazyloadImage();
	}

	
	
	//Lấy toàn bộ group trong hướng dẫn thủ tục  danh hiệu thi đua
	const listLI = document.querySelectorAll('.content-item');
    for(var i = 0; i < listLI.length; ++i){
		//Thêm event cho từng gr
   listLI[i].addEventListener('click',function(){
         openList(this)
   },false)
}
});

$(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
	awe_hidePopup('.awe-popup'); 	
	setTimeout(function(){
		$('.loading').removeClass('loaded-content');
	},500);
	return false;
	
})

/********************************************************
# Countdown
********************************************************/
function awe_countDown(selector){
	// Set the date we're counting down to
	// Kiểu thời gian đặt tag endtime_4/15/2018 15:10:00
	var dataTime = selector.attr('data-time');
	var countDownDate = new Date(dataTime).getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {
		// Get todays date and time
		var now = new Date().getTime();
		// Find the distance between now an the count down date
		var distance = countDownDate - now;
		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		// Display the result in the element
		selector.html("<span><i class='fa fa-bolt'></i> </span><span>"+days+"</span><span>ngày</span><span>"+hours+"</span>:<span>"+minutes+"</span>:<span>"+seconds+"</span>");
		// If the count down is finished, write some text



		if (distance < 0) {
			clearInterval(x);
			selector.html("<span>Hết hạn</span>");
		}
	}, 1000);
}

function awe_countDown2(selector){
	// Set the date we're counting down to
	// Kiểu thời gian đặt tag endtime_4/15/2018 15:10:00
	var dataTime = selector.attr('data-time');
	var countDownDate = new Date(dataTime).getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {
		// Get todays date and time
		var now = new Date().getTime();
		// Find the distance between now an the count down date
		var distance = countDownDate - now;
		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		// Display the result in the element
		selector.html("<span><i class='fa fa-clock-o'></i> Deal còn lại </span> <span>"+days+"</span><span>ngày</span><span>"+hours+"</span>:<span>"+minutes+"</span>:<span>"+seconds+"</span>");
		// If the count down is finished, write some text



		if (distance < 0) {
			clearInterval(x);
			selector.html("<span>Hết hạn</span>");
		}
	}, 1000);
}


/**************** Function probar *********************/



/********************************************************
	# LazyLoad
	********************************************************/
function awe_lazyloadImage() {
	var i = $("[data-lazyload]");
	i.length > 0 && i.each(function() {
		var i = $(this), e = i.attr("data-lazyload");
		i.appear(function() {
			i.removeAttr("height").attr("src", e);
		}, {
			accX: 0,
			accY: 120
		}, "easeInCubic");
	});
	var e = $("[data-lazyload2]");
	e.length > 0 && e.each(function() {
		var i = $(this), e = i.attr("data-lazyload2");
		i.appear(function() {
			i.css("background-image", "url(" + e + ")");
		}, {
			accX: 0,
			accY: 120
		}, "easeInCubic");
	});
} window.awe_lazyloadImage=awe_lazyloadImage;




/********************************************************
# SHOW NOITICE
********************************************************/
function awe_showNoitice(selector) {
	$(selector).animate({right: '0'}, 500);
	setTimeout(function() {
		$(selector).animate({right: '-300px'}, 500);
	}, 3500);
}  window.awe_showNoitice=awe_showNoitice;

/********************************************************
# SHOW LOADING
********************************************************/
function awe_showLoading(selector) {
	var loading = $('.loader').html();
	$(selector).addClass("loading").append(loading); 
}  window.awe_showLoading=awe_showLoading;

/********************************************************
# HIDE LOADING
********************************************************/
function awe_hideLoading(selector) {
	$(selector).removeClass("loading"); 
	$(selector + ' .loading-icon').remove();
}  window.awe_hideLoading=awe_hideLoading;

/********************************************************
# SHOW POPUP
********************************************************/
function awe_showPopup(selector) {
	$(selector).addClass('active');
}  window.awe_showPopup=awe_showPopup;

/********************************************************
# HIDE POPUP
********************************************************/
function awe_hidePopup(selector) {
	$(selector).removeClass('active');
}  window.awe_hidePopup=awe_hidePopup;

/********************************************************
# CONVERT VIETNAMESE
********************************************************/
function awe_convertVietnamese(str) { 
	str= str.toLowerCase();
	str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ặ|ắ|ẵ|ẳ/g,"a"); 
	str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
	str= str.replace(/ì|í|ị|ỉ|ĩ|ì|í|ị|ỉ|ĩ|ì||ị|i/g,"i"); 
	str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ở|ỡ|ợ/g,"o"); 
	str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ừ/g,"u"); 
	str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ|ỳ|ý|ỵ|ỹ|y/g,"y"); 
	str= str.replace(/đ|đ/g,"d"); 
	str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
	str= str.replace(/-+-/g,"-");
	str= str.replace(/^\-+|\-+$/g,""); 
	return str; 
} window.awe_convertVietnamese=awe_convertVietnamese;


/********************************************************
# SIDEBAR CATEOGRY
********************************************************/
function awe_category(){
	$('.nav-category .fa-angle-down').click(function(e){
		$(this).parent().toggleClass('active');
	});
} window.awe_category=awe_category;

/********************************************************
# MENU MOBILE
********************************************************/
function awe_menumobile(){


} window.awe_menumobile=awe_menumobile;

/********************************************************
# ACCORDION
********************************************************/
function awe_accordion(){
	$('.accordion .nav-link').click(function(e){
		e.preventDefault;
		$(this).parent().toggleClass('active');
	})
} window.awe_accordion=awe_accordion;

/********************************************************
# OWL CAROUSEL
********************************************************/
function awe_owl() { 
	$('.owl-carousel:not(.not-dqowl)').each( function(){
		var xs_item = $(this).attr('data-xs-items');
		var md_item = $(this).attr('data-md-items');
		var lg_item = $(this).attr('data-lg-items');
		var sm_item = $(this).attr('data-sm-items');	
		var margin=$(this).attr('data-margin');
		var dot=$(this).attr('data-dot');
		var nav=$(this).attr('data-nav');
		var height=$(this).attr('data-height');
		var play=$(this).attr('data-play');
		var loop=$(this).attr('data-loop');
		if (typeof margin !== typeof undefined && margin !== false) {    
		} else{
			margin = 30;
		}
		if (typeof xs_item !== typeof undefined && xs_item !== false) {    
		} else{
			xs_item = 1;
		}
		if (typeof sm_item !== typeof undefined && sm_item !== false) {    

		} else{
			sm_item = 3;
		}	
		if (typeof md_item !== typeof undefined && md_item !== false) {    
		} else{
			md_item = 3;
		}
		if (typeof lg_item !== typeof undefined && lg_item !== false) {    
		} else{
			lg_item = 3;
		}
		if (typeof dot !== typeof undefined && dot !== true) {   
			dot= true;
		} else{
			dot = false;
		}
		$(this).owlCarousel({
			loop:loop,
			margin:Number(margin),
			responsiveClass:true,
			dots:dot,
			nav:nav,
			autoplay:play,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			autoHeight:false,
			responsive:{
				0:{
					items:Number(xs_item)				
				},
				600:{
					items:Number(sm_item)				
				},
				1000:{
					items:Number(md_item)				
				},
				1200:{
					items:Number(lg_item)				
				}
			}
		})
	})
} window.awe_owl=awe_owl;

/********************************************************
# BACKTOTOP
********************************************************/
function awe_backtotop() { 
	if ($('#back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
} window.awe_backtotop=awe_backtotop;

/********************************************************
# TAB
********************************************************/
function awe_tab() {
	$(".e-tabs:not(.not-dqtab)").each( function(){
		$(this).find('.tabs-title li:first-child').addClass('current');
		$(this).find('.tab-content').first().addClass('current');

		$(this).find('.tabs-title li').click(function(){
			var tab_id = $(this).attr('data-tab');
			var url = $(this).attr('data-url');
			$(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
			$(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
			$(this).closest('.e-tabs').find('.tab-content').removeClass('current');
			$(this).addClass('current');
			$(this).closest('.e-tabs').find("#"+tab_id).addClass('current');
		});    
	});
} window.awe_tab=awe_tab;


/**Tab click mobile*/
$(".not-tab").each( function(e){
	/*khai báo cho chức năng dành cho mobile tab*/
	var _this = $(this).find('.wrap_tab .button_show_tab');
	var droptab = $(this).find('.link_tab_check_click');
	$(_this).click(function(){ 
		if ($(droptab).hasClass('opensit')) {
			$(droptab).addClass('closeit').removeClass('opensit');
		}else {
			$(droptab).addClass('opensit').removeClass('closeit');
		}
	});
});


/********************************************************
# DROPDOWN
********************************************************/
$('.dropdown-toggle').click(function() {
	$(this).parent().toggleClass('open'); 	
}); 
$('.btn-close').click(function() {
	$(this).parents('.dropdown').toggleClass('open');
}); 
$('body').click(function(event) {
	if (!$(event.target).closest('.dropdown').length) {
		$('.dropdown').removeClass('open');
	};
});





/************************************/
/*Show hide Recoverpass*/
$('.recv-text #rcv-pass').click(function(){
	$('.form_recover_').slideToggle('500');
});
/*End*/

$('a.btn-support').click(function(e){
	e.stopPropagation();
	$('.support-content').slideToggle();
});
$('.support-content').click(function(e){
	e.stopPropagation();
});
$(document).click(function(){
	$('.support-content').slideUp();
});
/*dang ky*/
$(".accept_submit input").click(function() {
	if($(this).is(":checked"))
	{
		$('.button_register').removeAttr('disabled');
	}else {
		$('.button_register').attr('disabled', 'disabled');
	}
});



/***************************************/


$(document).ready(function(){
	var wDW = $(window).width();
	/*Footer*/
	if(wDW > 767){
		$('.toggle-mn').show();
	}else {
		$('.footer-click > .cliked').click(function(){
			$(this).toggleClass('open_');
			$(this).next('ul').slideToggle("fast");
			$(this).next('div').slideToggle("fast");
		});
	}
	if (wDW > 300) {
		$(".filter-group li span label").click(function(){
			$('.dqdt-sidebar').removeClass('openf');
			$('.open-filters').removeClass('openf');
			$('.opacity_filter').removeClass('opacity_filter_true');
		});
		$('.opacity_filter').click(function(e){
			$('.dqdt-sidebar').removeClass('openf');
			$('.open-filters').removeClass('openf');
			$('.opacity_filter').removeClass('opacity_filter_true');
		});
	}
	if (wDW > 992) {
		$(".button_clicked").click(function(){ 
			$('.search_pc').slideToggle('fast');
		})
	}
});
$('.cate_padding  li .fa').click(function() {
	$(this).closest('li').find('> ul').slideToggle("fast");
	$(this).closest('i').toggleClass('fa-caret-down fa-caret-up');
	return false;              
}); 
/*Open filter*/
$('.open-filters').click(function(e){
	e.stopPropagation();
	$(this).toggleClass('openf');
	$('.opacity_filter').toggleClass('opacity_filter_true');
	$('.dqdt-sidebar').toggleClass('openf');
});

/*Menu mobile*/
$('.menu-bar').click(function(e){
	e.stopPropagation();
	$('.menu_mobile').toggleClass('open_sidebar_menu');
	$('.opacity_menu').toggleClass('open_opacity');
});


$('.opacity_menu').click(function(e){
	$('.menu_mobile').removeClass('open_sidebar_menu');
	$('.opacity_menu').removeClass('open_opacity');
});
$('.ct-mobile li .ti-plus').click(function() {
	$(this).closest('li').find('> .sub-menu').slideToggle("fast");
	$(this).closest('i').toggleClass('show_open hide_close');
	return false;              
});







/*********************Login register modal **********************/
$(document).ready(function(){
	$('.op_login').click(function(e){
		$('.op_login').removeClass('op_login_true');
		$('.modal_dichvu').hide();
	});
	$('#closed_dichvu').on('click', function(e){
		e.preventDefault();
		$('.op_login').removeClass('op_login_true');
		$('.modal_dichvu').hide();
	});
	var test = $('.guilienhe_thanhcong').text();
	if (test != '') {
		$('#datlich_thanhcong').modal();
	}
});




$(window).on("load resize scroll",function(e){ 
	var wDW = $(window).width();
	setTimeout(function(){
		var get_height = $('.col_get_height').height(),
			bakground = $('.wrap_danhgia');

		$(bakground).css('min-height', get_height - '12');

	},500);



});
//Dropdown list when click
function openList(element){
    var thisElementChildList = element.childNodes;
    thisElementChildList[1].classList.toggle("content-list-enable")
}