(function() {
  'use strict';

  const sort = (array) => array.sort(() => Math.random() - 0.5);
  const vocabulary = sort(VOCABULARY.splice(0));
  vocabulary.forEach((that) => that.unshift(false));

  [...document.scripts].forEach((el) => el.remove());

  const $ = (selector, ctx = document) => ctx.querySelector(selector);
  const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];

  const select1 = $('.select-conjugation');
  const select2 = $('.select-tense');
  const presentValues = new Set(vocabulary.map((arr) => arr[1]));

  [...select2.options].forEach((el) => {
    el.disabled = !presentValues.has(+el.value);
  });

  const btnGet = $('.get');
  const btnCheck = $('.check');
  const btnAnswers = btnCheck.nextElementSibling;
  const words = $('.words').children;
  const table = $('.table');
  const table2 = table.cloneNode(true);
  const inputs = $$('.input', table);
  const inputs2 = $$('.input', table2);
  const qnt = inputs.length / 2;
  const fields = [inputs.slice(0, qnt), inputs.slice(qnt)];

  let currentWord = null;
  let isAnswersShown = false;

  const getInflection = (i) => currentWord[5 + i / qnt >> 0][i % qnt] || '';

  table2.classList.add('result');
  inputs2.forEach((el, i) => {
    const div = document.createElement('div');
    div.className = el.className;
    el.replaceWith(div);
    inputs2[i] = div;
  });

  btnGet.addEventListener('click', function get() {
    const conjuration = select1.value;
    const tense = +select2.value;
    const test = (that) => that[1] === tense && that[2] === conjuration;
    currentWord = vocabulary.find(data => !data[0] && test(data));

    if (!currentWord) return rearrange(test, get);

    currentWord[0] = true;
    fillWords();

    inputs.forEach((el) => {
      setNoValue(el);
      el.parentNode.removeAttribute('data-valid');
    });

    currentWord[5].forEach((x, i) => x && clearValue(fields[0][i]));
    currentWord[6].forEach((x, i) => x && clearValue(fields[1][i]));

    table2.remove();
    isAnswersShown = false;

    if (btnAnswers.textContent[0] !== 'R') btnAnswers.textContent = 'Mónstráre';
  });

  function rearrange(predicate, callback) {
    const extracts = [];

    [...vocabulary].forEach((data, i) => {
      if (!predicate(data)) return;

      data[0] = false;
      vocabulary.splice(i - extracts.push(data) + 1, 1);
    });

    if (!extracts.length) return;

    vocabulary.push(...sort(extracts));
    callback();
  }

  function fillWords() {
    words[0].innerHTML = currentWord[3];
    words[1].innerHTML = currentWord[4];
  }

  function setNoValue(el) {
    el.value = '\u2716';
    el.disabled = true;
    el.parentNode.dataset.none = 1;
  }

  function clearValue(el) {
    el.value = '';
    el.disabled = false;
    el.parentNode.removeAttribute('data-none');
  }

  btnCheck.addEventListener('click', function() {
    if (!currentWord) return;

    inputs.forEach((el, i) => {
      const userValue = el.value.trim().toLowerCase();
      const value = getInflection(i).replaceAll('_', '').toLowerCase();
      const isValid = value.split('/').some(x => x === userValue);
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
      el.innerHTML = getInflection(i).replace(/_([^ /]+)/g, '<b>$1</b>');
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