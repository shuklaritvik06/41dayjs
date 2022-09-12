const searchInput = document.getElementById("query");
const searchBtn = document.getElementById("searchBtn");
const searchTitle = document.getElementById("searchTitle");
const searchResultArea = document.getElementById("searchArea");
const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=`;
searchBtn.addEventListener("click",async () => {
    const query = searchInput.value;
    if (query === "") {
        alert("Please enter search input!");
    } else {
        await getResult(query);
    }
});
async function getResult(a){
    const response = await fetch(apiUrl+`${a}`)
    const results = await response.json();
    displayResults(results,a);
}
function displayResults(r,query){
    let output = "";
    searchTitle.innerHTML = `Search results: ${query}`
    r.query.search.forEach((result)=>{
        let resultUrl = `https://en.wikipedia.org/?curid=${result.pageid}`;
        searchResultArea.classList.remove("d-none");
        output+=`
                    <div class="content d-flex flex-column flex-start">
                        <a href="${resultUrl}" target="_blank" id="title">${result.title}</a>
                        <a href="${resultUrl}" target="_blank" id="url" class="text-success text-left">${resultUrl}</a>
                        <p id="desc">${result.snippet}</p>
                    </div>
        `
    })
    searchResultArea.innerHTML = output;
}
