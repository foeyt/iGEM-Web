// 匿名函数，创建独立作用域，检测 DOM 是否载入，再执行
(function() {
    // 严格模式
    "use strict";

    // 确保 DOM 完成加载
    if (document.readyState === "loading") {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        // 状态变量初始化
        let currentPage = 0;
        
        // 修复：检测当前实际在哪一页（解决刷新后状态不同步）
        document.querySelectorAll('.page').forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -100 && rect.top <= 100) {
            currentPage = index;
        }
        });

        let totalPages = 4;
        let isAnimating = false;
        let touchStartY = 0;
        let touchEndY = 0;

        // DOM 元素
        const container = document.getElementById("container");
        const indicators = document.querySelectorAll(".indicator");
        const navLinks = document.querySelectorAll(".nav-link");
        const body = document.body;

        updatePageState(currentPage, false);

        // 跳转到指定页面
        window.goToPage = function(index, event) {
            if (event) {
                event.preventDefault();
            }

            if (index < 0 || index >= totalPages) {
                return;
            }

            if (index === currentPage) {
                return;
            }

            currentPage = index;
            updatePageState(index);

            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        }

        // 更新页面状态
        function updatePageState(index) {
            // 滑动效果
            container.style.transform = `translateY(-${index * 100}vh)`;
            body.setAttribute("data-page", index);

            indicators.forEach((ind, i) => {
                ind.classList.toggle("active", i === index);
            });

            navLinks.forEach((link, i) => {
                link.classList.toggle("active", i === link);
            })

            isAnimating = true;
            setTimeout(() => {
                isAnimating = false;
            }, 800);
        }

        // 处理滚轮滑动
        let wheelTimeout;
        window.addEventListener("wheel", (e) => {
            if (isAnimating) {
                return;
            }

            clearTimeout(wheelTimeout);
            wheelTimeout = setTimeout(() => {
                if (e.deltaY > 0) {
                    if (currentPage < totalPages - 1) {
                        goToPage(currentPage + 1);
                    }
                } else if (e.deltaY < 0) {
                    if (currentPage > 0) {
                        goToPage(currentPage - 1);
                    }
                }
            }, 50);
        }, {
            passive: true
        });

        // 处理 PageUp/PageDown
        window.addEventListener("keydown", (e) => {
            if (isAnimating) {
                return;
            }

            switch (e.key) {
                case 'ArrowDown':
                case 'PageDown':
                    e.preventDefault();
                    if (currentPage < totalPages - 1) {
                        goToPage(currentPage + 1);
                    }
                    break;

                case 'ArrowUp':
                case 'PageUp':
                    e.preventDefault();
                    if (currentPage > 0) {
                        goToPage(currentPage - 1);
                    }
                    break;

                case 'Home':
                    e.preventDefault();
                    goToPage(0);
                    break;

                case 'End':
                    e.preventDefault();
                    goToPage(totalPages - 1);
                    break;
            }
        });

        // 移动端触摸屏
        window.addEventListener("touchstart", (e) => {
            touchStartY = e.changedTouches[0].screenY;
        }, {
            passive: true
        });
        window.addEventListener("touchend", (e) => {
            if (isAnimating) {
                return;
            }

            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        }, {
            passive: true
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchEndY - touchStartY;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff < 0) {
                    if (currentPage < totalPages - 1) {
                        goToPage(currentPage + 1);
                    }
                } else if (diff > 0) {
                    if (currentPage > 0) {
                        goToPage(currentPage - 1);
                    }
                }
            }
        }

        // 汉堡菜单
        window.toggleSidebar = function() {
            const sidebar = document.getElementById("sidebar");
            const overlay = document.querySelector(".overlay");

            if (!sidebar) {
                console.error("404 sidebar?");
                return;
            }

            sidebar.classList.toggle("open");
            if (overlay) {
                overlay.classList.toggle("active");
            }
        };
        function closeSidebar() {
            const sidebar = document.getElementById("sidebar");
            const overlay = document.querySelector(".overlay");

            if (sidebar) {
                sidebar.classList.remove("open");
            }
            if (overlay) {
                overlay.classList.remove("active");
            }
        }

        // 导航栏跳转
        window.handleNavClick = function(event) {
            event.preventDefault();
            const pageIndex = parseInt(event.currentTarget.getAttribute("data-index"));
            goToPage(pageIndex);
        }

        // 窗口改变时重置
        let resizeTimeout;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                container.style.transition = "none";
                updatePageState(currentPage);
                setTimeout(() => {
                    container.style.transition = "";
                }, 100);
            }, 250);
        });
    }
})();
