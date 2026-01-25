# 📂 项目结构总览

完整的教学模板项目结构，方便快速查找所需内容

## 🗂️ 目录树

```
profile-template-26wiki/
│
├── 📄 README.md                          # 项目总览和快速开始
├── 📄 PROJECT_STRUCTURE.md               # 本文件 - 结构说明
│
├── 📚 docs/                              # 教程文档
│   ├── 00-getting-started.md            # 🛠️ 环境准备和工具安装
│   ├── 01-phase1-html-css.md            # 🎨 第一阶段：HTML/CSS 教程
│   ├── 02-phase2-js-react.md            # ⚛️ 第二阶段：JS/React 教程
│   ├── 03-phase3-final-project.md       # 🎯 第三阶段：最终项目指南
│   ├── design-guide.md                  # 🎨 设计指南与审美培养
│   ├── git-workflow.md                  # 📝 Git 工作流程规范
│   └── ai-best-practices.md             # 🤖 AI 辅助开发最佳实践
│
├── 💡 examples/                          # 代码示例
│   │
│   ├── phase1-static/                   # 第一阶段示例（静态网页）
│   │   ├── 01-basic-html/              # HTML 基础结构
│   │   │   ├── README.md
│   │   │   └── resume.html             # 完整的语义化 HTML 简历
│   │   │
│   │   ├── 02-styled-resume/           # CSS 样式化
│   │   │   ├── README.md
│   │   │   ├── resume.html
│   │   │   └── style.css               # 完整的 CSS 样式
│   │   │
│   │   └── 03-responsive-landing/      # 响应式落地页
│   │       ├── README.md
│   │       ├── index.html              # 响应式个人主页
│   │       └── styles.css              # 响应式 CSS
│   │
│   ├── phase2-react/                    # 第二阶段示例（React）
│   │   ├── 01-js-basics/               # JavaScript 基础
│   │   │   └── README.md               # JS 语法和 DOM 操作
│   │   │
│   │   ├── 02-react-intro/             # React 入门
│   │   │   └── README.md               # 组件、Props、State
│   │   │
│   │   ├── 03-react-advanced/          # React 进阶
│   │   │   └── README.md               # Hooks、Context、Router
│   │   │
│   │   └── 04-loading-animations/      # 加载动画设计
│   │       └── README.md               # 加载动画实现和设计指南
│   │
│   └── phase3-final/                    # 第三阶段示例（最终项目）
│       └── starter-template/           # 项目起始模板
│           └── README.md               # 完整项目结构说明
│
└── 🔗 resources/                         # 学习资源
    ├── design-inspiration.md            # 🎨 设计灵感和参考网站
    ├── useful-libraries.md              # 📦 实用库和工具推荐
    └── troubleshooting.md               # 🔧 常见问题排查指南
```

## 📖 内容导航

### 🚀 开始学习

1. **环境准备**
   - 📄 `docs/00-getting-started.md`
   - 安装 VS Code、Node.js、Git
   - 注册 GitHub 账号
   - 准备 AI 工具

2. **学习三阶段**
   - 📄 `docs/01-phase1-html-css.md` - HTML/CSS（7天）
   - 📄 `docs/02-phase2-js-react.md` - JS/React（14天）
   - 📄 `docs/03-phase3-final-project.md` - 最终项目（7天）

3. **必读指南**
   - 📄 `docs/git-workflow.md` - Git 版本控制
   - 📄 `docs/ai-best-practices.md` - AI 使用规范
   - 📄 `docs/design-guide.md` - 设计审美培养

### 💻 代码示例

#### 第一阶段（HTML/CSS）

| 示例 | 位置 | 学习内容 |
|------|------|----------|
| 基础 HTML | `examples/phase1-static/01-basic-html/` | 语义化标签 |
| CSS 样式 | `examples/phase1-static/02-styled-resume/` | 样式控制、盒模型 |
| 响应式 | `examples/phase1-static/03-responsive-landing/` | Flexbox、媒体查询 |

#### 第二阶段（JS/React）

| 示例 | 位置 | 学习内容 |
|------|------|----------|
| JS 基础 | `examples/phase2-react/01-js-basics/` | 语法、DOM 操作 |
| React 入门 | `examples/phase2-react/02-react-intro/` | 组件、Props、State |
| React 进阶 | `examples/phase2-react/03-react-advanced/` | Hooks、Context、Router |
| 加载动画 | `examples/phase2-react/04-loading-animations/` | 加载动画设计和实现 |

#### 第三阶段（最终项目）

| 示例 | 位置 | 学习内容 |
|------|------|----------|
| 项目模板 | `examples/phase3-final/starter-template/` | 完整项目结构 |

### 📚 学习资源

| 资源 | 位置 | 内容 |
|------|------|------|
| 设计灵感 | `resources/design-inspiration.md` | 优秀网站、配色、字体 |
| 实用库 | `resources/useful-libraries.md` | React 生态、工具推荐 |
| 问题排查 | `resources/troubleshooting.md` | 常见错误解决方案 |

## 🎯 使用建议

### 按阶段学习

```
第一阶段（Day 1-7）
└─> 阅读 docs/01-phase1-html-css.md
    └─> 参考 examples/phase1-static/
        └─> 完成自己的静态简历

第二阶段（Day 8-21）
└─> 阅读 docs/02-phase2-js-react.md
    └─> 参考 examples/phase2-react/
        └─> 用 React 重构简历

第三阶段（Day 22-37）
└─> 阅读 docs/03-phase3-final-project.md
    └─> 使用 examples/phase3-final/starter-template/
        └─> 完成完整个人主页并部署
```

### 遇到问题时

1. **技术问题** → `resources/troubleshooting.md`
2. **设计困惑** → `docs/design-guide.md` 或 `resources/design-inspiration.md`
3. **AI 使用** → `docs/ai-best-practices.md`
4. **Git 操作** → `docs/git-workflow.md`
5. **找不到库** → `resources/useful-libraries.md`

### 文件查找技巧

#### 想学某个概念？

- **HTML 语义化** → `docs/01-phase1-html-css.md` → Day 1-2
- **CSS Flexbox** → `docs/01-phase1-html-css.md` → Day 6-7
- **React Hooks** → `docs/02-phase2-js-react.md` → Day 10-14
- **加载动画** → `examples/phase2-react/04-loading-animations/` → 加载动画设计
- **配色方案** → `docs/design-guide.md` → 配色方案章节

#### 想看示例代码？

- **HTML 简历** → `examples/phase1-static/01-basic-html/resume.html`
- **响应式 CSS** → `examples/phase1-static/03-responsive-landing/styles.css`
- **React 组件** → `examples/phase2-react/02-react-intro/README.md`

#### 想找工具或资源？

- **UI 组件库** → `resources/useful-libraries.md` → React 生态
- **配色工具** → `resources/design-inspiration.md` → 配色灵感
- **图标库** → `resources/useful-libraries.md` → 图标

## 📝 文件命名规则

- **文档文件**：`kebab-case.md`（例：`getting-started.md`）
- **代码文件**：
  - React 组件：`PascalCase.jsx`（例：`Header.jsx`）
  - 其他 JS：`camelCase.js`（例：`helpers.js`）
  - CSS：`kebab-case.css`（例：`global-styles.css`）
  - HTML：`kebab-case.html`（例：`index.html`）

## 🔄 更新记录

- **2026-01-25**：初始版本发布，包含完整教程和示例

## 💡 贡献建议

如果你在使用过程中：
- 发现错误或不清楚的地方
- 有更好的示例代码
- 想添加新的资源

欢迎向 advisors 反馈！

---

**祝学习顺利！期待看到你的个人主页作品！** 🎉
