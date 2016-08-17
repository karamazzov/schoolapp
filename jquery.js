$(document).ready(function(){
    
    $("body").css("display", "none");
    
    $("body").fadeIn(400); 
    
    // to fade out before redirect
    
    $('a').click(function(e) { 
        
        redirect = $(this).attr('href');
        
        e.preventDefault();
        
        $('body').fadeOut(400, function(){
            
            document.location.href = redirect
            
        });
    });
})




$(document).ready(function(){
                  
        $('#first-card, #second-card, #third-card, #fourth-card').click(function(){
                               
            $(this).css({
    
                'border': 'none',
                'background-color': '#2794EB'
    
            });
            
            $(this).children().css({'color':'white'})
            
                               
        });
                  
});
