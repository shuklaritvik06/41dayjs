const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("query");
const lyricsArea = document.getElementById("lyrics");
const apiUrl = "https://api.lyrics.ovh";
searchBtn.addEventListener("click",async () => {
    let searchQuery = searchInput.value.trim();
    if (!searchQuery) {
        alert("Please enter a query");
        return;
    }
    await search(searchQuery);
    lyricsArea.classList.remove("d-none");
});
async function search(a){
    const response = await fetch(`${apiUrl}/suggest/${a}`);
    const result = await response.json();
    displayResults(result);
}
function displayResults(a){
    let htmlData = "";
    a.data.forEach((result)=>{
        htmlData+=`
         <div class="mb-3">
            <strong class="me-3">${result.artist.name}</strong>
            <span class="me-3">${result.title}</span>
            <span class="btn btn-success" data-artist="${result.artist.name}" data-name="${result.title}" id="getBtn">Get Lyrics</span>
            <hr>
        </div>
        `;
    })
    lyricsArea.innerHTML = htmlData;
}
lyricsArea.addEventListener("click",async (e) => {
    const elementClicked = e.target;
    if (elementClicked.id === "getBtn") {
        const artist = elementClicked.getAttribute("data-artist");
        const songName = elementClicked.getAttribute("data-name");
        await getLyrics(artist, songName);
    }
})
async function getLyrics(a,b){
    const response = await fetch(`${apiUrl}/v1/${a}/${b}`);
    const data = await response.json();
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");
    lyricsArea.innerHTML = `<strong>${a}-${b}</strong><br>${lyrics}`;
}