const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

const listItemsMarkup = createListItemsMarkup(tech);

// refs.list.innerHTML = listItemsMarkup; // Заменяем на 
populateList(listItemsMarkup); 

refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

function createListItemsMarkup(items) {
  return items.map(item =>
    `<li>
    ${item.label}
    </li>`)
    .join('');
}

function onFilterChange(evt) {
  // console.log('INPUT');
  const filter = evt.target.value.toLowerCase();

// Сделаем новый массив чтобы из оригинала ничего не удалять, как бы маленькая локальная база данных
// Каждый раз внутри функции создается новый массив чтобы нарисовать в интерфейсе - наз-ся 'агрегация'
  const filteredItems = tech.filter(t =>
    t.label.toLowerCase().includes(filter),
  );

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  // refs.list.innerHTML = listItemsMarkup; // Заменяем на 
  populateList(listItemsMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}

///------------------------------------------------------

// const refs = {
//   list: document.querySelector('.js-list'),
//   input: document.querySelector('#filter'),
// };

// refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

// const listItemsMarkup = createListItemsMarkup(tech);
// populateList(listItemsMarkup);

// function createListItemsMarkup(items) {
//   return items.map(item => `<li>${item.label}</li>`).join('');
// }

// function onFilterChange(evt) {
//   console.log('INPUT');
//   const filter = evt.target.value.toLowerCase();

//   const filteredItems = tech.filter(t =>
//     t.label.toLowerCase().includes(filter),
//   );

//   const listItemsMarkup = createListItemsMarkup(filteredItems);
//   populateList(listItemsMarkup);
// }

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }


// Если надо искать с ошибками (напр. 'JvaScript') - пушистый поиск - Fuse.js библиотека