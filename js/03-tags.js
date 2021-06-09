/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//   // currentActiveBtn?.classList.remove('tags__btn--active');  // Это заменяет 'if' именно при доступе к свойству

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }

// Сделаем чтобы можно было выбрать сколько угодно тегов

const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();  // Set - набор уникальных элементов

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActiveBtn = btn.classList.contains('tags__btn--active');

  if (isActiveBtn) {
    selectedTags.delete(tag)
  } else {
    selectedTags.add(btn.dataset.value);
  }

  evt.target.classList.toggle('tags__btn--active');
  
  console.log(selectedTags);  
}