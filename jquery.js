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

$(document).ready(function(){
     $('#dugme1').click(function (){
            $('#dugme1').parent().parent().css( "background-color", "#6AF79A" )
        });

});
$(document).ready(function(){
     $('#dugme2').click(function (){
            $('#dugme2').parent().parent().css( "background-color", "#6AF79A" )
        });

});
$(document).ready(function(){
     $('#dugme3').click(function (){
            $('#dugme3').parent().parent().css( "background-color", "#6AF79A" )
        });

});
$(document).ready(function(){
     $('#nodugme1').click(function (){
            $('#nodugme1').parent().parent().css( "background-color", "#FC5050" )
        });

});
$(document).ready(function(){
     $('#nodugme2').click(function (){
            $('#nodugme2').parent().parent().css( "background-color", "#FC5050" )
        });

});
$(document).ready(function(){
     $('#nodugme3').click(function (){
            $('#nodugme3').parent().parent().css( "background-color", "#FC5050" )
        });

});