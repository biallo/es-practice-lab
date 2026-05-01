export const es6Lessons = [
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
      explanation: [
        "score 和 message 都没有重新赋值，因此使用 const。message 只在 if 块中使用，删除块外访问后，它就不会依赖 var 的函数作用域泄漏。"
      ]
    },
    debugCase: {
      title: "修复块级作用域泄漏",
      broken: "var total = 0;\nfor (var i = 0; i < 3; i += 1) {\n  var label = '第 ' + i + ' 次';\n  total += i;\n}\nconsole.log(label);\nconsole.log(total);",
      fixed: "let total = 0;\nfor (let i = 0; i < 3; i += 1) {\n  const label = '第 ' + i + ' 次';\n  console.log(label);\n  total += i;\n}\nconsole.log(total);",
      reason: [
        "i 和 label 都只应该属于 for 循环块，因此分别使用 let 和 const。total 会累加变化，所以使用 let。修正后不再在循环外读取 label。"
      ]
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
    correctCode: "function greet(name = 'Guest') {\n  console.log('Hello, ' + name);\n}\ngreet();",
    practice: {
      prompt: "为 formatName 添加默认参数，让没有传入 name 时输出 Guest。",
      starter: "function formatName(name) {\n  return 'Hello, ' + name;\n}\n\nconsole.log(formatName());",
      answer: "function formatName(name = 'Guest') {\n  return 'Hello, ' + name;\n}\n\nconsole.log(formatName());",
      explanation: [
        "默认参数写在参数列表里，调用方没有传入 name 或传入 undefined 时会使用 Guest。",
        "这种写法比在函数体里先判断再赋值更直接，也能把函数入口的默认规则放在最显眼的位置。"
      ]
    },
    debugCase: {
      title: "修复 || 兜底导致的有效值丢失",
      broken: "function createPage(page) {\n  page = page || 1;\n  return 'page=' + page;\n}\n\nconsole.log(createPage(0));",
      fixed: "function createPage(page = 1) {\n  return 'page=' + page;\n}\n\nconsole.log(createPage(0));",
      reason: [
        "|| 会把 0、空字符串、false 这类假值都替换掉，适合性不如默认参数精确。",
        "默认参数只在参数值为 undefined 时生效，所以 createPage(0) 会保留用户明确传入的 0。"
      ]
    },
    review: [
      "默认参数只会在参数值为 undefined 时启用。",
      "null、0、空字符串、false 都会作为真实传入值保留下来。",
      "能解释默认参数和 value || fallback 的区别。",
      "能把入口兜底逻辑放进参数列表，而不是散落在函数体里。"
    ]
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
    correctCode: "const add = (a, b) => a + b;",
    practice: {
      prompt: "使用箭头函数写一个 double 方法，接收一个数字并返回它的 2 倍。",
      starter: "const double = \n\nconsole.log(double(4));",
      answer: "const double = (value) => value * 2;\n\nconsole.log(double(4));",
      explanation: [
        "这个练习适合用表达式体箭头函数：参数 value 进入函数后直接返回 value * 2，不需要额外的 return 代码块。"
      ]
    },
    debugCase: {
      title: "修复箭头函数中的 this 误用",
      broken: "const user = {\n  name: 'Alice',\n  sayHi: () => {\n    console.log(this.name);\n  }\n};\n\nuser.sayHi();",
      fixed: "const user = {\n  name: 'Alice',\n  sayHi() {\n    console.log(this.name);\n  }\n};\n\nuser.sayHi();",
      reason: [
        "箭头函数没有自己的 this，作为对象方法时不会自动指向 user。这里应该使用方法简写，让 this 在调用 user.sayHi() 时指向 user。"
      ]
    },
    review: [
      "箭头函数适合短小回调和表达式返回。",
      "箭头函数没有自己的 this、arguments、super 或 new.target。",
      "对象方法、构造函数等需要动态 this 的场景，不应盲目使用箭头函数。",
      "能区分表达式体写法和带 return 的代码块写法。"
    ]
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
    correctCode: "const message = `Hello, my name is ${name} and I am ${age} years old.`;",
    practice: {
      prompt: "使用模板字符串输出商品摘要：Book costs 30 dollars.",
      starter: "const product = 'Book';\nconst price = 30;\nconst summary = \n\nconsole.log(summary);",
      answer: "const product = 'Book';\nconst price = 30;\nconst summary = `${product} costs ${price} dollars.`;\n\nconsole.log(summary);",
      explanation: [
        "模板字符串用反引号包裹，通过 ${product} 和 ${price} 直接嵌入表达式，避免多个字符串片段和加号混在一起。"
      ]
    },
    debugCase: {
      title: "修复模板字符串插值错误",
      broken: "const name = 'Alice';\nconst city = 'Shanghai';\nconst message = 'Hello, ${name} from ${city}';\n\nconsole.log(message);",
      fixed: "const name = 'Alice';\nconst city = 'Shanghai';\nconst message = `Hello, ${name} from ${city}`;\n\nconsole.log(message);",
      reason: [
        "只有反引号定义的模板字符串才会解析 ${} 插值。普通单引号字符串会把 ${name} 原样当作文本。"
      ]
    },
    review: [
      "模板字符串必须使用反引号。",
      "${} 中可以放变量，也可以放表达式。",
      "模板字符串适合减少字符串拼接中的加号和空格错误。",
      "模板字符串不会自动转义用户输入，输出到 HTML 等场景仍要注意安全。"
    ]
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
    correctCode: "const { name, age } = person;",
    practice: {
      prompt: "独立完成：从对象 person 中解构出 name 和 age 两个变量。",
      starter: "// 使用 Destructuring 完成本课练习。\n// 目标：从对象 person 中解构出 name 和 age 两个变量。\n\n",
      answer: "const { name, age } = person;",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Destructuring 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Destructuring 的旧写法或误用",
      broken: "const person = { name: 'Bob', age: 25 };\nconst name = person.name;\nconst age = person.age;",
      fixed: "const { name, age } = person;",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Destructuring 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Destructuring 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
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
    correctCode: "const all = [...a, ...b];",
    practice: {
      prompt: "独立完成：使用展开语法合并两个数组 const a = [1, 2]; const b = [3, 4];",
      starter: "// 使用 Spread / Rest 完成本课练习。\n// 目标：使用展开语法合并两个数组 const a = [1, 2]; const b = [3, 4];\n\n",
      answer: "const all = [...a, ...b];",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Spread / Rest 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Spread / Rest 的旧写法或误用",
      broken: "const a = [1, 2];\nconst b = [3, 4];\nconst all = a.concat(b);",
      fixed: "const all = [...a, ...b];",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Spread / Rest 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Spread / Rest 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
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
    correctCode: "const name = 'Alice';\nconst age = 30;\nconst user = {\n  name,\n  age,\n  sayHi() {\n    console.log(this.name);\n  }\n};",
    practice: {
      prompt: "独立完成：将重复的属性名和值，以及普通函数方法，改成对象字面量简写。",
      starter: "// 使用 增强对象字面量 完成本课练习。\n// 目标：将重复的属性名和值，以及普通函数方法，改成对象字面量简写。\n\n",
      answer: "const name = 'Alice';\nconst age = 30;\nconst user = {\n  name,\n  age,\n  sayHi() {\n    console.log(this.name);\n  }\n};",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 增强对象字面量 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 增强对象字面量 的旧写法或误用",
      broken: "const name = 'Alice';\nconst age = 30;\nconst user = {\n  name: name,\n  age: age,\n  sayHi: function() {\n    console.log(this.name);\n  }\n};",
      fixed: "const name = 'Alice';\nconst age = 30;\nconst user = {\n  name,\n  age,\n  sayHi() {\n    console.log(this.name);\n  }\n};",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 增强对象字面量 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 增强对象字面量 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
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
    correctCode: "const role = 'admin';\nconst permissions = {\n  ['role_' + role]: true\n};\nconsole.log(permissions);",
    practice: {
      prompt: "独立完成：使用计算属性名创建 role_admin 属性。",
      starter: "// 使用 计算属性名 完成本课练习。\n// 目标：使用计算属性名创建 role_admin 属性。\n\n",
      answer: "const role = 'admin';\nconst permissions = {\n  ['role_' + role]: true\n};\nconsole.log(permissions);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 计算属性名 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 计算属性名 的旧写法或误用",
      broken: "const role = 'admin';\nconst permissions = {};\npermissions['role_' + role] = true;\nconsole.log(permissions);",
      fixed: "const role = 'admin';\nconst permissions = {\n  ['role_' + role]: true\n};\nconsole.log(permissions);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 计算属性名 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 计算属性名 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
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
    correctCode: "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  sayHi() {\n    console.log(this.name);\n  }\n}\nconst p = new Person('Alice');\np.sayHi();",
    practice: {
      prompt: "独立完成：将构造函数 Person 改写为 class。",
      starter: "// 使用 Classes 完成本课练习。\n// 目标：将构造函数 Person 改写为 class。\n\n",
      answer: "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  sayHi() {\n    console.log(this.name);\n  }\n}\nconst p = new Person('Alice');\np.sayHi();",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Classes 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Classes 的旧写法或误用",
      broken: "function Person(name) {\n  this.name = name;\n}\nPerson.prototype.sayHi = function() {\n  console.log(this.name);\n};\nconst p = new Person('Alice');\np.sayHi();",
      fixed: "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  sayHi() {\n    console.log(this.name);\n  }\n}\nconst p = new Person('Alice');\np.sayHi();",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Classes 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Classes 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
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
    correctCode: "Promise.resolve('Alice').then((name) => {\n  console.log(name);\n});",
    practice: {
      prompt: "独立完成：用 Promise.resolve 创建一个异步结果，并在 then 中输出。",
      starter: "// 使用 Promise 完成本课练习。\n// 目标：用 Promise.resolve 创建一个异步结果，并在 then 中输出。\n\n",
      answer: "Promise.resolve('Alice').then((name) => {\n  console.log(name);\n});",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Promise 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Promise 的旧写法或误用",
      broken: "function loadName(callback) {\n  callback('Alice');\n}\nloadName(function(name) {\n  console.log(name);\n});",
      fixed: "Promise.resolve('Alice').then((name) => {\n  console.log(name);\n});",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Promise 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Promise 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES6",
    title: "Map",
    explanation: [
      "Map 是 ES6 中值得掌握的特性。它的核心作用是：Map 是专门存储键值对的集合，键可以是任意类型，并且提供清晰的 set、get、has API。",
      "典型使用场景：将普通对象计数表改写为 Map。",
      "解决的旧写法问题：普通对象当映射表时，key 会被转成字符串，还可能碰到原型属性和 hasOwnProperty 之类的边界。",
      "适合使用：需要任意类型作为 key、频繁 set/get/has/delete，或需要保留插入顺序的键值集合。",
      "继续用传统写法：只是固定字段的数据记录，例如 { name, age }，普通对象更直观，也更适合 JSON 序列化。"
    ],
    exercise: "将普通对象计数表改写为 Map。",
    starterCode: "const counts = {};\ncounts.apple = 2;\ncounts.orange = 3;\nconsole.log(counts.apple);",
    errorCode: "const counts = {};\ncounts.apple = 2;\nconsole.log(counts.apple);",
    correctCode: "const counts = new Map();\ncounts.set('apple', 2);\ncounts.set('orange', 3);\nconsole.log(counts.get('apple'));",
    practice: {
      prompt: "独立完成：将普通对象计数表改写为 Map。",
      starter: "// 使用 Map 完成本课练习。\n// 目标：将普通对象计数表改写为 Map。\n\n",
      answer: "const counts = new Map();\ncounts.set('apple', 2);\ncounts.set('orange', 3);\nconsole.log(counts.get('apple'));",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Map 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Map 的旧写法或误用",
      broken: "const counts = {};\ncounts.apple = 2;\ncounts.orange = 3;\nconsole.log(counts.apple);",
      fixed: "const counts = new Map();\ncounts.set('apple', 2);\ncounts.set('orange', 3);\nconsole.log(counts.get('apple'));",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Map 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Map 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES6",
    title: "Set",
    explanation: [
      "Set 是 ES6 中值得掌握的特性。它的核心作用是：Set 用来保存不重复的值，常用于数组去重、成员判断和集合运算的基础场景。",
      "典型使用场景：使用 Set 去除数组中的重复数字。",
      "解决的旧写法问题：用数组去重或判断成员时，经常要写 indexOf/includes/filter 组合，代码容易重复且语义不够直接。",
      "适合使用：需要表达“不重复集合”、做去重、成员判断，或后续要进行集合运算。",
      "继续用传统写法：需要保留重复项、依赖元素顺序和下标，或只是一次性判断很小数组时，数组写法更简单。"
    ],
    exercise: "使用 Set 去除数组中的重复数字。",
    starterCode: "const numbers = [1, 2, 2, 3, 3];\nconst unique = numbers.filter((item, index) => numbers.indexOf(item) === index);\nconsole.log(unique);",
    errorCode: "numbers.filter((item, index) => numbers.indexOf(item) === index);",
    correctCode: "const numbers = [1, 2, 2, 3, 3];\nconst unique = [...new Set(numbers)];\nconsole.log(unique);",
    practice: {
      prompt: "独立完成：使用 Set 去除数组中的重复数字。",
      starter: "// 使用 Set 完成本课练习。\n// 目标：使用 Set 去除数组中的重复数字。\n\n",
      answer: "const numbers = [1, 2, 2, 3, 3];\nconst unique = [...new Set(numbers)];\nconsole.log(unique);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Set 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Set 的旧写法或误用",
      broken: "const numbers = [1, 2, 2, 3, 3];\nconst unique = numbers.filter((item, index) => numbers.indexOf(item) === index);\nconsole.log(unique);",
      fixed: "const numbers = [1, 2, 2, 3, 3];\nconst unique = [...new Set(numbers)];\nconsole.log(unique);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Set 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Set 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES6",
    title: "Symbol",
    explanation: [
      "Symbol 是 ES6 中值得掌握的特性。它的核心作用是：Symbol 创建唯一标识，适合定义不会和普通字符串属性冲突的对象键。",
      "典型使用场景：使用 Symbol 创建唯一属性，并读取它的值。",
      "解决的旧写法问题：用普通字符串给对象加内部属性时，容易和已有业务字段重名冲突，也会被常规遍历和 JSON 序列化带出去。",
      "适合使用：需要唯一标识、避免属性名冲突，或接入 Symbol.iterator 等语言内置协议。",
      "继续用传统写法：字段本来就是业务数据、需要展示或序列化时，普通字符串 key 更清楚。"
    ],
    exercise: "使用 Symbol 创建唯一属性，并读取它的值。",
    starterCode: "const id = 'id';\nconst user = {};\nuser[id] = 1;\nconsole.log(user[id]);",
    errorCode: "const id = 'id';",
    correctCode: "const id = Symbol('id');\nconst user = {};\nuser[id] = 1;\nconsole.log(user[id]);",
    practice: {
      prompt: "独立完成：使用 Symbol 创建唯一属性，并读取它的值。",
      starter: "// 使用 Symbol 完成本课练习。\n// 目标：使用 Symbol 创建唯一属性，并读取它的值。\n\n",
      answer: "const id = Symbol('id');\nconst user = {};\nuser[id] = 1;\nconsole.log(user[id]);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Symbol 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Symbol 的旧写法或误用",
      broken: "const id = 'id';\nconst user = {};\nuser[id] = 1;\nconsole.log(user[id]);",
      fixed: "const id = Symbol('id');\nconst user = {};\nuser[id] = 1;\nconsole.log(user[id]);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Symbol 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Symbol 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES6",
    title: "for...of",
    explanation: [
      "for...of 是 ES6 中值得掌握的特性。它的核心作用是：for...of 用于遍历可迭代对象的值，比传统索引循环更适合数组、字符串、Set 和 Map。",
      "典型使用场景：将索引循环改写为 for...of。",
      "解决的旧写法问题：传统索引循环会暴露下标和 length 细节，for...in 遍历数组容易拿到属性名而不是值。",
      "适合使用：只关心可迭代对象的值，例如数组、字符串、Set、Map 或自定义迭代器。",
      "继续用传统写法：需要精确控制下标、反向遍历、跳步，或要同时改写数组元素时，传统 for 循环更合适。"
    ],
    exercise: "将索引循环改写为 for...of。",
    starterCode: "const items = ['a', 'b', 'c'];\nfor (let i = 0; i < items.length; i += 1) {\n  console.log(items[i]);\n}",
    errorCode: "for (let i = 0; i < items.length; i += 1) {\n  console.log(items[i]);\n}",
    correctCode: "const items = ['a', 'b', 'c'];\nfor (const item of items) {\n  console.log(item);\n}",
    practice: {
      prompt: "独立完成：将索引循环改写为 for...of。",
      starter: "// 使用 for...of 完成本课练习。\n// 目标：将索引循环改写为 for...of。\n\n",
      answer: "const items = ['a', 'b', 'c'];\nfor (const item of items) {\n  console.log(item);\n}",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 for...of 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 for...of 的旧写法或误用",
      broken: "const items = ['a', 'b', 'c'];\nfor (let i = 0; i < items.length; i += 1) {\n  console.log(items[i]);\n}",
      fixed: "const items = ['a', 'b', 'c'];\nfor (const item of items) {\n  console.log(item);\n}",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 for...of 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 for...of 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES6",
    title: "Generators",
    explanation: [
      "Generators 是 ES6 中值得掌握的特性。它的核心作用是：Generator 函数可以暂停和继续执行，使用 yield 逐步产出值，是迭代器和异步流程控制的重要基础。",
      "典型使用场景：创建一个 generator，依次产出 1 和 2。",
      "解决的旧写法问题：一次性返回完整数组会提前计算所有值，也不方便表达“按需产生、可暂停继续”的序列。",
      "适合使用：需要惰性生成数据、编写自定义迭代流程，或把复杂遍历拆成逐步 yield。",
      "继续用传统写法：数据量很小且已经完整存在时，直接数组或普通函数更容易理解。"
    ],
    exercise: "创建一个 generator，依次产出 1 和 2。",
    starterCode: "function createNumbers() {\n  return [1, 2];\n}\nconst numbers = createNumbers();\nconsole.log(numbers[0]);\nconsole.log(numbers[1]);",
    errorCode: "function createNumbers() {\n  return [1, 2];\n}",
    correctCode: "function* createNumbers() {\n  yield 1;\n  yield 2;\n}\nconst numbers = createNumbers();\nconsole.log(numbers.next().value);\nconsole.log(numbers.next().value);",
    practice: {
      prompt: "独立完成：创建一个 generator，依次产出 1 和 2。",
      starter: "// 使用 Generators 完成本课练习。\n// 目标：创建一个 generator，依次产出 1 和 2。\n\n",
      answer: "function* createNumbers() {\n  yield 1;\n  yield 2;\n}\nconst numbers = createNumbers();\nconsole.log(numbers.next().value);\nconsole.log(numbers.next().value);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Generators 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Generators 的旧写法或误用",
      broken: "function createNumbers() {\n  return [1, 2];\n}\nconst numbers = createNumbers();\nconsole.log(numbers[0]);\nconsole.log(numbers[1]);",
      fixed: "function* createNumbers() {\n  yield 1;\n  yield 2;\n}\nconst numbers = createNumbers();\nconsole.log(numbers.next().value);\nconsole.log(numbers.next().value);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Generators 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Generators 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES6",
    title: "自定义迭代器",
    explanation: [
      "自定义迭代器 是 ES6 中值得掌握的特性。它的核心作用是：通过实现 Symbol.iterator，对象就能接入 for...of、展开语法等统一的迭代协议。",
      "典型使用场景：让 range 对象可以被 for...of 遍历。",
      "解决的旧写法问题：普通对象默认不能直接用于 for...of、展开语法等统一迭代写法，只能写专门的访问方法。",
      "适合使用：对象本身代表一个序列或集合，希望它能自然接入 for...of、... 和 Array.from。",
      "继续用传统写法：对象只是普通配置或记录，没有稳定遍历语义时，显式方法或 Object.entries 更清楚。"
    ],
    exercise: "让 range 对象可以被 for...of 遍历。",
    starterCode: "const range = { from: 1, to: 3 };\nfor (let value = range.from; value <= range.to; value += 1) {\n  console.log(value);\n}",
    errorCode: "const range = { from: 1, to: 3 };",
    correctCode: "const range = {\n  from: 1,\n  to: 3,\n  *[Symbol.iterator]() {\n    for (let value = this.from; value <= this.to; value += 1) {\n      yield value;\n    }\n  }\n};\nfor (const value of range) {\n  console.log(value);\n}",
    practice: {
      prompt: "独立完成：让 range 对象可以被 for...of 遍历。",
      starter: "// 使用 自定义迭代器 完成本课练习。\n// 目标：让 range 对象可以被 for...of 遍历。\n\n",
      answer: "const range = {\n  from: 1,\n  to: 3,\n  *[Symbol.iterator]() {\n    for (let value = this.from; value <= this.to; value += 1) {\n      yield value;\n    }\n  }\n};\nfor (const value of range) {\n  console.log(value);\n}",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 自定义迭代器 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 自定义迭代器 的旧写法或误用",
      broken: "const range = { from: 1, to: 3 };\nfor (let value = range.from; value <= range.to; value += 1) {\n  console.log(value);\n}",
      fixed: "const range = {\n  from: 1,\n  to: 3,\n  *[Symbol.iterator]() {\n    for (let value = this.from; value <= this.to; value += 1) {\n      yield value;\n    }\n  }\n};\nfor (const value of range) {\n  console.log(value);\n}",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 自定义迭代器 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 自定义迭代器 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES6",
    title: "Array.from / Array.of",
    explanation: [
      "Array.from / Array.of 是 ES6 中值得掌握的特性。它的核心作用是：Array.from 可以把类数组和可迭代对象转为数组，Array.of 则用参数创建数组，避免 Array 构造器的歧义。",
      "Array.from 常用于把字符串、Set、NodeList、arguments 等类数组或可迭代对象转成真正数组，也可以在转换时传入 map 函数。",
      "Array.of 用来按传入参数创建数组，尤其能避免 Array(3) 表示创建长度为 3 的空槽数组，而不是 [3] 的歧义。",
      "解决的旧写法问题：类数组转数组常要借用 slice，Array 构造器在单个数字参数时又容易产生长度歧义。",
      "适合使用：需要把类数组、可迭代对象转成真正数组，或想明确用参数创建数组。",
      "继续用传统写法：已经是数组时不需要再转；简单字面量直接写 [value] 通常更清楚。"
    ],
    exercise: "使用 Array.from 将字符串转成字符数组，并使用 Array.of 创建只包含数字 3 的数组。",
    starterCode: "const chars = 'ES6'.split('');\nconst numbers = Array(3);\nconsole.log(chars);\nconsole.log(numbers);",
    errorCode: "const chars = 'ES6'.split('');\nconst numbers = Array(3);",
    correctCode: "const chars = Array.from('ES6');\nconst numbers = Array.of(3);\nconsole.log(chars);\nconsole.log(numbers);",
    practice: {
      prompt: "把可迭代字符串转成字符数组，并创建一个只包含 3 的数组。",
      starter: "const chars = \nconst single = \n\nconsole.log(chars);\nconsole.log(single);",
      answer: "const chars = Array.from('ES6');\nconst single = Array.of(3);\n\nconsole.log(chars);\nconsole.log(single);",
      explanation: [
        "Array.from('ES6') 会把字符串这个可迭代对象转成 ['E', 'S', '6']。",
        "Array.of(3) 会创建 [3]，不会像 Array(3) 那样创建长度为 3 的空槽数组。"
      ]
    },
    debugCase: {
      title: "修复 Array 构造器的单参数歧义",
      broken: "const chars = 'ES6'.split('');\nconst values = Array(3);\n\nconsole.log(chars);\nconsole.log(values);",
      fixed: "const chars = Array.from('ES6');\nconst values = Array.of(3);\n\nconsole.log(chars);\nconsole.log(values);",
      reason: [
        "split('') 可以处理简单字符串，但 Array.from 更通用，也能处理类数组和其他可迭代对象。",
        "Array(3) 的含义是创建长度为 3 的空数组；如果目标是得到 [3]，应该使用 Array.of(3)。"
      ]
    },
    review: [
      "Array.from 用于把类数组或可迭代对象转成真正数组。",
      "Array.from 可以接收第二个参数，在转换时顺便映射每一项。",
      "Array.of 用于按参数创建数组，避免 Array(number) 的长度歧义。",
      "简单数组字面量仍然可以直接写 [value]，不需要为了新语法而强行使用 Array.of。"
    ]
  },
  {
    version: "ES6",
    title: "Object.assign",
    explanation: [
      "Object.assign 是 ES6 中值得掌握的特性。它的核心作用是：Object.assign 用于把多个对象的可枚举属性复制到目标对象，是 ES6 中常见的浅拷贝和合并工具。",
      "典型使用场景：使用 Object.assign 合并 defaults 和 options。",
      "解决的旧写法问题：手动逐个复制属性样板多，合并默认配置和用户配置时容易漏字段。",
      "适合使用：需要浅合并对象、补默认配置，且只关心可枚举自有属性。",
      "继续用传统写法：需要深拷贝、保留 getter/setter 描述符，或合并逻辑复杂时，不要只靠 Object.assign。"
    ],
    exercise: "使用 Object.assign 合并 defaults 和 options。",
    starterCode: "const defaults = { theme: 'light', size: 'md' };\nconst options = { size: 'lg' };\nconst config = { theme: defaults.theme, size: options.size };\nconsole.log(config);",
    errorCode: "const config = { theme: defaults.theme, size: options.size };",
    correctCode: "const defaults = { theme: 'light', size: 'md' };\nconst options = { size: 'lg' };\nconst config = Object.assign({}, defaults, options);\nconsole.log(config);",
    practice: {
      prompt: "独立完成：使用 Object.assign 合并 defaults 和 options。",
      starter: "// 使用 Object.assign 完成本课练习。\n// 目标：使用 Object.assign 合并 defaults 和 options。\n\n",
      answer: "const defaults = { theme: 'light', size: 'md' };\nconst options = { size: 'lg' };\nconst config = Object.assign({}, defaults, options);\nconsole.log(config);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Object.assign 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Object.assign 的旧写法或误用",
      broken: "const defaults = { theme: 'light', size: 'md' };\nconst options = { size: 'lg' };\nconst config = { theme: defaults.theme, size: options.size };\nconsole.log(config);",
      fixed: "const defaults = { theme: 'light', size: 'md' };\nconst options = { size: 'lg' };\nconst config = Object.assign({}, defaults, options);\nconsole.log(config);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Object.assign 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Object.assign 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES6",
    title: "字符串新增方法",
    explanation: [
      "字符串新增方法 是 ES6 中值得掌握的特性。它的核心作用是：ES6 为字符串增加 startsWith、endsWith、includes 等方法，让常见匹配判断更语义化。",
      "典型使用场景：使用 startsWith 判断字符串是否以 ES 开头。",
      "解决的旧写法问题：用 indexOf 判断前缀、后缀或包含关系时，可读性差，还容易把 0 当成假值误判。",
      "适合使用：表达 startsWith、endsWith、includes 这类明确字符串判断。",
      "继续用传统写法：需要正则匹配、大小写归一化或复杂规则时，显式处理或 RegExp 更合适。"
    ],
    exercise: "使用 startsWith 判断字符串是否以 ES 开头。",
    starterCode: "const text = 'ES6 features';\nconst result = text.indexOf('ES') === 0;\nconsole.log(result);",
    errorCode: "text.indexOf('ES') === 0;",
    correctCode: "const text = 'ES6 features';\nconst result = text.startsWith('ES');\nconsole.log(result);",
    practice: {
      prompt: "独立完成：使用 startsWith 判断字符串是否以 ES 开头。",
      starter: "// 使用 字符串新增方法 完成本课练习。\n// 目标：使用 startsWith 判断字符串是否以 ES 开头。\n\n",
      answer: "const text = 'ES6 features';\nconst result = text.startsWith('ES');\nconsole.log(result);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 字符串新增方法 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 字符串新增方法 的旧写法或误用",
      broken: "const text = 'ES6 features';\nconst result = text.indexOf('ES') === 0;\nconsole.log(result);",
      fixed: "const text = 'ES6 features';\nconst result = text.startsWith('ES');\nconsole.log(result);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 字符串新增方法 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 字符串新增方法 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES6",
    title: "Number 新增方法",
    explanation: [
      "Number 新增方法 是 ES6 中值得掌握的特性。它的核心作用是：ES6 增加了 Number.isNaN、Number.isFinite、Number.isInteger 等更严格的数字判断方法。",
      "典型使用场景：使用 Number.isInteger 判断 value 是否为整数。",
      "解决的旧写法问题：全局 isNaN/isFinite 会先做类型转换，字符串等值可能被误判成数字场景。",
      "适合使用：需要严格判断真正的 number 值，例如 Number.isNaN、Number.isFinite、Number.isInteger。",
      "继续用传统写法：如果本来就想允许字符串数字输入，应先显式转换，再做数字判断。"
    ],
    exercise: "使用 Number.isInteger 判断 value 是否为整数。",
    starterCode: "const value = 42;\nconst result = typeof value === 'number' && isFinite(value) && Math.floor(value) === value;\nconsole.log(result);",
    errorCode: "Math.floor(value) === value;",
    correctCode: "const value = 42;\nconst result = Number.isInteger(value);\nconsole.log(result);",
    practice: {
      prompt: "独立完成：使用 Number.isInteger 判断 value 是否为整数。",
      starter: "// 使用 Number 新增方法 完成本课练习。\n// 目标：使用 Number.isInteger 判断 value 是否为整数。\n\n",
      answer: "const value = 42;\nconst result = Number.isInteger(value);\nconsole.log(result);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Number 新增方法 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Number 新增方法 的旧写法或误用",
      broken: "const value = 42;\nconst result = typeof value === 'number' && isFinite(value) && Math.floor(value) === value;\nconsole.log(result);",
      fixed: "const value = 42;\nconst result = Number.isInteger(value);\nconsole.log(result);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Number 新增方法 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Number 新增方法 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES6",
    title: "ES Modules",
    explanation: [
      "ES Modules 是 ES6 中值得掌握的特性。它的核心作用是：ES Modules 提供标准化的模块系统，用 import 和 export 管理文件之间的依赖关系。",
      "典型使用场景：将全局变量式代码改成模块导出和导入的写法。",
      "解决的旧写法问题：全局变量和脚本拼接会造成依赖顺序隐式、命名冲突和难以静态分析的问题。",
      "适合使用：需要清晰声明文件依赖、导出公共 API，并让打包工具做静态分析和拆包。",
      "继续用传统写法：非常小的临时脚本或不经过模块加载的内联代码，用普通 script 可能更直接。"
    ],
    exercise: "将全局变量式代码改成模块导出和导入的写法。",
    starterCode: "// math.js\nconst add = (a, b) => a + b;\n\n// app.js\nconsole.log(add(1, 2));",
    errorCode: "const add = (a, b) => a + b;",
    correctCode: "// math.js\nexport const add = (a, b) => a + b;\n\n// app.js\nimport { add } from './math.js';\nconsole.log(add(1, 2));",
    practice: {
      prompt: "独立完成：将全局变量式代码改成模块导出和导入的写法。",
      starter: "// 使用 ES Modules 完成本课练习。\n// 目标：将全局变量式代码改成模块导出和导入的写法。\n\n",
      answer: "// math.js\nexport const add = (a, b) => a + b;\n\n// app.js\nimport { add } from './math.js';\nconsole.log(add(1, 2));",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 ES Modules 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 ES Modules 的旧写法或误用",
      broken: "// math.js\nconst add = (a, b) => a + b;\n\n// app.js\nconsole.log(add(1, 2));",
      fixed: "// math.js\nexport const add = (a, b) => a + b;\n\n// app.js\nimport { add } from './math.js';\nconsole.log(add(1, 2));",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 ES Modules 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 ES Modules 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES6",
    title: "WeakMap / WeakSet",
    explanation: [
      "WeakMap / WeakSet 是 ES6 中值得掌握的特性。它的核心作用是：WeakMap 和 WeakSet 使用弱引用保存对象，适合存储私有数据或与对象生命周期绑定的元信息。",
      "典型使用场景：使用 WeakMap 为对象保存私有积分。",
      "解决的旧写法问题：Map 持有对象 key 的强引用，缓存和私有元数据容易阻止对象被垃圾回收。",
      "适合使用：需要把元信息绑定到对象生命周期上，例如 DOM 节点状态、实例私有数据、对象缓存。",
      "继续用传统写法：key 不是对象、需要遍历集合内容，或需要知道 size 时，应使用 Map/Set。"
    ],
    exercise: "使用 WeakMap 为对象保存私有积分。",
    starterCode: "const scores = new Map();\nconst user = { name: 'Alice' };\nscores.set(user, 10);\nconsole.log(scores.get(user));",
    errorCode: "const scores = new Map();",
    correctCode: "const scores = new WeakMap();\nconst user = { name: 'Alice' };\nscores.set(user, 10);\nconsole.log(scores.get(user));",
    practice: {
      prompt: "独立完成：使用 WeakMap 为对象保存私有积分。",
      starter: "// 使用 WeakMap / WeakSet 完成本课练习。\n// 目标：使用 WeakMap 为对象保存私有积分。\n\n",
      answer: "const scores = new WeakMap();\nconst user = { name: 'Alice' };\nscores.set(user, 10);\nconsole.log(scores.get(user));",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 WeakMap / WeakSet 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 WeakMap / WeakSet 的旧写法或误用",
      broken: "const scores = new Map();\nconst user = { name: 'Alice' };\nscores.set(user, 10);\nconsole.log(scores.get(user));",
      fixed: "const scores = new WeakMap();\nconst user = { name: 'Alice' };\nscores.set(user, 10);\nconsole.log(scores.get(user));",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 WeakMap / WeakSet 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 WeakMap / WeakSet 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES6",
    title: "Array.find / findIndex",
    explanation: [
      "Array.find / findIndex 是 ES6 中值得掌握的特性。它的核心作用是：find 和 findIndex 用于按条件查找数组元素或位置，比手写循环更直接。",
      "典型使用场景：使用 find 找到第一个年龄大于 18 的用户。",
      "解决的旧写法问题：手写循环找第一项会混入临时变量和 break，意图不如“查找第一个匹配项”清楚。",
      "适合使用：需要按条件找到第一个元素或它的位置。",
      "继续用传统写法：需要收集所有匹配项用 filter；需要复杂提前返回和副作用控制时，普通循环可能更清楚。"
    ],
    exercise: "使用 find 找到第一个年龄大于 18 的用户。",
    starterCode: "const users = [{ age: 16 }, { age: 20 }];\nlet adult;\nfor (const user of users) {\n  if (user.age > 18) adult = user;\n}\nconsole.log(adult);",
    errorCode: "for (const user of users) {\n  if (user.age > 18) adult = user;\n}",
    correctCode: "const users = [{ age: 16 }, { age: 20 }];\nconst adult = users.find(user => user.age > 18);\nconsole.log(adult);",
    practice: {
      prompt: "独立完成：使用 find 找到第一个年龄大于 18 的用户。",
      starter: "// 使用 Array.find / findIndex 完成本课练习。\n// 目标：使用 find 找到第一个年龄大于 18 的用户。\n\n",
      answer: "const users = [{ age: 16 }, { age: 20 }];\nconst adult = users.find(user => user.age > 18);\nconsole.log(adult);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Array.find / findIndex 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Array.find / findIndex 的旧写法或误用",
      broken: "const users = [{ age: 16 }, { age: 20 }];\nlet adult;\nfor (const user of users) {\n  if (user.age > 18) adult = user;\n}\nconsole.log(adult);",
      fixed: "const users = [{ age: 16 }, { age: 20 }];\nconst adult = users.find(user => user.age > 18);\nconsole.log(adult);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Array.find / findIndex 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Array.find / findIndex 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES6",
    title: "Proxy / Reflect",
    explanation: [
      "Proxy / Reflect 是 ES6 中值得掌握的特性。它的核心作用是：Proxy 可以拦截对象读取、赋值等操作，Reflect 提供与这些底层操作对应的标准方法。",
      "典型使用场景：用 Proxy 拦截 user.name 的读取，并在控制台输出提示。",
      "解决的旧写法问题：用 getter/setter 或手写包装对象只能拦截有限操作，难以统一代理读取、赋值、删除等底层行为。",
      "适合使用：需要实现响应式数据、校验层、访问日志、虚拟对象或元编程封装。",
      "继续用传统写法：只是普通数据访问时不要引入 Proxy；它会增加调试成本，也可能影响性能和可预测性。"
    ],
    exercise: "用 Proxy 拦截 user.name 的读取，并在控制台输出提示。",
    starterCode: "const user = { name: 'Alice' };\nconsole.log(user.name);",
    errorCode: "console.log(user.name);",
    correctCode: "const user = { name: 'Alice' };\nconst proxy = new Proxy(user, {\n  get(target, key) {\n    console.log('reading ' + String(key));\n    return Reflect.get(target, key);\n  }\n});\nconsole.log(proxy.name);",
    practice: {
      prompt: "独立完成：用 Proxy 拦截 user.name 的读取，并在控制台输出提示。",
      starter: "// 使用 Proxy / Reflect 完成本课练习。\n// 目标：用 Proxy 拦截 user.name 的读取，并在控制台输出提示。\n\n",
      answer: "const user = { name: 'Alice' };\nconst proxy = new Proxy(user, {\n  get(target, key) {\n    console.log('reading ' + String(key));\n    return Reflect.get(target, key);\n  }\n});\nconsole.log(proxy.name);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Proxy / Reflect 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Proxy / Reflect 的旧写法或误用",
      broken: "const user = { name: 'Alice' };\nconsole.log(user.name);",
      fixed: "const user = { name: 'Alice' };\nconst proxy = new Proxy(user, {\n  get(target, key) {\n    console.log('reading ' + String(key));\n    return Reflect.get(target, key);\n  }\n});\nconsole.log(proxy.name);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Proxy / Reflect 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Proxy / Reflect 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  }
];
