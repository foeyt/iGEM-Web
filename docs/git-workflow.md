# 📝 Git 工作流程规范

Git 是现代软件开发中必不可少的版本控制工具。本指南将教你如何在项目中正确使用 Git。

## 🎯 为什么要用 Git？

- **版本管理**：记录每次修改，可随时回退
- **协作开发**：多人同时开发不会冲突
- **代码备份**：代码安全存储在云端
- **展示能力**：良好的 commit 记录是简历加分项

## 🚀 Git 基础工作流

### 1. 创建仓库

#### 方式一：在 GitHub 上创建（推荐）

1. 登录 GitHub
2. 点击右上角 `+` → `New repository`
3. 填写仓库信息：
   - **Repository name**: `my-github-page`（自己取名）
   - **Description**: 简短描述项目
   - **Public/Private**: 选 Public（公开）
   - ✅ 勾选 "Add a README file"
   - ✅ 勾选 "Add .gitignore" → 选择 `Node`
4. 点击 `Create repository`

5. 克隆到本地：

```bash
git clone https://github.com/你的用户名/my-github-page.git
cd my-github-page
```

#### 方式二：从本地创建

```bash
# 进入项目文件夹
cd my-github-page

# 初始化 Git 仓库
git init

# 创建 README
echo "# My GitHub Page" > README.md

# 添加文件
git add README.md

# 首次提交
git commit -m "Initial commit"

# 连接远程仓库（需先在 GitHub 创建空仓库）
git remote add origin https://github.com/你的用户名/my-github-page.git

# 推送到远程
git branch -M main
git push -u origin main
```

### 2. 日常开发流程

```bash
# 1. 查看当前状态
git status

# 2. 添加修改的文件
git add .                    # 添加所有修改
git add src/App.tsx          # 添加指定文件

# 3. 提交修改
git commit -m "描述你做了什么修改"

# 4. 推送到 GitHub
git push
```

### 3. 查看历史记录

```bash
# 查看提交历史
git log

# 查看简洁版历史
git log --oneline

# 查看图形化历史
git log --oneline --graph --all
```

## 📐 Commit 信息规范

### ❌ 糟糕的 commit 信息

```bash
git commit -m "update"
git commit -m "fix bug"
git commit -m "修改"
git commit -m "aaa"
```

**问题**：无法知道具体做了什么修改

### ✅ 优秀的 commit 信息

```bash
git commit -m "添加导航栏组件"
git commit -m "修复移动端布局错乱问题"
git commit -m "优化首页加载性能"
git commit -m "更新 README 文档"
```

**特点**：简洁明确，一看就知道改了什么

### Commit 信息格式（推荐）

使用以下前缀让 commit 更清晰：

```bash
feat: 新功能
fix: 修复 bug
docs: 文档更新
style: 代码格式调整（不影响功能）
refactor: 代码重构
perf: 性能优化
test: 测试相关
chore: 构建工具或依赖更新
```

**示例**：

```bash
git commit -m "feat: 添加暗黑模式切换功能"
git commit -m "fix: 修复导航栏在移动端不显示的问题"
git commit -m "docs: 更新项目 README"
git commit -m "style: 统一代码缩进格式"
git commit -m "refactor: 重构用户信息组件"
git commit -m "perf: 优化图片加载速度"
```

## 🌿 Git 分支管理

### 为什么需要分支？

- **主分支（main）** 保持稳定，随时可以部署
- **功能分支** 用于开发新功能，开发完成后合并到主分支

### 基本分支操作

```bash
# 查看所有分支
git branch

# 创建新分支
git branch feature/add-dark-mode

# 切换到新分支
git checkout feature/add-dark-mode

# 创建并切换（合并上面两步）
git checkout -b feature/add-dark-mode

# 在新分支上开发...
git add .
git commit -m "feat: 实现暗黑模式切换"

# 切换回主分支
git checkout main

# 合并功能分支
git merge feature/add-dark-mode

# 删除已合并的分支
git branch -d feature/add-dark-mode
```

### 分支命名规范

```bash
feature/功能名称    # 新功能开发
fix/问题描述       # bug 修复
docs/文档更新      # 文档修改
```

**示例**：
- `feature/responsive-design`
- `fix/navbar-mobile-bug`
- `docs/update-readme`

## 🔄 常用 Git 命令

### 查看状态和差异

```bash
# 查看当前状态
git status

# 查看修改内容
git diff

# 查看已暂存的修改
git diff --staged
```

### 撤销操作

```bash
# 撤销工作区的修改（还未 add）
git checkout -- 文件名

# 撤销已 add 的文件（移出暂存区）
git reset HEAD 文件名

# 撤销上一次 commit（保留修改）
git reset --soft HEAD~1

# 撤销上一次 commit（不保留修改，危险！）
git reset --hard HEAD~1
```

### 远程仓库操作

```bash
# 查看远程仓库
git remote -v

# 拉取远程更新
git pull

# 推送到远程
git push

# 推送新分支到远程
git push -u origin 分支名
```

## 📂 .gitignore 文件

`.gitignore` 用于忽略不需要版本控制的文件。

### 创建 .gitignore

在项目根目录创建 `.gitignore` 文件：

```gitignore
# 依赖
node_modules/
package-lock.json

# 构建输出
dist/
build/
.next/
out/

# 环境变量
.env
.env.local
.env.*.local

# 编辑器
.vscode/
.idea/
*.swp
*.swo
*~

# 操作系统
.DS_Store
Thumbs.db

# 日志
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# 临时文件
*.log
.cache/
```

**常见问题**：如果文件已经被 Git 跟踪，后来才添加到 `.gitignore`，需要：

```bash
# 停止跟踪文件但不删除
git rm --cached 文件名

# 停止跟踪文件夹
git rm -r --cached 文件夹名/

# 提交修改
git commit -m "chore: 更新 .gitignore"
```

## 🚀 GitHub Pages 部署

将你的项目部署到 GitHub Pages，让全世界都能访问！

### 方式一：使用 gh-pages 分支（推荐）

**适用于 React 项目**：

1. 安装 gh-pages 包：

```bash
npm install --save-dev gh-pages
```

2. 在 `package.json` 中添加配置：

```json
{
  "homepage": "https://你的用户名.github.io/仓库名",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. 部署：

```bash
npm run deploy
```

4. 在 GitHub 仓库设置中：
   - Settings → Pages
   - Source 选择 `gh-pages` 分支
   - 点击 Save

5. 等待几分钟，访问 `https://你的用户名.github.io/仓库名`

### 方式二：使用 main 分支

**适用于纯静态 HTML 项目**：

1. 确保项目根目录有 `index.html`
2. 推送到 GitHub
3. 在仓库设置中：
   - Settings → Pages
   - Source 选择 `main` 分支
   - 文件夹选择 `/ (root)`
   - 点击 Save

## 🔥 常见问题

### 1. 忘记切换分支就开始开发了

```bash
# 将当前修改暂存
git stash

# 切换到正确的分支
git checkout -b 正确的分支名

# 恢复暂存的修改
git stash pop
```

### 2. Commit 写错了想修改

```bash
# 修改最后一次 commit 信息
git commit --amend -m "新的 commit 信息"

# 如果已经 push，需要强制推送（谨慎使用）
git push --force
```

### 3. 误删了文件

```bash
# 恢复删除的文件
git checkout HEAD -- 文件名
```

### 4. 想回到之前的某个版本

```bash
# 查看历史记录
git log --oneline

# 回到指定 commit（会创建新的 commit）
git revert commit_id

# 或者直接重置（危险，会丢失之后的记录）
git reset --hard commit_id
```

### 5. Push 失败：rejected

```bash
# 先拉取远程更新
git pull --rebase

# 如果有冲突，解决冲突后
git add .
git rebase --continue

# 再推送
git push
```

## 📊 Git 可视化工具（可选）

如果你觉得命令行太复杂，可以使用图形化工具：

- **GitHub Desktop**：[https://desktop.github.com/](https://desktop.github.com/)
- **GitKraken**：[https://www.gitkraken.com/](https://www.gitkraken.com/)
- **VS Code 内置 Git**：左侧源代码管理面板

**建议**：先学会命令行，再使用图形化工具，这样能更深入理解 Git。

## ✅ Git 工作流检查清单

在每次开发时：

- [ ] 开始开发前先 `git pull` 获取最新代码
- [ ] 创建有意义的分支名（如 `feature/add-navbar`）
- [ ] 及时 commit，不要攒太多修改
- [ ] Commit 信息清晰明确
- [ ] 完成功能后合并到 main 分支
- [ ] 定期 push 到 GitHub 备份代码
- [ ] 部署前确保代码在本地运行正常

## 🎓 进阶学习

当你熟悉基础后，可以学习：

- **Cherry-pick**：选择性地合并某些 commit
- **Rebase**：重写提交历史，让历史更清晰
- **Git Hooks**：在特定操作时自动执行脚本
- **Git Submodules**：管理项目依赖的其他仓库

**推荐学习资源**：
- [Git 官方文档](https://git-scm.com/doc)
- [Learn Git Branching](https://learngitbranching.js.org/) - 可视化学习 Git
- [GitHub Skills](https://skills.github.com/) - GitHub 官方教程

---

**下一步**：学习 [AI 辅助开发最佳实践](ai-best-practices.md)
