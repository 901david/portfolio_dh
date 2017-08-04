// This controls the contact me pop out
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
// Global variable of portfolio array of objects
var portfolioProjects = [];
// Thisfunction will create portfolio projects utilizing the constructor function and then display htem in the portfolio area.  It was constructed in this manner so that when new projects want to be added in it will ease this process andmake code more DRY
function createAndPushProjects () {
    let trivia = new BuildPortfolio("The Office Trivia Game", "images/portimages/trivia.png", "https://github.com/901david/TriviaGame", "https://901david.github.io/TriviaGame/", "This is a basic trivia game app focused around the hit comedy series - The Office.  As you navigate through trivia questions enjoying the hilarious associated animated gifs and sound bites, you will see the quiz is designed to automatically move the user through the quiz using Javascript setTimeout().  At the conclusion of the quiz the user is given a 'grade' on how they did which is based on how many questions they get right and wrong in addition to how much time they take.  Can you get an Expert grade?", "Html, Css, Javascript");
    let centennial = new BuildPortfolio("The Centennial Charge","images/portimages/charge.png", "https://github.com/901david/centennialCharge", "https://901david.github.io/centennialCharge/", "This was a group project I worked on mainly backend for. The idea was to present ironic Colorado news articles and Colorado styled solutions. My work on this project included creating the live comment system that allows users to interact with each other within the site. This includes re-arranging the comments based on how many likes and dislikes they have received. In addition, I was responsible for using the Ny Times API which was accessed using Ajax calls and then displaying Colorado based 'real' news articles underneath our ironic false ones.  I was also responsible for creating the Javascript for the contact page.  Lastly, I assisted in assuring that the site was mobile responsive.", "Html, Css, Javascript, Ajax, Api's, Animate Css, Firebase");
    let flashCardGen = new BuildPortfolio("Flash-Card Generator", "images/portimages/flashgen.png", "https://github.com/901david/Flashcard-Generator", "https://901david.github.io/Flashcard-Generator/", "");
    let flashCardFun = new BuildPortfolio("FlashCard Fun", "images/portimages/flashfun.png", "https://github.com/901david/Flashcard-Fun", "https://901david.github.io/Flashcard-Fun/","The inspiration for FlashCard Fun was the Node app I created FlashCard Generator.  Since the Node portion was very basic I did not feel the need to connect the two apps, but I did think that my idea for FlashCard Fun was worth creating in addition.  This web app uses Firebase Authorization to allow users to create usernames. When signed in the user can keep a running tab of Flash Cards they have created to study from. The Flash Cards are also able to be broken down by groups which alllows for maintaining several different subjects you can study. Then you are able to review the cards you have created for studying purposes.  I felt like this would be a fantastic way to be able to memorize certain terms and concepts", "Html, Bootstrap, Css, Animate Css, Firebase, Javascript, Photoshop");
    let starWars = new BuildPortfolio("Star Wars Battle", "images/portimages/starwars.png");
    let rockPapSciss = new BuildPortfolio("Rock Paper Scissors - Multiplayer", "images/portimages/RPS.png");
    let liriNode = new BuildPortfolio("'LIRI' - Node Application", "images/portimages/lirinode.png");

    portfolioProjects.push(centennial, rockPapSciss, trivia, liriNode, flashCardGen, flashCardFun, starWars);
    function populateScreen() {
      for(let i = 0; i < portfolioProjects.length;i++) {
          $("#portImages").append('<div class="col-xs-10 col-sm-6 col-md-5 col-lg-4 centerMeTimbers"><div class="col-xs-8 col-sm-8 col-md-8 col-lg-12"><p class="portTitle">' +  portfolioProjects[i].title + '</p><img src=' + portfolioProjects[i].imagePath + ' alt="Portfolio Image" class="img-responsive"><p class="portTitle">Click for more info</p></div></div>');
          // portfolioProjects[i].gitLink
          // portfolioProjects[i].gitSite
          // portfolioProjects[i].description
      }
      $(".centerMeTimbers").click(()=>{alert("Click-works");});
    };
    populateScreen();
};
// This will be a constructor function that will build up my portfolio pieces.
function BuildPortfolio (projectTitle, image, githublink, liveSite, description, technology) {
  this.title = projectTitle;
  this.imagePath = image;
  this.gitLink = githublink;
  this.gitSite = liveSite;
  this.description = description;
  this.technology = technology;
};
$(document).ready(function () {
  setTimeout(()=>{
    $("#contactMe").removeClass("hide").addClass("animated slideInLeft");
  }, 2000);
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
    createAndPushProjects();
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
