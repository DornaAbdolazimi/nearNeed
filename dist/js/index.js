$(document).scroll(function(){
var target = $("#pwd").position().top;
    if($(this).scrollTop() >target*4)
    {
        $(".navbar").fadeTo(10, 1);
    }
    if($(this).scrollTop() <target*4)
    {  
        $(".navbar").fadeTo(10, 0.5);
    }
});
