$( document ).ready(function() {
    console.log( "Let's do this!" );
    
    //liberal party expand or collapse
    $('#liberal-collapse').click(function(){
        
        //expand or minimize the party column on click
        $('#liberal').toggleClass('close-liberal');
        
        //if the party column is open make the logo colored, 
        //if it's closed then make the logo white
        if (!$('#liberal').hasClass('close-liberal')) {
            $('#liberal-logo').attr('src', 'images/liberal-color.svg');  
        } else  {
            $('#liberal-logo').attr('src', 'images/liberal-white.svg');
        } 
        
    });  
    
    //conservative party expand or collapse
    $('#conservative-collapse').click(function(){
        
        //expand or minimize the party column on click
        $('#conservative').toggleClass('close-conservative');
        
        //if the party column is open make the logo colored, 
        //if it's closed then make the logo white
        if (!$('#conservative').hasClass('close-conservative')) {
            $('#conservative-logo').attr('src', 'images/conservative-color.svg');  
        } else  {
            $('#conservative-logo').attr('src', 'images/conservative-white.svg');
        } 
        
    }); 
    
    //green party expand or collapse
    $('#green-collapse').click(function(){
        
        //expand or minimize the party column on click
        $('#green').toggleClass('close-green');
        
        //if the party column is open make the logo colored, 
        //if it's closed then make the logo white
        if (!$('#green').hasClass('close-green')) {
            $('#green-logo').attr('src', 'images/green-color.svg');  
        } else  {
            $('#green-logo').attr('src', 'images/green-white.svg');
        }
        
    });    
        
    //ndp party expand or collapse
    $('#ndp-collapse').click(function(){
        
        //expand or minimize the party column on click
        $('#ndp').toggleClass('close-ndp');
        
        //if the party column is open make the logo colored, 
        //if it's closed then make the logo white
        if (!$('#ndp').hasClass('close-ndp')) {
            $('#ndp-logo').attr('src', 'images/ndp-color.svg');  
        } else  {
            $('#ndp-logo').attr('src', 'images/ndp-white.svg');
        } 
        
    }); 
       
});