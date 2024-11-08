function createList()
{
    const array = ['First item', 'Second item', 'Third item']
    let list = document.getElementById("target");
    for (let i = 0; i < 3; i++)
        {
            let li = document.createElement('li');
            li.innerText = array[i];
            console.log(li);
            if (i == 1) {
                li.classList.add("my-item");
            }
            list.appendChild(li);
        }
}

createList();