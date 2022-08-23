// progess bar start
$(document).ready(function(){
	$('#bar1').barfiller({duration: 4000});
	$('#bar2').barfiller({duration:4000});
	$('#bar3').barfiller({ barColor: '#fc6',  duration:4000 });
	$('#bar4').barfiller({ barColor: '#900', duration: 4000 });
	
});
// progess bar end
var typed = new Typed('.auto-typed', {
    strings:['web designer', 'freelancer', 'devoloper'],
    typeSpeed: 150,
    backSpeed:150,
    loop: true
})
// auto plugin end
// aos plugin start
AOS.init({
    offset: 250,
});
// aos plugin end
// portfolio section
$(function(){
    $('.portfolio-btn').click(function(){
    $('button').removeClass('active')
    $(this).addClass('active')
    })
})

var mixer = mixitup('.portfolio-on');
// portfolio section end
