export default function Contact() {
  return (
    <section id="contact" className="reveal-section border-t border-white/5 bg-[#151515] px-6 py-[120px] text-center lg:px-[60px] max-lg:pb-[150px] max-lg:pt-20">
      <div className="reveal-zoom mx-auto max-w-[700px]" data-delay="100">
        <span className="mb-2 block text-[0.8rem] font-extrabold tracking-[2px] text-accent">
          GET IN TOUCH
        </span>
        <h3 className="mb-4 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-black max-lg:text-[clamp(1.5rem,7vw,2.1rem)]">
          LET&apos;S COLLABORATE
        </h3>
        <p className="mb-9 text-[0.95rem] leading-[1.7] text-[#999]">
          Ready to craft interactive design solutions and cutting-edge web
          applications for your next project.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:kasifatulfikri29@gmail.com"
            className="rounded bg-accent px-7 py-3 text-[0.85rem] font-bold tracking-[0.8px] text-white transition-colors hover:bg-[#e05300] max-lg:w-full"
          >
            SEND EMAIL NOW
          </a>
        </div>
      </div>
    </section>
  )
}
