$(function(){
    
    document.addEventListener('touchmove', function (event) {
        // if (event.scale !== 1) { 
        if (event.touches.length > 1) {
            event.preventDefault(); 
        }
    }, {passive: false});

});