$(function() { 

    var element = document.querySelector('.feedbook_tab_content');

    var panzoom = Panzoom(element, {
        // options here
        disablePan: true,
        maxScale: 1,
        minScale: 0.5,
        touchAction: ""
    });

    var zoomCount = 0;
    element.addEventListener('panzoomstart', function(event) {
        $(".feedbook_tab_content").swipe( {
            // pinchIn과 pinchOut이 반대로 되어있음.
            // 축소하면 pinchOut이 발생하고 확대하면 pinchIn이 발생함.
            pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom) {
                // $(this).html("You pinched IN!!! " +direction + " by " + distance +"px, zoom scale is "+pinchZoom);
                // 확대시
                if( zoomCount === 0 ) { //원상태라면
                    $(".feedbook_tab_content").children().children().css("width", "calc(50% - 2px)");
                    zoomCount = 1;
                } else if( zoomCount === -1 ) { //축소된 상태라면
                    $(".feedbook_tab_content").children().children().css("width", "calc(33.3% - 2px)");
                    zoomCount = 0;
                }
            },
            pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom) {
                // $(this).html("You pinched OUT!!! " +direction + " by " + distance +"px, zoom scale is "+pinchZoom);
                // 축소시
                if( zoomCount === 0 ) { //원상태라면
                    $(".feedbook_tab_content").children().children().css("width", "calc(25% - 2px)");
                    zoomCount = -1;
                } else if( zoomCount === 1 ) { //확대된 상태라면
                    $(".feedbook_tab_content").children().children().css("width", "calc(33.3% - 2px)");
                    zoomCount = 0;
                }
            },
            fingers:2,  
            pinchThreshold:0  
        });
    });

    element.addEventListener('panzoomend', function(event) {
        // 축소시 원상태로 돌아오게 만듬
        panzoom.reset();
    });
});