import { motion } from 'framer-motion'
import type { WorkProject } from '../../types/work'

interface WorkCardProps {
  project: WorkProject
}

function WorkCard({ project }: WorkCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: '0 10px 28px -8px rgba(0, 0, 0, 0.12)' }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="overflow-hidden rounded-card bg-warm-card shadow-soft"
    >
      <div className="aspect-[16/9] overflow-hidden bg-warm-accent/35">
        <img
          src={project.coverImage}
          alt={`${project.title} 封面图`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="title-warm text-lg font-semibold leading-7">{project.title}</h3>
          <span className="rounded-full bg-warm-accent/55 px-2.5 py-1 text-xs text-warm-title">
            {project.year}
          </span>
        </div>

        <p className="text-warm text-sm leading-7">{project.summary}</p>

        <p className="text-warm-title text-sm">
          <span className="font-medium">角色：</span>
          {project.role}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-warm-bg px-2.5 py-1 text-xs text-warm-title"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default WorkCard
