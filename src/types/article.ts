export type ArticleCategory = 'daily' | 'weekly'

export interface Article {
  id: string
  title: string
  date: string
  readTime: string
  summary: string
  category: ArticleCategory
  tags: string[]
}
