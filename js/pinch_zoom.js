$(function() { 
    // var element = document.querySelector('.feedbook_tab_content');
    // var instance = panzoom(element, {
    //     maxZoom: 1,
    //     minZoom: 0.1,
    //     bounds: true,
    //     boundsPadding: 0.1
    // });
    // instance.on('zoom', function(e) {
    //     console.log('Fired when `element` is zoomed', e);
    //     // Note: e === instance.
    // });






    // $(".feedbook_tab_content").swipe( {
    //     pinchStatus:function(event, phase, direction, distance , duration , fingerCount, pinchZoom, fingerData) {
    //         // $(this).html("Pinch zoom " + pinchZoom + "  <br/>Distance pinched " + distance +" <br/>Direction " + direction);
    //         console.log(direction);
    //         if(direction == "in") {

    //         }
    //     },
    //     fingers:2,
    //     threshold:0,
    //     preventDefaultEvents:false
    // });



    $(".feedbook_tab_content").swipe( {
        pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom)
        {
            $(this).html("You pinched " +direction + " by " + distance +"px, zoom scale is "+pinchZoom);
        },
        pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom)
        {
            $(this).html("You pinched " +direction + " by " + distance +"px, zoom scale is "+pinchZoom);
        },
        pinchStatus:function(event, phase, direction, distance , duration , fingerCount, pinchZoom) {
            // $(this).html("Pinch zoom scale "+pinchZoom+"  <br/>Distance pinched "+distance+" <br/>Direction " + direction);
        },
        fingers:2,  
        pinchThreshold:0  
    });






    var element = document.querySelector('.feedbook_tab_content');

    var panzoom = Panzoom(element, {
        // options here
        disablePan: true,
        maxScale: 1,
        minScale: 0.5,
        touchAction: ""
    });

    // element.addEventListener('panzoomstart', function(event) {
        
    // });

    element.addEventListener('panzoomend', function(event) {
        // $(".feedbook_tab_content").swipe( {
        //     pinchStatus:function(event, phase, direction, distance , duration , fingerCount, pinchZoom, fingerData) {
        //         // $(this).html("Pinch zoom " + pinchZoom + "  <br/>Distance pinched " + distance +" <br/>Direction " + direction);
        //         console.log(direction);
        //     },
        //     fingers:2,
        //     threshold:0,
        //     preventDefaultEvents: false
        // });

        // console.log(event);


        $(".feedbook_tab_content").children().children().css("width", "25%");
        panzoom.reset();
    });
        


    // 스크롤이 안되고 disablePan:true 적용시 zoom되 되지 않음
    // var elem = document.querySelector('.feedbook_tab_content');
    // var panzoom = Panzoom(elem, {
    //     maxScale: 1,
    //     minScale: 0.5,
    //     touchAction: ""
    // });

});