const lessons = [
  {
    id: '1',
    version: 'ES6',
    title: 'let / const 与块级作用域',
    explanation: 'ES6 引入 let 和 const，替代 var，实现块级作用域，并减少变量提升带来的问题。',
    exercise: '将 var 改成 let 或 const，并避免变量提升问题。',
    starterCode: "var name = 'Alice';\nif (true) {\n  var age = 30;\n}\nconsole.log(name, age);",
    errorCode: "var age = 30;",
    correctCode: "const name = 'Alice';\nif (true) {\n  let age = 30;\n  console.log(name, age);\n}",
  },
  {
    id: '2',
    version: 'ES6',
    title: 'Arrow Functions',
    explanation: 'Arrow functions 提供简洁的函数表达式语法，并且没有自己的 this、arguments、super 或 new.target。',
    exercise: '请将函数 function add(a, b) { return a + b; } 改写为箭头函数。',
    starterCode: "function add(a, b) {\n  return a + b;\n}",
    errorCode: "function add(a, b) {\n  return a + b;\n}",
    correctCode: "const add = (a, b) => a + b;",
  },
  {
    id: '3',
    version: 'ES6',
    title: 'Template Literals',
    explanation: '模板字符串允许在字符串中嵌入表达式，并支持多行字符串。使用反引号 (`) 来定义。',
    exercise: '使用模板字符串创建一条问候语：Hello, my name is Alice and I am 30 years old.',
    starterCode: "const name = 'Alice';\nconst age = 30;\nconst message = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';",
    errorCode: "const message = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';",
    correctCode: "const message = `Hello, my name is ${name} and I am ${age} years old.`;",
  },
  {
    id: '4',
    version: 'ES6',
    title: 'Destructuring',
    explanation: '解构赋值可以从数组或对象中提取值，并将它们赋值给变量。它让代码更简洁。',
    exercise: '从对象 person 中解构出 name 和 age 两个变量。',
    starterCode: "const person = { name: 'Bob', age: 25 };\nconst name = person.name;\nconst age = person.age;",
    errorCode: "const name = person.name;\nconst age = person.age;",
    correctCode: "const { name, age } = person;",
  },
  {
    id: '5',
    version: 'ES6',
    title: 'Spread / Rest',
    explanation: '展开和剩余语法让你可以灵活地复制、组合数组和对象，或接收可变数量的参数。',
    exercise: '使用展开语法合并两个数组 const a = [1, 2]; const b = [3, 4];',
    starterCode: "const a = [1, 2];\nconst b = [3, 4];\nconst all = a.concat(b);",
    errorCode: "const all = a.concat(b);",
    correctCode: "const all = [...a, ...b];",
  },
  {
    id: '6',
    version: 'ES7',
    title: 'Array.includes',
    explanation: 'ES7 引入 Array.includes 方法，用于判断数组是否包含某个值，语义更清晰。',
    exercise: '检查数组 [1, 2, 3] 是否包含数字 2。',
    starterCode: "const numbers = [1, 2, 3];\nconst hasTwo = numbers.indexOf(2) !== -1;",
    errorCode: "const hasTwo = numbers.indexOf(2) !== -1;",
    correctCode: "const hasTwo = numbers.includes(2);",
  },
  {
    id: '7',
    version: 'ES8',
    title: 'Async / Await',
    explanation: 'ES8（ES2017）引入 async/await，使异步代码写法更像同步代码，更易读。',
    exercise: '将 Promise.then 语法改写成 async/await。',
    starterCode: "function fetchName() {\n  return Promise.resolve('Alice');\n}\nfetchName().then((name) => {\n  console.log(name);\n});",
    errorCode: "fetchName().then((name) => {\n  console.log(name);\n});",
    correctCode: "async function showName() {\n  const name = await fetchName();\n  console.log(name);\n}\nshowName();",
  },
  {
    id: '8',
    version: 'ES2016',
    title: '指数运算符',
    explanation: 'ES2016 引入 ** 指数运算符，用于替代 Math.pow，书写更简洁。',
    exercise: '将 Math.pow(2, 3) 改写为指数运算符。',
    starterCode: "const value = Math.pow(2, 3);",
    errorCode: "const value = Math.pow(2, 3);",
    correctCode: "const value = 2 ** 3;",
  },
  {
    id: '9',
    version: 'ES2018',
    title: '对象展开/剩余属性',
    explanation: 'ES2018 支持对象展开和剩余属性，方便复制对象和提取部分字段。',
    exercise: '从 user 中提取 name，并使用剩余属性获取其他字段。',
    starterCode: "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst name = user.name;\nconst age = user.age;\nconst city = user.city;\nconst rest = {};",
    errorCode: "const name = user.name;\nconst age = user.age;\nconst city = user.city;\nconst rest = {};",
    correctCode: "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst { name, ...rest } = user;",
  },
  {
    id: '10',
    version: 'ES2019',
    title: 'Object.fromEntries',
    explanation: 'ES2019 引入 Object.fromEntries，将键值对数组转换为对象。',
    exercise: '将 [ ["name", "Alice"], ["age", 30] ] 转成对象。',
    starterCode: "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = {};\nfor (const [key, value] of entries) {\n  obj[key] = value;\n}",
    errorCode: "for (const [key, value] of entries) {\n  obj[key] = value;\n}",
    correctCode: "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = Object.fromEntries(entries);",
  },
  {
    id: '11',
    version: 'ES2020',
    title: 'Optional Chaining',
    explanation: '可选链让你安全访问嵌套属性，当某个路径不存在时不会抛出错误。',
    exercise: '使用可选链读取 user.profile.name。',
    starterCode: "const user = { profile: { name: 'Cindy' } };\nconst name = user.profile.name;",
    errorCode: "const name = user.profile.name;",
    correctCode: "const name = user?.profile?.name;",
  },
  {
    id: '12',
    version: 'ES2020',
    title: 'BigInt',
    explanation: 'ES2020 引入 BigInt，用于表示比 Number.MAX_SAFE_INTEGER 更大的整数。',
    exercise: '用 BigInt 表示 9007199254740993，并进行加法运算。',
    starterCode: "const big = 9007199254740993;\nconst next = big + 1;",
    errorCode: "const big = 9007199254740993;\nconst next = big + 1;",
    correctCode: "const big = 9007199254740993n;\nconst next = big + 1n;",
  },
  {
    id: '13',
    version: 'ES2021',
    title: 'Nullish Coalescing 与 逻辑赋值',
    explanation: 'ES2021 引入 nullish coalescing 和逻辑赋值，让默认值和条件赋值更简洁。',
    exercise: '将条件赋值改写为 ||= 或 ??=。',
    starterCode: "let name = '';\nlet age;\nif (!name) name = 'Alice';\nif (age === undefined || age === null) age = 30;",
    errorCode: "if (!name) name = 'Alice';\nif (age === undefined || age === null) age = 30;",
    correctCode: "let name = '';\nlet age;\nname ||= 'Alice';\nage ??= 30;",
  },
  {
    id: '14',
    version: 'ES2021',
    title: 'String.replaceAll',
    explanation: 'ES2021 引入 String.replaceAll，方便替换字符串中所有匹配文本。',
    exercise: '将字符串中的所有 a 替换成 b。',
    starterCode: "const text = 'aba';\nconst result = text.replace(/a/g, 'b');",
    errorCode: "const result = text.replace(/a/g, 'b');",
    correctCode: "const text = 'aba';\nconst result = text.replaceAll('a', 'b');",
  },
  {
    id: '15',
    version: 'ES2022',
    title: '类字段与私有属性',
    explanation: 'ES2022 支持类字段和私有属性，类定义更直观，还能保护内部状态。',
    exercise: '创建一个带私有字段的类，并返回字段值。',
    starterCode: "class Counter {\n  constructor() {\n    this.count = 0;\n  }\n  increment() {\n    this.count += 1;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.count);",
    errorCode: "this.count = 0;\nthis.count += 1;\nconsole.log(c.count);",
    correctCode: "class Counter {\n  #count = 0;\n  increment() {\n    this.#count += 1;\n  }\n  get value() {\n    return this.#count;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.value);",
  },
  {
    id: '16',
    version: 'ES2023',
    title: 'Array.prototype.at',
    explanation: 'ES2023 引入 Array.prototype.at，支持使用负数索引访问数组末尾元素。',
    exercise: '使用 .at 获取数组最后一个元素。',
    starterCode: "const items = ['a', 'b', 'c'];\nconst last = items[items.length - 1];",
    errorCode: "const last = items[items.length - 1];",
    correctCode: "const items = ['a', 'b', 'c'];\nconst last = items.at(-1);",
  },
  {
    id: '17',
    version: 'ES2024',
    title: 'Array.groupBy',
    explanation: 'ES2024 引入 Array.groupBy，能根据回调函数将数组分组，适合处理分类数据。',
    exercise: '将人员数组按性别分组。',
    starterCode: "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = {};\nfor (const person of people) {\n  const key = person.gender;\n  if (!groups[key]) groups[key] = [];\n  groups[key].push(person);\n}",
    errorCode: "for (const person of people) {\n  const key = person.gender;\n  if (!groups[key]) groups[key] = [];\n  groups[key].push(person);\n}",
    correctCode: "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = people.groupBy(person => person.gender);",
  },
  {
    id: '18',
    version: 'ESNext',
    title: '新特性预览：记录/元组',
    explanation: 'ESNext 指向未来标准，当前生态正在讨论记录/元组等新语法，帮助你了解未来 JavaScript 的方向。',
    exercise: '阅读并理解未来的新语法概念。',
    starterCode: "// 目前大多数浏览器还不完全支持 ESNext 新特性\n// 这里展示的是一个概念性示例：\nconst record = #{ name: 'Alice' };\nconst tuple = #[1, 2, 3];",
    errorCode: "const record = #{ name: 'Alice' };\nconst tuple = #[1, 2, 3];",
    correctCode: "// 这个示例在当前环境中可能不可运行，仅作为概念参考。",
  },
];

const stateKey = 'es-practice-state-v1';
const selectedLessonKey = 'es-practice-selected-lesson';

const lessonListEl = document.getElementById('lessonList');
const mainContentEl = document.querySelector('.main-content');
const progressTextEl = document.getElementById('progressText');
const lessonTitleEl = document.getElementById('lessonTitle');
const lessonExerciseEl = document.getElementById('lessonExercise');
const lessonExplanationEl = document.getElementById('lessonExplanation');
const codeEditorEl = document.getElementById('codeEditor');
const outputAreaEl = document.getElementById('outputArea');
const errorCodeEl = document.getElementById('errorCode');
const correctCodeEl = document.getElementById('correctCode');
const markCompletedBtn = document.getElementById('markCompletedBtn');
const runCodeBtn = document.getElementById('runCodeBtn');

let completedLessons = [];
let drafts = {};
let selectedLessonId = lessons[0].id;

function loadState() {
  const stored = localStorage.getItem(stateKey);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      completedLessons = parsed.completed || [];
      drafts = parsed.drafts || {};
    } catch (e) {
      completedLessons = [];
      drafts = {};
    }
  }
  const savedSelected = localStorage.getItem(selectedLessonKey);
  if (savedSelected) {
    selectedLessonId = savedSelected;
  }
}

function saveState() {
  localStorage.setItem(stateKey, JSON.stringify({ completed: completedLessons, drafts }));
}

function saveSelectedLesson() {
  localStorage.setItem(selectedLessonKey, selectedLessonId);
}

function scrollLessonContentToTop() {
  mainContentEl.scrollTo({ top: 0, behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderLessonList() {
  lessonListEl.innerHTML = '';
  lessons.forEach((lesson) => {
    const item = document.createElement('div');
    item.className = 'lesson-item';
    if (lesson.id === selectedLessonId) {
      item.classList.add('active');
    }
    const isCompleted = completedLessons.includes(lesson.id);
    if (isCompleted) {
      item.classList.add('completed');
    }
    item.innerHTML = `
      <div class="lesson-label">
        <div class="lesson-title">${lesson.id}. ${lesson.title}</div>
        <div class="lesson-details">
          <div class="lesson-meta">${lesson.version}</div>
          <div class="lesson-status">${isCompleted ? '已完成' : '未完成'}</div>
        </div>
      </div>`;
    item.addEventListener('click', () => {
      selectedLessonId = lesson.id;
      saveSelectedLesson();
      render();
      scrollLessonContentToTop();
    });
    lessonListEl.appendChild(item);
  });
}

function updateProgress() {
  const total = lessons.length;
  const done = completedLessons.length;
  progressTextEl.textContent = `${done} / ${total} 已完成`;
}

function renderLesson() {
  const lesson = lessons.find((item) => item.id === selectedLessonId) || lessons[0];
  lessonTitleEl.textContent = `${lesson.id}. ${lesson.title} (${lesson.version})`;
  lessonExerciseEl.textContent = lesson.exercise;
  lessonExplanationEl.textContent = lesson.explanation;
  errorCodeEl.textContent = lesson.errorCode;
  correctCodeEl.textContent = lesson.correctCode;
  codeEditorEl.value = drafts[lesson.id] || lesson.starterCode;
  outputAreaEl.textContent = '运行后结果会显示在这里';
  markCompletedBtn.textContent = completedLessons.includes(lesson.id) ? '已完成' : '标记完成';
  markCompletedBtn.disabled = completedLessons.includes(lesson.id);
}

function render() {
  renderLessonList();
  updateProgress();
  renderLesson();
}

runCodeBtn.addEventListener('click', () => {
  const code = codeEditorEl.value;
  const lesson = lessons.find((item) => item.id === selectedLessonId);
  drafts[selectedLessonId] = code;
  saveState();
  try {
    // 创建沙盒iframe来执行代码
    const sandbox = document.createElement('iframe');
    sandbox.style.display = 'none';
    document.body.appendChild(sandbox);
    
    const sandboxWindow = sandbox.contentWindow;
    const sandboxDocument = sandbox.contentDocument;
    
    // 重写console.log来捕获输出
    let output = '';
    sandboxWindow.console.log = (...args) => {
      output += args.map(arg => String(arg)).join(' ') + '\n';
    };
    
    // 执行代码
    sandboxWindow.eval(code);
    
    outputAreaEl.textContent = output || '代码执行完成（无输出）';
    
    // 清理沙盒
    document.body.removeChild(sandbox);
  } catch (error) {
    outputAreaEl.textContent = `错误：${error.message}`;
  }
});

codeEditorEl.addEventListener('input', (event) => {
  drafts[selectedLessonId] = event.target.value;
  saveState();
});

markCompletedBtn.addEventListener('click', () => {
  if (!completedLessons.includes(selectedLessonId)) {
    completedLessons.push(selectedLessonId);
    saveState();
    render();
  }
});

loadState();
render();
