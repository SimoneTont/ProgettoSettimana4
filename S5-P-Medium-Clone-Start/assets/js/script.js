window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > (window.innerHeight/2)) {
    document.querySelector("button").className= "SfondoVerde";
    document.querySelector("header").className= "SfondoBianco";
  } else {
    document.querySelector("button").className= "";
    document.querySelector("header").className=""
  }
}