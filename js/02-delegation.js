/*
 * Делегирование событий -используется когда есть однотипная коллекция элементов и мы хотим
 обработать одно событие для всех элементов одинаково
 * - общий слушатель
 * - фильтр цели клика
 */

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(evt) {
  // console.log(evt.target);
  // console.log(evt.target.textContent);
  // console.log(evt.target.nodeName);
  if (evt.target.nodeName !== 'BUTTON') {  // фильтр цели клика - фильтр цели делигации
    return;
  }

  console.log(evt.target.textContent);
}

/*
 * Код добавления кнопок
 */
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}