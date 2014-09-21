// Your Javascript code goes here

$(document).ready(function(){
    alert("loaded");
    $("#publish").click(publish);
    $( "#commentBox" ).append( "<div id='b1'/>" );
    $( "#b1" ).append( "<button>Bart</button>" );
    $( "#commentBox" ).append( "<div id='b2'/>" );
    $( "#b1" ).append( "<button>Lisa</button>" );
    $( "#commentBox" ).append( "<div id='b3'/>" );
    $( "#b1" ).append( "<button>Homer</button>" );








    // Get the content of a form
	
    $( "#b1 button" ).click(function() {
    	var name = $("label[for='name']").parent().find("input").val();
    	var text = $("#comment").val(); 
    	$( ".bart .caption" ).append("<br>");   
    	$( ".bart .caption" ).append(text);
    	$( ".bart .caption" ).append("<br>");
    	$( ".bart .caption" ).append(name);
    	$( ".bart .caption" ).append("<br>");


});

    $( ".bart img" ).click(function() {
       	$(".bart img").animate({left: "+=200"});
    	



});


});

function publish(){
    alert("published");
}


