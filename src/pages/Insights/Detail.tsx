import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import { Link, useParams } from 'react-router-dom'
import { articleContents } from '../../data/articleContents'
import { articles } from '../../data/articles'

function InsightDetailPage() {
  const { id } = useParams()
  const article = articles.find((item) => item.id === id)
  const content = id ? articleContents[id] : undefined

  if (!article) {
    return (
      <article className="mx-auto w-full max-w-3xl rounded-card bg-warm-card p-6 shadow-soft md:p-8">
        <p className="mb-3 text-sm text-textMuted">洞察详情</p>
        <h1 className="mb-4 text-2xl font-semibold text-textMain md:text-3xl">
          未找到对应文章
        </h1>
        <Link
          to="/insights"
          className="inline-flex rounded-full bg-primary px-4 py-2 text-sm text-white transition-opacity hover:opacity-90"
        >
          返回洞察列表
        </Link>
      </article>
    )
  }

  return (
    <article className="mx-auto w-full max-w-3xl rounded-card bg-warm-card p-6 shadow-soft md:p-8">
      <p className="mb-3 text-sm text-textMuted">洞察详情</p>
      <h1 className="mb-4 text-2xl font-semibold text-textMain md:text-3xl">
        {article.title}
      </h1>
      <p className="mb-6 text-sm text-textMuted">
        <time dateTime={article.date}>{article.date}</time>
        <span className="mx-2">·</span>
        <span>{article.readTime} 阅读</span>
      </p>

      {content ? (
        <div className="space-y-4 text-textMain">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeKatex]}
            components={{
              h1: ({ children }) => (
                <h1 className="mb-4 text-3xl font-semibold leading-tight text-textMain">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="mt-8 mb-3 text-xl font-semibold leading-tight text-textMain">{children}</h2>
              ),
              p: ({ children }) => (
                <p className="leading-8 text-textMuted">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc space-y-2 pl-6 text-textMuted">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal space-y-2 pl-6 text-textMuted">{children}</ol>
              ),
              li: ({ children }) => <li className="leading-7">{children}</li>,
              code: ({ children }) => (
                <code className="rounded bg-warm-bg px-1.5 py-0.5 text-sm text-textMain">{children}</code>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      ) : (
        <p className="leading-8 text-textMuted">这篇文章的正文内容正在整理中，稍后发布。</p>
      )}

      <div className="mt-8">
        <Link
          to="/insights"
          className="inline-flex rounded-full bg-primary px-4 py-2 text-sm text-white transition-opacity hover:opacity-90"
        >
          返回洞察列表
        </Link>
      </div>
    </article>
  )
}

export default InsightDetailPage
