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



    // 도넛 차트
    var data1 = {
        labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M"],
        datasets: [{
            data: [8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333],
            backgroundColor: ['#FFE876', '#FFE35B', '#FED710', '#CCEC97', '#B7E664', '#8FCB2B', '#F15151', '#DE3838', '#DB1B1A', '#98D4EC', '#78CBEB', '#45B1D8']
        }]
    };
    var data2 = {
        labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M"],
        datasets: [{
            data: [8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333],
            backgroundColor: ['#FFE876', '#FFE35B', '#FED710', '#CCEC97', '#B7E664', '#8FCB2B', '#F15151', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)']
        }]
    };
    var data3 = {
        labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M"],
        datasets: [{
            data: [8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333],
            backgroundColor: ['#FFE876', '#FFE35B', '#FED710', '#CCEC97', '#B7E664', '#8FCB2B', '#F15151', '#DE3838', '#DB1B1A', '#98D4EC', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)']
        }]
    };
    var data4 = {
        labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M"],
        datasets: [{
            data: [8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333, 8.333],
            backgroundColor: ['#FFE876', '#FFE35B', '#FED710', '#CCEC97', '#B7E664', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)']
        }]
    };

    var doughnutChart1 = new Chart(circleProgress1, {
        type: 'doughnut',
        data: data1,
        options: {
            legend: {
                display: false
            },
            responsive: true,
            cutoutPercentage: 80,
            animation: false,
            tooltips: false,
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }
    });

    var doughnutChart2 = new Chart(circleProgress2, {
        type: 'doughnut',
        data: data2,
        options: {
            legend: {
                display: false
            },
            responsive: true,
            cutoutPercentage: 80,
            animation: false,
            tooltips: false,
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }
    });

    var doughnutChart3 = new Chart(circleProgress3, {
        type: 'doughnut',
        data: data3,
        options: {
            legend: {
                display: false
            },
            responsive: true,
            cutoutPercentage: 80,
            animation: false,
            tooltips: false,
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }
    });

    var doughnutChart4 = new Chart(circleProgress4, {
        type: 'doughnut',
        data: data4,
        options: {
            legend: {
                display: false
            },
            responsive: true,
            cutoutPercentage: 80,
            animation: false,
            tooltips: false,
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }
    });



});