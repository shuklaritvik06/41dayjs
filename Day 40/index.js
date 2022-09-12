const search = document.querySelector(".bi-search");
const cross = document.querySelector(".bi-x-lg");
const searchBox = document.querySelector("#search");
search.addEventListener("click", () => {
  showCross();
  showSearch();
});

cross.addEventListener("click", () => {
  hideCross();
  hideSearch();
});

function showCross() {
  cross.style.transform = "translateY(0)";
  search.style.display = "none";
}

function hideCross() {
  cross.style.transform = "translateY(-200px)";
  search.style.display = "block";
}

function showSearch() {
  searchBox.style.transform = "translateX(0)";
  setTimeout(() => {
    searchBox.style.width = `400px`;
  }, 1000);
  searchBox.setAttribute("placeholder", "Search...");
}

function hideSearch() {
  searchBox.setAttribute("placeholder", "");
  searchBox.style.width = `50px`;
  setTimeout(() => {
    searchBox.style.transform = "translateX(200%)";
  }, 1000);
}
