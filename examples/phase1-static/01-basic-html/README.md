# 示例 1：基础 HTML 结构

这个示例展示了如何使用语义化的 HTML 标签创建一个简历页面的基础结构。

## 📁 文件说明

- `resume.html` - 完整的简历 HTML 结构

## 🎯 学习要点

1. **HTML5 文档结构**：DOCTYPE、html、head、body
2. **语义化标签**：header、nav、main、section、article、footer
3. **文本标签**：h1-h6、p、strong、em、ul/ol、li
4. **链接**：a 标签的 mailto 和 tel 协议

## 🚀 如何查看

1. 用浏览器直接打开 `resume.html`
2. 或者在 VS Code 中右键 → Open with Live Server

## 💡 注意事项

- 此阶段只有 HTML，没有 CSS 样式
- 页面看起来很朴素，这是正常的
- 重点是理解文档结构和标签的语义

## 📝 练习建议

基于这个示例，创建你自己的简历：
1. 修改个人信息
2. 添加你的技能和项目
3. 尝试添加更多部分（如兴趣爱好、证书等）
4. 使用 `<img>` 标签添加个人照片

## 🔍 代码亮点

```html
<!-- 使用语义化标签，而不是全部用 div -->
<header>  <!-- 头部信息 -->
<main>    <!-- 主要内容 -->
<section> <!-- 每个独立部分 -->
<article> <!-- 每个项目/经历 -->
<footer>  <!-- 页脚 -->
```

```html
<!-- 使用特殊协议的链接 -->
<a href="mailto:email@example.com">邮箱</a>  <!-- 点击打开邮件 -->
<a href="tel:13800138000">电话</a>           <!-- 点击拨打电话 -->
```
