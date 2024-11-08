'use strict';

function createList()
{
    const names = ['John', 'Paul', 'Jones'];
    const list = document.querySelector('#target');
    let arrayItems = "";
    for (let i = 0; i < names.length; i++)
    {
        arrayItems += `<li>${names[i]}</li>`;
    }
    list.innerHTML = arrayItems;
}

createList();