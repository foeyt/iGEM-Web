# 🎨 第一阶段：HTML + CSS 基础（7天）

**阶段目标**：学会使用 HTML 和 CSS 构建静态网页，理解网页的基本结构和样式控制。

**时间安排**：2026.01.26 - 2026.02.01

**最终交付**：一个美观的、响应式的个人简历/落地页

## 📅 学习路线

```
Day 1-2: HTML 基础        →  创建简历骨架
Day 3-5: CSS 样式         →  美化简历页面
Day 6-7: 响应式布局      →  适配移动端
```

## 🎯 Day 1-2: HTML 语义化标签

### 学习目标

- 理解 HTML 的基本结构
- 掌握常用的语义化标签
- 能够构建一个结构清晰的简历页面

### 核心知识点

#### 1. HTML 基本结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的个人简历</title>
</head>
<body>
    <!-- 页面内容 -->
</body>
</html>
```

**解释**：
- `<!DOCTYPE html>`: 告诉浏览器这是 HTML5 文档
- `<html lang="zh-CN">`: 指定页面语言为中文
- `<meta charset="UTF-8">`: 设置字符编码，支持中文
- `<meta name="viewport" ...>`: 让页面在移动设备上正确显示

#### 2. 语义化标签

**什么是语义化**？
- 用有意义的标签，而不是什么都用 `<div>`
- 让代码更易读，对 SEO 更友好
- 有助于无障碍访问（屏幕阅读器）

**常用语义化标签**：

```html
<header>   <!-- 页面或区域的头部 -->
<nav>      <!-- 导航链接 -->
<main>     <!-- 主要内容 -->
<section>  <!-- 文档中的一个区域 -->
<article>  <!-- 独立的文章内容 -->
<aside>    <!-- 侧边栏或附加信息 -->
<footer>   <!-- 页脚 -->
```

#### 3. 文本标签

```html
<h1> - <h6>   <!-- 标题，h1 最重要 -->
<p>           <!-- 段落 -->
<strong>      <!-- 重要文本（加粗） -->
<em>          <!-- 强调文本（斜体） -->
<a>           <!-- 链接 -->
<ul> / <ol>   <!-- 无序/有序列表 -->
<li>          <!-- 列表项 -->
```

### 动手实践：创建简历骨架

**任务**：创建一个包含以下部分的简历：
1. 个人信息（姓名、职位、联系方式）
2. 个人简介
3. 技能列表
4. 教育经历
5. 项目经验

**参考示例**（查看 `examples/phase1-static/01-basic-html/resume.html`）：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>张三的个人简历</title>
</head>
<body>
    <!-- 头部：个人信息 -->
    <header>
        <h1>张三</h1>
        <p>前端开发工程师</p>
        <nav>
            <a href="mailto:zhangsan@example.com">📧 邮箱</a>
            <a href="https://github.com/zhangsan">🔗 GitHub</a>
            <a href="tel:13800138000">📱 手机</a>
        </nav>
    </header>

    <!-- 主要内容 -->
    <main>
        <!-- 个人简介 -->
        <section>
            <h2>关于我</h2>
            <p>
                我是一名热爱技术的前端开发者，擅长使用 React 构建现代化的 Web 应用
                对用户体验和代码质量有极致追求
            </p>
        </section>

        <!-- 技能 -->
        <section>
            <h2>技能</h2>
            <ul>
                <li><strong>前端</strong>: HTML, CSS, JavaScript, React</li>
                <li><strong>工具</strong>: Git, VS Code, npm</li>
                <li><strong>设计</strong>: Figma, Photoshop</li>
            </ul>
        </section>

        <!-- 教育经历 -->
        <section>
            <h2>教育经历</h2>
            <article>
                <h3>XX 大学</h3>
                <p>计算机科学与技术 | 2025 - 2029</p>
                <p>主修课程：数据结构、算法</p>
            </article>
        </section>

        <!-- 项目经验 -->
        <section>
            <h2>项目经验</h2>
            
            <article>
                <h3>个人博客系统</h3>
                <p><em>2024.06 - 2024.09</em></p>
                <p>使用 React 和 Node.js 开发的全栈博客平台</p>
                <ul>
                    <li>实现了 Markdown 编辑器</li>
                    <li>支持文章分类和标签</li>
                    <li>集成了评论系统</li>
                </ul>
            </article>

            <article>
                <h3>天气预报 Web 应用</h3>
                <p><em>2025.03 - 2025.05</em></p>
                <p>调用天气 API 的单页应用</p>
                <ul>
                    <li>响应式设计，适配多种设备</li>
                    <li>展示未来一周天气预报</li>
                </ul>
            </article>
        </section>
    </main>

    <!-- 页脚 -->
    <footer>
        <p>© 2026 张三. 保留所有权利.</p>
    </footer>
</body>
</html>
```

### 练习任务

1. **基础任务**：
   - 创建你自己的简历 HTML 文件
   - 填入真实的个人信息
   - 使用正确的语义化标签

2. **进阶任务**：
   - 添加一个"兴趣爱好"部分
   - 添加社交媒体链接（GitHub, LinkedIn 等）
   - 使用 `<img>` 标签添加个人照片

### 📚 AI 协作建议

**可以问 AI 的问题**：
```
我想创建一个个人简历页面，应该包含哪些部分？
每个部分应该用什么 HTML 标签？

<section> 和 <article> 有什么区别？什么时候用哪个？

如何在 HTML 中添加邮箱和电话链接，点击可以直接打开邮件或拨打电话？
```

### ✅ Day 1-2 检查清单

- [ ] 理解 HTML 基本结构
- [ ] 能够正确使用语义化标签
- [ ] 完成了一个包含所有必需部分的简历 HTML
- [ ] 代码结构清晰，缩进正确
- [ ] 用浏览器打开能正常显示

---

## 🎨 Day 3-5: CSS 样式化

### 学习目标

- 理解 CSS 的基本语法和选择器
- 掌握常用的 CSS 属性
- 能够美化网页，控制颜色、字体、间距

### 核心知识点

#### 1. CSS 引入方式

**方式一：外部 CSS（推荐）**
```html
<!-- 在 HTML 的 <head> 中引入 -->
<link rel="stylesheet" href="style.css">
```

**方式二：内部 CSS**
```html
<head>
    <style>
        body {
            background-color: #f5f5f5;
        }
    </style>
</head>
```

**方式三：内联 CSS（不推荐）**
```html
<p style="color: red;">这是红色文字</p>
```

#### 2. CSS 选择器

```css
/* 元素选择器 */
h1 {
    color: blue;
}

/* 类选择器 */
.title {
    font-size: 24px;
}

/* ID 选择器 */
#header {
    background: white;
}

/* 后代选择器 */
header h1 {
    margin: 0;
}

/* 伪类选择器 */
a:hover {
    color: red;
}
```

#### 3. 盒模型（重要！）

```
┌─────────────────────────────┐
│        margin (外边距)       │
│  ┌─────────────────────────┐ │
│  │    border (边框)         │ │
│  │  ┌──────────────────┐   │ │
│  │  │  padding (内边距) │   │ │
│  │  │  ┌──────────┐    │   │ │
│  │  │  │ content  │    │   │ │
│  │  │  └──────────┘    │   │ │
│  │  └──────────────────┘   │ │
│  └─────────────────────────┘ │
└─────────────────────────────┘
```

```css
.box {
    width: 200px;          /* 内容宽度 */
    height: 100px;         /* 内容高度 */
    padding: 20px;         /* 内边距 */
    border: 2px solid #333;/* 边框 */
    margin: 10px;          /* 外边距 */
}
```

#### 4. 常用 CSS 属性

**文字相关**：
```css
.text {
    color: #333;              /* 文字颜色 */
    font-size: 16px;          /* 字体大小 */
    font-weight: bold;        /* 字体粗细 */
    font-family: Arial, sans-serif; /* 字体族 */
    line-height: 1.6;         /* 行高 */
    text-align: center;       /* 文字对齐 */
    text-decoration: none;    /* 文字装饰（去下划线） */
}
```

**背景相关**：
```css
.bg {
    background-color: #f5f5f5;  /* 背景颜色 */
    background-image: url('bg.jpg'); /* 背景图片 */
    background-size: cover;     /* 背景大小 */
}
```

**布局相关**（下一阶段详细讲）：
```css
.container {
    display: flex;            /* Flexbox 布局 */
    max-width: 1200px;        /* 最大宽度 */
    margin: 0 auto;           /* 水平居中 */
    padding: 20px;            /* 内边距 */
}
```

### 动手实践：美化简历

**任务**：给 Day 1-2 创建的简历添加 CSS 样式

**参考示例**（查看 `examples/phase1-static/02-styled-resume/`）：

创建 `style.css` 文件：

```css
/* 全局样式 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f5f5f5;
}

/* 容器 */
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 头部 */
header {
    text-align: center;
    padding: 40px 0;
    border-bottom: 3px solid #0066cc;
}

header h1 {
    font-size: 36px;
    color: #0066cc;
    margin-bottom: 10px;
}

header p {
    font-size: 18px;
    color: #666;
    margin-bottom: 20px;
}

header nav {
    display: flex;
    justify-content: center;
    gap: 20px;
}

header nav a {
    color: #0066cc;
    text-decoration: none;
    transition: color 0.3s;
}

header nav a:hover {
    color: #004999;
}

/* 主要内容 */
main {
    padding: 40px 0;
}

section {
    margin-bottom: 40px;
}

section h2 {
    font-size: 24px;
    color: #0066cc;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e0e0e0;
}

section h3 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
}

section p {
    margin-bottom: 10px;
    color: #666;
}

section ul {
    list-style-position: inside;
    margin-left: 20px;
}

section li {
    margin-bottom: 8px;
    color: #555;
}

/* 项目卡片 */
article {
    background: #f9f9f9;
    padding: 20px;
    margin-bottom: 20px;
    border-left: 4px solid #0066cc;
    border-radius: 4px;
}

article h3 {
    color: #0066cc;
}

/* 页脚 */
footer {
    text-align: center;
    padding: 20px 0;
    border-top: 1px solid #e0e0e0;
    color: #999;
    font-size: 14px;
}
```

在 HTML 中引入：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>张三的个人简历</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- 原来的内容 -->
    </div>
</body>
```

### 设计技巧

1. **配色方案**：
   - 主色：选择一个代表你的颜色（如蓝色 #0066cc）
   - 文字：深灰色 #333（比纯黑更柔和）
   - 背景：浅灰色 #f5f5f5
   - 边框：更浅的灰色 #e0e0e0

2. **字体选择**：
   - 使用系统字体栈，保证在所有设备上都显示良好
   - 中文：`"PingFang SC", "Microsoft YaHei"`
   - 英文：`-apple-system, BlinkMacSystemFont, "Segoe UI"`

3. **间距原则**：
   - 标题与内容之间：20px
   - 段落之间：10-15px
   - 大模块之间：40px
   - 内边距：20-40px

4. **阴影和圆角**：
   - 轻微的阴影：`box-shadow: 0 2px 10px rgba(0,0,0,0.1)`
   - 圆角：`border-radius: 4-8px`

### 练习任务

1. **基础任务**：
   - 给你的简历添加 CSS 样式
   - 至少包含：颜色、字体、间距、边框
   - 让页面看起来整洁舒适

2. **进阶任务**：
   - 添加 hover 效果（如链接悬停变色）
   - 使用 CSS 变量统一管理颜色
   - 添加渐变背景或细微的动画

### 📚 AI 协作建议

**可以问 AI 的问题**：
```
我想让我的简历页面看起来更专业，应该用什么配色方案？
请给我 3-4 个推荐的颜色代码。

如何让链接在鼠标悬停时有平滑的颜色过渡效果？

什么是 box-sizing: border-box？为什么要用它？

如何让一个 div 居中显示？
```

### ✅ Day 3-5 检查清单

- [ ] 理解 CSS 基本语法和选择器
- [ ] 掌握盒模型概念
- [ ] 简历页面有合适的配色和字体
- [ ] 间距和布局看起来舒适
- [ ] 添加了一些交互效果（如 hover）

---

## 📱 Day 6-7: 响应式布局

### 学习目标

- 理解响应式设计的原理
- 掌握 Flexbox 布局
- 使用媒体查询适配不同屏幕尺寸

### 核心知识点

#### 1. 什么是响应式设计？

**响应式设计**：网页能够根据不同设备（手机、平板、电脑）的屏幕尺寸自动调整布局和样式。

**为什么重要**？
- 超过 50% 的用户使用手机浏览网页
- 提升用户体验
- Google 搜索排名会考虑移动端友好性

#### 2. Flexbox 布局（强烈推荐）

Flexbox 是现代 CSS 布局的首选方案，简单强大。

**基础语法**：

```css
.container {
    display: flex;              /* 启用 Flexbox */
    flex-direction: row;        /* 方向：row(横) / column(竖) */
    justify-content: center;    /* 主轴对齐：center / space-between / space-around */
    align-items: center;        /* 交叉轴对齐：center / flex-start / flex-end */
    gap: 20px;                  /* 子元素间距 */
    flex-wrap: wrap;            /* 换行：wrap / nowrap */
}

.item {
    flex: 1;                    /* 自动分配剩余空间 */
}
```

**示例：三栏布局**

```css
.skills-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.skill-item {
    flex: 1 1 200px;  /* 最小宽度 200px，自动换行 */
    background: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
}
```

#### 3. 媒体查询（Media Query）

根据屏幕宽度应用不同的 CSS 样式。

```css
/* 默认样式（移动优先） */
.container {
    padding: 10px;
}

/* 平板及以上（768px 及以上） */
@media (min-width: 768px) {
    .container {
        padding: 20px;
    }
    
    .nav {
        flex-direction: row;
    }
}

/* 桌面端（1024px 及以上） */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        padding: 40px;
    }
}
```

**常用断点**：
- 手机：< 768px
- 平板：768px - 1024px
- 桌面：> 1024px

#### 4. 响应式图片

```css
img {
    max-width: 100%;    /* 不超过容器宽度 */
    height: auto;       /* 保持宽高比 */
    display: block;     /* 去除底部空隙 */
}
```

### 动手实践：响应式简历

**任务**：让你的简历在手机和电脑上都好看

**参考示例**（查看 `examples/phase1-static/03-responsive-landing/`）：

```css
/* ===== 移动优先设计 ===== */

/* 基础样式（手机） */
.container {
    max-width: 100%;
    padding: 15px;
}

header nav {
    flex-direction: column;  /* 垂直排列 */
    gap: 10px;
}

.skills-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

/* ===== 平板及以上 ===== */
@media (min-width: 768px) {
    .container {
        padding: 30px;
    }
    
    header nav {
        flex-direction: row;  /* 水平排列 */
        gap: 20px;
    }
    
    .skills-grid {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .skill-item {
        flex: 1 1 45%;  /* 两栏布局 */
    }
}

/* ===== 桌面端 ===== */
@media (min-width: 1024px) {
    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 60px 40px;
    }
    
    .skill-item {
        flex: 1 1 30%;  /* 三栏布局 */
    }
    
    article {
        display: flex;
        gap: 20px;
    }
    
    article .content {
        flex: 2;
    }
    
    article .date {
        flex: 1;
    }
}
```

### 测试响应式设计

1. **Chrome DevTools**：
   - 按 F12 打开开发者工具
   - 点击"设备切换工具栏"图标（或按 Ctrl+Shift+M）
   - 选择不同的设备查看效果

2. **调整浏览器窗口**：
   - 慢慢缩小浏览器窗口宽度
   - 观察布局变化是否自然

3. **真机测试**：
   - 用手机浏览器打开你的页面
   - 检查是否有内容溢出或太小

### 练习任务

1. **基础任务**：
   - 使用 Flexbox 重构简历布局
   - 添加媒体查询，适配手机/平板/桌面
   - 确保在各种设备上都能正常显示

2. **进阶任务**：
   - 创建一个响应式的导航栏（桌面端横向，移动端纵向）
   - 技能部分在桌面端显示为三栏，平板两栏，手机一栏
   - 添加一个"返回顶部"按钮，只在移动端显示

### 📚 AI 协作建议

**可以问 AI 的问题**：
```
请解释 Flexbox 的 justify-content 和 align-items 有什么区别？
用图示或例子说明。

我想创建一个响应式的导航栏，桌面端横向排列，
移动端纵向排列，应该如何实现？

什么是"移动优先"设计？为什么要先写移动端样式？

如何让我的网页在不同设备上都有合适的文字大小？
```

### ✅ Day 6-7 检查清单

- [ ] 理解 Flexbox 布局原理
- [ ] 掌握媒体查询的使用
- [ ] 简历在手机/平板/桌面上都显示正常
- [ ] 文字大小和间距适配不同屏幕
- [ ] 图片不会溢出或变形

---

## 🎯 第一阶段总结

### 你应该已经掌握

✅ HTML 语义化标签的使用
✅ CSS 基本样式控制（颜色、字体、间距）
✅ 盒模型和布局原理
✅ Flexbox 布局
✅ 响应式设计和媒体查询
✅ 基本的审美和设计感

### 最终交付物检查

- [ ] 一个完整的个人简历 HTML 页面
- [ ] 使用外部 CSS 文件
- [ ] 页面美观，配色协调
- [ ] 布局合理，间距适宜
- [ ] 响应式设计，适配多种设备
- [ ] 代码整洁，命名规范
- [ ] 浏览器打开无错误

### 参考标准

**基本合格**（60分）：
- 结构完整，内容齐全
- 有基本的样式
- 手机端能正常浏览

**良好**（80分）：
- 配色协调，排版舒适
- Flexbox 布局使用得当
- 响应式设计流畅

**优秀**（95分以上）：
- 设计美观，有专业感
- 细节打磨到位（hover 效果、圆角、阴影等）
- 完美适配各种屏幕尺寸
- 代码规范，可维护性强

## 📚 扩展资源

- **Flexbox 练习游戏**：
  - [Flexbox Froggy](https://flexboxfroggy.com/) - 好玩的 Flexbox 学习游戏
  - [Flexbox Defense](http://www.flexboxdefense.com/) - 塔防游戏学 Flexbox

- **设计灵感**：
  - [Dribbble](https://dribbble.com/search/resume) - 搜索 "resume" 或 "portfolio"
  - [Behance](https://www.behance.net/) - Adobe 的设计社区

- **颜色工具**：
  - [Coolors](https://coolors.co/) - 配色方案生成器
  - [Color Hunt](https://colorhunt.co/) - 配色方案库

- **字体资源**：
  - [Google Fonts](https://fonts.google.com/) - 免费网页字体

## 🚀 下一步

完成第一阶段后，休息一下，然后前往 [第二阶段：JavaScript + React](02-phase2-js-react.md)！

你将学习如何让网页"动起来"，并使用 React 框架重构你的简历。

---

**有问题？**
- 查看 [问题排查指南](../resources/troubleshooting.md)
- 使用 AI 工具寻求帮助
- 询问 advisors
