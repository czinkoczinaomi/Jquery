//$("p")--> összes bekezdés
//$("p").eq(1)-->2.p tag
//$(this)
//$(".osztalynev")
//$(document).ready(function(){
//    
//})
 
$(function(){
    init();
});
function init(){
   // $("#kezd").click(betolt);
    $("#kezd").on("click", betolt);
  
}
function betolt() {
    $("#jatekter").empty();
    for (var i = 0; i < 7; i++) {
        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");
        $("#jatekter div").eq(i).append("<p>");
        $("#jatekter div p").eq(i).text("Nevek");
        $("#jatekter div img").eq(i).attr("src", "kepek/makk-hetes.png");
        //txt+="<img src='kepek/makk-hetes.png' alt=''>";
    }
    $("#jatekter div p").css({"color": "red", "font-size": "30px"});
    // $("#jatekter").text("valami");
//    $("#jatekter").html(txt);
    $("#jatekter div").addClass("kartya");
//    $("jatekter div").mouseenter(function (){
//        $(this).css("background", "pink");
//    });
//    $("jatekter div").mouseleave(function (){
//        $(this).css("background", "white");
//    });
$("#jatekter div").hover(function (){
        $(this).css("background", "pink");
    }, function (){
        $(this).css("background", "white");
    });

$("#jatekter div").click(function(){
    $(this).hide();
    $(this).show(1000);
});
}
