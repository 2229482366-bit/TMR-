import { motion } from 'framer-motion'
import WorkCard from '../shared/WorkCard'
import { works } from '../../data/works'

function WorksSection() {
  return (
    <section id="works" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="card-warm p-6 md:p-8"
      >
        <h2 className="title-warm mb-3 text-2xl font-semibold md:text-3xl">作品 Works</h2>
        <p className="text-warm max-w-3xl leading-8">
          这里收录了我在数据分析与产品设计方向的代表项目。每个项目都围绕真实问题展开，
          从洞察、方案到落地，持续打磨“可理解、可执行、可复用”的产品体验。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {works.map((project) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default WorksSection
