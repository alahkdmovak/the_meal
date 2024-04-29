const card = document.getElementById("card");
const cardImg = document.getElementById("card-img");
const cardName = document.getElementById("card-name");
const cardDivTag = document.getElementById("card-div-tag");
const cardInstructions = document.getElementById("card-instructions");
const cardIngredients = document.getElementById("card-div-ingredients");
const divResult = document.getElementById("div-result");
const divResults = document.getElementById("div-results");

export const createOnlyCard = (result) => {
    divResult.classList.remove("hidden")
  divResults.classList.add("hidden");
  
  card.classList.remove("hidden");
  cardImg.src = result[0].strMealThumb;
  cardName.textContent = result[0].strMeal;
  if (result[0].strTags) {
    const tags = result[0].strTags.split(",");
    cardDivTag.innerHTML = "";
    tags.forEach((tag) => {
      const tagElement = document.createElement("div");
      tagElement.classList.add(
        "p-1",
        "rounded-lg",
        "bg-emerald-500",
        "text-white",
        "font-medium",
        "text-sm"
      );
      tagElement.textContent = tag.trim();
      cardDivTag.appendChild(tagElement);
    });
  }
  cardInstructions.textContent = result[0].strInstructions;
  for (let i = 1; i <= 20; i++) {
    const ingredients = document.createElement("div");
    ingredients.classList.add(
      "p-1",
      "rounded-lg",
      "bg-yellow-400",
      "text-white",
      "font-medium",
      "text-sm"
    );
    const ingredient = result[0]["strIngredient" + i];
    if (ingredient) {
      ingredients.textContent = ingredient;
      cardIngredients.appendChild(ingredients);
    } else {
      break;
    }
  }
};
