# 示例 3：响应式个人落地页

这个示例展示了如何创建一个完全响应式的个人主页落地页，适配手机、平板和桌面端。

## 📁 文件说明

- `index.html` - HTML 结构
- `styles.css` - 响应式 CSS 样式
- `README.md` - 本说明文档

## 🎯 学习要点

1. **Flexbox 布局**：灵活的现代布局方案
2. **媒体查询**：根据屏幕尺寸应用不同样式
3. **移动优先设计**：先设计移动端，再扩展到桌面端
4. **响应式图片**：图片自适应容器大小
5. **汉堡菜单**：移动端的导航菜单解决方案

## 🚀 如何查看

### 方式一：Live Server
1. 在 VS Code 中右键 `index.html`
2. 选择 "Open with Live Server"

### 方式二：浏览器打开
1. 直接用浏览器打开 `index.html`
2. 按 F12 打开开发者工具
3. 点击"设备工具栏"图标（或 Ctrl+Shift+M）
4. 切换不同设备查看效果

## 📱 响应式断点

```
移动端（< 768px）      平板（768px - 1024px）    桌面端（> 1024px）
┌─────────┐           ┌──────────────┐           ┌───────────────────┐
│  单栏   │           │    双栏      │           │      三栏/宽布局   │
│  垂直   │    →      │  部分横向    │    →      │      完全横向      │
│  导航   │           │  混合布局    │           │      宽松间距      │
└─────────┘           └──────────────┘           └───────────────────┘
```

## 🎨 设计特点

### 移动端（< 768px）
- ✅ 单栏布局，垂直排列
- ✅ 汉堡菜单（可选实现）
- ✅ 较小的字号和间距
- ✅ 图片占满宽度

### 平板端（768px - 1024px）
- ✅ 部分内容两栏显示
- ✅ 导航栏横向显示
- ✅ 中等的字号和间距

### 桌面端（> 1024px）
- ✅ 多栏布局，充分利用空间
- ✅ 固定最大宽度（1200px）
- ✅ 较大的字号和宽松间距
- ✅ 悬停效果更丰富

## 💡 关键技术

### 1. 移动优先 CSS

```css
/* 默认：移动端样式 */
.container {
    padding: 15px;
}

/* 768px 以上：平板样式 */
@media (min-width: 768px) {
    .container {
        padding: 30px;
    }
}

/* 1024px 以上：桌面样式 */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

### 2. Flexbox 响应式布局

```css
.skills-grid {
    display: flex;
    flex-direction: column;  /* 移动端：垂直 */
    gap: 15px;
}

@media (min-width: 768px) {
    .skills-grid {
        flex-direction: row;  /* 平板以上：水平 */
        flex-wrap: wrap;
    }
    
    .skill-item {
        flex: 1 1 45%;  /* 每项占45%，两栏布局 */
    }
}

@media (min-width: 1024px) {
    .skill-item {
        flex: 1 1 30%;  /* 每项占30%，三栏布局 */
    }
}
```

### 3. 响应式排版

```css
/* 移动端 */
h1 { font-size: 28px; }
p { font-size: 14px; }

/* 平板 */
@media (min-width: 768px) {
    h1 { font-size: 36px; }
    p { font-size: 16px; }
}

/* 桌面 */
@media (min-width: 1024px) {
    h1 { font-size: 48px; }
    p { font-size: 18px; }
}
```

## 🧪 测试清单

在提交之前，请确保在以下设备/尺寸上测试：

### Chrome DevTools 设备模拟
- [ ] iPhone SE (375px)
- [ ] iPhone 12 Pro (390px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1920px)

### 实际测试
- [ ] 用手机浏览器打开
- [ ] 缩放浏览器窗口，检查断点过渡是否平滑
- [ ] 横屏和竖屏都测试

### 检查项目
- [ ] 文字在所有设备上都清晰可读
- [ ] 图片不会溢出或变形
- [ ] 按钮和链接足够大，易于点击（移动端至少 44x44px）
- [ ] 没有水平滚动条（内容不应超出屏幕宽度）
- [ ] 间距合理，不拥挤也不过于稀疏

## 🎓 练习任务

### 基础任务
1. 复制这个示例，修改为你自己的内容
2. 在三种设备上测试布局
3. 调整断点，找到最适合你内容的尺寸

### 进阶任务
1. 实现汉堡菜单（移动端点击展开/收起导航）
2. 添加"返回顶部"按钮（只在滚动一定距离后显示）
3. 实现技能卡片的网格布局（响应式列数）
4. 添加 Hero 区域（首屏大标题 + 背景图）

### 挑战任务
1. 使用 CSS Grid 替代 Flexbox 实现布局
2. 添加暗黑模式切换（使用 CSS 变量）
3. 实现导航栏的滚动吸顶效果
4. 添加页面滚动渐入动画

## 📚 推荐工具

- **响应式测试**：
  - [Responsively](https://responsively.app/) - 同时预览多个设备
  - [BrowserStack](https://www.browserstack.com/) - 真机测试（付费）

- **Flexbox 学习**：
  - [Flexbox Froggy](https://flexboxfroggy.com/)
  - [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- **Grid 学习**：
  - [Grid Garden](https://cssgridgarden.com/)
  - [CSS Tricks Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 🎉 完成了？

恭喜你完成第一阶段的所有示例！

你现在应该能够：
- ✅ 理解 HTML 语义化标签
- ✅ 使用 CSS 美化网页
- ✅ 创建响应式布局
- ✅ 使用 Flexbox 进行页面布局
- ✅ 应用媒体查询适配不同设备

**下一步**：前往 [第二阶段](../../../docs/02-phase2-js-react.md) 学习 JavaScript 和 React！
