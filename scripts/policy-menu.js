$( document ).ready(function() {
    console.log( "Let's do this!" );
    
    $('#policy-menu').addClass('close');
    
    $('#policy-menu-button').click(function(){
        $('#policy-menu').toggleClass('open', 1000, "easeOutSine");
    });
       
    $(document).mouseup(function (e) {
         var popup = $("#policy-menu");
         if (!$('#policy-menu-button').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
             popup.removeClass('open',1000, "easeOutSine");
         }
     });
    
});