// INCLUDE SCRIPTS
 function loadScript(url, callback){
        var engine = document.getElementsByClassName('mi-be-wrapper')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://js.mirai.com/mirai-loader/mirai.loader.js';
        script.onreadystatechange = callback;
        script.onload = callback;
        engine.appendChild(script);
    }

jQuery( document ).ready(function( $ ) {
    $(document).on('js-custom-event-rp', function(e){
        loadScript();
    });    
});


