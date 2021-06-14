const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

function getRangomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Сгенерируем кучу кнопок
createPaletteItems(50);

colorPalette.addEventListener('click', selectColor);

function selectColor(event) {
  // console.log(event.target.nodeName); //nodeName - имя узла BUTTON, DIV
  // if (event.target.nodeName !== 'BUTTON') { // но если в будущем поменяется разметка, то не будет работать
  //   return;
  // }
  const color = event.target.dataset.color;
  if (!color) {
    return;
  }  
  
  updateOutput(color);
}

function createPaletteItems(amount) {
   const items = [];
  for (let i = 0; i < amount; i++) {
    // На каждой итерации создадим кнопку 
    const color = getRangomColor();
    const button = document.createElement('button');
    button.type = 'button';   // по умолчанию 'submit'
    button.dataset.color = color; // У каждой кнопки появл-ся дата атрибут data-color с цветом
    button.classList.add('item');
    button.style.backgroundColor = color;   
    items.push(button);
  
  }
  colorPalette.append(...items);
  // console.log(items);
}

function updateOutput(color) {
  output.style.color = color;
  output.textContent = `SELECTED COLOR: ${color}`;
}











// createPaletteItems(50);

// colorPalette.addEventListener('click', selectColor);

// function selectColor(event) {
//   const { color } = event.target.dataset;
//   if (!color) {
//     return;
//   }
//   updateOutput(color);
// }

// function createPaletteItems(amount) {
//   const items = [];
//   for (let i = 0; i < amount; i++) {
//     const color = getRangomColor();
//     const button = document.createElement('button');
//     button.type = 'button';
//     button.dataset.color = color;
//     button.classList.add('item');
//     button.style.backgroundColor = color;
//     items.push(button);
//   }
//   colorPalette.append(...items);
// }





