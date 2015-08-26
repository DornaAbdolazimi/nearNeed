var a=10;
$(document).scroll(function(){

var target = $("#pwd").position().top;
    if($(this).scrollTop() >target*4 && a>0)
    {
    	
       $(".navbar").fadeTo(10, 1);

        // $(".navbar-brand").css({"font-size": "20px"}); 
        for(var i=0;i<10;i++){
        	 $(".navbar").animate({paddingTop: '-=0.3vh'}, 5); 
        	 $(".navbar").animate({height: '-=0.5vh'}, 5); 
	       $(".navbar-brand").animate({
	            fontSize: '-=1'
	        }, 5);
	        a=a-1;
     		}
        	
    }
    if($(this).scrollTop() <target*4 && a<=0)
    {  
        $(".navbar").fadeTo(10, 0.5);
        
        for(var i=0;i<10;i++){
        	 	$(".navbar").animate({paddingTop: '+=0.3vh'}, 5); 
        	   $(".navbar").animate({height: '+=0.5vh'}, 5); 
	         $(".navbar-brand").animate({
	            fontSize: '+=1'
	        }, 5);
	         a=a+1;
	       
     		}
    }
 

});
