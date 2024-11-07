'user strict';
function compareNumbers(a,b)
{
    return b - a;
}
function userInput()
{
    const numberArray = [];
    let inputNumber = parseInt(prompt('Input a number'));
    while (inputNumber != 0)
    {
        numberArray.push(inputNumber);
        inputNumber = parseInt(prompt('Input a number'));
    }
    if (inputNumber == 0)
        
    {
        numberArray.push(inputNumber);
        return (numberArray);
    }
}

function sortArray(array)
{
    array.sort(compareNumbers);
    console.log(array);
}

sortArray(userInput());