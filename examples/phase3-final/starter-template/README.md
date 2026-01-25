# 🚀 最终项目起始模板

这是一个完整的 React 项目起始模板，包含了推荐的项目结构和基础配置。

## 📁 项目结构

```
starter-template/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/         # 可复用组件
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── index.js       # 统一导出
│   ├── pages/              # 页面组件
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── index.js
│   ├── context/            # Context 状态管理
│   │   └── ThemeContext.jsx
│   ├── hooks/              # 自定义 Hooks
│   │   ├── useLocalStorage.js
│   │   ├── useTheme.js
│   │   └── index.js
│   ├── data/               # 数据文件
│   │   ├── personal.js     # 个人信息
│   │   ├── projects.js     # 项目数据
│   │   ├── skills.js       # 技能数据
│   │   └── index.js
│   ├── styles/             # 样式文件
│   │   ├── variables.css   # CSS 变量
│   │   ├── global.css      # 全局样式
│   │   └── index.css
│   ├── utils/              # 工具函数
│   │   └── helpers.js
│   ├── App.jsx             # 根组件
│   ├── App.css
│   ├── main.jsx            # 入口文件
│   └── index.css
├── .gitignore
├── .eslintrc.json
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ 使用方法

1. **创建 Vite 项目**
```bash
npm create vite@latest my-github-page -- --template react
cd my-github-page
npm install
```

1. **安装必要依赖**
```bash
# React Router
npm install react-router-dom

# 图标库（可选）
npm install react-icons

# 动画库（可选）
npm install framer-motion
```

3. **按照上面的结构创建文件夹和文件**

4. **启动开发服务器**
```bash
npm run dev
```

## 📝 开发建议

### 1. 数据管理

将数据抽离到 `src/data/` 目录，便于维护：

**src/data/personal.js**
```javascript
export const personalInfo = {
    name: "张三",
    title: "前端开发工程师",
    bio: "热爱技术，专注于创建优雅的 Web 应用",
    email: "zhangsan@example.com",
    github: "https://github.com/zhangsan",
    linkedin: "https://linkedin.com/in/zhangsan"
};
```

**src/data/skills.js**
```javascript
export const skills = [
    {
        id: 1,
        category: "前端开发",
        icon: "🎨",
        items: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
    },
    {
        id: 2,
        category: "框架 & 库",
        icon: "⚛️",
        items: ["React", "Vue.js", "Next.js"]
    },
    // ...
];
```

**src/data/projects.js**
```javascript
export const projects = [
    {
        id: 1,
        title: "个人博客平台",
        description: "使用 React + Node.js 开发的全栈博客系统",
        image: "/images/project1.jpg",
        tags: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/zhangsan/blog",
        demo: "https://blog.zhangsan.com"
    },
    // ...
];
```

### 2. 组件复用

创建通用组件，提高复用性：

**src/components/Button.jsx**
```jsx
export default function Button({ 
    children, 
    variant = "primary", 
    onClick,
    ...props 
}) {
    return (
        <button 
            className={`btn btn-${variant}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
```

**使用**：
```jsx
<Button variant="primary" onClick={handleClick}>
    点击我
</Button>
```

### 3. 主题管理

使用 Context API 管理主题：

**src/context/ThemeContext.jsx**
```jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });
    
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
```

### 4. 路由配置

**src/App.jsx**
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header, Footer } from './components';
import { Home, About, Projects, Contact } from './pages';

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <div className="app">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
```

### 5. CSS 变量配置

**src/styles/variables.css**
```css
:root {
    /* 颜色 */
    --color-primary: #0066cc;
    --color-primary-dark: #004999;
    --color-primary-light: #e6f2ff;
    
    --color-text: #333;
    --color-text-light: #666;
    --color-text-lighter: #999;
    
    --color-bg: #ffffff;
    --color-bg-alt: #f8f9fa;
    
    /* 间距 */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    
    /* 圆角 */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 1rem;
    
    /* 阴影 */
    --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 12px rgba(0,0,0,0.15);
    --shadow-lg: 0 8px 24px rgba(0,0,0,0.2);
    
    /* 字体 */
    --font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --font-family-heading: inherit;
    --font-family-code: "Consolas", "Monaco", monospace;
}

/* 暗黑模式 */
:root.dark {
    --color-text: #e0e0e0;
    --color-text-light: #b0b0b0;
    --color-text-lighter: #808080;
    
    --color-bg: #1a1a1a;
    --color-bg-alt: #2a2a2a;
}
```

## 🚀 部署配置

### package.json
```json
{
    "name": "my-github-page",
    "version": "1.0.0",
    "homepage": "https://你的用户名.github.io/仓库名",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
    },
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.20.0"
    },
    "devDependencies": {
        "@vitejs/plugin-react": "^4.2.0",
        "gh-pages": "^6.1.0",
        "vite": "^5.0.0"
    }
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/仓库名/', // 替换为你的仓库名
    resolve: {
        alias: {
            '@': '/src'
        }
    }
});
```

### .gitignore
```
# 依赖
node_modules/
package-lock.json
yarn.lock

# 构建输出
dist/
build/

# 环境变量
.env
.env.local
.env.*.local

# 编辑器
.vscode/
.idea/
*.swp
*.swo

# 操作系统
.DS_Store
Thumbs.db

# 日志
npm-debug.log*
yarn-debug.log*
```

## ✅ 开发检查清单

开始开发前：
- [ ] 项目创建成功
- [ ] 依赖安装完成
- [ ] 开发服务器能正常启动
- [ ] 浏览器能打开并看到页面

开发过程中：
- [ ] 定期 git commit
- [ ] 组件拆分合理
- [ ] 数据抽离到 data 文件夹
- [ ] 样式使用 CSS 变量
- [ ] 响应式设计测试

准备部署：
- [ ] 删除 console.log
- [ ] 检查 linter 错误
- [ ] 多设备测试
- [ ] 配置 homepage 和 base
- [ ] README 完善

## 📚 参考资源

- [Vite 官方文档](https://vitejs.dev/)
- [React 官方文档](https://react.dev/)
- [React Router 文档](https://reactrouter.com/)

---

**开始构建你的个人主页吧！** 🎉
