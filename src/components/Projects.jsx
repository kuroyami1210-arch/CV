import { useRef } from 'react'
import ProjectSlider from './ProjectSlider'

const badgeStyles = {
  'badge-orange': 'border-accent/25 bg-accent/[0.12] text-accentLight',
  'badge-red': 'border-red-500/25 bg-red-500/[0.12] text-red-400',
  'badge-blue': 'border-sky-400/25 bg-sky-400/[0.12] text-sky-400',
  'badge-purple': 'border-purple-500/25 bg-purple-500/[0.12] text-purple-300',
}

function Badge({ kind, color }) {
  return (
    <span className={`rounded-full border px-3 py-[3px] text-[0.72rem] font-bold tracking-[0.5px] ${badgeStyles[color]}`}>
      {kind}
    </span>
  )
}

function SlideLabel({ children }) {
  return (
    <div className="pointer-events-none absolute bottom-3 left-[14px] z-[5] rounded-[14px] border border-white/[0.08] bg-[#0f0f0f]/90 px-2.5 py-1 text-[0.65rem] font-extrabold tracking-[0.6px] text-[#d1d1d1] backdrop-blur">
      {children}
    </div>
  )
}

function DeviceShowcase() {
  const stageRef = useRef(null)
  const pcRef = useRef(null)
  const phoneRef = useRef(null)

  const handleMouseMove = (e) => {
    const stage = stageRef.current
    if (!stage || !pcRef.current || !phoneRef.current) return
    const rect = stage.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    pcRef.current.style.transform = `perspective(1200px) rotateY(${-4 + x * 12}deg) rotateX(${3 - y * 10}deg)`
    phoneRef.current.style.transform = `perspective(1200px) rotateY(${8 + x * 16}deg) rotateX(${-2 - y * 12}deg) translate3d(${x * 15}px, ${y * 10}px, 40px)`
  }

  const handleMouseLeave = () => {
    if (pcRef.current)
      pcRef.current.style.transform = 'perspective(1200px) rotateY(-4deg) rotateX(3deg)'
    if (phoneRef.current)
      phoneRef.current.style.transform =
        'perspective(1200px) rotateY(8deg) rotateX(-2deg) translateZ(40px)'
  }

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex h-full w-full items-center justify-center overflow-hidden rounded-[18px] border border-accent/[0.18] bg-gradient-to-[135deg,#1b1716_0%,#121212_100%]"
    >
      <div className="relative flex -translate-x-[18px] items-center justify-center max-lg:translate-x-0 max-lg:scale-90">
        <div
          ref={pcRef}
          className="flex h-[200px] w-[320px] flex-col overflow-hidden rounded-[10px] border-[1.5px] border-[#333] bg-[#1a1a1a] shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-transform"
        >
          <div className="flex items-center gap-2 border-b border-[#333] bg-[#242424] px-2.5 py-[5px]">
            <div className="flex">
              <span className="mr-[2px] inline-block h-[5px] w-[5px] rounded-full bg-[#666]" />
              <span className="mr-[2px] inline-block h-[5px] w-[5px] rounded-full bg-[#666]" />
              <span className="mr-[2px] inline-block h-[5px] w-[5px] rounded-full bg-[#666]" />
            </div>
            <div className="flex-1 rounded-lg bg-[#161616] px-2 py-[2px] text-[0.58rem] text-[#888]">
              duta.sekolah.sch.id
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden">
              <img
              src="assets/duta/panel-duta.png"
              alt="School Ambassador Applicant Dashboard"
              className="h-full w-full object-cover object-top brightness-[0.85]"
            />
          </div>
        </div>

        <div
          ref={phoneRef}
          className="absolute -bottom-[22px] -right-[38px] z-10 flex h-[215px] w-[115px] flex-col overflow-hidden rounded-[18px] border-2 border-[#444] bg-[#0d0d0d] shadow-[0_18px_45px_rgba(0,0,0,0.85)] transition-transform"
        >
          <div className="mx-auto mb-1 mt-1.5 h-[3px] w-[26px] rounded bg-[#333]" />
          <div className="relative flex-1 overflow-hidden">
              <img
              src="assets/duta/registrasi.png"
              alt="School Ambassador Registration Form"
              className="h-full w-full object-cover object-top brightness-[0.9]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ reverse = false, delay = 0, children }) {
  return (
    <div
      data-delay={delay}
      className={`reveal-project grid items-center gap-10 rounded-3xl border border-white/[0.06] bg-card p-[34px_40px] shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-[0_22px_50px_rgba(0,0,0,0.65)] max-lg:grid-cols-1 max-lg:gap-[25px] max-lg:p-6 lg:grid-cols-[1.15fr_1fr] ${
        reverse ? 'lg:grid-cols-[1fr_1.15fr]' : ''
      }`}
    >
      {children}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="reveal-section relative z-30 border-b border-white/5 bg-ink px-6 py-[100px]">
      <div className="reveal-child mb-[50px] text-center" data-delay="50">
        <h3 className="font-display text-[clamp(2.2rem,4vw,3rem)] font-extrabold tracking-tight text-white">
          Featured Project
        </h3>
      </div>

      <div className="mx-auto flex max-w-[960px] flex-col gap-9">
        {/* SMEZINE */}
        <ProjectCard delay={60}>
          <ProjectSlider id="carouselSmezine" interval={3000}>
            <>
              <img
                src="assets/smezine/Screenshot (198).png"
                alt="Smezine Gallery Page"
                className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-[1.03]"
              />
              <SlideLabel>SMEZINE GALLERY PAGE</SlideLabel>
            </>
            <>
              <img
                src="assets/smezine/Screenshot (199).png"
                alt="Smezine Division and Management Page"
                className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-[1.03]"
              />
              <SlideLabel>DIVISION & MANAGEMENT PAGE</SlideLabel>
            </>
          </ProjectSlider>

          <div className="flex flex-col items-start gap-3">
            <Badge kind="UI/UX Design" color="badge-orange" />
            <h4 className="font-display text-[clamp(1.4rem,2.2vw,1.85rem)] font-extrabold leading-tight text-white">
              Smezine Extracurricular Web
            </h4>
            <p className="text-[0.88rem] leading-[1.65] text-[#929292]">
              An interactive school wall-magazine and digital magazine portal with
              modern curated article rubrics, an adaptive e-magazine reading
              system, and student journalism editorial publication management.
            </p>
          </div>
        </ProjectCard>

        {/* RFID */}
        <ProjectCard reverse delay={120}>
          <div className="flex flex-col items-start gap-3 max-lg:order-2">
            <Badge kind="Web & IoT" color="badge-red" />
            <h4 className="font-display text-[clamp(1.4rem,2.2vw,1.85rem)] font-extrabold leading-tight text-white">
              RFID-Based Attendance System
            </h4>
            <p className="text-[0.88rem] leading-[1.65] text-[#929292]">
              IoT integration of the RFID RC522 device with a real-time Web
              Dashboard for student attendance audit logs, fast smart-card
              verification, and accurate data recapitulation.
            </p>
          </div>

          <ProjectSlider id="carouselRfid" interval={3000}>
            <>
              <div className="flex h-full w-full items-center justify-center gap-4 px-6 py-[18px]">
                {[
                  { src: 'assets/arduino/depan.jpg', alt: 'RFID Attendance Device Front View' },
                  { src: 'assets/arduino/dalam.png', alt: 'RFID RC522 Sensor Circuit' },
                  { src: 'assets/arduino/belakang.jpg', alt: 'RFID Attendance Device Rear View' },
                ].map((f) => (
                  <div key={f.alt} className="h-[200px] w-[102px] shrink-0 overflow-hidden rounded-xl border-[1.5px] border-white/[0.12] bg-[#17171a] shadow-[0_10px_25px_rgba(0,0,0,0.65)]">
                    <img src={f.src} alt={f.alt} className="block h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <SlideLabel>RFID DEVICE DOCUMENTATION</SlideLabel>
            </>
            <>
              <img
                src="assets/arduino/panel.png"
                alt="Digital Attendance Panel Dashboard"
                className="h-full w-full object-cover object-top"
              />
              <SlideLabel>ATTENDANCE PANEL DASHBOARD</SlideLabel>
            </>
          </ProjectSlider>
        </ProjectCard>

        {/* PILKETOS */}
        <ProjectCard delay={120}>
          <ProjectSlider id="carouselPilketos" interval={3000}>
            <>
              <div className="flex h-full w-full items-center justify-center gap-4 px-6 py-[18px]">
                {[
                  { src: 'assets/pilketos/2.jpeg', alt: 'Pilketos Home Page' },
                  { src: 'assets/pilketos/1.jpeg', alt: 'Pilketos Student Authentication' },
                  { src: 'assets/pilketos/3.jpeg', alt: 'Pilketos Teacher & Staff Authentication' },
                ].map((f) => (
                  <div key={f.alt} className="relative h-[200px] w-[102px] shrink-0 overflow-hidden rounded-[18px] border-2 border-[#36363d] bg-[#0d0d10] shadow-[0_10px_25px_rgba(0,0,0,0.7)]">
                    <div className="absolute left-1/2 top-[5px] z-[3] h-[3.5px] w-[26px] -translate-x-1/2 rounded bg-[#25252b]" />
                    <img src={f.src} alt={f.alt} className="block h-full w-full object-cover object-top" />
                  </div>
                ))}
              </div>
              <SlideLabel>MOBILE APP</SlideLabel>
            </>
            <>
              <img
                src="assets/pilketos/dokumentasi.jpeg"
                alt="Pilketos E-Voting Event Documentation"
                className="h-full w-full object-cover"
              />
              <SlideLabel>PILKETOS EVENT DOCUMENTATION</SlideLabel>
            </>
          </ProjectSlider>

          <div className="flex flex-col items-start gap-3">
            <Badge kind="UI/UX Design" color="badge-blue" />
            <h4 className="font-display text-[clamp(1.4rem,2.2vw,1.85rem)] font-extrabold leading-tight text-white">
              Pilketos App (E-Voting)
            </h4>
            <p className="text-[0.88rem] leading-[1.65] text-[#929292]">
              A digital e-voting system using single-use unique tokens, live
              quick-count calculation on the hall screen, and fraud-free
              encrypted vote auditing.
            </p>
          </div>
        </ProjectCard>

        {/* DUTA */}
        <ProjectCard reverse delay={120}>
          <div className="flex flex-col items-start gap-3 max-lg:order-2">
            <Badge kind="Responsive Web" color="badge-purple" />
            <h4 className="font-display text-[clamp(1.4rem,2.2vw,1.85rem)] font-extrabold leading-tight text-white">
              School Ambassador Registration Web
            </h4>
            <p className="text-[0.88rem] leading-[1.65] text-[#929292]">
              A School Ambassador selection and audition platform with an
              integrated digital form, participant portfolio upload system, and a
              responsive interface across desktop & mobile devices.
            </p>
          </div>

          <div className="h-[280px] w-full">
            <DeviceShowcase />
          </div>
        </ProjectCard>
      </div>
    </section>
  )
}
