import { useEffect, useState } from 'react'

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] || 'hero')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length || !('IntersectionObserver' in window)) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.35 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return active
}
