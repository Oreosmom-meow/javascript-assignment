function even(array)
{
    const even_array = [];
    for (let i = 0; i < array.length; i++)
    {
        if (check_even(array[i]) == true)
        {
            even_array.push(array[i]);
        }
    }
    return (even_array);
}

function check_even(number)
{
    if (number % 2 == 0)
    {
        return (true);
    }
    else
        return (false);
}


const original_array = [1,2,3,4,5,6,7,13,16];
document.querySelector('#original').innerHTML = 'original string = ' + original_array + '<br>';
document.querySelector('#target').innerHTML = 'even array = ' + even(original_array);