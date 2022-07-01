const categoriesEl = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesEl.length}`);

const elementsEl = () => {
    categoriesEl.forEach(category => {
            const categoryNameEl = category.firstElementChild.textContent;
            const elementsQuantity = category.lastElementChild.children.length;

            console.log(`Category: ${categoryNameEl}
Elements: ${elementsQuantity}`);
        })
    
};

elementsEl()