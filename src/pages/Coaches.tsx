import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { coaches } from '../data/coaches'

export default function Coaches() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Our Coaches | SuccessGym'
    return () => { document.title = previousTitle }
  }, [])

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <header className="border-b border-white/10 bg-black">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Success Gym home">
            <span className="grid size-9 -skew-x-6 place-items-center bg-red-600 text-lg font-black sm:size-10 sm:text-xl">S</span>
            <span className="hidden text-lg font-black uppercase tracking-[-0.02em] min-[360px]:inline">Success<span className="text-red-600">Gym</span></span>
          </Link>
          <Link to="/" className="text-[.65rem] font-black uppercase tracking-[.12em] text-zinc-300 transition hover:text-white sm:text-xs sm:tracking-[.16em]">← Back <span className="hidden min-[390px]:inline">to the gym</span></Link>
        </div>
      </header>

      <section className="border-b border-white/10 bg-[#0c0c0c]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-28">
          <p className="text-xs font-black uppercase tracking-[.25em] text-red-500">12 specialists · One team</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[.88] tracking-[-.055em] min-[390px]:text-6xl sm:text-8xl">Meet your<br /><span className="text-red-600">coaches.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">Find the right specialist for your goals—from Muay Thai and bodybuilding to yoga, sports therapy, mobility, and performance.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coaches.map((coach, index) => (
            <article id={coach.id} key={coach.id} className="flex scroll-mt-24 flex-col overflow-hidden border border-white/10 bg-[#0d0d0d]">
              <a href={coach.image} target="_blank" rel="noreferrer" className="group relative block aspect-square overflow-hidden bg-zinc-900" aria-label={`Open ${coach.name}'s full coaching and pricing card`}>
                <img src={coach.image} alt={`${coach.name}, ${coach.role} at Success Gym Samui`} className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-[1.025]" loading="lazy" />
                <span className="absolute left-4 top-4 bg-black/75 px-3 py-2 text-xs font-black text-white/70 backdrop-blur">{String(index + 1).padStart(2, '0')}</span>
                <span className="absolute bottom-4 right-4 bg-white px-3 py-2 text-[.65rem] font-black uppercase tracking-wider text-black opacity-0 transition group-hover:opacity-100">View full card ↗</span>
              </a>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-xs font-black uppercase tracking-[.22em] text-red-500">{coach.role}</p>
                <h2 className="mt-3 text-3xl font-black uppercase tracking-[-.04em]">{coach.name}</h2>
                <p className="mt-4 flex-1 text-base leading-7 text-zinc-400">{coach.introduction}</p>
                <div className="mt-6 flex flex-wrap gap-2" aria-label={`${coach.name} specialties`}>
                  {coach.focus.map((item) => <span key={item} className="border border-white/15 px-3 py-2 text-[.65rem] font-bold uppercase tracking-wider text-zinc-300">{item}</span>)}
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-zinc-500">Languages · {coach.languages.join(' · ')}</p>
                <a href={`https://wa.me/${coach.phone}`} target="_blank" rel="noreferrer" className="mt-5 block bg-red-600 px-5 py-3.5 text-center text-xs font-black uppercase tracking-wider transition hover:bg-red-500">Contact on WhatsApp →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 sm:pb-24">
        <div className="bg-red-600 p-6 sm:p-12">
          <p className="text-xs font-black uppercase tracking-[.22em] text-black/60">Not sure who to train with?</p>
          <div className="mt-3 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="text-3xl font-black uppercase leading-none tracking-[-.04em] min-[390px]:text-4xl sm:text-5xl">Come in and meet the team.</h2>
            <Link to="/#visit" className="w-fit bg-black px-7 py-4 text-sm font-black uppercase tracking-wider">Visit SuccessGym →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
