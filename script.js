$(document).ready(function(){
    $('[data-bs-toggle="popover"]').popover();
    
    $(".toabove").click(function(){
        $(window).scrollTop(0);
    });

    $("#propic").hover(function(){
        $(".propic-caption").toggle();
        $("#hii").addClass("text-bpink");
        $("#hii").addClass("fw-bold");
    });

    $("#detail1").hover(function(){
        $("#about").toggle();
    });

    $("#detail2").hover(function(){
        $("#education").toggle();
    });

    $("#detail3").hover(function(){
        $("#experience").toggle();
    });

});



