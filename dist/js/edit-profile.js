$(document).ready(function(){
	$(".navbar-brand").css({"font-size": "30px"});
	$(".navbar").css({"background-color": "#204056"}); 
	$(".container-fluid").css({"padding-top": "5px"}); 
	$("#section2").css({"padding-left": "200px"});

$('#container').on("scroll", function () {
 	console.log('here');
 	var st = $('#container').scrollTop ();
 	console.log(st);
 	st = st < 350 ? st : 350;
 	$('#profile-pic').css('top', 360 - st);
 	st = st < 180 ? st : 180;
	$('#profile-pic').css('height', 200 * (1 - st / 350));
	$('#profile-pic').css('width', 200 * (1 - st / 350));
	});

//$(window).on("scroll", function(){
//	if ($(this).scrollTop()>1) {
//		$('.navbar')addClass("sticky");
//	}else{
//		$('.navbar').removeClass("sticky");
//	}
//});

});