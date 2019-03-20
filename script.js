$("#paul").hide();
$("#kd2").hide();

$("button").click(function(){
    $("#westbrook").toggle();
});
$("#westbrook").click(function(){
    $("#paul").show();
});
$("#paul").click(function(){
    $("#kd").fadeOut();
    $("body").css("background-color","blue");
});
$("#kd").dblclick(function(){
    $("#westbrook").fadeOut();
    $("#paul").slideOut();
    $("#kd2").show();
});