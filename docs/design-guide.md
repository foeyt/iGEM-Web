# 🎨 设计指南与审美培养

iGEM 比赛中，网页设计的视觉呈现至关重要。本指南将帮助你提升审美，避免"工程师式设计"。

## 🎯 设计原则

### 1. 简洁（Simplicity）

**Less is More** - 少即是多

❌ **避免**：
- 过多的颜色（超过 4 种主色）
- 过度的装饰和特效
- 拥挤的排版
- 太多字体样式

✅ **推荐**：
- 保持留白（White Space）
- 统一的设计语言
- 克制地使用装饰元素
- 内容有余地，不要大面积内容铺填

**示例**：
```css
/* ❌ 过度设计 */
.card {
    background: linear-gradient(45deg, red, blue, green, yellow);
    border: 5px dashed purple;
    box-shadow: 0 0 20px red, 0 0 30px blue;
    transform: rotate(5deg);
}

/* ✅ 简洁设计 */
.card {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}
```

### 2. 对比（Contrast）

**让重要的内容脱颖而出**

- **大小对比**：标题与正文
- **颜色对比**：深色与浅色
- **粗细对比**：粗体与常规
- **间距对比**：紧密与宽松

```css
/* 层次分明的排版 */
h1 { font-size: 48px; font-weight: 700; color: #000; }
h2 { font-size: 32px; font-weight: 600; color: #333; }
p  { font-size: 16px; font-weight: 400; color: #666; line-height: 1.6; }
```

### 3. 一致性（Consistency）

**统一的设计语言**

- 相同的圆角大小
- 统一的间距系统
- 一致的配色方案
- 统一的字体族

```css
/* 使用 CSS 变量保持一致性 */
:root {
    /* 间距系统 */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    
    /* 圆角 */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    
    /* 阴影 */
    --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 12px rgba(0,0,0,0.15);
    --shadow-lg: 0 8px 24px rgba(0,0,0,0.2);
}

.card {
    padding: var(--spacing-lg);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
}
```

### 4. 层次（Hierarchy）

**视觉引导用户的注意力**

1. **主要内容**（Primary）：最大、最醒目
2. **次要内容**（Secondary）：中等大小
3. **辅助内容**（Tertiary）：最小、最低调

```html
<header>
    <h1>这是最重要的标题</h1>      <!-- 最大 -->
    <p class="subtitle">副标题</p>  <!-- 中等 -->
    <p class="meta">2026-01-25</p>  <!-- 最小、浅色 -->
</header>
```

## 🎨 配色方案

### 色彩心理学

不同颜色传达不同情感：

| 颜色 | 情感 | 适用场景 |
|------|------|----------|
| 🔵 蓝色 | 专业、信任、科技 | 企业、医疗、科技 |
| 🟢 绿色 | 健康、环保、成长 | 环保、健康、教育 |
| 🟣 紫色 | 创意、高端、神秘 | 设计、艺术、奢侈品 |
| 🔴 红色 | 激情、活力、紧急 | 运动、娱乐、警告 |
| 🟠 橙色 | 友好、活力、温暖 | 社交、食品、儿童 |
| ⚫ 黑色 | 高端、优雅、力量 | 奢侈品、时尚、专业 |

### 60-30-10 法则

- **60%** - 主色（背景色）
- **30%** - 次色（辅助色）
- **10%** - 强调色（CTA 按钮、链接）

```css
:root {
    --primary-color: #0066cc;      /* 主色：蓝色 */
    --secondary-color: #f5f7fa;    /* 次色：浅灰背景 */
    --accent-color: #ff6b6b;       /* 强调色：红色 */
}

body {
    background: var(--secondary-color); /* 60% */
}

.section {
    color: var(--primary-color);        /* 30% */
}

.cta-button {
    background: var(--accent-color);    /* 10% */
}
```

### 配色工具

**推荐使用**：

1. **[Coolors](https://coolors.co/)** - 配色方案生成器
2. **[Color Hunt](https://colorhunt.co/)** - 配色灵感库
3. **[Adobe Color](https://color.adobe.com/)** - 专业调色工具
4. **[Paletton](https://paletton.com/)** - 色轮配色工具

**流行的配色方案**：

```css
/* 1. 现代蓝 - 专业、科技 */
--color-1: #0066cc;
--color-2: #4a90e2;
--color-3: #e6f2ff;
--color-4: #333333;

/* 2. 清新绿 - 健康、自然 */
--color-1: #00b894;
--color-2: #55efc4;
--color-3: #f0fff4;
--color-4: #2d3436;

/* 3. 优雅紫 - 创意、艺术 */
--color-1: #6c5ce7;
--color-2: #a29bfe;
--color-3: #f3f0ff;
--color-4: #2d3436;

/* 4. 极简黑白 - 高端、简约 */
--color-1: #000000;
--color-2: #ffffff;
--color-3: #f5f5f5;
--color-4: #999999;
```

### 文字与背景对比度

确保文字清晰可读（符合 WCAG 无障碍标准）：

- **正文文字**：对比度至少 4.5:1
- **大标题**：对比度至少 3:1

```css
/* ✅ 良好的对比度 */
body {
    color: #333;              /* 深灰 */
    background: #ffffff;      /* 白色 */
}

/* ❌ 对比度不足 */
body {
    color: #ccc;              /* 浅灰 */
    background: #fff;         /* 白色 - 难以阅读 */
}
```

**工具**：[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## 📐 排版（Typography）

### 字体选择

#### 1. 字体分类

- **衬线体（Serif）**：有装饰，优雅、传统
  - 例：Georgia, Times New Roman
  - 适用：文章、书籍、正式内容

- **无衬线体（Sans-serif）**：简洁、现代
  - 例：Arial, Helvetica, Roboto
  - 适用：网页、界面、现代设计

- **等宽字体（Monospace）**：代码、数字
  - 例：Courier, Monaco, Consolas
  - 适用：代码块、数据表格

#### 2. 字体搭配

**规则**：不要超过 2-3 种字体

```css
/* 推荐：系统字体栈（跨平台兼容） */
body {
    font-family: 
        -apple-system,                    /* macOS/iOS */
        BlinkMacSystemFont,              /* macOS */
        "Segoe UI",                      /* Windows */
        Roboto,                          /* Android */
        "Helvetica Neue", Arial,         /* 备选 */
        "PingFang SC", "Microsoft YaHei",/* 中文 */
        sans-serif;                      /* 默认 */
}

/* 代码字体 */
code, pre {
    font-family: "Consolas", "Monaco", "Courier New", monospace;
}

/* 标题可以用不同字体 */
h1, h2, h3 {
    font-family: "Georgia", "Times New Roman", serif;
}
```

### 字体大小和层次

```css
/* 使用 rem 单位，便于响应式调整 */
html { font-size: 16px; }  /* 1rem = 16px */

h1 { font-size: 3rem;    }  /* 48px */
h2 { font-size: 2rem;    }  /* 32px */
h3 { font-size: 1.5rem;  }  /* 24px */
h4 { font-size: 1.25rem; }  /* 20px */
p  { font-size: 1rem;    }  /* 16px */
small { font-size: 0.875rem; }  /* 14px */

/* 移动端字号适当缩小 */
@media (max-width: 768px) {
    html { font-size: 14px; }
}
```

### 行高和行宽

```css
/* 行高（Line Height） */
p {
    line-height: 1.6;  /* 正文：1.5-1.8 */
}

h1 {
    line-height: 1.2;  /* 标题：1.1-1.3 */
}

/* 行宽（Line Width） */
.content {
    max-width: 65ch;   /* 45-75 字符为宜 */
    /* 或 */
    max-width: 700px;
}
```

## 🖼️ 图片和图标

### 图片优化

1. **格式选择**：
   - **JPEG**：照片、复杂图像
   - **PNG**：透明背景、Logo
   - **SVG**：图标、插图（矢量，可缩放）
   - **WebP**：现代格式，体积更小

2. **尺寸优化**：
   ```html
   <!-- 响应式图片 -->
   <img 
       src="image-800.jpg" 
       srcset="image-400.jpg 400w, 
               image-800.jpg 800w, 
               image-1200.jpg 1200w"
       sizes="(max-width: 600px) 400px, 
              (max-width: 1000px) 800px, 
              1200px"
       alt="描述"
   />
   ```

3. **懒加载**：
   ```html
   <img src="image.jpg" loading="lazy" alt="描述" />
   ```

### 图标使用

**推荐的图标库**：

1. **Emoji**（最简单）：
   ```html
   <span>📧 邮箱</span>
   <span>🔗 GitHub</span>
   ```

2. **[Heroicons](https://heroicons.com/)**（React 友好）：
   ```jsx
   import { MailIcon, LinkIcon } from '@heroicons/react/outline';
   <MailIcon className="w-6 h-6" />
   ```

3. **[Font Awesome](https://fontawesome.com/)**：
   ```html
   <i class="fas fa-envelope"></i>
   ```

4. **[React Icons](https://react-icons.github.io/react-icons/)**：
   ```jsx
   import { FaEnvelope, FaGithub } from 'react-icons/fa';
   <FaEnvelope />
   ```

## ✨ 动画和交互

### 过渡效果（Transition）

```css
/* 基础过渡 */
.button {
    background: #0066cc;
    transition: all 0.3s ease;
}

.button:hover {
    background: #004999;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* 多个属性分别控制 */
.link {
    color: #0066cc;
    border-bottom: 2px solid transparent;
    transition: color 0.3s, border-bottom 0.3s;
}

.link:hover {
    color: #004999;
    border-bottom-color: #004999;
}
```

### 动画（Animation）

```css
/* 淡入动画 */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.6s ease-out;
}

/* 脉冲动画 */
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.pulse {
    animation: pulse 2s infinite;
}
```

### 微交互原则

- **即时反馈**：用户操作后立即响应
- **自然流畅**：避免生硬的变化
- **目的明确**：每个动画都有目的
- **性能优先**：避免影响性能

## 📱 响应式设计

### 移动优先策略

```css
/* 默认：移动端样式 */
.container {
    padding: 15px;
    font-size: 14px;
}

/* 平板及以上 */
@media (min-width: 768px) {
    .container {
        padding: 30px;
        font-size: 16px;
    }
}

/* 桌面端 */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 60px;
        font-size: 18px;
    }
}
```

### 触摸友好

```css
/* 移动端按钮至少 44x44px */
.button {
    min-width: 44px;
    min-height: 44px;
    padding: 12px 24px;
}

/* 增加点击区域 */
.link {
    padding: 8px;
    margin: -8px; /* 抵消 padding */
}
```

## 🎓 学习资源

### 设计灵感

- **[Dribbble](https://dribbble.com/)** - 设计师作品集
- **[Behance](https://www.behance.net/)** - Adobe 设计社区
- **[Awwwards](https://www.awwwards.com/)** - 优秀网站展示
- **[Pinterest](https://www.pinterest.com/)** - 视觉灵感库

### 设计教程

- **[Refactoring UI](https://www.refactoringui.com/)** - 实用设计技巧
- **[Laws of UX](https://lawsofux.com/)** - UX 设计原则
- **[Design Systems Repo](https://designsystemsrepo.com/)** - 设计系统参考

### 设计工具

- **[Figma](https://www.figma.com/)** - 在线设计工具（免费）
- **[Canva](https://www.canva.com/)** - 快速设计工具
- **[Adobe XD](https://www.adobe.com/products/xd.html)** - 原型设计

## ✅ 设计自查清单

提交前检查：

- [ ] 配色不超过 4 种主色
- [ ] 文字与背景对比度足够
- [ ] 字体不超过 2-3 种
- [ ] 间距统一使用设计系统
- [ ] 所有交互都有反馈
- [ ] 移动端按钮至少 44x44px
- [ ] 在多种设备上测试过
- [ ] 参考了优秀设计（并注明来源）

---

**记住**：好的设计是简洁的、一致的、有层次的
