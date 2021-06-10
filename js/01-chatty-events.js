/*
 * Сhatty events (болтливые события) - которые срабатывают слшком часто: scroll, resize, mouseMove, ввод текста в инпут 
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove и throttle

throttle - «тормозящий», вызов в f не более одного раза в 'n' ms миллисекунд.
_.throttle(func, [wait=0], [options={}])
scroll, resize, mouseMove
throttle исп-ся чтобы не засорять стэк и могли выполняться другие функции.
 */

const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

// window.addEventListener('mousemove', _.throttle(onMouseMove, 250));

function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

/*
 * Input и debounce
ввод текста в инпут 
debounce - исп-ся когда нужно сделать отложенный поиск, напр. ввод пользователя при поиске
 */
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}