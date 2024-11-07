'use strict';
function roll_dice(number)
{
    let dice_number = Math.floor(Math.random() * number) + 1;
    const numberArray = []
    numberArray.push(dice_number);
    return (numberArray);
}

function numberArray(number)
{
    const first_array = roll_dice(number);
    let dice_number = Math.floor(Math.random() * number) + 1;
    while (first_array.includes(number) == false)
    {
        dice_number = Math.floor(Math.random() * number) + 1;
        first_array.push(dice_number);
    }
    if (first_array.includes(number) == true)
    {
        return (first_array);
    }
}

function createNumberist(array)
{
    let list = document.getElementById("target");
    for (let i = 0; i < array.length; i++)
        {
            let li = document.createElement('li');
            li.innerText = array[i];
            console.log(li);
            list.appendChild(li);
        }
}

function start()
{
    const choice = parseInt(prompt('Enter a number as the sides of dice.'))
    createNumberist(numberArray(choice));
}

start();