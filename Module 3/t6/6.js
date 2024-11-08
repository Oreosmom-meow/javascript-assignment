'use strict';
function alertClick()
{
    let button = document.getElementById("button");
    button.addEventListener("click", function() {
        alert("Button Clicked");
    });
}
alertClick();