'user strict';
function printAllYear(start, end)
{
    let array_year = [];
    for (let i = start; i < end + 1; i++)
    {
        array_year.push(i);
    }
    return (array_year);
}
const start = parseInt(prompt('Input a start year'));
const end = parseInt(prompt('input an end year'))
const data = printAllYear(start, end);
let list = document.getElementById("target");
for (i = 0; i < data.length; i++)
{
    let li = document.createElement('li');1
    li.innerText = data[i];
    console.log(li);
    list.appendChild(li);
}

