# ⚛️ 第二阶段：JavaScript + React（14天）

**阶段目标**：掌握 JavaScript 基础语法，学会使用 React 框架开发组件化应用。

**时间安排**：2026.02.02 - 2026.02.15

**最终交付**：使用 React 重构的个人简历/主页

## 📅 学习路线

```
Day 1-4: JavaScript 基础    →  为页面添加交互
Day 5-9: React 入门         →  组件化开发
Day 10-14: React 进阶       →  状态管理 + 路由
```

## 🎯 Day 1-4: JavaScript 基础

### 学习目标

- 掌握 JavaScript 基本语法
- 理解变量、函数、条件和循环
- 能够操作 DOM 元素
- 为静态页面添加交互功能

### 核心知识点

#### 1. 变量和数据类型

```javascript
// 变量声明
let name = "张三";          // let: 可变变量
const age = 25;             // const: 常量（推荐）
var oldWay = "不推荐";      // var: 旧方式，不推荐

// 数据类型
const str = "字符串";       // String
const num = 42;             // Number
const bool = true;          // Boolean
const arr = [1, 2, 3];      // Array 数组
const obj = { key: "value" }; // Object 对象
const nothing = null;       // Null
let undef;                  // Undefined
```

#### 2. 函数

```javascript
// 函数声明
function greet(name) {
    return `你好，${name}！`;
}

// 箭头函数（推荐）
const greet = (name) => {
    return `你好，${name}！`;
};

// 简写（单行返回）
const greet = (name) => `你好，${name}！`;

// 使用
console.log(greet("张三")); // "你好，张三！"
```

#### 3. 条件语句

```javascript
const score = 85;

if (score >= 90) {
    console.log("优秀");
} else if (score >= 60) {
    console.log("及格");
} else {
    console.log("不及格");
}

// 三元运算符（简写）
const result = score >= 60 ? "及格" : "不及格";
```

#### 4. 循环

```javascript
// for 循环
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// forEach（数组遍历）
const fruits = ["苹果", "香蕉", "橙子"];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// map（转换数组）
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter（筛选数组）
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]
```

#### 5. DOM 操作

```javascript
// 获取元素
const title = document.querySelector('h1');
const buttons = document.querySelectorAll('.btn');

// 修改内容
title.textContent = "新标题";
title.innerHTML = "<span>带标签的内容</span>";

// 修改样式
title.style.color = "blue";
title.classList.add('active');
title.classList.remove('hidden');
title.classList.toggle('dark-mode');

// 添加事件监听
const btn = document.querySelector('#myButton');
btn.addEventListener('click', () => {
    alert('按钮被点击了！');
});
```

#### 6. ES6+ 新特性

```javascript
// 解构赋值
const person = { name: "张三", age: 25 };
const { name, age } = person;

const arr = [1, 2, 3];
const [first, second] = arr;

// 展开运算符
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// 模板字符串
const name = "张三";
const greeting = `你好，${name}！今年 ${2026 - 2000} 岁了。`;

// 可选链
const user = { profile: { name: "张三" } };
const userName = user?.profile?.name; // "张三"
const userAge = user?.profile?.age ?? 25; // 25 (默认值)
```

### 动手实践：为简历添加交互

**任务**：为第一阶段的简历页面添加以下交互功能：

1. **暗黑模式切换**
2. **技能进度条动画**
3. **导航栏滚动吸顶**
4. **返回顶部按钮**

**参考示例**（查看 `examples/phase2-react/01-js-basics/`）：

```javascript
// 暗黑模式切换
const toggleButton = document.querySelector('#theme-toggle');
const body = document.body;

// 从 localStorage 读取用户偏好
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.add(currentTheme + '-mode');

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light');
    }
});

// 返回顶部按钮
const backToTop = document.querySelector('#back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

### 练习任务

1. **基础任务**：
   - 实现暗黑模式切换
   - 添加"返回顶部"按钮
   - 导航链接点击平滑滚动

2. **进阶任务**：
   - 技能卡片添加数字动画（从 0 计数到目标值）
   - 项目卡片懒加载（滚动到可见区域才显示）
   - 表单验证（如果有联系表单）

### 📚 AI 协作建议

```
如何使用 JavaScript 切换网页的暗黑模式？
请给我完整代码并解释原理。

addEventListener 是什么？如何使用？
请给我几个常见事件的例子。

localStorage 是什么？如何保存用户的主题偏好？

什么是事件委托？为什么要用它？
```

### ✅ Day 1-4 检查清单

- [ ] 理解 JavaScript 基本语法
- [ ] 掌握 DOM 操作方法
- [ ] 能够添加事件监听器
- [ ] 简历页面有至少 2 个交互功能
- [ ] 用户偏好保存到 localStorage

---

## ⚛️ Day 5-9: React 入门

### 学习目标

- 理解 React 的核心概念
- 掌握组件化开发思想
- 学会使用 JSX 语法
- 理解 Props 和 State
- 能够使用 React 重构静态页面

### 核心知识点

#### 1. 什么是 React？

React 是一个用于构建用户界面的 JavaScript 库。

**核心特点**：
- **组件化**：把 UI 拆分成独立、可复用的组件
- **声明式**：描述"想要什么"，而不是"怎么做"
- **高效更新**：虚拟 DOM，只更新变化的部分

**传统 vs React**：

```javascript
// 传统方式：手动操作 DOM
document.querySelector('#name').textContent = "张三";
document.querySelector('#age').textContent = "25";

// React 方式：声明式
function UserInfo() {
    return (
        <div>
            <p id="name">张三</p>
            <p id="age">25</p>
        </div>
    );
}
```

#### 2. 创建 React 项目

```bash
# 使用 Vite 创建项目（推荐，快速）
npm create vite@latest my-portfolio -- --template react

# 进入项目目录
cd my-portfolio

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

**项目结构**：

```
my-portfolio/
├── public/              # 静态资源
├── src/
│   ├── components/      # 组件文件夹（自己创建）
│   ├── App.jsx          # 根组件
│   ├── App.css          # 样式
│   ├── main.jsx         # 入口文件
│   └── index.css        # 全局样式
├── index.html           # HTML 模板
├── package.json         # 依赖配置
└── vite.config.js       # Vite 配置
```

#### 3. JSX 语法

JSX 是 JavaScript 的扩展，看起来像 HTML，但其实是 JavaScript。

```jsx
// JSX 基础
const element = <h1>Hello, React!</h1>;

// JSX 中嵌入 JavaScript 表达式（用 {}）
const name = "张三";
const element = <h1>你好，{name}！</h1>;

// JSX 属性（注意：className 而不是 class）
const element = <div className="container" id="main">内容</div>;

// 内联样式（注意：对象格式，驼峰命名）
const element = <div style={{ color: 'red', fontSize: '20px' }}>文字</div>;

// 条件渲染
const isLoggedIn = true;
const element = (
    <div>
        {isLoggedIn ? <p>欢迎回来！</p> : <p>请登录</p>}
    </div>
);

// 列表渲染
const fruits = ["苹果", "香蕉", "橙子"];
const list = (
    <ul>
        {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
        ))}
    </ul>
);
```

#### 4. 函数组件

现代 React 推荐使用函数组件。

```jsx
// 基础组件
function Welcome() {
    return <h1>欢迎！</h1>;
}

// 使用组件
function App() {
    return (
        <div>
            <Welcome />
            <Welcome />
        </div>
    );
}

// 带参数的组件（Props）
function Greeting(props) {
    return <h1>你好，{props.name}！</h1>;
}

// 使用
<Greeting name="张三" />

// 解构 Props（推荐）
function Greeting({ name, age }) {
    return (
        <div>
            <h1>你好，{name}！</h1>
            <p>年龄：{age}</p>
        </div>
    );
}

// 使用
<Greeting name="张三" age={25} />
```

#### 5. Props（属性）

Props 是父组件传递给子组件的数据，**只读**。

```jsx
// PersonalInfo.jsx
function PersonalInfo({ name, title, bio }) {
    return (
        <section className="personal-info">
            <h2>{name}</h2>
            <p className="title">{title}</p>
            <p className="bio">{bio}</p>
        </section>
    );
}

// App.jsx
function App() {
    return (
        <PersonalInfo 
            name="张三"
            title="前端开发工程师"
            bio="热爱技术，专注于创建优雅的 Web 应用"
        />
    );
}
```

#### 6. State（状态）

State 是组件内部的数据，**可变**。使用 `useState` Hook。

```jsx
import { useState } from 'react';

function Counter() {
    // 声明状态
    const [count, setCount] = useState(0);
    
    // 更新状态
    const increment = () => {
        setCount(count + 1);
    };
    
    return (
        <div>
            <p>计数：{count}</p>
            <button onClick={increment}>+1</button>
        </div>
    );
}
```

**State 更新规则**：
```jsx
// ✅ 正确：使用 setState
setCount(count + 1);

// ❌ 错误：直接修改
count = count + 1;

// ✅ 对象/数组：创建新的副本
const [user, setUser] = useState({ name: "张三", age: 25 });
setUser({ ...user, age: 26 }); // 使用展开运算符

const [items, setItems] = useState([1, 2, 3]);
setItems([...items, 4]); // 添加元素
```

### 动手实践：React 简历组件

**任务**：将第一阶段的 HTML 简历改写为 React 组件。

**组件拆分建议**：

```
App
├── Header
│   ├── PersonalInfo
│   └── Navigation
├── AboutSection
├── SkillsSection
│   └── SkillCard (多个)
├── ProjectsSection
│   └── ProjectCard (多个)
└── Footer
```

**参考示例**（查看 `examples/phase2-react/02-react-intro/`）：

```jsx
// src/components/Header.jsx
function Header({ name, title, contacts }) {
    return (
        <header className="header">
            <h1>{name}</h1>
            <p className="title">{title}</p>
            <nav>
                {contacts.map((contact, index) => (
                    <a key={index} href={contact.url}>
                        {contact.icon} {contact.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}

export default Header;

// src/App.jsx
import Header from './components/Header';

function App() {
    const contacts = [
        { label: "邮箱", url: "mailto:zhangsan@example.com", icon: "📧" },
        { label: "GitHub", url: "https://github.com/zhangsan", icon: "🔗" }
    ];
    
    return (
        <div className="app">
            <Header 
                name="张三" 
                title="前端开发工程师"
                contacts={contacts}
            />
            {/* 其他组件 */}
        </div>
    );
}

export default App;
```

### 练习任务

1. **基础任务**：
   - 使用 Vite 创建 React 项目
   - 将简历拆分成至少 5 个组件
   - 使用 Props 传递数据

2. **进阶任务**：
   - 抽离数据到单独的 `data.js` 文件
   - 创建可复用的 `Button` 和 `Card` 组件
   - 实现暗黑模式切换（使用 State）

### 📚 AI 协作建议

```
React 的组件是什么？如何创建和使用组件？
请给我一个完整的例子。

Props 和 State 有什么区别？什么时候用哪个？

如何在 React 中实现暗黑模式切换？
请给我完整代码。

我的静态 HTML 简历应该如何拆分成 React 组件？
请给我建议的组件结构。
```

### ✅ Day 5-9 检查清单

- [ ] React 项目创建成功并能运行
- [ ] 理解组件、Props、State 的概念
- [ ] 简历至少拆分为 5 个组件
- [ ] 组件间能正确传递数据
- [ ] 实现了暗黑模式切换

---

## 🚀 Day 10-14: React 进阶

### 学习目标

- 掌握 React Hooks（useEffect, useContext）
- 理解组件生命周期
- 学会使用 React Router 实现路由
- 掌握状态提升和组件通信
- 能够构建多页面应用

### 核心知识点

#### 1. useEffect Hook

`useEffect` 用于处理副作用（数据获取、订阅、DOM 操作等）。

```jsx
import { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    
    // 每次渲染后执行
    useEffect(() => {
        console.log('组件渲染了');
    });
    
    // 只在首次渲染时执行（相当于 componentDidMount）
    useEffect(() => {
        console.log('组件挂载了');
    }, []); // 空依赖数组
    
    // 当 count 变化时执行
    useEffect(() => {
        document.title = `点击了 ${count} 次`;
    }, [count]); // 依赖 count
    
    // 清理函数（相当于 componentWillUnmount）
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('Tick');
        }, 1000);
        
        // 返回清理函数
        return () => {
            clearInterval(timer);
        };
    }, []);
    
    return <div>{count}</div>;
}
```

#### 2. 自定义 Hook

把逻辑抽取成可复用的 Hook。

```jsx
// useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    // 从 localStorage 读取初始值
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved !== null ? JSON.parse(saved) : initialValue;
    });
    
    // 值变化时保存到 localStorage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue];
}

// 使用
function App() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    return (
        <div className={theme + '-mode'}>
            <button onClick={toggleTheme}>切换主题</button>
        </div>
    );
}
```

#### 3. Context API（跨组件状态共享）

避免 Props 层层传递（Props Drilling）。

```jsx
// ThemeContext.js
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// 自定义 Hook 简化使用
export function useTheme() {
    return useContext(ThemeContext);
}

// App.jsx
import { ThemeProvider } from './ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <Header />
            <Content />
        </ThemeProvider>
    );
}

// 任何组件都可以访问 theme
function Header() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <header className={theme}>
            <button onClick={toggleTheme}>切换</button>
        </header>
    );
}
```

#### 4. React Router（路由）

创建多页面应用。

```bash
# 安装 React Router
npm install react-router-dom
```

```jsx
// App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">首页</Link>
                <Link to="/about">关于</Link>
                <Link to="/projects">项目</Link>
            </nav>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

// 带参数的路由
import { useParams } from 'react-router-dom';

function ProjectDetail() {
    const { id } = useParams();
    return <div>项目 ID: {id}</div>;
}
```

### 动手实践：完整的 React 主页

**任务**：创建一个包含多个页面的完整个人主页。

**页面结构**：
- 首页（Hero + 简介）
- 关于页（详细介绍）
- 项目页（项目列表 + 详情）
- 联系页（联系方式）

**参考示例**（查看 `examples/phase2-react/03-react-advanced/`）。

### 练习任务

1. **基础任务**：
   - 使用 Context API 实现全局主题管理
   - 添加 React Router，创建多个页面
   - 使用 useEffect 实现数据加载动画

2. **进阶任务**：
   - 创建自定义 Hook（如 `useFetch`、`useLocalStorage`）
   - 实现页面切换动画
   - 添加 404 页面

### 📚 AI 协作建议

```
useEffect 是什么？什么时候用？
请给我 3 个常见使用场景的例子。

如何在 React 中实现全局状态管理？
Context API 和其他方案（如 Redux）有什么区别？

React Router 如何使用？如何创建多页面应用？
请给我完整示例。

如何优化 React 应用性能？
```

### ✅ Day 10-14 检查清单

- [ ] 理解 useEffect 的使用
- [ ] 掌握 Context API 进行状态管理
- [ ] 实现了多页面路由
- [ ] 创建了至少 1 个自定义 Hook
- [ ] 项目结构清晰，代码规范

---

## 🎯 第二阶段总结

### 你应该已经掌握

✅ JavaScript 基础语法和 DOM 操作
✅ React 组件化开发
✅ JSX 语法和组件通信（Props）
✅ 状态管理（State, Context API）
✅ React Hooks（useState, useEffect, 自定义 Hook）
✅ React Router 路由管理

### 最终交付物检查

- [ ] 完整的 React 项目
- [ ] 至少 5 个页面/组件
- [ ] 使用 React Router 实现路由
- [ ] 有全局状态管理（主题、用户偏好等）
- [ ] 代码结构清晰，组件可复用
- [ ] 有良好的注释和文档

## 🎨 加载动画设计

在开发过程中，别忘了为你的应用添加优雅的加载动画，提升用户体验！

**参考示例**：[加载动画设计指南](../examples/phase2-react/04-loading-animations/README.md)

这个示例包含：
- 多种加载动画实现（旋转器、骨架屏、进度条等）
- CSS 动画最佳实践
- React 中管理加载状态的方法
- 设计原则和用户体验建议

**建议**：在完成基础功能后，为你的项目添加合适的加载动画，让应用看起来更专业！

## 🚀 下一步

完成第二阶段后，进入 [第三阶段：最终项目](03-phase3-final-project.md)！

你将综合运用所学知识，交付一个完整的、可部署的个人主页。

---

**有问题？**
- 查看 [React 官方文档](https://react.dev/)
- 使用 AI 工具寻求帮助
- 询问 advisors
