/*
 * Библиотека lazysizes 
lazysizes работает во всех браузерах, подключаем к себе и настраиваем по инструкции
Добавляем класс "lazyload" с атрибутом data-src и/или data-srcset attribute.

 * - feature detection - определение функционала браузера. Если браузер поддерживает нативную загрузку
изображения то нам не нужно подключать библиотеку. Нам нужно разрешить ему делать все самому. 
А если браузер не поддерживает загрузку изображения, тогда нужно подключить библиотеку.
Добавляем класс "lazyload" с атрибутом data-src и/или data-srcset attribute и добавляем loading="lazy"

 */

if ('loading' in HTMLImageElement.prototype) { // ('loading' in HTMLImageElement.prototype) - feature detection
  console.log('Браузер поддерживает lazyload');
  addSrcAttrToLazyImages();
} else {
  console.log('Браузер НЕ поддерживает lazyload');
  addLazySizesScript();
}

const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear');  // аннимация
}

function addSrcAttrToLazyImages() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
}

function addLazySizesScript() {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';

  document.body.appendChild(script);
}

{/* <script src='https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js'
  integrity='sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg=='
  crossorigin='anonymous'
></script> */}