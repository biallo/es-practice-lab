export const es2020Lessons = [
  {
    version: "ES2020",
    title: "Optional Chaining",
    explanation: [
      "可选链让你安全访问嵌套属性，当某个路径不存在时不会抛出错误。",
      "典型使用场景：使用可选链读取 user.profile.name。",
      "解决的旧写法问题：深层属性访问过去要写多层 && 防止 Cannot read properties of undefined。",
      "适合使用：读取可选对象路径、可选方法或接口返回中的可缺失字段。",
      "继续用传统写法：某个字段缺失代表程序错误时，不要用可选链吞掉问题，应让错误暴露出来。"
    ],
    exercise: "使用可选链读取 user.profile.name。",
    starterCode: "const user = { profile: { name: 'Cindy' } };\nconst name = user.profile.name;",
    errorCode: "const name = user.profile.name;",
    correctCode: "const name = user?.profile?.name;",
    practice: {
      prompt: "独立完成：使用可选链读取 user.profile.name。",
      starter: "// 使用 Optional Chaining 完成本课练习。\n// 目标：使用可选链读取 user.profile.name。\n\n",
      answer: "const name = user?.profile?.name;",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Optional Chaining 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Optional Chaining 的旧写法或误用",
      broken: "const user = { profile: { name: 'Cindy' } };\nconst name = user.profile.name;",
      fixed: "const name = user?.profile?.name;",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Optional Chaining 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Optional Chaining 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2020",
    title: "BigInt",
    explanation: [
      "ES2020 引入 BigInt，用于表示比 Number.MAX_SAFE_INTEGER 更大的整数。",
      "典型使用场景：用 BigInt 表示 9007199254740993，并进行加法运算。",
      "解决的旧写法问题：Number 超过 MAX_SAFE_INTEGER 后会丢失整数精度，ID、计数和大整数计算会出错。",
      "适合使用：需要精确表示和运算超大整数，并且能接受 BigInt 不能和 Number 直接混算的规则。",
      "继续用传统写法：普通小范围数字、小数、Math API 或 JSON 直接传输场景，Number 更方便。"
    ],
    exercise: "用 BigInt 表示 9007199254740993，并进行加法运算。",
    starterCode: "const big = 9007199254740993;\nconst next = big + 1;",
    errorCode: "const big = 9007199254740993;\nconst next = big + 1;",
    correctCode: "const big = 9007199254740993n;\nconst next = big + 1n;",
    practice: {
      prompt: "独立完成：用 BigInt 表示 9007199254740993，并进行加法运算。",
      starter: "// 使用 BigInt 完成本课练习。\n// 目标：用 BigInt 表示 9007199254740993，并进行加法运算。\n\n",
      answer: "const big = 9007199254740993n;\nconst next = big + 1n;",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 BigInt 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 BigInt 的旧写法或误用",
      broken: "const big = 9007199254740993;\nconst next = big + 1;",
      fixed: "const big = 9007199254740993n;\nconst next = big + 1n;",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 BigInt 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 BigInt 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2020",
    title: "globalThis",
    explanation: [
      "globalThis 提供跨环境的全局对象访问方式，浏览器、Node.js 和 Worker 中都能使用。",
      "典型使用场景：使用 globalThis 保存一个全局配置。",
      "解决的旧写法问题：不同环境访问全局对象要写 window、global、self 等分支判断。",
      "适合使用：跨浏览器、Node.js、Worker 的库代码需要统一访问全局对象。",
      "继续用传统写法：业务代码里频繁挂全局状态通常会增加耦合，应优先使用模块导入导出。"
    ],
    exercise: "使用 globalThis 保存一个全局配置。",
    starterCode: "window.appName = 'ES Practice Lab';\nconsole.log(window.appName);",
    errorCode: "window.appName = 'ES Practice Lab';",
    correctCode: "globalThis.appName = 'ES Practice Lab';\nconsole.log(globalThis.appName);",
    practice: {
      prompt: "独立完成：使用 globalThis 保存一个全局配置。",
      starter: "// 使用 globalThis 完成本课练习。\n// 目标：使用 globalThis 保存一个全局配置。\n\n",
      answer: "globalThis.appName = 'ES Practice Lab';\nconsole.log(globalThis.appName);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 globalThis 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 globalThis 的旧写法或误用",
      broken: "window.appName = 'ES Practice Lab';\nconsole.log(window.appName);",
      fixed: "globalThis.appName = 'ES Practice Lab';\nconsole.log(globalThis.appName);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 globalThis 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 globalThis 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2020",
    title: "Promise.allSettled",
    explanation: [
      "Promise.allSettled 会等待所有 Promise 完成，并保留每一项的 fulfilled 或 rejected 状态。",
      "典型使用场景：使用 allSettled 同时收集成功和失败结果。",
      "解决的旧写法问题：Promise.all 遇到第一个失败就 reject，无法自然收集其他任务的成功/失败结果。",
      "适合使用：批量请求、批量任务中需要知道每一项最终状态，而不是一项失败就整体中断。",
      "继续用传统写法：任务之间强依赖，任一失败就应该停止时，Promise.all 更符合语义。"
    ],
    exercise: "使用 allSettled 同时收集成功和失败结果。",
    starterCode: "const tasks = [Promise.resolve(1), Promise.reject(new Error('fail'))];\nPromise.all(tasks).then(console.log).catch(console.log);",
    errorCode: "Promise.all(tasks)",
    correctCode: "const tasks = [Promise.resolve(1), Promise.reject(new Error('fail'))];\nPromise.allSettled(tasks).then(console.log);",
    practice: {
      prompt: "独立完成：使用 allSettled 同时收集成功和失败结果。",
      starter: "// 使用 Promise.allSettled 完成本课练习。\n// 目标：使用 allSettled 同时收集成功和失败结果。\n\n",
      answer: "const tasks = [Promise.resolve(1), Promise.reject(new Error('fail'))];\nPromise.allSettled(tasks).then(console.log);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Promise.allSettled 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Promise.allSettled 的旧写法或误用",
      broken: "const tasks = [Promise.resolve(1), Promise.reject(new Error('fail'))];\nPromise.all(tasks).then(console.log).catch(console.log);",
      fixed: "const tasks = [Promise.resolve(1), Promise.reject(new Error('fail'))];\nPromise.allSettled(tasks).then(console.log);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Promise.allSettled 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Promise.allSettled 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2020",
    title: "Dynamic import / import.meta",
    explanation: [
      "动态 import 可以按需加载模块，import.meta 则暴露当前模块的元信息。",
      "典型使用场景：将静态导入改成按需动态导入。",
      "解决的旧写法问题：静态 import 会把模块提前纳入依赖，按需加载和读取当前模块元信息不方便。",
      "适合使用：需要路由级拆包、条件加载重模块，或读取 import.meta.url 等模块上下文。",
      "继续用传统写法：核心依赖和首屏必需代码应使用静态 import，便于静态分析和提前加载。"
    ],
    exercise: "将静态导入改成按需动态导入。",
    starterCode: "import { format } from './format.js';\nconsole.log(format('hello'));",
    errorCode: "import { format } from './format.js';",
    correctCode: "const { format } = await import('./format.js');\nconsole.log(format('hello'));\nconsole.log(import.meta.url);",
    practice: {
      prompt: "独立完成：将静态导入改成按需动态导入。",
      starter: "// 使用 Dynamic import / import.meta 完成本课练习。\n// 目标：将静态导入改成按需动态导入。\n\n",
      answer: "const { format } = await import('./format.js');\nconsole.log(format('hello'));\nconsole.log(import.meta.url);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Dynamic import / import.meta 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Dynamic import / import.meta 的旧写法或误用",
      broken: "import { format } from './format.js';\nconsole.log(format('hello'));",
      fixed: "const { format } = await import('./format.js');\nconsole.log(format('hello'));\nconsole.log(import.meta.url);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Dynamic import / import.meta 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Dynamic import / import.meta 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2020",
    title: "String.matchAll",
    explanation: [
      "matchAll 返回所有正则匹配结果的迭代器，并保留捕获组信息。",
      "典型使用场景：使用 matchAll 提取字符串中的所有数字。",
      "解决的旧写法问题：用 RegExp.exec 循环收集多次匹配容易忘记 global 标志，也会混入状态推进细节。",
      "适合使用：需要遍历字符串中的所有正则匹配，并保留捕获组信息。",
      "继续用传统写法：只需要第一个匹配用 match；只需要判断是否匹配用 test。"
    ],
    exercise: "使用 matchAll 提取字符串中的所有数字。",
    starterCode: "const text = 'a1 b22 c333';\nconst matches = text.match(/\\d+/g);\nconsole.log(matches);",
    errorCode: "text.match(/\\d+/g);",
    correctCode: "const text = 'a1 b22 c333';\nconst matches = [...text.matchAll(/\\d+/g)].map(match => match[0]);\nconsole.log(matches);",
    practice: {
      prompt: "独立完成：使用 matchAll 提取字符串中的所有数字。",
      starter: "// 使用 String.matchAll 完成本课练习。\n// 目标：使用 matchAll 提取字符串中的所有数字。\n\n",
      answer: "const text = 'a1 b22 c333';\nconst matches = [...text.matchAll(/\\d+/g)].map(match => match[0]);\nconsole.log(matches);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 String.matchAll 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 String.matchAll 的旧写法或误用",
      broken: "const text = 'a1 b22 c333';\nconst matches = text.match(/\\d+/g);\nconsole.log(matches);",
      fixed: "const text = 'a1 b22 c333';\nconst matches = [...text.matchAll(/\\d+/g)].map(match => match[0]);\nconsole.log(matches);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 String.matchAll 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 String.matchAll 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  }
];
