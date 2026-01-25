# 加载动画设计示例

这个目录展示如何在 React 应用中设计和实现优雅的加载动画，提升用户体验

## 🎯 学习目标

- 理解加载状态的重要性
- 掌握 CSS 动画和过渡效果
- 学会使用 React 状态管理加载状态
- 设计美观且符合用户体验的加载动画
- 实现多种类型的加载动画（骨架屏、进度条、旋转器等）

## 💡 为什么需要加载动画？

1. **提升用户体验**：让用户知道系统正在工作，避免"卡死"的感觉
2. **减少焦虑**：明确的反馈让等待变得可预期
3. **品牌展示**：加载动画可以体现品牌特色和设计风格
4. **专业感**：精心设计的加载动画让应用看起来更专业

## 🎨 加载动画设计原则

### 1. 保持简洁
- 动画不要太复杂，避免分散注意力
- 使用简单的几何形状或品牌元素

### 2. 符合场景
- 短时间加载（< 1秒）：简单的旋转或脉冲
- 中等时间（1-3秒）：进度条或骨架屏
- 长时间（> 3秒）：进度条 + 提示文字

### 3. 性能优先
- 使用 CSS 动画而非 JavaScript 动画
- 避免复杂的计算和重绘
- 考虑使用 `will-change` 优化

### 4. 可访问性
- 提供文字提示
- 考虑为动画敏感用户提供减少动画选项

## 📝 实现示例

### 1. 基础旋转加载器

最简单的加载动画，适合短时间加载

```jsx
// components/LoadingSpinner.jsx
import './LoadingSpinner.css';

export default function LoadingSpinner({ size = 'medium' }) {
    return (
        <div className={`spinner-container ${size}`}>
            <div className="spinner"></div>
            <p className="loading-text">加载中...</p>
        </div>
    );
}
```

```css
/* LoadingSpinner.css */
.spinner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #0066cc;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

.spinner-container.small .spinner {
    width: 24px;
    height: 24px;
    border-width: 3px;
}

.spinner-container.large .spinner {
    width: 60px;
    height: 60px;
    border-width: 5px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loading-text {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
}
```

### 2. 骨架屏（Skeleton Screen）

适合内容加载，给用户内容结构的预期

```jsx
// components/SkeletonCard.jsx
import './SkeletonCard.css';

export default function SkeletonCard() {
    return (
        <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text short"></div>
            </div>
        </div>
    );
}
```

```css
/* SkeletonCard.css */
.skeleton-card {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.skeleton-image {
    width: 100%;
    height: 200px;
    background: linear-gradient(
        90deg,
        #f0f0f0 25%,
        #e0e0e0 50%,
        #f0f0f0 75%
    );
    background-size: 200% 100%;
    animation: loading 1.5s ease-in-out infinite;
    border-radius: 4px;
    margin-bottom: 1rem;
}

.skeleton-title {
    height: 24px;
    width: 60%;
    background: linear-gradient(
        90deg,
        #f0f0f0 25%,
        #e0e0e0 50%,
        #f0f0f0 75%
    );
    background-size: 200% 100%;
    animation: loading 1.5s ease-in-out infinite;
    border-radius: 4px;
    margin-bottom: 0.75rem;
}

.skeleton-text {
    height: 16px;
    width: 100%;
    background: linear-gradient(
        90deg,
        #f0f0f0 25%,
        #e0e0e0 50%,
        #f0f0f0 75%
    );
    background-size: 200% 100%;
    animation: loading 1.5s ease-in-out infinite;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}

.skeleton-text.short {
    width: 70%;
}

@keyframes loading {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
```

### 3. 进度条加载器

适合有明确进度的操作（如文件上传）

```jsx
// components/ProgressBar.jsx
import { useState, useEffect } from 'react';
import './ProgressBar.css';

export default function ProgressBar({ duration = 3000, onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    onComplete?.();
                    return 100;
                }
                return prev + 2;
            });
        }, duration / 50);

        return () => clearInterval(interval);
    }, [duration, onComplete]);

    return (
        <div className="progress-container">
            <div className="progress-bar">
                <div 
                    className="progress-fill" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="progress-text">{progress}%</p>
        </div>
    );
}
```

```css
/* ProgressBar.css */
.progress-container {
    width: 100%;
    max-width: 400px;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #0066cc, #0099ff);
    border-radius: 4px;
    transition: width 0.3s ease;
    position: relative;
}

.progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
    );
    animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.progress-text {
    text-align: center;
    color: #666;
    font-size: 0.875rem;
    margin: 0;
}
```

### 4. 点状加载动画

简洁优雅，适合按钮或小区域。

```jsx
// components/DotLoader.jsx
import './DotLoader.css';

export default function DotLoader() {
    return (
        <div className="dot-loader">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    );
}
```

```css
/* DotLoader.css */
.dot-loader {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #0066cc;
    animation: bounce 1.4s ease-in-out infinite both;
}

.dot:nth-child(1) {
    animation-delay: -0.32s;
}

.dot:nth-child(2) {
    animation-delay: -0.16s;
}

.dot:nth-child(3) {
    animation-delay: 0s;
}

@keyframes bounce {
    0%, 80%, 100% {
        transform: scale(0);
        opacity: 0.5;
    }
    40% {
        transform: scale(1);
        opacity: 1;
    }
}
```

### 5. 完整的使用示例

在 React 组件中使用加载状态。

```jsx
// components/ProjectList.jsx
import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import SkeletonCard from './SkeletonCard';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 模拟 API 调用
        const fetchProjects = async () => {
            try {
                setLoading(true);
                // 模拟网络延迟
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // 模拟 API 响应
                const data = [
                    { id: 1, title: '项目1', description: '描述...' },
                    { id: 2, title: '项目2', description: '描述...' },
                ];
                
                setProjects(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="project-list-loading">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        );
    }

    if (error) {
        return <div className="error">加载失败: {error}</div>;
    }

    return (
        <div className="project-list">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}
```

### 6. 按钮加载状态

在按钮中显示加载状态。

```jsx
// components/LoadingButton.jsx
import LoadingSpinner from './LoadingSpinner';
import './LoadingButton.css';

export default function LoadingButton({ 
    children, 
    loading, 
    onClick, 
    disabled 
}) {
    return (
        <button
            className={`loading-button ${loading ? 'loading' : ''}`}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading ? (
                <>
                    <LoadingSpinner size="small" />
                    <span>处理中...</span>
                </>
            ) : (
                children
            )}
        </button>
    );
}
```

```css
/* LoadingButton.css */
.loading-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: #0066cc;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.loading-button:hover:not(:disabled) {
    background: #0052a3;
    transform: translateY(-1px);
}

.loading-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.loading-button.loading {
    pointer-events: none;
}
```

## 🎨 设计灵感

### 配色建议
- **主色**：使用品牌主色
- **背景**：浅灰色或半透明
- **动画色**：与主色形成对比

### 动画时长
- **快速反馈**：0.3-0.5秒
- **标准加载**：1-2秒
- **长时间操作**：显示进度

### 位置建议
- **全屏加载**：居中显示
- **内容加载**：在内容区域显示骨架屏
- **按钮加载**：在按钮内部显示

## ✅ 实践任务

1. **基础任务**
   - [ ] 实现一个旋转加载器组件
   - [ ] 实现一个骨架屏组件
   - [ ] 在项目列表中使用加载状态

2. **进阶任务**
   - [ ] 实现进度条加载器
   - [ ] 为按钮添加加载状态
   - [ ] 创建自定义的加载动画（使用你的品牌元素）

3. **挑战任务**
   - [ ] 实现骨架屏自动生成（根据内容结构）
   - [ ] 添加加载动画的减少动画选项（可访问性）
   - [ ] 使用 Framer Motion 创建更复杂的动画

## 📚 参考资源

### CSS 动画
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)

### 设计灵感
- [Loading.io](https://loading.io/) - 加载动画库
- [LottieFiles](https://lottiefiles.com/) - 动画资源
- [Dribbble - Loading](https://dribbble.com/search/loading) - 设计灵感

### React 动画库
- [Framer Motion](https://www.framer.com/motion/) - 强大的动画库
- [React Spring](https://www.react-spring.dev/) - 物理动画库
- [React Transition Group](https://reactcommunity.org/react-transition-group/) - 过渡动画

## 💡 AI 协作建议

**可以问 AI 的问题**：
```
如何创建一个流畅的加载动画，使用 CSS 而不是 JavaScript？

我想实现一个骨架屏效果，应该用什么 CSS 属性？

如何让加载动画在暗黑模式下也有好的视觉效果？

如何优化加载动画的性能，避免卡顿？
```

## 🎓 最佳实践

1. **性能优化**
   - 使用 `transform` 和 `opacity` 做动画（GPU 加速）
   - 避免使用 `width`、`height`、`top`、`left` 等属性
   - 使用 `will-change` 提示浏览器优化

2. **用户体验**
   - 超过 1 秒的加载显示动画
   - 超过 3 秒的加载显示进度或提示文字
   - 提供取消操作的选项（如适用）

3. **可访问性**
   - 使用 `aria-label` 描述加载状态
   - 考虑为动画敏感用户提供减少动画选项
   - 确保加载动画不会影响屏幕阅读器

4. **设计一致性**
   - 在整个应用中使用统一的加载动画风格
   - 根据场景选择合适的加载动画类型
   - 保持动画时长和缓动函数的一致性

---

**记住**：好的加载动画应该让等待变得不那么痛苦，而不是分散用户的注意力！
