import type { WorkProject } from '../types/work'

export const works: WorkProject[] = [
  {
    id: 'retail-demand-forecast',
    title: '零售需求预测与补货决策看板',
    summary:
      '基于历史销售与季节因素建立需求预测模型，搭建可视化看板，帮助运营团队提前识别缺货风险并优化补货节奏。',
    coverImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    tags: ['Python', 'Time Series', 'Dashboard'],
    year: '2025',
    role: '数据分析师 / 产品设计',
  },
  {
    id: 'user-growth-insight',
    title: '增长漏斗诊断与产品改版项目',
    summary:
      '围绕注册到留存全链路构建漏斗分析，定位关键流失节点，输出改版方案并驱动 A/B 实验，提升新用户首周留存。',
    coverImage:
      'https://images.unsplash.com/photo-1551281044-8b77b5f6f0c5?auto=format&fit=crop&w=1600&q=80',
    tags: ['Product Analytics', 'A/B Test', 'UX'],
    year: '2024',
    role: '产品分析师',
  },
  {
    id: 'public-opinion-monitor',
    title: '品牌舆情监测与洞察系统',
    summary:
      '设计舆情数据采集与情感分析流程，构建品牌声量和情绪波动监测页面，为市场团队提供实时风险预警与内容策略建议。',
    coverImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    tags: ['NLP', 'Data Pipeline', 'Visualization'],
    year: '2024',
    role: '数据产品经理',
  },
  {
    id: 'finance-health-score',
    title: '中小企业财务健康度评分工具',
    summary:
      '整合多维财务指标建立评分框架，设计交互式评分报告页面，让非技术用户也能快速理解企业经营风险与改进方向。',
    coverImage:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80',
    tags: ['FinTech', 'Scoring Model', 'UI Design'],
    year: '2023',
    role: '产品设计师 / 数据建模',
  },
]
