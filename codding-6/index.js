$(document).ready(function(){
   $(".nav-item")
   .append("<div class='bg'></div>")
   .mouseenter(function(){$(this).find(".bg").css({"left":"0"})})
   .mouseleave(function(){$(this).find(".bg").css({"left":"-300px"})})
});