import { contentCreations } from '../../data/contentCreations'

function ContentCreationSection() {
  return (
    <section className="home-section-tone-a relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl font-light text-warm-title md:text-4xl">内容创作</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {contentCreations.map((item) => (
            <article
              key={item.id}
              className="rounded-card border border-[#E4DED2] bg-white/45 p-6 transition-colors hover:bg-white/60"
            >
              <p className="mb-3 text-xs tracking-[0.18em] text-textMuted">{item.format}</p>
              <h3 className="mb-3 text-xl font-normal leading-8 text-warm-title">{item.title}</h3>
              <p className="mb-6 text-sm leading-7 text-textMuted">{item.summary}</p>

              <div className="space-y-1 border-t border-[#E7E1D6] pt-4 text-xs text-textMuted">
                <p>{item.publishTime}</p>
                <p>{item.progress}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentCreationSection