# 🎯 第三阶段：最终项目实战（16天）

**阶段目标**：综合运用所学知识，独立完成一个完整的个人 GitHub 主页。

**时间安排**：2026.02.21 - 2026.03.08（春节后）

**最终交付**：部署到 GitHub Pages 的完整个人主页 + 完善的文档

## 📋 项目要求

### 必须达到的标准

#### 1. 技术要求

✅ **框架**：使用 React（必须）
✅ **路由**：使用 React Router 实现多页面
✅ **状态管理**：至少使用 Context API 或自定义 Hook
✅ **响应式**：完美适配手机、平板、桌面端
✅ **部署**：部署到 GitHub Pages 并可访问
✅ **版本控制**：Git 提交记录清晰完整

#### 2. 内容要求

必须包含以下模块：

- **首页/Hero**：吸引人的首屏展示
- **关于我**：个人介绍、教育经历
- **技能**：技术栈展示
- **项目经历**：至少 3 个项目（可以是学习项目）
- **联系方式**：邮箱、GitHub、社交媒体等

#### 3. 设计要求

✅ 配色协调，有统一的设计风格
✅ 排版整洁，间距合理
✅ 有交互效果（hover、transition、animation）
✅ 参考了优秀设计（必须在 README 中注明来源）
✅ 不是"工程师审美"

#### 4. 代码质量

✅ 组件拆分合理，可复用
✅ 变量和函数命名清晰
✅ 有适当的注释
✅ 删除了调试代码（console.log）
✅ 无 linter 错误

#### 5. 文档要求

✅ 完整的 README.md
✅ AI 协作记录
✅ 项目运行说明
✅ 设计参考来源

## 📁 推荐的项目结构

```
my-github-page/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/         # 可复用组件
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/              # 页面组件
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── context/            # Context 状态管理
│   │   └── ThemeContext.jsx
│   ├── hooks/              # 自定义 Hooks
│   │   ├── useLocalStorage.js
│   │   └── useTheme.js
│   ├── data/               # 数据文件
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── personal.js
│   ├── styles/             # 样式文件
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── ...
│   ├── utils/              # 工具函数
│   │   └── helpers.js
│   ├── App.jsx             # 根组件
│   ├── App.css
│   ├── main.jsx            # 入口
│   └── index.css
├── .gitignore
├── package.json
├── vite.config.js
└── README.md               # 项目文档
```

## 🎨 设计灵感参考

在开始之前，建议浏览以下网站寻找灵感：

### 个人主页参考

- [Dribbble - Portfolio](https://dribbble.com/search/portfolio)
- [Behance - Personal Website](https://www.behance.net/search/projects?search=personal%20website)
- [Awwwards - Portfolio](https://www.awwwards.com/websites/portfolio/)

### 开发者主页实例

- [Brittany Chiang](https://brittanychiang.com/) - 简洁优雅
- [Bruno Simon](https://bruno-simon.com/) - 创意十足（3D）
- [Jack Jeznach](https://jacekjeznach.com/) - 动画流畅
- [Adham Dannaway](https://www.adhamdannaway.com/) - 设计师风格

**注意**：参考设计但不要完全抄袭，要有自己的特色！

## 🚀 开发步骤建议

### Day 1-3: 规划和设计

1. **收集灵感**
   - 浏览 3-5 个优秀的个人主页
   - 截图保存喜欢的设计元素
   - 确定自己的设计风格

2. **内容准备**
   - 整理个人信息、技能、项目
   - 准备图片素材（个人照片、项目截图）
   - 撰写个人简介和项目描述

3. **设计配色**
   - 选择主色调（代表你的个性）
   - 确定配色方案（使用 [Coolors](https://coolors.co/)）
   - 准备设计草图（可以手绘或用 Figma）

### Day 4-10: 核心开发

1. **搭建项目框架**
   ```bash
   npm create vite@latest my-github-page -- --template react
   cd my-github-page
   npm install react-router-dom
   npm install
   ```

2. **创建基础组件**
   - Header / Navigation
   - Footer
   - Button、Card 等可复用组件

3. **开发各个页面**
   - Home（首屏 Hero）
   - About（关于我）
   - Projects（项目展示）
   - Contact（联系方式）

4. **实现核心功能**
   - 暗黑模式切换
   - 响应式导航
   - 平滑滚动
   - 页面路由

### Day 11-14: 优化和完善

1. **响应式测试**
   - 在不同设备上测试
   - 调整断点和样式
   - 确保移动端体验良好

2. **性能优化**
   - 压缩图片
   - 代码分割
   - 懒加载组件

3. **细节打磨**
   - 添加动画和过渡效果
   - 优化加载状态
   - 完善错误处理

4. **功能完善**
   - 测试所有交互功能
   - 修复发现的 bug
   - 优化用户体验

### Day 15-16: 部署和文档

1. **部署到 GitHub Pages**
   ```bash
   npm install --save-dev gh-pages
   ```
   
   在 `package.json` 中添加：
   ```json
   {
     "homepage": "https://你的用户名.github.io/仓库名",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
   
   部署：
   ```bash
   npm run deploy
   ```

2. **完善 README.md**（见下方模板）

3. **代码清理**
   - 删除未使用的代码
   - 删除 console.log
   - 检查 linter 错误

4. **最后测试**
   - 在真机上测试
   - 请朋友帮忙测试
   - 确保在线链接可访问

## 📝 README 模板

创建一个完整的 `README.md`：

```markdown
# 个人主页 - [你的名字]

> 一个现代化的个人作品集网站，展示我的技能、项目和经历。

🔗 **在线访问**: [https://你的用户名.github.io/仓库名](https://...)

![主页截图](./screenshots/home.png)

## ✨ 特性

- 🎨 现代化设计，响应式布局
- 🌓 支持亮色/暗黑模式切换
- ⚡ 使用 React 构建，性能优异
- 📱 完美适配移动端、平板、桌面端
- 🚀 部署在 GitHub Pages

## 🛠️ 技术栈

- **框架**: React 18
- **构建工具**: Vite
- **路由**: React Router v6
- **样式**: CSS3 + CSS Modules
- **部署**: GitHub Pages

## 📂 项目结构

\`\`\`
src/
├── components/    # 可复用组件
├── pages/         # 页面组件
├── context/       # 状态管理
├── data/          # 数据文件
└── styles/        # 样式文件
\`\`\`

## 🎨 设计参考

本项目的设计灵感来源于：

1. [Brittany Chiang](https://brittanychiang.com/) - 整体布局风格
2. [Dribbble](https://dribbble.com/shots/...) - 配色方案
3. [Awwwards](https://www.awwwards.com/...) - 动画效果

## 🤖 AI 协作记录

### 使用的 AI 工具
- **GitHub Copilot**: 代码补全和重构建议
- **ChatGPT**: 问题解答和代码优化

### 主要协作场景

#### 1. 响应式布局实现
**问题**: 如何让导航栏在移动端和桌面端有不同表现
**AI 帮助**: 提供了 media query 和 CSS Grid 的解决方案
**我的修改**: 调整了断点值，增加了平滑过渡效果
**学到的知识**: CSS Grid 的 auto-fit 和 minmax 用法

#### 2. React 状态管理
**问题**: 多个组件需要共享主题状态
**AI 帮助**: 建议使用 Context API 并给出示例代码
**我的修改**: 将主题状态持久化到 localStorage
**学到的知识**: Context Provider 的实现原理

#### 3. 性能优化
**问题**: 首屏加载较慢
**AI 帮助**: 建议使用 React.lazy 进行代码分割
**我的修改**: 对项目详情页实现了懒加载
**学到的知识**: 动态 import 和 Suspense 的使用

### AI 使用心得

1. AI 能快速提供解决思路，但要理解原理后再使用
2. 对于复杂需求，要分步骤提问，逐步完善
3. AI 生成的代码需要根据实际项目调整和优化
4. 保持独立思考，不过度依赖 AI

## 🚀 本地运行

\`\`\`bash
# 克隆项目
git clone https://github.com/你的用户名/仓库名.git

# 进入目录
cd 仓库名

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
\`\`\`

访问 `http://localhost:5173` 查看项目。

## 📦 部署

\`\`\`bash
# 部署到 GitHub Pages
npm run deploy
\`\`\`

## 📄 开源协议

MIT License

---

**联系我**: [email@example.com](mailto:...)
\`\`\`

## ✅ 验收标准

在提交前，请对照以下清单自查：

### 功能完整性
- [ ] 所有必需页面都已完成
- [ ] 路由正常工作，无 404
- [ ] 暗黑模式切换正常
- [ ] 响应式布局在各设备上正常

### 代码质量
- [ ] 组件拆分合理
- [ ] 代码有适当注释
- [ ] 无 console.log 等调试代码
- [ ] 无 ESLint 错误
- [ ] Git commit 信息清晰

### 设计审美
- [ ] 配色协调统一
- [ ] 排版整洁有序
- [ ] 有交互动画效果
- [ ] 参考了优秀设计
- [ ] 在 README 中注明设计来源

### 文档完善
- [ ] README 完整详细
- [ ] 包含 AI 协作记录
- [ ] 有项目运行说明
- [ ] 有在线访问链接

### 部署成功
- [ ] GitHub Pages 部署成功
- [ ] 在线链接可正常访问
- [ ] 在真机上测试过
- [ ] 分享给朋友测试过

## 💡 加分项（可选）

想要更高的分数？考虑添加这些：

- 🎭 流畅的页面切换动画
- 🌍 国际化（中英文切换）
- 📊 技能可视化（进度条、雷达图）
- 📧 联系表单（集成 EmailJS 或 Formspree）
- 📝 集成博客（Markdown 渲染）
- 🎨 可自定义主题色
- ♿ 无障碍访问优化
- 🔍 SEO 优化
- 📈 Google Analytics 集成

## 🆘 常见问题

### 1. 部署后页面空白
- 检查 `vite.config.js` 中的 `base` 配置
- 确保 `package.json` 中的 `homepage` 正确

### 2. 路由刷新后 404
- GitHub Pages 不支持客户端路由
- 解决方案：使用 HashRouter 或添加 404.html 重定向

### 3. 图片加载失败
- 图片路径要使用相对路径
- 或使用 `import` 导入图片

### 4. 打包后 CSS 样式丢失
- 检查 CSS 文件是否正确导入
- 确认 Vite 配置是否正确

更多问题查看 [问题排查指南](../resources/troubleshooting.md)。

## 🎉 完成了？

恭喜你完成整个网页组寒假培训！

你现在已经掌握了：
- ✅ 现代前端开发完整流程
- ✅ React 框架实战经验
- ✅ 工程化思维和团队协作能力
- ✅ AI 辅助开发技能

**接下来你可以**：
- 继续完善你的个人主页
- 学习 TypeScript、Next.js 等进阶技术
- 参与开源项目
- 准备 iGEM 比赛的 Wiki 开发

---

**期待在 iGEM 比赛中看到你的精彩表现！** 🚀
