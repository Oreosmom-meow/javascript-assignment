'user strict';
function    rollDiceandCalculate(number)
{
    let result = 0;;
    for (let i = 0; i < number; i++)
    {
       result += Math.floor(Math.random() * 6) + 1;
       console.log(result);
    }
    return (result);
}
let user_input = parseInt(prompt('Please input a number'))
document.querySelector('#target').innerHTML = 'With ' + user_input + ' you got ' + rollDiceandCalculate(user_input);