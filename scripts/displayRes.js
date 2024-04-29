import { createCards } from "./createCards.js"
import { createOnlyCard } from "./createOnlyCard.js"

const divResult = document.getElementById("div-result")
const divResults = document.getElementById("div-results")

export const showDisplay = (result, selectOption) => {
    divResults.innerHTML="";

    if(result && selectOption == 'Nombre de plato'){
        createOnlyCard(result)
    }else{
        divResults.classList.remove("hidden")
        createCards(result)
    }
}