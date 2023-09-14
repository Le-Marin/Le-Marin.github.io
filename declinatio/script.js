(function() {
  'use strict';

  const vocabulary = [...VOCABULARY];
  VOCABULARY.splice(0);

  [...document.scripts].forEach((el) => el.remove());

  const $ = (selector, ctx = document) => ctx.querySelector(selector);
  const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];

  const select = $('select');
  const btnGet = $('.get');
  const btnCheck = $('.check');
  const btnAnswers = btnCheck.nextElementSibling;
  const words = $('.words').children;
  const table = $('.table');
  const table2 = table.cloneNode(true);
  const inputs = $$('.input', table);
  const inputs2 = $$('.input', table2);

  let currentWord = null;
  let isAnswersShown = false;

  table2.classList.add('result');
  inputs2.forEach((el) => el.disabled = true);

  btnGet.addEventListener('click', function get() {
    const declension = +select.value || 1 + Math.random() * 4 >> 0;
    const search = ([d]) => d === declension;
    currentWord = vocabulary.find(data => !data[5] && search(data));

    if (!currentWord) {
      vocabulary.filter(search).forEach(data => data[5] = false);
      vocabulary.sort(() => Math.random() - 0.5);
      return get();
    }

    currentWord[5] = true;
    words[0].textContent = currentWord[1];
    words[1].textContent = currentWord[2];

    inputs.forEach((el) => {
      el.value = '';
      el.parentNode.removeAttribute('data-valid');
    });

    table2.remove();
    isAnswersShown = false;
  });

  btnCheck.addEventListener('click', function check() {
    if (!currentWord) return;

    inputs.forEach((el, i) => {
      const data = i % 2 ? currentWord[4] : currentWord[3];
      const value = data[i / 2 >> 0];
      const isValid = el.value.toLowerCase() === value.toLowerCase();
      el.parentNode.dataset.valid = +isValid;
    });
  });

  btnAnswers.addEventListener('click', function() {
    if (isAnswersShown) {
      isAnswersShown = false;
      table2.remove();
      return;
    }

    if (!currentWord) return;

    isAnswersShown = true;
    table.parentNode.appendChild(table2);

    inputs2.forEach((el, i) => {
      const data = i % 2 ? currentWord[4] : currentWord[3];
      el.value = data[i / 2 >> 0];
    });
  });
})();