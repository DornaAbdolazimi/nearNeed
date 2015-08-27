var a=10;
$(document).ready(function(){
	
$(".navbar-brand").css({"font-size": "30px"});
$(".navbar-brand").css({"color": "#ffffff"});
$("#header1").css({"color": "#ffffff"});
$("#header2").css({"color": "#ffffff"});
$(".nav-button").css({"background-color": "#87B8B4"});
$("#header1").click(function(){ $("#vorood").attr("class","tab-pane fade in active")});
$("#header1").click(function(){ $("#first-tab").attr("class","active")});
$("#header1").click(function(){ $("#second-tab").attr("class","hi")});
$("#header1").click(function(){ $("#sabtenam").attr("class","tab-pane fade")});
$("#header2").click(function(){ $("#second-tab").attr("class","active")});
$("#header2").click(function(){ $("#first-tab").attr("class","hi")});
$("#header2").click(function(){ $("#sabtenam").attr("class","tab-pane fade in active")});
$("#header2").click(function(){ $("#vorood").attr("class","tab-pane fade")});
$("#theme1").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme2").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme3").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme4").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme5").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme1").click(function(){$(".nav-button").css({"background-color": "#87B8B4"});});
$("#theme2").click(function(){$(".nav-button").css({"background-color": "#4CA1D8"});});
$("#theme3").click(function(){$(".nav-button").css({"background-color": "#FFB745"});});
$("#theme4").click(function(){$(".nav-button").css({"background-color": "#806BAE"});});
$("#theme5").click(function(){$(".nav-button").css({"background-color": "#E3695C"});});


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
        $(".navbar").fadeTo(10, 0.7);
        
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
