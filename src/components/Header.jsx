import { NAV_LINKS } from '../data/portfolio'

export default function Header({ activeSection }) {
  const handleNavClick = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' })
    }
  }

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

    </header>
  )
}
