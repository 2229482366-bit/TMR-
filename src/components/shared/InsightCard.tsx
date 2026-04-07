import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Article } from '../../types/article'

interface InsightCardProps {
  article: Article
}

function InsightCard({ article }: InsightCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group rounded-card bg-warm-card p-6 shadow-soft md:p-8"
    >
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-textMuted">
        <time dateTime={article.date}>{article.date}</time>
        <span aria-hidden="true">·</span>
        <span>{article.readTime} 阅读</span>
      </div>

      <h3 className="mb-4 text-2xl font-semibold leading-tight text-textMain transition-colors duration-200 group-hover:text-primary">
        <Link to={`/insights/${article.id}`}>{article.title}</Link>
      </h3>

      <p className="text-base leading-8 text-textMuted">{article.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-warm-accent/70 px-3 py-1 text-xs text-textMuted"
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default InsightCard
