$( document ).ready(function() {
    console.log( "Let's do this!" );
    
    $('.policy-items li').click(function(){
        $('.instructions').addClass('instructions-remove');
        $('.contents').addClass('add-content');  
    });
    
    if( $('.contents').hasClass('add-content') ){
        $('.policy-items li').click(function(){
            $('.contents').clone().appendTo('.contents');  
        });
    }
    
    
    $('.remove').click(function(){
        $('.instructions').removeClass('instructions-remove');
        $('.contents').removeClass('add-content');  
    });  
    
});    
    
    
    
    
//    if (!$('#liberal').hasClass('close-liberal')) {
//            $('#liberal-logo').attr('src', 'images/liberal-color.svg');  
//        } else  {
//            $('#liberal-logo').attr('src', 'images/liberal-white.svg');
//        }
       
