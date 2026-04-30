export const es2022Lessons = [
  {
    version: "ES2022",
    title: "类字段与私有属性",
    explanation: [
      "类字段与私有属性 是 ES2022 中值得掌握的特性。它的核心作用是：ES2022 支持类字段和私有属性，类定义更直观，还能保护内部状态。",
      "典型使用场景：创建一个带私有字段的类，并返回字段值。",
      "解决的旧写法问题：构造函数里反复声明实例字段，或用下划线约定私有字段，都不够直观或不够严格。",
      "适合使用：需要在 class 中直接声明实例字段、静态字段，或真正限制外部访问的 #private 字段。",
      "继续用传统写法：只是简单工厂对象或数据结构时，普通对象/闭包可能更轻；公共字段不要滥用 #private。"
    ],
    exercise: "创建一个带私有字段的类，并返回字段值。",
    starterCode: "class Counter {\n  constructor() {\n    this.count = 0;\n  }\n  increment() {\n    this.count += 1;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.count);",
    errorCode: "this.count = 0;\nthis.count += 1;\nconsole.log(c.count);",
    correctCode: "class Counter {\n  #count = 0;\n  increment() {\n    this.#count += 1;\n  }\n  get value() {\n    return this.#count;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.value);",
    practice: {
      prompt: "独立完成：创建一个带私有字段的类，并返回字段值。",
      starter: "// 使用 类字段与私有属性 完成本课练习。\n// 目标：创建一个带私有字段的类，并返回字段值。\n\n",
      answer: "class Counter {\n  #count = 0;\n  increment() {\n    this.#count += 1;\n  }\n  get value() {\n    return this.#count;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.value);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 类字段与私有属性 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 类字段与私有属性 的旧写法或误用",
      broken: "class Counter {\n  constructor() {\n    this.count = 0;\n  }\n  increment() {\n    this.count += 1;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.count);",
      fixed: "class Counter {\n  #count = 0;\n  increment() {\n    this.#count += 1;\n  }\n  get value() {\n    return this.#count;\n  }\n}\nconst c = new Counter();\nc.increment();\nconsole.log(c.value);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 类字段与私有属性 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 类字段与私有属性 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2022",
    title: "Array.prototype.at",
    explanation: [
      "Array.prototype.at 是 ES2022 中值得掌握的特性。它的核心作用是：ES2022 引入 Array.prototype.at，支持使用负数索引访问数组末尾元素。",
      "典型使用场景：使用 .at 获取数组最后一个元素。",
      "解决的旧写法问题：访问倒数元素过去要写 arr[arr.length - 1]，字符串和数组写法也不统一。",
      "适合使用：需要按正向或负向索引读取数组、字符串等可索引对象。",
      "继续用传统写法：需要兼容很旧环境或只是固定正向索引时，方括号仍然最直接。"
    ],
    exercise: "使用 .at 获取数组最后一个元素。",
    starterCode: "const items = ['a', 'b', 'c'];\nconst last = items[items.length - 1];",
    errorCode: "const last = items[items.length - 1];",
    correctCode: "const items = ['a', 'b', 'c'];\nconst last = items.at(-1);",
    practice: {
      prompt: "独立完成：使用 .at 获取数组最后一个元素。",
      starter: "// 使用 Array.prototype.at 完成本课练习。\n// 目标：使用 .at 获取数组最后一个元素。\n\n",
      answer: "const items = ['a', 'b', 'c'];\nconst last = items.at(-1);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Array.prototype.at 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Array.prototype.at 的旧写法或误用",
      broken: "const items = ['a', 'b', 'c'];\nconst last = items[items.length - 1];",
      fixed: "const items = ['a', 'b', 'c'];\nconst last = items.at(-1);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Array.prototype.at 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Array.prototype.at 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2022",
    title: "Class static block",
    explanation: [
      "Class static block 是 ES2022 中值得掌握的特性。它的核心作用是：静态初始化块允许 class 在定义阶段执行一次初始化逻辑，适合设置静态字段或复杂配置。",
      "典型使用场景：使用 static block 初始化静态字段。",
      "解决的旧写法问题：类的静态初始化如果需要多步逻辑，以前只能写在类外，容易打散封装。",
      "适合使用：静态字段初始化需要 try/catch、条件判断或读取私有静态字段。",
      "继续用传统写法：只是给静态字段一个简单值时，直接静态字段声明更清楚。"
    ],
    exercise: "使用 static block 初始化静态字段。",
    starterCode: "class Config {}\nConfig.value = 'ready';\nconsole.log(Config.value);",
    errorCode: "Config.value = 'ready';",
    correctCode: "class Config {\n  static value;\n  static {\n    this.value = 'ready';\n  }\n}\nconsole.log(Config.value);",
    practice: {
      prompt: "独立完成：使用 static block 初始化静态字段。",
      starter: "// 使用 Class static block 完成本课练习。\n// 目标：使用 static block 初始化静态字段。\n\n",
      answer: "class Config {\n  static value;\n  static {\n    this.value = 'ready';\n  }\n}\nconsole.log(Config.value);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Class static block 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Class static block 的旧写法或误用",
      broken: "class Config {}\nConfig.value = 'ready';\nconsole.log(Config.value);",
      fixed: "class Config {\n  static value;\n  static {\n    this.value = 'ready';\n  }\n}\nconsole.log(Config.value);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Class static block 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Class static block 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2022",
    title: "Private brand checks",
    explanation: [
      "Private brand checks 是 ES2022 中值得掌握的特性。它的核心作用是：private brand check 使用 #field in object 判断对象是否拥有某个私有字段，比 try/catch 访问更直接。",
      "典型使用场景：使用 #value in object 判断实例类型。",
      "解决的旧写法问题：判断对象是否拥有某个私有字段以前没有直接语法，只能间接 try/catch 或暴露标记。",
      "适合使用：类内部需要安全判断一个对象是不是本类私有结构的实例。",
      "继续用传统写法：公共类型判断用 instanceof、结构检查或显式字段更容易被外部代码理解。"
    ],
    exercise: "使用 #value in object 判断实例类型。",
    starterCode: "class Box {\n  #value = 1;\n  static isBox(object) {\n    try {\n      object.#value;\n      return true;\n    } catch {\n      return false;\n    }\n  }\n}",
    errorCode: "try {\n  object.#value;\n  return true;\n} catch {\n  return false;\n}",
    correctCode: "class Box {\n  #value = 1;\n  static isBox(object) {\n    return #value in object;\n  }\n}",
    practice: {
      prompt: "独立完成：使用 #value in object 判断实例类型。",
      starter: "// 使用 Private brand checks 完成本课练习。\n// 目标：使用 #value in object 判断实例类型。\n\n",
      answer: "class Box {\n  #value = 1;\n  static isBox(object) {\n    return #value in object;\n  }\n}",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Private brand checks 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Private brand checks 的旧写法或误用",
      broken: "class Box {\n  #value = 1;\n  static isBox(object) {\n    try {\n      object.#value;\n      return true;\n    } catch {\n      return false;\n    }\n  }\n}",
      fixed: "class Box {\n  #value = 1;\n  static isBox(object) {\n    return #value in object;\n  }\n}",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Private brand checks 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Private brand checks 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2022",
    title: "RegExp match indices",
    explanation: [
      "RegExp match indices 是 ES2022 中值得掌握的特性。它的核心作用是：RegExp d 标志会在匹配结果上提供 indices，方便获取匹配文本和捕获组在原字符串中的位置。",
      "典型使用场景：使用 d 标志读取匹配位置。",
      "解决的旧写法问题：拿到捕获文本后还要手动计算起止位置，尤其多个捕获组时容易出错。",
      "适合使用：语法高亮、解析器、编辑器标注等需要每个匹配和捕获组的位置。",
      "继续用传统写法：只关心匹配文本本身时，普通 match/exec 输出更简单。"
    ],
    exercise: "使用 d 标志读取匹配位置。",
    starterCode: "const match = /name:(\\w+)/.exec('name:Alice');\nconst start = match.index;\nconst end = start + match[0].length;\nconsole.log(start, end);",
    errorCode: "const end = start + match[0].length;",
    correctCode: "const match = /name:(\\w+)/d.exec('name:Alice');\nconsole.log(match.indices[0]);\nconsole.log(match.indices[1]);",
    practice: {
      prompt: "独立完成：使用 d 标志读取匹配位置。",
      starter: "// 使用 RegExp match indices 完成本课练习。\n// 目标：使用 d 标志读取匹配位置。\n\n",
      answer: "const match = /name:(\\w+)/d.exec('name:Alice');\nconsole.log(match.indices[0]);\nconsole.log(match.indices[1]);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 RegExp match indices 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 RegExp match indices 的旧写法或误用",
      broken: "const match = /name:(\\w+)/.exec('name:Alice');\nconst start = match.index;\nconst end = start + match[0].length;\nconsole.log(start, end);",
      fixed: "const match = /name:(\\w+)/d.exec('name:Alice');\nconsole.log(match.indices[0]);\nconsole.log(match.indices[1]);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 RegExp match indices 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 RegExp match indices 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2022",
    title: "Object.hasOwn",
    explanation: [
      "Object.hasOwn 是 ES2022 中值得掌握的特性。它的核心作用是：Object.hasOwn 是更安全的自有属性判断方式，避免直接调用对象上的 hasOwnProperty。",
      "典型使用场景：使用 Object.hasOwn 判断对象是否拥有 name 属性。",
      "解决的旧写法问题：obj.hasOwnProperty 可能被对象自身属性覆盖，Object.prototype.hasOwnProperty.call 又太冗长。",
      "适合使用：判断对象是否有某个自有属性，尤其是处理外部输入对象时。",
      "继续用传统写法：需要判断原型链上的属性时，用 in；需要取值时直接访问并配合空值判断。"
    ],
    exercise: "使用 Object.hasOwn 判断对象是否拥有 name 属性。",
    starterCode: "const user = { name: 'Alice' };\nconst result = user.hasOwnProperty('name');\nconsole.log(result);",
    errorCode: "user.hasOwnProperty('name');",
    correctCode: "const user = { name: 'Alice' };\nconst result = Object.hasOwn(user, 'name');\nconsole.log(result);",
    practice: {
      prompt: "独立完成：使用 Object.hasOwn 判断对象是否拥有 name 属性。",
      starter: "// 使用 Object.hasOwn 完成本课练习。\n// 目标：使用 Object.hasOwn 判断对象是否拥有 name 属性。\n\n",
      answer: "const user = { name: 'Alice' };\nconst result = Object.hasOwn(user, 'name');\nconsole.log(result);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Object.hasOwn 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Object.hasOwn 的旧写法或误用",
      broken: "const user = { name: 'Alice' };\nconst result = user.hasOwnProperty('name');\nconsole.log(result);",
      fixed: "const user = { name: 'Alice' };\nconst result = Object.hasOwn(user, 'name');\nconsole.log(result);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Object.hasOwn 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Object.hasOwn 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2022",
    title: "Top-level await",
    explanation: [
      "Top-level await 是 ES2022 中值得掌握的特性。它的核心作用是：Top-level await 允许在模块顶层直接等待异步结果，减少额外的 async 包装函数。",
      "典型使用场景：移除不必要的 async main 包装函数。",
      "解决的旧写法问题：模块顶层需要异步初始化时，以前要包一层 async 函数或导出 Promise。",
      "适合使用：模块加载前必须等待配置、资源或依赖初始化完成。",
      "继续用传统写法：会拖慢模块加载或阻塞依赖图时，应把异步逻辑放到显式函数里按需调用。"
    ],
    exercise: "移除不必要的 async main 包装函数。",
    starterCode: "async function main() {\n  const data = await Promise.resolve('ready');\n  console.log(data);\n}\nmain();",
    errorCode: "async function main() { ... }\nmain();",
    correctCode: "const data = await Promise.resolve('ready');\nconsole.log(data);",
    practice: {
      prompt: "独立完成：移除不必要的 async main 包装函数。",
      starter: "// 使用 Top-level await 完成本课练习。\n// 目标：移除不必要的 async main 包装函数。\n\n",
      answer: "const data = await Promise.resolve('ready');\nconsole.log(data);",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Top-level await 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Top-level await 的旧写法或误用",
      broken: "async function main() {\n  const data = await Promise.resolve('ready');\n  console.log(data);\n}\nmain();",
      fixed: "const data = await Promise.resolve('ready');\nconsole.log(data);",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Top-level await 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Top-level await 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  },
  {
    version: "ES2022",
    title: "Error cause",
    explanation: [
      "Error cause 是 ES2022 中值得掌握的特性。它的核心作用是：Error cause 用于在抛出新错误时保留原始错误，方便调试错误链路。",
      "典型使用场景：创建一个带 cause 的错误。",
      "解决的旧写法问题：包装错误时容易丢失原始错误，只能手动拼接 message 或加自定义字段。",
      "适合使用：捕获底层错误后抛出更高层语义错误，同时保留原始原因。",
      "继续用传统写法：只是原样继续抛出时不要额外包装；过度包装会让错误链变得啰嗦。"
    ],
    exercise: "创建一个带 cause 的错误。",
    starterCode: "try {\n  JSON.parse('{');\n} catch (error) {\n  throw new Error('配置解析失败: ' + error.message);\n}",
    errorCode: "new Error('配置解析失败: ' + error.message);",
    correctCode: "try {\n  JSON.parse('{');\n} catch (error) {\n  throw new Error('配置解析失败', { cause: error });\n}",
    practice: {
      prompt: "独立完成：创建一个带 cause 的错误。",
      starter: "// 使用 Error cause 完成本课练习。\n// 目标：创建一个带 cause 的错误。\n\n",
      answer: "try {\n  JSON.parse('{');\n} catch (error) {\n  throw new Error('配置解析失败', { cause: error });\n}",
      explanation: [
        "这道练习要求你从空白实现开始，主动选择 Error cause 的写法完成目标。",
        "参考答案展示的是本课推荐写法；对照时重点看它解决了旧写法里的哪类重复、歧义或安全问题。"
      ]
    },
    debugCase: {
      title: "修复 Error cause 的旧写法或误用",
      broken: "try {\n  JSON.parse('{');\n} catch (error) {\n  throw new Error('配置解析失败: ' + error.message);\n}",
      fixed: "try {\n  JSON.parse('{');\n} catch (error) {\n  throw new Error('配置解析失败', { cause: error });\n}",
      reason: [
        "改错题从一段已经存在的旧写法开始，目标不是从零实现，而是识别哪里没有用好本课知识点。",
        "修正版本使用 Error cause 表达同一意图，注意比较改动前后的语义是否保持一致。"
      ]
    },
    review: [
      "能说出 Error cause 主要解决的问题。",
      "能独立完成练习，并解释参考答案里的关键变化。",
      "能定位改错代码中的旧写法或误用，并写出修正理由。",
      "知道这个特性适合的常见场景，也知道不需要强行使用的场景。"
    ]
  }
];
