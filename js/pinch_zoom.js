$(function() { 
    var element = document.querySelector('.feedbook_tab_content');
    var instance = panzoom(element, {
        maxZoom: 1,
        minZoom: 0.1,
        bounds: true,
        boundsPadding: 0.1
    });
    instance.on('zoom', function(e) {
        console.log('Fired when `element` is zoomed', e);
        // Note: e === instance.
    });
});