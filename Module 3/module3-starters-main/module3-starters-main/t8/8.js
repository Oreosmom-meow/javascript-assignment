'use strict';
function ClickTrigger()
{
    let button = document.getElementById("start");
    button.addEventListener("click", function() {
        var x = document.getElementById("operation").value;
        if (x == 'add')
            {
                document.getElementById("result").innerHTML = add(storeNumber());
            }
        else if (x == 'sub')
            {
                document.getElementById("result").innerHTML = sub(storeNumber());
            }
        else if (x == 'multi')
            {
                document.getElementById("result").innerHTML = multi(storeNumber());
            }
        else if (x == 'div')
            {
                document.getElementById("result").innerHTML = div(storeNumber());
            }
    });
}

function storeNumber()
{
    const num_array = [];
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    num_array.push(parseInt(num1.value));
    num_array.push(parseInt(num2.value));
    console.log(num_array);
    return (num_array);
}

function add(number_array)
{
    console.log(number_array[0] + number_array[1]);
    return (number_array[0] + number_array[1]);
}

function sub(number_array)
{
    return (number_array[0] - number_array[1]);
}

function multi(number_array)
{
    return (number_array[0] * number_array[1]);
}

function div(number_array)
{
    return (number_array[0] / number_array[1]);
}


ClickTrigger();