# 🛠️ 环境准备指南

在开始学习之前，我们需要准备好开发环境和必要的工具。

## 📦 必备软件安装

### 1. 代码编辑器：VS Code

**推荐使用 Visual Studio Code**，它是目前最流行的前端开发编辑器。

**下载地址**：[https://code.visualstudio.com/](https://code.visualstudio.com/)

**必装插件**：
- **Live Server** - 实时预览 HTML 页面（阶段一必备）
- **ES7+ React/Redux/React-Native snippets** - React 代码片段
- **Prettier - Code formatter** - 代码格式化
- **Auto Rename Tag** - 自动重命名标签
- **Path Intellisense** - 路径自动补全
- **Color Highlight** - 颜色高亮显示

**安装方式**：
1. 打开 VS Code
2. 点击左侧扩展图标（或按 `Ctrl+Shift+X`）
3. 搜索插件名称并点击 Install

### 2. Node.js 和 npm

**Node.js** 是 JavaScript 运行环境，**npm** 是包管理器（安装 Node.js 会自动安装 npm）。

**下载地址**：[https://nodejs.org/](https://nodejs.org/)

**选择版本**：下载 **LTS（长期支持版）**

**验证安装**：
打开命令行（Windows 用 PowerShell，Mac 用 Terminal），输入：

```bash
node --version
npm --version
```

如果显示版本号（如 `v20.11.0`），说明安装成功。

### 3. Git 版本控制

**Git** 用于代码版本管理和协作开发。

**下载地址**：[https://git-scm.com/](https://git-scm.com/)

**验证安装**：

```bash
git --version
```

**首次配置**（只需配置一次）：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

### 4. 浏览器

**推荐使用 Chrome 或 Edge**（都基于 Chromium，开发者工具强大）

**开发者工具快捷键**：
- Windows/Linux: `F12` 或 `Ctrl+Shift+I`
- Mac: `Cmd+Option+I`

## 🌐 注册账号

### GitHub 账号

**注册地址**：[https://github.com/](https://github.com/)

GitHub 用于：
- 托管代码仓库
- 部署个人主页（GitHub Pages）
- 协作开发

**注意**：
- 用户名建议使用专业的命名（会显示在你的主页 URL 中）
- 邮箱最好用常用邮箱（用于接收通知）

## 🤖 AI 工具准备

### 推荐的 AI 编程助手

本次培训**强制要求使用 AI 辅助编程**，以下是推荐的工具：

#### 1. **GitHub Copilot**

- **优点**：与 VS Code 深度集成，实时代码补全
- **申请**：学生可免费使用
- **申请地址**：[https://education.github.com/pack](https://education.github.com/pack)

#### 2. **ChatGPT** / **Claude**

- **用途**：解释代码、优化逻辑、解决报错
- **地址**：
  - ChatGPT: [https://chat.openai.com/](https://chat.openai.com/)
  - Claude: [https://claude.ai/](https://claude.ai/)

#### 3. **Cursor**（可选）

- **特点**：专为编程设计的 AI 编辑器
- **地址**：[https://cursor.sh/](https://cursor.sh/)

### AI 使用原则

⚠️ **重要提醒**：
- ✅ **必须理解 AI 生成的每一行代码**
- ✅ **必须能向 advisors 解释代码逻辑**
- ❌ **禁止直接复制大段代码而不测试**
- ❌ **禁止把 AI 当成"答案生成器"**

详细的 AI 使用指南请参考：[AI 最佳实践](ai-best-practices.md)

## 📁 创建项目文件夹

建议在你的电脑上创建一个专门的工作目录：

```
我的文档/
└── web-training-2026/
    ├── phase1-static/      # 第一阶段项目
    ├── phase2-react/       # 第二阶段项目
    └── my-github-page/     # 最终项目
```

**在 VS Code 中打开项目文件夹**：
1. 打开 VS Code
2. 文件 → 打开文件夹
3. 选择你创建的 `web-training-2026` 文件夹

## 🔍 验证环境配置

完成以上步骤后，请创建一个测试文件验证环境：

### 测试 1：HTML + Live Server

1. 在 VS Code 中创建 `test.html`：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>环境测试</title>
</head>
<body>
    <h1>环境配置成功！</h1>
    <p>如果你能看到这个页面，说明 Live Server 工作正常。</p>
</body>
</html>
```

2. 右键文件 → 选择 "Open with Live Server"
3. 浏览器应该自动打开并显示页面

### 测试 2：Node.js 和 npm

在命令行中执行：

```bash
# 查看 Node.js 版本
node --version

# 查看 npm 版本
npm --version

# 测试运行 JavaScript
node -e "console.log('Node.js 工作正常！')"
```

### 测试 3：Git

```bash
# 查看 Git 版本
git --version

# 查看 Git 配置
git config --list
```

## 📚 学习资源

### 官方文档（英文，建议结合 AI 翻译学习）

- **MDN Web Docs**：[https://developer.mozilla.org/](https://developer.mozilla.org/) - HTML/CSS/JS 权威文档
- **React 官方文档**：[https://react.dev/](https://react.dev/)

### 中文学习资源

- **MDN 中文**：[https://developer.mozilla.org/zh-CN/](https://developer.mozilla.org/zh-CN/)
- **菜鸟教程**：[https://www.runoob.com/](https://www.runoob.com/) - 适合快速入门

### 视频教程（可选）

- **B站搜索关键词**：
  - "HTML CSS 入门"
  - "JavaScript 零基础"
  - "React 教程"

**注意**：不要陷入"教程地狱"，**边做边学**才是最有效的方式！

## ✅ 环境准备检查清单

在继续下一步之前，请确认：

- [ ] VS Code 已安装并配置好插件
- [ ] Node.js 和 npm 安装成功（`node --version` 能正常显示）
- [ ] Git 安装成功并配置了用户信息
- [ ] GitHub 账号已注册
- [ ] 浏览器开发者工具能正常打开（F12）
- [ ] AI 工具已准备好（至少有 ChatGPT 或类似工具）
- [ ] 创建了项目文件夹并在 VS Code 中打开
- [ ] Live Server 测试成功

## 🎉 准备完成！

恭喜你完成了环境准备！现在可以开始正式学习了。

**下一步**：前往 [第一阶段教程](01-phase1-html-css.md) 开始学习 HTML 和 CSS。

---

**遇到问题？**
- 查看 [问题排查指南](../resources/troubleshooting.md)
- 使用 AI 工具搜索错误信息
- 询问 advisors
