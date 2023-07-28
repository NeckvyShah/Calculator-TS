'use strict';
const btns = document.querySelectorAll('.btns') as NodeListOf<Element>,
  screenEl = document.getElementById('screen') as HTMLInputElement,
  radianEl = document.getElementById('radian') as HTMLElement,
  changeEl = document.getElementById('change') as HTMLElement,
  squareRootEl = document.getElementById('square-root') as HTMLElement,
  sinEl = document.getElementById('sin') as HTMLElement,
  cosEl = document.getElementById('cos') as HTMLElement,
  tanEl = document.getElementById('tan') as HTMLElement,
  lnEl = document.getElementById('ln') as HTMLElement,
  logEl = document.getElementById('log') as HTMLElement,
  divideByXEl = document.getElementById('1/x') as HTMLElement,
  exponentialEl = document.getElementById('exponential') as HTMLElement,
  squareEl = document.getElementById('square') as HTMLElement,
  raiseToYEl = document.getElementById('x-raise-to-y') as HTMLElement,
  moduloEl = document.getElementById('modulo') as HTMLElement,
  piEl = document.getElementById('pi') as HTMLElement,
  eEl = document.getElementById('e') as HTMLElement,
  minusOfEl = document.getElementById('minusOf') as HTMLElement;

//toggle special operators
changeEl.addEventListener('click', function () {
  sinEl.classList.toggle('inverse');
  if (sinEl.classList.contains('inverse')) {
    sinEl.innerHTML = `sin<sup>-1</sup>`;
  } else {
    sinEl.innerHTML = 'sin';
  }
  cosEl.classList.toggle('inverse');
  if (cosEl.classList.contains('inverse')) {
    cosEl.innerHTML = `cos<sup>-1</sup>`;
  } else {
    cosEl.innerHTML = 'cos';
  }
  tanEl.classList.toggle('inverse');
  if (tanEl.classList.contains('inverse')) {
    tanEl.innerHTML = `tan<sup>-1</sup>`;
  } else {
    tanEl.innerHTML = 'tan';
  }
  lnEl.classList.toggle('inverse');
  if (lnEl.classList.contains('inverse')) {
    lnEl.innerHTML = `sinh`;
  } else {
    lnEl.innerHTML = 'ln';
  }
  logEl.classList.toggle('inverse');
  if (logEl.classList.contains('inverse')) {
    logEl.innerHTML = `cosh`;
  } else {
    logEl.innerHTML = 'log';
  }
  divideByXEl.classList.toggle('inverse');
  if (divideByXEl.classList.contains('inverse')) {
    divideByXEl.innerHTML = `tanh`;
  } else {
    divideByXEl.innerHTML = '1/x';
  }
  exponentialEl.classList.toggle('inverse');
  if (exponentialEl.classList.contains('inverse')) {
    exponentialEl.innerHTML = `sinh<sup>-1</sup>`;
  } else {
    exponentialEl.innerHTML = `e<sup>x</sup>`;
  }
  squareEl.classList.toggle('inverse');
  if (squareEl.classList.contains('inverse')) {
    squareEl.innerHTML = `cosh<sup>-1</sup>`;
  } else {
    squareEl.innerHTML = `x<sup>2</sup>`;
  }
  raiseToYEl.classList.toggle('inverse');
  if (raiseToYEl.classList.contains('inverse')) {
    raiseToYEl.innerHTML = `tanh<sup>-1</sup>`;
  } else {
    raiseToYEl.innerHTML = `x<sup>y</sup>`;
  }
  moduloEl.classList.toggle('inverse');
  if (moduloEl.classList.contains('inverse')) {
    moduloEl.innerHTML = `2<sup>x</sup>`;
  } else {
    moduloEl.innerHTML = '|x|';
  }
  piEl.classList.toggle('inverse');
  if (piEl.classList.contains('inverse')) {
    piEl.innerHTML = `x<sup>3</sup>`;
  } else {
    piEl.innerHTML = `&pi;`;
  }
  eEl.classList.toggle('inverse');
  if (eEl.classList.contains('inverse')) {
    eEl.innerHTML = `x!`;
  } else {
    eEl.innerHTML = 'e';
  }
  squareRootEl.classList.toggle('inverse');
  if (squareRootEl.classList.contains('inverse')) {
    squareRootEl.innerHTML = `&#8731;`;
  } else {
    squareRootEl.innerHTML = `&#8730;`;
  }
});

//defining the screen array to be displayed on screen
let screenArr: string[] = [];

interface InitialObj {
  [key: string]: string;
}
let initialObj: InitialObj = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  0: '0',
  '+': '+',
  '-': '-',
  '*': '*',
  '/': '/',
  '(': '(',
  ')': ')',
  '.': '.',
  sin: 'sin(',
  cos: 'cos(',
  tan: 'tan(',
  ln: 'ln(',
  log: 'log(',
  '1/x': '1/',
  ex: 'e^(',
  x2: '^2',
  xy: '^',
  '|x|': 'abs(',
  π: 'π',
  e: 'e',
  '√': '√(',
  sinh: 'sinh(',
  '%': '%',
  cosh: 'cosh(',
  tanh: 'tanh(',
  'sin-1': 'asin(',
  'cos-1': 'acos(',
  'tan-1': 'atan(',
  'sinh-1': 'asinh(',
  'cosh-1': 'acosh(',
  'tanh-1': 'atanh(',
  '2x': '2^(',
  x3: '^3',
  '∛': '∛(',
};

//displaying on screen and pushing in the array
btns.forEach(el => {
  el.addEventListener('click', (e: Event) => {
    const targetButton = e.target as HTMLButtonElement;
    if (initialObj.hasOwnProperty(targetButton.innerText)) {
      screenEl.value += initialObj[targetButton.innerText];
      screenArr.push(initialObj[targetButton.innerText]);
    }
    console.log(screenArr);
  });
});

//delete single character
function deleteChar() {
  let str = screenEl.value;
  str = str.substring(0, str.length - 1);
  screenEl.value = str;
  screenArr.pop();
  console.log(screenArr);
}

//clear screen
function clearScreen() {
  screenEl.value = '';
  screenArr = [];
  finalAnswerArr = [];
}

//final answer

let tmpObj: InitialObj = {
  '%': '%',
  'sin(': 'Math.sin(',
  'cos(': 'Math.cos(',
  'tan(': 'Math.tan(',
  'ln(': 'Math.log(',
  'e^(': 'Math.exp(',
  '^2': '**2',
  '^': '**',
  'abs(': 'Math.abs(',
  π: 'Math.PI',
  e: 'Math.E',
  '√(': 'Math.sqrt(',
  'sinh(': 'Math.sinh(',
  'cosh(': 'Math.cosh(',
  'tanh(': 'Math.tanh(',
  'asin(': 'Math.asin(',
  'acos(': 'Math.acos(',
  'atan(': 'Math.atan(',
  'asinh(': 'Math.asinh(',
  'acosh(': 'Math.acosh(',
  'atanh(': 'Math.atanh(',
  '2^(': '2**(',
  '^3': '**3',
  '∛(': 'Math.cbrt(',
};

let finalAnswerArr: string[] = [];
let answer = '';
function finalAnswer(arr: string[]) {
  try {
    arr.forEach(el => {
      console.log('called');
      if (tmpObj.hasOwnProperty(el)) {
        finalAnswerArr.push(tmpObj[el]);
      } else {
        finalAnswerArr.push(el);
      }
    });
    screenEl.value = eval(finalAnswerArr.join(''));
    answer = screenEl.value;
  } catch {
    screenEl.value = 'Invalid Syntax';
  }
}

//memory handlers
let memory: number;
let screenMemoryArr = [];

function mClear() {
  memory = 0;
  screenEl.value = '';
}

function mStore() {
  const temp = parseFloat(screenEl.value);
  memory = temp;
}

function mPlus() {
  const temp = parseFloat(screenEl.value);
  if (typeof temp === 'number') {
    memory += temp;
  }
  screenEl.value = memory.toString();
}

function mMinus() {
  const temp = parseFloat(screenEl.value);
  memory -= temp;
  screenEl.value = memory.toString();
}

function mRecall() {
  screenEl.value = memory.toString();
  finalAnswerArr.push(memory.toString());
}

//unary Minus
function uMinus() {
  let numArr = [];
  for (let i = screenArr.length - 1; i >= 0; i--) {
    if (!isNaN(+screenArr[i])) {
      numArr.unshift(screenArr[i]);
      screenArr.splice(i, 1);
      // console.log(screenArr, "screenArr.splice()");
    } else {
      break;
    }
  }
  screenArr.push('(');
  screenArr.push('-');

  for (let i = 0; i < numArr.length; i++) {
    screenArr.push(numArr[i]);
  }
  screenArr.push(')');
  screenEl.value = screenArr.join('');
}

function fact() {
  // let arr = [];
  let operators = ['+', '-', '*', '/'];
  let lastIndex: number | undefined;
  for (let i = screenArr.length - 1; i >= 0; i--) {
    if (operators.includes(screenArr[i].toString())) {
      break;
    } else {
      lastIndex = i;
    }
  }

  let num = screenArr.toString().replaceAll(',', '').slice(lastIndex);
  let ans = factorial(+num);

  if (lastIndex) {
    for (let i = screenArr.length; i > lastIndex; i--) {
      screenArr.pop();
    }
  }
  screenArr.pop();
  screenArr.push(ans.toString());
  screenEl.value = screenArr.join('');
}

function factorial(num: number): number {
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

//keyboard events
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (
    e.key === '1' ||
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.' ||
    e.key === '+' ||
    e.key === '-' ||
    e.key === '*' ||
    e.key === '/'
  ) {
    screenEl.value += e.key;
    screenArr.push(e.key);
  } else if (e.key === 'Enter') {
    finalAnswer(screenArr);
  } else if (e.key === 'Backspace') {
    deleteChar();
    // clearScreen();
  } else if (e.key === 'Escape') {
    clearScreen();
  }
});
