$(document).ready(function() {
    //$("button").addClass("animated bounce");

    //$(".well").addClass("animated shake");

    //$("#target3").addClass("animated fadeOut");
    
    /*
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
    */

    //$("button").removeClass("btn-default");

    $("#target1").css("color", "red");

    $("#target1").prop("disabled", true);

    //$("#target4").html("<em>#target4</em>");

    $("#target4").remove();

    $("#target2").appendTo("#right-well");

    $("#target5").clone().appendTo("#left-well");

    $("#target1").parent().css("background-color", "red");

    $("#right-well").children().css("color", "orange");

    $(".target:nth-child(2)").addClass("animated bounce");

    $(".target:even").addClass("animated shake");

    $("body").addClass("animated hinge");
});
