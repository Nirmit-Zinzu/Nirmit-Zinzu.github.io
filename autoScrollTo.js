
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

$(document).ready(function() {

	$("#workInfo").hide(); $("#projectInfo").hide(); $("#studyInfo").hide();

    $("#projectBar").click(function(){
        $("#projectInfo").slideToggle("slow");
        $('.pointDown1').toggle("slow");
    });

    $("#workBar").click(function(){
        $("#workInfo").slideToggle("slow");
         $('.pointDown2').toggle("slow");
    });

    $("#studyBar").click(function(){
        $("#studyInfo").slideToggle("slow");
         $('.pointDown3').toggle("slow");
    });

});




