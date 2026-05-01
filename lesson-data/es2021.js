export const es2021Lessons = [
  {
    version: "ES2021",
    title: "Nullish Coalescing 与 逻辑赋值",
    explanation: [
      "ES2021 引入 nullish coalescing 和逻辑赋值，让默认值和条件赋值更简洁。",
      "典型使用场景：将条件赋值改写为 ||= 或 ??=。",
      "解决的旧写法问题：用 || 设置默认值会把 0、空字符串、false 当成缺失值误替换。",
      "适合使用：只有 null 或 undefined 才代表缺失，或需要简洁地按条件赋值。",
      "继续用传统写法：确实要把所有假值都视为无效时，|| 仍然表达得更准确。"
    ],
    exercise: "将条件赋值改写为 ||= 或 ??=。",
    starterCode: "let name = '';\nlet age;\nif (!name) name = 'Alice';\nif (age === undefined || age === null) age = 30;",
    errorCode: "if (!name) name = 'Alice';\nif (age === undefined || age === null) age = 30;",
    correctCode: "let name = '';\nlet age;\nname ||= 'Alice';\nage ??= 30;",
    practice: {
      prompt: "独立完成：将条件赋值改写为 ||= 或 ??=。",
      starter: "// 使用 Nullish Coalescing 与 逻辑赋值 完成本课练习。\n// 目标：将条件赋值改写为 ||= 或 ??=。\n\n",
      answer: "let name = '';\nlet age;\nname ||= 'Alice';\nage ??= 30;",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Nullish Coalescing 与 逻辑赋值 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Nullish Coalescing 与 逻辑赋值 的旧写法或误用",
      broken: "let name = '';\nlet age;\nif (!name) name = 'Alice';\nif (age === undefined || age === null) age = 30;",
      fixed: "let name = '';\nlet age;\nname ||= 'Alice';\nage ??= 30;",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Nullish Coalescing 与 逻辑赋值 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Nullish Coalescing 与 逻辑赋值 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2021",
    title: "String.replaceAll",
    explanation: [
      "ES2021 引入 String.replaceAll，方便替换字符串中所有匹配文本。",
      "典型使用场景：将字符串中的所有 a 替换成 b。",
      "解决的旧写法问题：replace 只替换第一个字符串匹配，替换全部时常要写全局正则并处理转义。",
      "适合使用：需要把固定字符串的所有出现位置都替换掉。",
      "继续用传统写法：需要复杂模式匹配、捕获组或条件替换时，正则 replace 更合适。"
    ],
    exercise: "将字符串中的所有 a 替换成 b。",
    starterCode: "const text = 'aba';\nconst result = text.replace(/a/g, 'b');",
    errorCode: "const result = text.replace(/a/g, 'b');",
    correctCode: "const text = 'aba';\nconst result = text.replaceAll('a', 'b');",
    practice: {
      prompt: "独立完成：将字符串中的所有 a 替换成 b。",
      starter: "// 使用 String.replaceAll 完成本课练习。\n// 目标：将字符串中的所有 a 替换成 b。\n\n",
      answer: "const text = 'aba';\nconst result = text.replaceAll('a', 'b');",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 String.replaceAll 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 String.replaceAll 的旧写法或误用",
      broken: "const text = 'aba';\nconst result = text.replace(/a/g, 'b');",
      fixed: "const text = 'aba';\nconst result = text.replaceAll('a', 'b');",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 String.replaceAll 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 String.replaceAll 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2021",
    title: "Promise.any",
    explanation: [
      "Promise.any 会在任意一个 Promise 成功时返回该结果，只有全部失败时才会 reject。",
      "典型使用场景：使用 Promise.any 获取最快成功的请求结果。",
      "解决的旧写法问题：Promise.race 会被最快失败打断，无法表达“等第一个成功结果”。",
      "适合使用：多个备选来源只要任意一个成功即可，例如镜像请求或降级数据源。",
      "继续用传统写法：关心最快完成无论成功失败用 race；需要全部成功用 all。"
    ],
    exercise: "使用 Promise.any 获取最快成功的请求结果。",
    starterCode: "const requests = [Promise.reject('bad'), Promise.resolve('ok')];\nPromise.race(requests).then(console.log).catch(console.log);",
    errorCode: "Promise.race(requests)",
    correctCode: "const requests = [Promise.reject('bad'), Promise.resolve('ok')];\nPromise.any(requests).then(console.log).catch(console.log);",
    practice: {
      prompt: "独立完成：使用 Promise.any 获取最快成功的请求结果。",
      starter: "// 使用 Promise.any 完成本课练习。\n// 目标：使用 Promise.any 获取最快成功的请求结果。\n\n",
      answer: "const requests = [Promise.reject('bad'), Promise.resolve('ok')];\nPromise.any(requests).then(console.log).catch(console.log);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Promise.any 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Promise.any 的旧写法或误用",
      broken: "const requests = [Promise.reject('bad'), Promise.resolve('ok')];\nPromise.race(requests).then(console.log).catch(console.log);",
      fixed: "const requests = [Promise.reject('bad'), Promise.resolve('ok')];\nPromise.any(requests).then(console.log).catch(console.log);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Promise.any 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Promise.any 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2021",
    title: "Numeric separators",
    explanation: [
      "数字分隔符允许用下划线提升长数字的可读性，不改变数字本身的值。",
      "典型使用场景：使用数字分隔符改写一百万。",
      "解决的旧写法问题：长数字字面量难读，位数和分组容易数错。",
      "适合使用：书写金额分、时间戳、位掩码、大整数等较长数字字面量。",
      "继续用传统写法：运行时字符串数字、用户输入或格式化展示不受它影响，仍需显式解析或格式化。"
    ],
    exercise: "使用数字分隔符改写一百万。",
    starterCode: "const amount = 1000000;\nconsole.log(amount);",
    errorCode: "1000000",
    correctCode: "const amount = 1_000_000;\nconsole.log(amount);",
    practice: {
      prompt: "独立完成：使用数字分隔符改写一百万。",
      starter: "// 使用 Numeric separators 完成本课练习。\n// 目标：使用数字分隔符改写一百万。\n\n",
      answer: "const amount = 1_000_000;\nconsole.log(amount);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Numeric separators 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Numeric separators 的旧写法或误用",
      broken: "const amount = 1000000;\nconsole.log(amount);",
      fixed: "const amount = 1_000_000;\nconsole.log(amount);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Numeric separators 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Numeric separators 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2021",
    title: "WeakRef / FinalizationRegistry",
    explanation: [
      "WeakRef 和 FinalizationRegistry 提供弱引用和对象回收后的清理通知，适合缓存等高级场景。",
      "典型使用场景：使用 WeakRef 保存一个可被回收的对象引用。",
      "解决的旧写法问题：某些缓存想引用对象又不想阻止垃圾回收，强引用 Map 会造成内存保留。",
      "适合使用：高级缓存、资源清理观察等非常底层且能接受回收时机不确定的场景。",
      "继续用传统写法：普通业务状态不要依赖垃圾回收时机；显式生命周期管理通常更可靠。"
    ],
    exercise: "使用 WeakRef 保存一个可被回收的对象引用。",
    starterCode: "let user = { name: 'Alice' };\nconst cache = user;\nuser = null;\nconsole.log(cache.name);",
    errorCode: "const cache = user;",
    correctCode: "let user = { name: 'Alice' };\nconst ref = new WeakRef(user);\nuser = null;\nconsole.log(ref.deref()?.name);",
    practice: {
      prompt: "独立完成：使用 WeakRef 保存一个可被回收的对象引用。",
      starter: "// 使用 WeakRef / FinalizationRegistry 完成本课练习。\n// 目标：使用 WeakRef 保存一个可被回收的对象引用。\n\n",
      answer: "let user = { name: 'Alice' };\nconst ref = new WeakRef(user);\nuser = null;\nconsole.log(ref.deref()?.name);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 WeakRef / FinalizationRegistry 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 WeakRef / FinalizationRegistry 的旧写法或误用",
      broken: "let user = { name: 'Alice' };\nconst cache = user;\nuser = null;\nconsole.log(cache.name);",
      fixed: "let user = { name: 'Alice' };\nconst ref = new WeakRef(user);\nuser = null;\nconsole.log(ref.deref()?.name);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 WeakRef / FinalizationRegistry 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 WeakRef / FinalizationRegistry 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  }
];
