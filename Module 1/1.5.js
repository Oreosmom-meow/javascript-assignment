function checkLeap(year)
{
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
    {
        return (' is a leap year.')
    }
    else if (year % 100 == 0 && year % 400 == 0)
    {
        return(' is a leap year.')
    }
    else 
    {
        return (' is not a leap year.')
    }
}

let input_year = parseInt(prompt("Input a year to check if it's leap"));
const result = checkLeap(input_year);
document.querySelector('#target').innerHTML = input_year + result;