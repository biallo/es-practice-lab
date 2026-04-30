const lessonCatalog = [
  {
    "version": "ES6",
    "title": "let / const 与块级作用域",
    "explanation": [
      "var 是函数作用域，写在 if、for 等块里仍可能泄漏到块外；let 和 const 是块级作用域，只在最近的一对花括号内有效。",
      "优先使用 const 表示不会重新赋值的绑定，只有确实需要重新赋值时才使用 let。这样读代码时能立刻知道变量是否会变化。",
      "块级作用域可以减少变量泄漏、重复声明和变量提升带来的意外行为，尤其适合循环、条件分支和临时变量。"
    ],
    "exercise": "把下面代码中的 var 改成 let 或 const，并让只属于 if 代码块的 message 不泄漏到块外。",
    "starterCode": "var score = 90;\nif (score >= 60) {\n  var message = '及格';\n  console.log(message);\n}\nconsole.log(message);",
    "errorCode": "var score = 90;\nif (score >= 60) {\n  var message = '及格';\n  console.log(message);\n}\nconsole.log(message);",
    "correctCode": "const passingScore = 60;\nlet score = 58;\nscore += 5;\n\nif (score >= passingScore) {\n  const message = '及格';\n  console.log(message);\n}\n\nconsole.log(score);",
    "exampleCode": "const passingScore = 60;\nlet score = 58;\nscore += 5;\n\nif (score >= passingScore) {\n  const message = '及格';\n  console.log(message);\n}\n\nconsole.log(score);",
    "practice": {
      "prompt": "把 var 改成合适的 let / const。score 不会重新赋值，message 只应该在 if 块内使用。",
      "starter": "var score = 90;\nif (score >= 60) {\n  var message = '及格';\n  console.log(message);\n}\nconsole.log(message);",
      "answer": "const score = 90;\nif (score >= 60) {\n  const message = '及格';\n  console.log(message);\n}",
      "explanation": [
        "score 和 message 都没有重新赋值，因此使用 const。message 只在 if 块中使用，删除块外访问后，它就不会依赖 var 的函数作用域泄漏。"
      ]
    },
    "debugCase": {
      "title": "修复块级作用域泄漏",
      "broken": "var total = 0;\nfor (var i = 0; i < 3; i += 1) {\n  var label = '第 ' + i + ' 次';\n  total += i;\n}\nconsole.log(label);\nconsole.log(total);",
      "fixed": "let total = 0;\nfor (let i = 0; i < 3; i += 1) {\n  const label = '第 ' + i + ' 次';\n  console.log(label);\n  total += i;\n}\nconsole.log(total);",
      "reason": [
        "i 和 label 都只应该属于 for 循环块，因此分别使用 let 和 const。total 会累加变化，所以使用 let。修正后不再在循环外读取 label。"
      ]
    },
    "review": [
      "var 是函数作用域，let / const 是块级作用域。",
      "默认优先使用 const，只有需要重新赋值时使用 let。",
      "不要依赖 var 在 if / for 块外还能访问的泄漏行为。",
      "块级作用域能减少重复声明、变量提升和意外覆盖。"
    ]
  },
  {
    "version": "ES6",
    "title": "默认参数",
    "explanation": [
      "默认参数允许在函数参数列表中直接声明兜底值，调用方没有传参或传入 undefined 时会使用默认值。",
      "它适合配置项、可选参数和函数入口的安全兜底，比在函数体里反复写 if 判断更清楚。",
      "默认参数只在参数值为 undefined 时生效；如果传入 null、空字符串或 0，它们会按真实传入值处理。"
    ],
    "exercise": "给 greet 的 name 参数添加默认值 Guest。",
    "starterCode": "function greet(name) {\n  name = name || 'Guest';\n  console.log('Hello, ' + name);\n}\ngreet();",
    "errorCode": "name = name || 'Guest';",
    "correctCode": "function greet(name = 'Guest') {\n  console.log('Hello, ' + name);\n}\ngreet();",
    "practice": {
      "prompt": "为 formatName 添加默认参数，让没有传入 name 时输出 Guest。",
      "starter": "function formatName(name) {\n  return 'Hello, ' + name;\n}\n\nconsole.log(formatName());",
      "answer": "function formatName(name = 'Guest') {\n  return 'Hello, ' + name;\n}\n\nconsole.log(formatName());",
      "explanation": [
        "默认参数写在参数列表里，调用方没有传入 name 或传入 undefined 时会使用 Guest。",
        "这种写法比在函数体里先判断再赋值更直接，也能把函数入口的默认规则放在最显眼的位置。"
      ]
    },
    "debugCase": {
      "title": "修复 || 兜底导致的有效值丢失",
      "broken": "function createPage(page) {\n  page = page || 1;\n  return 'page=' + page;\n}\n\nconsole.log(createPage(0));",
      "fixed": "function createPage(page = 1) {\n  return 'page=' + page;\n}\n\nconsole.log(createPage(0));",
      "reason": [
        "|| 会把 0、空字符串、false 这类假值都替换掉，适合性不如默认参数精确。",
        "默认参数只在参数值为 undefined 时生效，所以 createPage(0) 会保留用户明确传入的 0。"
      ]
    },
    "review": [
      "默认参数只会在参数值为 undefined 时启用。",
      "null、0、空字符串、false 都会作为真实传入值保留下来。",
      "能解释默认参数和 value || fallback 的区别。",
      "能把入口兜底逻辑放进参数列表，而不是散落在函数体里。"
    ]
  },
  {
    "version": "ES6",
    "title": "Arrow Functions",
    "explanation": [
      "箭头函数提供更短的函数表达式写法，适合回调、数组方法和只返回表达式的小函数。",
      "箭头函数没有自己的 this、arguments、super 或 new.target，this 会沿用定义位置外层作用域。",
      "它不适合作为需要动态 this 的对象方法或构造函数；遇到 this 绑定需求时要先判断语义。"
    ],
    "exercise": "请将函数 function add(a, b) { return a + b; } 改写为箭头函数。",
    "starterCode": "function add(a, b) {\n  return a + b;\n}",
    "errorCode": "function add(a, b) {\n  return a + b;\n}",
    "correctCode": "const add = (a, b) => a + b;",
    "practice": {
      "prompt": "使用箭头函数写一个 double 方法，接收一个数字并返回它的 2 倍。",
      "starter": "const double = \n\nconsole.log(double(4));",
      "answer": "const double = (value) => value * 2;\n\nconsole.log(double(4));",
      "explanation": [
        "这个练习适合用表达式体箭头函数：参数 value 进入函数后直接返回 value * 2，不需要额外的 return 代码块。"
      ]
    },
    "debugCase": {
      "title": "修复箭头函数中的 this 误用",
      "broken": "const user = {\n  name: 'Alice',\n  sayHi: () => {\n    console.log(this.name);\n  }\n};\n\nuser.sayHi();",
      "fixed": "const user = {\n  name: 'Alice',\n  sayHi() {\n    console.log(this.name);\n  }\n};\n\nuser.sayHi();",
      "reason": [
        "箭头函数没有自己的 this，作为对象方法时不会自动指向 user。这里应该使用方法简写，让 this 在调用 user.sayHi() 时指向 user。"
      ]
    },
    "review": [
      "箭头函数适合短小回调和表达式返回。",
      "箭头函数没有自己的 this、arguments、super 或 new.target。",
      "对象方法、构造函数等需要动态 this 的场景，不应盲目使用箭头函数。",
      "能区分表达式体写法和带 return 的代码块写法。"
    ]
  },
  {
    "version": "ES6",
    "title": "Template Literals",
    "explanation": [
      "模板字符串用反引号定义，可以通过 ${} 嵌入表达式，也天然支持多行文本。",
      "它适合拼接消息、生成简单 HTML 片段、格式化日志和组合包含变量的字符串。",
      "模板字符串提升的是可读性，不会自动防注入；把用户输入拼进 HTML 或 SQL 时仍然需要转义。"
    ],
    "exercise": "使用模板字符串创建一条问候语：Hello, my name is Alice and I am 30 years old.",
    "starterCode": "const name = 'Alice';\nconst age = 30;\nconst message = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';",
    "errorCode": "const message = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';",
    "correctCode": "const message = `Hello, my name is ${name} and I am ${age} years old.`;",
    "practice": {
      "prompt": "使用模板字符串输出商品摘要：Book costs 30 dollars.",
      "starter": "const product = 'Book';\nconst price = 30;\nconst summary = \n\nconsole.log(summary);",
      "answer": "const product = 'Book';\nconst price = 30;\nconst summary = `${product} costs ${price} dollars.`;\n\nconsole.log(summary);",
      "explanation": [
        "模板字符串用反引号包裹，通过 ${product} 和 ${price} 直接嵌入表达式，避免多个字符串片段和加号混在一起。"
      ]
    },
    "debugCase": {
      "title": "修复模板字符串插值错误",
      "broken": "const name = 'Alice';\nconst city = 'Shanghai';\nconst message = 'Hello, ${name} from ${city}';\n\nconsole.log(message);",
      "fixed": "const name = 'Alice';\nconst city = 'Shanghai';\nconst message = `Hello, ${name} from ${city}`;\n\nconsole.log(message);",
      "reason": [
        "只有反引号定义的模板字符串才会解析 ${} 插值。普通单引号字符串会把 ${name} 原样当作文本。"
      ]
    },
    "review": [
      "模板字符串必须使用反引号。",
      "${} 中可以放变量，也可以放表达式。",
      "模板字符串适合减少字符串拼接中的加号和空格错误。",
      "模板字符串不会自动转义用户输入，输出到 HTML 等场景仍要注意安全。"
    ]
  },
  {
    "version": "ES6",
    "title": "Destructuring",
    "explanation": [
      "解构赋值可以从数组或对象中按结构取值，并直接绑定到局部变量。",
      "它适合读取配置对象、函数参数、接口返回值和数组中的固定位置数据。",
      "深层解构虽然方便，但过度嵌套会降低可读性；复杂结构可以分几步取值。"
    ],
    "exercise": "从对象 person 中解构出 name 和 age 两个变量。",
    "starterCode": "const person = { name: 'Bob', age: 25 };\nconst name = person.name;\nconst age = person.age;",
    "errorCode": "const name = person.name;\nconst age = person.age;",
    "correctCode": "const { name, age } = person;",
    "practice": {
      "prompt": "独立完成：从对象 person 中解构出 name 和 age 两个变量。",
      "starter": "// 使用 Destructuring 完成本课练习。\n// 目标：从对象 person 中解构出 name 和 age 两个变量。\n\n",
      "answer": "const { name, age } = person;",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Destructuring 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Destructuring 的旧写法或误用",
      "broken": "const person = { name: 'Bob', age: 25 };\nconst name = person.name;\nconst age = person.age;",
      "fixed": "const { name, age } = person;",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Destructuring 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Destructuring 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "Spread / Rest",
    "explanation": [
      "展开语法把数组、对象或可迭代值展开到新的位置；剩余语法把多余的参数或属性收集起来。",
      "它常用于复制数组/对象、合并数据、函数可变参数和从对象中排除部分字段。",
      "对象和数组展开都是浅拷贝，嵌套对象仍然共享引用；处理深层数据时要额外注意。"
    ],
    "exercise": "使用展开语法合并两个数组 const a = [1, 2]; const b = [3, 4];",
    "starterCode": "const a = [1, 2];\nconst b = [3, 4];\nconst all = a.concat(b);",
    "errorCode": "const all = a.concat(b);",
    "correctCode": "const all = [...a, ...b];",
    "practice": {
      "prompt": "独立完成：使用展开语法合并两个数组 const a = [1, 2]; const b = [3, 4];",
      "starter": "// 使用 Spread / Rest 完成本课练习。\n// 目标：使用展开语法合并两个数组 const a = [1, 2]; const b = [3, 4];\n\n",
      "answer": "const all = [...a, ...b];",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Spread / Rest 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Spread / Rest 的旧写法或误用",
      "broken": "const a = [1, 2];\nconst b = [3, 4];\nconst all = a.concat(b);",
      "fixed": "const all = [...a, ...b];",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Spread / Rest 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Spread / Rest 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "增强对象字面量",
    "explanation": [
      "增强对象字面量让对象创建更简洁，包括属性简写、方法简写和计算属性名等能力。",
      "当变量名和属性名相同时可以直接写变量名，方法也可以省略 function 关键字。",
      "这种写法常见于配置对象、模块导出、返回结构化数据等场景，能减少重复代码。"
    ],
    "exercise": "将重复的属性名和值，以及普通函数方法，改成对象字面量简写。",
    "starterCode": "const name = 'Alice';\nconst age = 30;\nconst user = {\n  name: name,\n  age: age,\n  sayHi: function() {\n    console.log(this.name);\n  }\n};",
    "errorCode": "name: name,\nage: age,\nsayHi: function() {\n  console.log(this.name);\n}",
    "correctCode": "const name = 'Alice';\nconst age = 30;\nconst user = {\n  name,\n  age,\n  sayHi() {\n    console.log(this.name);\n  }\n};",
    "practice": {
      "prompt": "独立完成：将重复的属性名和值，以及普通函数方法，改成对象字面量简写。",
      "starter": "// 使用 增强对象字面量 完成本课练习。\n// 目标：将重复的属性名和值，以及普通函数方法，改成对象字面量简写。\n\n",
      "answer": "const name = 'Alice';\nconst age = 30;\nconst user = {\n  name,\n  age,\n  sayHi() {\n    console.log(this.name);\n  }\n};",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 增强对象字面量 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 增强对象字面量 的旧写法或误用",
      "broken": "const name = 'Alice';\nconst age = 30;\nconst user = {\n  name: name,\n  age: age,\n  sayHi: function() {\n    console.log(this.name);\n  }\n};",
      "fixed": "const name = 'Alice';\nconst age = 30;\nconst user = {\n  name,\n  age,\n  sayHi() {\n    console.log(this.name);\n  }\n};",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 增强对象字面量 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 增强对象字面量 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "计算属性名",
    "explanation": [
      "计算属性名允许在对象字面量中用表达式动态生成属性名。",
      "它适合根据变量、常量、枚举值或前缀规则构建映射对象和状态表。",
      "动态 key 会增加阅读成本，命名规则要尽量清晰，并避免和已有属性意外冲突。"
    ],
    "exercise": "使用计算属性名创建 role_admin 属性。",
    "starterCode": "const role = 'admin';\nconst permissions = {};\npermissions['role_' + role] = true;\nconsole.log(permissions);",
    "errorCode": "permissions['role_' + role] = true;",
    "correctCode": "const role = 'admin';\nconst permissions = {\n  ['role_' + role]: true\n};\nconsole.log(permissions);",
    "practice": {
      "prompt": "独立完成：使用计算属性名创建 role_admin 属性。",
      "starter": "// 使用 计算属性名 完成本课练习。\n// 目标：使用计算属性名创建 role_admin 属性。\n\n",
      "answer": "const role = 'admin';\nconst permissions = {\n  ['role_' + role]: true\n};\nconsole.log(permissions);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 计算属性名 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 计算属性名 的旧写法或误用",
      "broken": "const role = 'admin';\nconst permissions = {};\npermissions['role_' + role] = true;\nconsole.log(permissions);",
      "fixed": "const role = 'admin';\nconst permissions = {\n  ['role_' + role]: true\n};\nconsole.log(permissions);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 计算属性名 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 计算属性名 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "Classes",
    "explanation": [
      "class 是基于原型继承的语法糖，让构造函数、实例方法、静态方法和继承关系更直观。",
      "它适合表达有稳定行为和内部状态的对象模型，比如组件、服务、领域对象。",
      "class 方法默认不可枚举，类声明不会像 function 一样可在声明前安全调用；使用时仍要理解原型机制。"
    ],
    "exercise": "将构造函数 Person 改写为 class。",
    "starterCode": "function Person(name) {\n  this.name = name;\n}\nPerson.prototype.sayHi = function() {\n  console.log(this.name);\n};\nconst p = new Person('Alice');\np.sayHi();",
    "errorCode": "function Person(name) {\n  this.name = name;\n}\nPerson.prototype.sayHi = function() {\n  console.log(this.name);\n};",
    "correctCode": "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  sayHi() {\n    console.log(this.name);\n  }\n}\nconst p = new Person('Alice');\np.sayHi();",
    "practice": {
      "prompt": "独立完成：将构造函数 Person 改写为 class。",
      "starter": "// 使用 Classes 完成本课练习。\n// 目标：将构造函数 Person 改写为 class。\n\n",
      "answer": "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  sayHi() {\n    console.log(this.name);\n  }\n}\nconst p = new Person('Alice');\np.sayHi();",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Classes 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Classes 的旧写法或误用",
      "broken": "function Person(name) {\n  this.name = name;\n}\nPerson.prototype.sayHi = function() {\n  console.log(this.name);\n};\nconst p = new Person('Alice');\np.sayHi();",
      "fixed": "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  sayHi() {\n    console.log(this.name);\n  }\n}\nconst p = new Person('Alice');\np.sayHi();",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Classes 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Classes 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "Promise",
    "explanation": [
      "Promise 用一个对象表示未来才会完成的异步结果，并用 fulfilled、rejected 描述成功或失败。",
      "then、catch 和 finally 可以把异步流程串起来，避免深层回调嵌套。",
      "Promise 一旦 settled 状态就不会再改变；错误处理要放在链路末端或用 await 搭配 try/catch。"
    ],
    "exercise": "用 Promise.resolve 创建一个异步结果，并在 then 中输出。",
    "starterCode": "function loadName(callback) {\n  callback('Alice');\n}\nloadName(function(name) {\n  console.log(name);\n});",
    "errorCode": "loadName(function(name) {\n  console.log(name);\n});",
    "correctCode": "Promise.resolve('Alice').then((name) => {\n  console.log(name);\n});",
    "practice": {
      "prompt": "独立完成：用 Promise.resolve 创建一个异步结果，并在 then 中输出。",
      "starter": "// 使用 Promise 完成本课练习。\n// 目标：用 Promise.resolve 创建一个异步结果，并在 then 中输出。\n\n",
      "answer": "Promise.resolve('Alice').then((name) => {\n  console.log(name);\n});",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Promise 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Promise 的旧写法或误用",
      "broken": "function loadName(callback) {\n  callback('Alice');\n}\nloadName(function(name) {\n  console.log(name);\n});",
      "fixed": "Promise.resolve('Alice').then((name) => {\n  console.log(name);\n});",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Promise 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Promise 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "Map",
    "explanation": [
      "Map 是 ES6 中值得掌握的特性。它的核心作用是：Map 是专门存储键值对的集合，键可以是任意类型，并且提供清晰的 set、get、has API。",
      "典型使用场景：将普通对象计数表改写为 Map。",
      "解决的旧写法问题：普通对象当映射表时，key 会被转成字符串，还可能碰到原型属性和 hasOwnProperty 之类的边界。",
      "适合使用：需要任意类型作为 key、频繁 set/get/has/delete，或需要保留插入顺序的键值集合。",
      "继续用传统写法：只是固定字段的数据记录，例如 { name, age }，普通对象更直观，也更适合 JSON 序列化。"
    ],
    "exercise": "将普通对象计数表改写为 Map。",
    "starterCode": "const counts = {};\ncounts.apple = 2;\ncounts.orange = 3;\nconsole.log(counts.apple);",
    "errorCode": "const counts = {};\ncounts.apple = 2;\nconsole.log(counts.apple);",
    "correctCode": "const counts = new Map();\ncounts.set('apple', 2);\ncounts.set('orange', 3);\nconsole.log(counts.get('apple'));",
    "practice": {
      "prompt": "独立完成：将普通对象计数表改写为 Map。",
      "starter": "// 使用 Map 完成本课练习。\n// 目标：将普通对象计数表改写为 Map。\n\n",
      "answer": "const counts = new Map();\ncounts.set('apple', 2);\ncounts.set('orange', 3);\nconsole.log(counts.get('apple'));",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Map 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Map 的旧写法或误用",
      "broken": "const counts = {};\ncounts.apple = 2;\ncounts.orange = 3;\nconsole.log(counts.apple);",
      "fixed": "const counts = new Map();\ncounts.set('apple', 2);\ncounts.set('orange', 3);\nconsole.log(counts.get('apple'));",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Map 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Map 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "Set",
    "explanation": [
      "Set 是 ES6 中值得掌握的特性。它的核心作用是：Set 用来保存不重复的值，常用于数组去重、成员判断和集合运算的基础场景。",
      "典型使用场景：使用 Set 去除数组中的重复数字。",
      "解决的旧写法问题：用数组去重或判断成员时，经常要写 indexOf/includes/filter 组合，代码容易重复且语义不够直接。",
      "适合使用：需要表达“不重复集合”、做去重、成员判断，或后续要进行集合运算。",
      "继续用传统写法：需要保留重复项、依赖元素顺序和下标，或只是一次性判断很小数组时，数组写法更简单。"
    ],
    "exercise": "使用 Set 去除数组中的重复数字。",
    "starterCode": "const numbers = [1, 2, 2, 3, 3];\nconst unique = numbers.filter((item, index) => numbers.indexOf(item) === index);\nconsole.log(unique);",
    "errorCode": "numbers.filter((item, index) => numbers.indexOf(item) === index);",
    "correctCode": "const numbers = [1, 2, 2, 3, 3];\nconst unique = [...new Set(numbers)];\nconsole.log(unique);",
    "practice": {
      "prompt": "独立完成：使用 Set 去除数组中的重复数字。",
      "starter": "// 使用 Set 完成本课练习。\n// 目标：使用 Set 去除数组中的重复数字。\n\n",
      "answer": "const numbers = [1, 2, 2, 3, 3];\nconst unique = [...new Set(numbers)];\nconsole.log(unique);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Set 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Set 的旧写法或误用",
      "broken": "const numbers = [1, 2, 2, 3, 3];\nconst unique = numbers.filter((item, index) => numbers.indexOf(item) === index);\nconsole.log(unique);",
      "fixed": "const numbers = [1, 2, 2, 3, 3];\nconst unique = [...new Set(numbers)];\nconsole.log(unique);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Set 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Set 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "Symbol",
    "explanation": [
      "Symbol 是 ES6 中值得掌握的特性。它的核心作用是：Symbol 创建唯一标识，适合定义不会和普通字符串属性冲突的对象键。",
      "典型使用场景：使用 Symbol 创建唯一属性，并读取它的值。",
      "解决的旧写法问题：用普通字符串给对象加内部属性时，容易和已有业务字段重名冲突，也会被常规遍历和 JSON 序列化带出去。",
      "适合使用：需要唯一标识、避免属性名冲突，或接入 Symbol.iterator 等语言内置协议。",
      "继续用传统写法：字段本来就是业务数据、需要展示或序列化时，普通字符串 key 更清楚。"
    ],
    "exercise": "使用 Symbol 创建唯一属性，并读取它的值。",
    "starterCode": "const id = 'id';\nconst user = {};\nuser[id] = 1;\nconsole.log(user[id]);",
    "errorCode": "const id = 'id';",
    "correctCode": "const id = Symbol('id');\nconst user = {};\nuser[id] = 1;\nconsole.log(user[id]);",
    "practice": {
      "prompt": "独立完成：使用 Symbol 创建唯一属性，并读取它的值。",
      "starter": "// 使用 Symbol 完成本课练习。\n// 目标：使用 Symbol 创建唯一属性，并读取它的值。\n\n",
      "answer": "const id = Symbol('id');\nconst user = {};\nuser[id] = 1;\nconsole.log(user[id]);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Symbol 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Symbol 的旧写法或误用",
      "broken": "const id = 'id';\nconst user = {};\nuser[id] = 1;\nconsole.log(user[id]);",
      "fixed": "const id = Symbol('id');\nconst user = {};\nuser[id] = 1;\nconsole.log(user[id]);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Symbol 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Symbol 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "for...of",
    "explanation": [
      "for...of 是 ES6 中值得掌握的特性。它的核心作用是：for...of 用于遍历可迭代对象的值，比传统索引循环更适合数组、字符串、Set 和 Map。",
      "典型使用场景：将索引循环改写为 for...of。",
      "解决的旧写法问题：传统索引循环会暴露下标和 length 细节，for...in 遍历数组又容易拿到属性名而不是值。",
      "适合使用：只关心可迭代对象的值，例如数组、字符串、Set、Map 或自定义迭代器。",
      "继续用传统写法：需要精确控制下标、反向遍历、跳步，或要同时改写数组元素时，传统 for 循环更合适。"
    ],
    "exercise": "将索引循环改写为 for...of。",
    "starterCode": "const items = ['a', 'b', 'c'];\nfor (let i = 0; i < items.length; i += 1) {\n  console.log(items[i]);\n}",
    "errorCode": "for (let i = 0; i < items.length; i += 1) {\n  console.log(items[i]);\n}",
    "correctCode": "const items = ['a', 'b', 'c'];\nfor (const item of items) {\n  console.log(item);\n}",
    "practice": {
      "prompt": "独立完成：将索引循环改写为 for...of。",
      "starter": "// 使用 for...of 完成本课练习。\n// 目标：将索引循环改写为 for...of。\n\n",
      "answer": "const items = ['a', 'b', 'c'];\nfor (const item of items) {\n  console.log(item);\n}",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 for...of 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 for...of 的旧写法或误用",
      "broken": "const items = ['a', 'b', 'c'];\nfor (let i = 0; i < items.length; i += 1) {\n  console.log(items[i]);\n}",
      "fixed": "const items = ['a', 'b', 'c'];\nfor (const item of items) {\n  console.log(item);\n}",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 for...of 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 for...of 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "Generators",
    "explanation": [
      "Generators 是 ES6 中值得掌握的特性。它的核心作用是：Generator 函数可以暂停和继续执行，使用 yield 逐步产出值，是迭代器和异步流程控制的重要基础。",
      "典型使用场景：创建一个 generator，依次产出 1 和 2。",
      "解决的旧写法问题：一次性返回完整数组会提前计算所有值，也不方便表达“按需产生、可暂停继续”的序列。",
      "适合使用：需要惰性生成数据、编写自定义迭代流程，或把复杂遍历拆成逐步 yield。",
      "继续用传统写法：数据量很小且已经完整存在时，直接数组或普通函数更容易理解。"
    ],
    "exercise": "创建一个 generator，依次产出 1 和 2。",
    "starterCode": "function createNumbers() {\n  return [1, 2];\n}\nconst numbers = createNumbers();\nconsole.log(numbers[0]);\nconsole.log(numbers[1]);",
    "errorCode": "function createNumbers() {\n  return [1, 2];\n}",
    "correctCode": "function* createNumbers() {\n  yield 1;\n  yield 2;\n}\nconst numbers = createNumbers();\nconsole.log(numbers.next().value);\nconsole.log(numbers.next().value);",
    "practice": {
      "prompt": "独立完成：创建一个 generator，依次产出 1 和 2。",
      "starter": "// 使用 Generators 完成本课练习。\n// 目标：创建一个 generator，依次产出 1 和 2。\n\n",
      "answer": "function* createNumbers() {\n  yield 1;\n  yield 2;\n}\nconst numbers = createNumbers();\nconsole.log(numbers.next().value);\nconsole.log(numbers.next().value);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Generators 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Generators 的旧写法或误用",
      "broken": "function createNumbers() {\n  return [1, 2];\n}\nconst numbers = createNumbers();\nconsole.log(numbers[0]);\nconsole.log(numbers[1]);",
      "fixed": "function* createNumbers() {\n  yield 1;\n  yield 2;\n}\nconst numbers = createNumbers();\nconsole.log(numbers.next().value);\nconsole.log(numbers.next().value);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Generators 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Generators 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "自定义迭代器",
    "explanation": [
      "自定义迭代器 是 ES6 中值得掌握的特性。它的核心作用是：通过实现 Symbol.iterator，对象就能接入 for...of、展开语法等统一的迭代协议。",
      "典型使用场景：让 range 对象可以被 for...of 遍历。",
      "解决的旧写法问题：普通对象默认不能被 for...of、展开语法等统一迭代能力消费，只能写专门的访问方法。",
      "适合使用：对象本身代表一个序列或集合，希望它能自然接入 for...of、... 和 Array.from。",
      "继续用传统写法：对象只是普通配置或记录，没有稳定遍历语义时，显式方法或 Object.entries 更清楚。"
    ],
    "exercise": "让 range 对象可以被 for...of 遍历。",
    "starterCode": "const range = { from: 1, to: 3 };\nfor (let value = range.from; value <= range.to; value += 1) {\n  console.log(value);\n}",
    "errorCode": "const range = { from: 1, to: 3 };",
    "correctCode": "const range = {\n  from: 1,\n  to: 3,\n  *[Symbol.iterator]() {\n    for (let value = this.from; value <= this.to; value += 1) {\n      yield value;\n    }\n  }\n};\nfor (const value of range) {\n  console.log(value);\n}",
    "practice": {
      "prompt": "独立完成：让 range 对象可以被 for...of 遍历。",
      "starter": "// 使用 自定义迭代器 完成本课练习。\n// 目标：让 range 对象可以被 for...of 遍历。\n\n",
      "answer": "const range = {\n  from: 1,\n  to: 3,\n  *[Symbol.iterator]() {\n    for (let value = this.from; value <= this.to; value += 1) {\n      yield value;\n    }\n  }\n};\nfor (const value of range) {\n  console.log(value);\n}",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 自定义迭代器 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 自定义迭代器 的旧写法或误用",
      "broken": "const range = { from: 1, to: 3 };\nfor (let value = range.from; value <= range.to; value += 1) {\n  console.log(value);\n}",
      "fixed": "const range = {\n  from: 1,\n  to: 3,\n  *[Symbol.iterator]() {\n    for (let value = this.from; value <= this.to; value += 1) {\n      yield value;\n    }\n  }\n};\nfor (const value of range) {\n  console.log(value);\n}",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 自定义迭代器 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 自定义迭代器 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "Array.from / Array.of",
    "explanation": [
      "Array.from / Array.of 是 ES6 中值得掌握的特性。它的核心作用是：Array.from 可以把类数组和可迭代对象转为数组，Array.of 则用参数创建数组，避免 Array 构造器的歧义。",
      "典型使用场景：使用 Array.from 将字符串转成字符数组。",
      "解决的旧写法问题：类数组转数组常要借用 slice，Array 构造器在单个数字参数时又容易产生长度歧义。",
      "适合使用：需要把类数组、可迭代对象转成真正数组，或想明确用参数创建数组。",
      "继续用传统写法：已经是数组时不需要再转；简单字面量直接写 [value] 通常更清楚。"
    ],
    "exercise": "使用 Array.from 将字符串转成字符数组。",
    "starterCode": "const chars = 'ES6'.split('');\nconsole.log(chars);",
    "errorCode": "'ES6'.split('');",
    "correctCode": "const chars = Array.from('ES6');\nconsole.log(chars);",
    "practice": {
      "prompt": "独立完成：使用 Array.from 将字符串转成字符数组。",
      "starter": "// 使用 Array.from / Array.of 完成本课练习。\n// 目标：使用 Array.from 将字符串转成字符数组。\n\n",
      "answer": "const chars = Array.from('ES6');\nconsole.log(chars);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Array.from / Array.of 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Array.from / Array.of 的旧写法或误用",
      "broken": "const chars = 'ES6'.split('');\nconsole.log(chars);",
      "fixed": "const chars = Array.from('ES6');\nconsole.log(chars);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Array.from / Array.of 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Array.from / Array.of 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "Object.assign",
    "explanation": [
      "Object.assign 是 ES6 中值得掌握的特性。它的核心作用是：Object.assign 用于把多个对象的可枚举属性复制到目标对象，是 ES6 中常见的浅拷贝和合并工具。",
      "典型使用场景：使用 Object.assign 合并 defaults 和 options。",
      "解决的旧写法问题：手动逐个复制属性样板多，合并默认配置和用户配置时容易漏字段。",
      "适合使用：需要浅合并对象、补默认配置，且只关心可枚举自有属性。",
      "继续用传统写法：需要深拷贝、保留 getter/setter 描述符，或合并逻辑复杂时，不要只靠 Object.assign。"
    ],
    "exercise": "使用 Object.assign 合并 defaults 和 options。",
    "starterCode": "const defaults = { theme: 'light', size: 'md' };\nconst options = { size: 'lg' };\nconst config = { theme: defaults.theme, size: options.size };\nconsole.log(config);",
    "errorCode": "const config = { theme: defaults.theme, size: options.size };",
    "correctCode": "const defaults = { theme: 'light', size: 'md' };\nconst options = { size: 'lg' };\nconst config = Object.assign({}, defaults, options);\nconsole.log(config);",
    "practice": {
      "prompt": "独立完成：使用 Object.assign 合并 defaults 和 options。",
      "starter": "// 使用 Object.assign 完成本课练习。\n// 目标：使用 Object.assign 合并 defaults 和 options。\n\n",
      "answer": "const defaults = { theme: 'light', size: 'md' };\nconst options = { size: 'lg' };\nconst config = Object.assign({}, defaults, options);\nconsole.log(config);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Object.assign 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Object.assign 的旧写法或误用",
      "broken": "const defaults = { theme: 'light', size: 'md' };\nconst options = { size: 'lg' };\nconst config = { theme: defaults.theme, size: options.size };\nconsole.log(config);",
      "fixed": "const defaults = { theme: 'light', size: 'md' };\nconst options = { size: 'lg' };\nconst config = Object.assign({}, defaults, options);\nconsole.log(config);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Object.assign 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Object.assign 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "字符串新增方法",
    "explanation": [
      "字符串新增方法 是 ES6 中值得掌握的特性。它的核心作用是：ES6 为字符串增加 startsWith、endsWith、includes 等方法，让常见匹配判断更语义化。",
      "典型使用场景：使用 startsWith 判断字符串是否以 ES 开头。",
      "解决的旧写法问题：用 indexOf 判断前缀、后缀或包含关系时，可读性差，还容易把 0 当成假值误判。",
      "适合使用：表达 startsWith、endsWith、includes 这类明确字符串判断。",
      "继续用传统写法：需要正则匹配、大小写归一化或复杂规则时，显式处理或 RegExp 更合适。"
    ],
    "exercise": "使用 startsWith 判断字符串是否以 ES 开头。",
    "starterCode": "const text = 'ES6 features';\nconst result = text.indexOf('ES') === 0;\nconsole.log(result);",
    "errorCode": "text.indexOf('ES') === 0;",
    "correctCode": "const text = 'ES6 features';\nconst result = text.startsWith('ES');\nconsole.log(result);",
    "practice": {
      "prompt": "独立完成：使用 startsWith 判断字符串是否以 ES 开头。",
      "starter": "// 使用 字符串新增方法 完成本课练习。\n// 目标：使用 startsWith 判断字符串是否以 ES 开头。\n\n",
      "answer": "const text = 'ES6 features';\nconst result = text.startsWith('ES');\nconsole.log(result);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 字符串新增方法 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 字符串新增方法 的旧写法或误用",
      "broken": "const text = 'ES6 features';\nconst result = text.indexOf('ES') === 0;\nconsole.log(result);",
      "fixed": "const text = 'ES6 features';\nconst result = text.startsWith('ES');\nconsole.log(result);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 字符串新增方法 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 字符串新增方法 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "Number 新增方法",
    "explanation": [
      "Number 新增方法 是 ES6 中值得掌握的特性。它的核心作用是：ES6 增加了 Number.isNaN、Number.isFinite、Number.isInteger 等更严格的数字判断方法。",
      "典型使用场景：使用 Number.isInteger 判断 value 是否为整数。",
      "解决的旧写法问题：全局 isNaN/isFinite 会先做类型转换，字符串等值可能被误判成数字场景。",
      "适合使用：需要严格判断真正的 number 值，例如 Number.isNaN、Number.isFinite、Number.isInteger。",
      "继续用传统写法：如果本来就想允许字符串数字输入，应先显式转换，再做数字判断。"
    ],
    "exercise": "使用 Number.isInteger 判断 value 是否为整数。",
    "starterCode": "const value = 42;\nconst result = typeof value === 'number' && isFinite(value) && Math.floor(value) === value;\nconsole.log(result);",
    "errorCode": "Math.floor(value) === value;",
    "correctCode": "const value = 42;\nconst result = Number.isInteger(value);\nconsole.log(result);",
    "practice": {
      "prompt": "独立完成：使用 Number.isInteger 判断 value 是否为整数。",
      "starter": "// 使用 Number 新增方法 完成本课练习。\n// 目标：使用 Number.isInteger 判断 value 是否为整数。\n\n",
      "answer": "const value = 42;\nconst result = Number.isInteger(value);\nconsole.log(result);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Number 新增方法 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Number 新增方法 的旧写法或误用",
      "broken": "const value = 42;\nconst result = typeof value === 'number' && isFinite(value) && Math.floor(value) === value;\nconsole.log(result);",
      "fixed": "const value = 42;\nconst result = Number.isInteger(value);\nconsole.log(result);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Number 新增方法 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Number 新增方法 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "ES Modules",
    "explanation": [
      "ES Modules 是 ES6 中值得掌握的特性。它的核心作用是：ES Modules 提供标准化的模块系统，用 import 和 export 管理文件之间的依赖关系。",
      "典型使用场景：将全局变量式代码改成模块导出和导入的写法。",
      "解决的旧写法问题：全局变量和脚本拼接会造成依赖顺序隐式、命名冲突和难以静态分析的问题。",
      "适合使用：需要清晰声明文件依赖、导出公共 API，并让打包工具做静态分析和拆包。",
      "继续用传统写法：非常小的临时脚本或不经过模块加载的内联代码，用普通 script 可能更直接。"
    ],
    "exercise": "将全局变量式代码改成模块导出和导入的写法。",
    "starterCode": "// math.js\nconst add = (a, b) => a + b;\n\n// app.js\nconsole.log(add(1, 2));",
    "errorCode": "const add = (a, b) => a + b;",
    "correctCode": "// math.js\nexport const add = (a, b) => a + b;\n\n// app.js\nimport { add } from './math.js';\nconsole.log(add(1, 2));",
    "practice": {
      "prompt": "独立完成：将全局变量式代码改成模块导出和导入的写法。",
      "starter": "// 使用 ES Modules 完成本课练习。\n// 目标：将全局变量式代码改成模块导出和导入的写法。\n\n",
      "answer": "// math.js\nexport const add = (a, b) => a + b;\n\n// app.js\nimport { add } from './math.js';\nconsole.log(add(1, 2));",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 ES Modules 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 ES Modules 的旧写法或误用",
      "broken": "// math.js\nconst add = (a, b) => a + b;\n\n// app.js\nconsole.log(add(1, 2));",
      "fixed": "// math.js\nexport const add = (a, b) => a + b;\n\n// app.js\nimport { add } from './math.js';\nconsole.log(add(1, 2));",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 ES Modules 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 ES Modules 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "WeakMap / WeakSet",
    "explanation": [
      "WeakMap / WeakSet 是 ES6 中值得掌握的特性。它的核心作用是：WeakMap 和 WeakSet 使用弱引用保存对象，适合存储私有数据或与对象生命周期绑定的元信息。",
      "典型使用场景：使用 WeakMap 为对象保存私有积分。",
      "解决的旧写法问题：Map 持有对象 key 的强引用，缓存和私有元数据容易阻止对象被垃圾回收。",
      "适合使用：需要把元信息绑定到对象生命周期上，例如 DOM 节点状态、实例私有数据、对象缓存。",
      "继续用传统写法：key 不是对象、需要遍历集合内容，或需要知道 size 时，应使用 Map/Set。"
    ],
    "exercise": "使用 WeakMap 为对象保存私有积分。",
    "starterCode": "const scores = new Map();\nconst user = { name: 'Alice' };\nscores.set(user, 10);\nconsole.log(scores.get(user));",
    "errorCode": "const scores = new Map();",
    "correctCode": "const scores = new WeakMap();\nconst user = { name: 'Alice' };\nscores.set(user, 10);\nconsole.log(scores.get(user));",
    "practice": {
      "prompt": "独立完成：使用 WeakMap 为对象保存私有积分。",
      "starter": "// 使用 WeakMap / WeakSet 完成本课练习。\n// 目标：使用 WeakMap 为对象保存私有积分。\n\n",
      "answer": "const scores = new WeakMap();\nconst user = { name: 'Alice' };\nscores.set(user, 10);\nconsole.log(scores.get(user));",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 WeakMap / WeakSet 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 WeakMap / WeakSet 的旧写法或误用",
      "broken": "const scores = new Map();\nconst user = { name: 'Alice' };\nscores.set(user, 10);\nconsole.log(scores.get(user));",
      "fixed": "const scores = new WeakMap();\nconst user = { name: 'Alice' };\nscores.set(user, 10);\nconsole.log(scores.get(user));",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 WeakMap / WeakSet 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 WeakMap / WeakSet 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "Array.find / findIndex",
    "explanation": [
      "Array.find / findIndex 是 ES6 中值得掌握的特性。它的核心作用是：find 和 findIndex 用于按条件查找数组元素或位置，比手写循环更直接。",
      "典型使用场景：使用 find 找到第一个年龄大于 18 的用户。",
      "解决的旧写法问题：手写循环找第一项会混入临时变量和 break，意图不如“查找第一个匹配项”清楚。",
      "适合使用：需要按条件找到第一个元素或它的位置。",
      "继续用传统写法：需要收集所有匹配项用 filter；需要复杂提前返回和副作用控制时，普通循环可能更清楚。"
    ],
    "exercise": "使用 find 找到第一个年龄大于 18 的用户。",
    "starterCode": "const users = [{ age: 16 }, { age: 20 }];\nlet adult;\nfor (const user of users) {\n  if (user.age > 18) adult = user;\n}\nconsole.log(adult);",
    "errorCode": "for (const user of users) {\n  if (user.age > 18) adult = user;\n}",
    "correctCode": "const users = [{ age: 16 }, { age: 20 }];\nconst adult = users.find(user => user.age > 18);\nconsole.log(adult);",
    "practice": {
      "prompt": "独立完成：使用 find 找到第一个年龄大于 18 的用户。",
      "starter": "// 使用 Array.find / findIndex 完成本课练习。\n// 目标：使用 find 找到第一个年龄大于 18 的用户。\n\n",
      "answer": "const users = [{ age: 16 }, { age: 20 }];\nconst adult = users.find(user => user.age > 18);\nconsole.log(adult);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Array.find / findIndex 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Array.find / findIndex 的旧写法或误用",
      "broken": "const users = [{ age: 16 }, { age: 20 }];\nlet adult;\nfor (const user of users) {\n  if (user.age > 18) adult = user;\n}\nconsole.log(adult);",
      "fixed": "const users = [{ age: 16 }, { age: 20 }];\nconst adult = users.find(user => user.age > 18);\nconsole.log(adult);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Array.find / findIndex 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Array.find / findIndex 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES6",
    "title": "Proxy / Reflect",
    "explanation": [
      "Proxy / Reflect 是 ES6 中值得掌握的特性。它的核心作用是：Proxy 可以拦截对象读取、赋值等操作，Reflect 提供与这些底层操作对应的标准方法。",
      "典型使用场景：用 Proxy 拦截 user.name 的读取，并在控制台输出提示。",
      "解决的旧写法问题：用 getter/setter 或手写包装对象只能拦截有限操作，难以统一代理读取、赋值、删除等底层行为。",
      "适合使用：需要实现响应式数据、校验层、访问日志、虚拟对象或元编程封装。",
      "继续用传统写法：只是普通数据访问时不要引入 Proxy；它会增加调试成本，也可能影响性能和可预测性。"
    ],
    "exercise": "用 Proxy 拦截 user.name 的读取，并在控制台输出提示。",
    "starterCode": "const user = { name: 'Alice' };\nconsole.log(user.name);",
    "errorCode": "console.log(user.name);",
    "correctCode": "const user = { name: 'Alice' };\nconst proxy = new Proxy(user, {\n  get(target, key) {\n    console.log('reading ' + String(key));\n    return Reflect.get(target, key);\n  }\n});\nconsole.log(proxy.name);",
    "practice": {
      "prompt": "独立完成：用 Proxy 拦截 user.name 的读取，并在控制台输出提示。",
      "starter": "// 使用 Proxy / Reflect 完成本课练习。\n// 目标：用 Proxy 拦截 user.name 的读取，并在控制台输出提示。\n\n",
      "answer": "const user = { name: 'Alice' };\nconst proxy = new Proxy(user, {\n  get(target, key) {\n    console.log('reading ' + String(key));\n    return Reflect.get(target, key);\n  }\n});\nconsole.log(proxy.name);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Proxy / Reflect 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Proxy / Reflect 的旧写法或误用",
      "broken": "const user = { name: 'Alice' };\nconsole.log(user.name);",
      "fixed": "const user = { name: 'Alice' };\nconst proxy = new Proxy(user, {\n  get(target, key) {\n    console.log('reading ' + String(key));\n    return Reflect.get(target, key);\n  }\n});\nconsole.log(proxy.name);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Proxy / Reflect 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Proxy / Reflect 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2016",
    "title": "指数运算符",
    "explanation": [
      "指数运算符 是 ES2016 中值得掌握的特性。它的核心作用是：ES2016 引入 ** 指数运算符，用于替代 Math.pow，书写更简洁。",
      "典型使用场景：将 Math.pow(2, 3) 改写为指数运算符。",
      "解决的旧写法问题：Math.pow 写法在表达式里不够直观，嵌套幂运算尤其难读。",
      "适合使用：表达数学上的幂运算，例如 2 ** 3 或 x ** 2。",
      "继续用传统写法：团队运行环境很旧，或公式周围已经大量使用 Math API 时，Math.pow 仍然清晰。"
    ],
    "exercise": "将 Math.pow(2, 3) 改写为指数运算符。",
    "starterCode": "const value = Math.pow(2, 3);",
    "errorCode": "const value = Math.pow(2, 3);",
    "correctCode": "const value = 2 ** 3;",
    "practice": {
      "prompt": "独立完成：将 Math.pow(2, 3) 改写为指数运算符。",
      "starter": "// 使用 指数运算符 完成本课练习。\n// 目标：将 Math.pow(2, 3) 改写为指数运算符。\n\n",
      "answer": "const value = 2 ** 3;",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 指数运算符 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 指数运算符 的旧写法或误用",
      "broken": "const value = Math.pow(2, 3);",
      "fixed": "const value = 2 ** 3;",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 指数运算符 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 指数运算符 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2016",
    "title": "Array.includes",
    "explanation": [
      "Array.includes 是 ES2016 中值得掌握的特性。它的核心作用是：ES2016 引入 Array.includes 方法，用于判断数组是否包含某个值，语义更清晰。",
      "典型使用场景：检查数组 [1, 2, 3] 是否包含数字 2。",
      "解决的旧写法问题：indexOf(...) !== -1 噪音多，并且对 NaN 的成员判断不友好。",
      "适合使用：只需要判断数组是否包含某个值，尤其是读起来应该像一个布尔条件时。",
      "继续用传统写法：需要元素位置时用 indexOf/findIndex；需要条件匹配时用 some。"
    ],
    "exercise": "检查数组 [1, 2, 3] 是否包含数字 2。",
    "starterCode": "const numbers = [1, 2, 3];\nconst hasTwo = numbers.indexOf(2) !== -1;",
    "errorCode": "const hasTwo = numbers.indexOf(2) !== -1;",
    "correctCode": "const hasTwo = numbers.includes(2);",
    "practice": {
      "prompt": "独立完成：检查数组 [1, 2, 3] 是否包含数字 2。",
      "starter": "// 使用 Array.includes 完成本课练习。\n// 目标：检查数组 [1, 2, 3] 是否包含数字 2。\n\n",
      "answer": "const hasTwo = numbers.includes(2);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Array.includes 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Array.includes 的旧写法或误用",
      "broken": "const numbers = [1, 2, 3];\nconst hasTwo = numbers.indexOf(2) !== -1;",
      "fixed": "const hasTwo = numbers.includes(2);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Array.includes 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Array.includes 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2017",
    "title": "Async / Await",
    "explanation": [
      "Async / Await 是 ES2017 中值得掌握的特性。它的核心作用是：ES2017 引入 async/await，使异步代码写法更像同步代码，更易读。",
      "典型使用场景：将 Promise.then 语法改写成 async/await。",
      "解决的旧写法问题：多层 then 链会把异步流程拆散，错误处理和顺序逻辑不如同步风格好读。",
      "适合使用：需要按顺序等待异步结果，并用 try/catch 管理错误。",
      "继续用传统写法：多个独立任务应该并发时，用 Promise.all/allSettled 等组合；不要把能并发的任务写成串行 await。"
    ],
    "exercise": "将 Promise.then 语法改写成 async/await。",
    "starterCode": "function fetchName() {\n  return Promise.resolve('Alice');\n}\nfetchName().then((name) => {\n  console.log(name);\n});",
    "errorCode": "fetchName().then((name) => {\n  console.log(name);\n});",
    "correctCode": "async function showName() {\n  const name = await fetchName();\n  console.log(name);\n}\nshowName();",
    "practice": {
      "prompt": "独立完成：将 Promise.then 语法改写成 async/await。",
      "starter": "// 使用 Async / Await 完成本课练习。\n// 目标：将 Promise.then 语法改写成 async/await。\n\n",
      "answer": "async function showName() {\n  const name = await fetchName();\n  console.log(name);\n}\nshowName();",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Async / Await 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Async / Await 的旧写法或误用",
      "broken": "function fetchName() {\n  return Promise.resolve('Alice');\n}\nfetchName().then((name) => {\n  console.log(name);\n});",
      "fixed": "async function showName() {\n  const name = await fetchName();\n  console.log(name);\n}\nshowName();",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Async / Await 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Async / Await 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2017",
    "title": "Object.values / Object.entries",
    "explanation": [
      "Object.values / Object.entries 是 ES2017 中值得掌握的特性。它的核心作用是：Object.values 和 Object.entries 让对象值列表、键值对列表的遍历更方便。",
      "典型使用场景：使用 Object.entries 输出对象中的键和值。",
      "解决的旧写法问题：遍历对象时常要 Object.keys(obj).map(key => obj[key])，重复取值且语义绕。",
      "适合使用：需要对象的值列表，或需要以 [key, value] 形式遍历普通对象。",
      "继续用传统写法：需要包含 Symbol key 或不可枚举属性时，用 Reflect.ownKeys 或属性描述符相关 API。"
    ],
    "exercise": "使用 Object.entries 输出对象中的键和值。",
    "starterCode": "const user = { name: 'Alice', age: 30 };\nfor (const key of Object.keys(user)) {\n  console.log(key, user[key]);\n}",
    "errorCode": "for (const key of Object.keys(user)) {\n  console.log(key, user[key]);\n}",
    "correctCode": "const user = { name: 'Alice', age: 30 };\nfor (const [key, value] of Object.entries(user)) {\n  console.log(key, value);\n}",
    "practice": {
      "prompt": "独立完成：使用 Object.entries 输出对象中的键和值。",
      "starter": "// 使用 Object.values / Object.entries 完成本课练习。\n// 目标：使用 Object.entries 输出对象中的键和值。\n\n",
      "answer": "const user = { name: 'Alice', age: 30 };\nfor (const [key, value] of Object.entries(user)) {\n  console.log(key, value);\n}",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Object.values / Object.entries 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Object.values / Object.entries 的旧写法或误用",
      "broken": "const user = { name: 'Alice', age: 30 };\nfor (const key of Object.keys(user)) {\n  console.log(key, user[key]);\n}",
      "fixed": "const user = { name: 'Alice', age: 30 };\nfor (const [key, value] of Object.entries(user)) {\n  console.log(key, value);\n}",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Object.values / Object.entries 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Object.values / Object.entries 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2017",
    "title": "String padding",
    "explanation": [
      "String padding 是 ES2017 中值得掌握的特性。它的核心作用是：padStart 和 padEnd 可以把字符串补齐到指定长度，常用于格式化编号、日期和对齐文本。",
      "典型使用场景：使用 padStart 将数字 7 格式化为 007。",
      "解决的旧写法问题：手动拼接 0 或空格补齐字符串时，长度计算和截断逻辑容易散落在代码里。",
      "适合使用：格式化编号、日期、表格文本等固定宽度字符串。",
      "继续用传统写法：复杂本地化数字、货币或日期展示，应优先使用 Intl 相关 API。"
    ],
    "exercise": "使用 padStart 将数字 7 格式化为 007。",
    "starterCode": "const id = String(7);\nconst padded = '00' + id;\nconsole.log(padded);",
    "errorCode": "'00' + id;",
    "correctCode": "const id = String(7);\nconst padded = id.padStart(3, '0');\nconsole.log(padded);",
    "practice": {
      "prompt": "独立完成：使用 padStart 将数字 7 格式化为 007。",
      "starter": "// 使用 String padding 完成本课练习。\n// 目标：使用 padStart 将数字 7 格式化为 007。\n\n",
      "answer": "const id = String(7);\nconst padded = id.padStart(3, '0');\nconsole.log(padded);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 String padding 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 String padding 的旧写法或误用",
      "broken": "const id = String(7);\nconst padded = '00' + id;\nconsole.log(padded);",
      "fixed": "const id = String(7);\nconst padded = id.padStart(3, '0');\nconsole.log(padded);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 String padding 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 String padding 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2017",
    "title": "Object.getOwnPropertyDescriptors",
    "explanation": [
      "Object.getOwnPropertyDescriptors 是 ES2017 中值得掌握的特性。它的核心作用是：Object.getOwnPropertyDescriptors 可以一次获取对象所有自有属性描述符，适合复制 getter、setter 等特殊属性。",
      "典型使用场景：使用属性描述符复制带 getter 的对象。",
      "解决的旧写法问题：Object.assign 会触发 getter 并复制值，无法保留 getter、setter、writable 等描述符信息。",
      "适合使用：需要完整复制对象属性描述符，尤其是访问器属性或库级对象克隆。",
      "继续用传统写法：只想浅合并普通数据对象时，展开语法或 Object.assign 更简单。"
    ],
    "exercise": "使用属性描述符复制带 getter 的对象。",
    "starterCode": "const source = {\n  get name() {\n    return 'Alice';\n  }\n};\nconst copy = Object.assign({}, source);\nconsole.log(copy.name);",
    "errorCode": "const copy = Object.assign({}, source);",
    "correctCode": "const source = {\n  get name() {\n    return 'Alice';\n  }\n};\nconst copy = Object.defineProperties({}, Object.getOwnPropertyDescriptors(source));\nconsole.log(copy.name);",
    "practice": {
      "prompt": "独立完成：使用属性描述符复制带 getter 的对象。",
      "starter": "// 使用 Object.getOwnPropertyDescriptors 完成本课练习。\n// 目标：使用属性描述符复制带 getter 的对象。\n\n",
      "answer": "const source = {\n  get name() {\n    return 'Alice';\n  }\n};\nconst copy = Object.defineProperties({}, Object.getOwnPropertyDescriptors(source));\nconsole.log(copy.name);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Object.getOwnPropertyDescriptors 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Object.getOwnPropertyDescriptors 的旧写法或误用",
      "broken": "const source = {\n  get name() {\n    return 'Alice';\n  }\n};\nconst copy = Object.assign({}, source);\nconsole.log(copy.name);",
      "fixed": "const source = {\n  get name() {\n    return 'Alice';\n  }\n};\nconst copy = Object.defineProperties({}, Object.getOwnPropertyDescriptors(source));\nconsole.log(copy.name);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Object.getOwnPropertyDescriptors 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Object.getOwnPropertyDescriptors 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2018",
    "title": "对象展开/剩余属性",
    "explanation": [
      "对象展开/剩余属性 是 ES2018 中值得掌握的特性。它的核心作用是：ES2018 支持对象展开和剩余属性，方便复制对象和提取部分字段。",
      "典型使用场景：从 user 中提取 name，并使用剩余属性获取其他字段。",
      "解决的旧写法问题：复制对象、合并字段、排除部分属性时，Object.assign 和手动赋值样板较多。",
      "适合使用：需要浅复制对象、合并配置，或从对象中取出部分字段再保留 rest。",
      "继续用传统写法：需要深拷贝、保留原型/描述符，或对象很大且性能敏感时，应选择更明确的方案。"
    ],
    "exercise": "从 user 中提取 name，并使用剩余属性获取其他字段。",
    "starterCode": "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst name = user.name;\nconst age = user.age;\nconst city = user.city;\nconst rest = {};",
    "errorCode": "const name = user.name;\nconst age = user.age;\nconst city = user.city;\nconst rest = {};",
    "correctCode": "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst { name, ...rest } = user;",
    "practice": {
      "prompt": "独立完成：从 user 中提取 name，并使用剩余属性获取其他字段。",
      "starter": "// 使用 对象展开/剩余属性 完成本课练习。\n// 目标：从 user 中提取 name，并使用剩余属性获取其他字段。\n\n",
      "answer": "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst { name, ...rest } = user;",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 对象展开/剩余属性 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 对象展开/剩余属性 的旧写法或误用",
      "broken": "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst name = user.name;\nconst age = user.age;\nconst city = user.city;\nconst rest = {};",
      "fixed": "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst { name, ...rest } = user;",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 对象展开/剩余属性 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 对象展开/剩余属性 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2018",
    "title": "Async Iteration",
    "explanation": [
      "Async Iteration 是 ES2018 中值得掌握的特性。它的核心作用是：异步迭代用 for await...of 消费异步产生的数据，适合流式数据和分页接口。",
      "典型使用场景：使用 for await...of 读取异步数字序列。",
      "解决的旧写法问题：异步数据流用普通 for/of 或 forEach 无法正确等待每一项，分页和流式读取会变得零散。",
      "适合使用：消费异步可迭代对象，例如流、分页接口、异步生成器。",
      "继续用传统写法：数据已经一次性拿到数组时，用普通 for...of；独立 Promise 并发时用 Promise.all。"
    ],
    "exercise": "使用 for await...of 读取异步数字序列。",
    "starterCode": "async function readAll(source) {\n  source.forEach((item) => console.log(item));\n}",
    "errorCode": "source.forEach((item) => console.log(item));",
    "correctCode": "async function readAll(source) {\n  for await (const item of source) {\n    console.log(item);\n  }\n}",
    "practice": {
      "prompt": "独立完成：使用 for await...of 读取异步数字序列。",
      "starter": "// 使用 Async Iteration 完成本课练习。\n// 目标：使用 for await...of 读取异步数字序列。\n\n",
      "answer": "async function readAll(source) {\n  for await (const item of source) {\n    console.log(item);\n  }\n}",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Async Iteration 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Async Iteration 的旧写法或误用",
      "broken": "async function readAll(source) {\n  source.forEach((item) => console.log(item));\n}",
      "fixed": "async function readAll(source) {\n  for await (const item of source) {\n    console.log(item);\n  }\n}",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Async Iteration 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Async Iteration 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2018",
    "title": "Promise.finally",
    "explanation": [
      "Promise.finally 是 ES2018 中值得掌握的特性。它的核心作用是：Promise.finally 用于在异步操作结束后执行清理逻辑，无论成功还是失败都会运行。",
      "典型使用场景：将重复的清理逻辑改成 finally。",
      "解决的旧写法问题：then 和 catch 中重复写清理逻辑会造成分支重复，也容易漏掉失败路径。",
      "适合使用：无论成功失败都要关闭 loading、释放资源、记录结束状态。",
      "继续用传统写法：清理逻辑依赖成功值或错误对象时，仍应放在 then/catch 中明确处理。"
    ],
    "exercise": "将重复的清理逻辑改成 finally。",
    "starterCode": "fetch('/api').then(() => {\n  console.log('done');\n}).catch(() => {\n  console.log('done');\n});",
    "errorCode": ".then(() => {\n  console.log('done');\n}).catch(() => {\n  console.log('done');\n});",
    "correctCode": "fetch('/api')\n  .then(() => console.log('success'))\n  .catch(() => console.log('error'))\n  .finally(() => console.log('done'));",
    "practice": {
      "prompt": "独立完成：将重复的清理逻辑改成 finally。",
      "starter": "// 使用 Promise.finally 完成本课练习。\n// 目标：将重复的清理逻辑改成 finally。\n\n",
      "answer": "fetch('/api')\n  .then(() => console.log('success'))\n  .catch(() => console.log('error'))\n  .finally(() => console.log('done'));",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Promise.finally 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Promise.finally 的旧写法或误用",
      "broken": "fetch('/api').then(() => {\n  console.log('done');\n}).catch(() => {\n  console.log('done');\n});",
      "fixed": "fetch('/api')\n  .then(() => console.log('success'))\n  .catch(() => console.log('error'))\n  .finally(() => console.log('done'));",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Promise.finally 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Promise.finally 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2018",
    "title": "RegExp 命名捕获组",
    "explanation": [
      "RegExp 命名捕获组 是 ES2018 中值得掌握的特性。它的核心作用是：命名捕获组允许用名字读取正则匹配结果，比依赖数字下标更清晰。",
      "典型使用场景：使用命名捕获组提取日期中的年、月、日。",
      "解决的旧写法问题：依赖 match[1]、match[2] 这类数字下标时，正则稍微调整就容易读错字段。",
      "适合使用：正则中有多个有含义的捕获结果，例如日期、URL、日志字段。",
      "继续用传统写法：只有一个简单捕获时，普通分组或字符串方法可能更轻。"
    ],
    "exercise": "使用命名捕获组提取日期中的年、月、日。",
    "starterCode": "const match = '2026-04-29'.match(/(\\d{4})-(\\d{2})-(\\d{2})/);\nconsole.log(match[1], match[2], match[3]);",
    "errorCode": "match[1], match[2], match[3]",
    "correctCode": "const match = '2026-04-29'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\nconsole.log(match.groups.year, match.groups.month, match.groups.day);",
    "practice": {
      "prompt": "独立完成：使用命名捕获组提取日期中的年、月、日。",
      "starter": "// 使用 RegExp 命名捕获组 完成本课练习。\n// 目标：使用命名捕获组提取日期中的年、月、日。\n\n",
      "answer": "const match = '2026-04-29'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\nconsole.log(match.groups.year, match.groups.month, match.groups.day);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 RegExp 命名捕获组 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 RegExp 命名捕获组 的旧写法或误用",
      "broken": "const match = '2026-04-29'.match(/(\\d{4})-(\\d{2})-(\\d{2})/);\nconsole.log(match[1], match[2], match[3]);",
      "fixed": "const match = '2026-04-29'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\nconsole.log(match.groups.year, match.groups.month, match.groups.day);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 RegExp 命名捕获组 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 RegExp 命名捕获组 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2018",
    "title": "RegExp 增强：dotAll / lookbehind / Unicode properties",
    "explanation": [
      "RegExp 增强：dotAll / lookbehind / Unicode properties 是 ES2018 中值得掌握的特性。它的核心作用是：ES2018 为正则表达式加入 dotAll、lookbehind 和 Unicode property escapes，让跨行、后行断言和 Unicode 分类匹配更强。",
      "典型使用场景：使用 lookbehind 提取价格中的数字。",
      "解决的旧写法问题：过去跨行匹配、前后文限定和 Unicode 分类常要写复杂替代模式。",
      "适合使用：需要跨行点号匹配、基于前文/后文提取，或按 Unicode 属性匹配字符。",
      "继续用传统写法：规则很简单时不要过度使用高级正则；可读性差时拆成字符串处理更好维护。"
    ],
    "exercise": "使用 lookbehind 提取价格中的数字。",
    "starterCode": "const text = '$42';\nconst match = text.match(/\\d+/);\nconsole.log(match[0]);",
    "errorCode": "text.match(/\\d+/);",
    "correctCode": "const text = '$42';\nconst match = text.match(/(?<=\\$)\\d+/);\nconsole.log(match[0]);",
    "practice": {
      "prompt": "独立完成：使用 lookbehind 提取价格中的数字。",
      "starter": "// 使用 RegExp 增强：dotAll / lookbehind / Unicode properties 完成本课练习。\n// 目标：使用 lookbehind 提取价格中的数字。\n\n",
      "answer": "const text = '$42';\nconst match = text.match(/(?<=\\$)\\d+/);\nconsole.log(match[0]);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 RegExp 增强：dotAll / lookbehind / Unicode properties 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 RegExp 增强：dotAll / lookbehind / Unicode properties 的旧写法或误用",
      "broken": "const text = '$42';\nconst match = text.match(/\\d+/);\nconsole.log(match[0]);",
      "fixed": "const text = '$42';\nconst match = text.match(/(?<=\\$)\\d+/);\nconsole.log(match[0]);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 RegExp 增强：dotAll / lookbehind / Unicode properties 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 RegExp 增强：dotAll / lookbehind / Unicode properties 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2019",
    "title": "Object.fromEntries",
    "explanation": [
      "Object.fromEntries 是 ES2019 中值得掌握的特性。它的核心作用是：ES2019 引入 Object.fromEntries，将键值对数组转换为对象。",
      "典型使用场景：将 [ [\"name\", \"Alice\"], [\"age\", 30] ] 转成对象。",
      "解决的旧写法问题：把键值对列表转回对象时，以前要手写 reduce 或 for 循环累加。",
      "适合使用：处理 Object.entries、Map、URLSearchParams 等键值对数据后，需要生成普通对象。",
      "继续用传统写法：需要保留重复 key、非字符串 key 或插入顺序语义时，Map 更合适。"
    ],
    "exercise": "将 [ [\"name\", \"Alice\"], [\"age\", 30] ] 转成对象。",
    "starterCode": "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = {};\nfor (const [key, value] of entries) {\n  obj[key] = value;\n}",
    "errorCode": "for (const [key, value] of entries) {\n  obj[key] = value;\n}",
    "correctCode": "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = Object.fromEntries(entries);",
    "practice": {
      "prompt": "独立完成：将 [ [\"name\", \"Alice\"], [\"age\", 30] ] 转成对象。",
      "starter": "// 使用 Object.fromEntries 完成本课练习。\n// 目标：将 [ [\"name\", \"Alice\"], [\"age\", 30] ] 转成对象。\n\n",
      "answer": "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = Object.fromEntries(entries);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Object.fromEntries 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Object.fromEntries 的旧写法或误用",
      "broken": "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = {};\nfor (const [key, value] of entries) {\n  obj[key] = value;\n}",
      "fixed": "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = Object.fromEntries(entries);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Object.fromEntries 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Object.fromEntries 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2019",
    "title": "Array.flat / flatMap",
    "explanation": [
      "Array.flat / flatMap 是 ES2019 中值得掌握的特性。它的核心作用是：flat 用于展开嵌套数组，flatMap 则把 map 和一层 flat 合并成一步。",
      "典型使用场景：使用 flat 将二维数组展平成一维数组。",
      "解决的旧写法问题：展开嵌套数组常要 concat(...list) 或 reduce，map 后再 flat 也会分成两步。",
      "适合使用：需要展开固定深度数组，或对每项映射后展开一层。",
      "继续用传统写法：嵌套结构代表真实层级关系，或需要自定义递归规则时，不要盲目拍平。"
    ],
    "exercise": "使用 flat 将二维数组展平成一维数组。",
    "starterCode": "const list = [[1, 2], [3, 4]];\nconst result = [].concat(...list);\nconsole.log(result);",
    "errorCode": "[].concat(...list);",
    "correctCode": "const list = [[1, 2], [3, 4]];\nconst result = list.flat();\nconsole.log(result);",
    "practice": {
      "prompt": "独立完成：使用 flat 将二维数组展平成一维数组。",
      "starter": "// 使用 Array.flat / flatMap 完成本课练习。\n// 目标：使用 flat 将二维数组展平成一维数组。\n\n",
      "answer": "const list = [[1, 2], [3, 4]];\nconst result = list.flat();\nconsole.log(result);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Array.flat / flatMap 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Array.flat / flatMap 的旧写法或误用",
      "broken": "const list = [[1, 2], [3, 4]];\nconst result = [].concat(...list);\nconsole.log(result);",
      "fixed": "const list = [[1, 2], [3, 4]];\nconst result = list.flat();\nconsole.log(result);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Array.flat / flatMap 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Array.flat / flatMap 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2019",
    "title": "Optional catch binding",
    "explanation": [
      "Optional catch binding 是 ES2019 中值得掌握的特性。它的核心作用是：当 catch 块不需要错误对象时，ES2019 允许省略 catch 参数，让代码更简洁。",
      "典型使用场景：移除没有使用的 error 参数。",
      "解决的旧写法问题：catch 块不使用错误对象时，仍要写一个 error 参数，容易制造未使用变量噪音。",
      "适合使用：只关心“失败了”这个事实，不需要读取错误详情。",
      "继续用传统写法：需要记录、分类、重新抛出错误时，保留 error 参数更清楚。"
    ],
    "exercise": "移除没有使用的 error 参数。",
    "starterCode": "try {\n  JSON.parse('{');\n} catch (error) {\n  console.log('invalid json');\n}",
    "errorCode": "catch (error) {",
    "correctCode": "try {\n  JSON.parse('{');\n} catch {\n  console.log('invalid json');\n}",
    "practice": {
      "prompt": "独立完成：移除没有使用的 error 参数。",
      "starter": "// 使用 Optional catch binding 完成本课练习。\n// 目标：移除没有使用的 error 参数。\n\n",
      "answer": "try {\n  JSON.parse('{');\n} catch {\n  console.log('invalid json');\n}",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Optional catch binding 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Optional catch binding 的旧写法或误用",
      "broken": "try {\n  JSON.parse('{');\n} catch (error) {\n  console.log('invalid json');\n}",
      "fixed": "try {\n  JSON.parse('{');\n} catch {\n  console.log('invalid json');\n}",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Optional catch binding 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Optional catch binding 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2019",
    "title": "Symbol.description",
    "explanation": [
      "Symbol.description 是 ES2019 中值得掌握的特性。它的核心作用是：Symbol.description 可以直接读取 Symbol 的描述文本，避免从 toString 结果中手动截取。",
      "典型使用场景：使用 description 读取 Symbol 描述。",
      "解决的旧写法问题：以前要从 symbol.toString() 里截取描述文本，写法脆弱且不直观。",
      "适合使用：调试、日志或开发工具里需要读取 Symbol 的描述。",
      "继续用传统写法：业务逻辑不应依赖 description 判断身份；真正的身份仍然是 Symbol 值本身。"
    ],
    "exercise": "使用 description 读取 Symbol 描述。",
    "starterCode": "const id = Symbol('userId');\nconst desc = id.toString().slice(7, -1);\nconsole.log(desc);",
    "errorCode": "id.toString().slice(7, -1);",
    "correctCode": "const id = Symbol('userId');\nconst desc = id.description;\nconsole.log(desc);",
    "practice": {
      "prompt": "独立完成：使用 description 读取 Symbol 描述。",
      "starter": "// 使用 Symbol.description 完成本课练习。\n// 目标：使用 description 读取 Symbol 描述。\n\n",
      "answer": "const id = Symbol('userId');\nconst desc = id.description;\nconsole.log(desc);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Symbol.description 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Symbol.description 的旧写法或误用",
      "broken": "const id = Symbol('userId');\nconst desc = id.toString().slice(7, -1);\nconsole.log(desc);",
      "fixed": "const id = Symbol('userId');\nconst desc = id.description;\nconsole.log(desc);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Symbol.description 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Symbol.description 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2020",
    "title": "Optional Chaining",
    "explanation": [
      "Optional Chaining 是 ES2020 中值得掌握的特性。它的核心作用是：可选链让你安全访问嵌套属性，当某个路径不存在时不会抛出错误。",
      "典型使用场景：使用可选链读取 user.profile.name。",
      "解决的旧写法问题：深层属性访问过去要写多层 && 防止 Cannot read properties of undefined。",
      "适合使用：读取可选对象路径、可选方法或接口返回中的可缺失字段。",
      "继续用传统写法：某个字段缺失代表程序错误时，不要用可选链吞掉问题，应让错误暴露出来。"
    ],
    "exercise": "使用可选链读取 user.profile.name。",
    "starterCode": "const user = { profile: { name: 'Cindy' } };\nconst name = user.profile.name;",
    "errorCode": "const name = user.profile.name;",
    "correctCode": "const name = user?.profile?.name;",
    "practice": {
      "prompt": "独立完成：使用可选链读取 user.profile.name。",
      "starter": "// 使用 Optional Chaining 完成本课练习。\n// 目标：使用可选链读取 user.profile.name。\n\n",
      "answer": "const name = user?.profile?.name;",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Optional Chaining 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Optional Chaining 的旧写法或误用",
      "broken": "const user = { profile: { name: 'Cindy' } };\nconst name = user.profile.name;",
      "fixed": "const name = user?.profile?.name;",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Optional Chaining 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Optional Chaining 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2020",
    "title": "BigInt",
    "explanation": [
      "BigInt 是 ES2020 中值得掌握的特性。它的核心作用是：ES2020 引入 BigInt，用于表示比 Number.MAX_SAFE_INTEGER 更大的整数。",
      "典型使用场景：用 BigInt 表示 9007199254740993，并进行加法运算。",
      "解决的旧写法问题：Number 超过 MAX_SAFE_INTEGER 后会丢失整数精度，ID、计数和大整数计算会出错。",
      "适合使用：需要精确表示和运算超大整数，并且能接受 BigInt 不能和 Number 直接混算的规则。",
      "继续用传统写法：普通小范围数字、小数、Math API 或 JSON 直接传输场景，Number 更方便。"
    ],
    "exercise": "用 BigInt 表示 9007199254740993，并进行加法运算。",
    "starterCode": "const big = 9007199254740993;\nconst next = big + 1;",
    "errorCode": "const big = 9007199254740993;\nconst next = big + 1;",
    "correctCode": "const big = 9007199254740993n;\nconst next = big + 1n;",
    "practice": {
      "prompt": "独立完成：用 BigInt 表示 9007199254740993，并进行加法运算。",
      "starter": "// 使用 BigInt 完成本课练习。\n// 目标：用 BigInt 表示 9007199254740993，并进行加法运算。\n\n",
      "answer": "const big = 9007199254740993n;\nconst next = big + 1n;",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 BigInt 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 BigInt 的旧写法或误用",
      "broken": "const big = 9007199254740993;\nconst next = big + 1;",
      "fixed": "const big = 9007199254740993n;\nconst next = big + 1n;",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 BigInt 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 BigInt 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2020",
    "title": "globalThis",
    "explanation": [
      "globalThis 是 ES2020 中值得掌握的特性。它的核心作用是：globalThis 提供跨环境的全局对象访问方式，浏览器、Node.js 和 Worker 中都能使用。",
      "典型使用场景：使用 globalThis 保存一个全局配置。",
      "解决的旧写法问题：不同环境访问全局对象要写 window、global、self 等分支判断。",
      "适合使用：跨浏览器、Node.js、Worker 的库代码需要统一访问全局对象。",
      "继续用传统写法：业务代码里频繁挂全局状态通常会增加耦合，应优先使用模块导入导出。"
    ],
    "exercise": "使用 globalThis 保存一个全局配置。",
    "starterCode": "window.appName = 'ES Practice Lab';\nconsole.log(window.appName);",
    "errorCode": "window.appName = 'ES Practice Lab';",
    "correctCode": "globalThis.appName = 'ES Practice Lab';\nconsole.log(globalThis.appName);",
    "practice": {
      "prompt": "独立完成：使用 globalThis 保存一个全局配置。",
      "starter": "// 使用 globalThis 完成本课练习。\n// 目标：使用 globalThis 保存一个全局配置。\n\n",
      "answer": "globalThis.appName = 'ES Practice Lab';\nconsole.log(globalThis.appName);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 globalThis 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 globalThis 的旧写法或误用",
      "broken": "window.appName = 'ES Practice Lab';\nconsole.log(window.appName);",
      "fixed": "globalThis.appName = 'ES Practice Lab';\nconsole.log(globalThis.appName);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 globalThis 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 globalThis 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2020",
    "title": "Promise.allSettled",
    "explanation": [
      "Promise.allSettled 是 ES2020 中值得掌握的特性。它的核心作用是：Promise.allSettled 会等待所有 Promise 完成，并保留每一项的 fulfilled 或 rejected 状态。",
      "典型使用场景：使用 allSettled 同时收集成功和失败结果。",
      "解决的旧写法问题：Promise.all 遇到第一个失败就 reject，无法自然收集其他任务的成功/失败结果。",
      "适合使用：批量请求、批量任务中需要知道每一项最终状态，而不是一项失败就整体中断。",
      "继续用传统写法：任务之间强依赖，任一失败就应该停止时，Promise.all 更符合语义。"
    ],
    "exercise": "使用 allSettled 同时收集成功和失败结果。",
    "starterCode": "const tasks = [Promise.resolve(1), Promise.reject(new Error('fail'))];\nPromise.all(tasks).then(console.log).catch(console.log);",
    "errorCode": "Promise.all(tasks)",
    "correctCode": "const tasks = [Promise.resolve(1), Promise.reject(new Error('fail'))];\nPromise.allSettled(tasks).then(console.log);",
    "practice": {
      "prompt": "独立完成：使用 allSettled 同时收集成功和失败结果。",
      "starter": "// 使用 Promise.allSettled 完成本课练习。\n// 目标：使用 allSettled 同时收集成功和失败结果。\n\n",
      "answer": "const tasks = [Promise.resolve(1), Promise.reject(new Error('fail'))];\nPromise.allSettled(tasks).then(console.log);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Promise.allSettled 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Promise.allSettled 的旧写法或误用",
      "broken": "const tasks = [Promise.resolve(1), Promise.reject(new Error('fail'))];\nPromise.all(tasks).then(console.log).catch(console.log);",
      "fixed": "const tasks = [Promise.resolve(1), Promise.reject(new Error('fail'))];\nPromise.allSettled(tasks).then(console.log);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Promise.allSettled 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Promise.allSettled 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2020",
    "title": "Dynamic import / import.meta",
    "explanation": [
      "Dynamic import / import.meta 是 ES2020 中值得掌握的特性。它的核心作用是：动态 import 可以按需加载模块，import.meta 则暴露当前模块的元信息。",
      "典型使用场景：将静态导入改成按需动态导入。",
      "解决的旧写法问题：静态 import 会把模块提前纳入依赖，按需加载和读取当前模块元信息不方便。",
      "适合使用：需要路由级拆包、条件加载重模块，或读取 import.meta.url 等模块上下文。",
      "继续用传统写法：核心依赖和首屏必需代码应使用静态 import，便于静态分析和提前加载。"
    ],
    "exercise": "将静态导入改成按需动态导入。",
    "starterCode": "import { format } from './format.js';\nconsole.log(format('hello'));",
    "errorCode": "import { format } from './format.js';",
    "correctCode": "const { format } = await import('./format.js');\nconsole.log(format('hello'));\nconsole.log(import.meta.url);",
    "practice": {
      "prompt": "独立完成：将静态导入改成按需动态导入。",
      "starter": "// 使用 Dynamic import / import.meta 完成本课练习。\n// 目标：将静态导入改成按需动态导入。\n\n",
      "answer": "const { format } = await import('./format.js');\nconsole.log(format('hello'));\nconsole.log(import.meta.url);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Dynamic import / import.meta 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Dynamic import / import.meta 的旧写法或误用",
      "broken": "import { format } from './format.js';\nconsole.log(format('hello'));",
      "fixed": "const { format } = await import('./format.js');\nconsole.log(format('hello'));\nconsole.log(import.meta.url);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Dynamic import / import.meta 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Dynamic import / import.meta 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2020",
    "title": "String.matchAll",
    "explanation": [
      "String.matchAll 是 ES2020 中值得掌握的特性。它的核心作用是：matchAll 返回所有正则匹配结果的迭代器，并保留捕获组信息。",
      "典型使用场景：使用 matchAll 提取字符串中的所有数字。",
      "解决的旧写法问题：用 RegExp.exec 循环收集多次匹配容易忘记 global 标志，也会混入状态推进细节。",
      "适合使用：需要遍历字符串中的所有正则匹配，并保留捕获组信息。",
      "继续用传统写法：只需要第一个匹配用 match；只需要判断是否匹配用 test。"
    ],
    "exercise": "使用 matchAll 提取字符串中的所有数字。",
    "starterCode": "const text = 'a1 b22 c333';\nconst matches = text.match(/\\d+/g);\nconsole.log(matches);",
    "errorCode": "text.match(/\\d+/g);",
    "correctCode": "const text = 'a1 b22 c333';\nconst matches = [...text.matchAll(/\\d+/g)].map(match => match[0]);\nconsole.log(matches);",
    "practice": {
      "prompt": "独立完成：使用 matchAll 提取字符串中的所有数字。",
      "starter": "// 使用 String.matchAll 完成本课练习。\n// 目标：使用 matchAll 提取字符串中的所有数字。\n\n",
      "answer": "const text = 'a1 b22 c333';\nconst matches = [...text.matchAll(/\\d+/g)].map(match => match[0]);\nconsole.log(matches);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 String.matchAll 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 String.matchAll 的旧写法或误用",
      "broken": "const text = 'a1 b22 c333';\nconst matches = text.match(/\\d+/g);\nconsole.log(matches);",
      "fixed": "const text = 'a1 b22 c333';\nconst matches = [...text.matchAll(/\\d+/g)].map(match => match[0]);\nconsole.log(matches);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 String.matchAll 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 String.matchAll 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2021",
    "title": "Nullish Coalescing 与 逻辑赋值",
    "explanation": [
      "Nullish Coalescing 与 逻辑赋值 是 ES2021 中值得掌握的特性。它的核心作用是：ES2021 引入 nullish coalescing 和逻辑赋值，让默认值和条件赋值更简洁。",
      "典型使用场景：将条件赋值改写为 ||= 或 ??=。",
      "解决的旧写法问题：用 || 设置默认值会把 0、空字符串、false 当成缺失值误替换。",
      "适合使用：只有 null 或 undefined 才代表缺失，或需要简洁地按条件赋值。",
      "继续用传统写法：确实要把所有假值都视为无效时，|| 仍然表达得更准确。"
    ],
    "exercise": "将条件赋值改写为 ||= 或 ??=。",
    "starterCode": "let name = '';\nlet age;\nif (!name) name = 'Alice';\nif (age === undefined || age === null) age = 30;",
    "errorCode": "if (!name) name = 'Alice';\nif (age === undefined || age === null) age = 30;",
    "correctCode": "let name = '';\nlet age;\nname ||= 'Alice';\nage ??= 30;",
    "practice": {
      "prompt": "独立完成：将条件赋值改写为 ||= 或 ??=。",
      "starter": "// 使用 Nullish Coalescing 与 逻辑赋值 完成本课练习。\n// 目标：将条件赋值改写为 ||= 或 ??=。\n\n",
      "answer": "let name = '';\nlet age;\nname ||= 'Alice';\nage ??= 30;",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Nullish Coalescing 与 逻辑赋值 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Nullish Coalescing 与 逻辑赋值 的旧写法或误用",
      "broken": "let name = '';\nlet age;\nif (!name) name = 'Alice';\nif (age === undefined || age === null) age = 30;",
      "fixed": "let name = '';\nlet age;\nname ||= 'Alice';\nage ??= 30;",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Nullish Coalescing 与 逻辑赋值 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Nullish Coalescing 与 逻辑赋值 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2021",
    "title": "String.replaceAll",
    "explanation": [
      "String.replaceAll 是 ES2021 中值得掌握的特性。它的核心作用是：ES2021 引入 String.replaceAll，方便替换字符串中所有匹配文本。",
      "典型使用场景：将字符串中的所有 a 替换成 b。",
      "解决的旧写法问题：replace 只替换第一个字符串匹配，替换全部时常要写全局正则并处理转义。",
      "适合使用：需要把固定字符串的所有出现位置都替换掉。",
      "继续用传统写法：需要复杂模式匹配、捕获组或条件替换时，正则 replace 更合适。"
    ],
    "exercise": "将字符串中的所有 a 替换成 b。",
    "starterCode": "const text = 'aba';\nconst result = text.replace(/a/g, 'b');",
    "errorCode": "const result = text.replace(/a/g, 'b');",
    "correctCode": "const text = 'aba';\nconst result = text.replaceAll('a', 'b');",
    "practice": {
      "prompt": "独立完成：将字符串中的所有 a 替换成 b。",
      "starter": "// 使用 String.replaceAll 完成本课练习。\n// 目标：将字符串中的所有 a 替换成 b。\n\n",
      "answer": "const text = 'aba';\nconst result = text.replaceAll('a', 'b');",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 String.replaceAll 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 String.replaceAll 的旧写法或误用",
      "broken": "const text = 'aba';\nconst result = text.replace(/a/g, 'b');",
      "fixed": "const text = 'aba';\nconst result = text.replaceAll('a', 'b');",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 String.replaceAll 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 String.replaceAll 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2021",
    "title": "Promise.any",
    "explanation": [
      "Promise.any 是 ES2021 中值得掌握的特性。它的核心作用是：Promise.any 会在任意一个 Promise 成功时返回该结果，只有全部失败时才会 reject。",
      "典型使用场景：使用 Promise.any 获取最快成功的请求结果。",
      "解决的旧写法问题：Promise.race 会被最快失败打断，无法表达“等第一个成功结果”。",
      "适合使用：多个备选来源只要任意一个成功即可，例如镜像请求或降级数据源。",
      "继续用传统写法：关心最快完成无论成功失败用 race；需要全部成功用 all。"
    ],
    "exercise": "使用 Promise.any 获取最快成功的请求结果。",
    "starterCode": "const requests = [Promise.reject('bad'), Promise.resolve('ok')];\nPromise.race(requests).then(console.log).catch(console.log);",
    "errorCode": "Promise.race(requests)",
    "correctCode": "const requests = [Promise.reject('bad'), Promise.resolve('ok')];\nPromise.any(requests).then(console.log).catch(console.log);",
    "practice": {
      "prompt": "独立完成：使用 Promise.any 获取最快成功的请求结果。",
      "starter": "// 使用 Promise.any 完成本课练习。\n// 目标：使用 Promise.any 获取最快成功的请求结果。\n\n",
      "answer": "const requests = [Promise.reject('bad'), Promise.resolve('ok')];\nPromise.any(requests).then(console.log).catch(console.log);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Promise.any 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Promise.any 的旧写法或误用",
      "broken": "const requests = [Promise.reject('bad'), Promise.resolve('ok')];\nPromise.race(requests).then(console.log).catch(console.log);",
      "fixed": "const requests = [Promise.reject('bad'), Promise.resolve('ok')];\nPromise.any(requests).then(console.log).catch(console.log);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Promise.any 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Promise.any 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2021",
    "title": "Numeric separators",
    "explanation": [
      "Numeric separators 是 ES2021 中值得掌握的特性。它的核心作用是：数字分隔符允许用下划线提升长数字的可读性，不改变数字本身的值。",
      "典型使用场景：使用数字分隔符改写一百万。",
      "解决的旧写法问题：长数字字面量难读，位数和分组容易数错。",
      "适合使用：书写金额分、时间戳、位掩码、大整数等较长数字字面量。",
      "继续用传统写法：运行时字符串数字、用户输入或格式化展示不受它影响，仍需显式解析或格式化。"
    ],
    "exercise": "使用数字分隔符改写一百万。",
    "starterCode": "const amount = 1000000;\nconsole.log(amount);",
    "errorCode": "1000000",
    "correctCode": "const amount = 1_000_000;\nconsole.log(amount);",
    "practice": {
      "prompt": "独立完成：使用数字分隔符改写一百万。",
      "starter": "// 使用 Numeric separators 完成本课练习。\n// 目标：使用数字分隔符改写一百万。\n\n",
      "answer": "const amount = 1_000_000;\nconsole.log(amount);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Numeric separators 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Numeric separators 的旧写法或误用",
      "broken": "const amount = 1000000;\nconsole.log(amount);",
      "fixed": "const amount = 1_000_000;\nconsole.log(amount);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Numeric separators 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Numeric separators 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2021",
    "title": "WeakRef / FinalizationRegistry",
    "explanation": [
      "WeakRef / FinalizationRegistry 是 ES2021 中值得掌握的特性。它的核心作用是：WeakRef 和 FinalizationRegistry 提供弱引用和对象回收后的清理通知，适合缓存等高级场景。",
      "典型使用场景：使用 WeakRef 保存一个可被回收的对象引用。",
      "解决的旧写法问题：某些缓存想引用对象又不想阻止垃圾回收，强引用 Map 会造成内存保留。",
      "适合使用：高级缓存、资源清理观察等非常底层且能接受回收时机不确定的场景。",
      "继续用传统写法：普通业务状态不要依赖垃圾回收时机；显式生命周期管理通常更可靠。"
    ],
    "exercise": "使用 WeakRef 保存一个可被回收的对象引用。",
    "starterCode": "let user = { name: 'Alice' };\nconst cache = user;\nuser = null;\nconsole.log(cache.name);",
    "errorCode": "const cache = user;",
    "correctCode": "let user = { name: 'Alice' };\nconst ref = new WeakRef(user);\nuser = null;\nconsole.log(ref.deref()?.name);",
    "practice": {
      "prompt": "独立完成：使用 WeakRef 保存一个可被回收的对象引用。",
      "starter": "// 使用 WeakRef / FinalizationRegistry 完成本课练习。\n// 目标：使用 WeakRef 保存一个可被回收的对象引用。\n\n",
      "answer": "let user = { name: 'Alice' };\nconst ref = new WeakRef(user);\nuser = null;\nconsole.log(ref.deref()?.name);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 WeakRef / FinalizationRegistry 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 WeakRef / FinalizationRegistry 的旧写法或误用",
      "broken": "let user = { name: 'Alice' };\nconst cache = user;\nuser = null;\nconsole.log(cache.name);",
      "fixed": "let user = { name: 'Alice' };\nconst ref = new WeakRef(user);\nuser = null;\nconsole.log(ref.deref()?.name);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 WeakRef / FinalizationRegistry 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 WeakRef / FinalizationRegistry 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2022",
    "title": "类字段与私有属性",
    "explanation": [
      "类字段与私有属性 是 ES2022 中值得掌握的特性。它的核心作用是：ES2022 支持类字段和私有属性，类定义更直观，还能保护内部状态。",
      "典型使用场景：创建一个带私有字段的类，并返回字段值。",
      "解决的旧写法问题：构造函数里反复声明实例字段，或用下划线约定私有字段，都不够直观或不够严格。",
      "适合使用：需要在 class 中直接声明实例字段、静态字段，或真正限制外部访问的 #private 字段。",
      "继续用传统写法：只是简单工厂对象或数据结构时，普通对象/闭包可能更轻；公共字段不要滥用 #private。"
    ],
    "exercise": "创建一个带私有字段的类，并返回字段值。",
    "starterCode": "class Counter {\n  constructor() {\n    this.count = 0;\n  }\n  increment() {\n    this.count += 1;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.count);",
    "errorCode": "this.count = 0;\nthis.count += 1;\nconsole.log(c.count);",
    "correctCode": "class Counter {\n  #count = 0;\n  increment() {\n    this.#count += 1;\n  }\n  get value() {\n    return this.#count;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.value);",
    "practice": {
      "prompt": "独立完成：创建一个带私有字段的类，并返回字段值。",
      "starter": "// 使用 类字段与私有属性 完成本课练习。\n// 目标：创建一个带私有字段的类，并返回字段值。\n\n",
      "answer": "class Counter {\n  #count = 0;\n  increment() {\n    this.#count += 1;\n  }\n  get value() {\n    return this.#count;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.value);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 类字段与私有属性 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 类字段与私有属性 的旧写法或误用",
      "broken": "class Counter {\n  constructor() {\n    this.count = 0;\n  }\n  increment() {\n    this.count += 1;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.count);",
      "fixed": "class Counter {\n  #count = 0;\n  increment() {\n    this.#count += 1;\n  }\n  get value() {\n    return this.#count;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.value);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 类字段与私有属性 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 类字段与私有属性 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2022",
    "title": "Array.prototype.at",
    "explanation": [
      "Array.prototype.at 是 ES2022 中值得掌握的特性。它的核心作用是：ES2022 引入 Array.prototype.at，支持使用负数索引访问数组末尾元素。",
      "典型使用场景：使用 .at 获取数组最后一个元素。",
      "解决的旧写法问题：访问倒数元素过去要写 arr[arr.length - 1]，字符串和数组写法也不统一。",
      "适合使用：需要按正向或负向索引读取数组、字符串等可索引对象。",
      "继续用传统写法：需要兼容很旧环境或只是固定正向索引时，方括号仍然最直接。"
    ],
    "exercise": "使用 .at 获取数组最后一个元素。",
    "starterCode": "const items = ['a', 'b', 'c'];\nconst last = items[items.length - 1];",
    "errorCode": "const last = items[items.length - 1];",
    "correctCode": "const items = ['a', 'b', 'c'];\nconst last = items.at(-1);",
    "practice": {
      "prompt": "独立完成：使用 .at 获取数组最后一个元素。",
      "starter": "// 使用 Array.prototype.at 完成本课练习。\n// 目标：使用 .at 获取数组最后一个元素。\n\n",
      "answer": "const items = ['a', 'b', 'c'];\nconst last = items.at(-1);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Array.prototype.at 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Array.prototype.at 的旧写法或误用",
      "broken": "const items = ['a', 'b', 'c'];\nconst last = items[items.length - 1];",
      "fixed": "const items = ['a', 'b', 'c'];\nconst last = items.at(-1);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Array.prototype.at 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Array.prototype.at 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2022",
    "title": "Class static block",
    "explanation": [
      "Class static block 是 ES2022 中值得掌握的特性。它的核心作用是：静态初始化块允许 class 在定义阶段执行一次初始化逻辑，适合设置静态字段或复杂配置。",
      "典型使用场景：使用 static block 初始化静态字段。",
      "解决的旧写法问题：类的静态初始化如果需要多步逻辑，以前只能写在类外，容易打散封装。",
      "适合使用：静态字段初始化需要 try/catch、条件判断或读取私有静态字段。",
      "继续用传统写法：只是给静态字段一个简单值时，直接静态字段声明更清楚。"
    ],
    "exercise": "使用 static block 初始化静态字段。",
    "starterCode": "class Config {}\nConfig.value = 'ready';\nconsole.log(Config.value);",
    "errorCode": "Config.value = 'ready';",
    "correctCode": "class Config {\n  static value;\n  static {\n    this.value = 'ready';\n  }\n}\nconsole.log(Config.value);",
    "practice": {
      "prompt": "独立完成：使用 static block 初始化静态字段。",
      "starter": "// 使用 Class static block 完成本课练习。\n// 目标：使用 static block 初始化静态字段。\n\n",
      "answer": "class Config {\n  static value;\n  static {\n    this.value = 'ready';\n  }\n}\nconsole.log(Config.value);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Class static block 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Class static block 的旧写法或误用",
      "broken": "class Config {}\nConfig.value = 'ready';\nconsole.log(Config.value);",
      "fixed": "class Config {\n  static value;\n  static {\n    this.value = 'ready';\n  }\n}\nconsole.log(Config.value);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Class static block 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Class static block 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2022",
    "title": "Private brand checks",
    "explanation": [
      "Private brand checks 是 ES2022 中值得掌握的特性。它的核心作用是：private brand check 使用 #field in object 判断对象是否拥有某个私有字段，比 try/catch 访问更直接。",
      "典型使用场景：使用 #value in object 判断实例类型。",
      "解决的旧写法问题：判断对象是否拥有某个私有字段以前没有直接语法，只能间接 try/catch 或暴露标记。",
      "适合使用：类内部需要安全判断一个对象是不是本类私有结构的实例。",
      "继续用传统写法：公共类型判断用 instanceof、结构检查或显式字段更容易被外部代码理解。"
    ],
    "exercise": "使用 #value in object 判断实例类型。",
    "starterCode": "class Box {\n  #value = 1;\n  static isBox(object) {\n    try {\n      object.#value;\n      return true;\n    } catch {\n      return false;\n    }\n  }\n}",
    "errorCode": "try {\n  object.#value;\n  return true;\n} catch {\n  return false;\n}",
    "correctCode": "class Box {\n  #value = 1;\n  static isBox(object) {\n    return #value in object;\n  }\n}",
    "practice": {
      "prompt": "独立完成：使用 #value in object 判断实例类型。",
      "starter": "// 使用 Private brand checks 完成本课练习。\n// 目标：使用 #value in object 判断实例类型。\n\n",
      "answer": "class Box {\n  #value = 1;\n  static isBox(object) {\n    return #value in object;\n  }\n}",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Private brand checks 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Private brand checks 的旧写法或误用",
      "broken": "class Box {\n  #value = 1;\n  static isBox(object) {\n    try {\n      object.#value;\n      return true;\n    } catch {\n      return false;\n    }\n  }\n}",
      "fixed": "class Box {\n  #value = 1;\n  static isBox(object) {\n    return #value in object;\n  }\n}",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Private brand checks 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Private brand checks 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2022",
    "title": "RegExp match indices",
    "explanation": [
      "RegExp match indices 是 ES2022 中值得掌握的特性。它的核心作用是：RegExp d 标志会在匹配结果上提供 indices，方便获取匹配文本和捕获组在原字符串中的位置。",
      "典型使用场景：使用 d 标志读取匹配位置。",
      "解决的旧写法问题：拿到捕获文本后还要手动计算起止位置，尤其多个捕获组时容易出错。",
      "适合使用：语法高亮、解析器、编辑器标注等需要每个匹配和捕获组的位置。",
      "继续用传统写法：只关心匹配文本本身时，普通 match/exec 输出更简单。"
    ],
    "exercise": "使用 d 标志读取匹配位置。",
    "starterCode": "const match = /name:(\\w+)/.exec('name:Alice');\nconst start = match.index;\nconst end = start + match[0].length;\nconsole.log(start, end);",
    "errorCode": "const end = start + match[0].length;",
    "correctCode": "const match = /name:(\\w+)/d.exec('name:Alice');\nconsole.log(match.indices[0]);\nconsole.log(match.indices[1]);",
    "practice": {
      "prompt": "独立完成：使用 d 标志读取匹配位置。",
      "starter": "// 使用 RegExp match indices 完成本课练习。\n// 目标：使用 d 标志读取匹配位置。\n\n",
      "answer": "const match = /name:(\\w+)/d.exec('name:Alice');\nconsole.log(match.indices[0]);\nconsole.log(match.indices[1]);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 RegExp match indices 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 RegExp match indices 的旧写法或误用",
      "broken": "const match = /name:(\\w+)/.exec('name:Alice');\nconst start = match.index;\nconst end = start + match[0].length;\nconsole.log(start, end);",
      "fixed": "const match = /name:(\\w+)/d.exec('name:Alice');\nconsole.log(match.indices[0]);\nconsole.log(match.indices[1]);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 RegExp match indices 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 RegExp match indices 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2022",
    "title": "Object.hasOwn",
    "explanation": [
      "Object.hasOwn 是 ES2022 中值得掌握的特性。它的核心作用是：Object.hasOwn 是更安全的自有属性判断方式，避免直接调用对象上的 hasOwnProperty。",
      "典型使用场景：使用 Object.hasOwn 判断对象是否拥有 name 属性。",
      "解决的旧写法问题：obj.hasOwnProperty 可能被对象自身属性覆盖，Object.prototype.hasOwnProperty.call 又太冗长。",
      "适合使用：判断对象是否有某个自有属性，尤其是处理外部输入对象时。",
      "继续用传统写法：需要判断原型链上的属性时，用 in；需要取值时直接访问并配合空值判断。"
    ],
    "exercise": "使用 Object.hasOwn 判断对象是否拥有 name 属性。",
    "starterCode": "const user = { name: 'Alice' };\nconst result = user.hasOwnProperty('name');\nconsole.log(result);",
    "errorCode": "user.hasOwnProperty('name');",
    "correctCode": "const user = { name: 'Alice' };\nconst result = Object.hasOwn(user, 'name');\nconsole.log(result);",
    "practice": {
      "prompt": "独立完成：使用 Object.hasOwn 判断对象是否拥有 name 属性。",
      "starter": "// 使用 Object.hasOwn 完成本课练习。\n// 目标：使用 Object.hasOwn 判断对象是否拥有 name 属性。\n\n",
      "answer": "const user = { name: 'Alice' };\nconst result = Object.hasOwn(user, 'name');\nconsole.log(result);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Object.hasOwn 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Object.hasOwn 的旧写法或误用",
      "broken": "const user = { name: 'Alice' };\nconst result = user.hasOwnProperty('name');\nconsole.log(result);",
      "fixed": "const user = { name: 'Alice' };\nconst result = Object.hasOwn(user, 'name');\nconsole.log(result);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Object.hasOwn 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Object.hasOwn 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2022",
    "title": "Top-level await",
    "explanation": [
      "Top-level await 是 ES2022 中值得掌握的特性。它的核心作用是：Top-level await 允许在模块顶层直接等待异步结果，减少额外的 async 包装函数。",
      "典型使用场景：移除不必要的 async main 包装函数。",
      "解决的旧写法问题：模块顶层需要异步初始化时，以前要包一层 async 函数或导出 Promise。",
      "适合使用：模块加载前必须等待配置、资源或依赖初始化完成。",
      "继续用传统写法：会拖慢模块加载或阻塞依赖图时，应把异步逻辑放到显式函数里按需调用。"
    ],
    "exercise": "移除不必要的 async main 包装函数。",
    "starterCode": "async function main() {\n  const data = await Promise.resolve('ready');\n  console.log(data);\n}\nmain();",
    "errorCode": "async function main() { ... }\nmain();",
    "correctCode": "const data = await Promise.resolve('ready');\nconsole.log(data);",
    "practice": {
      "prompt": "独立完成：移除不必要的 async main 包装函数。",
      "starter": "// 使用 Top-level await 完成本课练习。\n// 目标：移除不必要的 async main 包装函数。\n\n",
      "answer": "const data = await Promise.resolve('ready');\nconsole.log(data);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Top-level await 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Top-level await 的旧写法或误用",
      "broken": "async function main() {\n  const data = await Promise.resolve('ready');\n  console.log(data);\n}\nmain();",
      "fixed": "const data = await Promise.resolve('ready');\nconsole.log(data);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Top-level await 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Top-level await 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2022",
    "title": "Error cause",
    "explanation": [
      "Error cause 是 ES2022 中值得掌握的特性。它的核心作用是：Error cause 用于在抛出新错误时保留原始错误，方便调试错误链路。",
      "典型使用场景：创建一个带 cause 的错误。",
      "解决的旧写法问题：包装错误时容易丢失原始错误，只能手动拼接 message 或加自定义字段。",
      "适合使用：捕获底层错误后抛出更高层语义错误，同时保留原始原因。",
      "继续用传统写法：只是原样继续抛出时不要额外包装；过度包装会让错误链变得啰嗦。"
    ],
    "exercise": "创建一个带 cause 的错误。",
    "starterCode": "try {\n  JSON.parse('{');\n} catch (error) {\n  throw new Error('配置解析失败: ' + error.message);\n}",
    "errorCode": "new Error('配置解析失败: ' + error.message);",
    "correctCode": "try {\n  JSON.parse('{');\n} catch (error) {\n  throw new Error('配置解析失败', { cause: error });\n}",
    "practice": {
      "prompt": "独立完成：创建一个带 cause 的错误。",
      "starter": "// 使用 Error cause 完成本课练习。\n// 目标：创建一个带 cause 的错误。\n\n",
      "answer": "try {\n  JSON.parse('{');\n} catch (error) {\n  throw new Error('配置解析失败', { cause: error });\n}",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Error cause 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Error cause 的旧写法或误用",
      "broken": "try {\n  JSON.parse('{');\n} catch (error) {\n  throw new Error('配置解析失败: ' + error.message);\n}",
      "fixed": "try {\n  JSON.parse('{');\n} catch (error) {\n  throw new Error('配置解析失败', { cause: error });\n}",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Error cause 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Error cause 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2023",
    "title": "Change Array by Copy",
    "explanation": [
      "Change Array by Copy 是 ES2023 中值得掌握的特性。它的核心作用是：toSorted、toReversed、toSpliced 和 with 返回新数组，避免直接修改原数组。",
      "典型使用场景：使用 toSorted 排序，并保留原数组不变。",
      "解决的旧写法问题：sort、reverse、splice 会原地修改数组，容易在状态管理和 UI 更新里产生副作用。",
      "适合使用：需要排序、反转、替换元素但保留原数组不变，尤其是不可变状态更新。",
      "继续用传统写法：明确需要原地修改以节省内存或性能敏感时，传统变异方法更直接。"
    ],
    "exercise": "使用 toSorted 排序，并保留原数组不变。",
    "starterCode": "const numbers = [3, 1, 2];\nconst sorted = numbers.sort();\nconsole.log(numbers, sorted);",
    "errorCode": "numbers.sort();",
    "correctCode": "const numbers = [3, 1, 2];\nconst sorted = numbers.toSorted();\nconsole.log(numbers, sorted);",
    "practice": {
      "prompt": "独立完成：使用 toSorted 排序，并保留原数组不变。",
      "starter": "// 使用 Change Array by Copy 完成本课练习。\n// 目标：使用 toSorted 排序，并保留原数组不变。\n\n",
      "answer": "const numbers = [3, 1, 2];\nconst sorted = numbers.toSorted();\nconsole.log(numbers, sorted);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Change Array by Copy 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Change Array by Copy 的旧写法或误用",
      "broken": "const numbers = [3, 1, 2];\nconst sorted = numbers.sort();\nconsole.log(numbers, sorted);",
      "fixed": "const numbers = [3, 1, 2];\nconst sorted = numbers.toSorted();\nconsole.log(numbers, sorted);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Change Array by Copy 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Change Array by Copy 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2023",
    "title": "Array.findLast / findLastIndex",
    "explanation": [
      "Array.findLast / findLastIndex 是 ES2023 中值得掌握的特性。它的核心作用是：findLast 和 findLastIndex 从数组末尾开始查找，适合寻找最后一次满足条件的元素。",
      "典型使用场景：找到最后一个大于 10 的数字。",
      "解决的旧写法问题：从后往前找元素过去要先 reverse 或手写反向循环，容易改变数组或写出样板代码。",
      "适合使用：需要找到最后一个满足条件的元素或位置。",
      "继续用传统写法：需要全部匹配项用 filter；复杂反向遍历和提前退出逻辑可以用普通循环。"
    ],
    "exercise": "找到最后一个大于 10 的数字。",
    "starterCode": "const numbers = [5, 12, 8, 20];\nconst result = numbers.filter(n => n > 10).pop();\nconsole.log(result);",
    "errorCode": "numbers.filter(n => n > 10).pop();",
    "correctCode": "const numbers = [5, 12, 8, 20];\nconst result = numbers.findLast(n => n > 10);\nconsole.log(result);",
    "practice": {
      "prompt": "独立完成：找到最后一个大于 10 的数字。",
      "starter": "// 使用 Array.findLast / findLastIndex 完成本课练习。\n// 目标：找到最后一个大于 10 的数字。\n\n",
      "answer": "const numbers = [5, 12, 8, 20];\nconst result = numbers.findLast(n => n > 10);\nconsole.log(result);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Array.findLast / findLastIndex 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Array.findLast / findLastIndex 的旧写法或误用",
      "broken": "const numbers = [5, 12, 8, 20];\nconst result = numbers.filter(n => n > 10).pop();\nconsole.log(result);",
      "fixed": "const numbers = [5, 12, 8, 20];\nconst result = numbers.findLast(n => n > 10);\nconsole.log(result);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Array.findLast / findLastIndex 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Array.findLast / findLastIndex 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2023",
    "title": "Symbols as WeakMap keys",
    "explanation": [
      "Symbols as WeakMap keys 是 ES2023 中值得掌握的特性。它的核心作用是：ES2023 允许非注册 Symbol 作为 WeakMap 键，适合创建不可枚举、不可猜测的弱关联令牌。",
      "典型使用场景：使用 Symbol 作为 WeakMap 的键。",
      "解决的旧写法问题：WeakMap 过去只能用对象做 key，想用唯一 token 关联弱引用元数据时选择有限。",
      "适合使用：需要用不可注册 Symbol 作为不会冲突的弱键来存储元信息。",
      "继续用传统写法：需要可枚举、可序列化或跨模块共享 key 时，普通对象 key 或 Symbol.for 不适合这个弱键场景。"
    ],
    "exercise": "使用 Symbol 作为 WeakMap 的键。",
    "starterCode": "const token = {};\nconst map = new WeakMap();\nmap.set(token, 'secret');\nconsole.log(map.get(token));",
    "errorCode": "const token = {};",
    "correctCode": "const token = Symbol('token');\nconst map = new WeakMap();\nmap.set(token, 'secret');\nconsole.log(map.get(token));",
    "practice": {
      "prompt": "独立完成：使用 Symbol 作为 WeakMap 的键。",
      "starter": "// 使用 Symbols as WeakMap keys 完成本课练习。\n// 目标：使用 Symbol 作为 WeakMap 的键。\n\n",
      "answer": "const token = Symbol('token');\nconst map = new WeakMap();\nmap.set(token, 'secret');\nconsole.log(map.get(token));",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Symbols as WeakMap keys 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Symbols as WeakMap keys 的旧写法或误用",
      "broken": "const token = {};\nconst map = new WeakMap();\nmap.set(token, 'secret');\nconsole.log(map.get(token));",
      "fixed": "const token = Symbol('token');\nconst map = new WeakMap();\nmap.set(token, 'secret');\nconsole.log(map.get(token));",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Symbols as WeakMap keys 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Symbols as WeakMap keys 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2024",
    "title": "Object.groupBy / Map.groupBy",
    "explanation": [
      "Object.groupBy / Map.groupBy 是 ES2024 中值得掌握的特性。它的核心作用是：ES2024 引入 Object.groupBy 和 Map.groupBy，能根据回调函数将可迭代数据分组，适合处理分类数据。",
      "典型使用场景：将人员数组按性别分组。",
      "解决的旧写法问题：数组分组过去常写 reduce 手动初始化桶，样板代码多且容易写错。",
      "适合使用：需要按某个计算结果把列表分组；字符串 key 用 Object.groupBy，任意 key 用 Map.groupBy。",
      "继续用传统写法：分组过程中还要累加统计、排序或复杂合并时，reduce 或显式循环更灵活。"
    ],
    "exercise": "将人员数组按性别分组。",
    "starterCode": "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = {};\nfor (const person of people) {\n  const key = person.gender;\n  if (!groups[key]) groups[key] = [];\n  groups[key].push(person);\n}",
    "errorCode": "for (const person of people) {\n  const key = person.gender;\n  if (!groups[key]) groups[key] = [];\n  groups[key].push(person);\n}",
    "correctCode": "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = Object.groupBy(people, person => person.gender);",
    "practice": {
      "prompt": "独立完成：将人员数组按性别分组。",
      "starter": "// 使用 Object.groupBy / Map.groupBy 完成本课练习。\n// 目标：将人员数组按性别分组。\n\n",
      "answer": "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = Object.groupBy(people, person => person.gender);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Object.groupBy / Map.groupBy 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Object.groupBy / Map.groupBy 的旧写法或误用",
      "broken": "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = {};\nfor (const person of people) {\n  const key = person.gender;\n  if (!groups[key]) groups[key] = [];\n  groups[key].push(person);\n}",
      "fixed": "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = Object.groupBy(people, person => person.gender);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Object.groupBy / Map.groupBy 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Object.groupBy / Map.groupBy 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2024",
    "title": "Promise.withResolvers",
    "explanation": [
      "Promise.withResolvers 是 ES2024 中值得掌握的特性。它的核心作用是：Promise.withResolvers 返回 promise、resolve 和 reject，适合需要把控制权交给外部事件的场景。",
      "典型使用场景：使用 Promise.withResolvers 创建可外部 resolve 的 Promise。",
      "解决的旧写法问题：创建外部 resolve/reject 句柄时，以前要在 Promise 构造器外声明变量，样板且不优雅。",
      "适合使用：需要把 Promise 的完成控制权交给事件回调、队列或外部流程。",
      "继续用传统写法：普通异步操作能直接 return new Promise 或 async 函数时，不要额外暴露 resolver。"
    ],
    "exercise": "使用 Promise.withResolvers 创建可外部 resolve 的 Promise。",
    "starterCode": "let resolve;\nconst promise = new Promise((done) => {\n  resolve = done;\n});\nresolve('ok');\npromise.then(console.log);",
    "errorCode": "let resolve;\nconst promise = new Promise((done) => {\n  resolve = done;\n});",
    "correctCode": "const { promise, resolve } = Promise.withResolvers();\nresolve('ok');\npromise.then(console.log);",
    "practice": {
      "prompt": "独立完成：使用 Promise.withResolvers 创建可外部 resolve 的 Promise。",
      "starter": "// 使用 Promise.withResolvers 完成本课练习。\n// 目标：使用 Promise.withResolvers 创建可外部 resolve 的 Promise。\n\n",
      "answer": "const { promise, resolve } = Promise.withResolvers();\nresolve('ok');\npromise.then(console.log);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Promise.withResolvers 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Promise.withResolvers 的旧写法或误用",
      "broken": "let resolve;\nconst promise = new Promise((done) => {\n  resolve = done;\n});\nresolve('ok');\npromise.then(console.log);",
      "fixed": "const { promise, resolve } = Promise.withResolvers();\nresolve('ok');\npromise.then(console.log);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Promise.withResolvers 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Promise.withResolvers 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2024",
    "title": "ArrayBuffer transfer",
    "explanation": [
      "ArrayBuffer transfer 是 ES2024 中值得掌握的特性。它的核心作用是：ArrayBuffer transfer 可以把缓冲区内容转移到新缓冲区，并让旧缓冲区失效，适合二进制数据所有权转移。",
      "典型使用场景：使用 transfer 转移 ArrayBuffer。",
      "解决的旧写法问题：转移二进制缓冲区所有权过去常依赖 postMessage 等特定 API，普通代码里不够直接。",
      "适合使用：需要把大型 ArrayBuffer 的所有权移动给新缓冲区，避免复制成本。",
      "继续用传统写法：仍需继续使用原缓冲区，或数据很小复制成本无关紧要时，slice 更直观。"
    ],
    "exercise": "使用 transfer 转移 ArrayBuffer。",
    "starterCode": "const buffer = new ArrayBuffer(8);\nconst copy = buffer.slice(0);\nconsole.log(copy.byteLength);",
    "errorCode": "buffer.slice(0);",
    "correctCode": "const buffer = new ArrayBuffer(8);\nconst moved = buffer.transfer();\nconsole.log(moved.byteLength);\nconsole.log(buffer.detached);",
    "practice": {
      "prompt": "独立完成：使用 transfer 转移 ArrayBuffer。",
      "starter": "// 使用 ArrayBuffer transfer 完成本课练习。\n// 目标：使用 transfer 转移 ArrayBuffer。\n\n",
      "answer": "const buffer = new ArrayBuffer(8);\nconst moved = buffer.transfer();\nconsole.log(moved.byteLength);\nconsole.log(buffer.detached);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 ArrayBuffer transfer 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 ArrayBuffer transfer 的旧写法或误用",
      "broken": "const buffer = new ArrayBuffer(8);\nconst copy = buffer.slice(0);\nconsole.log(copy.byteLength);",
      "fixed": "const buffer = new ArrayBuffer(8);\nconst moved = buffer.transfer();\nconsole.log(moved.byteLength);\nconsole.log(buffer.detached);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 ArrayBuffer transfer 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 ArrayBuffer transfer 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2024",
    "title": "Resizable ArrayBuffer",
    "explanation": [
      "Resizable ArrayBuffer 是 ES2024 中值得掌握的特性。它的核心作用是：Resizable ArrayBuffer 允许创建带 maxByteLength 的可调整缓冲区，并用 resize 改变当前长度。",
      "典型使用场景：创建一个可增长的 ArrayBuffer 并调整大小。",
      "解决的旧写法问题：固定长度 ArrayBuffer 在数据增长时只能重新分配并复制。",
      "适合使用：处理可增长二进制数据、流式协议或需要预留最大容量的底层场景。",
      "继续用传统写法：数据大小已知或业务层只处理普通数组/字符串时，固定缓冲区更简单。"
    ],
    "exercise": "创建一个可增长的 ArrayBuffer 并调整大小。",
    "starterCode": "let buffer = new ArrayBuffer(8);\nconst bigger = new ArrayBuffer(16);\nnew Uint8Array(bigger).set(new Uint8Array(buffer));\nbuffer = bigger;\nconsole.log(buffer.byteLength);",
    "errorCode": "const bigger = new ArrayBuffer(16);",
    "correctCode": "const buffer = new ArrayBuffer(8, { maxByteLength: 16 });\nbuffer.resize(16);\nconsole.log(buffer.resizable, buffer.byteLength);",
    "practice": {
      "prompt": "独立完成：创建一个可增长的 ArrayBuffer 并调整大小。",
      "starter": "// 使用 Resizable ArrayBuffer 完成本课练习。\n// 目标：创建一个可增长的 ArrayBuffer 并调整大小。\n\n",
      "answer": "const buffer = new ArrayBuffer(8, { maxByteLength: 16 });\nbuffer.resize(16);\nconsole.log(buffer.resizable, buffer.byteLength);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Resizable ArrayBuffer 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Resizable ArrayBuffer 的旧写法或误用",
      "broken": "let buffer = new ArrayBuffer(8);\nconst bigger = new ArrayBuffer(16);\nnew Uint8Array(bigger).set(new Uint8Array(buffer));\nbuffer = bigger;\nconsole.log(buffer.byteLength);",
      "fixed": "const buffer = new ArrayBuffer(8, { maxByteLength: 16 });\nbuffer.resize(16);\nconsole.log(buffer.resizable, buffer.byteLength);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Resizable ArrayBuffer 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Resizable ArrayBuffer 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2024",
    "title": "RegExp v flag",
    "explanation": [
      "RegExp v flag 是 ES2024 中值得掌握的特性。它的核心作用是：RegExp v 标志增强 Unicode 匹配能力，支持字符串属性和更强的字符集合表达。",
      "典型使用场景：使用 v 标志匹配 emoji 字符串属性。",
      "解决的旧写法问题：复杂 Unicode 字符集合和集合运算过去需要冗长或不准确的正则表达。",
      "适合使用：需要 Unicode 字符集交集、差集或更严格的字符串属性匹配。",
      "继续用传统写法：简单 ASCII 或普通文本匹配不要上复杂标志；可读性会更重要。"
    ],
    "exercise": "使用 v 标志匹配 emoji 字符串属性。",
    "starterCode": "const regex = /\\p{Emoji}/u;\nconsole.log(regex.test('👨‍👩‍👧‍👦'));",
    "errorCode": "/\\p{Emoji}/u",
    "correctCode": "const regex = /\\p{RGI_Emoji}/v;\nconsole.log(regex.test('👨‍👩‍👧‍👦'));",
    "practice": {
      "prompt": "独立完成：使用 v 标志匹配 emoji 字符串属性。",
      "starter": "// 使用 RegExp v flag 完成本课练习。\n// 目标：使用 v 标志匹配 emoji 字符串属性。\n\n",
      "answer": "const regex = /\\p{RGI_Emoji}/v;\nconsole.log(regex.test('👨‍👩‍👧‍👦'));",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 RegExp v flag 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 RegExp v flag 的旧写法或误用",
      "broken": "const regex = /\\p{Emoji}/u;\nconsole.log(regex.test('👨‍👩‍👧‍👦'));",
      "fixed": "const regex = /\\p{RGI_Emoji}/v;\nconsole.log(regex.test('👨‍👩‍👧‍👦'));",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 RegExp v flag 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 RegExp v flag 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2024",
    "title": "String isWellFormed / toWellFormed",
    "explanation": [
      "String isWellFormed / toWellFormed 是 ES2024 中值得掌握的特性。它的核心作用是：isWellFormed 和 toWellFormed 用于检测和修复字符串中的孤立代理项，避免 Unicode 编码问题。",
      "典型使用场景：使用 toWellFormed 修复不合法字符串。",
      "解决的旧写法问题：字符串中孤立代理项会让 Unicode 处理、编码和传输出现难排查的问题。",
      "适合使用：处理外部输入、网络传输、编码前校验，或需要修复不合法 Unicode 字符串。",
      "继续用传统写法：纯内部 ASCII 文本或已经由可靠来源保证合法时，不必每次都检查。"
    ],
    "exercise": "使用 toWellFormed 修复不合法字符串。",
    "starterCode": "const text = '�';\nconsole.log(encodeURIComponent(text));",
    "errorCode": "encodeURIComponent(text);",
    "correctCode": "const text = '�';\nconsole.log(text.isWellFormed());\nconsole.log(text.toWellFormed());",
    "practice": {
      "prompt": "独立完成：使用 toWellFormed 修复不合法字符串。",
      "starter": "// 使用 String isWellFormed / toWellFormed 完成本课练习。\n// 目标：使用 toWellFormed 修复不合法字符串。\n\n",
      "answer": "const text = '�';\nconsole.log(text.isWellFormed());\nconsole.log(text.toWellFormed());",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 String isWellFormed / toWellFormed 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 String isWellFormed / toWellFormed 的旧写法或误用",
      "broken": "const text = '�';\nconsole.log(encodeURIComponent(text));",
      "fixed": "const text = '�';\nconsole.log(text.isWellFormed());\nconsole.log(text.toWellFormed());",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 String isWellFormed / toWellFormed 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 String isWellFormed / toWellFormed 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2025",
    "title": "Set methods",
    "explanation": [
      "Set methods 是 ES2025 中值得掌握的特性。它的核心作用是：ES2025 为 Set 增加 union、intersection、difference 等集合操作方法，让集合运算更直观。",
      "典型使用场景：使用 intersection 求两个集合的交集。",
      "解决的旧写法问题：交集、并集、差集过去要手写循环或把 Set 转数组再过滤，语义分散。",
      "适合使用：需要表达集合运算，例如 union、intersection、difference、isSubsetOf。",
      "继续用传统写法：需要保留重复项或顺序相关计算时，数组方法更符合数据模型。"
    ],
    "exercise": "使用 intersection 求两个集合的交集。",
    "starterCode": "const a = new Set([1, 2, 3]);\nconst b = new Set([2, 3, 4]);\nconst both = new Set([...a].filter(item => b.has(item)));\nconsole.log([...both]);",
    "errorCode": "new Set([...a].filter(item => b.has(item)));",
    "correctCode": "const a = new Set([1, 2, 3]);\nconst b = new Set([2, 3, 4]);\nconst both = a.intersection(b);\nconsole.log([...both]);",
    "practice": {
      "prompt": "独立完成：使用 intersection 求两个集合的交集。",
      "starter": "// 使用 Set methods 完成本课练习。\n// 目标：使用 intersection 求两个集合的交集。\n\n",
      "answer": "const a = new Set([1, 2, 3]);\nconst b = new Set([2, 3, 4]);\nconst both = a.intersection(b);\nconsole.log([...both]);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Set methods 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Set methods 的旧写法或误用",
      "broken": "const a = new Set([1, 2, 3]);\nconst b = new Set([2, 3, 4]);\nconst both = new Set([...a].filter(item => b.has(item)));\nconsole.log([...both]);",
      "fixed": "const a = new Set([1, 2, 3]);\nconst b = new Set([2, 3, 4]);\nconst both = a.intersection(b);\nconsole.log([...both]);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Set methods 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Set methods 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2025",
    "title": "Iterator helpers",
    "explanation": [
      "Iterator helpers 是 ES2025 中值得掌握的特性。它的核心作用是：Iterator helpers 为迭代器增加 map、filter、take、toArray 等链式处理能力。",
      "典型使用场景：使用迭代器 helper 过滤并转换数组迭代器。",
      "解决的旧写法问题：迭代器想 map/filter/take 时，过去常要先转数组，失去惰性并增加内存。",
      "适合使用：处理可能很长或按需产生的数据流，希望链式、惰性地转换。",
      "继续用传统写法：数据本来就是小数组时，数组方法生态更成熟也更直观。"
    ],
    "exercise": "使用迭代器 helper 过滤并转换数组迭代器。",
    "starterCode": "const result = [1, 2, 3, 4]\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10);\nconsole.log(result);",
    "errorCode": ".filter(n => n % 2 === 0).map(n => n * 10);",
    "correctCode": "const result = [1, 2, 3, 4]\n  .values()\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10)\n  .toArray();\nconsole.log(result);",
    "practice": {
      "prompt": "独立完成：使用迭代器 helper 过滤并转换数组迭代器。",
      "starter": "// 使用 Iterator helpers 完成本课练习。\n// 目标：使用迭代器 helper 过滤并转换数组迭代器。\n\n",
      "answer": "const result = [1, 2, 3, 4]\n  .values()\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10)\n  .toArray();\nconsole.log(result);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Iterator helpers 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Iterator helpers 的旧写法或误用",
      "broken": "const result = [1, 2, 3, 4]\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10);\nconsole.log(result);",
      "fixed": "const result = [1, 2, 3, 4]\n  .values()\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10)\n  .toArray();\nconsole.log(result);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Iterator helpers 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Iterator helpers 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2025",
    "title": "RegExp.escape",
    "explanation": [
      "RegExp.escape 是 ES2025 中值得掌握的特性。它的核心作用是：RegExp.escape 可以把普通字符串安全转义为正则片段，避免用户输入影响正则结构。",
      "典型使用场景：使用 RegExp.escape 根据用户输入创建正则。",
      "解决的旧写法问题：把用户输入拼进正则时，手写转义容易漏掉特殊字符，造成错误匹配甚至安全问题。",
      "适合使用：需要把任意字符串当作正则里的普通文本片段。",
      "继续用传统写法：输入本来就是可信的正则表达式语法时，不应该 escape，否则会改变语义。"
    ],
    "exercise": "使用 RegExp.escape 根据用户输入创建正则。",
    "starterCode": "const input = 'a+b';\nconst regex = new RegExp(input);\nconsole.log(regex.test('a+b'));",
    "errorCode": "new RegExp(input);",
    "correctCode": "const input = 'a+b';\nconst regex = new RegExp(RegExp.escape(input));\nconsole.log(regex.test('a+b'));",
    "practice": {
      "prompt": "独立完成：使用 RegExp.escape 根据用户输入创建正则。",
      "starter": "// 使用 RegExp.escape 完成本课练习。\n// 目标：使用 RegExp.escape 根据用户输入创建正则。\n\n",
      "answer": "const input = 'a+b';\nconst regex = new RegExp(RegExp.escape(input));\nconsole.log(regex.test('a+b'));",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 RegExp.escape 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 RegExp.escape 的旧写法或误用",
      "broken": "const input = 'a+b';\nconst regex = new RegExp(input);\nconsole.log(regex.test('a+b'));",
      "fixed": "const input = 'a+b';\nconst regex = new RegExp(RegExp.escape(input));\nconsole.log(regex.test('a+b'));",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 RegExp.escape 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 RegExp.escape 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2025",
    "title": "Promise.try",
    "explanation": [
      "Promise.try 是 ES2025 中值得掌握的特性。它的核心作用是：Promise.try 会把同步异常和异步结果统一包装进 Promise 链，适合规范化任务入口。",
      "典型使用场景：使用 Promise.try 包装可能同步抛错的函数。",
      "解决的旧写法问题：同时兼容同步抛错和异步返回 Promise 时，过去要手写 try/catch 再 Promise.resolve。",
      "适合使用：封装可能同步失败也可能返回 Promise 的回调，并统一进入 Promise 链。",
      "继续用传统写法：普通 async 函数已经能表达的流程，不必为了形式统一再包一层。"
    ],
    "exercise": "使用 Promise.try 包装可能同步抛错的函数。",
    "starterCode": "try {\n  const value = JSON.parse('{');\n  Promise.resolve(value).then(console.log);\n} catch (error) {\n  Promise.reject(error).catch(console.log);\n}",
    "errorCode": "try { ... } catch (error) { ... }",
    "correctCode": "Promise.try(() => JSON.parse('{'))\n  .then(console.log)\n  .catch(console.log);",
    "practice": {
      "prompt": "独立完成：使用 Promise.try 包装可能同步抛错的函数。",
      "starter": "// 使用 Promise.try 完成本课练习。\n// 目标：使用 Promise.try 包装可能同步抛错的函数。\n\n",
      "answer": "Promise.try(() => JSON.parse('{'))\n  .then(console.log)\n  .catch(console.log);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Promise.try 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Promise.try 的旧写法或误用",
      "broken": "try {\n  const value = JSON.parse('{');\n  Promise.resolve(value).then(console.log);\n} catch (error) {\n  Promise.reject(error).catch(console.log);\n}",
      "fixed": "Promise.try(() => JSON.parse('{'))\n  .then(console.log)\n  .catch(console.log);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Promise.try 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Promise.try 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2025",
    "title": "Import Attributes / JSON Modules",
    "explanation": [
      "Import Attributes / JSON Modules 是 ES2025 中值得掌握的特性。它的核心作用是：Import Attributes 让模块导入可以携带类型信息，JSON Modules 则让 JSON 文件以标准模块形式导入。",
      "典型使用场景：使用 import attributes 导入 JSON 配置。",
      "解决的旧写法问题：导入 JSON 等非 JS 资源时，过去缺少标准化的模块类型声明，容易依赖打包器约定。",
      "适合使用：需要以模块方式导入 JSON，并明确声明资源类型。",
      "继续用传统写法：运行时 URL、用户选择文件或需要动态校验的数据，用 fetch/解析函数更灵活。"
    ],
    "exercise": "使用 import attributes 导入 JSON 配置。",
    "starterCode": "const response = await fetch('./config.json');\nconst config = await response.json();\nconsole.log(config.name);",
    "errorCode": "await fetch('./config.json');",
    "correctCode": "import config from './config.json' with { type: 'json' };\nconsole.log(config.name);",
    "practice": {
      "prompt": "独立完成：使用 import attributes 导入 JSON 配置。",
      "starter": "// 使用 Import Attributes / JSON Modules 完成本课练习。\n// 目标：使用 import attributes 导入 JSON 配置。\n\n",
      "answer": "import config from './config.json' with { type: 'json' };\nconsole.log(config.name);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Import Attributes / JSON Modules 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Import Attributes / JSON Modules 的旧写法或误用",
      "broken": "const response = await fetch('./config.json');\nconst config = await response.json();\nconsole.log(config.name);",
      "fixed": "import config from './config.json' with { type: 'json' };\nconsole.log(config.name);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Import Attributes / JSON Modules 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Import Attributes / JSON Modules 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ES2025",
    "title": "RegExp modifiers",
    "explanation": [
      "RegExp modifiers 是 ES2025 中值得掌握的特性。它的核心作用是：RegExp modifiers 允许在正则表达式内部局部开启或关闭标志，使复杂匹配更精确。",
      "典型使用场景：只在局部片段中开启忽略大小写匹配。",
      "解决的旧写法问题：正则某一小段需要不同标志时，以前只能拆多个正则或扩大标志影响范围。",
      "适合使用：需要在同一个正则里对局部片段开启或关闭 i、m、s 等行为。",
      "继续用传统写法：简单模式直接使用整体 flags；局部修饰过多会让正则很难读。"
    ],
    "exercise": "只在局部片段中开启忽略大小写匹配。",
    "starterCode": "const regex = /hello world/i;\nconsole.log(regex.test('HELLO world'));",
    "errorCode": "/hello world/i",
    "correctCode": "const regex = /(?i:hello) world/;\nconsole.log(regex.test('HELLO world'));",
    "practice": {
      "prompt": "独立完成：只在局部片段中开启忽略大小写匹配。",
      "starter": "// 使用 RegExp modifiers 完成本课练习。\n// 目标：只在局部片段中开启忽略大小写匹配。\n\n",
      "answer": "const regex = /(?i:hello) world/;\nconsole.log(regex.test('HELLO world'));",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 RegExp modifiers 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 RegExp modifiers 的旧写法或误用",
      "broken": "const regex = /hello world/i;\nconsole.log(regex.test('HELLO world'));",
      "fixed": "const regex = /(?i:hello) world/;\nconsole.log(regex.test('HELLO world'));",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 RegExp modifiers 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 RegExp modifiers 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ESNext",
    "title": "Array.fromAsync",
    "explanation": [
      "Array.fromAsync 是 ESNext 中值得掌握的特性。它的核心作用是：Array.fromAsync 可以从异步可迭代对象或 Promise 集合创建数组，是 Array.from 的异步版本。",
      "典型使用场景：使用 Array.fromAsync 收集异步迭代结果。",
      "解决的旧写法问题：异步可迭代对象转数组过去要手写 for await...of 收集结果。",
      "适合使用：需要把异步迭代结果完整收集成数组，再进行后续数组处理。",
      "继续用传统写法：数据量很大或可以流式处理时，不要一次性收集，继续用 for await...of。"
    ],
    "exercise": "使用 Array.fromAsync 收集异步迭代结果。",
    "starterCode": "async function collect(source) {\n  const result = [];\n  for await (const item of source) {\n    result.push(item);\n  }\n  return result;\n}",
    "errorCode": "const result = [];\nfor await (const item of source) {\n  result.push(item);\n}",
    "correctCode": "async function collect(source) {\n  return Array.fromAsync(source);\n}",
    "practice": {
      "prompt": "独立完成：使用 Array.fromAsync 收集异步迭代结果。",
      "starter": "// 使用 Array.fromAsync 完成本课练习。\n// 目标：使用 Array.fromAsync 收集异步迭代结果。\n\n",
      "answer": "async function collect(source) {\n  return Array.fromAsync(source);\n}",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Array.fromAsync 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Array.fromAsync 的旧写法或误用",
      "broken": "async function collect(source) {\n  const result = [];\n  for await (const item of source) {\n    result.push(item);\n  }\n  return result;\n}",
      "fixed": "async function collect(source) {\n  return Array.fromAsync(source);\n}",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Array.fromAsync 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Array.fromAsync 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ESNext",
    "title": "Error.isError",
    "explanation": [
      "Error.isError 是 ESNext 中值得掌握的特性。它的核心作用是：Error.isError 提供标准方式判断一个值是否为 Error 对象，比 instanceof Error 更适合跨 realm 场景。",
      "典型使用场景：使用 Error.isError 判断捕获到的值。",
      "解决的旧写法问题：instanceof Error 在跨 realm 场景可能失效，自定义判断又不统一。",
      "适合使用：需要可靠判断一个值是不是 Error 对象，尤其是库代码或跨 iframe/worker 数据。",
      "继续用传统写法：只是在 catch 中处理当前抛出的错误，直接使用 error 对象并读取 message 通常够用。"
    ],
    "exercise": "使用 Error.isError 判断捕获到的值。",
    "starterCode": "try {\n  JSON.parse('{');\n} catch (value) {\n  console.log(value instanceof Error);\n}",
    "errorCode": "value instanceof Error",
    "correctCode": "try {\n  JSON.parse('{');\n} catch (value) {\n  console.log(Error.isError(value));\n}",
    "practice": {
      "prompt": "独立完成：使用 Error.isError 判断捕获到的值。",
      "starter": "// 使用 Error.isError 完成本课练习。\n// 目标：使用 Error.isError 判断捕获到的值。\n\n",
      "answer": "try {\n  JSON.parse('{');\n} catch (value) {\n  console.log(Error.isError(value));\n}",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Error.isError 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Error.isError 的旧写法或误用",
      "broken": "try {\n  JSON.parse('{');\n} catch (value) {\n  console.log(value instanceof Error);\n}",
      "fixed": "try {\n  JSON.parse('{');\n} catch (value) {\n  console.log(Error.isError(value));\n}",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Error.isError 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Error.isError 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ESNext",
    "title": "Uint8Array Base64 / Hex",
    "explanation": [
      "Uint8Array Base64 / Hex 是 ESNext 中值得掌握的特性。它的核心作用是：Uint8Array toBase64、fromBase64、toHex、fromHex 等方法让二进制和文本编码转换标准化。",
      "典型使用场景：使用 Uint8Array.fromBase64 解码 Base64 字符串。",
      "解决的旧写法问题：二进制数据和 Base64/Hex 互转过去常依赖 btoa/atob、Buffer 或手写循环。",
      "适合使用：需要在浏览器标准 API 中处理字节数组编码和解码。",
      "继续用传统写法：字符串编码、文本解码仍应使用 TextEncoder/TextDecoder；Node 专属代码可继续用 Buffer。"
    ],
    "exercise": "使用 Uint8Array.fromBase64 解码 Base64 字符串。",
    "starterCode": "const text = atob('SGVsbG8=');\nconst bytes = Uint8Array.from(text, ch => ch.charCodeAt(0));\nconsole.log(bytes);",
    "errorCode": "atob('SGVsbG8=')",
    "correctCode": "const bytes = Uint8Array.fromBase64('SGVsbG8=');\nconsole.log(bytes.toBase64());",
    "practice": {
      "prompt": "独立完成：使用 Uint8Array.fromBase64 解码 Base64 字符串。",
      "starter": "// 使用 Uint8Array Base64 / Hex 完成本课练习。\n// 目标：使用 Uint8Array.fromBase64 解码 Base64 字符串。\n\n",
      "answer": "const bytes = Uint8Array.fromBase64('SGVsbG8=');\nconsole.log(bytes.toBase64());",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Uint8Array Base64 / Hex 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Uint8Array Base64 / Hex 的旧写法或误用",
      "broken": "const text = atob('SGVsbG8=');\nconst bytes = Uint8Array.from(text, ch => ch.charCodeAt(0));\nconsole.log(bytes);",
      "fixed": "const bytes = Uint8Array.fromBase64('SGVsbG8=');\nconsole.log(bytes.toBase64());",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Uint8Array Base64 / Hex 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Uint8Array Base64 / Hex 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ESNext",
    "title": "Map upsert",
    "explanation": [
      "Map upsert 是 ESNext 中值得掌握的特性。它的核心作用是：Map upsert 方法用于读取或插入默认值，避免手写 has、get、set 组合逻辑。",
      "典型使用场景：使用 getOrInsert 为 Map 中不存在的键设置默认数组。",
      "解决的旧写法问题：Map 中“有则更新、无则创建”过去要写 has/get/set 三步，容易重复查找。",
      "适合使用：计数、分组、缓存初始化等需要按 key 原子地插入或更新值的场景。",
      "继续用传统写法：逻辑只有简单 set，或更新规则很特殊需要多步判断时，显式代码更容易读。"
    ],
    "exercise": "使用 getOrInsert 为 Map 中不存在的键设置默认数组。",
    "starterCode": "const groups = new Map();\nconst key = 'js';\nif (!groups.has(key)) {\n  groups.set(key, []);\n}\ngroups.get(key).push('ES');",
    "errorCode": "if (!groups.has(key)) {\n  groups.set(key, []);\n}",
    "correctCode": "const groups = new Map();\nconst key = 'js';\ngroups.getOrInsert(key, []).push('ES');",
    "practice": {
      "prompt": "独立完成：使用 getOrInsert 为 Map 中不存在的键设置默认数组。",
      "starter": "// 使用 Map upsert 完成本课练习。\n// 目标：使用 getOrInsert 为 Map 中不存在的键设置默认数组。\n\n",
      "answer": "const groups = new Map();\nconst key = 'js';\ngroups.getOrInsert(key, []).push('ES');",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Map upsert 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Map upsert 的旧写法或误用",
      "broken": "const groups = new Map();\nconst key = 'js';\nif (!groups.has(key)) {\n  groups.set(key, []);\n}\ngroups.get(key).push('ES');",
      "fixed": "const groups = new Map();\nconst key = 'js';\ngroups.getOrInsert(key, []).push('ES');",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Map upsert 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Map upsert 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ESNext",
    "title": "JSON.parse source text access",
    "explanation": [
      "JSON.parse source text access 是 ESNext 中值得掌握的特性。它的核心作用是：JSON.parse source text access 让 reviver 能读取原始 JSON 片段，适合处理大整数等会丢失精度的值。",
      "典型使用场景：在 reviver 中读取原始 source 文本。",
      "解决的旧写法问题：JSON.parse 后只得到值，无法知道某个值在原始文本里的写法，精度和审计场景受限。",
      "适合使用：需要保留大数字原文、做解析审计，或根据原始 JSON 片段做更精细处理。",
      "继续用传统写法：普通配置和接口数据只关心解析后的值时，常规 JSON.parse 更简单。"
    ],
    "exercise": "在 reviver 中读取原始 source 文本。",
    "starterCode": "const data = JSON.parse('{\"big\":9007199254740993}');\nconsole.log(data.big);",
    "errorCode": "JSON.parse('{\"big\":9007199254740993}')",
    "correctCode": "const data = JSON.parse('{\"big\":9007199254740993}', (key, value, context) => {\n  return key === 'big' ? BigInt(context.source) : value;\n});\nconsole.log(data.big);",
    "practice": {
      "prompt": "独立完成：在 reviver 中读取原始 source 文本。",
      "starter": "// 使用 JSON.parse source text access 完成本课练习。\n// 目标：在 reviver 中读取原始 source 文本。\n\n",
      "answer": "const data = JSON.parse('{\"big\":9007199254740993}', (key, value, context) => {\n  return key === 'big' ? BigInt(context.source) : value;\n});\nconsole.log(data.big);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 JSON.parse source text access 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 JSON.parse source text access 的旧写法或误用",
      "broken": "const data = JSON.parse('{\"big\":9007199254740993}');\nconsole.log(data.big);",
      "fixed": "const data = JSON.parse('{\"big\":9007199254740993}', (key, value, context) => {\n  return key === 'big' ? BigInt(context.source) : value;\n});\nconsole.log(data.big);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 JSON.parse source text access 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 JSON.parse source text access 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ESNext",
    "title": "Math.sumPrecise",
    "explanation": [
      "Math.sumPrecise 是 ESNext 中值得掌握的特性。它的核心作用是：Math.sumPrecise 用更稳定的方式求和，减少浮点数累加误差对结果的影响。",
      "典型使用场景：使用 Math.sumPrecise 计算浮点数组总和。",
      "解决的旧写法问题：浮点数直接累加会遇到 0.1 + 0.2 这类精度误差，手写补偿算法又复杂。",
      "适合使用：需要对浮点数组求和并尽量减少累积误差。",
      "继续用传统写法：金额等十进制精确业务仍应使用整数分、Decimal 库或后端精确类型，而不是只靠浮点求和。"
    ],
    "exercise": "使用 Math.sumPrecise 计算浮点数组总和。",
    "starterCode": "const values = [0.1, 0.2, 0.3];\nconst total = values.reduce((sum, value) => sum + value, 0);\nconsole.log(total);",
    "errorCode": "values.reduce((sum, value) => sum + value, 0);",
    "correctCode": "const values = [0.1, 0.2, 0.3];\nconst total = Math.sumPrecise(values);\nconsole.log(total);",
    "practice": {
      "prompt": "独立完成：使用 Math.sumPrecise 计算浮点数组总和。",
      "starter": "// 使用 Math.sumPrecise 完成本课练习。\n// 目标：使用 Math.sumPrecise 计算浮点数组总和。\n\n",
      "answer": "const values = [0.1, 0.2, 0.3];\nconst total = Math.sumPrecise(values);\nconsole.log(total);",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Math.sumPrecise 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Math.sumPrecise 的旧写法或误用",
      "broken": "const values = [0.1, 0.2, 0.3];\nconst total = values.reduce((sum, value) => sum + value, 0);\nconsole.log(total);",
      "fixed": "const values = [0.1, 0.2, 0.3];\nconst total = Math.sumPrecise(values);\nconsole.log(total);",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Math.sumPrecise 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Math.sumPrecise 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    "version": "ESNext",
    "title": "Temporal",
    "explanation": [
      "Temporal 是 ESNext 中值得掌握的特性。它的核心作用是：Temporal 是新的日期时间 API，用于替代 Date 在时区、日历和不可变数据方面的长期痛点。",
      "典型使用场景：使用 Temporal.PlainDate 表示一个不包含时区的日期。",
      "解决的旧写法问题：Date 同时混合时间点、时区和本地日期，解析和时区行为长期容易出错。",
      "适合使用：需要明确区分日期、时间、时区、持续时间，或构建可靠的日历/时区逻辑。",
      "继续用传统写法：只要记录当前时间戳或和旧 API 交互时，Date 仍然简单且兼容性最好。"
    ],
    "exercise": "使用 Temporal.PlainDate 表示一个不包含时区的日期。",
    "starterCode": "const date = new Date('2026-04-29T00:00:00Z');\nconsole.log(date.toISOString().slice(0, 10));",
    "errorCode": "new Date('2026-04-29T00:00:00Z');",
    "correctCode": "const date = Temporal.PlainDate.from('2026-04-29');\nconsole.log(date.toString());",
    "practice": {
      "prompt": "独立完成：使用 Temporal.PlainDate 表示一个不包含时区的日期。",
      "starter": "// 使用 Temporal 完成本课练习。\n// 目标：使用 Temporal.PlainDate 表示一个不包含时区的日期。\n\n",
      "answer": "const date = Temporal.PlainDate.from('2026-04-29');\nconsole.log(date.toString());",
      "explanation": [
        "这道练习要求你从空白实现开始，主动选择 Temporal 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    "debugCase": {
      "title": "修复 Temporal 的旧写法或误用",
      "broken": "const date = new Date('2026-04-29T00:00:00Z');\nconsole.log(date.toISOString().slice(0, 10));",
      "fixed": "const date = Temporal.PlainDate.from('2026-04-29');\nconsole.log(date.toString());",
      "reason": [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Temporal 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    "review": [
      "能说出 Temporal 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  }
];

function normalizeComparableCode(code) {
  return String(code ?? '').replace(/\s+/g, '');
}

function validateLesson(lesson) {
  const requiredFields = [
    ['version', lesson.version],
    ['title', lesson.title],
    ['exercise', lesson.exercise],
    ['starterCode', lesson.starterCode],
    ['correctCode', lesson.correctCode],
    ['practice.prompt', lesson.practice?.prompt],
    ['practice.starter', lesson.practice?.starter],
    ['practice.answer', lesson.practice?.answer],
    ['debugCase.title', lesson.debugCase?.title],
    ['debugCase.broken', lesson.debugCase?.broken],
    ['debugCase.fixed', lesson.debugCase?.fixed],
  ];

  requiredFields.forEach(([field, value]) => {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error(`${lesson.title} 缺少必要字段：${field}`);
    }
  });

  if (!Array.isArray(lesson.explanation) || lesson.explanation.length < 2) {
    throw new Error(`${lesson.title} 的核心讲解至少需要两条说明。`);
  }

  if (!Array.isArray(lesson.practice.explanation) || lesson.practice.explanation.length === 0) {
    throw new Error(`${lesson.title} 的练习说明不能为空。`);
  }

  if (!Array.isArray(lesson.debugCase.reason) || lesson.debugCase.reason.length === 0) {
    throw new Error(`${lesson.title} 的改错说明不能为空。`);
  }

  if (!Array.isArray(lesson.review) || lesson.review.length < 3) {
    throw new Error(`${lesson.title} 的复盘清单至少需要三项。`);
  }

  if (normalizeComparableCode(lesson.practice.starter) === normalizeComparableCode(lesson.debugCase.broken)) {
    throw new Error(`${lesson.title} 的练习和改错代码不能完全相同。`);
  }
}

const lessonTitles = new Set(lessonCatalog.map((lesson) => lesson.title));
if (lessonTitles.size !== lessonCatalog.length) {
  throw new Error('课程标题不能重复。');
}

export const lessons = lessonCatalog.map((lesson, index) => {
  const normalizedLesson = {
    ...lesson,
    id: String(index + 1),
  };

  validateLesson(normalizedLesson);
  return normalizedLesson;
});
