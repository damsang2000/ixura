//  GENERIC JS
(function($) {

    
    
    // --- GLOBAL VARS ---------------------------- 


    // END GLOBAL VARS -----------------------------




    // --- GLOBAL FUNCTIONS ---------------------------- 

        window.isEventSupported = function(eventName) {
            var el = document.createElement('div');
            eventName = 'on' + eventName;
            var isSupported = (eventName in el);
            if (!isSupported) {
                el.setAttribute(eventName, 'return;');
                isSupported = typeof el[eventName] == 'function';
            }
            el = null;
            return isSupported;
        }
        window.wheelEvent = isEventSupported('mousewheel') ? 'mousewheel' : 'wheel';

        // RETURN CORRECT TRANSITION EVENT NAME
        window.whichTransitionEvent = function(){
            var t,
                el = document.createElement("fakeelement");
            var transitions = {
                "transition"      : "transitionend",
                "OTransition"     : "oTransitionEnd",
                "MozTransition"   : "transitionend",
                "WebkitTransition": "webkitTransitionEnd"
            }
            for (t in transitions){
                if (el.style[t] !== undefined){
                    return transitions[t];
                }
            }
        }
        window.transitionEvent = whichTransitionEvent();

        // RETURN CORRECT ANIMATION EVENT NAME
        window.whichAnimationEvent = function(){
            var t,
                el = document.createElement("fakeelement");
            var animations = {
                "animation"      : "animationend",
                "OAnimation"     : "oAnimationEnd",
                "MozAnimation"   : "animationend",
                "WebkitAnimation": "webkitAnimationEnd"
            }
            for (t in animations){
                if (el.style[t] !== undefined){
                    return animations[t];
                }
            }
        }
        window.animationEvent = whichAnimationEvent();


        // RP CALL FN -- SHORTHAND
        window.rp_call_fn = function(selector, fn, args){ if( $(selector).length>0 ) fn(args); }

        window.rp_button_to_top = function(){

            // browser window scroll (in pixels) after which the "back to top" link is shown
            var offset = 20,
                //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
                offset_opacity = 60,
                //duration of the top scrolling animation (in ms)
                scroll_top_duration = 1000,
                //grab the "back to top" link
                $back_to_top = $('.rp-to-top');

            //hide or show the "back to top" link
            $(window).scroll(function(){
                ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('rp-is-visible') : $back_to_top.removeClass('rp-is-visible rp-fade-out');
                if( $(this).scrollTop() > offset_opacity ) { 
                    $back_to_top.addClass('rp-fade-out');
                }
            });

            //smooth scroll to top
            $back_to_top.on('click', function(event){
                event.preventDefault();
                $('body, html').animate({
                    scrollTop: 0 ,
                        }, scroll_top_duration
                );
            });

        }

        window.rp_create_loader = function(){
            if($("#rp-loader").length==0){
                if($("#rp-loader").length==0){
                    var html_loader = '<div class="box">' +
                                            '<div class="loader loader--size-64 loader--thickness-2"></div>' +
                                        '</div>';
                    $("body").append('<div id="rp-loader" class="animated fadeIn"><div class="overlay">' + html_loader + '</div></div>');
                }
            }
        }

        window.rp_remove_loader = function(){
            $("#rp-loader").remove();
        }
        
        // window.remove_first_loader = function(){
        //     $("#rp-loader").addClass("rp-slide-out");
        //     $("#rp-loader").one(animationEvent, function(){
        //         $("#rp-loader").remove();
        //     });
        // }

        window.remove_first_loader = function(){
            $('.js-rp-first-loader__overlay').one(animationEvent, function(event){
                event.stopPropagation();
                // console.log('b');
            });
            $("#rp-loader-first").addClass("rp-slide-out");
            $("#rp-loader-first").one(animationEvent, function(){
                // console.log('a');
                // $("#rp-loader").remove();
            });
        }

    // END GLOBAL FUNCTIONS ---------------------------- 



    // --- ON LOAD --------------------------------------
    $(function () {

        // REGISTER TRIGGER WHEEL
        
        // Now bind the event to the desired element
        // $('.element_target').on(wheelEvent, function(e) {
        //  	// EVENT IN RESPONSIVE HAVE TRIGGER - ALL TIME EXECUTE THIS
        //     var oEvent = e.originalEvent,
        //         delta  = oEvent.deltaY || oEvent.wheelDelta;
        //     // deltaY for wheel event
        //     // wheelData for mousewheel event
        //     if (delta > 0) {
        //         // Scrolled down
        //     } else {
        //         // Scrolled up
        //     }
        // });

        // TRANSITION END
        // $('.element_target').one(transitionEvent, function(event) {
            // Do something when the transition ends
        // });
        // ANIMATION END
        // $('.element_target').one(animationEvent, function(event) {
            // Do something when the animation ends
        // });

        // CALL FUNCTION - FOR EXAMPLE
        // var r_example_args = {

        // 	x: "arg_1",
        // 	y: "arg_2"

        // };

        // rp_call_fn(".js-example", r_example, r_example_args);

        // FUNCS

        // CALL FUNCTION - BUTTON TO TOP
        rp_call_fn(".js-rp-to-top", rp_button_to_top);

        // REMOVE FIRST LOADER
        remove_first_loader();


        // --- ON RESIZE WINDOW EVENT --------------------------------
        $(window).resize(function(){


        });
        // END ON RESIZE WINDOW EVENT --------------------------------




    });
    // END ON LOAD --------------------------------------


})(jQuery);

