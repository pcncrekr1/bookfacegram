$(function(){

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


    // circleProgress
    $('#circleProgress').circleProgress({
        value: 0.8,
        size: 200,
        startAngle: -Math.PI / 2,
        thickness: 10,
        animation: false,
        emptyFill: "rgba(0,0,0,0)",
        fill: {
            gradient: [['#31A6DB', 0], ['#298EBC', 0.2], ['#31A6DB', 0.4], ['#298EBC', 0.6], ['#31A6DB', 0.8], ['#298EBC', 1]], 
            gradientAngle: Math.PI / 2
        }
    });

});