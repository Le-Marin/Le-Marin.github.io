(function() {
  'use strict';

  const conjugations = ['I', 'II', 'III a', 'III b', 'IV'];

  const tenses = {
    1: function(root, chunks) {
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

    2: function(root, chunks) {
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

    3: function(root, chunks) {
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

    4: function(root, chunks) {
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

    5: function(root, chunks) {
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

    6: function(root, chunks) {
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

    7: function(root, chunks) {
      const endings = getEndings(['ī', 'istī', 'it'], ['imus', 'istis', 'ērunt']);
      const common = {
        sg: [0, 0, 0].map(() => getParams('', '', '', endings.a)),
        pl: [0, 0, 0].map(() => getParams('', '', '', endings.b)),
      };

      return createTense2(root, common, chunks, true);
    },

    8: function(root, chunks) {
      const endings = getEndings(['us sum', 'us es', 'us est'], ['ī sumus', 'ī estis', 'ī sunt']);
      const common = {
        sg: [0, 0, 0].map(() => getParams('', '', '', endings.a)),
        pl: [0, 0, 0].map(() => getParams('', '', '', endings.b)),
      };

      return createTense2(root, common, chunks, false);
    },

    9: function(root, chunks) {
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

    10: function(root, chunks) {
      const endings = getEndings(['us eram', 'us erās', 'us erat'], ['ī erāmus', 'ī erātis', 'ī erant']);
      const common = {
        sg: [0, 0, 0].map(() => getParams('', '', '', endings.a)),
        pl: [0, 0, 0].map(() => getParams('', '', '', endings.b)),
      };

      return createTense2(root, common, chunks, false);
    },

    11: function(root, chunks) {
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

    12: function(root, chunks) {
      const endings = getEndings(['us erō', 'us eris', 'us erit'], ['ī erimus', 'ī eritis', 'ī erunt']);
      const common = {
        sg: [0, 0, 0].map(() => getParams('', '', '', endings.a)),
        pl: [0, 0, 0].map(() => getParams('', '', '', endings.b)),
      };

      return createTense2(root, common, chunks, false);
    },

    13: function(root, chunks) {
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

    14: function(root, chunks) {
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

    15: function(root, chunks) {
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

    16: function(root, chunks) {
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
        sg: data[0].map(wordFormToObject),
        pl: data[1].map(wordFormToObject),
      }
    };
  }

  function wordFormToObject(form) {
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

  function getParams(vowel, suffix, joint, ending) {
    return { vowel, suffix, joint, ending };
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

      if (!form) return '';

      const chunks = [
        form.root || data.root,
        form.vowel && `<span class="x-vowel">${form.vowel}</span>`,
        form.suffix && `<span class="x-suffix">${form.suffix}</span>`,
        form.joint && `<span class="x-joint">${form.joint}</span>`,
      ];

      const end = form.ending;

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
  };

  function createWord(conjugation, value, translation, sys) {
    const tensesCache = Array(14);
    const chunks = value.split(' ');
    const root = chunks[0].match(/.+?(?=~)/)[0];
    const word = chunks.shift().replace('~', '');
    value = value.replaceAll('~', '');

    if (word.includes('-')) {
      const prefix = word.match(/[^-]+/)[0];
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
        return tensesCache[tense] = tenses[tense](root, chunks);
      },
    });
  }

  window.__create = createWord;
})();