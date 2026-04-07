import type { Article } from '../types/article'

export const articles: Article[] = [
  {
    id: 'from-dashboard-to-decision',
    title: '从看板到决策：如何让数据分析真正驱动业务行动',
    date: '2026-03-18',
    readTime: '10 分钟',
    summary:
      '很多团队拥有大量可视化看板，却仍然难以做出高质量决策。本文复盘一个零售项目，拆解“指标定义、异常识别、策略联动”的完整路径。',
    category: 'weekly',
    tags: ['数据分析', '业务决策', '指标体系', '复盘'],
  },
  {
    id: 'designing-trustworthy-ai-products',
    title: '设计值得信赖的 AI 产品：从解释性到用户心智',
    date: '2026-02-27',
    readTime: '12 分钟',
    summary:
      '当 AI 结果进入真实工作流，透明度与可解释性决定了用户是否愿意长期使用。本文讨论在产品层面建立“可理解反馈”的设计策略。',
    category: 'daily',
    tags: ['AI 产品', '用户体验', '可解释性', '设计策略'],
  },
  {
    id: 'growth-experiment-playbook',
    title: '增长实验实战手册：A/B 测试不是按钮颜色游戏',
    date: '2026-01-10',
    readTime: '9 分钟',
    summary:
      '围绕实验目标、样本量、指标口径和结果解读，提供一套可复用的增长实验流程，避免常见统计误区与“伪优化”。',
    category: 'weekly',
    tags: ['增长实验', 'A/B 测试', '统计方法', '产品增长'],
  },
]
