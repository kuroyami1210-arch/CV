import { useRef } from 'react'
import { HERO_PHOTO } from '../data/portfolio'

const HERO_RADIUS = 150

export default function Hero() {
  const wrapperRef = useRef(null)
  const colorRef = useRef(null)

  const handleMouseMove = (e) => {
    const wrapper = wrapperRef.current
    const colorPhoto = colorRef.current
    if (!wrapper || !colorPhoto) return
    const rect = wrapper.getBoundingClientRect()
    colorPhoto.style.setProperty('--x', `${e.clientX - rect.left}px`)
    colorPhoto.style.setProperty('--y', `${e.clientY - rect.top}px`)
    colorPhoto.style.setProperty('--radius', `${HERO_RADIUS}px`)
  }

  const handleMouseLeave = () => {
    colorRef.current?.style.setProperty('--radius', '0px')
  }

  const scrollToAbout = (e) => {
    e.preventDefault()
    const target = document.getElementById('about')
    if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="reveal-section relative z-40 flex h-screen min-h-[720px] items-end justify-center overflow-visible border-b border-white/[0.08] max-lg:h-auto max-lg:min-h-0 max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:pb-0 max-lg:pt-[76px]"
    >
      {/* Back title */}
      <div data-delay="50" className="reveal-fade pointer-events-none absolute left-1/2 top-[calc(60%_+_70px)] z-[2] w-full -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-display text-[clamp(3.2rem,7.8vw,7.8rem)] font-black uppercase leading-[0.95] tracking-tight text-white max-lg:top-[calc(60%_+_50px)] max-lg:text-[clamp(2.24rem,5.46vw,5.46rem)]">
        I&apos;M A UI/UX
        <br />
        DESIGNER
      </div>

      <svg className="pointer-events-none absolute bottom-[12%] left-[16%] z-[3] h-[clamp(220px,26vw,340px)] w-[clamp(220px,26vw,340px)] max-lg:hidden" viewBox="0 0 200 200" fill="#ff5e00">
        <rect x="80" y="10" width="40" height="180" rx="6" />
        <rect x="80" y="10" width="40" height="180" rx="6" transform="rotate(45 100 100)" />
        <rect x="80" y="10" width="40" height="180" rx="6" transform="rotate(90 100 100)" />
        <rect x="80" y="10" width="40" height="180" rx="6" transform="rotate(135 100 100)" />
      </svg>

      <svg className="pointer-events-none absolute left-[54%] top-[18%] z-[6] max-lg:hidden" width="60" height="60" viewBox="0 0 50 50">
        <path d="M10 32 L20 18" stroke="#ff8c00" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M26 22 L40 6" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
      </svg>

      {/* Spotlight photo */}
      <div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-delay="150"
        className="reveal-fade absolute bottom-0 left-1/2 z-[5] flex h-[96%] max-h-[980px] w-[min(880px,98vw)] -translate-x-1/2 cursor-crosshair items-end justify-center max-lg:static max-lg:bottom-auto max-lg:left-auto max-lg:order-2 max-lg:h-[calc(81.6svh_-_240px)] max-lg:max-h-[504px] max-lg:w-[92vw] max-lg:translate-x-0"
      >
        <img
          src={HERO_PHOTO}
          alt="Fikri Base"
          className="pointer-events-none absolute bottom-0 h-full w-auto max-w-full object-contain object-bottom grayscale contrast-[1.12] brightness-[0.96]"
        />
        <img
          ref={colorRef}
          src={HERO_PHOTO}
          alt="Fikri Color"
          className="photo-color pointer-events-none absolute bottom-0 h-full w-auto max-w-full object-contain object-bottom"
        />
      </div>

      {/* Front outline title */}
      <div data-delay="250" className="reveal-fade text-outline pointer-events-none absolute left-1/2 top-[calc(60%_+_70px)] z-[6] w-full -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-display text-[clamp(3.2rem,7.8vw,7.8rem)] font-black uppercase leading-[0.95] tracking-tight max-lg:top-[calc(60%_+_50px)] max-lg:text-[clamp(2.24rem,5.46vw,5.46rem)]">
        I&apos;M A UI/UX
        <br />
        DESIGNER
      </div>

      <a
        href="#about"
        aria-label="Scroll Down"
        onClick={scrollToAbout}
        data-delay="400"
        className="reveal-fade absolute -bottom-[63px] left-1/2 z-50 flex h-[126px] w-[126px] -translate-x-1/2 items-center justify-center rounded-full bg-[#242424] shadow-[0_12px_35px_rgba(0,0,0,0.7)] transition-transform hover:scale-105 max-lg:-bottom-[48px] max-lg:h-[96px] max-lg:w-[96px] max-lg:hidden"
      >
        <svg className="animate-spin-slow absolute h-full w-full" viewBox="0 0 100 100">
          <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
          <text className="fill-[#b5b5b5] text-[7.8px] font-semibold uppercase tracking-[2px]">
            <textPath href="#circlePath" startOffset="0%">
              • SCROLL DOWN • SCROLL DOWN
            </textPath>
          </text>
        </svg>
        <span className="z-[2] flex h-11 w-11 items-center justify-center rounded-full bg-accent max-lg:h-9 max-lg:w-9">
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-white stroke-2">
            <rect x="6" y="3" width="12" height="18" rx="6" />
            <path d="M12 7v4" />
          </svg>
        </span>
      </a>
    </section>
  )
}
