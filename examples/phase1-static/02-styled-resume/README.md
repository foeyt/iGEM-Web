# 示例 2：CSS 样式化简历

这个示例在基础 HTML 结构上添加了完整的 CSS 样式，展示如何美化网页。

## 📁 文件说明

- `resume.html` - HTML 结构（引入了外部 CSS）
- `style.css` - 完整的 CSS 样式文件
- `preview.png` - 效果预览图（可选）

## 🎯 学习要点

1. **CSS 引入方式**：外部样式表 `<link rel="stylesheet">`
2. **CSS 选择器**：元素、类、ID、后代选择器
3. **盒模型**：margin、padding、border
4. **排版**：颜色、字体、行高、对齐
5. **装饰**：阴影、圆角、过渡效果
6. **伪类**：`:hover` 交互效果

## 🚀 如何查看

1. 确保 `resume.html` 和 `style.css` 在同一文件夹
2. 用浏览器打开 `resume.html`
3. 或使用 Live Server 实时预览

## 🎨 设计说明

### 配色方案
- **主色**：`#0066cc` - 专业的蓝色
- **文字**：`#333` - 柔和的深灰色
- **次要文字**：`#666` - 中灰色
- **背景**：`#f5f5f5` - 浅灰色
- **边框**：`#e0e0e0` - 极浅灰色

### 排版规则
- **标题字号**：36px (h1) → 24px (h2) → 20px (h3)
- **正文字号**：16px
- **行高**：1.6（提升可读性）
- **间距**：标题下 20px，段落间 10px，模块间 40px

### 设计特点
- ✨ 卡片式布局，带轻微阴影
- 🎯 蓝色主题贯穿全文
- 💡 鼠标悬停效果（链接变色）
- 📐 合理的留白和间距
- 🎨 项目卡片有左侧装饰条

## 💡 练习建议

1. **修改配色**：
   - 尝试改为其他颜色主题（绿色、紫色、橙色等）
   - 使用 [Coolors](https://coolors.co/) 生成配色方案

2. **调整排版**：
   - 改变字体大小和间距
   - 尝试不同的字体组合

3. **添加装饰**：
   - 给头部添加渐变背景
   - 给卡片添加悬停效果（放大、阴影加深）
   - 添加图标（使用 emoji 或 Font Awesome）

4. **自定义样式**：
   - 创建你自己的设计风格
   - 参考 Dribbble 上的简历设计

## 🔍 代码亮点

### 1. CSS Reset
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
消除浏览器默认样式，确保跨浏览器一致性。

### 2. 居中容器
```css
.container {
    max-width: 800px;
    margin: 0 auto;
}
```
内容居中，限制最大宽度，避免在大屏幕上太宽。

### 3. Flexbox 水平布局
```css
header nav {
    display: flex;
    justify-content: center;
    gap: 20px;
}
```
导航链接均匀分布，间距相等。

### 4. 过渡动画
```css
a {
    transition: color 0.3s;
}
a:hover {
    color: #004999;
}
```
链接颜色变化有平滑过渡效果。

### 5. 卡片式设计
```css
article {
    background: #f9f9f9;
    padding: 20px;
    border-left: 4px solid #0066cc;
    border-radius: 4px;
}
```
项目卡片有背景色、内边距、左侧装饰条和圆角。

## 📚 相关资源

- [CSS Tricks](https://css-tricks.com/) - CSS 技巧和教程
- [MDN CSS 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
- [Can I Use](https://caniuse.com/) - 检查 CSS 特性的浏览器兼容性

## 🎓 下一步

完成这个示例后，前往 `03-responsive-landing` 学习响应式设计！
