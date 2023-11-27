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
//Funzione m random
let arrayG=document.querySelectorAll("g [opacity]")
let n=document.querySelectorAll("g [opacity]").length;
let casuale=0;
function giveMeRandom ()
{
    {
        for(i = 0; i < n; i++)
        {
            casuale=Math.round(Math.random());
            console.log(arrayG[i].attributes.opacity)
            arrayG[i].attributes.opacity.value=casuale;
        }
    }
}
giveMeRandom();
setInterval(giveMeRandom, 500);