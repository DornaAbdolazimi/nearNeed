var cw = $('.child').width();
$('.child').css({'height':cw+'px'});
$(document).ready(function(){
$(".navbar-brand").css({"font-size": "20px"});
$(".navbar").css({"background-color": "#404040 "});
$(".navbar-brand").css({"color": "#ffffff"});
$(".nav-button").css({"background-color": "#87B8B4"});
$("#header1").css({"color": "#ffffff"});
$("#header2").css({"color": "#ffffff"});
$("#theme1").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme2").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme3").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme4").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme5").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme1").click(function(){$(".nav-button").css({"background-color": "#87B8B4"});});
$("#theme1").click(function(){$(".gly").css({"color": "#87B8B4"});});
$("#theme2").click(function(){$(".nav-button").css({"background-color": "#4CA1D8"});});
$("#theme2").click(function(){$(".gly").css({"color": "#4CA1D8"});});
$("#theme3").click(function(){$(".nav-button").css({"background-color": "#FFB745"});});
$("#theme3").click(function(){$(".gly").css({"color": "#FFB745"});});
$("#theme4").click(function(){$(".nav-button").css({"background-color": "#806BAE"});});
$("#theme4").click(function(){$(".gly").css({"color": "#806BAE"});});
$("#theme5").click(function(){$(".nav-button").css({"background-color": "#E3695C"});});
$("#theme5").click(function(){$(".gly").css({"color": "#E3695C"});});
    var options = [];

    $( '.dropdown-menu a' ).on( 'click', function( event ) {

        var $target = $( event.currentTarget ),
            val = $target.attr( 'data-value' ),
            $inp = $target.find( 'input' ),
            idx;

        if ( ( idx = options.indexOf( val ) ) > -1 ) {
            options.splice( idx, 1 );
            setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
        } else {
            options.push( val );
            setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
        }

        $( event.target ).blur();

        console.log( options );
        return false;
    });

    var nonLinearSlider = document.getElementById('nonlinear');

    noUiSlider.create(nonLinearSlider, {
        connect: true,
        start: [ 0, 100.000 ],
        step: 0.001,
        range: {
            'min':  0 ,
            '50%': 10,
            '80%': 40,
            'max': 100.000
        },
        format: wNumb({
            decimals: 3,
            mark: ' ',
            thousand: '.',
            postfix: 'تومان',
        })
    });

    var snapValues = [
        document.getElementById('slider-snap-value-lower'),
        document.getElementById('slider-snap-value-upper')
    ];

    nonLinearSlider.noUiSlider.on('update', function( values, handle ) {
        snapValues[handle].innerHTML = values[handle];
    });
});