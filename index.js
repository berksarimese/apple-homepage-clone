$(document).ready(function () {
    //BURGER
    $(document).on('click','.burger-button', function() {
        if($('#cart-mobile').css('display') == 'block') {
            $('#cart-mobile').css('display','none');
        }
        let burger = $('#navbar-burger');
        
        $(burger).toggle('slow',function(){  
            burger.show;
            burger.css('height','100vh');
        });
    });

    //CART BURGER
    let winSize = $(window);
    $(window).on('resize', function(){
        winSize = $(this);
        if (winSize.width() < 835) {
            if($('#cart-small').css('display') == 'block') {
                $('#cart-small').css('display', 'none');
            } 
        } else {
            if($('#cart-mobile').css('display') == 'block') {
                $('#cart-mobile').css('display', 'none');
            }
        }
    });



    $(document).on('click','.mobile-cart', function() {
        if($('#navbar-burger').css('display') == 'block') {
            $('#navbar-burger').css('display','none');
        }

        if (winSize.width() <= 835) { 
            let cartBurger = $('#cart-mobile');
        
            $(cartBurger).toggle('slow',function(){  
                cartBurger.show;
                cartBurger.css('height','350px');
            });
        } else {
            let cartBurger = $('#cart-small');
        
            $(cartBurger).toggle('slow',function(){  
                cartBurger.show;
            });
        }
        
    });


    //FOOTER
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

    //SLIDER
    $(document).ready(function () {
      
        $(function () {
            moveRight();
        });

        $(document).ready(function () {
            
                setInterval(function () {
                    moveRight();
                }, 7000);
        });
        
        $(window).on('resize', function(){
            var win = $(this); //this = window
            if (win.height() >= 500) { 
                 slideCount = $('#slider ul li').length;
                 slideWidth = $('#slider ul li').width()+ 12;
                 slideHeight = $('#slider ul li').height();
                 sliderUlWidth = slideCount * slideWidth;
                
                 gg = slideWidth * 2;
                $('#slider').css({ width: slideWidth, height: slideHeight });
                $('#slider ul').css({ width: sliderUlWidth, marginLeft: - gg });
             }

             if (win.width() > 835) {
                $('#navbar-burger').css('display', 'none');
             }
        });
        
        var slideCount = $('#slider ul li').length;
        var slideWidth = $('#slider ul li').width()+ 12;
        var slideHeight = $('#slider ul li').height();
        var sliderUlWidth = slideCount * slideWidth;
          
        var gg = slideWidth * 2;
        $('#slider').css({ width: slideWidth, height: slideHeight });
        $('#slider ul').css({ width: sliderUlWidth, marginLeft: - gg });
        $('#slider ul li:last-child').prependTo('#slider ul');
      
          let liArray = [];
          $('#slider ul li').click(function (){

            let liArray = [];
            $('#slider ul li').each(function(){
                liArray.push(this);            
            });

            
            if (this == liArray[1]){
                moveLeft();
            }

            if(this == liArray[3]) {
                moveRight();
            }

          });

          function moveLeft() {
            liArray = [];
            $('#slider ul li').each(function(){
                liArray.push(this);
                if(liArray.length == $('#slider ul').children().length) {
                    opacityFn('left');
                }
            });

              $('#slider ul').animate({
                  left: + slideWidth
              }, 800, function () {
                  $('#slider ul li:last-child').prependTo('#slider ul');
                  $('#slider ul').css('left', '');
              });
          };
/*---------------------------------------------------------*/
          function moveRight() {
            liArray = [];
            $('#slider ul li').each(function(){
                liArray.push(this);
                if(liArray.length == $('#slider ul').children().length) {
                    opacityFn('right');
                }
            });

              $('#slider ul').animate({
                  left: - slideWidth
              }, 800, function () {
                  $('#slider ul li:first-child').appendTo('#slider ul');
                  $('#slider ul').css('left', '');
              });
          };

        function opacityFn(pos) {
            if(pos == 'right') { 
                for(let i = 0; i < liArray.length; i++) {
                    if(i == 3) {
                        $(liArray[i]).animate({opacity: 1}, 300);
                        
                    } else {
                        $(liArray[i]).animate({opacity: 0.4}, 300);
                    }
                }
            } else {
                for(let i = 0; i < liArray.length; i++) {
                    if(i == 1) {
                        $(liArray[i]).animate({opacity: 1}, 300);
                        
                    } else {
                        $(liArray[i]).animate({opacity: 0.4}, 300);
                    }
                }
            }
        }
      
          $('a.control_prev').click(function () {
              moveLeft();
          });
      
          $('a.control_next').click(function () {
              moveRight();
          });

          
    });
});