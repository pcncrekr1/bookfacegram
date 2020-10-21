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
    


    // 문해고사 정답 체크
    $(".exam_submit_btn").click(function () { 
        if($('input:radio[id=choice3]').is(':checked')) {
            window.location.href = "../html/booktest2.html";
        } else {
            alert("오답입니다!");
        }
    });

    
    
    // 파일 선택 시 
    var fileTarget = $('.filebox .upload-hidden'); 
    fileTarget.on('change', function(){ // 값이 변경되면 
        if(window.FileReader){ // modern browser 
            var filename = $(this)[0].files[0].name;
        } else { // old IE 
            var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
        } 
        // 추출한 파일명 삽입 
        $(this).siblings('.upload-name').val(filename); 
    });



    // book detail tab show & hide
    var info_btn = $('.detail_tab_menu ul li:first-child a');
    var quiz_btn = $('.detail_tab_menu ul li:nth-child(2) a');
    var talk_btn = $('.detail_tab_menu ul li:last-child a');
    var tab_detail_info = $('.tab_detail_info');
    var tab_detail_quiz = $('.tab_detail_quiz');
    var tab_detail_talk = $('.tab_detail_talk');

    // 초기값 설정
    info_btn.addClass("detail_tab_active");
    tab_detail_info.css("display", "block");

    info_btn.click(function(){
        info_btn.addClass('detail_tab_active');
        quiz_btn.removeClass('detail_tab_active');
        talk_btn.removeClass('detail_tab_active');
        tab_detail_info.css('display', 'block');
        tab_detail_quiz.css('display', 'none');
        tab_detail_talk.css('display', 'none');
        
        event.preventDefault();
    });
    quiz_btn.click(function(){
        info_btn.removeClass('detail_tab_active');
        quiz_btn.addClass('detail_tab_active');
        talk_btn.removeClass('detail_tab_active');
        tab_detail_info.css('display', 'none');
        tab_detail_quiz.css('display', 'block');
        tab_detail_talk.css('display', 'none');

        event.preventDefault();
    });
    talk_btn.click(function(){
        info_btn.removeClass('detail_tab_active');
        quiz_btn.removeClass('detail_tab_active');
        talk_btn.addClass('detail_tab_active');
        tab_detail_info.css('display', 'none');
        tab_detail_quiz.css('display', 'none');
        tab_detail_talk.css('display', 'block');

        event.preventDefault();
    });



    // extend button click
    var more_btn = $("#tab .tab_detail_info ul li .extend_box img");
    var extend_btn = $("#tab .tab_detail_info ul li .extend_box a");
    extend_btn.click(function () { 
        $(this).parent().siblings(".summary_content").toggleClass("extend_toggle");

        $(this).parent().parent().find(".extend_box a img").attr("src", function(index, attr){ 
            if (attr.match('up')) { 
                return attr.replace("up", "down"); 
            } else { 
                return attr.replace("down", "up"); 
            } 
        });

        event.preventDefault();
    });


    // 별점 주기
    $('.thumb_box a').click(function(){
        $(this).parent().children("a").removeClass("thumb_on");  /* 별점의 on 클래스 전부 제거 */ 
        $(this).addClass("thumb_on").prevAll("a").addClass("thumb_on"); /* 클릭한 별과, 그 앞 까지 별점에 on 클래스 추가 */
        return false;
    });


    // textarea 글자수, 해시태그 제한
    $('#talkArea').keydown(function (event){
        var content = $(this).val();

        if (content.length > 200 && event.keyCode != 13){
            alert("최대 200자까지 입력 가능합니다.");
            $(this).val(content.substring(0, 200));
        }

        // 해시태그
        var splitedArray = content.split(' '); // 공백을 기준으로 문자열을 자른다.

        var linkedContent = '';
        var linkedContentArray = [];
        for(var word in splitedArray) {
            word = splitedArray[word];
            if(word.indexOf('#') == 0) { // # 문자를 찾는다.
                linkedContentArray += word;
                word = '<a href="\링크">' + word + '</a>'; 
            }
            linkedContent += word + ' ';
        }
        
        linkedContentArray = content.split(' #'); 
        console.log(linkedContentArray);
        if (linkedContentArray.length > 10 && event.keyCode != 13){
            alert("해시태그는 최대 10개까지 입력 가능합니다.");
            $(this).val(content.substring(0, 200));
        }
        console.log(linkedContent);
    });

});