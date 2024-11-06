'use strict';
function inputDogName()
{
    const DogArray = [];
    for (let i = 0; i < 7; i++)
    {
        let name = prompt('input dog name');
        DogArray.push(name);
    }
    console.log(DogArray);
    return (DogArray);
}

function reverseString(string)
{
    const   new_array = [];
    for (let old_index = 6; old_index > -1;  old_index--)
    {
        let value = string[old_index];
        new_array.push(value);
    }
    return (new_array);
}

function createDogList(array)
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

createDogList(reverseString(inputDogName()));