(function() {
  'use strict';

  [...document.scripts].forEach((el) => el.remove());

  const $ = (selector, ctx = document) => ctx.querySelector(selector);
  const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];
  const sort = (array) => array.sort(() => Math.random() - 0.5);

  const vocabulary = sort(VOCABULARY.splice(0));

  const select = $('select');
  const selectLen = select.options.length - 1;
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

  const getInflection = (ind) => currentWord[3 + ind / qnt >> 0][ind % qnt] || '';

  table2.classList.add('result');
  inputs2.forEach((el, i) => {
    const div = document.createElement('div');
    div.className = el.className;
    el.replaceWith(div);
    inputs2[i] = div;
  });

  btnGet.addEventListener('click', function() {
    if (currentWord) {
      vocabulary.push(vocabulary.splice(vocabulary.indexOf(currentWord), 1)[0]);
    }

    const declension = +select.value || 1 + Math.random() * selectLen >> 0;
    currentWord = vocabulary.find(([d]) => d === declension);

    fillWords();

    inputs.forEach((el) => {
      setNoValue(el);
      el.parentNode.removeAttribute('data-valid');
    });

    currentWord[3].forEach((x, i) => clearValue(fields[0][i]));
    currentWord[4].forEach((x, i) => clearValue(fields[1][i]));

    table2.classList.toggle('no-vocative', currentWord[3].length < qnt);
    table2.remove();
    isAnswersShown = false;

    if (btnAnswers.textContent[0] !== 'R') btnAnswers.textContent = 'Mónstráre';
  });

  function fillWords() {
    const reGen = / (f|m|n|pl|mf|mfn)$/;
    words[0].innerHTML = currentWord[1].replace(reGen, ' <b>$1</b>');
    words[1].innerHTML = currentWord[2];
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

  // =========================

  const btnCase = $('.case');
  const cases = {'ā': 'a', 'ē': 'e', 'ī': 'i', 'ō': 'o', 'ū': 'u', 'ȳ': 'y'};

  btnCase.addEventListener('click', () => btnCase.classList.toggle('__disabled'));

  btnCheck.addEventListener('click', function() {
    if (!currentWord) return;

    const isCaseSensitive = !btnCase.classList.contains('__disabled');

    inputs.forEach((el, i) => {
      const {dataset} = el.parentNode;

      if (+dataset.none) return;

      const userValue = el.value.trim().toLowerCase();

      if (!userValue) return dataset.valid = 0;

      const value = getInflection(i).replaceAll('_', '').toLowerCase();
      const chunks = value.split('/');

      if (chunks.length === 1 && value.length !== userValue.length) {
        return dataset.valid = 0;
      }

      if (chunks.length > 1 && value.includes(' ')) {
        const key = +!chunks[0].includes(' ');
        const res = [chunks[key].split(' ')[key], chunks[1 - key]];
        chunks[1 - key] = (key ? res.reverse() : res).join(' ');
      }

      const isValid = chunks.some(x => x === userValue);

      if (isValid || isCaseSensitive) return dataset.valid = +isValid;

      dataset.valid = +chunks.some(value => {
        for (let i = 0; i < value.length; i++) {
          let a = value[i];
          let b = userValue[i];

          if (a in cases) {
            a = cases[a];
            b = cases[b] || b;
          }

          if (a !== b) return;
        }

        return true;
      });
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

  // =========================

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