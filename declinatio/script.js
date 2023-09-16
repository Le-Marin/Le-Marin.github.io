(function() {
  'use strict';

  const sort = (array) => array.sort(() => Math.random() - 0.5);
  const vocabulary = sort(VOCABULARY.splice(0));

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

  const getInflection = (ind) => currentWord[3 + ind / 6 >> 0][ind % 6];

  table2.classList.add('result');
  inputs2.forEach((el, i) => {
    const div = document.createElement('div');
    div.className = el.className;
    el.replaceWith(div);
    inputs2[i] = div;
  });

  btnGet.addEventListener('click', function get() {
    const declension = +select.value || 1 + Math.random() * 5 >> 0;
    const test = ([d]) => d === declension;
    currentWord = vocabulary.find(data => !data[5] && test(data));

    if (!currentWord) {
      if (+select.value) return rearrangeDeclension(test, get);
      return handleRandomNull(get);
    }

    currentWord[5] = true;
    fillWords();

    inputs.forEach((el) => {
      el.value = '';
      el.parentNode.removeAttribute('data-valid');
    });

    table2.remove();
    isAnswersShown = false;

    if (btnAnswers.textContent[0] !== 'R') btnAnswers.textContent = 'Mónstráre';
  });

  function handleRandomNull(callback) {
    if (vocabulary.find(data => !data[5])) return callback();

    sort(vocabulary).forEach((data) => data[5] = false);
    callback();
  }

  function rearrangeDeclension(predicate, callback) {
    const extracts = [];

    [...vocabulary].forEach((data, i) => {
      if (!predicate(data)) return;

      data[5] = false;
      vocabulary.splice(i - extracts.push(data) + 1, 1);
    });

    vocabulary.push(...sort(extracts));
    callback();
  }

  function fillWords() {
    const reGen = / (f|m|n|pl|mf|mfn)$/;
    words[0].innerHTML = currentWord[1].replace(reGen, ' <b>$1</b>');
    words[1].innerHTML = currentWord[2];
  }

  btnCheck.addEventListener('click', function() {
    if (!currentWord) return;

    inputs.forEach((el, i) => {
      const value = getInflection(i).replace('_', '');
      const isValid = el.value.toLowerCase() === value.toLowerCase();
      el.parentNode.dataset.valid = +isValid;
    });
  });

  btnAnswers.addEventListener('click', function() {
    if (isAnswersShown) {
      isAnswersShown = false;
      this.textContent = 'Mónstráre';
      return table2.remove();
    }

    if (!currentWord) return;

    inputs2.forEach((el, i) => {
      el.innerHTML = getInflection(i).replace(/_(.+)/, '<b>$1</b>');
    });

    table.parentNode.appendChild(table2);
    this.textContent = 'Céláre';
    isAnswersShown = true;
  });

  const keyboard = (function() {
    const target = $('.keyboard');
    const body = target.lastElementChild;

    return {
      __init__() {
        this.onHandleClick = this.onHandleClick.bind(this);
        target.addEventListener('click', this.onHandleClick);
      },
      onHandleClick(e) {
        const trg = e.target;

        if (trg.matches('.keyboard__switcher'))
          return this.toggle();

        if (trg.matches('.keyboard__key'))
          return this.printKey(trg.textContent, e.shiftKey);
      },
      toggle() {
        return body.classList.toggle('__shown');
      },
      printKey(key, isUpper) {
        if (!isUpper) key = key.toLowerCase();
        return document.execCommand('insertText', false, key);
      }
    };
  })();

  keyboard.__init__();
})();