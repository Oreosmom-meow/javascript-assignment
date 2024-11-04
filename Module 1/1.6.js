function printSquare(choice)
{
    if (choice == 1)
        {
            let number = parseInt(prompt('Input a number to get the square root'))
            if (number < 0)
            {
                return ('The square root of a negative number is not defined')
            }
            else
            {
                return (Math.sqrt(number));
            }
        }
        else
        {
            return ('The square root is not calculated.')
        }
}
const choice = confirm('Should I calculate the square root?');
result = printSquare(choice);
document.querySelector('#target').innerHTML = result;
