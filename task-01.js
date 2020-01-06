const slc = {
  Categories: document.querySelector("#categories"),
  Headers: document.querySelectorAll(".item h2")
};

console.log(`В списке ${slc.Categories.children.length} категории.`);

slc.Headers.forEach(element => {
  console.log(`Категория: ${element.textContent}`);
  const CategoryItems = element.nextElementSibling;
  console.log(`Количество элементов: ${CategoryItems.children.length}`);
});
