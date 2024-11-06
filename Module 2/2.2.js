'user strict';

function inputNumberandName()
{
    const guestArray = [];
    for (let number = parseInt(prompt('Input a number indicating guests numbers')); number > 0; number--)
    {
        let name = prompt('input guest name');
        guestArray.push(name);
    }
    console.log(guestArray);
    return (guestArray);
}

function createNameList(array)
{
    let list = document.getElementById("target");
    for (i = 0; i < array.length; i++)
        {
            let li = document.createElement('li');
            li.innerText = array[i];
            console.log(li);
            list.appendChild(li);
        }
}

createNameList(inputNumberandName());
