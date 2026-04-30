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

当前项目内置 34 堂 ECMAScript 课程，覆盖从 ES6 到 ESNext 的常用语法和新特性。

| 序号 | 版本   | 课程主题                       |
| ---- | ------ | ------------------------------ |
| 1    | ES6    | let / const 与块级作用域       |
| 2    | ES6    | 默认参数                       |
| 3    | ES6    | Arrow Functions                |
| 4    | ES6    | Template Literals              |
| 5    | ES6    | Destructuring                  |
| 6    | ES6    | Spread / Rest                  |
| 7    | ES6    | 增强对象字面量                 |
| 8    | ES6    | 计算属性名                     |
| 9    | ES6    | Classes                        |
| 10   | ES6    | Promise                        |
| 11   | ES6    | Map                            |
| 12   | ES6    | Set                            |
| 13   | ES6    | Symbol                         |
| 14   | ES6    | for...of                       |
| 15   | ES6    | Generators                     |
| 16   | ES6    | 自定义迭代器                   |
| 17   | ES6    | Array.from / Array.of          |
| 18   | ES6    | Object.assign                  |
| 19   | ES6    | 字符串新增方法                 |
| 20   | ES6    | Number 新增方法                |
| 21   | ES6    | Proxy / Reflect                |
| 22   | ES2016 | 指数运算符                     |
| 23   | ES2016 | Array.includes                 |
| 24   | ES2017 | Async / Await                  |
| 25   | ES2018 | 对象展开/剩余属性              |
| 26   | ES2019 | Object.fromEntries             |
| 27   | ES2020 | Optional Chaining              |
| 28   | ES2020 | BigInt                         |
| 29   | ES2021 | Nullish Coalescing 与 逻辑赋值 |
| 30   | ES2021 | String.replaceAll              |
| 31   | ES2022 | 类字段与私有属性               |
| 32   | ES2023 | Array.prototype.at             |
| 33   | ES2024 | Array.groupBy                  |
| 34   | ESNext | 新特性预览：记录/元组          |

## 快速启动

如果只想快速打开练习界面，可直接用浏览器打开 `index.html`。

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
