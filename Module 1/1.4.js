function    printSchool()
{
    let message;
    let number = Math.floor(Math.random() * 4) + 1;
    if (number == 1) {
        message = 'Gryffindor';
    }
    else if (number == 2){
        message = 'Slytherin';
    }
    else if (number == 3){
        message = 'Hufflepuff';
    }
    else if (number == 4) {
        message = 'Ravenclaw';
    }
    return message;
}
const name = prompt('Type your name to get sorted into wizard shcool :)')
const message = printSchool();
document.querySelector('#target').innerHTML = name + ', you are ' + message + '.';