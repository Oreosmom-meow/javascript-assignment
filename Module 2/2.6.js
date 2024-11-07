'use strict';
function roll_dice()
{
    let dice_number = Math.floor(Math.random() * 6) + 1;
    const numberArray = []
    numberArray.push(dice_number);
    return (numberArray);
}

function numberArray(array)
{
    const first_array = roll_dice();
    let dice_number = Math.floor(Math.random() * 6) + 1;
    while (first_array.includes(6) == false)
    {
        dice_number = Math.floor(Math.random() * 6) + 1;
        first_array.push(dice_number);
    }
    if (first_array.includes(6) == true)
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
    let choice = confirm('Do you want to print out dice number list until it is 6?');
    if (choice == true)
    {
        createNumberist(numberArray(roll_dice()));
    }
}

start();