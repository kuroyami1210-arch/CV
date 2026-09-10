import { useRef } from 'react'
import { ABOUT_PHOTO } from '../data/portfolio'

const MAX_PUSH_ANGLE = 14
const ABOUT_RADIUS = 145

export default function About() {
  const boxRef = useRef(null)
  const colorRef = useRef(null)
  const glareRef = useRef(null)

  const handleMouseMove = (e) => {
    const box = boxRef.current
    const colorPhoto = colorRef.current
    if (!box || !colorPhoto) return
    const rect = box.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = (-(y - rect.height / 2) / (rect.height / 2)) * MAX_PUSH_ANGLE
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * MAX_PUSH_ANGLE

    box.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(-8px)`
    colorPhoto.style.setProperty('--x', `${x}px`)
    colorPhoto.style.setProperty('--y', `${y}px`)
    colorPhoto.style.setProperty('--radius', `${ABOUT_RADIUS}px`)

    if (glareRef.current) {
      glareRef.current.style.setProperty('--gx', `${(x / rect.width) * 100}%`)
      glareRef.current.style.setProperty('--gy', `${(y / rect.height) * 100}%`)
      glareRef.current.style.opacity = '1'
    }
  }

  const handleMouseLeave = () => {
    if (boxRef.current) {
      boxRef.current.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    }
    colorRef.current?.style.setProperty('--radius', '0px')
    if (glareRef.current) glareRef.current.style.opacity = '0'
  }

  const scrollToSkills = (e) => {
    e.preventDefault()
    const target = document.getElementById('skills')
    if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' })
  }

  return (
    <section id="about" className="reveal-section relative z-20 border-b border-white/5 bg-coal px-6 pb-[110px] pt-40 lg:px-[60px]">
      <div className="grid mx-auto max-w-[1240px] items-center gap-11 lg:grid-cols-[1.15fr_1fr] lg:gap-[70px]">
        <div className="reveal-left" data-delay="100">
          <span className="mb-2 inline-block text-[1.15rem] font-extrabold tracking-[2px] text-[#6a6a6a]">
            HELLO
          </span>
          <h2 className="mb-6 font-display text-[clamp(2.8rem,5vw,4.4rem)] font-black leading-[1.05] tracking-tight">
            I&apos;M FIKRI
          </h2>
          <p className="mb-9 max-w-[520px] text-[1.02rem] leading-[1.85] text-[#a0a0a0]">
          A Software Engineering student at SMKN 1 Dukuhturi, Tegal. I have a deep passion for software development, UI/UX design, web technologies, and IoT. With hands-on experience in creative projects and technology leadership, I am committed to continuous learning and contributing to the digital world.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#projects"
              className="rounded bg-accent px-7 py-3 text-[0.85rem] font-bold tracking-[0.8px] text-white transition-colors hover:bg-[#e05300]"
            >
              EXPLORE MY WORKS
            </a>
   
          </div>
        </div>

        <div className="reveal-right relative flex items-center justify-center py-5" data-delay="220">
          <div
            ref={boxRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[560px] cursor-crosshair overflow-hidden rounded-[20px] border border-white/[0.09] bg-gradient-to-[150deg] from-[#222222] to-[#151515] shadow-[0_24px_50px_rgba(0,0,0,0.6)] transition-shadow"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#1c1c1c]/80 px-[22px] py-4 backdrop-blur">
              <div className="flex gap-[7px]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.08] px-3 py-1 text-[0.7rem] font-bold tracking-[1px] text-accentLight">
                <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_8px_#ff5e00]" />
                PORTFOLIO SHOWCASE
              </div>
            </div>

            <div className="relative flex h-[530px] w-full items-end justify-center bg-[radial-gradient(circle_at_center,rgba(255,94,0,0.05)_0%,transparent_70%)]">
              <img
                src={ABOUT_PHOTO}
                alt="Fikri Grayscale"
                className="pointer-events-none absolute bottom-0 h-full w-auto max-w-full object-contain grayscale contrast-[1.12] brightness-[0.96]"
              />
              <img
                ref={colorRef}
                src={ABOUT_PHOTO}
                alt="Fikri Color"
                className="photo-color pointer-events-none absolute bottom-0 h-full w-auto max-w-full object-contain"
              />
              <div
                ref={glareRef}
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity"
                style={{
                  background:
                    'radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.08) 0%, transparent 60%)',
                }}
              />
            </div>
          </div>

          <a
            href="#skills"
            aria-label="Explore More - Go to Skills"
            onClick={scrollToSkills}
            className="absolute -bottom-5 -left-5 z-[25] flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#242424] shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-transform hover:scale-105"
          >
            <svg className="animate-spin-slow absolute h-full w-full" viewBox="0 0 100 100">
              <path id="explorePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="none" />
              <text className="fill-[#e0e0e0] text-[8px] font-bold tracking-[2px]">
                <textPath href="#explorePath" startOffset="0%">
                  • EXPLORE MORE • EXPLORE MORE
                </textPath>
              </text>
            </svg>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="white"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>

          <svg className="pointer-events-none absolute -right-2.5 top-[30%] z-10" width="75" height="40" viewBox="0 0 70 35">
            <path d="M5 12 Q 22 0, 40 18 T 68 14" fill="none" stroke="#ff8c00" strokeWidth="3" strokeLinecap="round" />
            <path d="M5 25 Q 22 13, 40 31 T 68 27" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}
