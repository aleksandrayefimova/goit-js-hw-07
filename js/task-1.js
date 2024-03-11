const categoriesList = document.querySelectorAll('ul#categories li.item');

console.log(`Quantity of categories is : ${categoriesList.length}`);

categoriesList.forEach((category) => {
    const categoryTitle = category.firstElementChild.textContent;
    console.log(`category: ${categoryTitle}`);

    const categoryQuantity = category.lastElementChild.children.length;
console.log(`elements quantity is: ${categoryQuantity}`);

})