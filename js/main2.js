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
    
});