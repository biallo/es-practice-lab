export const es2023Lessons = [
  {
    version: "ES2023",
    title: "Change Array by Copy",
    explanation: [
      "toSorted、toReversed、toSpliced 和 with 返回新数组，避免直接修改原数组。",
      "toSorted 对应 sort 的非变异版本，返回排序后的新数组。",
      "toReversed 对应 reverse 的非变异版本，返回反转后的新数组。",
      "toSpliced 对应 splice 的非变异版本，返回插入、删除或替换后的新数组。",
      "with 用于替换指定索引的元素，返回替换后的新数组。",
      "典型使用场景：排序、反转、替换元素或局部更新数组，并保留原数组不变。",
      "解决的旧写法问题：sort、reverse、splice 会原地修改数组，容易在状态管理和 UI 更新里产生副作用。",
      "适合使用：需要排序、反转、替换元素但保留原数组不变，尤其是不可变状态更新。",
      "继续用传统写法：明确需要原地修改以节省内存或性能敏感时，传统变异方法更直接。"
    ],
    exercise: "分别使用 toSorted、toReversed、toSpliced 和 with 创建新数组。",
    starterCode: "const numbers = [3, 1, 2];\nconst sorted = [...numbers].sort((a, b) => a - b);\nconsole.log(numbers, sorted);\n\nconst letters = ['a', 'b', 'c'];\nconst reversed = [...letters].reverse();\nconsole.log(letters, reversed);\n\nconst items = ['a', 'b', 'c'];\nconst spliced = [...items];\nspliced.splice(1, 1, 'x');\nconsole.log(items, spliced);\n\nconst scores = [10, 20, 30];\nconst updated = scores.map((score, index) => index === 1 ? 99 : score);\nconsole.log(scores, updated);",
    errorCode: "[...numbers].sort((a, b) => a - b);\n[...letters].reverse();\nspliced.splice(1, 1, 'x');\nscores.map((score, index) => index === 1 ? 99 : score);",
    correctCode: "const numbers = [3, 1, 2];\nconst sorted = numbers.toSorted((a, b) => a - b);\nconsole.log(numbers, sorted);\n\nconst letters = ['a', 'b', 'c'];\nconst reversed = letters.toReversed();\nconsole.log(letters, reversed);\n\nconst items = ['a', 'b', 'c'];\nconst spliced = items.toSpliced(1, 1, 'x');\nconsole.log(items, spliced);\n\nconst scores = [10, 20, 30];\nconst updated = scores.with(1, 99);\nconsole.log(scores, updated);",
    practice: {
      prompt: "独立完成：分别使用 toSorted、toReversed、toSpliced 和 with 创建新数组。",
      starter: "// 使用 Change Array by Copy 完成本课练习。\n// 目标：分别使用 toSorted、toReversed、toSpliced 和 with 创建新数组。\n\n",
      answer: "const numbers = [3, 1, 2];\nconst sorted = numbers.toSorted((a, b) => a - b);\nconsole.log(numbers, sorted);\n\nconst letters = ['a', 'b', 'c'];\nconst reversed = letters.toReversed();\nconsole.log(letters, reversed);\n\nconst items = ['a', 'b', 'c'];\nconst spliced = items.toSpliced(1, 1, 'x');\nconsole.log(items, spliced);\n\nconst scores = [10, 20, 30];\nconst updated = scores.with(1, 99);\nconsole.log(scores, updated);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Change Array by Copy 的写法完成目标。",
        "numbers.toSorted(...) 对应 toSorted：排序后返回新数组。",
        "letters.toReversed() 对应 toReversed：反转后返回新数组。",
        "items.toSpliced(1, 1, 'x') 对应 toSpliced：从索引 1 删除 1 项并插入 'x'，返回新数组。",
        "scores.with(1, 99) 对应 with：把索引 1 的元素替换成 99，返回新数组。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Change Array by Copy 的旧写法或误用",
      broken: "const numbers = [3, 1, 2];\nconst sorted = [...numbers].sort((a, b) => a - b);\nconsole.log(numbers, sorted);\n\nconst letters = ['a', 'b', 'c'];\nconst reversed = [...letters].reverse();\nconsole.log(letters, reversed);\n\nconst items = ['a', 'b', 'c'];\nconst spliced = [...items];\nspliced.splice(1, 1, 'x');\nconsole.log(items, spliced);\n\nconst scores = [10, 20, 30];\nconst updated = scores.map((score, index) => index === 1 ? 99 : score);\nconsole.log(scores, updated);",
      fixed: "const numbers = [3, 1, 2];\nconst sorted = numbers.toSorted((a, b) => a - b);\nconsole.log(numbers, sorted);\n\nconst letters = ['a', 'b', 'c'];\nconst reversed = letters.toReversed();\nconsole.log(letters, reversed);\n\nconst items = ['a', 'b', 'c'];\nconst spliced = items.toSpliced(1, 1, 'x');\nconsole.log(items, spliced);\n\nconst scores = [10, 20, 30];\nconst updated = scores.with(1, 99);\nconsole.log(scores, updated);",
      reason: [
        "解决的旧写法问题：sort、reverse、splice 会原地修改数组，容易在状态管理和 UI 更新里产生副作用。",
        "这道改错要重点替换四处：用 toSorted 替代复制后 sort，用 toReversed 替代复制后 reverse，用 toSpliced 替代复制后 splice，用 with 替代按索引 map 替换。"
      ]
    },
    review: [
      "能说出 Change Array by Copy 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2023",
    title: "Array.findLast / findLastIndex",
    explanation: [
      "findLast 和 findLastIndex 从数组末尾开始查找，适合寻找最后一次满足条件的元素。",
      "典型使用场景：找到最后一个大于 10 的数字。",
      "解决的旧写法问题：从后往前找元素过去要先 reverse 或手写反向循环，容易改变数组或写出样板代码。",
      "适合使用：需要找到最后一个满足条件的元素或位置。",
      "继续用传统写法：需要全部匹配项用 filter；复杂反向遍历和提前退出逻辑可以用普通循环。"
    ],
    exercise: "找到最后一个大于 10 的数字。",
    starterCode: "const numbers = [5, 12, 8, 20];\nconst result = numbers.filter(n => n > 10).pop();\nconsole.log(result);",
    errorCode: "numbers.filter(n => n > 10).pop();",
    correctCode: "const numbers = [5, 12, 8, 20];\nconst result = numbers.findLast(n => n > 10);\nconsole.log(result);",
    practice: {
      prompt: "独立完成：找到最后一个大于 10 的数字。",
      starter: "// 使用 Array.findLast / findLastIndex 完成本课练习。\n// 目标：找到最后一个大于 10 的数字。\n\n",
      answer: "const numbers = [5, 12, 8, 20];\nconst result = numbers.findLast(n => n > 10);\nconsole.log(result);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Array.findLast / findLastIndex 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Array.findLast / findLastIndex 的旧写法或误用",
      broken: "const numbers = [5, 12, 8, 20];\nconst result = numbers.filter(n => n > 10).pop();\nconsole.log(result);",
      fixed: "const numbers = [5, 12, 8, 20];\nconst result = numbers.findLast(n => n > 10);\nconsole.log(result);",
      reason: [
        "解决的旧写法问题：从后往前找元素过去要先 reverse 或手写反向循环，容易改变数组或写出样板代码。",
        "这道改错要重点替换这段旧写法：numbers.filter(n => n > 10).pop();"
      ]
    },
    review: [
      "能说出 Array.findLast / findLastIndex 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2023",
    title: "Symbols as WeakMap keys",
    explanation: [
      "ES2023 允许非注册 Symbol 作为 WeakMap 键，适合创建不可枚举、不可猜测的弱关联令牌。",
      "典型使用场景：使用 Symbol 作为 WeakMap 的键。",
      "解决的旧写法问题：WeakMap 过去只能用对象做 key，想用唯一 token 关联弱引用元数据时选择有限。",
      "适合使用：需要用不可注册 Symbol 作为不会冲突的弱键来存储元信息。",
      "继续用传统写法：需要可枚举、可序列化或跨模块共享 key 时，普通对象 key 或 Symbol.for 不适合这个弱键场景。"
    ],
    exercise: "使用 Symbol 作为 WeakMap 的键。",
    starterCode: "const token = {};\nconst map = new WeakMap();\nmap.set(token, 'secret');\nconsole.log(map.get(token));",
    errorCode: "const token = {};",
    correctCode: "const token = Symbol('token');\nconst map = new WeakMap();\nmap.set(token, 'secret');\nconsole.log(map.get(token));",
    practice: {
      prompt: "独立完成：使用 Symbol 作为 WeakMap 的键。",
      starter: "// 使用 Symbols as WeakMap keys 完成本课练习。\n// 目标：使用 Symbol 作为 WeakMap 的键。\n\n",
      answer: "const token = Symbol('token');\nconst map = new WeakMap();\nmap.set(token, 'secret');\nconsole.log(map.get(token));",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Symbols as WeakMap keys 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Symbols as WeakMap keys 的旧写法或误用",
      broken: "const token = {};\nconst map = new WeakMap();\nmap.set(token, 'secret');\nconsole.log(map.get(token));",
      fixed: "const token = Symbol('token');\nconst map = new WeakMap();\nmap.set(token, 'secret');\nconsole.log(map.get(token));",
      reason: [
        "解决的旧写法问题：WeakMap 过去只能用对象做 key，想用唯一 token 关联弱引用元数据时选择有限。",
        "这道改错要重点替换这段旧写法：const token = {};"
      ]
    },
    review: [
      "能说出 Symbols as WeakMap keys 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  }
];
