function contactBar () {
  let dataVal = $(".contactClick").attr("data-active");
  console.log(dataVal);
    if (dataVal === "closed") {
      $("#switchHere").removeClass("glyphicon-chevron-right");
      $("#switchHere").addClass("glyphicon-chevron-left");
    $(".contactClick").attr("data-active", "open");
    $("#contactInfo").toggle(function () {
    $(this).parent().animate({right:'0px'}, {queue: false, duration: 500});
    }, function () {
    $(this).parent().animate({right:'-280px'}, {queue: false, duration: 500});
    });
    }
    else {
    $(".contactClick").attr("data-active", "closed");
    $("#contactInfo").toggle(function () {
    $(this).parent().animate({left:'0px'}, {queue: false, duration: 500});
    }, function () {
    $(this).parent().animate({left:'-280px'}, {queue: false, duration: 500});
    });
    $("#switchHere").removeClass("glyphicon-chevron-left");
    $("#switchHere").addClass("glyphicon-chevron-right");
    }
};
$(document).ready(function () {
  $(".contactClick").click(()=>{contactBar();});
  $("#emailFormat").click(()=>{contactBar();});
$(".textAlign").click(function () {
  $(".textAlign").removeClass("active");
  let dataVal = $(this).attr("data-tag");
  if (dataVal === "objective") {
    $("#objectiveButt").addClass("active");
    $("#background").addClass("hide");
    $("#portImages").addClass("hide");
    $("#contactPort").addClass("hide");
    $("#education").addClass("hide");
    $("#leftSide").removeClass("hide");
    $("#rightSide").removeClass("hide");
    $("#bottomSide").removeClass("hide");
    $("#objective").removeClass("hide");

    // ad din portfolio stuff
  }
  else if (dataVal === "background") {
    $("#backgroundButt").addClass("active");
    $("#objective").addClass("hide");
    $("#portImages").addClass("hide");
    $("#contactPort").addClass("hide");
    $("#education").addClass("hide");
    $("#leftSide").removeClass("hide");
    $("#rightSide").removeClass("hide");
    $("#bottomSide").removeClass("hide");
    $("#background").removeClass("hide");
  }
  else if (dataVal === "portfolio") {
    $("#leftSide").addClass("hide");
    $("#rightSide").addClass("hide");
    $("#bottomSide").addClass("hide");
    $("#portImages").removeClass("hide");
    $("#portfolioButt").addClass("active");
    $("#contactPort").removeClass("hide");
  }
  else if (dataVal === "education") {
    $("#educationButt").addClass("active");
    $("#objective").addClass("hide");
    $("#portImages").addClass("hide");
    $("#contactPort").addClass("hide");
    $("#background").addClass("hide");
    $("#leftSide").removeClass("hide");
    $("#rightSide").removeClass("hide");
    $("#bottomSide").removeClass("hide");
    $("#education").removeClass("hide");
  }
  else {
    console.log("A Fatal Error has occurred");
  }

});
});
