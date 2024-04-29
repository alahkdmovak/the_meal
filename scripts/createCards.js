import { getData } from "./api.js"
import { createOnlyCard } from "./createOnlyCard.js"
import { showDisplay } from "./displayRes.js"

const divResults = document.getElementById("div-results")
const divResult = document.getElementById("div-result")

const handleClick = async({target}) => {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    const data = await getData(url + target.id)
    createOnlyCard(data)
}


export const createCards = (result) => {
    divResult.classList.add("hidden")
    result.map((meal)=> {
        const divCard = document.createElement("div")
        divCard.id = meal.strMeal
        divCard.classList.add("p-2", "rounded-lg", "bg-white", "shadow-md", "flex", "flex-col", "items-center", "gap-2", "max-w-[300px]", "w-full", "cursor-pointer")

        divCard.addEventListener("click", (e) => handleClick(e))

        const imgCard = document.createElement("img")
        imgCard.classList.add("w-full", "max-w-[100px]")
        imgCard.src = meal.strMealThumb
        imgCard.id = meal.strMeal
        divCard.appendChild(imgCard)

        const titleCard = document.createElement("p");
        titleCard.classList.add("text-sm","font-bold");
        titleCard.textContent = meal.strMeal;
        titleCard.id = meal.strMeal
        divCard.appendChild(titleCard)

        divResults.appendChild(divCard)
    })
}