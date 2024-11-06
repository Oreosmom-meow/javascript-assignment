'user strict';
function checkPrime(number)
{
    let message;
    if (number == 1)
    {
        message = '1 is neither prime or composite number';
    }
    else if (number > 1)
        {
            let index = 2;
            while (index < number /2)
            {
                if (number % index == 0)
                {
                    message = 'The number is not prime.';
                    break;
                }
                else
                {
                    message = 'The number is prime.';
                }
                index++;
            }
        }
    return (message);
}

const number = parseInt(prompt('Pleaes input a nubmer to check if it is prime or not'));
document.querySelector('#target').innerHTML = checkPrime(number);