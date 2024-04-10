import tip from './tip.js';
import Word from './word.js';

[...document.scripts].forEach(el => el.remove());

const words = [
  ['implvvivm', [0, 0], 1],
  ['femina', [12, 0], 1],
  ['atrivm', [7, 2], 1],
  ['mensa', [16, 2], 1],
  ['lilivm', [12, 4], 1],
  ['ancilla', [0, 5], 1],
  ['verba', [8, 6], 1],
  ['pvella', [16, 7], 1],
  ['hortvs', [0, 8], 1],
  ['fenestra', [7, 8], 1],
  ['pater', [0, 10], 1],
  ['scaena', [9, 10], 1],
  ['vocabvla', [0, 12], 1],
  ['servvs', [9, 12], 1],
  ['ostivm', [16, 12], 1],

  ['insvla', [0, 0]],
  ['liberi', [3, 0]],
  ['mater', [8, 0]],
  ['familia', [12, 0]],
  ['nvmmvs', [16, 0]],
  ['filivs', [5, 3]],
  ['litterae', [10, 1]],
  ['syllaba', [14, 2]],
  ['pver', [17, 6]],
  ['saccvlvs', [19, 2]],
  ['rosa', [1, 7]],
  ['vir', [4, 8]],
  ['filia', [7, 8]],
  ['nasvs', [9, 8]],
  ['bacvlvm', [21, 6]],
];

function parseNode(html, callback) {
  let elem = document.createElement('div');
  elem.innerHTML = html;
  elem = elem.firstElementChild.cloneNode(true);
  callback && callback.call(elem, elem);
  return elem;
}

// ====================

const startTime = Date.now();
const isMobile = navigator.maxTouchPoints > 0 || 'ontouchstart' in document;

const root = document.getElementById('root');
const fakeCell = parseNode('<b><i></i></b>').firstChild;
const wordInput = parseNode(/*html*/`
  <input id="word_input" type="text" maxlength="0" tabindex="-1">
`);
const container = parseNode(/*html*/`
  <div class="crossword-shell">
    <div class="crossword"></div>
  </div>
`);

// ====================

const history = {
  backwards: [],
  forwards: [],
  push(data) {
    this.prev = data;
    this.forwards.splice(0);
  },
  get prev() {
    return this.backwards.pop();
  },
  set prev(data) {
    this.backwards.push(data);
  },
  get next() {
    return this.forwards.pop();
  },
  set next(data) {
    this.forwards.push(data);
  }
};

// ====================

let errorMode = false;
const keyMatcher = /^Key[A-Z]$/;
const dirKeys = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
const inputNode = isMobile ? wordInput : document;

root.addEventListener('click', onHandleClick);
inputNode.addEventListener('keydown', onKeyDown);
wordInput.addEventListener('blur', selectCell.bind(null, fakeCell));

function onHandleClick(e) {
  const trg = e.target.closest('.cell');

  if (trg) {
    selectCell(trg);
    if (isMobile) inputNode.focus();
    return;
  }

  if (!Word.activeCell) return;

  Word.activeCell.classList.remove('__active');
  Word.activeCell.parentNode.classList.remove('__active');
  Word.activeCell = null;
}

function onKeyDown(e) {
  if (e.ctrlKey && !e.altKey && checkHistoryKeys(e)) return;
  if (!Word.activeCell) return;

  const {code} = e;
  const word = Word.find('target', Word.activeElem);

  if (code === 'Space' || code === 'Backspace') {
    e.preventDefault();
    return clearCellAndSelectNext(word, code === 'Space');
  }

  if (code === 'Tab') {
    e.preventDefault();
    const ind = (e.shiftKey ? -1 : 1) + word.index;
    const nextWord = Word.all.at(ind % Word.size);
    return selectCell(nextWord.firstEmptyCell || nextWord.firstCell);
  }

  const dir = dirKeys.indexOf(code);

  if (~dir) {
    e.preventDefault();
    return selectSiblingCell(word, dir);
  }

  if (!keyMatcher.test(code)) return;
  if (isMobile) e.preventDefault();

  const state = [];
  const letter = getLetterByCode(code);

  [Word.activeCell, getJointCell(word)].forEach((cell, i) => {
    if (!cell) return;

    state.push([cell, cell.textContent, letter]);
    setCellValue(cell, letter);

    if (!errorMode) return;
    return (i ? Word.find('target', cell.parentNode) : word).check();
  });

  history.push(state);

  const ind = Word.activeCellIndex;
  const predicate = (el, i) => i > ind && !el.textContent;
  const cell = word.cells.find(predicate) || word.firstEmptyCell;

  selectCell(cell);

  if (!Word.hasEmptyCell) checkAll();
}

// ====================

function checkHistoryKeys(e) {
  let isZKey = e.code === 'KeyZ';

  if (!(isZKey || e.code === 'KeyY')) return;

  if (e.shiftKey) {
    if (!isZKey) return;
    isZKey = false;
  }

  e.preventDefault();

  const keys = 'nextprev';
  const key = keys.substr(isZKey * 4, 4);
  const alt = keys.replace(key, '');

  const state = history[key];
  if (!state) return true;

  history[alt] = state;

  state.forEach(([cell, oldValue, newValue]) => {
    selectCell(cell);
    setCellValue(cell, isZKey ? oldValue : newValue);
    if (errorMode) Word.find('target', cell.parentNode).check();
  });

  return true;
}

function clearCellAndSelectNext(word, force) {
  const state = [];
  const cells = [Word.activeCell, getJointCell(word)];

  cells.forEach((cell, i) => {
    if (!cell) return;
    if (cell.textContent) state.push([cell, cell.textContent, '']);

    setCellValue(cell, '');

    if (!errorMode) return;
    return (i ? Word.find('target', cell.parentNode) : word).check();
  });

  if (state.length) history.push(state);
  if (!getSibling(force)) return;

  return selectSiblingCell(word, word.isVertical + 2 * force);
}

function getSibling(force, cell = Word.activeCell) {
  const propName = (force ? 'next' : 'previous') + 'ElementSibling';
  return cell && cell[propName];
}

function setCellValue(cell, letter) {
  cell.firstChild.textContent = letter;
  return;
}

function selectSiblingCell(word, dir) {
  const position = dir % 2 ? 'isVertical' : 'isHorizontal';
  const cell = word[position] ? Word.activeCell : getJointCell(word);
  const sibling = cell && getSibling(dir > 1, cell) || getSiblingCell(dir);
  return selectCell(sibling);
}

function selectCell(cell) {
  if (!cell || cell === Word.activeCell) return;

  if (Word.activeCell) {
    Word.activeCell.classList.remove('__active');
    Word.activeCell.parentNode.classList.remove('__active');
  }

  if (cell === fakeCell) return Word.activeCell = null;

  Word.activeCell = cell;

  cell.classList.add('__active');
  cell.parentNode.classList.add('__active');
}

function getJointCell(word) {
  const propName = '__joint';
  const { activeCell } = Word;

  if (activeCell.hasOwnProperty(propName)) return activeCell[propName];

  const { x, y } = activeCell.getBoundingClientRect();
  const cells = word.siblings.map(that => that.cells).flat();

  return activeCell[propName] = cells.find(cell => {
    const { left, top } = cell.getBoundingClientRect();
    return left === x && top === y;
  });
}

function getSiblingCell(dir) {
  const propName = '__sibling' + dir;
  const { activeCell } = Word;

  if (activeCell.hasOwnProperty(propName)) return activeCell[propName];

  const { x, y } = activeCell.getBoundingClientRect();

  const test = ({ x: a, y: b }) => {
    if (dir === 0) return b === y && a < x;
    if (dir === 1) return a === x && b < y;
    if (dir === 2) return b === y && a > x;
    return a === x && b > y;
  };

  const sort = ([cellA, a], [cellB, b]) => {
    if (dir === 0) return b.x - a.x;
    if (dir === 1) return b.y - a.y;
    if (dir === 2) return a.x - b.x;
    return a.y - b.y;
  };

  const data = Word.allCells.map(cell => {
    const coords = cell.getBoundingClientRect();
    return test(coords) && [cell, coords];
  }).filter(Boolean);

  const cell = data.length ? data.sort(sort)[0][0] : null;
  return activeCell[propName] = cell;
}

function getLetterByCode(code) {
  const k = code.slice(3).toLowerCase();
  return k === 'u' ? 'v' : k;
}

function checkAll() {
  errorMode = true;
  let hasErrors = false;

  Word.all.forEach(word => {
    if (word.check()) return;
    hasErrors = true;
  });

  if (!hasErrors) showResult();
}

function showResult() {
  const format = (n) => n > 9 ? n : `0${n}`;
  const time = (Date.now() - startTime) / 1e3 >> 0;
  const h = time / 60 / 60 >> 0;
  const m = (time / 60 >> 0) % 60;
  const s = time % 60;
  const hms = `${h ? format(h) + ':' : ''}${format(m)}:${format(s)}`;

  const elem = parseNode(/*html*/`
    <div class="result" data-action="hide">
      <div class="result__inner">
        <button class="result__close" data-action="hide">&times;</button>
        <h3 class="result__heading">macte virtvte</h3>
        <p>Tempus: <span class="result__time">${hms}</span></p>
      </div>
    </div>
  `);

  elem.addEventListener('click', function(e) {
    if (!e.target.matches('[data-action="hide"]')) return;
    this.remove();
  });

  tip.__die__();
  root.removeEventListener('click', onHandleClick);
  inputNode.removeEventListener('keydown', onKeyDown);

  selectCell(fakeCell);
  root.append(elem);
  elem.firstElementChild.firstElementChild.focus();
}

// ====================

tip.__init__(words.length);
Word.__init__(container.firstElementChild, words);

if (isMobile) root.append(wordInput, container);
else root.append(container);