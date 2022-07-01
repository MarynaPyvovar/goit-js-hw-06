const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const addElements = () => {
  const ingredientsList = ingredients.map(ingredient => {
    const elementsEl = document.createElement('li');
    
    elementsEl.textContent = ingredient;
    elementsEl.classList.add('item');

    return elementsEl;
  })

  ingredientsListEl.append(...ingredientsList)
}

addElements()