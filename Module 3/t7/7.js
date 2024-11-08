'use strict';
function hoverEffect()
{
    let trigger = document.getElementById("trigger");
    let image = document.getElementById("target");
    trigger.addEventListener("mouseenter", function() {
        image.src = "img/picB.jpg";  
    });
    trigger.addEventListener("mouseleave", function() {
        image.src = "img/picA.jpg"; 
    });
}

hoverEffect();