import type { MediaMetric } from '../types/mediaMetric'

export const mediaMetrics: MediaMetric[] = [
  {
    id: 'followers',
    value: '0',
    unit: '+',
    label: '全网累计粉丝',
    detail: '公众号 · 视频号 · 小红书 · B站（占位）',
  },
  {
    id: 'views',
    value: '0',
    unit: '+',
    label: '内容总阅读/播放',
    detail: '图文与短视频累计触达（占位）',
  },
  {
    id: 'subscribers',
    value: '0',
    unit: '+',
    label: '订阅用户',
    detail: '长期关注用户总数（占位）',
  },
  {
    id: 'articles',
    value: '0',
    unit: '+',
    label: '原创内容数量',
    detail: '持续输出的图文/视频数量（占位）',
  },
]