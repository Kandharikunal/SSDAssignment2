/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
//console.log("hi");


$(document).ready(function() {
  $("#project").click(function() {
   alert("dgfg");
  });
});

$(document).ready(function() {
  $("#workExperience").click(function() {
   $("#workExperienceDiv").toggle();
  });
});

$(document).ready(function() {
  $("#projects").click(function() {
   $("#projectsDiv").toggle();
  });
});


$(document).ready(function() {
  $("#h1").click(function() {
   $("#d1").toggle();
  });
});

$(document).ready(function() {
  $("#h2").click(function() {
   $("#d2").toggle();
  });
});

$(document).ready(function() {
  $("#h3").click(function() {
   $("#d3").toggle();
  });
});