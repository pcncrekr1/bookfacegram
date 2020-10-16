$(function(){

    // MY BOOKS bxSlider
    var my_self_bx = $('.my_self_bx').bxSlider({
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

    var my_essay_bx = $('.my_essay_bx').bxSlider({
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

    var my_author_bx1 = $('.my_author_bx1').bxSlider({
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

    var my_author_bx2 = $('.my_author_bx2').bxSlider({
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

    var my_famous_bx = $('.my_famous_bx').bxSlider({
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

    var my_family_bx = $('.my_family_bx').bxSlider({
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


    // radar charts
    var ctx1 = document.getElementById("radarChart1");
    var radarChart1 = new Chart(ctx1, {
        type: "radar",
        data: {
            labels: ["A", "B", "C", "D", "E"],
            datasets: [{
                label: "장르별",
                borderColor: "#f00",
                backgroundColor: "rgba(0, 0, 0, 0)",
                pointBackgroundColor: "#f00",
                borderWidth: 2,
                data: [12, 19, 3, 5, 25]
            }]
        },
        options: {
            legend: {
                display: false
            }
        }
    });

    var ctx2 = document.getElementById("radarChart2");
    var radarChart2 = new Chart(ctx2, {
        type: "radar",
        data: {
            labels: ["A", "B", "C", "D", "E"],
            datasets: [{
                label: "저자별",
                borderColor: "#f00",
                backgroundColor: "rgba(0, 0, 0, 0)",
                pointBackgroundColor: "#f00",
                borderWidth: 2,
                data: [12, 15, 3, 5, 10]
            }]
        },
        options: {
            legend: {
                display: false
            }
        }
    });

    var ctx3 = document.getElementById("radarChart3");
    var radarChart3 = new Chart(ctx3, {
        type: "radar",
        data: {
            labels: ["A", "B", "C", "D", "E"],
            datasets: [{
                label: "주제별",
                borderColor: "#f00",
                backgroundColor: "rgba(0, 0, 0, 0)",
                pointBackgroundColor: "#f00",
                borderWidth: 2,
                data: [6, 19, 3, 5, 17]
            }]
        },
        options: {
            legend: {
                display: false
            }
        }
    });



    // my_books tab show & hide
    var genre_btn = $('.my_tab_menu ul li:first-child a');
    var author_btn = $('.my_tab_menu ul li:nth-child(2) a');
    var subject_btn = $('.my_tab_menu ul li:last-child a');
    var tab_genre = $('.tab_genre');
    var tab_author = $('.tab_author');
    var tab_subject = $('.tab_subject');


    // radar charts slide
    var radar_slider = $('.radar_slider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        auto: false,
        pager: false,
        controls: false,
        // touchEnabled : (navigator.maxTouchPoints > 0),
        slideWidth: 1200,
        moveSlides: 1,
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            if(newIndex === 0) {
                genre_btn.addClass('my_tab_menu_on');
                author_btn.removeClass('my_tab_menu_on');
                subject_btn.removeClass('my_tab_menu_on');
                tab_genre.css('display', 'block');
                tab_author.css('display', 'none');
                tab_subject.css('display', 'none');

                my_self_bx.reloadSlider();
                my_essay_bx.reloadSlider();
            } else if(newIndex === 1) {
                genre_btn.removeClass('my_tab_menu_on');
                author_btn.addClass('my_tab_menu_on');
                subject_btn.removeClass('my_tab_menu_on');
                tab_genre.css('display', 'none');
                tab_author.css('display', 'block');
                tab_subject.css('display', 'none');

                my_author_bx1.reloadSlider();
                my_author_bx2.reloadSlider();
            } else if(newIndex === 2) {
                genre_btn.removeClass('my_tab_menu_on');
                author_btn.removeClass('my_tab_menu_on');
                subject_btn.addClass('my_tab_menu_on');
                tab_genre.css('display', 'none');
                tab_author.css('display', 'none');
                tab_subject.css('display', 'block');

                my_famous_bx.reloadSlider();
                my_family_bx.reloadSlider();
            }
        }
    });


    // 초기값 설정
    genre_btn.addClass("my_tab_menu_on");
    tab_genre.css("display", "block");
    my_self_bx.reloadSlider();  //display none-->block 시 bxSlider 높이 0 되는 문제 때문에 추가
    my_essay_bx.reloadSlider();

    genre_btn.click(function(){
        genre_btn.addClass('my_tab_menu_on');
        author_btn.removeClass('my_tab_menu_on');
        subject_btn.removeClass('my_tab_menu_on');
        tab_genre.css('display', 'block');
        tab_author.css('display', 'none');
        tab_subject.css('display', 'none');

        my_self_bx.reloadSlider();
        my_essay_bx.reloadSlider();

        radar_slider.goToSlide(0);
        
        event.preventDefault();
    });
    author_btn.click(function(){
        genre_btn.removeClass('my_tab_menu_on');
        author_btn.addClass('my_tab_menu_on');
        subject_btn.removeClass('my_tab_menu_on');
        tab_genre.css('display', 'none');
        tab_author.css('display', 'block');
        tab_subject.css('display', 'none');

        my_author_bx1.reloadSlider();
        my_author_bx2.reloadSlider();

        radar_slider.goToSlide(1);

        event.preventDefault();
    });
    subject_btn.click(function(){
        genre_btn.removeClass('my_tab_menu_on');
        author_btn.removeClass('my_tab_menu_on');
        subject_btn.addClass('my_tab_menu_on');
        tab_genre.css('display', 'none');
        tab_author.css('display', 'none');
        tab_subject.css('display', 'block');

        my_famous_bx.reloadSlider();
        my_family_bx.reloadSlider();

        radar_slider.goToSlide(2);

        event.preventDefault();
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