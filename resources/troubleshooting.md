# 🔧 常见问题排查指南

开发过程中遇到问题时的解决手册

## 🚨 问题排查流程

遇到问题时，按以下步骤排查：

1. **仔细阅读错误信息**
2. **检查最近的代码修改**
3. **搜索错误信息**（Google, Stack Overflow）
4. **查阅官方文档**
5. **询问 AI（Gemini, Claude, Deepseek）**
6. **询问 advisors**

## 🛠️ 环境配置问题

### 1. Node.js / npm 相关

#### 问题：`npm: command not found`

**原因**：Node.js 未安装或未添加到 PATH

**解决**：
```bash
# 检查是否安装
node --version
npm --version

# 如果未安装，去官网下载：https://nodejs.org/
```

#### 问题：`npm install` 报错

**常见原因和解决方案**：

```bash
# 1. 清除缓存
npm cache clean --force

# 2. 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 3. 重新安装
npm install

# 4. 如果还不行，尝试使用 yarn
npm install -g yarn
yarn install
```

#### 问题：`EACCES` 权限错误

**解决**（Mac/Linux）：
```bash
# 方法1：使用 sudo（不推荐）
sudo npm install

# 方法2：修复 npm 权限（推荐）
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile
```

**解决**（Windows）：
- 以管理员身份运行命令提示符

### 2. VS Code 相关

#### 问题：Live Server 不工作

**解决**：
1. 确认已安装 Live Server 插件
2. 右键 HTML 文件 → "Open with Live Server"
3. 如果还不行，重启 VS Code

#### 问题：ESLint 报错太多

**解决**：
```bash
# 禁用 ESLint（不推荐）
# 或在 .eslintrc.js 中调整规则
module.exports = {
    rules: {
        'no-console': 'off', // 允许 console.log
        'no-unused-vars': 'warn', // 未使用变量改为警告
    }
};
```

### 3. Git 相关

#### 问题：`git: command not found`

**解决**：
- 下载安装 Git：https://git-scm.com/

#### 问题：Push 被拒绝

**错误信息**：`error: failed to push some refs`

**解决**：
```bash
# 先拉取远程更新
git pull origin main --rebase

# 解决冲突后
git add .
git rebase --continue

# 再推送
git push origin main
```

#### 问题：忘记切换分支就开始开发了

**解决**：
```bash
# 暂存当前修改
git stash

# 创建并切换到新分支
git checkout -b feature/new-feature

# 恢复修改
git stash pop
```

## ⚛️ React 开发问题

### 1. 项目创建和启动

#### 问题：`npm run dev` 报错

**常见原因**：
1. 端口被占用
2. 依赖未安装

**解决**：
```bash
# 确保已安装依赖
npm install

# 如果端口被占用（默认 5173）
# Mac/Linux:
lsof -ti:5173 | xargs kill -9

# Windows:
netstat -ano | findstr :5173
taskkill /PID <进程ID> /F

# 或在 vite.config.js 中修改端口
export default {
    server: {
        port: 3000
    }
}
```

### 2. 导入和模块问题

#### 问题：`Cannot find module 'xxx'`

**解决**：
```bash
# 确认已安装该包
npm install xxx

# 如果是自己的文件，检查路径是否正确
import Header from './components/Header'; // 注意 ./ 和路径大小写
```

#### 问题：`Module not found: Error: Can't resolve 'xxx'`

**原因**：相对路径错误

**解决**：
```jsx
// ❌ 错误
import Header from 'components/Header';

// ✅ 正确
import Header from './components/Header';
import Header from '../components/Header';

// 或配置路径别名（vite.config.js）
export default {
    resolve: {
        alias: {
            '@': '/src'
        }
    }
}

// 使用
import Header from '@/components/Header';
```

### 3. React Hooks 问题

#### 问题：`React Hook "useState" is called conditionally`

**错误代码**：
```jsx
function MyComponent({ condition }) {
    if (condition) {
        const [count, setCount] = useState(0); // ❌ Hook在条件语句中
    }
}
```

**解决**：
```jsx
function MyComponent({ condition }) {
    const [count, setCount] = useState(0); // ✅ Hook在顶层
    
    if (condition) {
        // 使用 count
    }
}
```

**规则**：
- Hook 必须在函数顶层调用
- 不能在循环、条件或嵌套函数中调用

#### 问题：State 更新了但组件没重新渲染

**原因**：直接修改了 state（对象或数组）

**错误代码**：
```jsx
const [user, setUser] = useState({ name: 'John' });

// ❌ 直接修改
user.name = 'Jane';
setUser(user);
```

**解决**：
```jsx
// ✅ 创建新对象
setUser({ ...user, name: 'Jane' });

// 数组示例
const [items, setItems] = useState([1, 2, 3]);

// ❌ 错误
items.push(4);
setItems(items);

// ✅ 正确
setItems([...items, 4]);
```

#### 问题：`useEffect` 无限循环

**原因**：依赖项设置不正确

**错误代码**：
```jsx
useEffect(() => {
    setCount(count + 1); // ❌ 无限循环
}, [count]);
```

**解决**：
```jsx
// 方案1：不依赖 count
useEffect(() => {
    setCount(c => c + 1); // 使用函数式更新
}, []);

// 方案2：添加条件
useEffect(() => {
    if (count < 10) {
        setCount(count + 1);
    }
}, [count]);
```

### 4. 组件和 Props 问题

#### 问题：Props 传递后子组件收不到

**原因**：
1. Props 名称不匹配
2. 拼写错误
3. 解构错误

**检查**：
```jsx
// 父组件
<Child userName="John" />

// 子组件
function Child({ userName }) { // 注意大小写
    return <div>{userName}</div>;
}
```

#### 问题：组件没有显示

**排查步骤**：

1. 检查 console 有无错误
2. 检查组件是否正确导入和导出
3. 检查 return 语句
4. 检查 CSS（是否被隐藏）

```jsx
// ❌ 常见错误：没有 return
function MyComponent() {
    <div>Hello</div>; // 缺少 return
}

// ✅ 正确
function MyComponent() {
    return <div>Hello</div>;
}

// ✅ 箭头函数简写
const MyComponent = () => <div>Hello</div>;
```

### 5. React Router 问题

#### 问题：点击链接后页面空白

**原因**：路由配置错误

**检查**：
```jsx
// 确保包裹了 BrowserRouter
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter> {/* 不要忘记 */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
```

#### 问题：刷新页面后 404

**原因**：GitHub Pages 不支持客户端路由

**解决方案1**：使用 HashRouter
```jsx
import { HashRouter } from 'react-router-dom';

function App() {
    return (
        <HashRouter> {/* 使用 HashRouter */}
            <Routes>...</Routes>
        </HashRouter>
    );
}
```

**解决方案2**：添加 404.html 重定向（BrowserRouter）
- 在 `public/` 目录创建 `404.html`
- 内容与 `index.html` 相同

## 🎨 CSS 样式问题

### 1. 样式不生效

**排查步骤**：

1. **检查 CSS 文件是否引入**
```jsx
import './App.css'; // 确保有这行
```

2. **检查选择器是否正确**
```css
/* 使用浏览器开发者工具检查元素 */
/* F12 → Elements → 查看应用的样式 */
```

3. **检查样式优先级**
```css
/* 优先级从低到高 */
p { color: blue; }              /* 元素选择器 */
.text { color: blue; }          /* 类选择器 */
#title { color: blue; }         /* ID选择器 */
p { color: blue !important; }   /* !important（不推荐） */
```

4. **检查拼写和语法**
```css
/* ❌ 错误 */
.button {
    background-color: blue
    color: white; /* 上一行缺少分号 */
}

/* ✅ 正确 */
.button {
    background-color: blue;
    color: white;
}
```

### 2. 布局问题

#### 问题：Flexbox 不工作

**检查**：
```css
.container {
    display: flex; /* 确保设置了 display: flex */
    justify-content: center; /* 主轴对齐 */
    align-items: center; /* 交叉轴对齐 */
}
```

#### 问题：元素溢出容器

**解决**：
```css
.container {
    max-width: 100%;
    overflow: hidden; /* 或 overflow-x: hidden */
}

img {
    max-width: 100%; /* 图片自适应 */
    height: auto;
}
```

#### 问题：垂直居中不生效

**解决方案**：
```css
/* 方法1：Flexbox */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* 方法2：Grid */
.container {
    display: grid;
    place-items: center;
    height: 100vh;
}

/* 方法3：绝对定位 */
.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

### 3. 响应式问题

#### 问题：移动端样式不生效

**检查**：
```html
<!-- 确保 HTML 中有 viewport meta 标签 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

```css
/* 检查媒体查询语法 */
@media (max-width: 768px) { /* 注意括号 */
    .container {
        padding: 10px;
    }
}
```

#### 问题：在真机上样式不对

**排查**：
1. 使用 Chrome DevTools 的设备模式测试
2. 检查媒体查询断点
3. 测试不同设备尺寸

## 🚀 部署问题

### 1. GitHub Pages 部署失败

#### 问题：部署后页面空白

**原因1**：`vite.config.js` 中的 `base` 配置错误

**解决**：
```javascript
// vite.config.js
export default {
    base: '/repo-name/', // 仓库名称
}
```

**原因2**：`package.json` 中的 `homepage` 错误

**解决**：
```json
{
    "homepage": "https://username.github.io/repo-name"
}
```

#### 问题：CSS 和 JS 文件 404

**原因**：路径问题

**解决**：
```javascript
// vite.config.js
export default {
    base: './', // 使用相对路径
}
```

#### 问题：图片不显示

**原因**：图片路径错误

**解决**：
```jsx
// ❌ 错误：绝对路径
<img src="/images/photo.jpg" />

// ✅ 正确：导入图片
import photo from './assets/photo.jpg';
<img src={photo} />

// ✅ 或使用 public 文件夹
<img src={`${import.meta.env.BASE_URL}photo.jpg`} />
```

### 2. 部署后路由 404

见上文 "React Router 问题 → 刷新页面后 404"

## 💻 浏览器兼容性

### 问题：在某些浏览器上不工作

**排查**：
1. 使用 [Can I Use](https://caniuse.com/) 检查特性支持
2. 使用 Babel 转译新语法
3. 使用 Autoprefixer 添加浏览器前缀

**Vite 配置**：
```javascript
// vite.config.js
export default {
    build: {
        target: 'es2015' // 支持更旧的浏览器
    }
}
```

## 🔍 调试技巧

### 1. Console 调试

```javascript
// 查看变量
console.log('user:', user);

// 查看对象
console.table(users);

// 断点调试
debugger; // 浏览器会在这里暂停

// 查看组件渲染次数
useEffect(() => {
    console.log('Component rendered');
});
```

### 2. React DevTools

- 安装 React DevTools 浏览器扩展
- F12 → React 标签
- 查看组件树、Props、State

### 3. 浏览器开发者工具

- **Elements**：查看 HTML 和 CSS
- **Console**：查看错误和日志
- **Network**：查看网络请求
- **Performance**：性能分析

## 📚 遇到问题时的搜索技巧

### 如何搜索

1. **使用英文关键词**：
   - ✅ "react useState not updating"
   - ❌ "react状态没更新"

2. **包含错误信息**：
   ```
   Cannot find module 'react-router-dom' react
   ```

3. **使用网站限定**：
   ```
   site:stackoverflow.com react hooks infinite loop
   ```

### 推荐网站

- **[Stack Overflow](https://stackoverflow.com/)** - 技术问答
- **[GitHub Issues](https://github.com/)** - 查看库的 issues
- **[MDN](https://developer.mozilla.org/)** - Web 技术文档

## 🆘 还是解决不了？

### 询问 AI

**提问模板**：
```
我在做 [项目描述]，遇到了以下问题：

[错误信息]

我的代码：
[粘贴相关代码]

我尝试了：
1. [尝试1]
2. [尝试2]

但还是不行，请帮我找出问题。
```

### 询问 Advisors

- 准备好：
  1. 清晰的问题描述
  2. 错误截图
  3. 相关代码
  4. 你已经尝试的解决方案

---

**记住**：遇到问题是学习的机会！不要慌张，系统性地排查问题
