(function() {
  'use strict';

  [...document.scripts].forEach((el) => el.remove());

  const $ = (selector, ctx = document) => ctx.querySelector(selector);
  const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];
  const sort = (array) => array.sort(() => Math.random() - 0.5);

  const conjugations = ['I', 'II', 'III a', 'III b', 'IV'];

  // =========================

  const tenses = {
    1: function(word, chunks, root) {
      const endings = getEndings(['ō', 's', 't'], ['mus', 'tis', 'nt']);

      const entries1 = [
        ['', '', ''],
        ['ā', '', ''],
        ['a', '', ''],
        ['e', '', ''],
        ['ē', '', ''],
        ['e', '', ''],
        ['', '', ''],
        ['', '', 'i'],
        ['', '', 'i'],
        ['i', '', ''],
        ['i', '', ''],
        ['i', '', ''],
        ['i', '', ''],
        ['ī', '', ''],
        ['i', '', ''],
      ].map(entry => getParams(...entry, endings.a));

      const entries2 = [
        ['ā', '', ''],
        ['ā', '', ''],
        ['a', '', ''],
        ['ē', '', ''],
        ['ē', '', ''],
        ['e', '', ''],
        ['', '', 'i'],
        ['', '', 'i'],
        ['', '', 'u'],
        ['i', '', ''],
        ['i', '', ''],
        ['i', '', 'u'],
        ['ī', '', ''],
        ['ī', '', ''],
        ['i', '', 'u'],
      ].map(entry => getParams(...entry, endings.b));

      return createTense(root, entries1, entries2);
    },

    2: function(word, chunks, root) {
      const endings = getEndings(['or', 'ris', 'tur'], ['mur', 'minī', 'ntur']);

      const entries1 = [
        ['', '', ''],
        ['ā', '', ''],
        ['ā', '', ''],
        ['e', '', ''],
        ['ē', '', ''],
        ['ē', '', ''],
        ['', '', ''],
        ['', '', 'e'],
        ['', '', 'i'],
        ['i', '', ''],
        ['e', '', ''],
        ['i', '', ''],
        ['i', '', ''],
        ['ī', '', ''],
        ['ī', '', ''],
      ].map(entry => getParams(...entry, endings.a));

      const entries2 = [
        ['ā', '', ''],
        ['ā', '', ''],
        ['a', '', ''],
        ['ē', '', ''],
        ['ē', '', ''],
        ['e', '', ''],
        ['', '', 'i'],
        ['', '', 'i'],
        ['', '', 'u'],
        ['i', '', ''],
        ['i', '', ''],
        ['i', '', 'u'],
        ['ī', '', ''],
        ['ī', '', ''],
        ['i', '', 'u'],
      ].map(entry => getParams(...entry, endings.b));

      return createTense(root, entries1, entries2);
    },

    3: function(word, chunks, root) {
      const endings = getEndings(['m', 's', 't'], ['mus', 'tis', 'nt']);

      const entries1 = [
        ['ā', 'ba', ''],
        ['ā', 'bā', ''],
        ['ā', 'ba', ''],
        ['ē', 'ba', ''],
        ['ē', 'bā', ''],
        ['ē', 'ba', ''],
        ['', 'ēba', ''],
        ['', 'ēbā', ''],
        ['', 'ēba', ''],
        ['i', 'ēba', ''],
        ['i', 'ēbā', ''],
        ['i', 'ēba', ''],
        ['i', 'ēba', ''],
        ['i', 'ēbā', ''],
        ['i', 'ēba', ''],
      ].map(entry => getParams(...entry, endings.a));

      const entries2 = [
        ['ā', 'bā', ''],
        ['ā', 'bā', ''],
        ['ā', 'ba', ''],
        ['ē', 'bā', ''],
        ['ē', 'bā', ''],
        ['ē', 'ba', ''],
        ['', 'ēbā', ''],
        ['', 'ēbā', ''],
        ['', 'ēba', ''],
        ['i', 'ēbā', ''],
        ['i', 'ēbā', ''],
        ['i', 'ēba', ''],
        ['i', 'ēbā', ''],
        ['i', 'ēbā', ''],
        ['i', 'ēba', ''],
      ].map(entry => getParams(...entry, endings.b));

      return createTense(root, entries1, entries2);
    },

    4: function(word, chunks, root) {
      const endings = getEndings(['r', 'ris', 'tur'], ['mur', 'minī', 'ntur']);

      const entries1 = [
        ['ā', 'ba', ''],
        ['ā', 'bā', ''],
        ['ā', 'bā', ''],
        ['ē', 'ba', ''],
        ['ē', 'bā', ''],
        ['ē', 'bā', ''],
        ['', 'ēba', ''],
        ['', 'ēbā', ''],
        ['', 'ēbā', ''],
        ['i', 'ēba', ''],
        ['i', 'ēbā', ''],
        ['i', 'ēbā', ''],
        ['i', 'ēba', ''],
        ['i', 'ēbā', ''],
        ['i', 'ēbā', ''],
      ].map(entry => getParams(...entry, endings.a));

      const entries2 = [
        ['ā', 'bā', ''],
        ['ā', 'bā', ''],
        ['ā', 'ba', ''],
        ['ē', 'bā', ''],
        ['ē', 'bā', ''],
        ['ē', 'ba', ''],
        ['', 'ēbā', ''],
        ['', 'ēbā', ''],
        ['', 'ēba', ''],
        ['i', 'ēbā', ''],
        ['i', 'ēbā', ''],
        ['i', 'ēba', ''],
        ['i', 'ēbā', ''],
        ['i', 'ēbā', ''],
        ['i', 'ēba', ''],
      ].map(entry => getParams(...entry, endings.b));

      return createTense(root, entries1, entries2);
    },

    5: function(word, chunks, root) {
      const endings = getEndings([['ō', 'm'], 's', 't'], ['mus', 'tis', 'nt']);

      const entries1 = [
        ['ā', 'b', '', endings.a[0]],
        ['ā', 'b', 'i', endings.a],
        ['ā', 'b', 'i', endings.a],
        ['ē', 'b', '', endings.a[0]],
        ['ē', 'b', 'i', endings.a],
        ['ē', 'b', 'i', endings.a],
        ['', 'a', '', endings.a[1]],
        ['', 'ē', '', endings.a],
        ['', 'e', '', endings.a],
        ['i', 'a', '', endings.a[1]],
        ['i', 'ē', '', endings.a],
        ['i', 'e', '', endings.a],
        ['i', 'a', '', endings.a[1]],
        ['i', 'ē', '', endings.a],
        ['i', 'e', '', endings.a],
      ].map(entry => getParams(...entry));

      const entries2 = [
        ['ā', 'b', 'i'],
        ['ā', 'b', 'i'],
        ['ā', 'b', 'u'],
        ['ē', 'b', 'i'],
        ['ē', 'b', 'i'],
        ['ē', 'b', 'u'],
        ['', 'ē', ''],
        ['', 'ē', ''],
        ['', 'e', ''],
        ['i', 'ē', ''],
        ['i', 'ē', ''],
        ['i', 'e', ''],
        ['i', 'ē', ''],
        ['i', 'ē', ''],
        ['i', 'e', ''],
      ].map(entry => getParams(...entry, endings.b));

      return createTense(root, entries1, entries2);
    },

    6: function(word, chunks, root) {
      const endings = getEndings([['or', 'r'], 'ris', 'tur'], ['mur', 'minī', 'ntur']);

      const entries1 = [
        ['ā', 'b', '', endings.a[0]],
        ['ā', 'b', 'e', endings.a],
        ['ā', 'b', 'i', endings.a],
        ['ē', 'b', '', endings.a[0]],
        ['ē', 'b', 'e', endings.a],
        ['ē', 'b', 'i', endings.a],
        ['', 'a', '', endings.a[1]],
        ['', 'ē', '', endings.a],
        ['', 'ē', '', endings.a],
        ['i', 'a', '', endings.a[1]],
        ['i', 'ē', '', endings.a],
        ['i', 'ē', '', endings.a],
        ['i', 'a', '', endings.a[1]],
        ['i', 'ē', '', endings.a],
        ['i', 'ē', '', endings.a],
      ].map(entry => getParams(...entry));

      const entries2 = [
        ['ā', 'b', 'i'],
        ['ā', 'b', 'i'],
        ['ā', 'b', 'u'],
        ['ē', 'b', 'i'],
        ['ē', 'b', 'i'],
        ['ē', 'b', 'u'],
        ['', 'ē', ''],
        ['', 'ē', ''],
        ['', 'e', ''],
        ['i', 'ē', ''],
        ['i', 'ē', ''],
        ['i', 'e', ''],
        ['i', 'ē', ''],
        ['i', 'ē', ''],
        ['i', 'e', ''],
      ].map(entry => getParams(...entry, endings.b));

      return createTense(root, entries1, entries2);
    },

    7: function(word, chunks, root) {
      const endings = getEndings(['ī', 'istī', 'it'], ['imus', 'istis', 'ērunt']);
      const common = {
        sg: [0, 0, 0].map(() => getParams('', '', '', endings.a)),
        pl: [0, 0, 0].map(() => getParams('', '', '', endings.b)),
      };

      return createTense2(root, common, chunks, true);
    },

    8: function(word, chunks, root) {
      const endings = getEndings(['us sum', 'us es', 'us est'], ['ī sumus', 'ī estis', 'ī sunt']);
      const common = {
        sg: [0, 0, 0].map(() => getParams('', '', '', endings.a)),
        pl: [0, 0, 0].map(() => getParams('', '', '', endings.b)),
      };

      return createTense2(root, common, chunks, false);
    },

    9: function(word, chunks, root) {
      const endings = getEndings(['m', 's', 't'], ['mus', 'tis', 'nt']);
      const common = {
        sg: [
          getParams('', 'era', '', endings.a),
          getParams('', 'erā', '', endings.a),
          getParams('', 'era', '', endings.a),
        ],
        pl: [
          getParams('', 'erā', '', endings.b),
          getParams('', 'erā', '', endings.b),
          getParams('', 'era', '', endings.b),
        ],
      };

      return createTense2(root, common, chunks, true);
    },

    10: function(word, chunks, root) {
      const endings = getEndings(['us eram', 'us erās', 'us erat'], ['ī erāmus', 'ī erātis', 'ī erant']);
      const common = {
        sg: [0, 0, 0].map(() => getParams('', '', '', endings.a)),
        pl: [0, 0, 0].map(() => getParams('', '', '', endings.b)),
      };

      return createTense2(root, common, chunks, false);
    },

    11: function(word, chunks, root) {
      const endings = getEndings(['ō', 's', 't'], ['mus', 'tis', 'nt']);
      const common = {
        sg: [
          getParams('', 'er', '', endings.a),
          getParams('', 'eri', '', endings.a),
          getParams('', 'eri', '', endings.a),
        ],
        pl: [
          getParams('', 'eri', '', endings.b),
          getParams('', 'eri', '', endings.b),
          getParams('', 'eri', '', endings.b),
        ],
      };

      return createTense2(root, common, chunks, true);
    },

    12: function(word, chunks, root) {
      const endings = getEndings(['us erō', 'us eris', 'us erit'], ['ī erimus', 'ī eritis', 'ī erunt']);
      const common = {
        sg: [0, 0, 0].map(() => getParams('', '', '', endings.a)),
        pl: [0, 0, 0].map(() => getParams('', '', '', endings.b)),
      };

      return createTense2(root, common, chunks, false);
    },

    13: function(word, chunks, root) {
      const entries1 = [
        null,
        ['ā', '', ''],
        null,
        null,
        ['ē', '', ''],
        null,
        null,
        ['', '', 'e'],
        null,
        null,
        ['e', '', ''],
        null,
        null,
        ['ī', '', ''],
        null,
      ].map(entry => entry && getParams(...entry, ''));

      const entries2 = [
        null,
        ['ā', '', ''],
        null,
        null,
        ['ē', '', ''],
        null,
        null,
        ['', '', 'i'],
        null,
        null,
        ['i', '', ''],
        null,
        null,
        ['ī', '', ''],
        null,
      ].map(entry => entry && getParams(...entry, 'te'));

      return createTense(root, entries1, entries2);
    },

    14: function(word, chunks, root) {
      const entries1 = [
        null,
        ['ā', '', ''],
        null,
        null,
        ['ē', '', ''],
        null,
        null,
        ['', '', 'e'],
        null,
        null,
        ['e', '', ''],
        null,
        null,
        ['ī', '', ''],
        null,
      ].map(entry => entry && getParams(...entry, 're'));

      const entries2 = [
        null,
        ['ā', '', ''],
        null,
        null,
        ['ē', '', ''],
        null,
        null,
        ['', '', 'i'],
        null,
        null,
        ['i', '', ''],
        null,
        null,
        ['ī', '', ''],
        null,
      ].map(entry => entry && getParams(...entry, 'minī'));

      return createTense(root, entries1, entries2);
    },

    15: function(word, chunks, root) {
      const endings = getEndings([], ['tōte', 'ntō'], 2);

      const entries1 = [
        null,
        ['ā', '', ''],
        ['ā', '', ''],
        null,
        ['ē', '', ''],
        ['ē', '', ''],
        null,
        ['', '', 'i'],
        ['', '', 'i'],
        null,
        ['i', '', ''],
        ['i', '', ''],
        null,
        ['ī', '', ''],
        ['ī', '', ''],
      ].map(entry => entry && getParams(...entry, 'tō'));

      const entries2 = [
        null,
        ['ā', '', ''],
        ['a', '', ''],
        null,
        ['ē', '', ''],
        ['e', '', ''],
        null,
        ['', '', 'i'],
        ['', '', 'u'],
        null,
        ['i', '', ''],
        ['i', '', 'u'],
        null,
        ['ī', '', ''],
        ['i', '', 'u'],
      ].map(entry => entry && getParams(...entry, endings.b));

      return createTense(root, entries1, entries2);
    },

    16: function(word, chunks, root) {
      const entries1 = [
        null,
        ['ā', '', ''],
        ['ā', '', ''],
        null,
        ['ē', '', ''],
        ['ē', '', ''],
        null,
        ['', '', 'i'],
        ['', '', 'i'],
        null,
        ['i', '', ''],
        ['i', '', ''],
        null,
        ['ī', '', ''],
        ['ī', '', ''],
      ].map(entry => entry && getParams(...entry, 'tor'));

      const entries2 = [
        null,
        null,
        ['a', '', ''],
        null,
        null,
        ['e', '', ''],
        null,
        null,
        ['', '', 'u'],
        null,
        null,
        ['i', '', 'u'],
        null,
        null,
        ['i', '', 'u'],
      ].map(entry => entry && getParams(...entry, 'ntor'));

      return createTense(root, entries1, entries2);
    },
  };

  // =========================

  function getExeption(data, conjugation) {
    return {
      [conjugation]: {
        sg: data[0].map(wordFormtoObject),
        pl: data[1].map(wordFormtoObject),
      }
    };
  }

  function wordFormtoObject(form) {
    const get = (reg) => (form.match(reg) || '')[1] || '';
    const data = getParams(
      get(/\|([^:_^]+)/),
      get(/\^([^|:_]+)/),
      get(/\:([^|_^]+)/),
      get(/\_([^|:^]+)/)
    );
    data.root = form.match(/[^|:_^]+/)[0];
    return data;
  }

  function parseRoot(r1, r2) {
    r2 = r2.match(/[^~]+/)[0];
    return r2[0] === '-' ? r1 + r2.slice(1) : r2;
  }

  function getEndings(sg, pl, len = 3) {
    let s = 0;
    let p = 0;

    return {
      get a() { return sg[s++ % len]; },
      get b() { return pl[p++ % len]; },
    };
  }

  function getParams(vowel, suffix, joint, ending) {
    return { vowel, suffix, joint, ending };
  }

  function createTense(root, sg, pl) {
    const get = (key) => ({
      get root() {
        if (!(key === conjugations[3] && root.includes('-'))) return root;
        return root.replace('-', '');
      },
      sg: sg.splice(0, 3),
      pl: pl.splice(0, 3),
    });

    return Object.fromEntries(conjugations.map(key => [key, get(key)]));
  }

  function createTense2(root, common, chunks, isActive) {
    const adds = isActive ? ['āv', 'u', '', '', 'īv'] : ['āt', 'it', '', '', 'īt'];
    const test = !!chunks.length;

    if (test) root = parseRoot(root, chunks[+!isActive]);

    const get = (i) => Object.assign({
      get root() {
        return test ? root : root + adds[i];
      }
    }, common);

    return Object.fromEntries(conjugations.map((key, i) => [key, get(i)]));
  }

  // =========================

  const wordProto = {
    eval(tense, isPlural, index) {
      const data = this.getTense(tense)[this.conjugation];
      const form = data[isPlural ? 'pl' : 'sg'][index];
      return wordFormToHTML(form, data.root, tense);
    }
  };

  function createWord(conjugation, value, translation, sys) {
    const tensesCache = Array(14);
    const chunks = value.split(' ');
    const root = chunks[0].match(/.+?(?=~)/)[0];
    let word = chunks[0].replace('~', '');

    chunks.shift();
    value = value.replaceAll('~', '');

    if (word.includes('-')) {
      const prefix = word.match(/[^-]+/)[0];
      word = word.replace('-', '');
      value = value.replace('-', '');
      chunks.slice(0, 2).forEach((x, i) => {
        chunks[i] = prefix + x.slice(1);
      });
    }

    return Object.assign(Object.create(wordProto), {
      value,
      translation,
      conjugation,
      chunks,
      getTense(tense) {
        if (tensesCache[tense]) return tensesCache[tense];
        if (sys && sys[tense]) return getExeption(sys[tense], conjugation);
        return tensesCache[tense] = tenses[tense](word, chunks, root);
      },
    });
  }

  function wordFormToHTML(data, root, tense) {
    if (!data) return '';

    const chunks = [
      data.root || root,
      data.vowel && `<span class="x-vowel">${data.vowel}</span>`,
      data.suffix && `<span class="x-suffix">${data.suffix}</span>`,
      data.joint && `<span class="x-joint">${data.joint}</span>`,
    ];

    const end = data.ending;

    if (end && /^(8|10|12)$/.test(tense)) {
      const ends = end.split(' ');
      chunks.push(
        `<span class="x-ending">${ends[0]}</span>`,
        ` <span class="x-compound">${ends[1]}</span>`
      );
    } else if (end) {
      chunks.push(`<span class="x-ending">${end}</span>`);
    }

    return `<span class="t-${tense}">${chunks.join('')}</span>`;
  }

  // =========================

  const vocabulary = sort(VOCABULARY.splice(0)).map((a) => createWord(...a));

  const select1 = $('.select-conjugation');
  const select2 = select1.nextElementSibling;
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

  const getInflection = (form, root) => {
    if (!form) return '';

    const {vowel, suffix, joint, ending} = form;
    return (form.root || root) + vowel + suffix + joint + ending;
  };

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

    let conjugation = select1.value;

    if (conjugation === 'r') {
      conjugation = conjugations[Math.random() * conjugations.length >> 0];
    }

    const tense = +select2.value;
    currentWord = vocabulary.find(that => that.conjugation === conjugation);

    if (!currentWord) return;

    fillWords();

    inputs.forEach((el) => {
      setNoValue(el);
      el.parentNode.removeAttribute('data-valid');
    });

    const forms = currentWord.getTense(tense)[conjugation];
    forms.sg.forEach((x, i) => x && clearValue(fields[0][i]));
    forms.pl.forEach((x, i) => x && clearValue(fields[1][i]));

    table2.remove();
    isAnswersShown = false;

    if (btnAnswers.textContent[0] !== 'R') btnAnswers.textContent = 'Mónstráre';
  });

  function fillWords() {
    words[0].innerHTML = currentWord.value;
    words[1].innerHTML = currentWord.translation;
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
    const data = currentWord.getTense(+select2.value)[currentWord.conjugation];

    inputs.forEach((el, i) => {
      const {dataset} = el.parentNode;

      if (+dataset.none) return;

      const userValue = el.value.trim().toLowerCase();

      if (!userValue) return dataset.valid = 0;

      const form = data[i >= qnt ? 'pl' : 'sg'][i % qnt];
      const value = getInflection(form, data.root).toLowerCase();
      const chunks = value.split('/');
      const isValid = chunks.some(x => x === userValue);

      if (isValid || isCaseSensitive) return dataset.valid = +isValid;
      if (chunks.length === 1 && value.length !== userValue.length) {
        return dataset.valid = 0;
      }

      dataset.valid = +chunks.some(value => {
        for (let c = 0; c < value.length; c++) {
          let a = value[c];
          let b = userValue[c];

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

  // =========================

  btnAnswers.addEventListener('click', function() {
    if (isAnswersShown) {
      isAnswersShown = false;
      this.textContent = 'Mónstráre';
      return table2.remove();
    }

    if (!currentWord) return;

    inputs2.forEach((el, i) => {
      el.innerHTML = currentWord.eval(+select2.value, i >= qnt, i % qnt);
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