export const es2017Lessons = [
  {
    version: "ES2017",
    title: "Async / Await",
    explanation: [
      "Async / Await 是 ES2017 中值得掌握的特性。它的核心作用是：ES2017 引入 async/await，使异步代码写法更像同步代码，更易读。",
      "典型使用场景：将 Promise.then 语法改写成 async/await。",
      "解决的旧写法问题：多层 then 链会把异步流程拆散，错误处理和顺序逻辑不如同步风格好读。",
      "适合使用：需要按顺序等待异步结果，并用 try/catch 管理错误。",
      "继续用传统写法：多个独立任务应该并发时，用 Promise.all/allSettled 等组合；不要把能并发的任务写成串行 await。"
    ],
    exercise: "将 Promise.then 语法改写成 async/await。",
    starterCode: "function fetchName() {\n  return Promise.resolve('Alice');\n}\nfetchName().then((name) => {\n  console.log(name);\n});",
    errorCode: "fetchName().then((name) => {\n  console.log(name);\n});",
    correctCode: "async function showName() {\n  const name = await fetchName();\n  console.log(name);\n}\nshowName();",
    practice: {
      prompt: "独立完成：将 Promise.then 语法改写成 async/await。",
      starter: "// 使用 Async / Await 完成本课练习。\n// 目标：将 Promise.then 语法改写成 async/await。\n\n",
      answer: "async function showName() {\n  const name = await fetchName();\n  console.log(name);\n}\nshowName();",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Async / Await 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Async / Await 的旧写法或误用",
      broken: "function fetchName() {\n  return Promise.resolve('Alice');\n}\nfetchName().then((name) => {\n  console.log(name);\n});",
      fixed: "async function showName() {\n  const name = await fetchName();\n  console.log(name);\n}\nshowName();",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Async / Await 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Async / Await 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2017",
    title: "Object.values / Object.entries",
    explanation: [
      "Object.values / Object.entries 是 ES2017 中值得掌握的特性。它的核心作用是：Object.values 和 Object.entries 让对象值列表、键值对列表的遍历更方便。",
      "典型使用场景：使用 Object.entries 输出对象中的键和值。",
      "解决的旧写法问题：遍历对象时常要 Object.keys(obj).map(key => obj[key])，重复取值且语义绕。",
      "适合使用：需要对象的值列表，或需要以 [key, value] 形式遍历普通对象。",
      "继续用传统写法：需要包含 Symbol key 或不可枚举属性时，用 Reflect.ownKeys 或属性描述符相关 API。"
    ],
    exercise: "使用 Object.entries 输出对象中的键和值。",
    starterCode: "const user = { name: 'Alice', age: 30 };\nfor (const key of Object.keys(user)) {\n  console.log(key, user[key]);\n}",
    errorCode: "for (const key of Object.keys(user)) {\n  console.log(key, user[key]);\n}",
    correctCode: "const user = { name: 'Alice', age: 30 };\nfor (const [key, value] of Object.entries(user)) {\n  console.log(key, value);\n}",
    practice: {
      prompt: "独立完成：使用 Object.entries 输出对象中的键和值。",
      starter: "// 使用 Object.values / Object.entries 完成本课练习。\n// 目标：使用 Object.entries 输出对象中的键和值。\n\n",
      answer: "const user = { name: 'Alice', age: 30 };\nfor (const [key, value] of Object.entries(user)) {\n  console.log(key, value);\n}",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Object.values / Object.entries 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Object.values / Object.entries 的旧写法或误用",
      broken: "const user = { name: 'Alice', age: 30 };\nfor (const key of Object.keys(user)) {\n  console.log(key, user[key]);\n}",
      fixed: "const user = { name: 'Alice', age: 30 };\nfor (const [key, value] of Object.entries(user)) {\n  console.log(key, value);\n}",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Object.values / Object.entries 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Object.values / Object.entries 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2017",
    title: "String padding",
    explanation: [
      "String padding 是 ES2017 中值得掌握的特性。它的核心作用是：padStart 和 padEnd 可以把字符串补齐到指定长度，常用于格式化编号、日期和对齐文本。",
      "典型使用场景：使用 padStart 将数字 7 格式化为 007。",
      "解决的旧写法问题：手动拼接 0 或空格补齐字符串时，长度计算和截断逻辑容易散落在代码里。",
      "适合使用：格式化编号、日期、表格文本等固定宽度字符串。",
      "继续用传统写法：复杂本地化数字、货币或日期展示，应优先使用 Intl 相关 API。"
    ],
    exercise: "使用 padStart 将数字 7 格式化为 007。",
    starterCode: "const id = String(7);\nconst padded = '00' + id;\nconsole.log(padded);",
    errorCode: "'00' + id;",
    correctCode: "const id = String(7);\nconst padded = id.padStart(3, '0');\nconsole.log(padded);",
    practice: {
      prompt: "独立完成：使用 padStart 将数字 7 格式化为 007。",
      starter: "// 使用 String padding 完成本课练习。\n// 目标：使用 padStart 将数字 7 格式化为 007。\n\n",
      answer: "const id = String(7);\nconst padded = id.padStart(3, '0');\nconsole.log(padded);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 String padding 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 String padding 的旧写法或误用",
      broken: "const id = String(7);\nconst padded = '00' + id;\nconsole.log(padded);",
      fixed: "const id = String(7);\nconst padded = id.padStart(3, '0');\nconsole.log(padded);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 String padding 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 String padding 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2017",
    title: "Object.getOwnPropertyDescriptors",
    explanation: [
      "Object.getOwnPropertyDescriptors 是 ES2017 中值得掌握的特性。它的核心作用是：Object.getOwnPropertyDescriptors 可以一次获取对象所有自有属性描述符，适合复制 getter、setter 等特殊属性。",
      "典型使用场景：使用属性描述符复制带 getter 的对象。",
      "解决的旧写法问题：Object.assign 会触发 getter 并复制值，无法保留 getter、setter、writable 等描述符信息。",
      "适合使用：需要完整复制对象属性描述符，尤其是访问器属性或库级对象克隆。",
      "继续用传统写法：只想浅合并普通数据对象时，展开语法或 Object.assign 更简单。"
    ],
    exercise: "使用属性描述符复制带 getter 的对象。",
    starterCode: "const source = {\n  get name() {\n    return 'Alice';\n  }\n};\nconst copy = Object.assign({}, source);\nconsole.log(copy.name);",
    errorCode: "const copy = Object.assign({}, source);",
    correctCode: "const source = {\n  get name() {\n    return 'Alice';\n  }\n};\nconst copy = Object.defineProperties({}, Object.getOwnPropertyDescriptors(source));\nconsole.log(copy.name);",
    practice: {
      prompt: "独立完成：使用属性描述符复制带 getter 的对象。",
      starter: "// 使用 Object.getOwnPropertyDescriptors 完成本课练习。\n// 目标：使用属性描述符复制带 getter 的对象。\n\n",
      answer: "const source = {\n  get name() {\n    return 'Alice';\n  }\n};\nconst copy = Object.defineProperties({}, Object.getOwnPropertyDescriptors(source));\nconsole.log(copy.name);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Object.getOwnPropertyDescriptors 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Object.getOwnPropertyDescriptors 的旧写法或误用",
      broken: "const source = {\n  get name() {\n    return 'Alice';\n  }\n};\nconst copy = Object.assign({}, source);\nconsole.log(copy.name);",
      fixed: "const source = {\n  get name() {\n    return 'Alice';\n  }\n};\nconst copy = Object.defineProperties({}, Object.getOwnPropertyDescriptors(source));\nconsole.log(copy.name);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Object.getOwnPropertyDescriptors 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Object.getOwnPropertyDescriptors 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  }
];
