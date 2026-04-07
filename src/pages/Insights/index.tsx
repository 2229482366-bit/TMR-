import { motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import InsightCard from '../../components/shared/InsightCard'
import { articles } from '../../data/articles'
import type { ArticleCategory } from '../../types/article'

const categoryTabs: Array<{ label: string; value: 'all' | ArticleCategory }> = [
  { label: 'all', value: 'all' },
  { label: '日报', value: 'daily' },
  { label: '周报', value: 'weekly' },
]

function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | ArticleCategory>('all')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [keyword, setKeyword] = useState('')
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  const presetTags = useMemo(() => {
    const tags = new Set<string>()
    articles.forEach((article) => {
      article.tags.forEach((tag) => tags.add(tag))
    })

    return Array.from(tags)
  }, [])

  const filteredArticles = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase()

    return articles.filter((article) => {
      const categoryMatch =
        activeCategory === 'all' ? true : article.category === activeCategory

      const tagMatch =
        selectedTags.length === 0
          ? true
          : selectedTags.every((tag) => article.tags.includes(tag))

      const keywordMatch =
        normalizedKeyword.length === 0
          ? true
          : [article.title, article.summary, article.tags.join(' ')]
              .join(' ')
              .toLowerCase()
              .includes(normalizedKeyword)

      return categoryMatch && tagMatch && keywordMatch
    })
  }, [activeCategory, keyword, selectedTags])

  const addTag = (rawTag: string) => {
    const normalized = rawTag.replace(/^#/, '').trim()
    if (!normalized || selectedTags.includes(normalized)) {
      return
    }

    setSelectedTags((prev) => [...prev, normalized])
  }

  const removeTag = (tag: string) => {
    setSelectedTags((prev) => prev.filter((item) => item !== tag))
  }

  const handleSearchSubmit = () => {
    if (!keyword.trim().startsWith('#')) {
      return
    }

    addTag(keyword)
    setKeyword('')
  }

  return (
    <section className="mx-auto w-full max-w-6xl space-y-6">
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

      <section id="insights-filter" className="rounded-card bg-warm-card p-5 shadow-soft md:p-6">
        <div className="flex flex-wrap items-center gap-3">
          {categoryTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveCategory(tab.value)}
              className={[
                'rounded-full px-4 py-2 text-sm transition-colors',
                activeCategory === tab.value
                  ? 'bg-primary text-white'
                  : 'bg-warm-bg text-textMuted hover:text-textMain',
              ].join(' ')}
            >
              {tab.label}
            </button>
          ))}

          <div className="ml-auto flex min-w-[48px] justify-end">
            <form
              onSubmit={(event) => {
                event.preventDefault()
                handleSearchSubmit()
              }}
              className={[
                'flex h-11 items-center gap-2 overflow-hidden rounded-full border border-warm-accent/70 bg-warm-bg px-3 transition-all duration-300',
                isSearchExpanded ? 'w-full md:w-[24rem]' : 'w-11 cursor-pointer justify-center p-0',
              ].join(' ')}
              onClick={() => setIsSearchExpanded(true)}
            >
              <Search size={16} className="shrink-0 text-textMuted" />
              {isSearchExpanded && (
                <>
                  <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
                    {selectedTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs text-textMain"
                        aria-label={`移除标签 ${tag}`}
                      >
                        #{tag}
                        <X size={12} />
                      </button>
                    ))}
                    <input
                      value={keyword}
                      onChange={(event) => setKeyword(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key !== 'Enter') {
                          return
                        }

                        event.preventDefault()
                        handleSearchSubmit()
                      }}
                      className="min-w-[8rem] flex-1 bg-transparent text-sm text-textMain outline-none"
                      placeholder="输入关键词，或 #标签 回车添加"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSearchExpanded(false)}
                    className="rounded-full p-1 text-textMuted transition-colors hover:text-textMain"
                    aria-label="收起搜索"
                  >
                    <X size={14} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {presetTags.map((tag) => {
            const isActive = selectedTags.includes(tag)
            return (
              <button
                key={tag}
                type="button"
                onClick={() => (isActive ? removeTag(tag) : addTag(tag))}
                className={[
                  'rounded-full border px-3 py-1 text-xs transition-colors',
                  isActive
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-warm-accent/70 text-textMuted hover:text-textMain',
                ].join(' ')}
              >
                #{tag}
              </button>
            )
          })}
        </div>
      </section>

      <div className="space-y-5">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => <InsightCard key={article.id} article={article} />)
        ) : (
          <div className="rounded-card bg-warm-card p-8 text-center text-textMuted shadow-soft">
            未检索到匹配内容，试试切换标签或搜索词。
          </div>
        )}
      </div>

    </section>
  )
}

export default InsightsPage
