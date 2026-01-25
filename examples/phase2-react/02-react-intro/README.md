# React 入门示例

这个目录展示如何将静态 HTML 简历改写为 React 组件。

## 🎯 学习目标

- 理解 React 组件概念
- 掌握 JSX 语法
- 学会使用 Props 传递数据
- 理解 State 和 useState

## 📝 开发步骤

1. **创建 React 项目**
```bash
npm create vite@latest resume-react -- --template react
cd resume-react
npm install
npm run dev
```

2. **组件拆分建议**
   - Header（头部 + 导航）
   - AboutSection（关于我）
   - SkillsSection（技能）
   - ProjectCard（项目卡片）
   - ProjectsSection（项目列表）
   - Footer（页脚）

3. **数据抽离**
   - 创建 `src/data/resume-data.js`
   - 导出个人信息、技能、项目数据

4. **添加交互**
   - 使用 useState 实现暗黑模式
   - 保存用户偏好到 localStorage

## 💡 关键代码示例

### 组件基础
```jsx
// src/components/Header.jsx
export default function Header({ name, title }) {
    return (
        <header>
            <h1>{name}</h1>
            <p>{title}</p>
        </header>
    );
}
```

### 使用 Props
```jsx
// src/App.jsx
import Header from './components/Header';

function App() {
    return (
        <div>
            <Header 
                name="张三" 
                title="前端开发工程师" 
            />
        </div>
    );
}
```

### 使用 State
```jsx
import { useState } from 'react';

function App() {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    return (
        <div className={theme}>
            <button onClick={toggleTheme}>切换主题</button>
        </div>
    );
}
```

## ✅ 完成标准

- [ ] 简历拆分为至少 5 个组件
- [ ] 使用 Props 传递数据
- [ ] 实现暗黑模式切换（使用 State）
- [ ] 代码能正常运行，无报错

## 📚 参考资源

- [React 官方教程](https://react.dev/learn)
- [Thinking in React](https://react.dev/learn/thinking-in-react)
