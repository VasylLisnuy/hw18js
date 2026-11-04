const categoriesRef = document.querySelectorAll('#categories > .item');

console.log(`У списку ${categoriesRef.length} категорії.`);

categoriesRef.forEach(category => {
  const title = category.querySelector('h2');
  const items = category.querySelectorAll('ul li');

  console.log(`Категорія: ${title.textContent}`);
  console.log(`Кількість елементів: ${items.length}`);
});



const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsRef = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;

  return li;
});

ingredientsRef.append(...items);


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

const galleryRef = document.querySelector('#gallery');

const markup = images.map(({ url, alt }) => {
  return `
    <li class="gallery-item">
      <img src="${url}" alt="${alt}">
    </li>
  `;
}).join('');

galleryRef.insertAdjacentHTML('beforeend', markup);