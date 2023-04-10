const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');
const createImageItem = ({url, alt}) => {
  return`<li class="gallery__item">
  <img src="${url}" alt="${alt}" class="gallery__img"></li>`;
};

const markUp = images.map(createImageItem).join('');

list.insertAdjacentHTML('beforeend', markUp);

const body = document.querySelector('body');
body.style.width = "1260px";
list.style.display = "flex";
list.style.gap = "30px";
list.style.listStyle = "none";

const item = document.querySelectorAll('.gallery__item');
item.forEach(a => a.style.flexBasis = "calc((100%-60px)/3)");

const img = document.querySelectorAll('.gallery__img');
img.forEach(b => b.style.width = "100%");
img.forEach(c => c.style.height = "100%");





