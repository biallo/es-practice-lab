export const esnextLessons = [
  {
    version: "ESNext",
    title: "Array.fromAsync",
    explanation: [
      "Array.fromAsync 可以从异步可迭代对象或 Promise 集合创建数组，是 Array.from 的异步版本。",
      "典型使用场景：使用 Array.fromAsync 收集异步迭代结果。",
      "解决的旧写法问题：异步可迭代对象转数组过去要手写 for await...of 收集结果。",
      "适合使用：需要把异步迭代结果完整收集成数组，再进行后续数组处理。",
      "继续用传统写法：数据量很大或可以流式处理时，不要一次性收集，继续用 for await...of。"
    ],
    exercise: "使用 Array.fromAsync 收集异步迭代结果。",
    starterCode: "async function collect(source) {\n  const result = [];\n  for await (const item of source) {\n    result.push(item);\n  }\n  return result;\n}",
    errorCode: "const result = [];\nfor await (const item of source) {\n  result.push(item);\n}",
    correctCode: "async function collect(source) {\n  return Array.fromAsync(source);\n}",
    practice: {
      prompt: "独立完成：使用 Array.fromAsync 收集异步迭代结果。",
      starter: "// 使用 Array.fromAsync 完成本课练习。\n// 目标：使用 Array.fromAsync 收集异步迭代结果。\n\n",
      answer: "async function collect(source) {\n  return Array.fromAsync(source);\n}",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Array.fromAsync 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Array.fromAsync 的旧写法或误用",
      broken: "async function collect(source) {\n  const result = [];\n  for await (const item of source) {\n    result.push(item);\n  }\n  return result;\n}",
      fixed: "async function collect(source) {\n  return Array.fromAsync(source);\n}",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Array.fromAsync 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Array.fromAsync 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ESNext",
    title: "Error.isError",
    explanation: [
      "Error.isError 提供标准方式判断一个值是否为 Error 对象，比 instanceof Error 更适合跨 realm 场景。",
      "典型使用场景：使用 Error.isError 判断捕获到的值。",
      "解决的旧写法问题：instanceof Error 在跨 realm 场景可能失效，自定义判断又不统一。",
      "适合使用：需要可靠判断一个值是不是 Error 对象，尤其是库代码或跨 iframe/worker 数据。",
      "继续用传统写法：只是在 catch 中处理当前抛出的错误，直接使用 error 对象并读取 message 通常够用。"
    ],
    exercise: "使用 Error.isError 判断捕获到的值。",
    starterCode: "try {\n  JSON.parse('{');\n} catch (value) {\n  console.log(value instanceof Error);\n}",
    errorCode: "value instanceof Error",
    correctCode: "try {\n  JSON.parse('{');\n} catch (value) {\n  console.log(Error.isError(value));\n}",
    practice: {
      prompt: "独立完成：使用 Error.isError 判断捕获到的值。",
      starter: "// 使用 Error.isError 完成本课练习。\n// 目标：使用 Error.isError 判断捕获到的值。\n\n",
      answer: "try {\n  JSON.parse('{');\n} catch (value) {\n  console.log(Error.isError(value));\n}",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Error.isError 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Error.isError 的旧写法或误用",
      broken: "try {\n  JSON.parse('{');\n} catch (value) {\n  console.log(value instanceof Error);\n}",
      fixed: "try {\n  JSON.parse('{');\n} catch (value) {\n  console.log(Error.isError(value));\n}",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Error.isError 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Error.isError 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ESNext",
    title: "Uint8Array Base64 / Hex",
    explanation: [
      "Uint8Array toBase64、fromBase64、toHex、fromHex 等方法让二进制和文本编码转换标准化。",
      "典型使用场景：使用 Uint8Array.fromBase64 解码 Base64 字符串。",
      "解决的旧写法问题：二进制数据和 Base64/Hex 互转过去常依赖 btoa/atob、Buffer 或手写循环。",
      "适合使用：需要在浏览器标准 API 中处理字节数组编码和解码。",
      "继续用传统写法：字符串编码、文本解码仍应使用 TextEncoder/TextDecoder；Node 专属代码可继续用 Buffer。"
    ],
    exercise: "使用 Uint8Array.fromBase64 解码 Base64 字符串。",
    starterCode: "const text = atob('SGVsbG8=');\nconst bytes = Uint8Array.from(text, ch => ch.charCodeAt(0));\nconsole.log(bytes);",
    errorCode: "atob('SGVsbG8=')",
    correctCode: "const bytes = Uint8Array.fromBase64('SGVsbG8=');\nconsole.log(bytes.toBase64());",
    practice: {
      prompt: "独立完成：使用 Uint8Array.fromBase64 解码 Base64 字符串。",
      starter: "// 使用 Uint8Array Base64 / Hex 完成本课练习。\n// 目标：使用 Uint8Array.fromBase64 解码 Base64 字符串。\n\n",
      answer: "const bytes = Uint8Array.fromBase64('SGVsbG8=');\nconsole.log(bytes.toBase64());",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Uint8Array Base64 / Hex 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Uint8Array Base64 / Hex 的旧写法或误用",
      broken: "const text = atob('SGVsbG8=');\nconst bytes = Uint8Array.from(text, ch => ch.charCodeAt(0));\nconsole.log(bytes);",
      fixed: "const bytes = Uint8Array.fromBase64('SGVsbG8=');\nconsole.log(bytes.toBase64());",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Uint8Array Base64 / Hex 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Uint8Array Base64 / Hex 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ESNext",
    title: "Map upsert",
    explanation: [
      "Map upsert 方法用于读取或插入默认值，避免手写 has、get、set 组合逻辑。",
      "典型使用场景：使用 getOrInsert 为 Map 中不存在的键设置默认数组。",
      "解决的旧写法问题：Map 中“有则更新、无则创建”过去要写 has/get/set 三步，容易重复查找。",
      "适合使用：计数、分组、缓存初始化等需要按 key 原子地插入或更新值的场景。",
      "继续用传统写法：逻辑只有简单 set，或更新规则很特殊需要多步判断时，显式代码更容易读。"
    ],
    exercise: "使用 getOrInsert 为 Map 中不存在的键设置默认数组。",
    starterCode: "const groups = new Map();\nconst key = 'js';\nif (!groups.has(key)) {\n  groups.set(key, []);\n}\ngroups.get(key).push('ES');",
    errorCode: "if (!groups.has(key)) {\n  groups.set(key, []);\n}",
    correctCode: "const groups = new Map();\nconst key = 'js';\ngroups.getOrInsert(key, []).push('ES');",
    practice: {
      prompt: "独立完成：使用 getOrInsert 为 Map 中不存在的键设置默认数组。",
      starter: "// 使用 Map upsert 完成本课练习。\n// 目标：使用 getOrInsert 为 Map 中不存在的键设置默认数组。\n\n",
      answer: "const groups = new Map();\nconst key = 'js';\ngroups.getOrInsert(key, []).push('ES');",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Map upsert 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Map upsert 的旧写法或误用",
      broken: "const groups = new Map();\nconst key = 'js';\nif (!groups.has(key)) {\n  groups.set(key, []);\n}\ngroups.get(key).push('ES');",
      fixed: "const groups = new Map();\nconst key = 'js';\ngroups.getOrInsert(key, []).push('ES');",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Map upsert 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Map upsert 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ESNext",
    title: "JSON.parse source text access",
    explanation: [
      "JSON.parse source text access 让 reviver 能读取原始 JSON 片段，适合处理大整数等会丢失精度的值。",
      "典型使用场景：在 reviver 中读取原始 source 文本。",
      "解决的旧写法问题：JSON.parse 后只得到值，无法知道某个值在原始文本里的写法，精度和审计场景受限。",
      "适合使用：需要保留大数字原文、做解析审计，或根据原始 JSON 片段做更精细处理。",
      "继续用传统写法：普通配置和接口数据只关心解析后的值时，常规 JSON.parse 更简单。"
    ],
    exercise: "在 reviver 中读取原始 source 文本。",
    starterCode: "const data = JSON.parse('{\"big\":9007199254740993}');\nconsole.log(data.big);",
    errorCode: "JSON.parse('{\"big\":9007199254740993}')",
    correctCode: "const data = JSON.parse('{\"big\":9007199254740993}', (key, value, context) => {\n  return key === 'big' ? BigInt(context.source) : value;\n});\nconsole.log(data.big);",
    practice: {
      prompt: "独立完成：在 reviver 中读取原始 source 文本。",
      starter: "// 使用 JSON.parse source text access 完成本课练习。\n// 目标：在 reviver 中读取原始 source 文本。\n\n",
      answer: "const data = JSON.parse('{\"big\":9007199254740993}', (key, value, context) => {\n  return key === 'big' ? BigInt(context.source) : value;\n});\nconsole.log(data.big);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 JSON.parse source text access 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 JSON.parse source text access 的旧写法或误用",
      broken: "const data = JSON.parse('{\"big\":9007199254740993}');\nconsole.log(data.big);",
      fixed: "const data = JSON.parse('{\"big\":9007199254740993}', (key, value, context) => {\n  return key === 'big' ? BigInt(context.source) : value;\n});\nconsole.log(data.big);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 JSON.parse source text access 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 JSON.parse source text access 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ESNext",
    title: "Math.sumPrecise",
    explanation: [
      "Math.sumPrecise 用更稳定的方式求和，减少浮点数累加误差对结果的影响。",
      "典型使用场景：使用 Math.sumPrecise 计算浮点数组总和。",
      "解决的旧写法问题：浮点数直接累加会遇到 0.1 + 0.2 这类精度误差，手写补偿算法又复杂。",
      "适合使用：需要对浮点数组求和并尽量减少累积误差。",
      "继续用传统写法：金额等十进制精确业务仍应使用整数分、Decimal 库或后端精确类型，而不是只靠浮点求和。"
    ],
    exercise: "使用 Math.sumPrecise 计算浮点数组总和。",
    starterCode: "const values = [0.1, 0.2, 0.3];\nconst total = values.reduce((sum, value) => sum + value, 0);\nconsole.log(total);",
    errorCode: "values.reduce((sum, value) => sum + value, 0);",
    correctCode: "const values = [0.1, 0.2, 0.3];\nconst total = Math.sumPrecise(values);\nconsole.log(total);",
    practice: {
      prompt: "独立完成：使用 Math.sumPrecise 计算浮点数组总和。",
      starter: "// 使用 Math.sumPrecise 完成本课练习。\n// 目标：使用 Math.sumPrecise 计算浮点数组总和。\n\n",
      answer: "const values = [0.1, 0.2, 0.3];\nconst total = Math.sumPrecise(values);\nconsole.log(total);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Math.sumPrecise 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Math.sumPrecise 的旧写法或误用",
      broken: "const values = [0.1, 0.2, 0.3];\nconst total = values.reduce((sum, value) => sum + value, 0);\nconsole.log(total);",
      fixed: "const values = [0.1, 0.2, 0.3];\nconst total = Math.sumPrecise(values);\nconsole.log(total);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Math.sumPrecise 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Math.sumPrecise 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ESNext",
    title: "Temporal",
    explanation: [
      "Temporal 是新的日期时间 API，用于替代 Date 在时区、日历和不可变数据方面的长期痛点。",
      "典型使用场景：使用 Temporal.PlainDate 表示一个不包含时区的日期。",
      "解决的旧写法问题：Date 同时混合时间点、时区和本地日期，解析和时区行为长期容易出错。",
      "适合使用：需要明确区分日期、时间、时区、持续时间，或构建可靠的日历/时区逻辑。",
      "继续用传统写法：只要记录当前时间戳或和旧 API 交互时，Date 仍然简单且兼容性最好。"
    ],
    exercise: "使用 Temporal.PlainDate 表示一个不包含时区的日期。",
    starterCode: "const date = new Date('2026-04-29T00:00:00Z');\nconsole.log(date.toISOString().slice(0, 10));",
    errorCode: "new Date('2026-04-29T00:00:00Z');",
    correctCode: "const date = Temporal.PlainDate.from('2026-04-29');\nconsole.log(date.toString());",
    practice: {
      prompt: "独立完成：使用 Temporal.PlainDate 表示一个不包含时区的日期。",
      starter: "// 使用 Temporal 完成本课练习。\n// 目标：使用 Temporal.PlainDate 表示一个不包含时区的日期。\n\n",
      answer: "const date = Temporal.PlainDate.from('2026-04-29');\nconsole.log(date.toString());",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Temporal 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Temporal 的旧写法或误用",
      broken: "const date = new Date('2026-04-29T00:00:00Z');\nconsole.log(date.toISOString().slice(0, 10));",
      fixed: "const date = Temporal.PlainDate.from('2026-04-29');\nconsole.log(date.toString());",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Temporal 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Temporal 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  }
];
