function createList()
{
    const array = ['First item', 'Second item', 'Third item']
    const list = document.querySelector('#target');
    let arrayItems = "";
    for (let i = 0; i < array.length; i++)
    {
        arrayItems += `<li>${array[i]}</li>`;
    }
    list.innerHTML = arrayItems;
}

createList();