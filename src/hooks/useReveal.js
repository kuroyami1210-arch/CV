import { useEffect } from 'react'

const SELECTOR =
  '.reveal-section, .reveal-project, .reveal-child, .reveal-left, .reveal-right, .reveal-zoom, .reveal-fade'

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(SELECTOR)
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    // Apply per-element delay from the data-delay attribute (ms) for a smooth stagger
    els.forEach((el) => {
      const delay = el.getAttribute('data-delay')
      if (delay && !el.style.transitionDelay) {
        el.style.transitionDelay = `${delay}ms`
      }
    })

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target
          if (entry.isIntersecting) {
            // Entered viewport -> play enter animation
            requestAnimationFrame(() => el.classList.add('is-visible'))
          } else {
            // Left viewport -> reset so the animation replays smoothly
            // when the user scrolls back to the section
            el.classList.remove('is-visible')
          }
        })
      },
      {
        threshold: 0.12,
        // Trigger slightly earlier before the section is fully visible
        rootMargin: '0px 0px -8% 0px',
      }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
