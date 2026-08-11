import { Link, Route, Routes } from 'react-router-dom'
import { coaches } from './data/coaches'
import Coaches from './pages/Coaches'

const experiences = [
  { number: '01', title: 'Premium training', detail: 'High-quality equipment and dedicated spaces for strength, functional training, and cardio.' },
  { number: '02', title: 'Expert coaching', detail: 'Professional personal trainers and specialist coaches to help you train safely and achieve measurable results.' },
  { number: '03', title: 'Signature classes', detail: 'Pilates, yoga, Muay Thai, and fitness programs for different goals, interests, and ability levels.' },
  { number: '04', title: 'Performance', detail: 'Goal-led programs for beginners, athletes, and competitors, built around sustainable long-term progress.' },
  { number: '05', title: 'Wellness & recovery', detail: 'Sauna and recovery-focused services to help your body reset, rebuild, and perform at its best.' },
  { number: '06', title: 'Muscle Bistro', detail: 'Thoughtfully prepared, fitness-focused meals to fuel your training, recovery, and everyday life.' },
]

function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Success Gym home">
            <span className="grid size-9 -skew-x-6 place-items-center bg-red-600 text-lg font-black sm:size-10 sm:text-xl">S</span>
            <span className="text-base font-black uppercase tracking-[-0.02em] sm:text-lg">Success<span className="text-red-600">Gym</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wider md:flex" aria-label="Main navigation">
            <a className="transition hover:text-red-500" href="#experience">Experience</a>
            <a className="transition hover:text-red-500" href="#community">Community</a>
            <Link className="transition hover:text-red-500" to="/coaches">Coaches</Link>
          </nav>
          <a href="#visit" className="bg-red-600 px-4 py-2.5 text-[.65rem] font-black uppercase tracking-[0.12em] transition hover:bg-red-500 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.16em]"><span className="sm:hidden">Visit</span><span className="hidden sm:inline">Visit the gym</span></a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[88svh] items-end overflow-hidden pt-16 sm:min-h-[92vh] sm:pt-20">
        <img src="/success-gym-facilities.png" alt="Success Gym strength floor with racks, weights, and functional training turf" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.94)_0%,rgba(0,0,0,.72)_42%,rgba(0,0,0,.18)_75%),linear-gradient(0deg,#070707_0%,transparent_35%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 sm:px-8 sm:pb-28">
          <p className="mb-4 flex items-center gap-2 text-[.65rem] font-black uppercase tracking-[0.2em] text-red-500 sm:mb-5 sm:gap-3 sm:text-xs sm:tracking-[0.28em]"><span className="h-px w-7 bg-red-600 sm:w-10" />Success Gym Samui</p>
          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.055em] min-[390px]:text-6xl sm:text-8xl lg:text-[7.1rem]">More than<br />a <span className="text-red-600">gym.</span></h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-200 sm:mt-7 sm:text-lg sm:leading-7">A complete fitness and wellness experience in Koh Samui—world-class training, expert coaching, recovery, and nutrition under one roof.</p>
          <div className="mt-7 grid gap-2 min-[390px]:grid-cols-2 sm:mt-9 sm:flex sm:flex-wrap sm:gap-3">
            <a href="#experience" className="bg-red-600 px-4 py-3.5 text-center text-xs font-black uppercase tracking-wider transition hover:bg-red-500 sm:px-7 sm:py-4 sm:text-sm">Explore the experience <span aria-hidden="true">→</span></a>
            <Link to="/coaches" className="border border-white/30 bg-black/30 px-4 py-3.5 text-center text-xs font-black uppercase tracking-wider transition hover:border-white sm:px-7 sm:py-4 sm:text-sm">Meet the coaches</Link>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">Why Success Gym</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[.92] tracking-[-0.045em] min-[390px]:text-5xl sm:text-6xl">Everything you need<br /><span className="text-zinc-600">to progress.</span></h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-zinc-400 lg:justify-self-end">Whether you want to build strength, transform your physique, improve performance, or live a healthier life, you can train, recover, and refuel in one place.</p>
        </div>
        <div className="mt-10 grid overflow-hidden border border-white/10 sm:mt-16 md:grid-cols-3">
          {experiences.map((item) => (
            <article key={item.title} className="group border-b border-white/10 p-6 transition hover:bg-red-600 md:border-b-0 md:border-r last:border-0 sm:p-10">
              <span className="text-sm font-black text-red-500 group-hover:text-white/70">{item.number}</span>
              <h3 className="mt-8 text-2xl font-black uppercase tracking-tight sm:mt-16">{item.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400 group-hover:text-white/80">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="community" className="border-y border-white/10 bg-red-600 text-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <p className="text-xs font-black uppercase tracking-[.25em] text-black/60">A community that inspires</p>
          <div>
            <h2 className="text-4xl font-black uppercase leading-[.9] tracking-[-.05em] min-[390px]:text-5xl sm:text-6xl">Stronger together.<br />Welcome in.</h2>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-black/70">Locals, long-term residents, travelers, athletes, and fitness enthusiasts come together here. More than a place to work out, Success Gym is a community built around positive energy and shared progress.</p>
          </div>
        </div>
      </section>

      <section id="coaches" className="border-b border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">Expert coaching</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[.92] tracking-[-0.045em] min-[390px]:text-5xl sm:text-6xl">Good coaches change<br /><span className="text-red-600">everything.</span></h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">Get clear direction, thoughtful programming, and the kind of accountability that keeps your training moving forward.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
            {coaches.slice(0, 3).map((coach) => (
              <article key={coach.name} className="relative overflow-hidden border border-white/10 bg-black p-5 sm:p-7">
                <div className="relative mb-7 aspect-square overflow-hidden bg-zinc-900 sm:mb-10">
                  <img src={coach.image} alt={`${coach.name} — ${coach.role}`} className="absolute inset-0 size-full object-cover" />
                </div>
                <p className="text-xs font-black uppercase tracking-[.2em] text-red-500">{coach.role}</p>
                <h3 className="mt-3 text-2xl font-black uppercase">{coach.name}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{coach.introduction}</p>
                <Link to={`/coaches#${coach.id}`} className="mt-6 inline-block text-xs font-black uppercase tracking-wider text-white transition hover:text-red-500">View profile →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-28">
        <div className="relative overflow-hidden bg-red-600 px-6 py-10 sm:px-14 sm:py-16">
          <div className="absolute -right-16 -top-32 size-80 rounded-full border-[50px] border-black/10" />
          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div><p className="text-xs font-black uppercase tracking-[.25em] text-black/60">Train. Perform. Recover. Transform.</p><h2 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-.05em] min-[390px]:text-5xl sm:text-6xl">Your complete fitness<br />destination.</h2></div>
            <a href="mailto:hello@successgym.com" className="w-fit bg-black px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-zinc-900">Contact the gym →</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-sm text-zinc-500 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row"><p>© {new Date().getFullYear()} Success Gym Samui</p><p>Koh Samui, Thailand · Train. Perform. Recover. Transform.</p></div>
      </footer>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coaches" element={<Coaches />} />
    </Routes>
  )
}
