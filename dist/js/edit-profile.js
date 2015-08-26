$(document).ready(function(){
 	$('#container').on("scroll", function () {
 	console.log('here');
 	var st = $('#container').scrollTop ();
 	console.log(st);
 	st = st < 300 ? st : 300;
 	$('#profile-pic').css('top', 320 - st);
 	st = st < 80 ? st : 80;
	$('#profile-pic').css('height', 200 * (1 - st / 150));
	 $('#profile-pic').css('width', 200 * (1 - st / 150));
	});
});