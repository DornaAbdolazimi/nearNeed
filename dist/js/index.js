var a=10;
$(document).ready(function(){
$(".navbar-brand").css({"font-size": "30px"});
$(".navbar").css({"background-color": "#204056"});  

$("#header1").click(function(){ $("#vorood").attr("class","tab-pane fade in active")});
$("#header1").click(function(){ $("#first-tab").attr("class","active")});
$("#header1").click(function(){ $("#second-tab").attr("class","hi")});
$("#header1").click(function(){ $("#sabtenam").attr("class","tab-pane fade")});
$("#header2").click(function(){ $("#second-tab").attr("class","active")});
$("#header2").click(function(){ $("#first-tab").attr("class","hi")});
$("#header2").click(function(){ $("#sabtenam").attr("class","tab-pane fade in active")});
$("#header2").click(function(){ $("#vorood").attr("class","tab-pane fade")});
$(document).scroll(function(){

var target = $("#pwd").position().top;
    if($(this).scrollTop() >target*3 && a>0)
    {
        
       $(".navbar").fadeTo(10, 1);

        // $(".navbar-brand").css({"font-size": "20px"}); 
        for(var i=0;i<10;i++){
             $(".navbar").animate({paddingTop: '-=0.3vh'}, 5); 
             $(".navbar").animate({paddingBottom: '-=0.3vh'}, 5); 
           $(".navbar-brand").animate({
                fontSize: '-=1'
            }, 5);
            a=a-1;
            }
            
    }
    if($(this).scrollTop() <target*3 && a<=0)
    {  
        $(".navbar").fadeTo(10, 0.5);
        
        for(var i=0;i<10;i++){
                $(".navbar").animate({paddingTop: '+=0.3vh'}, 5); 
               $(".navbar").animate({paddingBottom: '+=0.3vh'}, 5); 
             $(".navbar-brand").animate({
                fontSize: '+=1'
            }, 5);
             a=a+1;
           
            }
    }
 

});
});
