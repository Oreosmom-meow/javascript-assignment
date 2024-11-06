'user strict';
function checkProbablity(roll_times, input_sum)
{
    let sum = 0;
    let dice_number;
    let probability = 0;
    let result = 0;
    let i;
    let outer_index = 0;
    for (outer_index = 0; outer_index < 100000; outer_index++)
    {
        if (result == 0)
            {
                for ( i = 0; i < roll_times; i++)
                    {
                        dice_number = Math.floor(Math.random() * 6) + 1;
                        sum = sum + dice_number;
                    }
                if (sum == input_sum)
                    {
                       result = 1;
                       sum = 0;
                    }
                else
                    sum = 0;
            }
        else if (result == 1)
            {
                probability++;
                result = 0;
            }
    }
    console.log(probability);
    return (probability);
}
const roll_times = parseInt(prompt('Input how many times you want the dice to roll'));
const input_sum = parseInt(prompt('Input what is the sum of the number'));
let percentage = (checkProbablity(roll_times, input_sum) / 100000) * 100;
document.querySelector('#target').innerHTML = 'The probability is  ' + percentage.toFixed(2) + '%';