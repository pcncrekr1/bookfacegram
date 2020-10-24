$(function(){

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