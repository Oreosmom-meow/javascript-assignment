'user strict';
function compare_number(a, b)
{
    return (b - a);
}

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

function firstArray()
{
    const numberArray = [];
    let inputNumber = parseInt(prompt('Input a number'));
    numberArray.push(inputNumber);
    return (numberArray);

}

function addNumber(first_array)
{
    const second_arr = first_array;
    let inputNumber = parseInt(prompt('Input a number'));
    while (second_arr.includes(inputNumber) == false)
    {
        second_arr.push(inputNumber);
        inputNumber = parseInt(prompt('Input a number'));
    }
    if (second_arr.includes(inputNumber) == true)
    {
        return (second_arr)
    }
}

function sortArray(array)
{
   array.sort(compare_number);
   reverseString(array);
   console.log(array);
}

sortArray(addNumber(firstArray()));