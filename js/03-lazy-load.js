/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка  - каждой картинке в html необходимо добавить loading="lazy"
 * - событие загрузки изображения
 */

/* Если изображение не адаптивное, т.е. с фиксированным размером, надо обязательно по макету указывать 
и высоту и ширину картинки прямо в html
Если адаптивное, будет srcset и Дескриптор w

*/
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear'); 
}

/* addEventListener может принять 3 аргумента, 3 - это настройки, опции, можем передать туда объект 
напр. { once: true } - когда один раз выполнится, регистрация снимется автоматически и не надо
делать removeEventListener() итд.
*/