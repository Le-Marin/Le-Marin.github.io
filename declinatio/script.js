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

  const getWordForm = (ind) => currentWord[3 + ind / 6 >> 0][ind % 6];

  table2.classList.add('result');
  inputs2.forEach((el, i) => {
    const div = document.createElement('div');
    div.className = el.className;
    el.replaceWith(div);
    inputs2[i] = div;
  });

  btnGet.addEventListener('click', function get() {
    const declension = +select.value || 1 + Math.random() * 5 >> 0;
    const search = ([d]) => d === declension;
    currentWord = vocabulary.find(data => !data[6] && search(data));

    if (!currentWord) {
      vocabulary.filter(search).forEach(data => data[6] = false);
      vocabulary.sort(() => Math.random() - 0.5);
      return get();
    }

    currentWord[6] = true;
    words[1].textContent = currentWord[2];
    words[0].innerHTML = currentWord[1]
      .replace(/ (f|m|n|pl|mf|mfn)$/, ' <b>$1</b>');

    inputs.forEach((el) => {
      el.value = '';
      el.parentNode.removeAttribute('data-valid');
    });

    table2.remove();
    isAnswersShown = false;
  });

  btnCheck.addEventListener('click', function() {
    if (!currentWord) return;

    inputs.forEach((el, i) => {
      const isValid = el.value.toLowerCase() === getWordForm(i).toLowerCase();
      el.parentNode.dataset.valid = +isValid;
    });
  });

  btnAnswers.addEventListener('click', function() {
    if (isAnswersShown) {
      isAnswersShown = false;
      return table2.remove();
    }

    if (!currentWord) return;

    inputs2.forEach((el, i) => {
      const root = currentWord[5];
      el.innerHTML = root
        ? `${root}<b>${getWordForm(i).slice(root.length)}</b>`
        : getWordForm(i);
    });

    table.parentNode.appendChild(table2);
    isAnswersShown = true;
  });
})();