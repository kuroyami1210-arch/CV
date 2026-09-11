import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="reveal-section relative z-[28] border-b border-white/5 bg-[#121214] px-6 py-[100px]">
      {/* Single orange accent on the top edge */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="reveal-child mb-12 text-center" data-delay="50">
        <span className="text-[0.8rem] font-bold tracking-[2px] text-accent">
          TRACK RECORD & JOURNEY
        </span>
        <h3 className="mt-2 font-display text-[clamp(2.2rem,4vw,3rem)] font-extrabold tracking-tight text-white max-lg:text-[clamp(1.4rem,6.5vw,1.9rem)]">
          EXPERIENCE <span className="text-accent">&</span> ACHIEVEMENTS
        </h3>
        <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-accent" />
      </div>

      <div className="mx-auto flex max-w-[880px] flex-col">
        {experiences.map((exp, i) => (
          <article
            key={`${exp.role}-${i}`}
            data-delay={Math.min(i * 110, 440)}
            className="reveal-child relative grid grid-cols-[28px_1fr] gap-4 pb-5 last:pb-0 md:gap-5"
          >
            {/* Timeline rail */}
            <div className="flex flex-col items-center" aria-hidden="true">
              <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(255,94,0,0.7)]" />
              {i < experiences.length - 1 && (
                <span className="mt-2 w-[2px] flex-1 rounded bg-white/10" />
              )}
            </div>

            {/* Card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-5 transition-colors hover:border-accent/40 md:p-6">
              {/* Number retained */}
              <span aria-hidden="true" className="text-outline-num pointer-events-none absolute -right-1 -top-3 select-none font-display text-[4rem] font-black leading-none opacity-70">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="relative flex flex-wrap items-center gap-2.5">
                <span className="text-[0.74rem] font-bold uppercase tracking-[1px] text-[#8c8c8c]">
                  {exp.year}
                </span>
              </div>

              <h4 className="relative mt-3 font-display text-[1.25rem] font-extrabold leading-snug tracking-tight text-white">
                {exp.role}
              </h4>
              <span className="relative mt-1 block text-[0.74rem] font-bold uppercase tracking-[1.6px] text-accentLight/80">
                {exp.org}
              </span>
              <p className="relative mt-2.5 text-[0.88rem] leading-[1.7] text-[#a3a3a3]">
                {exp.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
