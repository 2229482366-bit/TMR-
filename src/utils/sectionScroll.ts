interface ScrollToSectionOptions {
  offset?: number
  duration?: number
}

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export function scrollToSection(
  id: string,
  options: ScrollToSectionOptions = {},
): boolean {
  const element = document.getElementById(id)
  if (!element) {
    return false
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const header = document.querySelector('header')
  const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0
  const offset = options.offset ?? headerHeight + 8
  const duration = options.duration ?? 520

  const startY = window.scrollY
  const targetY = Math.max(0, startY + element.getBoundingClientRect().top - offset)
  const distance = targetY - startY

  if (Math.abs(distance) < 2) {
    return true
  }

  if (prefersReducedMotion) {
    window.scrollTo(0, targetY)
    return true
  }

  let startTime: number | null = null
  const step = (timestamp: number) => {
    if (startTime === null) {
      startTime = timestamp
    }

    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeInOutCubic(progress)
    window.scrollTo(0, startY + distance * eased)

    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
  return true
}