function parseInput()
{
    let showName= document.getElementById("query").value;
    document.querySelector('#target').innerHTML = "You are searching for: " + showName;
    if (showName.value != "")
    {
        APIQuery(showName);
    }
    else
    {
        alert('Invalid input');
    }
}

async function APIQuery(showName)
{
    const URL = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(showName)}`;
    const response = await fetch(URL);
    const jsonData = await response.json();
    const container = document.getElementById("results");
    container.innerHTML = "";
    jsonData.forEach(result => {
        const show = result.show;
        const name = show.name;
        const url = show.url;
        const mediumImage = show.image ? show.image.medium : "No image url";
        const summary = show.summary;
        const article = document.getElementById('results');
        const title = document.createElement("h2");
        title.textContent = name;
        article.appendChild(title);
        const link = document.createElement("a");
        link.href = url;
        link.textContent = `${url}`;
        link.target = "_blank";
        article.appendChild(link);
        if (mediumImage != "No image url")
        {
            const image = document.createElement("img");
            image.src = mediumImage;
            image.alt = `${name}`;
            article.appendChild(image);
        }
        const summaryContent = document.createElement("div");
        summaryContent.innerHTML = summary;
        article.appendChild(summaryContent);
    });
}



document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    parseInput();
});
