import { getData } from "./api.js";
import { showDisplay } from "./displayRes.js";

const dropdown = document.querySelector("#dropdown");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownIcon = document.getElementById("dropdownIcon");
const dropdownButton = document.querySelector("#dropdown-button-text");
const inputSearch = document.getElementById("input-search");
const buttonSearch = document.getElementById("button-search");
const pErrorMessage = document.getElementById("error-message")
const pErrorMessageDrop = document.getElementById("error-message-drop")
let selectedOption;
let url;

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
  
  if (event.target.nodeName === "A") {
    selectedOption = event.target.textContent;
    if (dropdownButton) {
      dropdownButton.textContent = selectedOption;
    }
    dropdownMenu.classList.toggle("hidden");
    dropdownIcon.classList.toggle("rotate-180");
  }
  if(selectedOption){
    pErrorMessageDrop.classList.add("hidden")
  }
  selectApiUrl(selectedOption)
});

buttonSearch.addEventListener("click", () => {
  getData(url + inputSearch.value).then((res)=>{
    if(!res){
      pErrorMessage.classList.remove('hidden')
    }else{
      pErrorMessage.classList.add('hidden')
      showDisplay(res, selectedOption)
    }
  }).catch(()=>{
    if(!selectedOption){
      pErrorMessageDrop.classList.remove("hidden")
    }
  });;
});
