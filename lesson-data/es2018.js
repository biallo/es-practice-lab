export const es2018Lessons = [
  {
    version: "ES2018",
    title: "对象展开/剩余属性",
    explanation: [
      "ES2018 支持对象展开和剩余属性，方便复制对象和提取部分字段。",
      "典型使用场景：从 user 中提取 name，并使用剩余属性获取其他字段。",
      "解决的旧写法问题：复制对象、合并字段、排除部分属性时，Object.assign 和手动赋值样板较多。",
      "适合使用：需要浅复制对象、合并配置，或从对象中取出部分字段再保留 rest。",
      "继续用传统写法：需要深拷贝、保留原型/描述符，或对象很大且性能敏感时，应选择更明确的方案。"
    ],
    exercise: "从 user 中提取 name，并使用剩余属性获取其他字段。",
    starterCode: "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst name = user.name;\nconst age = user.age;\nconst city = user.city;\nconst rest = {};",
    errorCode: "const name = user.name;\nconst age = user.age;\nconst city = user.city;\nconst rest = {};",
    correctCode: "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst { name, ...rest } = user;",
    practice: {
      prompt: "独立完成：从 user 中提取 name，并使用剩余属性获取其他字段。",
      starter: "// 使用 对象展开/剩余属性 完成本课练习。\n// 目标：从 user 中提取 name，并使用剩余属性获取其他字段。\n\n",
      answer: "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst { name, ...rest } = user;",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 对象展开/剩余属性 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 对象展开/剩余属性 的旧写法或误用",
      broken: "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst name = user.name;\nconst age = user.age;\nconst city = user.city;\nconst rest = {};",
      fixed: "const user = { name: 'Alice', age: 30, city: 'Shanghai' };\nconst { name, ...rest } = user;",
      reason: [
        "解决的旧写法问题：复制对象、合并字段、排除部分属性时，Object.assign 和手动赋值样板较多。",
        "这道改错要重点替换这段旧写法：const name = user.name; const age = user.age; const city = user.city; const rest = {};"
      ]
    },
    review: [
      "能说出 对象展开/剩余属性 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2018",
    title: "Async Iteration",
    explanation: [
      "异步迭代用 for await...of 逐步读取异步产生的数据，适合流式数据和分页接口。",
      "典型使用场景：使用 for await...of 读取异步数字序列。",
      "解决的旧写法问题：异步数据流用普通 for/of 或 forEach 无法正确等待每一项，分页和流式读取会变得零散。",
      "适合使用：遍历异步可迭代对象，例如流、分页接口、异步生成器。",
      "继续用传统写法：数据已经一次性拿到数组时，用普通 for...of；独立 Promise 并发时用 Promise.all。"
    ],
    exercise: "使用 for await...of 读取异步数字序列。",
    starterCode: "async function readAll(source) {\n  source.forEach((item) => console.log(item));\n}",
    errorCode: "source.forEach((item) => console.log(item));",
    correctCode: "async function readAll(source) {\n  for await (const item of source) {\n    console.log(item);\n  }\n}",
    practice: {
      prompt: "独立完成：使用 for await...of 读取异步数字序列。",
      starter: "// 使用 Async Iteration 完成本课练习。\n// 目标：使用 for await...of 读取异步数字序列。\n\n",
      answer: "async function readAll(source) {\n  for await (const item of source) {\n    console.log(item);\n  }\n}",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Async Iteration 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Async Iteration 的旧写法或误用",
      broken: "async function readAll(source) {\n  source.forEach((item) => console.log(item));\n}",
      fixed: "async function readAll(source) {\n  for await (const item of source) {\n    console.log(item);\n  }\n}",
      reason: [
        "解决的旧写法问题：异步数据流用普通 for/of 或 forEach 无法正确等待每一项，分页和流式读取会变得零散。",
        "这道改错要重点替换这段旧写法：source.forEach((item) => console.log(item));"
      ]
    },
    review: [
      "能说出 Async Iteration 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2018",
    title: "Promise.finally",
    explanation: [
      "Promise.finally 用于在异步操作结束后执行清理逻辑，无论成功还是失败都会运行。",
      "典型使用场景：将重复的清理逻辑改成 finally。",
      "解决的旧写法问题：then 和 catch 中重复写清理逻辑会造成分支重复，也容易漏掉失败路径。",
      "适合使用：无论成功失败都要关闭 loading、释放资源、记录结束状态。",
      "继续用传统写法：清理逻辑依赖成功值或错误对象时，仍应放在 then/catch 中明确处理。"
    ],
    exercise: "将重复的清理逻辑改成 finally。",
    starterCode: "fetch('/api').then(() => {\n  console.log('done');\n}).catch(() => {\n  console.log('done');\n});",
    errorCode: ".then(() => {\n  console.log('done');\n}).catch(() => {\n  console.log('done');\n});",
    correctCode: "fetch('/api')\n  .then(() => console.log('success'))\n  .catch(() => console.log('error'))\n  .finally(() => console.log('done'));",
    practice: {
      prompt: "独立完成：将重复的清理逻辑改成 finally。",
      starter: "// 使用 Promise.finally 完成本课练习。\n// 目标：将重复的清理逻辑改成 finally。\n\n",
      answer: "fetch('/api')\n  .then(() => console.log('success'))\n  .catch(() => console.log('error'))\n  .finally(() => console.log('done'));",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Promise.finally 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Promise.finally 的旧写法或误用",
      broken: "fetch('/api').then(() => {\n  console.log('done');\n}).catch(() => {\n  console.log('done');\n});",
      fixed: "fetch('/api')\n  .then(() => console.log('success'))\n  .catch(() => console.log('error'))\n  .finally(() => console.log('done'));",
      reason: [
        "解决的旧写法问题：then 和 catch 中重复写清理逻辑会造成分支重复，也容易漏掉失败路径。",
        "这道改错要重点替换这段旧写法：.then(() => { console.log('done'); }).catch(() => { console.log('done'); });"
      ]
    },
    review: [
      "能说出 Promise.finally 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2018",
    title: "RegExp 命名捕获组",
    explanation: [
      "命名捕获组允许用名字读取正则匹配结果，比依赖数字下标更清晰。",
      "典型使用场景：使用命名捕获组提取日期中的年、月、日。",
      "解决的旧写法问题：依赖 match[1]、match[2] 这类数字下标时，正则稍微调整就容易读错字段。",
      "适合使用：正则中有多个有含义的捕获结果，例如日期、URL、日志字段。",
      "继续用传统写法：只有一个简单捕获时，普通分组或字符串方法可能更轻。"
    ],
    exercise: "使用命名捕获组提取日期中的年、月、日。",
    starterCode: "const match = '2026-04-29'.match(/(\\d{4})-(\\d{2})-(\\d{2})/);\nconsole.log(match[1], match[2], match[3]);",
    errorCode: "match[1], match[2], match[3]",
    correctCode: "const match = '2026-04-29'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\nconsole.log(match.groups.year, match.groups.month, match.groups.day);",
    practice: {
      prompt: "独立完成：使用命名捕获组提取日期中的年、月、日。",
      starter: "// 使用 RegExp 命名捕获组 完成本课练习。\n// 目标：使用命名捕获组提取日期中的年、月、日。\n\n",
      answer: "const match = '2026-04-29'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\nconsole.log(match.groups.year, match.groups.month, match.groups.day);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 RegExp 命名捕获组 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 RegExp 命名捕获组 的旧写法或误用",
      broken: "const match = '2026-04-29'.match(/(\\d{4})-(\\d{2})-(\\d{2})/);\nconsole.log(match[1], match[2], match[3]);",
      fixed: "const match = '2026-04-29'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\nconsole.log(match.groups.year, match.groups.month, match.groups.day);",
      reason: [
        "解决的旧写法问题：依赖 match[1]、match[2] 这类数字下标时，正则稍微调整就容易读错字段。",
        "这道改错要重点替换这段旧写法：match[1], match[2], match[3]"
      ]
    },
    review: [
      "能说出 RegExp 命名捕获组 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2018",
    title: "RegExp 增强：dotAll / lookbehind / Unicode properties",
    explanation: [
      "ES2018 为正则表达式加入 dotAll、lookbehind 和 Unicode property escapes，让跨行、后行断言和 Unicode 分类匹配更强。",
      "典型使用场景：使用 lookbehind 提取价格中的数字。",
      "解决的旧写法问题：过去跨行匹配、前后文限定和 Unicode 分类常要写复杂替代模式。",
      "适合使用：需要跨行点号匹配、基于前文/后文提取，或按 Unicode 属性匹配字符。",
      "继续用传统写法：规则很简单时不要过度使用高级正则；可读性差时拆成字符串处理更好维护。"
    ],
    exercise: "使用 lookbehind 提取价格中的数字。",
    starterCode: "const text = '$42';\nconst match = text.match(/\\d+/);\nconsole.log(match[0]);",
    errorCode: "text.match(/\\d+/);",
    correctCode: "const text = '$42';\nconst match = text.match(/(?<=\\$)\\d+/);\nconsole.log(match[0]);",
    practice: {
      prompt: "独立完成：使用 lookbehind 提取价格中的数字。",
      starter: "// 使用 RegExp 增强：dotAll / lookbehind / Unicode properties 完成本课练习。\n// 目标：使用 lookbehind 提取价格中的数字。\n\n",
      answer: "const text = '$42';\nconst match = text.match(/(?<=\\$)\\d+/);\nconsole.log(match[0]);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 RegExp 增强：dotAll / lookbehind / Unicode properties 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 RegExp 增强：dotAll / lookbehind / Unicode properties 的旧写法或误用",
      broken: "const text = '$42';\nconst match = text.match(/\\d+/);\nconsole.log(match[0]);",
      fixed: "const text = '$42';\nconst match = text.match(/(?<=\\$)\\d+/);\nconsole.log(match[0]);",
      reason: [
        "解决的旧写法问题：过去跨行匹配、前后文限定和 Unicode 分类常要写复杂替代模式。",
        "这道改错要重点替换这段旧写法：text.match(/\\d+/);"
      ]
    },
    review: [
      "能说出 RegExp 增强：dotAll / lookbehind / Unicode properties 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  }
];
