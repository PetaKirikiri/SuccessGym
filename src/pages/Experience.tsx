import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const areas = [
  { number: '01', name: 'Success Gym', photo: 'Gym facility photography' },
  { number: '02', name: 'Pilates studio', photo: 'Pilates studio photography' },
  { number: '03', name: 'Padel courts', photo: 'Padel courts and coaching photography' },
  { number: '04', name: 'Upstairs group classes', photo: 'Wide class-in-progress photography' },
  { number: '05', name: 'Eatery', photo: 'Food and premises photography' },
  { number: '06', name: 'Coffee shop', photo: 'Coffee, bar, and social-space photography' },
]

export default function Experience() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Experience Page Preview | Success Gym Samui'
    return () => { document.title = previousTitle }
  }, [])

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <header className="border-b border-white/10 bg-black">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Success Gym home">
            <span className="grid size-9 -skew-x-6 place-items-center bg-red-600 text-lg font-black sm:size-10 sm:text-xl">S</span>
            <span className="text-base font-black uppercase sm:text-lg">Success<span className="text-red-600">Gym</span></span>
          </Link>
          <Link to="/" className="text-xs font-black uppercase tracking-wider text-zinc-300">← Back to homepage</Link>
        </div>
      </header>

      <section className="border-b border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-black uppercase tracking-[.25em] text-red-500">Private page structure · Not linked from the homepage</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[.88] tracking-[-.055em] min-[390px]:text-6xl sm:text-8xl">Experience<br /><span className="text-red-600">page.</span></h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article key={area.name} className="overflow-hidden border border-white/10 bg-[#0d0d0d]">
              <div className="grid aspect-[4/3] place-items-center bg-[linear-gradient(135deg,#18181b,#09090b)] p-8 text-center">
                <p className="max-w-xs text-xs font-black uppercase tracking-[.2em] text-zinc-600">Photo position<br /><span className="mt-2 block text-zinc-400">{area.photo}</span></p>
              </div>
              <div className="flex items-end justify-between gap-4 border-t border-white/10 p-6">
                <h2 className="text-2xl font-black uppercase tracking-tight">{area.name}</h2>
                <span className="text-xs font-black text-red-500">{area.number}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
