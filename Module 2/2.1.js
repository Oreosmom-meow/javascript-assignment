'use strict';
function reverseString(string)
{
    const   new_array = [];
    for (let old_index = 4; old_index > -1;  old_index--)
    {
        let value = string[old_index];
        console.log('value = ' + value);
        new_array.push(value);
    }
    return (new_array);
}

function storeInput()
{
    const inputArray = [];
    const input1 = prompt('input1');
    const input2 = prompt('input2');
    const input3 = prompt('input3');
    const input4 = prompt('input4');
    const input5 = prompt('input5');

    inputArray.push(input1, input2, input3, input4, input5);
    console.log(inputArray);
    return (inputArray)
}
const originalArray = storeInput();
const reverse = reverseString(originalArray);
document.querySelector('#target').innerHTML = 'for original string ' + originalArray +' the reversed string is ' + reverse;