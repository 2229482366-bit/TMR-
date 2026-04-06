import { useParams } from 'react-router-dom'

function InsightDetailPage() {
  const { id } = useParams()

  return (
    <article className="mx-auto w-full max-w-3xl rounded-card bg-warm-card p-6 shadow-soft md:p-8">
      <p className="mb-3 text-sm text-textMuted">洞察详情页（占位）</p>
      <h1 className="mb-4 text-2xl font-semibold text-textMain md:text-3xl">
        文章详情：{id}
      </h1>
      <p className="leading-8 text-textMuted">
        这里将接入 Markdown 渲染、代码高亮与公式展示能力。
      </p>
    </article>
  )
}

export default InsightDetailPage
