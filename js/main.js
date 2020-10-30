$(function(){
    
    // 문해고사 정답 체크
    $(".exam_submit_btn").click(function () { 
        if($('input:radio[id=choice3]').is(':checked')) {
            window.location.href = "../html/booktest2.html";
        } else {
            // alert("오답입니다!");
            window.location.href = "../html/booktest3.html";
        }
    });
    $(".exam_submit_btn2").click(function () { 
        if($('input:radio[id=choice2_4]').is(':checked')) {
            window.location.href = "../html/booktest5.html";
        } else {
            // alert("오답입니다!");
            window.location.href = "../html/booktest6.html";
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



    // 독후감대회 응모하기 값 전부 입력시에만 버튼 활성화
    $(".contest_submit").attr("disabled", true);

    $("#grade").on("change", function(){
        if( $("#grade").val() !== null && $("#grade").val() !== undefined && $("#grade").val() !== "" && 
            $("#book_name").val() !== null && $("#book_name").val() !== undefined && $("#book_name").val() !== "" &&
            $("#subject").val() !== null && $("#subject").val() !== undefined && $("#subject").val() !== "" && 
            $("#book_content").val() !== null && $("#book_content").val() !== undefined && $("#book_content").val() !== "" && 
            $("#ex_filename").val() !== null && $("#ex_filename").val() !== undefined && $("#ex_filename").val() !== "" ) {
                $(".contest_submit").attr("disabled", false).addClass("contest_submit_active");
        } else {
            $(".contest_submit").attr("disabled", true).removeClass("contest_submit_active");
        }
    });
    $("#book_name").on("change", function(){
        if( $("#grade").val() !== null && $("#grade").val() !== undefined && $("#grade").val() !== "" && 
            $("#book_name").val() !== null && $("#book_name").val() !== undefined && $("#book_name").val() !== "" &&
            $("#subject").val() !== null && $("#subject").val() !== undefined && $("#subject").val() !== "" && 
            $("#book_content").val() !== null && $("#book_content").val() !== undefined && $("#book_content").val() !== "" && 
            $("#ex_filename").val() !== null && $("#ex_filename").val() !== undefined && $("#ex_filename").val() !== "" ) {
                $(".contest_submit").attr("disabled", false).addClass("contest_submit_active");
        } else {
            $(".contest_submit").attr("disabled", true).removeClass("contest_submit_active");
        }
    });
    $("#subject").on("keyup", function(){
        if( $("#grade").val() !== null && $("#grade").val() !== undefined && $("#grade").val() !== "" && 
            $("#book_name").val() !== null && $("#book_name").val() !== undefined && $("#book_name").val() !== "" &&
            $("#subject").val() !== null && $("#subject").val() !== undefined && $("#subject").val() !== "" && 
            $("#book_content").val() !== null && $("#book_content").val() !== undefined && $("#book_content").val() !== "" && 
            $("#ex_filename").val() !== null && $("#ex_filename").val() !== undefined && $("#ex_filename").val() !== "" ) {
                $(".contest_submit").attr("disabled", false).addClass("contest_submit_active");
        } else {
            $(".contest_submit").attr("disabled", true).removeClass("contest_submit_active");
        }
    });
    $("#book_content").on("keyup", function(){
        if( $("#grade").val() !== null && $("#grade").val() !== undefined && $("#grade").val() !== "" && 
            $("#book_name").val() !== null && $("#book_name").val() !== undefined && $("#book_name").val() !== "" &&
            $("#subject").val() !== null && $("#subject").val() !== undefined && $("#subject").val() !== "" && 
            $("#book_content").val() !== null && $("#book_content").val() !== undefined && $("#book_content").val() !== "" && 
            $("#ex_filename").val() !== null && $("#ex_filename").val() !== undefined && $("#ex_filename").val() !== "" ) {
                $(".contest_submit").attr("disabled", false).addClass("contest_submit_active");
        } else {
            $(".contest_submit").attr("disabled", true).removeClass("contest_submit_active");
        }
    });
    $("#ex_filename").on("change", function(){
        if( $("#grade").val() !== null && $("#grade").val() !== undefined && $("#grade").val() !== "" && 
            $("#book_name").val() !== null && $("#book_name").val() !== undefined && $("#book_name").val() !== "" &&
            $("#subject").val() !== null && $("#subject").val() !== undefined && $("#subject").val() !== "" && 
            $("#book_content").val() !== null && $("#book_content").val() !== undefined && $("#book_content").val() !== "" && 
            $("#ex_filename").val() !== null && $("#ex_filename").val() !== undefined && $("#ex_filename").val() !== "" ) {
                $(".contest_submit").attr("disabled", false).addClass("contest_submit_active");
        } else {
            $(".contest_submit").attr("disabled", true).removeClass("contest_submit_active");
        }
    });



    // 더블클릭 시 도서 찜 하트 표시
    var book_detail_img = $("#tab .book_like_wrap > img");
    book_detail_img.dblclick(function() { 
        $(this).siblings(".choice_heart").toggleClass("choice_heart_on");
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
    $(".talk_submit").click(function(){
        
        // 200자 제한
        var content = $('#talkArea').val();
        if (content.length > 200){
            alert("최대 200자까지 입력 가능합니다.");
            return false;
        }

        // 해시태그 10개 제한
        var tags = [];
        content = content.replace(/#[^#\s,;]+/gm, function(tag) {
            tags.push(tag);
        });
        if(tags.length > 10) {
            alert("해시태그는 10개까지만 입력 가능합니다.");
            return false;
        }
    });
});