# 个人数字花园 - 技术设计文档 (Tech Design)

## 一、 技术栈选型 (Tech Stack)

### 1. 核心框架与构建
* **React 18**：核心 UI 框架。
* **TypeScript**：提供严格的类型检查，保证数据结构（如作品、文章、灵感）的稳定性。
* **Vite**：极速的前端构建工具，提供秒级的本地开发热更新（HMR）。

### 2. 路由与状态管理
* **React Router v6**：实现单页应用（SPA）的多页面无缝切换（首页、造物、洞察、碎片、百宝箱）。
* **Zustand (可选)** 或 **React Context**：用于管理全局轻量级状态（如：黑夜/白天暖色主题切换、移动端导航栏开关）。

### 3. 样式与视觉动效（契合“暖心”基调）
* **Tailwind CSS**：利用其实用类（Utility-first）快速构建卡片式布局。我们将深度定制 `tailwind.config.js`，注入米白、木色等暖色调。
* **Framer Motion**：实现高级且自然的微交互。用于卡片的“悬浮光晕”、“微微上浮”以及页面切换时的“柔和淡入（Fade-in up）”效果。
* **Lucide React**：一套简洁圆润的开源图标库，契合整体的呼吸感。

### 4. 内容渲染（契合“洞察”模块的深度阅读）
* **react-markdown**：在 React 中安全地渲染 Markdown 内容。
* **remark-gfm & rehype-highlight**：支持代码块高亮、表格、删除线等扩展语法，方便展示数据分析代码。
* **rehype-katex**：支持数学公式的优雅渲染。

---

## 二、 核心目录结构 (Project Structure)

基于组件化思维和功能模块，将你的基础结构拓展如下：

```text
src/
 ├── assets/            # 静态资源（图片、插画、字体）
 ├── components/        # 全局复用组件
 │    ├── layout/       # 布局类：Navbar.tsx, Footer.tsx, PageWrapper.tsx
 │    ├── ui/           # 基础组件：Button.tsx, Tag.tsx, ImageLoad.tsx
 │    └── shared/       # 复合组件：WorkCard.tsx, InsightCard.tsx, MarkdownRenderer.tsx
 ├── pages/             # 页面级视图（对应路由）
 │    ├── Home/         # 首页（名片、动态导览）
 │    ├── Works/        # 造物（作品集列表与详情）
 │    ├── Insights/     # 洞察（数据分析文章）
 │    ├── Inspirations/ # 碎片（瀑布流灵感）
 │    └── Toolbox/      # 百宝箱（工具导航）
 ├── data/              # 本地静态数据源（作为无后端的 CMS）
 │    ├── profile.ts    # 个人基础信息、社交链接
 │    ├── works.ts      # 作品集列表数据
 │    ├── tools.ts      # 百宝箱工具分类数据
 │    └── articles/     # 存放本地 .md 格式的 Markdown 文章
 ├── hooks/             # 自定义 Hooks (如: useScroll, useTheme)
 ├── types/             # TypeScript 全局类型定义 (核心数据模型)
 ├── utils/             # 工具函数 (如: 日期格式化, 文本截断)
 ├── App.tsx            # 全局路由配置与主题 Provider 入口
 └── main.tsx           # React 挂载入口