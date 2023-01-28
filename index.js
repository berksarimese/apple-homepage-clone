$(document).ready(function () {
    $(document).on('click','.burger-button', function() {
        let burger = $('#navbar-burger');
        
        $(burger).toggle('slow',function(){  
            burger.show;
            burger.css('height','100vh');
        });
    });

    let foTitle = $('.footer-container-mobile').children('.footer-column').children('.footer-title');
    $(foTitle).click(function(){
        let foList = $(this).parent('.footer-column').children('.footer-list');
        let foPlus = $(this).children('.list-plus');
        if(foList.css('display') == 'none') { 
            $(foPlus).animate({ deg: 45 }, { duration: 200, step: function(now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                }});
            //foPlus.css('transform', 'rotate(45deg)');      
            foList.toggle('fast',function(){
                this.show;
            });
        } else {
            $(foPlus).animate(
                { deg: 0 },
                {
                duration: 200,
                step: function(now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                }
                }
            );
            //foPlus.css('transform', 'rotate(0deg)'); 
            foList.toggle('fast',function(){
                this.show;
            });
        }
    });
});