import { mediaMetrics } from '../../data/mediaMetrics'

function MediaMetricsSection() {
  return (
    <section className="home-section-tone-b relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="mb-10 space-y-4 md:mb-12">
          <p className="text-xs tracking-[0.25em] text-textMuted">KEY METRICS</p>
          <h2 className="text-3xl font-light text-warm-title md:text-5xl">用数据说话</h2>
        </div>

        <div className="overflow-hidden rounded-card">
          <div className="grid md:grid-cols-4">
            {mediaMetrics.map((item, index) => (
              <article
                key={item.id}
                className={[
                  'px-6 py-8 md:px-8 md:py-10',
                  index < mediaMetrics.length - 1 ? 'border-b border-[#E9E3D8] md:border-b-0 md:border-r' : '',
                ].join(' ')}
              >
                <p className="mb-2 text-5xl font-light leading-none text-warm-title md:text-6xl">
                  {item.value}
                  <span className="ml-1 text-3xl text-primary/80 md:text-4xl">{item.unit}</span>
                </p>
                <p className="mb-2 text-sm text-textMain">{item.label}</p>
                <p className="text-xs leading-6 text-textMuted">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaMetricsSection