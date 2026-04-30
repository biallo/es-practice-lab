# ECMAScript 本地练习项目

一个 ECMAScript 练习界面，适合本地运行和快速打包部署。项目支持：

- 每堂课核心讲解
- 每堂课练习题
- 错误代码与修正代码对比
- 练习完成标记
- 本地进度与代码草稿持久保存

## 在线预览

[https://biallo.github.io/es-practice-lab/](https://biallo.github.io/es-practice-lab/)

## 当前课程信息

当前项目内置 80 堂 ECMAScript 课程，覆盖从 ES6 到 ESNext 的常用、重要语法和新特性。

| 序号 | 版本 | 课程主题 |
| --- | --- | --- |
| 1 | ES6 | let / const 与块级作用域 |
| 2 | ES6 | 默认参数 |
| 3 | ES6 | Arrow Functions |
| 4 | ES6 | Template Literals |
| 5 | ES6 | Destructuring |
| 6 | ES6 | Spread / Rest |
| 7 | ES6 | 增强对象字面量 |
| 8 | ES6 | 计算属性名 |
| 9 | ES6 | Classes |
| 10 | ES6 | Promise |
| 11 | ES6 | Map |
| 12 | ES6 | Set |
| 13 | ES6 | Symbol |
| 14 | ES6 | for...of |
| 15 | ES6 | Generators |
| 16 | ES6 | 自定义迭代器 |
| 17 | ES6 | Array.from / Array.of |
| 18 | ES6 | Object.assign |
| 19 | ES6 | 字符串新增方法 |
| 20 | ES6 | Number 新增方法 |
| 21 | ES6 | ES Modules |
| 22 | ES6 | WeakMap / WeakSet |
| 23 | ES6 | Array.find / findIndex |
| 24 | ES6 | Proxy / Reflect |
| 25 | ES2016 | 指数运算符 |
| 26 | ES2016 | Array.includes |
| 27 | ES2017 | Async / Await |
| 28 | ES2017 | Object.values / Object.entries |
| 29 | ES2017 | String padding |
| 30 | ES2017 | Object.getOwnPropertyDescriptors |
| 31 | ES2018 | 对象展开/剩余属性 |
| 32 | ES2018 | Async Iteration |
| 33 | ES2018 | Promise.finally |
| 34 | ES2018 | RegExp 命名捕获组 |
| 35 | ES2018 | RegExp 增强：dotAll / lookbehind / Unicode properties |
| 36 | ES2019 | Object.fromEntries |
| 37 | ES2019 | Array.flat / flatMap |
| 38 | ES2019 | Optional catch binding |
| 39 | ES2019 | Symbol.description |
| 40 | ES2020 | Optional Chaining |
| 41 | ES2020 | BigInt |
| 42 | ES2020 | globalThis |
| 43 | ES2020 | Promise.allSettled |
| 44 | ES2020 | Dynamic import / import.meta |
| 45 | ES2020 | String.matchAll |
| 46 | ES2021 | Nullish Coalescing 与 逻辑赋值 |
| 47 | ES2021 | String.replaceAll |
| 48 | ES2021 | Promise.any |
| 49 | ES2021 | Numeric separators |
| 50 | ES2021 | WeakRef / FinalizationRegistry |
| 51 | ES2022 | 类字段与私有属性 |
| 52 | ES2022 | Array.prototype.at |
| 53 | ES2022 | Class static block |
| 54 | ES2022 | Private brand checks |
| 55 | ES2022 | RegExp match indices |
| 56 | ES2022 | Object.hasOwn |
| 57 | ES2022 | Top-level await |
| 58 | ES2022 | Error cause |
| 59 | ES2023 | Change Array by Copy |
| 60 | ES2023 | Array.findLast / findLastIndex |
| 61 | ES2023 | Symbols as WeakMap keys |
| 62 | ES2024 | Object.groupBy / Map.groupBy |
| 63 | ES2024 | Promise.withResolvers |
| 64 | ES2024 | ArrayBuffer transfer |
| 65 | ES2024 | Resizable ArrayBuffer |
| 66 | ES2024 | RegExp v flag |
| 67 | ES2024 | String isWellFormed / toWellFormed |
| 68 | ES2025 | Set methods |
| 69 | ES2025 | Iterator helpers |
| 70 | ES2025 | RegExp.escape |
| 71 | ES2025 | Promise.try |
| 72 | ES2025 | Import Attributes / JSON Modules |
| 73 | ES2025 | RegExp modifiers |
| 74 | ESNext | Array.fromAsync |
| 75 | ESNext | Error.isError |
| 76 | ESNext | Uint8Array Base64 / Hex |
| 77 | ESNext | Map upsert |
| 78 | ESNext | JSON.parse source text access |
| 79 | ESNext | Math.sumPrecise |
| 80 | ESNext | Temporal |

### 本地开发

```bash
npm install
npm run dev
```

打开浏览器访问：

```text
http://localhost:5173
```

### 生产构建

```bash
npm run build
```

### 本地预览构建结果

```bash
npm run preview
```
