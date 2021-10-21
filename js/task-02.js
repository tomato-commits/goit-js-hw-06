const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientElements = [];
const list = document.getElementById('ingredients');

ingredients.forEach((ingredient) => {
  const element = document.createElement('li');

  element.textContent = ingredient;
  element.classList.add('item');
  ingredientElements.push(element);
});

list.append(...ingredientElements);
