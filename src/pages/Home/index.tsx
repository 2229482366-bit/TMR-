import { motion } from 'framer-motion'
import WorksSection from '../../components/Home/WorksSection'

function HomePage() {
  return (
    <div className="space-y-10">
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="card-warm overflow-hidden p-6 md:p-10"
      >
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="space-y-5">
            <p className="inline-flex rounded-full bg-warm-accent/55 px-3 py-1 text-sm text-warm-title">
              温暖的初见
            </p>

            <h1 className="title-warm text-3xl font-semibold leading-tight md:text-5xl">
              用数据理解世界，
              <span className="block text-warm-primary">用设计感受生活。</span>
            </h1>

            <p className="text-warm max-w-xl text-base leading-8 md:text-lg">
              你好，我是一名前端与数据实践者。这里是我的个人数字花园，记录作品、沉淀洞察，也收藏日常灵感。
              希望每一次访问，都像翻开一页有温度的手账。
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm rounded-card bg-warm-card p-5 shadow-soft">
              <div className="absolute inset-x-6 -top-4 h-12 rounded-full bg-warm-accent/45 blur-lg" />
              <div className="relative rounded-card border border-warm-accent/50 bg-warm-bg p-6">
                <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-card bg-warm-accent/40 text-5xl font-semibold text-warm-title shadow-soft">
                  ME
                </div>
                <p className="mt-4 text-center text-sm text-warm">
                  头像 / 虚拟形象占位区域
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <WorksSection />
    </div>
  )
}

export default HomePage
