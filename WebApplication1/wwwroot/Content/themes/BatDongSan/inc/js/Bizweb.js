﻿Bizweb.updateCartFromForm = function (cart, cart_summary_id, cart_count_id) {
	if ((typeof cart_summary_id) === 'string') {
		var cart_summary = jQuery(cart_summary_id);
		if (cart_summary.length) {
			// Start from scratch.
			cart_summary.empty();
			// Pull it all out.
			jQuery.each(cart, function (key, value) {
				if (key === 'items') {

					var table = jQuery(cart_summary_id);
					if (value.length) {
						jQuery('<ul class="list-item-cart"></ul>').appendTo(table);
						jQuery.each(value, function (i, item) {
							var buttonQty = "";
							if (item.quantity == '1') {
								buttonQty = 'disabled';
							} else {
								buttonQty = '';
							}
							var link_img0 = Bizweb.resizeImage(item.image, 'compact');
							if (link_img0 == "null" || link_img0 == '' || link_img0 == null) {
								link_img0 = 'https://bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif';
							}
							jQuery('<li class="item productid-' + item.variant_id + '"><div class="border_list"><a class="product-image" href="' + item.url + '" title="' + item.name + '">'
								+ '<img alt="' + item.name + '" src="' + link_img0 + '"width="' + '100' + '"\></a>'
								+ '<div class="detail-item"><div class="product-details">'
								+ '<p class="product-name"> <a class="text2line" href="' + item.url + '" title="' + item.name + '">' + item.name + '</a></p></div>'
								+ '<div class="product-details-bottom"><span class="price">' + Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span><a href="javascript:;" data-id="' + item.variant_id + '" title="Xóa" class="remove-item-cart fa fa-trash">&nbsp;</a>'
								+ '<div class="quantity-select qty_drop_cart"><input class="variantID" type="hidden" name="variantId" value="' + item.variant_id + '"><button onClick="var result = document.getElementById(\'qty' + item.variant_id + '\'); var qty' + item.variant_id + ' = result.value; if( !isNaN( qty' + item.variant_id + ' ) &amp;&amp; qty' + item.variant_id + ' &gt; 1 ) result.value--;return false;" class=" btn_reduced reduced items-count btn-minus" ' + buttonQty + ' type="button">–</button><input type="text" maxlength="3" min="1" readonly class="input-text number-sidebar qty' + item.variant_id + '" id="qty' + item.variant_id + '" name="Lines" id="updates_' + item.variant_id + '" size="4" value="' + item.quantity + '"><button onClick="var result = document.getElementById(\'qty' + item.variant_id + '\'); var qty' + item.variant_id + ' = result.value; if( !isNaN( qty' + item.variant_id + ' )) result.value++;return false;" class="btn_increase increase items-count btn-plus" type="button">+</button></div></div></div></li>').appendTo(table.children('.list-item-cart'));
						});
						jQuery('<div class="pd"><div class="top-subtotal">Tổng tiền: <span class="price price_big">' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span></div></div>').appendTo(table);
						jQuery('<div class="pd right_ct"><a href="/checkout" class="btn btn-primary"><span>Tiến hành thanh toán</span></a><a href="/cart" class="btn btn-white hidden"><span>Đi đến giỏ hàng</span></a></div>').appendTo(table);
					}
					else {
						jQuery('<div class="no-item"><p>Không có sản phẩm nào.</p></div>').appendTo(table);

					}
				}
			});
		}
	}
	updateCartDesc(cart);
	var numInput = document.querySelector('#cart-sidebar input.input-text');
	if (numInput != null) {
		// Listen for input event on numInput.
		numInput.addEventListener('input', function () {
			// Let's match only digits.
			var num = this.value.match(/^\d+$/);
			if (num == 0) {
				// If we have no match, value will be empty.
				this.value = 1;
			}
			if (num === null) {
				// If we have no match, value will be empty.
				this.value = "";
			}
		}, false)
	}
}

Bizweb.updateCartPageForm = function (cart, cart_summary_id, cart_count_id) {
	if ((typeof cart_summary_id) === 'string') {
		var cart_summary = jQuery(cart_summary_id);
		if (cart_summary.length) {
			// Start from scratch.
			cart_summary.empty();
			// Pull it all out.
			jQuery.each(cart, function (key, value) {
				if (key === 'items') {
					var table = jQuery(cart_summary_id);
					if (value.length) {

						var pageCart = '<div class="cart page_cart hidden-xs hidden-sm">'
							+ '<form action="/cart" method="post" novalidate class="margin-bottom-0"><div class="bg-scroll"><div class="cart-thead">'
							+ '<div style="width: 18%" class="a-center">Hình ảnh</div><div style="width: 32%" class="a-center">Tên sản phẩm</div><div style="width: 17%" class="a-center"><span class="nobr">Đơn giá</span></div><div style="width: 14%" class="a-center">Số lượng</div><div style="width: 14%" class="a-center">Thành tiền</div><div style="width: 5%" class="a-center">Xoá</div></div>'
							+ '<div class="cart-tbody"></div></div></form></div>';
						var pageCartCheckout = '<div class="row margin-top-20  margin-bottom-40"><div class="col-lg-7 col-md-7"><div class="form-cart-button"><div class=""><a href="/" class="form-cart-continue">Tiếp tục mua hàng</a></div></div></div>'
							+ '<div class="col-lg-5 col-md-5 bg_cart shopping-cart-table-total"><div class="table-total"><table class="table ">'
							+ '<tr><td class="total-text">Tổng tiền thanh toán</td><td class="txt-right totals_price price_end">' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '</td></tr></table></div>'
							+ '<a onclick="window.location.href=\'/checkout\'" class="btn-checkout-cart button_checkfor_buy">Thanh toán</a></div></div>';
						jQuery(pageCart).appendTo(table);
						jQuery.each(value, function (i, item) {
							var buttonQty = "";
							if (item.quantity == '1') {
								buttonQty = 'disabled';
							} else {
								buttonQty = '';
							}
							var link_img1 = Bizweb.resizeImage(item.image, 'compact');
							if (link_img1 == "null" || link_img1 == '' || link_img1 == null) {
								link_img1 = 'https://bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif';
							}
							var pageCartItem = '<div class="item-cart productid-' + item.variant_id + '"><div style="width: 18%" class="image"><a class="product-image" title="' + item.name + '" href="' + item.url + '"><img width="75" height="auto" alt="' + item.name + '" src="' + link_img1 + '"></a></div>'
								+ '<div style="width: 32%" class="a-center"><h3 class="product-name"> <a class="text2line" href="' + item.url + '" title="' + item.name + '">' + item.title + '</a> </h3><span class="variant-title">' + item.variant_title + '</span>'
								+ '</div><div style="width: 17%" class="a-center"><span class="item-price"> <span class="price">' + Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span></span></div>'
								+ '<div style="width: 14%" class="a-center"><div class="input_qty_pr"><input class="variantID" type="hidden" name="variantId" value="' + item.variant_id + '">'
								+ '<input type="text" maxlength="3" readonly min="0" class="check_number_here input-text number-sidebar input_pop input_pop qtyItem' + item.variant_id + '" id="qtyItem' + item.variant_id + '" name="Lines" id="updates_' + item.variant_id + '" size="4" value="' + item.quantity + '">'
								+ '<button onClick="var result = document.getElementById(\'qtyItem' + item.variant_id + '\'); var qtyItem' + item.variant_id + ' = result.value; if( !isNaN( qtyItem' + item.variant_id + ' )) result.value++;return false;" class="increase_pop items-count btn-plus" type="button"><i class="fas fa-plus"></i></button><button onClick="var result = document.getElementById(\'qtyItem' + item.variant_id + '\'); var qtyItem' + item.variant_id + ' = result.value; if( !isNaN( qtyItem' + item.variant_id + ' ) &amp;&amp; qtyItem' + item.variant_id + ' &gt; 1 ) result.value--;return false;" ' + buttonQty + ' class="reduced_pop items-count btn-minus" type="button"><i class="fas fa-minus"></i></button></div></div>'
								+ '<div style="width: 14%" class="a-center"><span class="cart-price"> <span class="price">' + Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫") + '</span> </span></div>'
								+ '<div style="width: 5%" class="a-center">'
								+ '<a class="remove-itemx remove-item-cart" title="Xóa" href="javascript:;" data-id="' + item.variant_id + '"><span><i class="fa fa-times"></i></span></a>'
								+ '</div>'
								+ '</div>';
							jQuery(pageCartItem).appendTo(table.find('.cart-tbody'));
							if (item.variant_title == 'Default Title') {
								$('.variant-title').hide();
							}
						});
						jQuery(pageCartCheckout).appendTo(table.children('.cart'));
					} else {
						jQuery('<p class="hidden-xs-down ">Không có sản phẩm nào. Quay lại <a href="/collections/all" style="color:;">cửa hàng</a> để tiếp tục mua sắm.</p>').appendTo(table);
						jQuery('.cart_desktop_page').css('min-height', 'auto');
					}
				}
			});
		}
	}
	updateCartDesc(cart);
	jQuery('#wait').hide();

}
Bizweb.updateCartPopupForm = function (cart, cart_summary_id, cart_count_id) {

	if ((typeof cart_summary_id) === 'string') {
		var cart_summary = jQuery(cart_summary_id);
		if (cart_summary.length) {
			// Start from scratch.
			cart_summary.empty();
			// Pull it all out.
			jQuery.each(cart, function (key, value) {
				if (key === 'items') {
					var table = jQuery(cart_summary_id);
					if (value.length) {
						jQuery.each(value, function (i, item) {
							var src = item.image;
							if (src == null) {
								src = "https://bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif";
							}
							var buttonQty = "";
							if (item.quantity == '1') {
								buttonQty = 'disabled';
							} else {
								buttonQty = '';
							}
							var pageCartItem = '<div class="item-popup productid-' + item.variant_id + '">'
								+ '<div style="width: 13%;" class="border height image_ text-left"><div class="item-image">'
								+ '<a class="product-image" href="' + item.url + '" title="' + item.name + '"><img alt="' + item.name + '" src="' + src + '"width="' + '90' + '"\></a>'
								+ '</div></div>'
								+ '<div style="width:35.8%;" class="height text-left fix_info"><div class="item-info"><p class="item-name"><a class="text2line textlinefix" href="' + item.url + '" title="' + item.name + '">' + item.title + '</a></p>'
								+ '<span class="variant-title-popup">' + item.variant_title + '</span>'
								+ '<a href="javascript:;" class="remove-item-cart" title="Xóa" data-id="' + item.variant_id + '"><i class="fa fa-close"></i>&nbsp;&nbsp;Bỏ sản phẩm</a>'
								+ '<p class="addpass" style="color:#fff;margin:0px;">' + item.variant_id + '</p>'
								+ '</div></div>'
								+ '<div style="width: 19.9%;" class="border height text-center"><div class="item-price"><span class="price">' + Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span>'
								+ '</div></div><div style="width: 15.1%;" class="border height text-center"><div class="qty_h check_"><input class="variantID" type="hidden" name="variantId" value="' + item.variant_id + '">'
								+ '<button onClick="var result = document.getElementById(\'qtyItemP' + item.variant_id + '\'); var qtyItemP' + item.variant_id + ' = result.value; if( !isNaN( qtyItemP' + item.variant_id + ' ) &amp;&amp; qtyItemP' + item.variant_id + ' &gt; 1 ) result.value--;return false;" ' + buttonQty + ' class="num1 reduced items-count btn-minus" type="button">-</button>'
								+ '<input type="text" maxlength="3" min="0" readonly class="input-text number-sidebar qtyItemP' + item.variant_id + '" id="qtyItemP' + item.variant_id + '" name="Lines" id="updates_' + item.variant_id + '" size="4" value="' + item.quantity + '">'
								+ '<button onClick="var result = document.getElementById(\'qtyItemP' + item.variant_id + '\'); var qtyItemP' + item.variant_id + ' = result.value; if( !isNaN( qtyItemP' + item.variant_id + ' )) result.value++;return false;" class="num2 increase items-count btn-plus" type="button">+</button></div></div>'
								+ '<div style="width: 16.2%;" class="border height text-center"><span class="cart-price"> <span class="price">' + Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫") + '</span> </span></div>'
								+ '</div>';
							jQuery(pageCartItem).appendTo(table);
							if (item.variant_title == 'Default Title') {
								$('.variant-title-popup').hide();
							}
							$('.link_product').text();
						});
					}
				}
			});
		}
	}
	jQuery('.total-price').html(Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫"));

	updateCartDesc(cart);

}
Bizweb.updateCartPageFormMobile = function (cart, cart_summary_id, cart_count_id) {
	if ((typeof cart_summary_id) === 'string') {
		var cart_summary = jQuery(cart_summary_id);
		if (cart_summary.length) {
			// Start from scratch.
			cart_summary.empty();
			// Pull it all out.
			jQuery.each(cart, function (key, value) {
				if (key === 'items') {

					var table = jQuery(cart_summary_id);
					if (value.length) {
						jQuery('<div class="cart_page_mobile content-product-list"></div>').appendTo(table);
						jQuery.each(value, function (i, item) {
							if (item.image != null) {
								var src = Bizweb.resizeImage(item.image, 'compact');
							} else {
								var src = "https://bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif";
							}
							jQuery('<div class="item-product item productid-' + item.variant_id + ' "><div class="item-product-cart-mobile"><a href="' + item.url + '">	<a class="product-images1" href=""  title="' + item.name + '"><img width="80" height="150" src="' + src + '" alt="' + item.name + '"></a></a></div>'
								+ '<div class="title-product-cart-mobile"><h3><a href="' + item.url + '" title="' + item.name + '">' + item.name + '</a></h3><p>Giá: <span>' + Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span></p></div>'
								+ '<div class="select-item-qty-mobile"><div class="txt_center">'
								+ '<input class="variantID" type="hidden" name="variantId" value="' + item.variant_id + '"><button onClick="var result = document.getElementById(\'qtyMobile' + item.variant_id + '\'); var qtyMobile' + item.variant_id + ' = result.value; if( !isNaN( qtyMobile' + item.variant_id + ' ) &amp;&amp; qtyMobile' + item.variant_id + ' &gt; 1 ) result.value--;return false;" class="reduced items-count btn-minus" type="button"><i class="fas fa-minus"></i></button><input type="text" maxlength="3" min="1" class="input-text number-sidebar qtyMobile' + item.variant_id + '" id="qtyMobile' + item.variant_id + '" name="Lines" id="updates_' + item.variant_id + '" size="4" value="' + item.quantity + '"><button onClick="var result = document.getElementById(\'qtyMobile' + item.variant_id + '\'); var qtyMobile' + item.variant_id + ' = result.value; if( !isNaN( qtyMobile' + item.variant_id + ' )) result.value++;return false;" class="increase items-count btn-plus" type="button"><i class="fas fa-plus"></i></button></div>'
								+ '<a class="button remove-item remove-item-cart" href="javascript:;" data-id="' + item.variant_id + '">Xoá</a></div>').appendTo(table.children('.content-product-list'));

						});

						jQuery('<div class="header-cart-price" style=""><div class="title-cart"><h3 class="text-xs-left">Tổng tiền</h3><a class="text-xs-right pull-right totals_price_mobile">' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '</a></div>'
							+ '<div class="checkout"><button class="btn-proceed-checkout-mobile" title="Tiến hành thanh toán" type="button" onclick="window.location.href=\'/checkout\'">'
							+ '<span>Tiến hành thanh toán</span></button>'
							+ '<button class="btn btn-white f-left" title="Tiếp tục mua hàng" type="button" onclick="window.location.href=\'/collections/all\'"><span>Tiếp tục mua hàng</span></button>'
							+ '</div></div>').appendTo(table);
					}
				}
			});
		}
	}
	updateCartDesc(cart);
}


function updateCartDesc(data) {
	var $cartPrice = Bizweb.formatMoney(data.total_price, "{{amount_no_decimals_with_comma_separator}}₫"),
		$cartMobile = $('#header .cart-mobile .quantity-product'),
		$cartDesktop = $('.count_item_pr'),
		$cartDesktopList = $('.cart-counter-list'),
		$cartPopup = $('.cart-popup-count');

	switch (data.item_count) {
		case 0:
			$cartMobile.text('0');
			$cartDesktop.text('0');
			$cartDesktopList.text('0');
			$cartPopup.text('0');

			break;
		case 1:
			$cartMobile.text('1');
			$cartDesktop.text('1');
			$cartDesktopList.text('1');
			$cartPopup.text('1');

			break;
		default:
			$cartMobile.text(data.item_count);
			$cartDesktop.text(data.item_count);
			$cartDesktopList.text(data.item_count);
			$cartPopup.text(data.item_count);

			break;
	}
	$('.top-cart-content .top-subtotal .price, aside.sidebar .block-cart .subtotal .price, .popup-total .total-price').html($cartPrice);
	$('.popup-total .total-price').html($cartPrice);
	$('.shopping-cart-table-total .totals_price').html($cartPrice);
	$('.header-cart-price .totals_price_mobile').html($cartPrice);
	$('.cartCount').html(data.item_count);
}

Bizweb.onCartUpdate = function (cart) {
	Bizweb.updateCartFromForm(cart, '.mini-products-list');
	Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup');

};
Bizweb.onCartUpdateClick = function (cart, variantId) {
	jQuery.each(cart, function (key, value) {
		if (key === 'items') {
			jQuery.each(value, function (i, item) {
				if (item.variant_id == variantId) {
					$('.productid-' + variantId).find('.cart-price span.price').html(Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫"));
					$('.productid-' + variantId).find('.items-count').prop("disabled", false);
					$('.productid-' + variantId).find('.number-sidebar').prop("disabled", false);
					$('.productid-' + variantId + ' .number-sidebar').val(item.quantity);
					if (item.quantity == '1') {
						$('.productid-' + variantId).find('.items-count.btn-minus').prop("disabled", true);
					}
				}
			});
		}
	});
	updateCartDesc(cart);
}
Bizweb.onCartRemoveClick = function (cart, variantId) {
	jQuery.each(cart, function (key, value) {
		if (key === 'items') {
			jQuery.each(value, function (i, item) {
				if (item.variant_id == variantId) {
					$('.productid-' + variantId).remove();
				}
			});
		}
	});
	updateCartDesc(cart);
}
$(window).ready(function () {

	$.ajax({
		type: 'GET',
		url: '/cart.js',
		async: false,
		cache: false,
		dataType: 'json',
		success: function (cart) {
			Bizweb.updateCartFromForm(cart, '.mini-products-list');
			Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup');

		}
	});
});
