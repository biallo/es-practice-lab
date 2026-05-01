export const es2025Lessons = [
  {
    version: "ES2025",
    title: "Set methods",
    explanation: [
      "ES2025 为 Set 增加 union、intersection、difference 等集合操作方法，让集合运算更直观。",
      "典型使用场景：使用 intersection 求两个集合的交集。",
      "解决的旧写法问题：交集、并集、差集过去要手写循环或把 Set 转数组再过滤，语义分散。",
      "适合使用：需要表达集合运算，例如 union、intersection、difference、isSubsetOf。",
      "继续用传统写法：需要保留重复项或顺序相关计算时，数组方法更符合数据模型。"
    ],
    exercise: "使用 intersection 求两个集合的交集。",
    starterCode: "const a = new Set([1, 2, 3]);\nconst b = new Set([2, 3, 4]);\nconst both = new Set([...a].filter(item => b.has(item)));\nconsole.log([...both]);",
    errorCode: "new Set([...a].filter(item => b.has(item)));",
    correctCode: "const a = new Set([1, 2, 3]);\nconst b = new Set([2, 3, 4]);\nconst both = a.intersection(b);\nconsole.log([...both]);",
    practice: {
      prompt: "独立完成：使用 intersection 求两个集合的交集。",
      starter: "// 使用 Set methods 完成本课练习。\n// 目标：使用 intersection 求两个集合的交集。\n\n",
      answer: "const a = new Set([1, 2, 3]);\nconst b = new Set([2, 3, 4]);\nconst both = a.intersection(b);\nconsole.log([...both]);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Set methods 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Set methods 的旧写法或误用",
      broken: "const a = new Set([1, 2, 3]);\nconst b = new Set([2, 3, 4]);\nconst both = new Set([...a].filter(item => b.has(item)));\nconsole.log([...both]);",
      fixed: "const a = new Set([1, 2, 3]);\nconst b = new Set([2, 3, 4]);\nconst both = a.intersection(b);\nconsole.log([...both]);",
      reason: [
        "解决的旧写法问题：交集、并集、差集过去要手写循环或把 Set 转数组再过滤，语义分散。",
        "这道改错要重点替换这段旧写法：new Set([...a].filter(item => b.has(item)));"
      ]
    },
    review: [
      "能说出 Set methods 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2025",
    title: "Iterator helpers",
    explanation: [
      "Iterator helpers 为迭代器增加 map、filter、take、toArray 等链式处理能力。",
      "典型使用场景：使用迭代器 helper 过滤并转换数组迭代器。",
      "解决的旧写法问题：迭代器想 map/filter/take 时，过去常要先转数组，失去惰性并增加内存。",
      "适合使用：处理可能很长或按需产生的数据流，希望链式、惰性地转换。",
      "继续用传统写法：数据本来就是小数组时，数组方法生态更成熟也更直观。"
    ],
    exercise: "使用迭代器 helper 过滤并转换数组迭代器。",
    starterCode: "const result = [1, 2, 3, 4]\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10);\nconsole.log(result);",
    errorCode: ".filter(n => n % 2 === 0).map(n => n * 10);",
    correctCode: "const result = [1, 2, 3, 4]\n  .values()\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10)\n  .toArray();\nconsole.log(result);",
    practice: {
      prompt: "独立完成：使用迭代器 helper 过滤并转换数组迭代器。",
      starter: "// 使用 Iterator helpers 完成本课练习。\n// 目标：使用迭代器 helper 过滤并转换数组迭代器。\n\n",
      answer: "const result = [1, 2, 3, 4]\n  .values()\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10)\n  .toArray();\nconsole.log(result);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Iterator helpers 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Iterator helpers 的旧写法或误用",
      broken: "const result = [1, 2, 3, 4]\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10);\nconsole.log(result);",
      fixed: "const result = [1, 2, 3, 4]\n  .values()\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10)\n  .toArray();\nconsole.log(result);",
      reason: [
        "解决的旧写法问题：迭代器想 map/filter/take 时，过去常要先转数组，失去惰性并增加内存。",
        "这道改错要重点替换这段旧写法：.filter(n => n % 2 === 0).map(n => n * 10);"
      ]
    },
    review: [
      "能说出 Iterator helpers 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2025",
    title: "RegExp.escape",
    explanation: [
      "RegExp.escape 可以把普通字符串安全转义为正则片段，避免用户输入影响正则结构。",
      "典型使用场景：使用 RegExp.escape 根据用户输入创建正则。",
      "解决的旧写法问题：把用户输入拼进正则时，手写转义容易漏掉特殊字符，造成错误匹配甚至安全问题。",
      "适合使用：需要把任意字符串当作正则里的普通文本片段。",
      "继续用传统写法：输入本来就是可信的正则表达式语法时，不应该 escape，否则会改变语义。"
    ],
    exercise: "使用 RegExp.escape 根据用户输入创建正则。",
    starterCode: "const input = 'a+b';\nconst regex = new RegExp(input);\nconsole.log(regex.test('a+b'));",
    errorCode: "new RegExp(input);",
    correctCode: "const input = 'a+b';\nconst regex = new RegExp(RegExp.escape(input));\nconsole.log(regex.test('a+b'));",
    practice: {
      prompt: "独立完成：使用 RegExp.escape 根据用户输入创建正则。",
      starter: "// 使用 RegExp.escape 完成本课练习。\n// 目标：使用 RegExp.escape 根据用户输入创建正则。\n\n",
      answer: "const input = 'a+b';\nconst regex = new RegExp(RegExp.escape(input));\nconsole.log(regex.test('a+b'));",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 RegExp.escape 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 RegExp.escape 的旧写法或误用",
      broken: "const input = 'a+b';\nconst regex = new RegExp(input);\nconsole.log(regex.test('a+b'));",
      fixed: "const input = 'a+b';\nconst regex = new RegExp(RegExp.escape(input));\nconsole.log(regex.test('a+b'));",
      reason: [
        "解决的旧写法问题：把用户输入拼进正则时，手写转义容易漏掉特殊字符，造成错误匹配甚至安全问题。",
        "这道改错要重点替换这段旧写法：new RegExp(input);"
      ]
    },
    review: [
      "能说出 RegExp.escape 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2025",
    title: "Promise.try",
    explanation: [
      "Promise.try 会把同步异常和异步结果统一包装进 Promise 链，适合规范化任务入口。",
      "典型使用场景：使用 Promise.try 包装可能同步抛错的函数。",
      "解决的旧写法问题：同时兼容同步抛错和异步返回 Promise 时，过去要手写 try/catch 再 Promise.resolve。",
      "适合使用：封装可能同步失败也可能返回 Promise 的回调，并统一进入 Promise 链。",
      "继续用传统写法：普通 async 函数已经能表达的流程，不必为了形式统一再包一层。"
    ],
    exercise: "使用 Promise.try 包装可能同步抛错的函数。",
    starterCode: "try {\n  const value = JSON.parse('{');\n  Promise.resolve(value).then(console.log);\n} catch (error) {\n  Promise.reject(error).catch(console.log);\n}",
    errorCode: "try { ... } catch (error) { ... }",
    correctCode: "Promise.try(() => JSON.parse('{'))\n  .then(console.log)\n  .catch(console.log);",
    practice: {
      prompt: "独立完成：使用 Promise.try 包装可能同步抛错的函数。",
      starter: "// 使用 Promise.try 完成本课练习。\n// 目标：使用 Promise.try 包装可能同步抛错的函数。\n\n",
      answer: "Promise.try(() => JSON.parse('{'))\n  .then(console.log)\n  .catch(console.log);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Promise.try 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Promise.try 的旧写法或误用",
      broken: "try {\n  const value = JSON.parse('{');\n  Promise.resolve(value).then(console.log);\n} catch (error) {\n  Promise.reject(error).catch(console.log);\n}",
      fixed: "Promise.try(() => JSON.parse('{'))\n  .then(console.log)\n  .catch(console.log);",
      reason: [
        "解决的旧写法问题：同时兼容同步抛错和异步返回 Promise 时，过去要手写 try/catch 再 Promise.resolve。",
        "这道改错要重点替换这段旧写法：try { ... } catch (error) { ... }"
      ]
    },
    review: [
      "能说出 Promise.try 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2025",
    title: "Import Attributes / JSON Modules",
    explanation: [
      "Import Attributes 让模块导入可以携带类型信息，JSON Modules 则让 JSON 文件以标准模块形式导入。",
      "典型使用场景：使用 import attributes 导入 JSON 配置。",
      "解决的旧写法问题：导入 JSON 等非 JS 资源时，过去缺少标准化的模块类型声明，容易依赖打包器约定。",
      "适合使用：需要以模块方式导入 JSON，并明确声明资源类型。",
      "继续用传统写法：运行时 URL、用户选择文件或需要动态校验的数据，用 fetch/解析函数更灵活。"
    ],
    exercise: "使用 import attributes 导入 JSON 配置。",
    starterCode: "const response = await fetch('./config.json');\nconst config = await response.json();\nconsole.log(config.name);",
    errorCode: "await fetch('./config.json');",
    correctCode: "import config from './config.json' with { type: 'json' };\nconsole.log(config.name);",
    practice: {
      prompt: "独立完成：使用 import attributes 导入 JSON 配置。",
      starter: "// 使用 Import Attributes / JSON Modules 完成本课练习。\n// 目标：使用 import attributes 导入 JSON 配置。\n\n",
      answer: "import config from './config.json' with { type: 'json' };\nconsole.log(config.name);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Import Attributes / JSON Modules 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Import Attributes / JSON Modules 的旧写法或误用",
      broken: "const response = await fetch('./config.json');\nconst config = await response.json();\nconsole.log(config.name);",
      fixed: "import config from './config.json' with { type: 'json' };\nconsole.log(config.name);",
      reason: [
        "解决的旧写法问题：导入 JSON 等非 JS 资源时，过去缺少标准化的模块类型声明，容易依赖打包器约定。",
        "这道改错要重点替换这段旧写法：await fetch('./config.json');"
      ]
    },
    review: [
      "能说出 Import Attributes / JSON Modules 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2025",
    title: "RegExp modifiers",
    explanation: [
      "RegExp modifiers 允许在正则表达式内部局部开启或关闭标志，使复杂匹配更精确。",
      "典型使用场景：只在局部片段中开启忽略大小写匹配。",
      "解决的旧写法问题：正则某一小段需要不同标志时，以前只能拆多个正则或扩大标志影响范围。",
      "适合使用：需要在同一个正则里对局部片段开启或关闭 i、m、s 等行为。",
      "继续用传统写法：简单模式直接使用整体 flags；局部修饰过多会让正则很难读。"
    ],
    exercise: "只在局部片段中开启忽略大小写匹配。",
    starterCode: "const regex = /hello world/i;\nconsole.log(regex.test('HELLO world'));",
    errorCode: "/hello world/i",
    correctCode: "const regex = /(?i:hello) world/;\nconsole.log(regex.test('HELLO world'));",
    practice: {
      prompt: "独立完成：只在局部片段中开启忽略大小写匹配。",
      starter: "// 使用 RegExp modifiers 完成本课练习。\n// 目标：只在局部片段中开启忽略大小写匹配。\n\n",
      answer: "const regex = /(?i:hello) world/;\nconsole.log(regex.test('HELLO world'));",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 RegExp modifiers 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 RegExp modifiers 的旧写法或误用",
      broken: "const regex = /hello world/i;\nconsole.log(regex.test('HELLO world'));",
      fixed: "const regex = /(?i:hello) world/;\nconsole.log(regex.test('HELLO world'));",
      reason: [
        "解决的旧写法问题：正则某一小段需要不同标志时，以前只能拆多个正则或扩大标志影响范围。",
        "这道改错要重点替换这段旧写法：/hello world/i"
      ]
    },
    review: [
      "能说出 RegExp modifiers 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  }
];
