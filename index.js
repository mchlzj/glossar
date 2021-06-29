const searchbar = document.getElementById("searchbar");
const searchbutton = document.getElementById('searchbutton');
const content = document.getElementById('content');

const getAllFiles = () => {
    let links = document.getElementsByClassName('panel');
    let children = [];
    for (i = 0; i<links.length; i++) {
        let title = links[i].children[0].innerHTML;
        let url = links[i].children[0].href;
        console.log(title);
        console.log(url);
        let item = 
        { title: title,
            url: url }

        children.push(item);
    }
    return children;
}
const searchInTitle = (text) => {
    const articles = getAllFiles();
    const filteredArticles = articles.filter(e => e.title.toLowerCase().includes(text.toLowerCase()))
    return filteredArticles;
}
const replaceContent = (text) => {
    const searchResults = searchInTitle(text);
    let resultsToDisplay = `<ul>`;
    searchResults.map(result => {
        resultsToDisplay += `<li><a href="${result.url}">${result.title}</a></li>`
    })
    resultsToDisplay += `</ul>`
    if (text !== '') {
        content.innerHTML = resultsToDisplay;
        console.log(resultsToDisplay);
    } else {
        console.log("zero entries");
        window.location.href = window.location.href;
    }
}
const handleSearch = (e) => {
    replaceContent(e.target.value);
}

searchbar.addEventListener("input", handleSearch);

