
/*var scrollY = 0;
var distance = 40;
var speed = 24;

function autoScrollTo(el) {

	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')',8);
	if(yPos > bodyHeight){
		clearTimeout(animator);
	} else {
		if(currentY < targetY-distance){
		    scrollY = currentY+distance;
		    window.scroll(0, scrollY);
	    } else {
		    clearTimeout(animator);
	    }
	}
}*/



function resetScroller(){
	 $("html, body").animate({ 
	 	scrollTop: 0 
	 }, "slow");
}

function moveToDiv(id) { 
	$('html, body').animate({
        scrollTop: $(id).offset().top
    }, "800");
}


$("#workInfo").hide(); 
$("#projectInfo").hide(); 
$("#studyInfo").hide(); 
$("#backToTop").hide(); 


$(document).ready(function() {

	$(window).scroll(function() { 
		if ($(this).scrollTop() > 100) { 
			$("#backToTop").fadeIn(); 
		} else {
			$("#backToTop").fadeOut(); 
		}

	});


    $("#projectBar").click(function(){
        $("#projectInfo").toggle("3000");
        $('.pointDown1').toggle("slow");
    });

    $("#workBar").click(function(){
        $("#workInfo").toggle("3000");
         $('.pointDown2').toggle("slow");
    });

    $("#studyBar").click(function(){
        $("#studyInfo").toggle("3000");
         $('.pointDown3').toggle("slow");
    });

});




