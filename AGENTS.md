# 个人数字花园 (Personal Digital Garden) - 开发助手指令

## 项目概述
本项目是一个集个人作品展示、专业洞察沉淀、生活灵感记录与资源分享于一体的综合性个人网站。
前端架构基于 React 18 + TypeScript + Vite 开发，采用响应式卡片布局，整体视觉基调为“暖心、专业、呼吸感”。

## 技术栈限定 (严格遵守)
- **核心框架:** React 18 + TypeScript + Vite
- **样式方案:** Tailwind CSS (Utility-first)
- **路由控制:** React Router v6
- **动画交互:** Framer Motion
- **图标库:** Lucide React
- **Markdown 渲染:** react-markdown (配合 remark-gfm, rehype-highlight, rehype-katex)

## 架构与开发规范
- **组件化原则:** 严格遵守函数式组件 + Hooks 写法。
- **目录规范:**
  - 页面级组件放在 `src/pages/`
  - 全局复用组件分类放入 `src/components/layout/`、`ui/`、`shared/`
  - 核心数据模型接口统一存放在 `src/types/` 中
- **数据驱动:** 当前为 MVP 阶段（无后端），所有展示数据需从 `src/data/` 目录下的 `.ts` 或 `.md` 文件中引入，不要在 UI 组件中硬编码冗长的数据。
- **类型安全:** 充分利用 TypeScript，定义清晰的 Interface，避免使用 `any`。

## UI/UX 与设计要求
- **视觉基调:** 摒弃冷硬的黑白灰。整体保持充足的留白（呼吸感）。
- **主题色调 (Tailwind 配置参考):**
  - 主背景: 米白色/燕麦色 (`#FAF9F6`)
  - 卡片背景: 纯白 (`#FFFFFF`)
  - 强调/主色: 低饱和赤陶色 (`#D97757`)
  - 标签/辅助色: 暖木色 (`#E6CBA8`)
  - 标题文字: 深咖色 (`#4A4036`)
  - 正文/次要文字: 暖灰色 (`#8C857D`)
- **布局特征:** - 采用大圆角卡片式设计。
  - 阴影使用极浅的弥散阴影 (`box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05)`)，营造轻盈悬浮感。
- **动效 (Framer Motion):**
  - 页面载入时使用柔和的淡入上浮效果 (Fade-in up)。
  - 鼠标悬停卡片时，要有微微上浮或柔和光晕的反馈。

## 注意事项与性能优化
- **移动端优先:** 确保所有页面在手机端浏览体验流畅（特别是瀑布流和卡片列表）。
- **性能优化:** - 图片必须使用懒加载 (`loading="lazy"` 或 Intersection Observer 组件)。
  - 路由组件使用 `React.lazy()` 按需加载。
- **代码整洁:** 保持代码简洁，添加必要的中文注释解释复杂逻辑，不要过度设计。