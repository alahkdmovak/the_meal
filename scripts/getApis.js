import { getData } from "./api.js";

let url;
const dropdown = document.querySelector("#dropdown");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownIcon = document.getElementById("dropdownIcon");
const dropdownButton = document.querySelector("#dropdown-button-text");
const inputSearch = document.getElementById("input-search");
const buttonSearch = document.getElementById("button-search");

const selectApiUrl = (option) => {
  if (option == "Nombre de plato") {
    url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  } else if (option == "Categoria") {
    url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  } else if (option == "Ingrediente principal") {
    url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
  } else if (option == "Area") {
    url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
  }
};

dropdown.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
  dropdownIcon.classList.toggle("rotate-180");
});

dropdownMenu.addEventListener("click", (event) => {
  let selectedOption;
  if (event.target.nodeName === "A") {
    selectedOption = event.target.textContent;
    console.log(selectedOption);
    if (dropdownButton) {
      dropdownButton.textContent = selectedOption;
    }
    dropdownMenu.classList.toggle("hidden");
    dropdownIcon.classList.toggle("rotate-180");
  }
  selectApiUrl(selectedOption);
});

buttonSearch.addEventListener("click", () => {
  getData(url + inputSearch.value);
});
