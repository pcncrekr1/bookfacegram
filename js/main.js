$(function(){

    
    // NEW BOOKS bxSlider
    $('.main_banner_bx').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        auto: true,
        pager: true,
        controls: false,
        slideWidth: 1200,
        touchEnabled : (navigator.maxTouchPoints > 0),
        moveSlides: 1,
        slideMargin: 0
    });

    $('.main_new_bx').bxSlider({
        minSlides: 4,
        maxSlides: 6,
        auto: false,
        pager: false,
        controls: false,
        slideWidth: 1200,
        touchEnabled : (navigator.maxTouchPoints > 0),
        moveSlides: 1,
        slideMargin: 10
    });

    $('.main_kbs_bx').bxSlider({
        minSlides: 4,
        maxSlides: 6,
        auto: false,
        pager: false,
        controls: false,
        slideWidth: 1200,
        touchEnabled : (navigator.maxTouchPoints > 0),
        moveSlides: 1,
        slideMargin: 10
    });


    //hidden gnb toggle
    var menu_left = $(".menu_left");                            // 햄버거 버튼
    var gnb_hidden = $(".gnb_hidden");                          // 숨겨져 있는 gnb
    var hidden_cover = $(".hidden_cover");                      // 숨겨져있는 gnb의 투명 배경

    menu_left.click(function(){
        gnb_hidden.animate({'left': 0}, 400);                   // left -100% --> left 0 (나타나게 함)
        hidden_cover.css('left', 0);                            // left -100%; --> left 0 (나타나게 함)
        $('body').css('overflow-y', 'hidden');                  // 세로 스크롤 안되게 막음
        event.preventDefault();
    });
    hidden_cover.click(function(){
        gnb_hidden.animate({'left': '-' + 100 + '%'}, 400);     // left 0 --> left -100% (숨김)
        hidden_cover.css('left', '-' + 100 + '%');              // left 0 --> left -100% (숨김)
        $('body').css('overflow-y', 'scroll');                  // 세로 스크롤 되게 함
        $('body').css('overflow-x', 'hidden');                  // 가로 스크롤이 생겨서 추가함
    });

});

temp = location.href.split("?");
data = temp[1];

user_id = decodeURIComponent(data); //디코딩

document.getElementById("id_name").innerHTML = user_id;