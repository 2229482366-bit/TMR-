import { motion } from 'framer-motion'
import InsightCard from '../../components/shared/InsightCard'
import { articles } from '../../data/articles'

function InsightsPage() {
  return (
    <section className="mx-auto w-full max-w-3xl space-y-6">
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="rounded-card bg-warm-card p-6 shadow-soft md:p-8"
      >
        <h1 className="mb-3 text-3xl font-semibold text-textMain md:text-4xl">
          洞察 Insights
        </h1>
        <p className="leading-8 text-textMuted">
          这里记录我在数据分析、产品设计与增长实践中的方法总结与案例复盘，
          希望每篇文章都能提供可落地的启发。
        </p>
      </motion.header>

      <div className="space-y-5">
        {articles.map((article) => (
          <InsightCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}

export default InsightsPage
