//Moves to specific id. Called on a button from index.html
function moveToDiv(id) {
	$('html, body').animate({
        scrollTop: $(id).offset().top
    }, "fast");

     $("hide").hide();

    toggleFunction();
}

$("#hide_projects").hide();

$(document).ready(function(){
    $("#show_more").click(function(){
        $("#hide_projects").slideToggle("slow");
       // $("#show_more").text("Show Less");
        var text = $('#show_more').text();
        if (text == 'LOAD MORE'){
             $('#show_more').text('LOAD LESS');
        }

        if (text == 'LOAD LESS'){
             $('#show_more').text('LOAD MORE');
        }


    });
});

