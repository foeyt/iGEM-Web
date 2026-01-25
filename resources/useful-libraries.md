# 📦 实用库和工具推荐

精选实用的库和工具，帮助你更高效地开发个人主页

## ⚛️ React 生态

### UI 组件库

#### 1. **Tailwind CSS** ⭐ 强烈推荐

- **简介**：实用优先的 CSS 框架
- **适用场景**：快速构建界面，高度可定制
- **学习曲线**：中等

```bash
# 安装
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```jsx
// 使用示例
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    点击我
</button>
```

**优点**：
- ✅ 快速开发
- ✅ 高度可定制
- ✅ 响应式友好
- ✅ 打包体积小（只包含用到的样式）

**资源**：
- [官方文档](https://tailwindcss.com/)
- [Tailwind UI](https://tailwindui.com/) - 官方组件库（部分付费）
- [Headless UI](https://headlessui.com/) - 无样式组件（可配合 Tailwind）

#### 2. **Chakra UI**

- **简介**：简单、模块化、易访问的组件库
- **适用场景**：快速开发，注重无障碍访问
- **学习曲线**：低

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

```jsx
import { Button, Box } from '@chakra-ui/react';

<Box bg="blue.500" p={4}>
    <Button colorScheme="blue">点击我</Button>
</Box>
```

**资源**：[官方文档](https://chakra-ui.com/)

#### 3. **Material-UI (MUI)**

- **简介**：Google Material Design 风格
- **适用场景**：企业级应用，需要成熟的组件库
- **学习曲线**：中高

```bash
npm install @mui/material @emotion/react @emotion/styled
```

**资源**：[官方文档](https://mui.com/)

#### 4. **Ant Design**

- **简介**：阿里出品，企业级 UI 设计语言
- **适用场景**：后台管理系统，复杂应用
- **学习曲线**：中高

**资源**：[官方文档](https://ant.design/)

### 路由

#### **React Router** ⭐ 必备

```bash
npm install react-router-dom
```

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

**资源**：[官方文档](https://reactrouter.com/)

### 动画

#### 1. **Framer Motion** ⭐ 推荐

- **简介**：React 动画库，简单强大
- **适用场景**：页面过渡、交互动画

```bash
npm install framer-motion
```

```jsx
import { motion } from 'framer-motion';

<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
>
    淡入并上移
</motion.div>
```

**资源**：[官方文档](https://www.framer.com/motion/)

#### 2. **React Spring**

- **简介**：基于物理的动画库
- **适用场景**：自然流畅的动画

**资源**：[官方文档](https://www.react-spring.dev/)

#### 3. **AOS (Animate On Scroll)**

- **简介**：滚动触发动画
- **适用场景**：滚动时元素淡入、滑入

```bash
npm install aos
```

```jsx
import AOS from 'aos';
import 'aos/dist/aos.css';

useEffect(() => {
    AOS.init({ duration: 1000 });
}, []);

<div data-aos="fade-up">滚动时淡入</div>
```

**资源**：[GitHub](https://github.com/michalsnik/aos)

### 图标

#### 1. **React Icons** ⭐ 推荐

- **简介**：集成多个图标库（Font Awesome, Heroicons, Material Icons 等）

```bash
npm install react-icons
```

```jsx
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

<FaGithub size={24} />
<FaEnvelope color="blue" />
```

**资源**：[官方网站](https://react-icons.github.io/react-icons/)

#### 2. **Heroicons**

- **简介**：Tailwind CSS 团队出品，简洁优雅

```bash
npm install @heroicons/react
```

```jsx
import { MailIcon } from '@heroicons/react/outline';
<MailIcon className="h-6 w-6" />
```

**资源**：[官方网站](https://heroicons.com/)

### 状态管理

#### 1. **Context API** ⭐ 内置，推荐优先使用

```jsx
// 主题管理示例
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

#### 2. **Zustand**（轻量级，推荐）

```bash
npm install zustand
```

```jsx
import create from 'zustand';

const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
    const { count, increment } = useStore();
    return <button onClick={increment}>{count}</button>;
}
```

**资源**：[GitHub](https://github.com/pmndrs/zustand)

### 表单处理

#### **React Hook Form**

```bash
npm install react-hook-form
```

```jsx
import { useForm } from 'react-hook-form';

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => console.log(data);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email', { required: true })} />
            {errors.email && <span>必填项</span>}
            <button type="submit">提交</button>
        </form>
    );
}
```

**资源**：[官方文档](https://react-hook-form.com/)

## 🎨 CSS 和样式

### CSS-in-JS

#### 1. **Styled Components**

```bash
npm install styled-components
```

```jsx
import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.primary ? 'blue' : 'white'};
    color: ${props => props.primary ? 'white' : 'blue'};
    padding: 10px 20px;
    border-radius: 5px;
`;

<Button primary>主按钮</Button>
```

#### 2. **Emotion**

```bash
npm install @emotion/react @emotion/styled
```

### CSS 框架

#### 1. **Tailwind CSS** ⭐ 最推荐

见上文

#### 2. **Bootstrap**

```bash
npm install bootstrap
```

**资源**：[官方文档](https://getbootstrap.com/)

### 动画库（纯 CSS）

#### 1. **Animate.css**

```bash
npm install animate.css
```

```jsx
import 'animate.css';

<div className="animate__animated animate__bounce">
    弹跳动画
</div>
```

#### 2. **Hover.css**

```bash
npm install hover.css
```

**资源**：[官方网站](https://ianlunn.github.io/Hover/)

## 🛠️ 开发工具

### 代码质量

#### 1. **ESLint** ⭐ 必备

- 代码检查工具

```bash
npm install --save-dev eslint
npx eslint --init
```

#### 2. **Prettier** ⭐ 必备

- 代码格式化工具

```bash
npm install --save-dev prettier
```

`.prettierrc`:
```json
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "es5"
}
```

### 性能优化

#### 1. **React.lazy & Suspense** ⭐ 内置

```jsx
import { lazy, Suspense } from 'react';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function App() {
    return (
        <Suspense fallback={<div>加载中...</div>}>
            <ProjectDetail />
        </Suspense>
    );
}
```

#### 2. **React.memo**

```jsx
const MyComponent = React.memo(function MyComponent({ data }) {
    return <div>{data}</div>;
});
```

### 图片优化

#### **react-lazy-load-image-component**

```bash
npm install react-lazy-load-image-component
```

```jsx
import { LazyLoadImage } from 'react-lazy-load-image-component';

<LazyLoadImage
    src="image.jpg"
    alt="描述"
    effect="blur"
/>
```

## 📡 API 和数据

### HTTP 请求

#### 1. **Axios**

```bash
npm install axios
```

```jsx
import axios from 'axios';

const fetchData = async () => {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
};
```

#### 2. **Fetch API** ⭐ 内置

```jsx
const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
};
```

### 数据获取

#### **React Query** (TanStack Query)

```bash
npm install @tanstack/react-query
```

```jsx
import { useQuery } from '@tanstack/react-query';

function Projects() {
    const { data, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: () => fetch('/api/projects').then(res => res.json())
    });
    
    if (isLoading) return <div>加载中...</div>;
    return <div>{data.map(...)}</div>;
}
```

## 🚀 部署工具

### **gh-pages** ⭐ GitHub Pages 部署

```bash
npm install --save-dev gh-pages
```

`package.json`:
```json
{
    "homepage": "https://username.github.io/repo-name",
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
    }
}
```

## 🎁 其他实用库

### 1. **clsx / classnames**

- 动态类名组合

```bash
npm install clsx
```

```jsx
import clsx from 'clsx';

<div className={clsx(
    'base-class',
    isActive && 'active',
    { 'disabled': isDisabled }
)}>
```

### 2. **date-fns**

- 日期处理（比 moment.js 更轻量）

```bash
npm install date-fns
```

```jsx
import { format } from 'date-fns';
format(new Date(), 'yyyy-MM-dd'); // "2026-01-25"
```

### 3. **React Helmet**

- 动态修改页面 Head（SEO 优化）

```bash
npm install react-helmet-async
```

```jsx
import { Helmet } from 'react-helmet-async';

<Helmet>
    <title>我的主页</title>
    <meta name="description" content="..." />
</Helmet>
```

### 4. **EmailJS**

- 无需后端发送邮件

```bash
npm install @emailjs/browser
```

**资源**：[官方网站](https://www.emailjs.com/)

### 5. **React Scroll**

- 平滑滚动

```bash
npm install react-scroll
```

```jsx
import { Link } from 'react-scroll';

<Link to="about" smooth={true} duration={500}>
    关于我
</Link>
```

## 📚 学习资源

### 文档和教程

- **[React 官方文档](https://react.dev/)** - 最权威
- **[MDN Web Docs](https://developer.mozilla.org/)** - Web 技术百科
- **[CSS Tricks](https://css-tricks.com/)** - CSS 技巧和教程

### 视频教程

- **[freeCodeCamp](https://www.youtube.com/c/Freecodecamp)** - 免费编程教程
- **[Traversy Media](https://www.youtube.com/c/TraversyMedia)** - Web 开发教程
- **[Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified)** - 简化的 Web 教程

## ✅ 选择建议

### 新手推荐组合

```
构建工具: Vite
UI框架: Tailwind CSS 或原生 CSS
路由: React Router
图标: React Icons
动画: Framer Motion
代码质量: ESLint + Prettier
部署: gh-pages
```

### 进阶推荐组合

```
构建工具: Vite + TypeScript
UI框架: Tailwind CSS + Headless UI
路由: React Router
状态管理: Zustand 或 Context API
表单: React Hook Form
动画: Framer Motion
SEO: React Helmet
数据获取: React Query
部署: Vercel 或 Netlify
```

## ⚠️ 注意事项

1. **不要过度使用**：
   - 不是所有项目都需要复杂的状态管理
   - 能用 CSS 解决就不要用 JS 库

2. **考虑包体积**：
   - 查看库的大小：[Bundlephobia](https://bundlephobia.com/)
   - 优先选择轻量级方案

3. **学习成本**：
   - 新手优先使用简单的库
   - 不要同时学太多新技术

4. **维护状态**：
   - 选择活跃维护的库
   - 查看 GitHub Stars 和最后更新时间

---

**记住**：工具是为了提高效率，不要为了用库而用库！
