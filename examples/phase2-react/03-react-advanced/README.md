# React 进阶示例

这个目录展示 React 进阶特性的使用，包括 Hooks、Context API 和 React Router。

## 🎯 学习目标

- 掌握 useEffect Hook
- 学会使用 Context API 进行状态管理
- 理解自定义 Hook
- 使用 React Router 创建多页面应用

## 📝 项目结构

```
react-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useTheme.js
│   ├── App.jsx
│   └── main.jsx
```

## 💡 关键概念

### 1. useEffect Hook

处理副作用（数据获取、订阅、手动 DOM 操作）

```jsx
import { useEffect } from 'react';

function MyComponent() {
    // 组件挂载时执行
    useEffect(() => {
        console.log('组件挂载了');
    }, []);
    
    // count 变化时执行
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
}
```

### 2. Context API

跨组件共享状态，避免 Props 层层传递

```jsx
// ThemeContext.jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
```

### 3. 自定义 Hook

复用逻辑

```jsx
// useLocalStorage.js
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : initialValue;
    });
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue];
}
```

### 4. React Router

多页面路由

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">首页</Link>
                <Link to="/about">关于</Link>
            </nav>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
```

## 🚀 开发步骤

1. **安装依赖**
```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install react-router-dom
npm install
npm run dev
```

2. **创建 Context**
   - 主题管理（ThemeContext）
   - 可选：用户数据管理

3. **创建自定义 Hook**
   - useLocalStorage（持久化数据）
   - useTheme（简化主题使用）

4. **配置路由**
   - 创建多个页面组件
   - 在 App.jsx 中配置路由

5. **完善功能**
   - 添加导航
   - 实现页面切换
   - 优化用户体验

## ✅ 完成标准

- [ ] 使用 useEffect 处理副作用
- [ ] 使用 Context API 管理全局状态
- [ ] 创建至少 1 个自定义 Hook
- [ ] 使用 React Router 实现多页面
- [ ] 项目结构清晰，代码规范

## 📚 参考资源

- [React Hooks 文档](https://react.dev/reference/react)
- [Context API 文档](https://react.dev/learn/passing-data-deeply-with-context)
- [React Router 文档](https://reactrouter.com/)

## 🎓 进阶挑战

- [ ] 添加页面切换动画（Framer Motion）
- [ ] 实现懒加载（React.lazy）
- [ ] 添加 404 页面
- [ ] 优化性能（React.memo, useMemo）
