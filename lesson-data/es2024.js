export const es2024Lessons = [
  {
    version: "ES2024",
    title: "Object.groupBy / Map.groupBy",
    explanation: [
      "ES2024 引入 Object.groupBy 和 Map.groupBy，能根据回调函数将可迭代数据分组，适合处理分类数据。",
      "典型使用场景：将人员数组按性别分组。",
      "解决的旧写法问题：数组分组过去常写 reduce 手动初始化桶，样板代码多且容易写错。",
      "适合使用：需要按某个计算结果把列表分组；字符串 key 用 Object.groupBy，任意 key 用 Map.groupBy。",
      "继续用传统写法：分组过程中还要累加统计、排序或复杂合并时，reduce 或显式循环更灵活。"
    ],
    exercise: "将人员数组按性别分组。",
    starterCode: "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = {};\nfor (const person of people) {\n  const key = person.gender;\n  if (!groups[key]) groups[key] = [];\n  groups[key].push(person);\n}",
    errorCode: "for (const person of people) {\n  const key = person.gender;\n  if (!groups[key]) groups[key] = [];\n  groups[key].push(person);\n}",
    correctCode: "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = Object.groupBy(people, person => person.gender);",
    practice: {
      prompt: "独立完成：将人员数组按性别分组。",
      starter: "// 使用 Object.groupBy / Map.groupBy 完成本课练习。\n// 目标：将人员数组按性别分组。\n\n",
      answer: "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = Object.groupBy(people, person => person.gender);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Object.groupBy / Map.groupBy 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Object.groupBy / Map.groupBy 的旧写法或误用",
      broken: "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = {};\nfor (const person of people) {\n  const key = person.gender;\n  if (!groups[key]) groups[key] = [];\n  groups[key].push(person);\n}",
      fixed: "const people = [\n  { name: 'Alice', gender: 'female' },\n  { name: 'Bob', gender: 'male' }\n];\nconst groups = Object.groupBy(people, person => person.gender);",
      reason: [
        "解决的旧写法问题：数组分组过去常写 reduce 手动初始化桶，样板代码多且容易写错。",
        "这道改错要重点替换这段旧写法：for (const person of people) { const key = person.gender; if (!groups[key]) groups[key] = [];..."
      ]
    },
    review: [
      "能说出 Object.groupBy / Map.groupBy 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2024",
    title: "Promise.withResolvers",
    explanation: [
      "Promise.withResolvers 返回 promise、resolve 和 reject，适合需要把控制权交给外部事件的场景。",
      "典型使用场景：使用 Promise.withResolvers 创建可外部 resolve 的 Promise。",
      "解决的旧写法问题：创建外部 resolve/reject 句柄时，以前要在 Promise 构造器外声明变量，样板且不优雅。",
      "适合使用：需要把 Promise 的完成控制权交给事件回调、队列或外部流程。",
      "继续用传统写法：普通异步操作能直接 return new Promise 或 async 函数时，不要额外暴露 resolver。"
    ],
    exercise: "使用 Promise.withResolvers 创建可外部 resolve 的 Promise。",
    starterCode: "let resolve;\nconst promise = new Promise((done) => {\n  resolve = done;\n});\nresolve('ok');\npromise.then(console.log);",
    errorCode: "let resolve;\nconst promise = new Promise((done) => {\n  resolve = done;\n});",
    correctCode: "const { promise, resolve } = Promise.withResolvers();\nresolve('ok');\npromise.then(console.log);",
    practice: {
      prompt: "独立完成：使用 Promise.withResolvers 创建可外部 resolve 的 Promise。",
      starter: "// 使用 Promise.withResolvers 完成本课练习。\n// 目标：使用 Promise.withResolvers 创建可外部 resolve 的 Promise。\n\n",
      answer: "const { promise, resolve } = Promise.withResolvers();\nresolve('ok');\npromise.then(console.log);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Promise.withResolvers 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Promise.withResolvers 的旧写法或误用",
      broken: "let resolve;\nconst promise = new Promise((done) => {\n  resolve = done;\n});\nresolve('ok');\npromise.then(console.log);",
      fixed: "const { promise, resolve } = Promise.withResolvers();\nresolve('ok');\npromise.then(console.log);",
      reason: [
        "解决的旧写法问题：创建外部 resolve/reject 句柄时，以前要在 Promise 构造器外声明变量，样板且不优雅。",
        "这道改错要重点替换这段旧写法：let resolve; const promise = new Promise((done) => { resolve = done; });"
      ]
    },
    review: [
      "能说出 Promise.withResolvers 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2024",
    title: "ArrayBuffer transfer",
    explanation: [
      "ArrayBuffer transfer 可以把缓冲区内容转移到新缓冲区，并让旧缓冲区失效，适合二进制数据所有权转移。",
      "典型使用场景：使用 transfer 转移 ArrayBuffer。",
      "解决的旧写法问题：转移二进制缓冲区所有权过去常依赖 postMessage 等特定 API，普通代码里不够直接。",
      "适合使用：需要把大型 ArrayBuffer 的所有权移动给新缓冲区，避免复制成本。",
      "继续用传统写法：仍需继续使用原缓冲区，或数据很小复制成本无关紧要时，slice 更直观。"
    ],
    exercise: "使用 transfer 转移 ArrayBuffer。",
    starterCode: "const buffer = new ArrayBuffer(8);\nconst copy = buffer.slice(0);\nconsole.log(copy.byteLength);",
    errorCode: "buffer.slice(0);",
    correctCode: "const buffer = new ArrayBuffer(8);\nconst moved = buffer.transfer();\nconsole.log(moved.byteLength);\nconsole.log(buffer.detached);",
    practice: {
      prompt: "独立完成：使用 transfer 转移 ArrayBuffer。",
      starter: "// 使用 ArrayBuffer transfer 完成本课练习。\n// 目标：使用 transfer 转移 ArrayBuffer。\n\n",
      answer: "const buffer = new ArrayBuffer(8);\nconst moved = buffer.transfer();\nconsole.log(moved.byteLength);\nconsole.log(buffer.detached);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 ArrayBuffer transfer 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 ArrayBuffer transfer 的旧写法或误用",
      broken: "const buffer = new ArrayBuffer(8);\nconst copy = buffer.slice(0);\nconsole.log(copy.byteLength);",
      fixed: "const buffer = new ArrayBuffer(8);\nconst moved = buffer.transfer();\nconsole.log(moved.byteLength);\nconsole.log(buffer.detached);",
      reason: [
        "解决的旧写法问题：转移二进制缓冲区所有权过去常依赖 postMessage 等特定 API，普通代码里不够直接。",
        "这道改错要重点替换这段旧写法：buffer.slice(0);"
      ]
    },
    review: [
      "能说出 ArrayBuffer transfer 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2024",
    title: "Resizable ArrayBuffer",
    explanation: [
      "Resizable ArrayBuffer 允许创建带 maxByteLength 的可调整缓冲区，并用 resize 改变当前长度。",
      "典型使用场景：创建一个可增长的 ArrayBuffer 并调整大小。",
      "解决的旧写法问题：固定长度 ArrayBuffer 在数据增长时只能重新分配并复制。",
      "适合使用：处理可增长二进制数据、流式协议或需要预留最大容量的底层场景。",
      "继续用传统写法：数据大小已知或业务层只处理普通数组/字符串时，固定缓冲区更简单。"
    ],
    exercise: "创建一个可增长的 ArrayBuffer 并调整大小。",
    starterCode: "let buffer = new ArrayBuffer(8);\nconst bigger = new ArrayBuffer(16);\nnew Uint8Array(bigger).set(new Uint8Array(buffer));\nbuffer = bigger;\nconsole.log(buffer.byteLength);",
    errorCode: "const bigger = new ArrayBuffer(16);",
    correctCode: "const buffer = new ArrayBuffer(8, { maxByteLength: 16 });\nbuffer.resize(16);\nconsole.log(buffer.resizable, buffer.byteLength);",
    practice: {
      prompt: "独立完成：创建一个可增长的 ArrayBuffer 并调整大小。",
      starter: "// 使用 Resizable ArrayBuffer 完成本课练习。\n// 目标：创建一个可增长的 ArrayBuffer 并调整大小。\n\n",
      answer: "const buffer = new ArrayBuffer(8, { maxByteLength: 16 });\nbuffer.resize(16);\nconsole.log(buffer.resizable, buffer.byteLength);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Resizable ArrayBuffer 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Resizable ArrayBuffer 的旧写法或误用",
      broken: "let buffer = new ArrayBuffer(8);\nconst bigger = new ArrayBuffer(16);\nnew Uint8Array(bigger).set(new Uint8Array(buffer));\nbuffer = bigger;\nconsole.log(buffer.byteLength);",
      fixed: "const buffer = new ArrayBuffer(8, { maxByteLength: 16 });\nbuffer.resize(16);\nconsole.log(buffer.resizable, buffer.byteLength);",
      reason: [
        "解决的旧写法问题：固定长度 ArrayBuffer 在数据增长时只能重新分配并复制。",
        "这道改错要重点替换这段旧写法：const bigger = new ArrayBuffer(16);"
      ]
    },
    review: [
      "能说出 Resizable ArrayBuffer 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2024",
    title: "RegExp v flag",
    explanation: [
      "RegExp v 标志增强 Unicode 匹配能力，支持字符串属性和更强的字符集合表达。",
      "典型使用场景：使用 v 标志匹配 emoji 字符串属性。",
      "解决的旧写法问题：复杂 Unicode 字符集合和集合运算过去需要冗长或不准确的正则表达。",
      "适合使用：需要 Unicode 字符集交集、差集或更严格的字符串属性匹配。",
      "继续用传统写法：简单 ASCII 或普通文本匹配不要上复杂标志；可读性会更重要。"
    ],
    exercise: "使用 v 标志匹配 emoji 字符串属性。",
    starterCode: "const regex = /\\p{Emoji}/u;\nconsole.log(regex.test('👨‍👩‍👧‍👦'));",
    errorCode: "/\\p{Emoji}/u",
    correctCode: "const regex = /\\p{RGI_Emoji}/v;\nconsole.log(regex.test('👨‍👩‍👧‍👦'));",
    practice: {
      prompt: "独立完成：使用 v 标志匹配 emoji 字符串属性。",
      starter: "// 使用 RegExp v flag 完成本课练习。\n// 目标：使用 v 标志匹配 emoji 字符串属性。\n\n",
      answer: "const regex = /\\p{RGI_Emoji}/v;\nconsole.log(regex.test('👨‍👩‍👧‍👦'));",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 RegExp v flag 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 RegExp v flag 的旧写法或误用",
      broken: "const regex = /\\p{Emoji}/u;\nconsole.log(regex.test('👨‍👩‍👧‍👦'));",
      fixed: "const regex = /\\p{RGI_Emoji}/v;\nconsole.log(regex.test('👨‍👩‍👧‍👦'));",
      reason: [
        "解决的旧写法问题：复杂 Unicode 字符集合和集合运算过去需要冗长或不准确的正则表达。",
        "这道改错要重点替换这段旧写法：/\\p{Emoji}/u"
      ]
    },
    review: [
      "能说出 RegExp v flag 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2024",
    title: "String isWellFormed / toWellFormed",
    explanation: [
      "isWellFormed 和 toWellFormed 用于检测和修复字符串中的孤立代理项，避免 Unicode 编码问题。",
      "典型使用场景：使用 toWellFormed 修复不合法字符串。",
      "解决的旧写法问题：字符串中孤立代理项会让 Unicode 处理、编码和传输出现难排查的问题。",
      "适合使用：处理外部输入、网络传输、编码前校验，或需要修复不合法 Unicode 字符串。",
      "继续用传统写法：纯内部 ASCII 文本或已经由可靠来源保证合法时，不必每次都检查。"
    ],
    exercise: "使用 toWellFormed 修复不合法字符串。",
    starterCode: "const text = '�';\nconsole.log(encodeURIComponent(text));",
    errorCode: "encodeURIComponent(text);",
    correctCode: "const text = '�';\nconsole.log(text.isWellFormed());\nconsole.log(text.toWellFormed());",
    practice: {
      prompt: "独立完成：使用 toWellFormed 修复不合法字符串。",
      starter: "// 使用 String isWellFormed / toWellFormed 完成本课练习。\n// 目标：使用 toWellFormed 修复不合法字符串。\n\n",
      answer: "const text = '�';\nconsole.log(text.isWellFormed());\nconsole.log(text.toWellFormed());",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 String isWellFormed / toWellFormed 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 String isWellFormed / toWellFormed 的旧写法或误用",
      broken: "const text = '�';\nconsole.log(encodeURIComponent(text));",
      fixed: "const text = '�';\nconsole.log(text.isWellFormed());\nconsole.log(text.toWellFormed());",
      reason: [
        "解决的旧写法问题：字符串中孤立代理项会让 Unicode 处理、编码和传输出现难排查的问题。",
        "这道改错要重点替换这段旧写法：encodeURIComponent(text);"
      ]
    },
    review: [
      "能说出 String isWellFormed / toWellFormed 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  }
];
