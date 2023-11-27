window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 400) {
    document.querySelector("header").className = "SfondoVerde";
  } else {
    document.querySelector("header").className = "";
  }
}