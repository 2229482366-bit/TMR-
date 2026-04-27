import type { Article } from '../types/article'

export const articles: Article[] = [
  {
    id: 'daily-2026-04-27-ai-from-virtual-to-physical',
    title: 'AI 日报｜AI 从虚拟走向物理，算力与资产逻辑同步重估',
    date: '2026-04-27',
    readTime: '7 分钟',
    summary:
      '亚洲半导体资本权重上升、GPU 被重估为另类资产、农业与电池等实体场景加速落地；叠加中美模型性能差距收敛，行业主线从“模型演示”转向“物理产业 + 资本配置”的双轮驱动。',
    category: 'daily',
    tags: ['AI 日报', 'GPU 资产化', '半导体', 'Stanford HAI', '产业落地'],
  },
  {
    id: 'daily-2026-04-26-compute-platform-and-safety-converge',
    title: 'AI 日报｜算力、企业平台与安全治理合流，AI 进入重运营阶段',
    date: '2026-04-26',
    readTime: '7 分钟',
    summary:
      'Anthropic 锁定超大规模 AWS 算力，Google 以 Gemini Enterprise Agent Platform 抢占企业入口，OpenAI 连续发布隐私与红队机制工具；行业竞争正从模型展示转向基础设施、平台分发与治理能力并进。',
    category: 'daily',
    tags: ['AI 日报', 'Anthropic', 'Google Cloud', 'OpenAI', 'AI 治理'],
  },
  {
    id: 'weekly-2026-04-25-claude-gpt-deepseek-model-selection',
    title: '周报（特报）｜Claude 4.7、GPT-5.5、DeepSeek-V4：能力对比与选型指南',
    date: '2026-04-25',
    readTime: '12 分钟',
    summary:
      '本篇为周报（特报），不纳入 Vol 序列。基于三家官方发布信息，系统梳理 Claude Opus 4.7、GPT-5.5 与 DeepSeek-V4 在能力、提示策略、成本与场景适配上的差异，并给出可直接落地的多模型路由建议。',
    category: 'weekly',
    tags: ['周报（特报）', 'Claude Opus 4.7', 'GPT-5.5', 'DeepSeek-V4', '模型选型'],
  },
  {
    id: 'daily-2026-04-25-apple-openelm-and-legal-coherence',
    title: 'AI 日报｜OpenELM 与版权判例共振，AI 进入“口袋化 + 合规化”新阶段',
    date: '2026-04-25',
    readTime: '7 分钟',
    summary:
      '苹果开源 OpenELM 推动端侧推理能力上行，美国法院就训练数据版权争议给出阶段性边界；叠加 Blackwell 亚洲部署、隐私功能升级与具身智能进展，行业主线正转向本地算力与法律治理协同。',
    category: 'daily',
    tags: ['AI 日报', 'Apple', 'OpenELM', '版权合规', '端侧 AI'],
  },
  {
    id: 'daily-2026-04-24-openai-price-cut-and-regulation-loop',
    title: 'AI 日报｜OpenAI 降价与监管成形，行业进入“可用 + 可审计”新阶段',
    date: '2026-04-24',
    readTime: '7 分钟',
    summary:
      'OpenAI 大幅降价推动企业规模化调用，叠加 SEC 与英国法院在金融与司法环节建立 AI 合规边界，行业竞争从单点模型能力转向成本效率、可审计性与流程闭环。',
    category: 'daily',
    tags: ['AI 日报', 'OpenAI', '降价', '监管合规', '多模态'],
  },
  {
    id: 'daily-2026-04-23-google-tpu-agentic-ai-race',
    title: 'AI 日报｜Google TPU 8 系列落地，产业竞争进入“重系统时代”',
    date: '2026-04-23',
    readTime: '7 分钟',
    summary:
      'Google 发布 TPU 8i/8t 强化全栈算力布局，联手 Palo Alto 补齐智能体安全治理；同时丰田、Meta、百度在城市、社交与助手场景推进落地，AI 竞争正从模型能力转向系统化执行与协同。',
    category: 'daily',
    tags: ['AI 日报', 'Google TPU', 'Agentic AI', 'AI 安全', '产业落地'],
  },
  {
    id: 'daily-2026-04-22-openai-chip-and-reasoning-race',
    title: 'AI 日报｜算力去中心化提速，模型竞争进入硬件与推理新阶段',
    date: '2026-04-22',
    readTime: '7 分钟',
    summary:
      'OpenAI 联手博通布局 3nm 自研芯片、智谱 GLM-5 强化长链推理，叠加微软欧盟反垄断回应与具身智能突破，显示 AI 竞争正从参数规模转向算力自主、推理能力与产业化落地。',
    category: 'daily',
    tags: ['AI 日报', 'OpenAI', '自研芯片', 'GLM-5', '具身智能'],
  },
  {
    id: 'daily-2026-04-21-llama-maia-cost-down-signal',
    title: 'AI 日报｜大模型与算力双线降本，产业进入工程化深水区',
    date: '2026-04-21',
    readTime: '7 分钟',
    summary:
      '今日关注 Llama 3.2 小参数模型与微软 Maia 200 所代表的降本趋势，同时具身智能工业闭环与 AI 风格侵权立法推进，显示 AI 竞争已转向可持续商业化与制度化落地。',
    category: 'daily',
    tags: ['AI 日报', 'Llama', 'Maia 200', '具身智能', '版权监管'],
  },
  {
    id: 'daily-2026-04-20-ai-embodied-intelligence-and-sora-rumor',
    title: 'AI 日报｜机器人刷新体能边界，Sora 传闻引发商业化反思',
    date: '2026-04-20',
    readTime: '7 分钟',
    summary:
      '今日重点聚焦具身智能在现实场景的加速突破（机器人半马夺冠、导盲机器狗落地），以及 Sora 关停传闻背后折射的生成式 AI 商业化压力与 ROI 转向。',
    category: 'daily',
    tags: ['AI 日报', '具身智能', '机器人', 'Sora', '产业动态'],
  },
  {
    id: 'daily-2026-04-19-ai-to-real-world-productivity',
    title: 'AI 日报｜具身智能加速落地，头部企业进入估值与战略重构期',
    date: '2026-04-19',
    readTime: '6 分钟',
    summary:
      '今日焦点集中在具身智能的物理世界突破（机器人半马、机器人咖啡师）与产业层面的资本和战略信号（DeepSeek 融资、英伟达业务重心转向）。AI 正从屏幕内能力快速走向真实生产场景。',
    category: 'daily',
    tags: ['AI 日报', '具身智能', '机器人', '自动驾驶', '产业动态'],
  },
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
