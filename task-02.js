const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const idIngredients = document.querySelector("#ingredients");

const result = createListIngredients(ingredients);
idIngredients.append(result);

function createListIngredients(ingredients) {
  const container = new DocumentFragment();
  ingredients.map(elem => {
    const liTag = document.createElement("li");
    liTag.textContent = elem;
    container.appendChild(liTag);
  });
  return container;
}
