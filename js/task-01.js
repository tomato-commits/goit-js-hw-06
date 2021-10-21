const categories = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`);
console.log('');

categories.forEach((category) => {
    const headingText = category.children[0].textContent;
    const categoriesQuantity = category.children[1].children.length;

    console.log(`Categories: ${headingText}`);
    console.log(`Elements: ${categoriesQuantity}`);
    console.log('');
});