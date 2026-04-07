import { motion } from 'framer-motion'
import ContactSection from '../../components/Home/ContactSection'
import ContentCreationSection from '../../components/Home/ContentCreationSection'
import MediaMetricsSection from '../../components/Home/MediaMetricsSection'
import homeAvatar from '../../assets/home-avatar.png'
import WorksSection from '../../components/Home/WorksSection'
import { scrollToSection } from '../../utils/sectionScroll'

function HomePage() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="home-section-tone-a relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-16 md:py-24"
      >
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-5 text-left">
              <p className="text-xs tracking-[0.28em] text-textMuted">AI NATIVE CODER</p>

              <h1 className="text-4xl font-light leading-tight text-textMain md:text-5xl">
                铁某人
              </h1>

              <p className="text-sm tracking-wide text-textMuted md:text-base">alchain</p>

              <p className="max-w-xl text-base leading-8 text-textMuted md:text-lg">
                用数据理解世界，
                <br />
                用设计感受生活的独立开发者。
                <br />
                构建 <span className="font-normal text-textMain">AI产品</span>，创作
                <span className="font-normal text-textMain">科技内容</span>，
                <br />
                探索<span className="font-normal text-textMain">未来</span>的可能。
              </p>

              <div className="flex flex-wrap justify-start gap-4 pt-2">
                <a
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection('contact')
                  }}
                  className="inline-flex items-center bg-[#C89A67] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#B98755]"
                >
                  联系合作
                </a>
                <a
                  href="#works"
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection('works')
                  }}
                  className="inline-flex items-center bg-[#EFEDE7] px-7 py-3 text-sm font-medium text-textMain transition-colors hover:bg-[#E3DFD6]"
                >
                  查看作品
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <div className="relative">
                  <img
                    src={homeAvatar}
                    alt="首页头像"
                    loading="lazy"
                    className="mx-auto h-72 w-72 object-cover md:h-80 md:w-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <MediaMetricsSection />
      <ContentCreationSection />
      <WorksSection />
      <ContactSection />
    </div>
  )
}

export default HomePage
