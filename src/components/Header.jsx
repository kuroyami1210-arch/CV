import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/portfolio'

export default function Header({ activeSection }) {
  const [open, setOpen] = useState(false)

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setOpen(false)
    const target = document.getElementById(id)
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-white/[0.06] bg-ink/85 px-6 py-[18px] backdrop-blur-md transition-all lg:px-[60px] lg:py-5">
      <a
        href="#"
        onClick={(e) => handleNavClick(e, 'hero')}
        className="text-[1.35rem] font-bold text-white no-underline"
      >
        Fikri
      </a>

      <nav className="hidden lg:block">
        <ul className="flex list-none gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative inline-block text-[0.82rem] font-semibold uppercase tracking-[0.8px] transition-colors after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:bg-accent after:transition-all ${
                  activeSection === link.id
                    ? 'text-white after:w-full'
                    : 'text-muted after:w-0 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Tombol garis 3 — hanya tampil di HP/tablet, laptop tidak terpengaruh */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors hover:bg-white/10 active:scale-95 lg:hidden"
      >
        <span className="relative block h-[18px] w-6">
          <span
            className={`absolute left-0 top-0 h-[2px] w-full rounded bg-white transition-all duration-300 ${
              open ? 'top-[8px] rotate-45' : ''
            }`}
          />
          <span
            className={`absolute left-0 top-[8px] h-[2px] w-full rounded bg-white transition-all duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-0 top-[16px] h-[2px] w-full rounded bg-white transition-all duration-300 ${
              open ? 'top-[8px] -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      {/* Overlay — hanya di HP/tablet */}
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-x-0 top-full h-screen bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Menu dropdown HP — tersembunyi sampai ikon garis 3 diklik, laptop tidak terpengaruh */}
      <nav
        className={`absolute inset-x-0 top-full border-white/[0.06] bg-ink transition-all duration-300 ease-out lg:hidden ${
          open ? 'border-t opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block rounded-xl px-4 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.8px] transition-colors ${
                  activeSection === link.id
                    ? 'bg-accent/15 text-white'
                    : 'text-muted hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  )
}
