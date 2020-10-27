$(function(){

    
    // NEW BOOKS bxSlider
    $('.main_banner_bx').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        auto: true,
        pager: true,
        controls: false,
        slideWidth: 1097,
        touchEnabled : (navigator.maxTouchPoints > 0),
        moveSlides: 1,
        slideMargin: 0
    });

    $('.main_new_bx').bxSlider({
        minSlides: 3,
        maxSlides: 6,
        auto: false,
        pager: false,
        controls: false,
        slideWidth: 200,
        touchEnabled : (navigator.maxTouchPoints > 0),
        moveSlides: 3,
        slideMargin: 10
    });

    $('.main_kbs1_slide').bxSlider({
        minSlides: 3,
        maxSlides: 5,
        auto: false,
        pager: false,
        controls: false,
        slideWidth: 200,
        touchEnabled : (navigator.maxTouchPoints > 0),
        moveSlides: 3,
        slideMargin: 10
    });

    $('.main_kbs2_slide').bxSlider({
        minSlides: 3,
        maxSlides: 8,
        auto: false,
        pager: false,
        controls: false,
        slideWidth: 200,
        touchEnabled : (navigator.maxTouchPoints > 0),
        moveSlides: 3,
        slideMargin: 10
    });

    $('.main_kbs3_slide').bxSlider({
        minSlides: 3,
        maxSlides: 12,
        auto: false,
        pager: false,
        controls: false,
        slideWidth: 200,
        touchEnabled : (navigator.maxTouchPoints > 0),
        moveSlides: 3,
        slideMargin: 10
    });

    $('.main_kbs4_slide').bxSlider({
        minSlides: 3,
        maxSlides: 12,
        auto: false,
        pager: false,
        controls: false,
        slideWidth: 200,
        touchEnabled : (navigator.maxTouchPoints > 0),
        moveSlides: 3,
        slideMargin: 10
    });

    $('.main_kbs5_slide').bxSlider({
        minSlides: 3,
        maxSlides: 12,
        auto: false,
        pager: false,
        controls: false,
        slideWidth: 200,
        touchEnabled : (navigator.maxTouchPoints > 0),
        moveSlides: 3,
        slideMargin: 10
    });

    $('.main_kbs_child_slide').bxSlider({
        minSlides: 3,
        maxSlides: 12,
        auto: false,
        pager: false,
        controls: false,
        slideWidth: 200,
        touchEnabled : (navigator.maxTouchPoints > 0),
        moveSlides: 3,
        slideMargin: 10
    });


});

// temp = location.href.split("?");
// data = temp[1];

// user_id = decodeURIComponent(data); //디코딩

// document.getElementById("id_name").innerHTML = user_id;