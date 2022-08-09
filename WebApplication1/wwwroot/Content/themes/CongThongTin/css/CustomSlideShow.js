var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    var iii;
    var slides = document.getElementsByClassName("mySlidesslide");
    var dots = document.getElementsByClassName("dotslide");
    for (iii = 0; iii < slides.length; iii++) {
        slides[iii].style.display = "none";
    }
    for (iii = 0; iii < dots.length; iii++) {
        dots[iii].className = dots[iii].className.replace(" activeslide", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " activeslide";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên
/*showSlides(slideIndex = 0);*/


function currentSlide(n) {
    showSlides(slideIndex = n);
}