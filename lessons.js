const lessonCatalog = [
  {
    version: "ES6",
    title: "let / const 与块级作用域",
    explanation: [
      "var 是函数作用域，写在 if、for 等块里仍可能泄漏到块外；let 和 const 是块级作用域，只在最近的一对花括号内有效。",
      "优先使用 const 表示不会重新赋值的绑定，只有确实需要重新赋值时才使用 let。这样读代码时能立刻知道变量是否会变化。",
      "块级作用域可以减少变量泄漏、重复声明和变量提升带来的意外行为，尤其适合循环、条件分支和临时变量。"
    ],
    exercise: "把下面代码中的 var 改成 let 或 const，并让只属于 if 代码块的 message 不泄漏到块外。",
    starterCode: "var score = 90;\nif (score >= 60) {\n  var message = '及格';\n  console.log(message);\n}\nconsole.log(message);",
    errorCode: "var score = 90;\nif (score >= 60) {\n  var message = '及格';\n  console.log(message);\n}\nconsole.log(message);",
    correctCode: "const passingScore = 60;\nlet score = 58;\nscore += 5;\n\nif (score >= passingScore) {\n  const message = '及格';\n  console.log(message);\n}\n\nconsole.log(score);",
    exampleCode: "const passingScore = 60;\nlet score = 58;\nscore += 5;\n\nif (score >= passingScore) {\n  const message = '及格';\n  console.log(message);\n}\n\nconsole.log(score);",
    practice: {
      prompt: "把 var 改成合适的 let / const。score 不会重新赋值，message 只应该在 if 块内使用。",
      starter: "var score = 90;\nif (score >= 60) {\n  var message = '及格';\n  console.log(message);\n}\nconsole.log(message);",
      answer: "const score = 90;\nif (score >= 60) {\n  const message = '及格';\n  console.log(message);\n}",
      explanation: "score 和 message 都没有重新赋值，因此使用 const。message 只在 if 块中使用，删除块外访问后，它就不会依赖 var 的函数作用域泄漏。"
    },
    debugCase: {
      title: "修复块级作用域泄漏",
      broken: "var total = 0;\nfor (var i = 0; i < 3; i += 1) {\n  var label = '第 ' + i + ' 次';\n  total += i;\n}\nconsole.log(label);\nconsole.log(total);",
      fixed: "let total = 0;\nfor (let i = 0; i < 3; i += 1) {\n  const label = '第 ' + i + ' 次';\n  console.log(label);\n  total += i;\n}\nconsole.log(total);",
      reason: "i 和 label 都只应该属于 for 循环块，因此分别使用 let 和 const。total 会累加变化，所以使用 let。修正后不再在循环外读取 label。"
    },
    review: [
      "var 是函数作用域，let / const 是块级作用域。",
      "默认优先使用 const，只有需要重新赋值时使用 let。",
      "不要依赖 var 在 if / for 块外还能访问的泄漏行为。",
      "块级作用域能减少重复声明、变量提升和意外覆盖。"
    ]
  },
  {
    version: "ES6",
    title: "默认参数",
    explanation: [
      "默认参数允许在函数参数列表中直接声明兜底值，调用方没有传参或传入 undefined 时会使用默认值。",
      "它适合配置项、可选参数和函数入口的安全兜底，比在函数体里反复写 if 判断更清楚。",
      "默认参数只在参数值为 undefined 时生效；如果传入 null、空字符串或 0，它们会按真实传入值处理。"
    ],
    exercise: "给 greet 的 name 参数添加默认值 Guest。",
    starterCode: "function greet(name) {\n  name = name || 'Guest';\n  console.log('Hello, ' + name);\n}\ngreet();",
    errorCode: "name = name || 'Guest';",
    correctCode: "function greet(name = 'Guest') {\n  console.log('Hello, ' + name);\n}\ngreet();"
  },
  {
    version: "ES6",
    title: "Arrow Functions",
    explanation: [
      "箭头函数提供更短的函数表达式写法，适合回调、数组方法和只返回表达式的小函数。",
      "箭头函数没有自己的 this、arguments、super 或 new.target，this 会沿用定义位置外层作用域。",
      "它不适合作为需要动态 this 的对象方法或构造函数；遇到 this 绑定需求时要先判断语义。"
    ],
    exercise: "请将函数 function add(a, b) { return a + b; } 改写为箭头函数。",
    starterCode: "function add(a, b) {\n  return a + b;\n}",
    errorCode: "function add(a, b) {\n  return a + b;\n}",
    correctCode: "const add = (a, b) => a + b;"
  },
  {
    version: "ES6",
    title: "Template Literals",
    explanation: [
      "模板字符串用反引号定义，可以通过 ${} 嵌入表达式，也天然支持多行文本。",
      "它适合拼接消息、生成简单 HTML 片段、格式化日志和组合包含变量的字符串。",
      "模板字符串提升的是可读性，不会自动防注入；把用户输入拼进 HTML 或 SQL 时仍然需要转义。"
    ],
    exercise: "使用模板字符串创建一条问候语：Hello, my name is Alice and I am 30 years old.",
    starterCode: "const name = 'Alice';\nconst age = 30;\nconst message = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';",
    errorCode: "const message = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';",
    correctCode: "const message = `Hello, my name is ${name} and I am ${age} years old.`;"
  },
  {
    version: "ES6",
    title: "Destructuring",
    explanation: [
      "解构赋值可以从数组或对象中按结构取值，并直接绑定到局部变量。",
      "它适合读取配置对象、函数参数、接口返回值和数组中的固定位置数据。",
      "深层解构虽然方便，但过度嵌套会降低可读性；复杂结构可以分几步取值。"
    ],
    exercise: "从对象 person 中解构出 name 和 age 两个变量。",
    starterCode: "const person = { name: 'Bob', age: 25 };\nconst name = person.name;\nconst age = person.age;",
    errorCode: "const name = person.name;\nconst age = person.age;",
    correctCode: "const { name, age } = person;"
  },
  {
    version: "ES6",
    title: "Spread / Rest",
    explanation: [
      "展开语法把数组、对象或可迭代值展开到新的位置；剩余语法把多余的参数或属性收集起来。",
      "它常用于复制数组/对象、合并数据、函数可变参数和从对象中排除部分字段。",
      "对象和数组展开都是浅拷贝，嵌套对象仍然共享引用；处理深层数据时要额外注意。"
    ],
    exercise: "使用展开语法合并两个数组 const a = [1, 2]; const b = [3, 4];",
    starterCode: "const a = [1, 2];\nconst b = [3, 4];\nconst all = a.concat(b);",
    errorCode: "const all = a.concat(b);",
    correctCode: "const all = [...a, ...b];"
  },
  {
    version: "ES6",
    title: "增强对象字面量",
    explanation: [
      "增强对象字面量让对象创建更简洁，包括属性简写、方法简写和计算属性名等能力。",
      "当变量名和属性名相同时可以直接写变量名，方法也可以省略 function 关键字。",
      "这种写法常见于配置对象、模块导出、返回结构化数据等场景，能减少重复代码。"
    ],
    exercise: "将重复的属性名和值，以及普通函数方法，改成对象字面量简写。",
    starterCode: "const name = 'Alice';\nconst age = 30;\nconst user = {\n  name: name,\n  age: age,\n  sayHi: function() {\n    console.log(this.name);\n  }\n};",
    errorCode: "name: name,\nage: age,\nsayHi: function() {\n  console.log(this.name);\n}",
    correctCode: "const name = 'Alice';\nconst age = 30;\nconst user = {\n  name,\n  age,\n  sayHi() {\n    console.log(this.name);\n  }\n};"
  },
  {
    version: "ES6",
    title: "计算属性名",
    explanation: [
      "计算属性名允许在对象字面量中用表达式动态生成属性名。",
      "它适合根据变量、常量、枚举值或前缀规则构建映射对象和状态表。",
      "动态 key 会增加阅读成本，命名规则要尽量清晰，并避免和已有属性意外冲突。"
    ],
    exercise: "使用计算属性名创建 role_admin 属性。",
    starterCode: "const role = 'admin';\nconst permissions = {};\npermissions['role_' + role] = true;\nconsole.log(permissions);",
    errorCode: "permissions['role_' + role] = true;",
    correctCode: "const role = 'admin';\nconst permissions = {\n  ['role_' + role]: true\n};\nconsole.log(permissions);"
  },
  {
    version: "ES6",
    title: "Classes",
    explanation: [
      "class 是基于原型继承的语法糖，让构造函数、实例方法、静态方法和继承关系更直观。",
      "它适合表达有稳定行为和内部状态的对象模型，比如组件、服务、领域对象。",
      "class 方法默认不可枚举，类声明不会像 function 一样可在声明前安全调用；使用时仍要理解原型机制。"
    ],
    exercise: "将构造函数 Person 改写为 class。",
    starterCode: "function Person(name) {\n  this.name = name;\n}\nPerson.prototype.sayHi = function() {\n  console.log(this.name);\n};\nconst p = new Person('Alice');\np.sayHi();",
    errorCode: "function Person(name) {\n  this.name = name;\n}\nPerson.prototype.sayHi = function() {\n  console.log(this.name);\n};",
    correctCode: "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  sayHi() {\n    console.log(this.name);\n  }\n}\nconst p = new Person('Alice');\np.sayHi();"
  },
  {
    version: "ES6",
    title: "Promise",
    explanation: [
      "Promise 用一个对象表示未来才会完成的异步结果，并用 fulfilled、rejected 描述成功或失败。",
      "then、catch 和 finally 可以把异步流程串起来，避免深层回调嵌套。",
      "Promise 一旦 settled 状态就不会再改变；错误处理要放在链路末端或用 await 搭配 try/catch。"
    ],
    exercise: "用 Promise.resolve 创建一个异步结果，并在 then 中输出。",
    starterCode: "function loadName(callback) {\n  callback('Alice');\n}\nloadName(function(name) {\n  console.log(name);\n});",
    errorCode: "loadName(function(name) {\n  console.log(name);\n});",
    correctCode: "Promise.resolve('Alice').then((name) => {\n  console.log(name);\n});"
  },
  {
    version: "ES6",
    title: "Map",
    explanation: [
      "Map 是 ES6 中值得掌握的特性。它的核心作用是：Map 是专门存储键值对的集合，键可以是任意类型，并且提供清晰的 set、get、has API。",
      "典型使用场景：将普通对象计数表改写为 Map。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "将普通对象计数表改写为 Map。",
    starterCode: "const counts = {};\ncounts.apple = 2;\ncounts.orange = 3;\nconsole.log(counts.apple);",
    errorCode: "const counts = {};\ncounts.apple = 2;\nconsole.log(counts.apple);",
    correctCode: "const counts = new Map();\ncounts.set('apple', 2);\ncounts.set('orange', 3);\nconsole.log(counts.get('apple'));"
  },
  {
    version: "ES6",
    title: "Set",
    explanation: [
      "Set 是 ES6 中值得掌握的特性。它的核心作用是：Set 用来保存不重复的值，常用于数组去重、成员判断和集合运算的基础场景。",
      "典型使用场景：使用 Set 去除数组中的重复数字。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Set 去除数组中的重复数字。",
    starterCode: "const numbers = [1, 2, 2, 3, 3];\nconst unique = numbers.filter((item, index) => numbers.indexOf(item) === index);\nconsole.log(unique);",
    errorCode: "numbers.filter((item, index) => numbers.indexOf(item) === index);",
    correctCode: "const numbers = [1, 2, 2, 3, 3];\nconst unique = [...new Set(numbers)];\nconsole.log(unique);"
  },
  {
    version: "ES6",
    title: "Symbol",
    explanation: [
      "Symbol 是 ES6 中值得掌握的特性。它的核心作用是：Symbol 创建唯一标识，适合定义不会和普通字符串属性冲突的对象键。",
      "典型使用场景：使用 Symbol 创建唯一属性，并读取它的值。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Symbol 创建唯一属性，并读取它的值。",
    starterCode: "const id = 'id';\nconst user = {};\nuser[id] = 1;\nconsole.log(user[id]);",
    errorCode: "const id = 'id';",
    correctCode: "const id = Symbol('id');\nconst user = {};\nuser[id] = 1;\nconsole.log(user[id]);"
  },
  {
    version: "ES6",
    title: "for...of",
    explanation: [
      "for...of 是 ES6 中值得掌握的特性。它的核心作用是：for...of 用于遍历可迭代对象的值，比传统索引循环更适合数组、字符串、Set 和 Map。",
      "典型使用场景：将索引循环改写为 for...of。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "将索引循环改写为 for...of。",
    starterCode: "const items = ['a', 'b', 'c'];\nfor (let i = 0; i < items.length; i += 1) {\n  console.log(items[i]);\n}",
    errorCode: "for (let i = 0; i < items.length; i += 1) {\n  console.log(items[i]);\n}",
    correctCode: "const items = ['a', 'b', 'c'];\nfor (const item of items) {\n  console.log(item);\n}"
  },
  {
    version: "ES6",
    title: "Generators",
    explanation: [
      "Generators 是 ES6 中值得掌握的特性。它的核心作用是：Generator 函数可以暂停和继续执行，使用 yield 逐步产出值，是迭代器和异步流程控制的重要基础。",
      "典型使用场景：创建一个 generator，依次产出 1 和 2。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "创建一个 generator，依次产出 1 和 2。",
    starterCode: "function createNumbers() {\n  return [1, 2];\n}\nconst numbers = createNumbers();\nconsole.log(numbers[0]);\nconsole.log(numbers[1]);",
    errorCode: "function createNumbers() {\n  return [1, 2];\n}",
    correctCode: "function* createNumbers() {\n  yield 1;\n  yield 2;\n}\nconst numbers = createNumbers();\nconsole.log(numbers.next().value);\nconsole.log(numbers.next().value);"
  },
  {
    version: "ES6",
    title: "自定义迭代器",
    explanation: [
      "自定义迭代器 是 ES6 中值得掌握的特性。它的核心作用是：通过实现 Symbol.iterator，对象就能接入 for...of、展开语法等统一的迭代协议。",
      "典型使用场景：让 range 对象可以被 for...of 遍历。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "让 range 对象可以被 for...of 遍历。",
    starterCode: "const range = { from: 1, to: 3 };\nfor (let value = range.from; value <= range.to; value += 1) {\n  console.log(value);\n}",
    errorCode: "const range = { from: 1, to: 3 };",
    correctCode: "const range = {\n  from: 1,\n  to: 3,\n  *[Symbol.iterator]() {\n    for (let value = this.from; value <= this.to; value += 1) {\n      yield value;\n    }\n  }\n};\nfor (const value of range) {\n  console.log(value);\n}"
  },
  {
    version: "ES6",
    title: "Array.from / Array.of",
    explanation: [
      "Array.from / Array.of 是 ES6 中值得掌握的特性。它的核心作用是：Array.from 可以把类数组和可迭代对象转为数组，Array.of 则用参数创建数组，避免 Array 构造器的歧义。",
      "典型使用场景：使用 Array.from 将字符串转成字符数组。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Array.from 将字符串转成字符数组。",
    starterCode: "const chars = 'ES6'.split('');\nconsole.log(chars);",
    errorCode: "'ES6'.split('');",
    correctCode: "const chars = Array.from('ES6');\nconsole.log(chars);"
  },
  {
    version: "ES6",
    title: "Object.assign",
    explanation: [
      "Object.assign 是 ES6 中值得掌握的特性。它的核心作用是：Object.assign 用于把多个对象的可枚举属性复制到目标对象，是 ES6 中常见的浅拷贝和合并工具。",
      "典型使用场景：使用 Object.assign 合并 defaults 和 options。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Object.assign 合并 defaults 和 options。",
    starterCode: "const defaults = { theme: 'light', size: 'md' };\nconst options = { size: 'lg' };\nconst config = { theme: defaults.theme, size: options.size };\nconsole.log(config);",
    errorCode: "const config = { theme: defaults.theme, size: options.size };",
    correctCode: "const defaults = { theme: 'light', size: 'md' };\nconst options = { size: 'lg' };\nconst config = Object.assign({}, defaults, options);\nconsole.log(config);"
  },
  {
    version: "ES6",
    title: "字符串新增方法",
    explanation: [
      "字符串新增方法 是 ES6 中值得掌握的特性。它的核心作用是：ES6 为字符串增加 startsWith、endsWith、includes 等方法，让常见匹配判断更语义化。",
      "典型使用场景：使用 startsWith 判断字符串是否以 ES 开头。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 startsWith 判断字符串是否以 ES 开头。",
    starterCode: "const text = 'ES6 features';\nconst result = text.indexOf('ES') === 0;\nconsole.log(result);",
    errorCode: "text.indexOf('ES') === 0;",
    correctCode: "const text = 'ES6 features';\nconst result = text.startsWith('ES');\nconsole.log(result);"
  },
  {
    version: "ES6",
    title: "Number 新增方法",
    explanation: [
      "Number 新增方法 是 ES6 中值得掌握的特性。它的核心作用是：ES6 增加了 Number.isNaN、Number.isFinite、Number.isInteger 等更严格的数字判断方法。",
      "典型使用场景：使用 Number.isInteger 判断 value 是否为整数。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Number.isInteger 判断 value 是否为整数。",
    starterCode: "const value = 42;\nconst result = typeof value === 'number' && isFinite(value) && Math.floor(value) === value;\nconsole.log(result);",
    errorCode: "Math.floor(value) === value;",
    correctCode: "const value = 42;\nconst result = Number.isInteger(value);\nconsole.log(result);"
  },
  {
    version: "ES6",
    title: "ES Modules",
    explanation: [
      "ES Modules 是 ES6 中值得掌握的特性。它的核心作用是：ES Modules 提供标准化的模块系统，用 import 和 export 管理文件之间的依赖关系。",
      "典型使用场景：将全局变量式代码改成模块导出和导入的写法。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "将全局变量式代码改成模块导出和导入的写法。",
    starterCode: "// math.js\nconst add = (a, b) => a + b;\n\n// app.js\nconsole.log(add(1, 2));",
    errorCode: "const add = (a, b) => a + b;",
    correctCode: "// math.js\nexport const add = (a, b) => a + b;\n\n// app.js\nimport { add } from './math.js';\nconsole.log(add(1, 2));"
  },
  {
    version: "ES6",
    title: "WeakMap / WeakSet",
    explanation: [
      "WeakMap / WeakSet 是 ES6 中值得掌握的特性。它的核心作用是：WeakMap 和 WeakSet 使用弱引用保存对象，适合存储私有数据或与对象生命周期绑定的元信息。",
      "典型使用场景：使用 WeakMap 为对象保存私有积分。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 WeakMap 为对象保存私有积分。",
    starterCode: "const scores = new Map();\nconst user = { name: 'Alice' };\nscores.set(user, 10);\nconsole.log(scores.get(user));",
    errorCode: "const scores = new Map();",
    correctCode: "const scores = new WeakMap();\nconst user = { name: 'Alice' };\nscores.set(user, 10);\nconsole.log(scores.get(user));"
  },
  {
    version: "ES6",
    title: "Array.find / findIndex",
    explanation: [
      "Array.find / findIndex 是 ES6 中值得掌握的特性。它的核心作用是：find 和 findIndex 用于按条件查找数组元素或位置，比手写循环更直接。",
      "典型使用场景：使用 find 找到第一个年龄大于 18 的用户。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 find 找到第一个年龄大于 18 的用户。",
    starterCode: "const users = [{ age: 16 }, { age: 20 }];\nlet adult;\nfor (const user of users) {\n  if (user.age > 18) adult = user;\n}\nconsole.log(adult);",
    errorCode: "for (const user of users) {\n  if (user.age > 18) adult = user;\n}",
    correctCode: "const users = [{ age: 16 }, { age: 20 }];\nconst adult = users.find(user => user.age > 18);\nconsole.log(adult);"
  },
  {
    version: "ES6",
    title: "Proxy / Reflect",
    explanation: [
      "Proxy / Reflect 是 ES6 中值得掌握的特性。它的核心作用是：Proxy 可以拦截对象读取、赋值等操作，Reflect 提供与这些底层操作对应的标准方法。",
      "典型使用场景：用 Proxy 拦截 user.name 的读取，并在控制台输出提示。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "用 Proxy 拦截 user.name 的读取，并在控制台输出提示。",
    starterCode: "const user = { name: 'Alice' };\nconsole.log(user.name);",
    errorCode: "console.log(user.name);",
    correctCode: "const user = { name: 'Alice' };\nconst proxy = new Proxy(user, {\n  get(target, key) {\n    console.log('reading ' + String(key));\n    return Reflect.get(target, key);\n  }\n});\nconsole.log(proxy.name);"
  },
  {
    version: "ES2016",
    title: "指数运算符",
    explanation: [
      "指数运算符 是 ES2016 中值得掌握的特性。它的核心作用是：ES2016 引入 ** 指数运算符，用于替代 Math.pow，书写更简洁。",
      "典型使用场景：将 Math.pow(2, 3) 改写为指数运算符。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "将 Math.pow(2, 3) 改写为指数运算符。",
    starterCode: "const value = Math.pow(2, 3);",
    errorCode: "const value = Math.pow(2, 3);",
    correctCode: "const value = 2 ** 3;"
  },
  {
    version: "ES2016",
    title: "Array.includes",
    explanation: [
      "Array.includes 是 ES2016 中值得掌握的特性。它的核心作用是：ES2016 引入 Array.includes 方法，用于判断数组是否包含某个值，语义更清晰。",
      "典型使用场景：检查数组 [1, 2, 3] 是否包含数字 2。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "检查数组 [1, 2, 3] 是否包含数字 2。",
    starterCode: "const numbers = [1, 2, 3];\nconst hasTwo = numbers.indexOf(2) !== -1;",
    errorCode: "const hasTwo = numbers.indexOf(2) !== -1;",
    correctCode: "const hasTwo = numbers.includes(2);"
  },
  {
    version: "ES2017",
    title: "Async / Await",
    explanation: [
      "Async / Await 是 ES2017 中值得掌握的特性。它的核心作用是：ES2017 引入 async/await，使异步代码写法更像同步代码，更易读。",
      "典型使用场景：将 Promise.then 语法改写成 async/await。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "将 Promise.then 语法改写成 async/await。",
    starterCode: "function fetchName() {\n  return Promise.resolve('Alice');\n}\nfetchName().then((name) => {\n  console.log(name);\n});",
    errorCode: "fetchName().then((name) => {\n  console.log(name);\n});",
    correctCode: "async function showName() {\n  const name = await fetchName();\n  console.log(name);\n}\nshowName();"
  },
  {
    version: "ES2017",
    title: "Object.values / Object.entries",
    explanation: [
      "Object.values / Object.entries 是 ES2017 中值得掌握的特性。它的核心作用是：Object.values 和 Object.entries 让对象值列表、键值对列表的遍历更方便。",
      "典型使用场景：使用 Object.entries 输出对象中的键和值。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Object.entries 输出对象中的键和值。",
    starterCode: "const user = { name: 'Alice', age: 30 };\nfor (const key of Object.keys(user)) {\n  console.log(key, user[key]);\n}",
    errorCode: "for (const key of Object.keys(user)) {\n  console.log(key, user[key]);\n}",
    correctCode: "const user = { name: 'Alice', age: 30 };\nfor (const [key, value] of Object.entries(user)) {\n  console.log(key, value);\n}"
  },
  {
    version: "ES2017",
    title: "String padding",
    explanation: [
      "String padding 是 ES2017 中值得掌握的特性。它的核心作用是：padStart 和 padEnd 可以把字符串补齐到指定长度，常用于格式化编号、日期和对齐文本。",
      "典型使用场景：使用 padStart 将数字 7 格式化为 007。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 padStart 将数字 7 格式化为 007。",
    starterCode: "const id = String(7);\nconst padded = '00' + id;\nconsole.log(padded);",
    errorCode: "'00' + id;",
    correctCode: "const id = String(7);\nconst padded = id.padStart(3, '0');\nconsole.log(padded);"
  },
  {
    version: "ES2017",
    title: "Object.getOwnPropertyDescriptors",
    explanation: [
      "Object.getOwnPropertyDescriptors 是 ES2017 中值得掌握的特性。它的核心作用是：Object.getOwnPropertyDescriptors 可以一次获取对象所有自有属性描述符，适合复制 getter、setter 等特殊属性。",
      "典型使用场景：使用属性描述符复制带 getter 的对象。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用属性描述符复制带 getter 的对象。",
    starterCode: "const source = {\n  get name() {\n    return 'Alice';\n  }\n};\nconst copy = Object.assign({}, source);\nconsole.log(copy.name);",
    errorCode: "const copy = Object.assign({}, source);",
    correctCode: "const source = {\n  get name() {\n    return 'Alice';\n  }\n};\nconst copy = Object.defineProperties({}, Object.getOwnPropertyDescriptors(source));\nconsole.log(copy.name);"
  },
  {
    version: "ES2018",
    title: "对象展开/剩余属性",
    explanation: [
      "对象展开/剩余属性 是 ES2018 中值得掌握的特性。它的核心作用是：ES2018 支持对象展开和剩余属性，方便复制对象和提取部分字段。",
      "典型使用场景：从 user 中提取 name，并使用剩余属性获取其他字段。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "从 user 中提取 name，并使用剩余属性获取其他字段。",
    starterCode: "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst name = user.name;\nconst age = user.age;\nconst city = user.city;\nconst rest = {};",
    errorCode: "const name = user.name;\nconst age = user.age;\nconst city = user.city;\nconst rest = {};",
    correctCode: "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst { name, ...rest } = user;"
  },
  {
    version: "ES2018",
    title: "Async Iteration",
    explanation: [
      "Async Iteration 是 ES2018 中值得掌握的特性。它的核心作用是：异步迭代用 for await...of 消费异步产生的数据，适合流式数据和分页接口。",
      "典型使用场景：使用 for await...of 读取异步数字序列。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 for await...of 读取异步数字序列。",
    starterCode: "async function readAll(source) {\n  source.forEach((item) => console.log(item));\n}",
    errorCode: "source.forEach((item) => console.log(item));",
    correctCode: "async function readAll(source) {\n  for await (const item of source) {\n    console.log(item);\n  }\n}"
  },
  {
    version: "ES2018",
    title: "Promise.finally",
    explanation: [
      "Promise.finally 是 ES2018 中值得掌握的特性。它的核心作用是：Promise.finally 用于在异步操作结束后执行清理逻辑，无论成功还是失败都会运行。",
      "典型使用场景：将重复的清理逻辑改成 finally。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "将重复的清理逻辑改成 finally。",
    starterCode: "fetch('/api').then(() => {\n  console.log('done');\n}).catch(() => {\n  console.log('done');\n});",
    errorCode: ".then(() => {\n  console.log('done');\n}).catch(() => {\n  console.log('done');\n});",
    correctCode: "fetch('/api')\n  .then(() => console.log('success'))\n  .catch(() => console.log('error'))\n  .finally(() => console.log('done'));"
  },
  {
    version: "ES2018",
    title: "RegExp 命名捕获组",
    explanation: [
      "RegExp 命名捕获组 是 ES2018 中值得掌握的特性。它的核心作用是：命名捕获组允许用名字读取正则匹配结果，比依赖数字下标更清晰。",
      "典型使用场景：使用命名捕获组提取日期中的年、月、日。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用命名捕获组提取日期中的年、月、日。",
    starterCode: "const match = '2026-04-29'.match(/(\\d{4})-(\\d{2})-(\\d{2})/);\nconsole.log(match[1], match[2], match[3]);",
    errorCode: "match[1], match[2], match[3]",
    correctCode: "const match = '2026-04-29'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\nconsole.log(match.groups.year, match.groups.month, match.groups.day);"
  },
  {
    version: "ES2018",
    title: "RegExp 增强：dotAll / lookbehind / Unicode properties",
    explanation: [
      "RegExp 增强：dotAll / lookbehind / Unicode properties 是 ES2018 中值得掌握的特性。它的核心作用是：ES2018 为正则表达式加入 dotAll、lookbehind 和 Unicode property escapes，让跨行、后行断言和 Unicode 分类匹配更强。",
      "典型使用场景：使用 lookbehind 提取价格中的数字。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 lookbehind 提取价格中的数字。",
    starterCode: "const text = '$42';\nconst match = text.match(/\\d+/);\nconsole.log(match[0]);",
    errorCode: "text.match(/\\d+/);",
    correctCode: "const text = '$42';\nconst match = text.match(/(?<=\\$)\\d+/);\nconsole.log(match[0]);"
  },
  {
    version: "ES2019",
    title: "Object.fromEntries",
    explanation: [
      "Object.fromEntries 是 ES2019 中值得掌握的特性。它的核心作用是：ES2019 引入 Object.fromEntries，将键值对数组转换为对象。",
      "典型使用场景：将 [ [\"name\", \"Alice\"], [\"age\", 30] ] 转成对象。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "将 [ [\"name\", \"Alice\"], [\"age\", 30] ] 转成对象。",
    starterCode: "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = {};\nfor (const [key, value] of entries) {\n  obj[key] = value;\n}",
    errorCode: "for (const [key, value] of entries) {\n  obj[key] = value;\n}",
    correctCode: "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = Object.fromEntries(entries);"
  },
  {
    version: "ES2019",
    title: "Array.flat / flatMap",
    explanation: [
      "Array.flat / flatMap 是 ES2019 中值得掌握的特性。它的核心作用是：flat 用于展开嵌套数组，flatMap 则把 map 和一层 flat 合并成一步。",
      "典型使用场景：使用 flat 将二维数组展平成一维数组。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 flat 将二维数组展平成一维数组。",
    starterCode: "const list = [[1, 2], [3, 4]];\nconst result = [].concat(...list);\nconsole.log(result);",
    errorCode: "[].concat(...list);",
    correctCode: "const list = [[1, 2], [3, 4]];\nconst result = list.flat();\nconsole.log(result);"
  },
  {
    version: "ES2019",
    title: "Optional catch binding",
    explanation: [
      "Optional catch binding 是 ES2019 中值得掌握的特性。它的核心作用是：当 catch 块不需要错误对象时，ES2019 允许省略 catch 参数，让代码更简洁。",
      "典型使用场景：移除没有使用的 error 参数。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "移除没有使用的 error 参数。",
    starterCode: "try {\n  JSON.parse('{');\n} catch (error) {\n  console.log('invalid json');\n}",
    errorCode: "catch (error) {",
    correctCode: "try {\n  JSON.parse('{');\n} catch {\n  console.log('invalid json');\n}"
  },
  {
    version: "ES2019",
    title: "Symbol.description",
    explanation: [
      "Symbol.description 是 ES2019 中值得掌握的特性。它的核心作用是：Symbol.description 可以直接读取 Symbol 的描述文本，避免从 toString 结果中手动截取。",
      "典型使用场景：使用 description 读取 Symbol 描述。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 description 读取 Symbol 描述。",
    starterCode: "const id = Symbol('userId');\nconst desc = id.toString().slice(7, -1);\nconsole.log(desc);",
    errorCode: "id.toString().slice(7, -1);",
    correctCode: "const id = Symbol('userId');\nconst desc = id.description;\nconsole.log(desc);"
  },
  {
    version: "ES2020",
    title: "Optional Chaining",
    explanation: [
      "Optional Chaining 是 ES2020 中值得掌握的特性。它的核心作用是：可选链让你安全访问嵌套属性，当某个路径不存在时不会抛出错误。",
      "典型使用场景：使用可选链读取 user.profile.name。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用可选链读取 user.profile.name。",
    starterCode: "const user = { profile: { name: 'Cindy' } };\nconst name = user.profile.name;",
    errorCode: "const name = user.profile.name;",
    correctCode: "const name = user?.profile?.name;"
  },
  {
    version: "ES2020",
    title: "BigInt",
    explanation: [
      "BigInt 是 ES2020 中值得掌握的特性。它的核心作用是：ES2020 引入 BigInt，用于表示比 Number.MAX_SAFE_INTEGER 更大的整数。",
      "典型使用场景：用 BigInt 表示 9007199254740993，并进行加法运算。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "用 BigInt 表示 9007199254740993，并进行加法运算。",
    starterCode: "const big = 9007199254740993;\nconst next = big + 1;",
    errorCode: "const big = 9007199254740993;\nconst next = big + 1;",
    correctCode: "const big = 9007199254740993n;\nconst next = big + 1n;"
  },
  {
    version: "ES2020",
    title: "globalThis",
    explanation: [
      "globalThis 是 ES2020 中值得掌握的特性。它的核心作用是：globalThis 提供跨环境的全局对象访问方式，浏览器、Node.js 和 Worker 中都能使用。",
      "典型使用场景：使用 globalThis 保存一个全局配置。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 globalThis 保存一个全局配置。",
    starterCode: "window.appName = 'ES Practice Lab';\nconsole.log(window.appName);",
    errorCode: "window.appName = 'ES Practice Lab';",
    correctCode: "globalThis.appName = 'ES Practice Lab';\nconsole.log(globalThis.appName);"
  },
  {
    version: "ES2020",
    title: "Promise.allSettled",
    explanation: [
      "Promise.allSettled 是 ES2020 中值得掌握的特性。它的核心作用是：Promise.allSettled 会等待所有 Promise 完成，并保留每一项的 fulfilled 或 rejected 状态。",
      "典型使用场景：使用 allSettled 同时收集成功和失败结果。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 allSettled 同时收集成功和失败结果。",
    starterCode: "const tasks = [Promise.resolve(1), Promise.reject(new Error('fail'))];\nPromise.all(tasks).then(console.log).catch(console.log);",
    errorCode: "Promise.all(tasks)",
    correctCode: "const tasks = [Promise.resolve(1), Promise.reject(new Error('fail'))];\nPromise.allSettled(tasks).then(console.log);"
  },
  {
    version: "ES2020",
    title: "Dynamic import / import.meta",
    explanation: [
      "Dynamic import / import.meta 是 ES2020 中值得掌握的特性。它的核心作用是：动态 import 可以按需加载模块，import.meta 则暴露当前模块的元信息。",
      "典型使用场景：将静态导入改成按需动态导入。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "将静态导入改成按需动态导入。",
    starterCode: "import { format } from './format.js';\nconsole.log(format('hello'));",
    errorCode: "import { format } from './format.js';",
    correctCode: "const { format } = await import('./format.js');\nconsole.log(format('hello'));\nconsole.log(import.meta.url);"
  },
  {
    version: "ES2020",
    title: "String.matchAll",
    explanation: [
      "String.matchAll 是 ES2020 中值得掌握的特性。它的核心作用是：matchAll 返回所有正则匹配结果的迭代器，并保留捕获组信息。",
      "典型使用场景：使用 matchAll 提取字符串中的所有数字。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 matchAll 提取字符串中的所有数字。",
    starterCode: "const text = 'a1 b22 c333';\nconst matches = text.match(/\\d+/g);\nconsole.log(matches);",
    errorCode: "text.match(/\\d+/g);",
    correctCode: "const text = 'a1 b22 c333';\nconst matches = [...text.matchAll(/\\d+/g)].map(match => match[0]);\nconsole.log(matches);"
  },
  {
    version: "ES2021",
    title: "Nullish Coalescing 与 逻辑赋值",
    explanation: [
      "Nullish Coalescing 与 逻辑赋值 是 ES2021 中值得掌握的特性。它的核心作用是：ES2021 引入 nullish coalescing 和逻辑赋值，让默认值和条件赋值更简洁。",
      "典型使用场景：将条件赋值改写为 ||= 或 ??=。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "将条件赋值改写为 ||= 或 ??=。",
    starterCode: "let name = '';\nlet age;\nif (!name) name = 'Alice';\nif (age === undefined || age === null) age = 30;",
    errorCode: "if (!name) name = 'Alice';\nif (age === undefined || age === null) age = 30;",
    correctCode: "let name = '';\nlet age;\nname ||= 'Alice';\nage ??= 30;"
  },
  {
    version: "ES2021",
    title: "String.replaceAll",
    explanation: [
      "String.replaceAll 是 ES2021 中值得掌握的特性。它的核心作用是：ES2021 引入 String.replaceAll，方便替换字符串中所有匹配文本。",
      "典型使用场景：将字符串中的所有 a 替换成 b。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "将字符串中的所有 a 替换成 b。",
    starterCode: "const text = 'aba';\nconst result = text.replace(/a/g, 'b');",
    errorCode: "const result = text.replace(/a/g, 'b');",
    correctCode: "const text = 'aba';\nconst result = text.replaceAll('a', 'b');"
  },
  {
    version: "ES2021",
    title: "Promise.any",
    explanation: [
      "Promise.any 是 ES2021 中值得掌握的特性。它的核心作用是：Promise.any 会在任意一个 Promise 成功时返回该结果，只有全部失败时才会 reject。",
      "典型使用场景：使用 Promise.any 获取最快成功的请求结果。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Promise.any 获取最快成功的请求结果。",
    starterCode: "const requests = [Promise.reject('bad'), Promise.resolve('ok')];\nPromise.race(requests).then(console.log).catch(console.log);",
    errorCode: "Promise.race(requests)",
    correctCode: "const requests = [Promise.reject('bad'), Promise.resolve('ok')];\nPromise.any(requests).then(console.log).catch(console.log);"
  },
  {
    version: "ES2021",
    title: "Numeric separators",
    explanation: [
      "Numeric separators 是 ES2021 中值得掌握的特性。它的核心作用是：数字分隔符允许用下划线提升长数字的可读性，不改变数字本身的值。",
      "典型使用场景：使用数字分隔符改写一百万。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用数字分隔符改写一百万。",
    starterCode: "const amount = 1000000;\nconsole.log(amount);",
    errorCode: "1000000",
    correctCode: "const amount = 1_000_000;\nconsole.log(amount);"
  },
  {
    version: "ES2021",
    title: "WeakRef / FinalizationRegistry",
    explanation: [
      "WeakRef / FinalizationRegistry 是 ES2021 中值得掌握的特性。它的核心作用是：WeakRef 和 FinalizationRegistry 提供弱引用和对象回收后的清理通知，适合缓存等高级场景。",
      "典型使用场景：使用 WeakRef 保存一个可被回收的对象引用。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 WeakRef 保存一个可被回收的对象引用。",
    starterCode: "let user = { name: 'Alice' };\nconst cache = user;\nuser = null;\nconsole.log(cache.name);",
    errorCode: "const cache = user;",
    correctCode: "let user = { name: 'Alice' };\nconst ref = new WeakRef(user);\nuser = null;\nconsole.log(ref.deref()?.name);"
  },
  {
    version: "ES2022",
    title: "类字段与私有属性",
    explanation: [
      "类字段与私有属性 是 ES2022 中值得掌握的特性。它的核心作用是：ES2022 支持类字段和私有属性，类定义更直观，还能保护内部状态。",
      "典型使用场景：创建一个带私有字段的类，并返回字段值。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "创建一个带私有字段的类，并返回字段值。",
    starterCode: "class Counter {\n  constructor() {\n    this.count = 0;\n  }\n  increment() {\n    this.count += 1;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.count);",
    errorCode: "this.count = 0;\nthis.count += 1;\nconsole.log(c.count);",
    correctCode: "class Counter {\n  #count = 0;\n  increment() {\n    this.#count += 1;\n  }\n  get value() {\n    return this.#count;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.value);"
  },
  {
    version: "ES2022",
    title: "Array.prototype.at",
    explanation: [
      "Array.prototype.at 是 ES2022 中值得掌握的特性。它的核心作用是：ES2022 引入 Array.prototype.at，支持使用负数索引访问数组末尾元素。",
      "典型使用场景：使用 .at 获取数组最后一个元素。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 .at 获取数组最后一个元素。",
    starterCode: "const items = ['a', 'b', 'c'];\nconst last = items[items.length - 1];",
    errorCode: "const last = items[items.length - 1];",
    correctCode: "const items = ['a', 'b', 'c'];\nconst last = items.at(-1);"
  },
  {
    version: "ES2022",
    title: "Class static block",
    explanation: [
      "Class static block 是 ES2022 中值得掌握的特性。它的核心作用是：静态初始化块允许 class 在定义阶段执行一次初始化逻辑，适合设置静态字段或复杂配置。",
      "典型使用场景：使用 static block 初始化静态字段。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 static block 初始化静态字段。",
    starterCode: "class Config {}\nConfig.value = 'ready';\nconsole.log(Config.value);",
    errorCode: "Config.value = 'ready';",
    correctCode: "class Config {\n  static value;\n  static {\n    this.value = 'ready';\n  }\n}\nconsole.log(Config.value);"
  },
  {
    version: "ES2022",
    title: "Private brand checks",
    explanation: [
      "Private brand checks 是 ES2022 中值得掌握的特性。它的核心作用是：private brand check 使用 #field in object 判断对象是否拥有某个私有字段，比 try/catch 访问更直接。",
      "典型使用场景：使用 #value in object 判断实例类型。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 #value in object 判断实例类型。",
    starterCode: "class Box {\n  #value = 1;\n  static isBox(object) {\n    try {\n      object.#value;\n      return true;\n    } catch {\n      return false;\n    }\n  }\n}",
    errorCode: "try {\n  object.#value;\n  return true;\n} catch {\n  return false;\n}",
    correctCode: "class Box {\n  #value = 1;\n  static isBox(object) {\n    return #value in object;\n  }\n}"
  },
  {
    version: "ES2022",
    title: "RegExp match indices",
    explanation: [
      "RegExp match indices 是 ES2022 中值得掌握的特性。它的核心作用是：RegExp d 标志会在匹配结果上提供 indices，方便获取匹配文本和捕获组在原字符串中的位置。",
      "典型使用场景：使用 d 标志读取匹配位置。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 d 标志读取匹配位置。",
    starterCode: "const match = /name:(\\w+)/.exec('name:Alice');\nconst start = match.index;\nconst end = start + match[0].length;\nconsole.log(start, end);",
    errorCode: "const end = start + match[0].length;",
    correctCode: "const match = /name:(\\w+)/d.exec('name:Alice');\nconsole.log(match.indices[0]);\nconsole.log(match.indices[1]);"
  },
  {
    version: "ES2022",
    title: "Object.hasOwn",
    explanation: [
      "Object.hasOwn 是 ES2022 中值得掌握的特性。它的核心作用是：Object.hasOwn 是更安全的自有属性判断方式，避免直接调用对象上的 hasOwnProperty。",
      "典型使用场景：使用 Object.hasOwn 判断对象是否拥有 name 属性。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Object.hasOwn 判断对象是否拥有 name 属性。",
    starterCode: "const user = { name: 'Alice' };\nconst result = user.hasOwnProperty('name');\nconsole.log(result);",
    errorCode: "user.hasOwnProperty('name');",
    correctCode: "const user = { name: 'Alice' };\nconst result = Object.hasOwn(user, 'name');\nconsole.log(result);"
  },
  {
    version: "ES2022",
    title: "Top-level await",
    explanation: [
      "Top-level await 是 ES2022 中值得掌握的特性。它的核心作用是：Top-level await 允许在模块顶层直接等待异步结果，减少额外的 async 包装函数。",
      "典型使用场景：移除不必要的 async main 包装函数。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "移除不必要的 async main 包装函数。",
    starterCode: "async function main() {\n  const data = await Promise.resolve('ready');\n  console.log(data);\n}\nmain();",
    errorCode: "async function main() { ... }\nmain();",
    correctCode: "const data = await Promise.resolve('ready');\nconsole.log(data);"
  },
  {
    version: "ES2022",
    title: "Error cause",
    explanation: [
      "Error cause 是 ES2022 中值得掌握的特性。它的核心作用是：Error cause 用于在抛出新错误时保留原始错误，方便调试错误链路。",
      "典型使用场景：创建一个带 cause 的错误。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "创建一个带 cause 的错误。",
    starterCode: "try {\n  JSON.parse('{');\n} catch (error) {\n  throw new Error('配置解析失败: ' + error.message);\n}",
    errorCode: "new Error('配置解析失败: ' + error.message);",
    correctCode: "try {\n  JSON.parse('{');\n} catch (error) {\n  throw new Error('配置解析失败', { cause: error });\n}"
  },
  {
    version: "ES2023",
    title: "Change Array by Copy",
    explanation: [
      "Change Array by Copy 是 ES2023 中值得掌握的特性。它的核心作用是：toSorted、toReversed、toSpliced 和 with 返回新数组，避免直接修改原数组。",
      "典型使用场景：使用 toSorted 排序，并保留原数组不变。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 toSorted 排序，并保留原数组不变。",
    starterCode: "const numbers = [3, 1, 2];\nconst sorted = numbers.sort();\nconsole.log(numbers, sorted);",
    errorCode: "numbers.sort();",
    correctCode: "const numbers = [3, 1, 2];\nconst sorted = numbers.toSorted();\nconsole.log(numbers, sorted);"
  },
  {
    version: "ES2023",
    title: "Array.findLast / findLastIndex",
    explanation: [
      "Array.findLast / findLastIndex 是 ES2023 中值得掌握的特性。它的核心作用是：findLast 和 findLastIndex 从数组末尾开始查找，适合寻找最后一次满足条件的元素。",
      "典型使用场景：找到最后一个大于 10 的数字。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "找到最后一个大于 10 的数字。",
    starterCode: "const numbers = [5, 12, 8, 20];\nconst result = numbers.filter(n => n > 10).pop();\nconsole.log(result);",
    errorCode: "numbers.filter(n => n > 10).pop();",
    correctCode: "const numbers = [5, 12, 8, 20];\nconst result = numbers.findLast(n => n > 10);\nconsole.log(result);"
  },
  {
    version: "ES2023",
    title: "Symbols as WeakMap keys",
    explanation: [
      "Symbols as WeakMap keys 是 ES2023 中值得掌握的特性。它的核心作用是：ES2023 允许非注册 Symbol 作为 WeakMap 键，适合创建不可枚举、不可猜测的弱关联令牌。",
      "典型使用场景：使用 Symbol 作为 WeakMap 的键。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Symbol 作为 WeakMap 的键。",
    starterCode: "const token = {};\nconst map = new WeakMap();\nmap.set(token, 'secret');\nconsole.log(map.get(token));",
    errorCode: "const token = {};",
    correctCode: "const token = Symbol('token');\nconst map = new WeakMap();\nmap.set(token, 'secret');\nconsole.log(map.get(token));"
  },
  {
    version: "ES2024",
    title: "Object.groupBy / Map.groupBy",
    explanation: [
      "Object.groupBy / Map.groupBy 是 ES2024 中值得掌握的特性。它的核心作用是：ES2024 引入 Object.groupBy 和 Map.groupBy，能根据回调函数将可迭代数据分组，适合处理分类数据。",
      "典型使用场景：将人员数组按性别分组。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "将人员数组按性别分组。",
    starterCode: "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = {};\nfor (const person of people) {\n  const key = person.gender;\n  if (!groups[key]) groups[key] = [];\n  groups[key].push(person);\n}",
    errorCode: "for (const person of people) {\n  const key = person.gender;\n  if (!groups[key]) groups[key] = [];\n  groups[key].push(person);\n}",
    correctCode: "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = Object.groupBy(people, person => person.gender);"
  },
  {
    version: "ES2024",
    title: "Promise.withResolvers",
    explanation: [
      "Promise.withResolvers 是 ES2024 中值得掌握的特性。它的核心作用是：Promise.withResolvers 返回 promise、resolve 和 reject，适合需要把控制权交给外部事件的场景。",
      "典型使用场景：使用 Promise.withResolvers 创建可外部 resolve 的 Promise。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Promise.withResolvers 创建可外部 resolve 的 Promise。",
    starterCode: "let resolve;\nconst promise = new Promise((done) => {\n  resolve = done;\n});\nresolve('ok');\npromise.then(console.log);",
    errorCode: "let resolve;\nconst promise = new Promise((done) => {\n  resolve = done;\n});",
    correctCode: "const { promise, resolve } = Promise.withResolvers();\nresolve('ok');\npromise.then(console.log);"
  },
  {
    version: "ES2024",
    title: "ArrayBuffer transfer",
    explanation: [
      "ArrayBuffer transfer 是 ES2024 中值得掌握的特性。它的核心作用是：ArrayBuffer transfer 可以把缓冲区内容转移到新缓冲区，并让旧缓冲区失效，适合二进制数据所有权转移。",
      "典型使用场景：使用 transfer 转移 ArrayBuffer。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 transfer 转移 ArrayBuffer。",
    starterCode: "const buffer = new ArrayBuffer(8);\nconst copy = buffer.slice(0);\nconsole.log(copy.byteLength);",
    errorCode: "buffer.slice(0);",
    correctCode: "const buffer = new ArrayBuffer(8);\nconst moved = buffer.transfer();\nconsole.log(moved.byteLength);\nconsole.log(buffer.detached);"
  },
  {
    version: "ES2024",
    title: "Resizable ArrayBuffer",
    explanation: [
      "Resizable ArrayBuffer 是 ES2024 中值得掌握的特性。它的核心作用是：Resizable ArrayBuffer 允许创建带 maxByteLength 的可调整缓冲区，并用 resize 改变当前长度。",
      "典型使用场景：创建一个可增长的 ArrayBuffer 并调整大小。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "创建一个可增长的 ArrayBuffer 并调整大小。",
    starterCode: "let buffer = new ArrayBuffer(8);\nconst bigger = new ArrayBuffer(16);\nnew Uint8Array(bigger).set(new Uint8Array(buffer));\nbuffer = bigger;\nconsole.log(buffer.byteLength);",
    errorCode: "const bigger = new ArrayBuffer(16);",
    correctCode: "const buffer = new ArrayBuffer(8, { maxByteLength: 16 });\nbuffer.resize(16);\nconsole.log(buffer.resizable, buffer.byteLength);"
  },
  {
    version: "ES2024",
    title: "RegExp v flag",
    explanation: [
      "RegExp v flag 是 ES2024 中值得掌握的特性。它的核心作用是：RegExp v 标志增强 Unicode 匹配能力，支持字符串属性和更强的字符集合表达。",
      "典型使用场景：使用 v 标志匹配 emoji 字符串属性。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 v 标志匹配 emoji 字符串属性。",
    starterCode: "const regex = /\\p{Emoji}/u;\nconsole.log(regex.test('👨‍👩‍👧‍👦'));",
    errorCode: "/\\p{Emoji}/u",
    correctCode: "const regex = /\\p{RGI_Emoji}/v;\nconsole.log(regex.test('👨‍👩‍👧‍👦'));"
  },
  {
    version: "ES2024",
    title: "String isWellFormed / toWellFormed",
    explanation: [
      "String isWellFormed / toWellFormed 是 ES2024 中值得掌握的特性。它的核心作用是：isWellFormed 和 toWellFormed 用于检测和修复字符串中的孤立代理项，避免 Unicode 编码问题。",
      "典型使用场景：使用 toWellFormed 修复不合法字符串。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 toWellFormed 修复不合法字符串。",
    starterCode: "const text = '\�';\nconsole.log(encodeURIComponent(text));",
    errorCode: "encodeURIComponent(text);",
    correctCode: "const text = '\�';\nconsole.log(text.isWellFormed());\nconsole.log(text.toWellFormed());"
  },
  {
    version: "ES2025",
    title: "Set methods",
    explanation: [
      "Set methods 是 ES2025 中值得掌握的特性。它的核心作用是：ES2025 为 Set 增加 union、intersection、difference 等集合操作方法，让集合运算更直观。",
      "典型使用场景：使用 intersection 求两个集合的交集。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 intersection 求两个集合的交集。",
    starterCode: "const a = new Set([1, 2, 3]);\nconst b = new Set([2, 3, 4]);\nconst both = new Set([...a].filter(item => b.has(item)));\nconsole.log([...both]);",
    errorCode: "new Set([...a].filter(item => b.has(item)));",
    correctCode: "const a = new Set([1, 2, 3]);\nconst b = new Set([2, 3, 4]);\nconst both = a.intersection(b);\nconsole.log([...both]);"
  },
  {
    version: "ES2025",
    title: "Iterator helpers",
    explanation: [
      "Iterator helpers 是 ES2025 中值得掌握的特性。它的核心作用是：Iterator helpers 为迭代器增加 map、filter、take、toArray 等链式处理能力。",
      "典型使用场景：使用迭代器 helper 过滤并转换数组迭代器。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用迭代器 helper 过滤并转换数组迭代器。",
    starterCode: "const result = [1, 2, 3, 4]\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10);\nconsole.log(result);",
    errorCode: ".filter(n => n % 2 === 0).map(n => n * 10);",
    correctCode: "const result = [1, 2, 3, 4]\n  .values()\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10)\n  .toArray();\nconsole.log(result);"
  },
  {
    version: "ES2025",
    title: "RegExp.escape",
    explanation: [
      "RegExp.escape 是 ES2025 中值得掌握的特性。它的核心作用是：RegExp.escape 可以把普通字符串安全转义为正则片段，避免用户输入影响正则结构。",
      "典型使用场景：使用 RegExp.escape 根据用户输入创建正则。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 RegExp.escape 根据用户输入创建正则。",
    starterCode: "const input = 'a+b';\nconst regex = new RegExp(input);\nconsole.log(regex.test('a+b'));",
    errorCode: "new RegExp(input);",
    correctCode: "const input = 'a+b';\nconst regex = new RegExp(RegExp.escape(input));\nconsole.log(regex.test('a+b'));"
  },
  {
    version: "ES2025",
    title: "Promise.try",
    explanation: [
      "Promise.try 是 ES2025 中值得掌握的特性。它的核心作用是：Promise.try 会把同步异常和异步结果统一包装进 Promise 链，适合规范化任务入口。",
      "典型使用场景：使用 Promise.try 包装可能同步抛错的函数。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Promise.try 包装可能同步抛错的函数。",
    starterCode: "try {\n  const value = JSON.parse('{');\n  Promise.resolve(value).then(console.log);\n} catch (error) {\n  Promise.reject(error).catch(console.log);\n}",
    errorCode: "try { ... } catch (error) { ... }",
    correctCode: "Promise.try(() => JSON.parse('{'))\n  .then(console.log)\n  .catch(console.log);"
  },
  {
    version: "ES2025",
    title: "Import Attributes / JSON Modules",
    explanation: [
      "Import Attributes / JSON Modules 是 ES2025 中值得掌握的特性。它的核心作用是：Import Attributes 让模块导入可以携带类型信息，JSON Modules 则让 JSON 文件以标准模块形式导入。",
      "典型使用场景：使用 import attributes 导入 JSON 配置。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 import attributes 导入 JSON 配置。",
    starterCode: "const response = await fetch('./config.json');\nconst config = await response.json();\nconsole.log(config.name);",
    errorCode: "await fetch('./config.json');",
    correctCode: "import config from './config.json' with { type: 'json' };\nconsole.log(config.name);"
  },
  {
    version: "ES2025",
    title: "RegExp modifiers",
    explanation: [
      "RegExp modifiers 是 ES2025 中值得掌握的特性。它的核心作用是：RegExp modifiers 允许在正则表达式内部局部开启或关闭标志，使复杂匹配更精确。",
      "典型使用场景：只在局部片段中开启忽略大小写匹配。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "只在局部片段中开启忽略大小写匹配。",
    starterCode: "const regex = /hello world/i;\nconsole.log(regex.test('HELLO world'));",
    errorCode: "/hello world/i",
    correctCode: "const regex = /(?i:hello) world/;\nconsole.log(regex.test('HELLO world'));"
  },
  {
    version: "ESNext",
    title: "Array.fromAsync",
    explanation: [
      "Array.fromAsync 是 ESNext 中值得掌握的特性。它的核心作用是：Array.fromAsync 可以从异步可迭代对象或 Promise 集合创建数组，是 Array.from 的异步版本。",
      "典型使用场景：使用 Array.fromAsync 收集异步迭代结果。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Array.fromAsync 收集异步迭代结果。",
    starterCode: "async function collect(source) {\n  const result = [];\n  for await (const item of source) {\n    result.push(item);\n  }\n  return result;\n}",
    errorCode: "const result = [];\nfor await (const item of source) {\n  result.push(item);\n}",
    correctCode: "async function collect(source) {\n  return Array.fromAsync(source);\n}"
  },
  {
    version: "ESNext",
    title: "Error.isError",
    explanation: [
      "Error.isError 是 ESNext 中值得掌握的特性。它的核心作用是：Error.isError 提供标准方式判断一个值是否为 Error 对象，比 instanceof Error 更适合跨 realm 场景。",
      "典型使用场景：使用 Error.isError 判断捕获到的值。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Error.isError 判断捕获到的值。",
    starterCode: "try {\n  JSON.parse('{');\n} catch (value) {\n  console.log(value instanceof Error);\n}",
    errorCode: "value instanceof Error",
    correctCode: "try {\n  JSON.parse('{');\n} catch (value) {\n  console.log(Error.isError(value));\n}"
  },
  {
    version: "ESNext",
    title: "Uint8Array Base64 / Hex",
    explanation: [
      "Uint8Array Base64 / Hex 是 ESNext 中值得掌握的特性。它的核心作用是：Uint8Array toBase64、fromBase64、toHex、fromHex 等方法让二进制和文本编码转换标准化。",
      "典型使用场景：使用 Uint8Array.fromBase64 解码 Base64 字符串。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Uint8Array.fromBase64 解码 Base64 字符串。",
    starterCode: "const text = atob('SGVsbG8=');\nconst bytes = Uint8Array.from(text, ch => ch.charCodeAt(0));\nconsole.log(bytes);",
    errorCode: "atob('SGVsbG8=')",
    correctCode: "const bytes = Uint8Array.fromBase64('SGVsbG8=');\nconsole.log(bytes.toBase64());"
  },
  {
    version: "ESNext",
    title: "Map upsert",
    explanation: [
      "Map upsert 是 ESNext 中值得掌握的特性。它的核心作用是：Map upsert 方法用于读取或插入默认值，避免手写 has、get、set 组合逻辑。",
      "典型使用场景：使用 getOrInsert 为 Map 中不存在的键设置默认数组。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 getOrInsert 为 Map 中不存在的键设置默认数组。",
    starterCode: "const groups = new Map();\nconst key = 'js';\nif (!groups.has(key)) {\n  groups.set(key, []);\n}\ngroups.get(key).push('ES');",
    errorCode: "if (!groups.has(key)) {\n  groups.set(key, []);\n}",
    correctCode: "const groups = new Map();\nconst key = 'js';\ngroups.getOrInsert(key, []).push('ES');"
  },
  {
    version: "ESNext",
    title: "JSON.parse source text access",
    explanation: [
      "JSON.parse source text access 是 ESNext 中值得掌握的特性。它的核心作用是：JSON.parse source text access 让 reviver 能读取原始 JSON 片段，适合处理大整数等会丢失精度的值。",
      "典型使用场景：在 reviver 中读取原始 source 文本。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "在 reviver 中读取原始 source 文本。",
    starterCode: "const data = JSON.parse('{\"big\":9007199254740993}');\nconsole.log(data.big);",
    errorCode: "JSON.parse('{\"big\":9007199254740993}')",
    correctCode: "const data = JSON.parse('{\"big\":9007199254740993}', (key, value, context) => {\n  return key === 'big' ? BigInt(context.source) : value;\n});\nconsole.log(data.big);"
  },
  {
    version: "ESNext",
    title: "Math.sumPrecise",
    explanation: [
      "Math.sumPrecise 是 ESNext 中值得掌握的特性。它的核心作用是：Math.sumPrecise 用更稳定的方式求和，减少浮点数累加误差对结果的影响。",
      "典型使用场景：使用 Math.sumPrecise 计算浮点数组总和。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Math.sumPrecise 计算浮点数组总和。",
    starterCode: "const values = [0.1, 0.2, 0.3];\nconst total = values.reduce((sum, value) => sum + value, 0);\nconsole.log(total);",
    errorCode: "values.reduce((sum, value) => sum + value, 0);",
    correctCode: "const values = [0.1, 0.2, 0.3];\nconst total = Math.sumPrecise(values);\nconsole.log(total);"
  },
  {
    version: "ESNext",
    title: "Temporal",
    explanation: [
      "Temporal 是 ESNext 中值得掌握的特性。它的核心作用是：Temporal 是新的日期时间 API，用于替代 Date 在时区、日历和不可变数据方面的长期痛点。",
      "典型使用场景：使用 Temporal.PlainDate 表示一个不包含时区的日期。",
      "学习时不要只记语法，还要关注它解决的旧写法问题，以及什么时候应该继续使用更简单、更直观的传统写法。"
    ],
    exercise: "使用 Temporal.PlainDate 表示一个不包含时区的日期。",
    starterCode: "const date = new Date('2026-04-29T00:00:00Z');\nconsole.log(date.toISOString().slice(0, 10));",
    errorCode: "new Date('2026-04-29T00:00:00Z');",
    correctCode: "const date = Temporal.PlainDate.from('2026-04-29');\nconsole.log(date.toString());"
  }
];

const lessonSequence = [
  'let / const 与块级作用域',
  '默认参数',
  'Arrow Functions',
  'Template Literals',
  'Destructuring',
  'Spread / Rest',
  '增强对象字面量',
  '计算属性名',
  'Classes',
  'Promise',
  'Map',
  'Set',
  'Symbol',
  'for...of',
  'Generators',
  '自定义迭代器',
  'Array.from / Array.of',
  'Object.assign',
  '字符串新增方法',
  'Number 新增方法',
  'ES Modules',
  'WeakMap / WeakSet',
  'Array.find / findIndex',
  'Proxy / Reflect',
  '指数运算符',
  'Array.includes',
  'Async / Await',
  'Object.values / Object.entries',
  'String padding',
  'Object.getOwnPropertyDescriptors',
  '对象展开/剩余属性',
  'Async Iteration',
  'Promise.finally',
  'RegExp 命名捕获组',
  'RegExp 增强：dotAll / lookbehind / Unicode properties',
  'Object.fromEntries',
  'Array.flat / flatMap',
  'Optional catch binding',
  'Symbol.description',
  'Optional Chaining',
  'BigInt',
  'globalThis',
  'Promise.allSettled',
  'Dynamic import / import.meta',
  'String.matchAll',
  'Nullish Coalescing 与 逻辑赋值',
  'String.replaceAll',
  'Promise.any',
  'Numeric separators',
  'WeakRef / FinalizationRegistry',
  '类字段与私有属性',
  'Array.prototype.at',
  'Class static block',
  'Private brand checks',
  'RegExp match indices',
  'Object.hasOwn',
  'Top-level await',
  'Error cause',
  'Change Array by Copy',
  'Array.findLast / findLastIndex',
  'Symbols as WeakMap keys',
  'Object.groupBy / Map.groupBy',
  'Promise.withResolvers',
  'ArrayBuffer transfer',
  'Resizable ArrayBuffer',
  'RegExp v flag',
  'String isWellFormed / toWellFormed',
  'Set methods',
  'Iterator helpers',
  'RegExp.escape',
  'Promise.try',
  'Import Attributes / JSON Modules',
  'RegExp modifiers',
  'Array.fromAsync',
  'Error.isError',
  'Uint8Array Base64 / Hex',
  'Map upsert',
  'JSON.parse source text access',
  'Math.sumPrecise',
  'Temporal',
];

const lessonsByTitle = new Map(lessonCatalog.map((lesson) => [lesson.title, lesson]));
if (lessonsByTitle.size !== lessonCatalog.length) {
  throw new Error('课程标题不能重复。');
}

export const lessons = lessonSequence.map((title, index) => {
  const lesson = lessonsByTitle.get(title);
  if (!lesson) {
    throw new Error(`课程排序中找不到课程：${title}`);
  }

  return {
    ...lesson,
    id: String(index + 1),
  };
});
