import { devSkills, softSkills } from '../data/portfolio'

function SkillCard({ icon, name, pct, soft = false }) {
  return (
    <div
      className={`flex w-[250px] shrink-0 flex-col gap-3.5 rounded-[14px] border border-white/[0.07] bg-[#1c1c1c] p-[20px_22px] transition-all hover:-translate-y-[5px] ${
        soft ? 'hover:border-[#00c4cc]/60' : 'hover:border-accent/50'
      }`}
    >
      <div className="flex items-center gap-3">
        {typeof icon === 'string' ? (
          <i className={`${icon} text-[2rem]`} />
        ) : (
          icon
        )}
        <span className="grow text-[0.92rem] font-bold text-white">{name}</span>
        <span className={`text-[0.88rem] font-extrabold ${soft ? 'text-[#00c4cc]' : 'text-accent'}`}>
          {pct}%
        </span>
      </div>
      <div className="h-[7px] w-full overflow-hidden rounded bg-[#2b2b2b]">
        <div
          style={{ width: `${pct}%` }}
          className={`h-full rounded ${
            soft
              ? 'bg-gradient-to-r from-[#00c4cc] to-[#0077ff]'
              : 'bg-gradient-to-r from-accentLight to-accent'
          }`}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const devLoop = [...devSkills, ...devSkills]
  const softLoop = Array(6).fill(softSkills).flat()

  return (
    <section id="skills" className="reveal-section relative z-[25] border-y border-white/5 bg-ink py-[100px]">
      <div className="reveal-child mb-[38px] px-5 text-center" data-delay="50">
        <span className="mb-2 block text-[0.8rem] font-bold tracking-[2px] text-accent">
          DEVELOPMENT & DESIGN
        </span>
        <h3 className="font-display text-[clamp(1.9rem,4.2vw,2.9rem)] font-black tracking-tight">
          CORE SKILLS & PROFICIENCY
        </h3>
      </div>

      <div className="reveal-child slider-fade slider-pause flex select-none overflow-hidden py-3" data-delay="150">
        <div className="animate-slide flex w-max gap-[22px]">
          {devLoop.map((s, i) => (
            <SkillCard key={`${s.name}-${i}`} icon={s.iconClass} name={s.name} pct={s.pct} />
          ))}
        </div>
      </div>

      <div className="reveal-child slider-fade slider-pause mt-[18px] flex select-none overflow-hidden py-3" data-delay="280">
        <div className="animate-slide-reverse flex w-max gap-[22px]">
          {softLoop.map((s, i) => (
            <SkillCard
              key={`${s.name}-${i}`}
              soft
              name={s.name}
              pct={s.pct}
              icon={
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-[7px]">
                  <img
                    src={s.img}
                    alt={s.name}
                    className={`block h-[26px] w-[26px] object-contain ${s.rounded ? 'rounded-md' : ''}`}
                    onError={(e) => {
                      if (s.fallback && e.currentTarget.src !== s.fallback) {
                        e.currentTarget.src = s.fallback
                      }
                    }}
                  />
                </span>
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
