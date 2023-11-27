window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 400) {
    document.querySelector("button").className= "SfondoVerde";
    document.querySelector("header").className= "SfondoBianco";
  } else {
    document.querySelector("button").className= "";
    document.querySelector("header").className=""
  }
}