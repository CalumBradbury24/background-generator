var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){/*Function for when a colour is changed */
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient); 
   
/*setGradient function is automatically ran when this event occurs */
color2.addEventListener("input", setGradient); 

   
