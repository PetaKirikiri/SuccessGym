const facilities = [
  { number: '01', title: 'Strength floor', detail: 'Premium racks, platforms, free weights, and machines for serious, progressive training.' },
  { number: '02', title: 'Functional turf', detail: 'A dedicated open zone for sled work, athletic conditioning, mobility, and movement.' },
  { number: '03', title: 'Cardio zone', detail: 'Modern cardio equipment for warm-ups, conditioning sessions, and endurance work.' },
]

const coaches = [
  { initials: 'ST', name: 'Strength Training', role: 'Build power & confidence', detail: 'Structured coaching built around sound technique and steady progression.' },
  { initials: 'PF', name: 'Personal Fitness', role: 'Training made personal', detail: 'One-to-one guidance shaped around your experience, goals, and schedule.' },
  { initials: 'AC', name: 'Athletic Conditioning', role: 'Move better. Perform better.', detail: 'Focused sessions for speed, capacity, mobility, and all-round performance.' },
]

export default function App() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Success Gym home">
            <span className="grid size-10 -skew-x-6 place-items-center bg-red-600 text-xl font-black">S</span>
            <span className="text-lg font-black uppercase tracking-[-0.02em]">Success<span className="text-red-600">Gym</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wider md:flex" aria-label="Main navigation">
            <a className="transition hover:text-red-500" href="#facilities">Facilities</a>
            <a className="transition hover:text-red-500" href="#coaches">Coaches</a>
          </nav>
          <a href="#visit" className="bg-red-600 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] transition hover:bg-red-500">Visit the gym</a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden pt-20">
        <img src="/success-gym-facilities.png" alt="Success Gym strength floor with racks, weights, and functional training turf" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.94)_0%,rgba(0,0,0,.72)_42%,rgba(0,0,0,.18)_75%),linear-gradient(0deg,#070707_0%,transparent_35%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
          <p className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-red-500"><span className="h-px w-10 bg-red-600" />Your strongest starts here</p>
          <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.83] tracking-[-0.065em] sm:text-8xl lg:text-[7.5rem]">Train with<br /><span className="text-red-600">purpose.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">A fully equipped training space and expert coaches, built to help you get stronger, move better, and keep progressing.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#facilities" className="bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-wider transition hover:bg-red-500">Explore our gym <span aria-hidden="true">→</span></a>
            <a href="#coaches" className="border border-white/30 bg-black/20 px-7 py-4 text-sm font-black uppercase tracking-wider transition hover:border-white">Meet the coaches</a>
          </div>
        </div>
      </section>

      <section id="facilities" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">The facility</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[.9] tracking-[-0.05em] sm:text-6xl">Everything you need<br /><span className="text-zinc-600">to put in the work.</span></h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-zinc-400 lg:justify-self-end">From your first session to your next personal best, our gym gives you room, equipment, and an atmosphere made for focused training.</p>
        </div>
        <div className="mt-16 grid overflow-hidden border border-white/10 md:grid-cols-3">
          {facilities.map((item) => (
            <article key={item.title} className="group border-b border-white/10 p-8 transition hover:bg-red-600 md:border-b-0 md:border-r last:border-0 sm:p-10">
              <span className="text-sm font-black text-red-500 group-hover:text-white/70">{item.number}</span>
              <h3 className="mt-16 text-2xl font-black uppercase tracking-tight">{item.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400 group-hover:text-white/80">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="coaches" className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">Expert coaching</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[.9] tracking-[-0.05em] sm:text-6xl">Good coaches change<br /><span className="text-red-600">everything.</span></h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">Get clear direction, thoughtful programming, and the kind of accountability that keeps your training moving forward.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {coaches.map((coach) => (
              <article key={coach.name} className="relative overflow-hidden border border-white/10 bg-black p-7">
                <div className="mb-10 grid aspect-[4/3] place-items-center bg-[radial-gradient(circle_at_50%_35%,#3f3f46,transparent_32%),linear-gradient(135deg,#171717,#050505)]">
                  <span className="text-6xl font-black tracking-[-.08em] text-red-600/90">{coach.initials}</span>
                </div>
                <p className="text-xs font-black uppercase tracking-[.2em] text-red-500">{coach.role}</p>
                <h3 className="mt-3 text-2xl font-black uppercase">{coach.name}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{coach.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="relative overflow-hidden bg-red-600 px-7 py-14 sm:px-14 sm:py-16">
          <div className="absolute -right-16 -top-32 size-80 rounded-full border-[50px] border-black/10" />
          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div><p className="text-xs font-black uppercase tracking-[.25em] text-black/60">Come see for yourself</p><h2 className="mt-3 text-5xl font-black uppercase leading-none tracking-[-.05em] sm:text-6xl">Your next session<br />starts here.</h2></div>
            <a href="mailto:hello@successgym.com" className="w-fit bg-black px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-zinc-900">Contact the gym →</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-sm text-zinc-500 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row"><p>© {new Date().getFullYear()} SuccessGym</p><p>Train with purpose.</p></div>
      </footer>
    </main>
  )
}
