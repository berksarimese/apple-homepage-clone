$(document).ready(function () {
    $(document).on('click','.burger-button', function() {
        let burger = $('#navbar-burger');
        
        $(burger).toggle('slow',function(){  
            burger.show;
            burger.css('height','100vh');
        });

    
    });
});