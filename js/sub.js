$(function(){

    $('.store_banner_bx').bxSlider({
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


    // store tab show & hide
    var book_btn = $('.store_tab_menu ul li:first-child a');
    var camp_btn = $('.store_tab_menu ul li:nth-child(2) a');
    var test_btn = $('.store_tab_menu ul li:last-child a');
    var store_tab_content1 = $('.store_tab_content1');
    var store_tab_content2 = $('.store_tab_content2');
    var store_tab_content3 = $('.store_tab_content3');

    // 초기값 설정
    camp_btn.addClass("my_tab_menu_on");
    store_tab_content2.css("display", "block");

    book_btn.click(function(){
        book_btn.addClass('store_tab_menu_on');
        camp_btn.removeClass('store_tab_menu_on');
        test_btn.removeClass('store_tab_menu_on');
        store_tab_content1.css('display', 'block');
        store_tab_content2.css('display', 'none');
        store_tab_content3.css('display', 'none');
        
        event.preventDefault();
    });
    camp_btn.click(function(){
        book_btn.removeClass('store_tab_menu_on');
        camp_btn.addClass('store_tab_menu_on');
        test_btn.removeClass('store_tab_menu_on');
        store_tab_content1.css('display', 'none');
        store_tab_content2.css('display', 'block');
        store_tab_content3.css('display', 'none');

        event.preventDefault();
    });
    test_btn.click(function(){
        book_btn.removeClass('store_tab_menu_on');
        camp_btn.removeClass('store_tab_menu_on');
        test_btn.addClass('store_tab_menu_on');
        store_tab_content1.css('display', 'none');
        store_tab_content2.css('display', 'none');
        store_tab_content3.css('display', 'block');

        event.preventDefault();
    });



    // FAQ tab show & hide
    var service_btn = $('.faq_tab_menu a:first-child');
    var book_after_btn = $('.faq_tab_menu a:nth-child(2)');
    var member_btn = $('.faq_tab_menu a:nth-child(3)');
    var store_btn = $('.faq_tab_menu a:last-child');
    var faq_tab_content1 = $('.faq_tab_content1');
    var faq_tab_content2 = $('.faq_tab_content2');
    var faq_tab_content3 = $('.faq_tab_content3');
    var faq_tab_content4 = $('.faq_tab_content4');

    // 초기값 설정
    service_btn.addClass("faq_tab_active");
    faq_tab_content1.css("display", "block");

    service_btn.click(function(){
        service_btn.addClass('faq_tab_active');
        book_after_btn.removeClass('faq_tab_active');
        member_btn.removeClass('faq_tab_active');
        store_btn.removeClass('faq_tab_active');
        faq_tab_content1.css('display', 'block');
        faq_tab_content2.css('display', 'none');
        faq_tab_content3.css('display', 'none');
        faq_tab_content4.css('display', 'none');
        
        event.preventDefault();
    });
    book_after_btn.click(function(){
        service_btn.removeClass('faq_tab_active');
        book_after_btn.addClass('faq_tab_active');
        member_btn.removeClass('faq_tab_active');
        store_btn.removeClass('faq_tab_active');
        faq_tab_content1.css('display', 'none');
        faq_tab_content2.css('display', 'block');
        faq_tab_content3.css('display', 'none');
        faq_tab_content4.css('display', 'none');

        event.preventDefault();
    });
    member_btn.click(function(){
        service_btn.removeClass('faq_tab_active');
        book_after_btn.removeClass('faq_tab_active');
        member_btn.addClass('faq_tab_active');
        store_btn.removeClass('faq_tab_active');
        faq_tab_content1.css('display', 'none');
        faq_tab_content2.css('display', 'none');
        faq_tab_content3.css('display', 'block');
        faq_tab_content4.css('display', 'none');

        event.preventDefault();
    });
    store_btn.click(function(){
        service_btn.removeClass('faq_tab_active');
        book_after_btn.removeClass('faq_tab_active');
        member_btn.removeClass('faq_tab_active');
        store_btn.addClass('faq_tab_active');
        faq_tab_content1.css('display', 'none');
        faq_tab_content2.css('display', 'none');
        faq_tab_content3.css('display', 'none');
        faq_tab_content4.css('display', 'block');

        event.preventDefault();
    });

    // FAQ title toggle
    var faq_title = $(".faq_tab_content a");
    faq_title.click(function(){
        $(this).parent().next().slideToggle(400);
        $(this).parent().toggleClass("angle_toggle");
        event.preventDefault();
    });



    // 팔로우 팔로잉 토글
    var followBtn = $("#followingList ul li button");
    followBtn.click(function(){
        $(this).toggleClass("followToggle");
        if($(this).text() === "팔로우"){
            $(this).html('팔로잉');
        } else {
            $(this).html('팔로우');
        }
    });



    // 비밀번호변경 띄우기, 닫기
    $(".change_pw_btn").click(function(){
        $(".hidden_bg").css("display", "block");
        $("#changePassword").css("display", "block");

        event.preventDefault();
    });
    $(".x_btn_pw").click(function(){
        $(".hidden_bg").css("display", "none");
        $("#changePassword").css("display", "none");

        event.preventDefault();
    });


    // 회원탈퇴 띄우기, 닫기
    $(".withdraw_btn").click(function(){
        $(".hidden_bg").css("display", "block");
        $("#withdraw").css("display", "block");

        event.preventDefault();
    });
    $(".x_btn_withdraw").click(function(){
        $(".hidden_bg").css("display", "none");
        $("#withdraw").css("display", "none");

        event.preventDefault();
    });


});