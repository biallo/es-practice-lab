export const es2016Lessons = [
  {
    version: "ES2016",
    title: "指数运算符",
    explanation: [
      "ES2016 引入 ** 指数运算符，用于替代 Math.pow，书写更简洁。",
      "典型使用场景：将 Math.pow(2, 3) 改写为指数运算符。",
      "解决的旧写法问题：Math.pow 写法在表达式里不够直观，嵌套幂运算尤其难读。",
      "适合使用：表达数学上的幂运算，例如 2 ** 3 或 x ** 2。",
      "继续用传统写法：团队运行环境很旧，或公式周围已经大量使用 Math API 时，Math.pow 仍然清晰。"
    ],
    exercise: "将 Math.pow(2, 3) 改写为指数运算符。",
    starterCode: "const value = Math.pow(2, 3);",
    errorCode: "const value = Math.pow(2, 3);",
    correctCode: "const value = 2 ** 3;",
    practice: {
      prompt: "独立完成：将 Math.pow(2, 3) 改写为指数运算符。",
      starter: "// 使用 指数运算符 完成本课练习。\n// 目标：将 Math.pow(2, 3) 改写为指数运算符。\n\n",
      answer: "const value = 2 ** 3;",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 指数运算符 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 指数运算符 的旧写法或误用",
      broken: "const value = Math.pow(2, 3);",
      fixed: "const value = 2 ** 3;",
      reason: [
        "解决的旧写法问题：Math.pow 写法在表达式里不够直观，嵌套幂运算尤其难读。",
        "这道改错要重点替换这段旧写法：const value = Math.pow(2, 3);"
      ]
    },
    review: [
      "能说出 指数运算符 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2016",
    title: "Array.includes",
    explanation: [
      "ES2016 引入 Array.includes 方法，用于判断数组是否包含某个值，语义更清晰。",
      "典型使用场景：检查数组 [1, 2, 3] 是否包含数字 2。",
      "解决的旧写法问题：indexOf(...) !== -1 噪音多，并且对 NaN 的成员判断不友好。",
      "适合使用：只需要判断数组是否包含某个值，尤其是读起来应该像一个布尔条件时。",
      "继续用传统写法：需要元素位置时用 indexOf/findIndex；需要条件匹配时用 some。"
    ],
    exercise: "检查数组 [1, 2, 3] 是否包含数字 2。",
    starterCode: "const numbers = [1, 2, 3];\nconst hasTwo = numbers.indexOf(2) !== -1;",
    errorCode: "const hasTwo = numbers.indexOf(2) !== -1;",
    correctCode: "const hasTwo = numbers.includes(2);",
    practice: {
      prompt: "独立完成：检查数组 [1, 2, 3] 是否包含数字 2。",
      starter: "// 使用 Array.includes 完成本课练习。\n// 目标：检查数组 [1, 2, 3] 是否包含数字 2。\n\n",
      answer: "const hasTwo = numbers.includes(2);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Array.includes 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Array.includes 的旧写法或误用",
      broken: "const numbers = [1, 2, 3];\nconst hasTwo = numbers.indexOf(2) !== -1;",
      fixed: "const hasTwo = numbers.includes(2);",
      reason: [
        "解决的旧写法问题：indexOf(...) !== -1 噪音多，并且对 NaN 的成员判断不友好。",
        "这道改错要重点替换这段旧写法：const hasTwo = numbers.indexOf(2) !== -1;"
      ]
    },
    review: [
      "能说出 Array.includes 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  }
];
