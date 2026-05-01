export const es2019Lessons = [
  {
    version: "ES2019",
    title: "Object.fromEntries",
    explanation: [
      "ES2019 引入 Object.fromEntries，将键值对数组转换为对象。",
      "典型使用场景：将 [ [\"name\", \"Alice\"], [\"age\", 30] ] 转成对象。",
      "解决的旧写法问题：把键值对列表转回对象时，以前要手写 reduce 或 for 循环累加。",
      "适合使用：处理 Object.entries、Map、URLSearchParams 等键值对数据后，需要生成普通对象。",
      "继续用传统写法：需要保留重复 key、非字符串 key 或插入顺序语义时，Map 更合适。"
    ],
    exercise: "将 [ [\"name\", \"Alice\"], [\"age\", 30] ] 转成对象。",
    starterCode: "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = {};\nfor (const [key, value] of entries) {\n  obj[key] = value;\n}",
    errorCode: "for (const [key, value] of entries) {\n  obj[key] = value;\n}",
    correctCode: "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = Object.fromEntries(entries);",
    practice: {
      prompt: "独立完成：将 [ [\"name\", \"Alice\"], [\"age\", 30] ] 转成对象。",
      starter: "// 使用 Object.fromEntries 完成本课练习。\n// 目标：将 [ [\"name\", \"Alice\"], [\"age\", 30] ] 转成对象。\n\n",
      answer: "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = Object.fromEntries(entries);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Object.fromEntries 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Object.fromEntries 的旧写法或误用",
      broken: "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = {};\nfor (const [key, value] of entries) {\n  obj[key] = value;\n}",
      fixed: "const entries = [['name', 'Alice'], ['age', 30]];\nconst obj = Object.fromEntries(entries);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Object.fromEntries 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Object.fromEntries 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2019",
    title: "Array.flat / flatMap",
    explanation: [
      "flat 用于展开嵌套数组，flatMap 则把 map 和一层 flat 合并成一步。",
      "典型使用场景：使用 flat 将二维数组展平成一维数组。",
      "解决的旧写法问题：展开嵌套数组常要 concat(...list) 或 reduce，map 后再 flat 也会分成两步。",
      "适合使用：需要展开固定深度数组，或对每项映射后展开一层。",
      "继续用传统写法：嵌套结构代表真实层级关系，或需要自定义递归规则时，不要盲目拍平。"
    ],
    exercise: "使用 flat 将二维数组展平成一维数组。",
    starterCode: "const list = [[1, 2], [3, 4]];\nconst result = [].concat(...list);\nconsole.log(result);",
    errorCode: "[].concat(...list);",
    correctCode: "const list = [[1, 2], [3, 4]];\nconst result = list.flat();\nconsole.log(result);",
    practice: {
      prompt: "独立完成：使用 flat 将二维数组展平成一维数组。",
      starter: "// 使用 Array.flat / flatMap 完成本课练习。\n// 目标：使用 flat 将二维数组展平成一维数组。\n\n",
      answer: "const list = [[1, 2], [3, 4]];\nconst result = list.flat();\nconsole.log(result);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Array.flat / flatMap 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Array.flat / flatMap 的旧写法或误用",
      broken: "const list = [[1, 2], [3, 4]];\nconst result = [].concat(...list);\nconsole.log(result);",
      fixed: "const list = [[1, 2], [3, 4]];\nconst result = list.flat();\nconsole.log(result);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Array.flat / flatMap 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Array.flat / flatMap 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2019",
    title: "Optional catch binding",
    explanation: [
      "当 catch 块不需要错误对象时，ES2019 允许省略 catch 参数，让代码更简洁。",
      "典型使用场景：移除没有使用的 error 参数。",
      "解决的旧写法问题：catch 块不使用错误对象时，仍要写一个 error 参数，容易制造未使用变量噪音。",
      "适合使用：只关心“失败了”这个事实，不需要读取错误详情。",
      "继续用传统写法：需要记录、分类、重新抛出错误时，保留 error 参数更清楚。"
    ],
    exercise: "移除没有使用的 error 参数。",
    starterCode: "try {\n  JSON.parse('{');\n} catch (error) {\n  console.log('invalid json');\n}",
    errorCode: "catch (error) {",
    correctCode: "try {\n  JSON.parse('{');\n} catch {\n  console.log('invalid json');\n}",
    practice: {
      prompt: "独立完成：移除没有使用的 error 参数。",
      starter: "// 使用 Optional catch binding 完成本课练习。\n// 目标：移除没有使用的 error 参数。\n\n",
      answer: "try {\n  JSON.parse('{');\n} catch {\n  console.log('invalid json');\n}",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Optional catch binding 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Optional catch binding 的旧写法或误用",
      broken: "try {\n  JSON.parse('{');\n} catch (error) {\n  console.log('invalid json');\n}",
      fixed: "try {\n  JSON.parse('{');\n} catch {\n  console.log('invalid json');\n}",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Optional catch binding 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Optional catch binding 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2019",
    title: "Symbol.description",
    explanation: [
      "Symbol.description 可以直接读取 Symbol 的描述文本，避免从 toString 结果中手动截取。",
      "典型使用场景：使用 description 读取 Symbol 描述。",
      "解决的旧写法问题：以前要从 symbol.toString() 里截取描述文本，写法脆弱且不直观。",
      "适合使用：调试、日志或开发工具里需要读取 Symbol 的描述。",
      "继续用传统写法：业务逻辑不应依赖 description 判断身份；真正的身份仍然是 Symbol 值本身。"
    ],
    exercise: "使用 description 读取 Symbol 描述。",
    starterCode: "const id = Symbol('userId');\nconst desc = id.toString().slice(7, -1);\nconsole.log(desc);",
    errorCode: "id.toString().slice(7, -1);",
    correctCode: "const id = Symbol('userId');\nconst desc = id.description;\nconsole.log(desc);",
    practice: {
      prompt: "独立完成：使用 description 读取 Symbol 描述。",
      starter: "// 使用 Symbol.description 完成本课练习。\n// 目标：使用 description 读取 Symbol 描述。\n\n",
      answer: "const id = Symbol('userId');\nconst desc = id.description;\nconsole.log(desc);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Symbol.description 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Symbol.description 的旧写法或误用",
      broken: "const id = Symbol('userId');\nconst desc = id.toString().slice(7, -1);\nconsole.log(desc);",
      fixed: "const id = Symbol('userId');\nconst desc = id.description;\nconsole.log(desc);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Symbol.description 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Symbol.description 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  }
];
