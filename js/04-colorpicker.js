const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createColorCardsMarkup(colors) {
  return colors.map(({ hex, rgb }) => {
    return `
    <div class="color-card">
     <div><div><div> <div
     class="color-swatch"
     data-hex="${hex}"
     data-rgb="${rgb}"
     style="background-color: ${hex}"
   ></div></div></div></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div>
    </div>
    `;
  }).join('');
}

// сделаем чтобы по клику на цвет менять цвет боди

paletteContainer.addEventListener('click', onPaletteContainerClick);

function onPaletteContainerClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains('color-swatch')
  // 'contains' - проверяет наличие класса на элементе
  if (!isColorSwatchEl) {
    return;
  }
  // console.log(evt.target.dataset.hex);

  // Добавим на элемент класс 'is-active'

  // const swatchEl = evt.target;
  // const parentColorCard = swatchEl.parentNode;  // 'parentNode' - хранит родителя элемента
  // console.log(parentColorCard);  // но если добавим разметку, то сломается
  //  поэтому найдем предка с помощью метода 'closest'  
    
  // const currentActiveCard = document.querySelector('.color-card.is-active');
  //   if (currentActiveCard) {
  //   currentActiveCard.classList.remove('is-active');
  // }; // Выносим это в отдельную функцию:
  removeActiveCardClass()

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest('.color-card');
  
  // parentColorCard.classList.add('is-active'); // выносим эту строку в функцию
  addActiveCardClass(parentColorCard);
  // document.body.style.backgroundColor = swatchEl.dataset.hex;  // эту строку заменяем на:
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}

//---------------------------------------------------

// function onPaletteContainerClick(evt) {
//   const isColorSwatchEl = evt.target.classList.contains('color-swatch');

//   if (!isColorSwatchEl) {
//     return;
//   }

//   const swatchEl = evt.target;
//   const parentColorCard = swatchEl.closest('.color-card');

//   removeActiveCardClass();
//   addActiveCardClass(parentColorCard);
//   setBodyBgColor(swatchEl.dataset.hex);
// }

// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector('.color-card.is-active');

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active');
//   }
// }

// function addActiveCardClass(card) {
//   card.classList.add('is-active');
// }