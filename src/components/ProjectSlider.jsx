import { Children, useCallback, useEffect, useRef, useState } from 'react'

export default function ProjectSlider({ id, interval = 3000, children }) {
  const slides = Children.toArray(children)
  const total = slides.length
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef(null)

  const showSlide = useCallback(
    (index) => setActiveIndex(((index % total) + total) % total),
    [total]
  )

  const stopAuto = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const startAuto = useCallback(() => {
    stopAuto()
    if (total <= 1) return
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total)
    }, interval)
  }, [interval, total, stopAuto])

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [startAuto, stopAuto])

  const go = (delta) => (e) => {
    e.preventDefault()
    e.stopPropagation()
    showSlide(activeIndex + delta)
    startAuto()
  }

  const goTo = (idx) => (e) => {
    e.preventDefault()
    e.stopPropagation()
    showSlide(idx)
    startAuto()
  }

  return (
    <div
      id={id}
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
      className="relative h-[280px] w-full overflow-hidden rounded-[18px] border border-white/[0.06] bg-[#101012]"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            i === activeIndex ? 'visible z-[2] opacity-100' : 'invisible z-[1] opacity-0'
          }`}
        >
          {slide}
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous"
        onClick={go(-1)}
        className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.16] bg-[#16161a]/85 text-xl leading-none text-white backdrop-blur transition-all hover:scale-110 hover:border-accent hover:bg-accent"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={go(1)}
        className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.16] bg-[#16161a]/85 text-xl leading-none text-white backdrop-blur transition-all hover:scale-110 hover:border-accent hover:bg-accent"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 z-[15] flex -translate-x-1/2 gap-1.5">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={goTo(i)}
            className={`h-[7px] cursor-pointer rounded-full transition-all ${
              i === activeIndex ? 'w-[18px] bg-accent' : 'w-[7px] bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
