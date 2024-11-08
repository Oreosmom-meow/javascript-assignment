function concat(str1, str2, str3, str4)
{
    let dest_str = "";
    for (let i in str1)
    {
        dest_str += str1[i];
    }
    for (let j in str2)
    {
        dest_str += str2[j];
    }
    for (let k in str3)
    {
        dest_str += str3[k];
    }
    for (let h in str4)
    {
        dest_str += str4[h];
    }
    return (dest_str);
}



const string1 = "Oreo";
const string2 = " is";
const string3 = " a cat";
const string4 = " who is chubby";
concat(string1, string2, string3, string4);
console.log(concat(string1, string2, string3, string4));
document.querySelector('#original').innerHTML = 'string1= ' + string1 + '<br>string2=' + string2 + '<br>string3=' + string3 + '<br>string3=' + string4;
document.querySelector('#target').innerHTML = '<br>result of concat: ' + concat(string1, string2, string3, string4);