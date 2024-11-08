function printShowInfo()
{
    let showName= document.getElementById("query").value;
    console.log("You are searching for: " + showName);
    if (showName.value != "")
    {
        console.log("Results from TVapi:");
        APIQuery(showName);
    }
    else
    {
        console.log("Invalid input");
    }
}

async function APIQuery(showName)
{
    const URL = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(showName)}`;
    const response = await fetch(URL);
    const jsonData = await response.json();
    console.log(jsonData);
}



document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    printShowInfo();
});
