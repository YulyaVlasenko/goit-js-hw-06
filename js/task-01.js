const list = document.querySelector('#categories');
// const countCategories = list => {
//     return `Number of categories: ${[...list.children].length}`;  
// }
// console.dir(countCategories(list));
console.dir(`Number of categories: ${[...list.children].length}`);

const items = document.querySelectorAll('.item');
items.forEach(item => {
    const itemName = item.querySelector('h2').textContent;
    const itemElements = item.querySelectorAll('li').length;

    console.dir(`Category: ${itemName}`);
    console.dir(`Elements: ${itemElements}`);
});

