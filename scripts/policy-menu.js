$( document ).ready(function() {
    console.log( "Let's do this!" );
    
    $('#policy-menu').addClass('close');
    
    $('#policy-menu-button').click(function(){
        $('#policy-menu').toggleClass('open');
    });
       
});