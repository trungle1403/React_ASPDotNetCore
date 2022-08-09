/**
 * Look under your chair! console.log FOR EVERYONE!
 *
 * @see http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
 */
(function (b) { function c() { } for (var d = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","), a; a = d.pop();) { b[a] = b[a] || c } })((function () {
	try { console.log(); return window.console; } catch (err) { return window.console = {}; }
})());

/**
 * Page-specific call-backs
 * Called after dom has loaded.
 */
var GLOBAL = {
	common: {
		init: function () {
			$('.add_to_cart').bind('click', addToCart);
		}
	},

	templateIndex: {
		init: function () {

		}
	},

	templateProduct: {
		init: function () {

		}
	},

	templateCart: {
		init: function () {

		}
	}

}
var UTIL = {
	fire: function (func, funcname, args) {
		var namespace = GLOBAL;
		funcname = (funcname === undefined) ? 'init' : funcname;
		if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function') {
			namespace[func][funcname](args);
		}
	},

	loadEvents: function () {
		var bodyId = document.body.id;

		// hit up common first.
		UTIL.fire('common');

		// do all the classes too.
		$.each(document.body.className.split(/\s+/), function (i, classnm) {
			UTIL.fire(classnm);
			UTIL.fire(classnm, bodyId);
		});
	}

};
$(document).ready(UTIL.loadEvents);
/**
 * Ajaxy add-to-cart
 */
Number.prototype.formatMoney = function (c, d, t) {
	var n = this,
		c = isNaN(c = Math.abs(c)) ? 2 : c,
		d = d == undefined ? "." : d,
		t = t == undefined ? "." : t,
		s = n < 0 ? "-" : "",
		i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
		j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
function addToCart(e) {
	if (typeof e !== 'undefined') e.preventDefault();
	var $this = $(this);
	var form = $this.parents('form');
	$.ajax({
		type: 'POST',
		url: '/cart/add.js',
		async: false,
		data: form.serialize(),
		dataType: 'json',
		error: addToCartFail,
		beforeSend: function () {
		},
		success: addToCartSuccess,
		cache: false
	});
}
function addToCartSuccess(jqXHR, textStatus, errorThrown) {

	$.ajax({
		type: 'GET',
		url: '/cart.js',
		async: false,
		cache: false,
		dataType: 'json',
		success: function (cart) {
			awe.hidePopup('.loading');

			$('#popupCartModal').html('');
			var src = Bizweb.resizeImage(jqXHR['image'], 'small');
			if (jqXHR['image'] == null) {
				var src = "//bizweb.dktcdn.net/thumb/1024x1024/assets/themes_support/noimage.gif";
			}
			var $popupMobile = '<div class="popup_overlay"></div>'
				+ '<div class="modal-dialog">'

				+ '<div class="modal-content">'
				+ '<button type="button" class="close" data-dismiss="modal" data-backdrop="false" aria-label="Close" style="position: relative; z-index: 9;"><span aria-hidden="true">Ă—</span></button>'
				+ '<div class="row row-noGutter"><div class="modal-left col-sm-6 col-lg-6 col-md-6">'
				+ '<h3 class="title"><i class="fa fa-check"></i> Sáº£n pháº©m vá»«a Ä‘Æ°á»£c thĂªm</h3>'

				+ '<div class="modal-body"><div class="media"><div class="media-left"><div class="thumb-1x1">'
				+ '<img src="' + src + '" alt="' + jqXHR['title'] + '"></div></div>'
				+ '<div class="media-body"><div class="product-title">' + jqXHR['name'] + '</div>'
				+ '<div class="product-new-price"><span>' + (jqXHR['price']).formatMoney(0) + 'Ä‘</span></div></div></div>'
				+ '</div>'
				+ '</div>'
				+ '<div class="modal-right col-sm-6 col-lg-6 col-md-6">'
				+ '<h3 class="title right_title"><a href="/cart"><i class="fa fa-shopping-bag"></i> Giá» hĂ ng <i>(<b class="cart-popup-count"></b>)</i> </a></h3>'
				+ '<div class="total_price"><span>Tá»•ng tiá»n: </span> <span class="">' + (cart.total_price).formatMoney(0) + 'Ä‘</span></div>'
				+ '<a href="/checkout" class="btn btn-primary checkout_button btn-full">Thanh toĂ¡n</a>'
				+ '</div>'
				+ '</div></div>';
			$('#popupCartModal').html($popupMobile);
			$('#popupCartModal').modal();
			Bizweb.updateCartFromForm(cart, '.top-cart-content .mini-products-list');
			Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup');
		}
	});




}
function addToCartFail(jqXHR, textStatus, errorThrown) {
	var response = $.parseJSON(jqXHR.responseText);
	var $info = '<div class="error">' + response.description + '</div>';
}
$(document).on('click', ".remove-item-cart", function () {
	var variantId = $(this).attr('data-id');
	removeItemCart(variantId);
});
$(document).on('click', ".items-count", function () {
	$(this).parent().children('.items-count').prop('disabled', true);
	var thisBtn = $(this);
	var variantId = $(this).parent().find('.variantID').val();
	var qty = $(this).parent().children('.number-sidebar').val();
	updateQuantity(qty, variantId);
});
$(document).on('change', ".number-sidebar", function () {
	var variantId = $(this).parent().children('.variantID').val();
	var qty = $(this).val();
	updateQuantity(qty, variantId);
});
function updateQuantity(qty, variantId) {
	var variantIdUpdate = variantId;
	$.ajax({
		type: "POST",
		url: "/cart/change.js",
		data: { "quantity": qty, "variantId": variantId },
		dataType: "json",
		success: function (cart, variantId) {
			Bizweb.onCartUpdateClick(cart, variantIdUpdate);
		},
		error: function (qty, variantId) {
			Bizweb.onError(qty, variantId)
		}
	})
}
function removeItemCart(variantId) {
	var variantIdRemove = variantId;
	$.ajax({
		type: "POST",
		url: "/cart/change.js",
		data: { "quantity": 0, "variantId": variantId },
		dataType: "json",
		success: function (cart, variantId) {
			Bizweb.onCartRemoveClick(cart, variantIdRemove);
			$('.productid-' + variantIdRemove).remove();
			if ($('.tbody-popup>div').length == '0') {
				$('#popup-cart').modal('hide');
			}
			if ($('.list-item-cart>li').length == '0') {
				$('.mini-products-list').html('<div class="no-item"><p>KhĂ´ng cĂ³ sáº£n pháº©m nĂ o.</p></div>');
			}
			if ($('.cart-tbody>div').length == '0') {
				$('.page_cart').remove();
				$('.header-cart-content').remove();
				$('.title_cart_pc').html('<p class="hidden-xs-down">KhĂ´ng cĂ³ sáº£n pháº©m nĂ o. Quay láº¡i <a href="/" style="color:;">cá»­a hĂ ng</a> Ä‘á»ƒ tiáº¿p tá»¥c mua sáº¯m.</p>');
				$('.title_cart_mobile').html('<p class="hidden-xs-down col-xs-12">KhĂ´ng cĂ³ sáº£n pháº©m nĂ o. Quay láº¡i <a href="/" style="color:;">cá»­a hĂ ng</a> Ä‘á»ƒ tiáº¿p tá»¥c mua sáº¯m.</p>');
			}
		},
		error: function (variantId, r) {
			Bizweb.onError(variantId, r)
		}
	})
}