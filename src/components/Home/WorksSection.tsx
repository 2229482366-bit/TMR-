import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { works } from '../../data/works'

function WorksSection() {
  return (
    <section
      id="works"
      className="home-section-tone-b relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen scroll-mt-24 py-16 md:scroll-mt-28 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-8 md:mb-10"
        >
          <p className="mb-2 text-xs tracking-[0.25em] text-textMuted">SELECTED WORKS</p>
          <h2 className="mb-3 text-3xl font-normal text-warm-title md:text-4xl">作品 Works</h2>
          <p className="max-w-3xl leading-8 text-textMuted">
            这里收录了我在数据分析与产品设计方向的代表项目。每个项目都围绕真实问题展开，
            从洞察、方案到落地，持续打磨“可理解、可执行、可复用”的产品体验。
          </p>
        </motion.div>

        <div className="max-h-[520px] overflow-y-auto rounded-card border border-[#DED8CA]">
          {works.map((project, index) => (
            <Link
              key={project.id}
              to={`/works/${project.id}`}
              className="group grid grid-cols-[56px_1fr_auto] items-start gap-4 border-b border-[#E4DED2] px-4 py-6 transition-colors hover:bg-[#F0ECE2] md:grid-cols-[80px_1fr_auto] md:px-8"
            >
              <span className="pt-1 text-sm text-textMuted">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div>
                <h3 className="mb-1 text-2xl font-normal text-warm-title transition-colors group-hover:text-textMain">
                  {project.title}
                </h3>
                <p className="max-w-3xl leading-8 text-textMuted">{project.summary}</p>
              </div>

              <span className="mt-1 inline-flex items-center gap-1 border border-[#DDD7CA] px-3 py-1 text-xs text-textMuted">
                查看详情
                <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorksSection
