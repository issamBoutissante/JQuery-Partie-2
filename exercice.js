$(function () {
  $("ul").hide();
  $("ul").show();
  $("ul[class='rouge']").css("color", "red");
  $("div ul").css("color", "blue");
  $("*").css("font-size", "30px");
  $("div ul li.pair").css("color", "green");
  $("li.impair").css("color", "yellow");
});
