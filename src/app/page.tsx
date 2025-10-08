// Netflix-like Dashboard with Dark Mode — Next.js + Tailwind
// IMPORTANT: In tailwind.config.js set:  module.exports = { darkMode: 'class', ... }
// Save as app/page.tsx or components/NetflixDashboard.tsx

"use client";

import { useState } from "react";

export default function NetflixDashboard() {
  const [search, setSearch] = useState("");
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-[#F6F7FB] text-gray-900 dark:bg-[#0D1117] dark:text-gray-100">
        {/* --- Layout shell --- */}
        <div className="mx-auto max-w-[1360px] px-4 py-6 grid grid-cols-[260px_1fr_84px] gap-6 h-screen">
          {/* Left Sidebar */}
          <aside className="rounded-3xl bg-white/80 backdrop-blur shadow-sm border border-black/5 flex flex-col dark:bg-white/5 dark:border-white/10 dark:shadow-none sticky top-6 h-[calc(100vh-3rem)] overflow-hidden">
            <div className="flex items-center gap-2 px-6 py-5 border-b border-black/5 dark:border-white/10">
              <div className="w-6 h-6 rounded bg-red-500" />
              <span className="font-semibold text-lg">Netflix</span>
              <span className="text-red-500">.</span>
            </div>

            <nav className="px-3 py-4 text-sm">
              <SectionLabel>Menu</SectionLabel>
              <SidebarItem active icon="🏠" label="Browse" />
              <SidebarItem icon="❤️" label="Watchlist" />
              <SidebarItem icon="⏳" label="Coming soon" />

              <SectionLabel>Social</SectionLabel>
              <SidebarItem icon="👥" label="Friends" />
              <SidebarItem icon="🎉" label="Parties" />

              <SectionLabel>General</SectionLabel>
              <SidebarItem icon="⚙️" label="Settings" />
              <SidebarItem icon="↩️" label="Log out" />
            </nav>

            <div className="mt-auto p-4">
              <div className="rounded-2xl bg-[#EEF2FF] p-4 dark:bg-white/10">
                <div className="w-12 h-12 rounded-full bg-white grid place-content-center text-2xl mb-2 dark:bg-white/20">🍿</div>
                <div className="text-sm font-semibold">Popcorn Addict</div>
                <div className="text-xs text-gray-500 mb-3 dark:text-gray-300/70">4/6h viewing time</div>
                <button className="w-full rounded-xl bg-[#8BA4FF] text-white text-sm py-2 font-medium">View challenges</button>
              </div>
            </div>
          </aside>

          {/* Main Column */}
          <main className="space-y-6 h-[calc(100vh-3rem)] overflow-y-auto pr-2">
            {/* Top bar */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <RoundBtn>❮</RoundBtn>
                <RoundBtn>❯</RoundBtn>
              </div>
              <div className="flex-1 relative max-w-[600px] mx-3">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search…"
                  className="w-full h-12 pl-12 pr-12 rounded-2xl bg-white/80 border border-black/5 shadow-sm focus:outline-none dark:bg-white/10 dark:border-white/10 dark:text-gray-100"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2">🔎</div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2">🔔</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsDark((v) => !v)}
                  className="px-3 h-10 rounded-xl bg-white border border-black/5 shadow-sm text-sm font-medium dark:bg-white/10 dark:border-white/10 dark:shadow-none"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? "Light" : "Dark"}
                </button>
                <UserBadge />
              </div>
            </div>

            {/* Hero banner */}
            <section className="relative h-[320px] rounded-3xl overflow-hidden shadow-sm border border-black/5 bg-slate-900 dark:border-white/10 dark:shadow-none">
              <img
                alt="Terror"
                src="https://4.bp.blogspot.com/-XSn3TnCl9Hw/UchIsN1nYWI/AAAAAAAAGD0/fTmvTecY8TI/s1600/Descargar+Pack+Fondos+de+escritorio+Animacion+HD+(341).jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-slate-900/20 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8 gap-4">
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <Badge>10XP / episode</Badge>
                  <AvatarRow count={4} />
                  <span className="hidden sm:inline">+5 friends are watching</span>
                </div>
                <h1 className="text-white text-4xl sm:text-5xl font-bold">Terror</h1>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span>98% Match</span>
                  <span>•</span>
                  <span>2 seasons</span>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <button className="rounded-2xl bg-red-600 text-white px-5 py-2.5 font-semibold shadow">Watch</button>
                  <button className="rounded-2xl bg-white/20 text-white px-4 py-2.5 backdrop-blur border border-white/20">＋</button>
                </div>
              </div>

              {/* Miniature preview cards */}
              <div className="absolute right-6 bottom-6 hidden md:flex items-center gap-3">
                <MiniCard
                  img="https://4.bp.blogspot.com/-XSn3TnCl9Hw/UchIsN1nYWI/AAAAAAAAGD0/fTmvTecY8TI/s1600/Descargar+Pack+Fondos+de+escritorio+Animacion+HD+(341).jpg"
                  selected
                />
                <MiniCard img="https://i.pinimg.com/originals/aa/5d/70/aa5d706b09687f04724c3fdc7ec3b72c.jpg" />
                <MiniCard img="https://i.pinimg.com/originals/20/4f/7d/204f7d2cad676b8294acb13031b724b1.jpg" />
              </div>
            </section>

            {/* Parties */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold">Parties</h2>
                <div className="w-24 h-2 rounded-full bg-gray-200 relative dark:bg-white/10">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-4 h-4 rounded-full bg-gray-300 border border-black/10 dark:bg-white/20 dark:border-white/10" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <PartyCard title="Cadaver" subtitle="Horror marathon!" avatars={3} icon="🧟" tint="bg-amber-50 dark:bg-white/5" />
                <PartyCard title="Bladerunner 2049" subtitle="Sci fi binge" avatars={4} icon="🟧" tint="bg-indigo-50 dark:bg-white/5" active />
                <PartyCard title="Monsters Inc." subtitle="Don't make me grow up" avatars={5} icon="🌊" tint="bg-cyan-50 dark:bg-white/5" />
                <PartyCard title="Friends" subtitle="We were on a break!" avatars={6} icon="📺" tint="bg-pink-50 dark:bg-white/5" />
              </div>
            </section>

            {/* Continue watching */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">Continue watching</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ContinueCard
                  img="https://m.media-amazon.com/images/S/pv-target-images/53dc71cee5197679ac5f73aa38821a877dccb6a6bc858b0a113440e20209deb9._UR1920,1080_SX720_FMjpg_.jpg"
                  title="Ouija"
                  xp="10XP"
                  progress={62}
                />
                <ContinueCard
                  img="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
                  title="Ratched"
                  xp="10XP"
                  progress={28}
                />
                <ContinueCard
                  img="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop"
                  title="El Camino"
                  xp="40XP"
                  progress={78}
                />
                <ContinueCard
                  img="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop"
                  title="Stranger Things"
                  xp="10XP"
                  progress={51}
                />
              </div>
            </section>
          </main>

          {/* Right Sidebar */}
          <aside className="flex flex-col items-center gap-4 sticky top-6 h-[calc(100vh-3rem)]">
            <button className="mt-1 rounded-full w-12 h-12 bg-red-500 text-white text-2xl shadow">＋</button>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="relative">
                <img
                  alt="avatar"
                  src={`https://i.pravatar.cc/88?img=${i + 10}`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                {i % 3 === 0 && (
                  <span className="absolute -right-0 -bottom-0 w-3 h-3 rounded-full bg-green-500 ring-2 ring-white" />
                )}
              </div>
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
}

// ——— Reusable Components ——— //
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="px-3 pt-3 pb-2 text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-300/70">{children}</div>;
}

function SidebarItem({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-sm transition ${
        active ? "bg-gray-100 font-semibold dark:bg-white/10" : "hover:bg-gray-50 dark:hover:bg-white/5"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function RoundBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm grid place-content-center dark:bg-white/10 dark:border-white/10 dark:shadow-none">{children}</button>
  );
}

function UserBadge() {
  return (
    <div className="flex items-center gap-3 bg-white/80 border border-black/5 rounded-2xl px-3 py-2 shadow-sm dark:bg-white/10 dark:border-white/10 dark:shadow-none">
      <img
        alt="user"
        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop"
        className="w-9 h-9 rounded-full object-cover"
      />
      <div className="leading-tight">
        <div className="text-sm font-semibold">Ramona F.</div>
        <div className="text-[11px] text-gray-500 dark:text-gray-300/70">Level 12</div>
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/20 text-white border border-white/30 backdrop-blur">
      {children}
    </span>
  );
}

function AvatarRow({ count = 3 }: { count?: number }) {
  return (
    <div className="flex -space-x-2">
      {Array.from({ length: count }).map((_, i) => (
        <img
          key={i}
          className="w-6 h-6 rounded-full border border-white/50"
          src={`https://i.pravatar.cc/48?img=${i + 2}`}
          alt="avatar"
        />
      ))}
    </div>
  );
}

function MiniCard({ img, selected }: { img?: string; selected?: boolean }) {
  return (
    <div
      className={`w-24 h-16 rounded-xl overflow-hidden bg-white/20 border ${
        selected ? "border-red-500 ring-2 ring-red-400" : "border-white/20"
      } shadow-md grid place-content-center text-white font-bold`}
    >
      {img && <img src={img} className="w-full h-full object-cover" alt="mini" />}
    </div>
  );
}

function PartyCard({ title, subtitle, avatars, icon, tint, active }: { title: string; subtitle: string; avatars: number; icon: string; tint: string; active?: boolean }) {
  return (
    <div className={`rounded-3xl p-5 border border-black/5 shadow-sm ${tint} ${active ? "ring-2 ring-indigo-300" : ""} dark:border-white/10 dark:shadow-none`}>
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl grid place-content-center text-xl bg-white shadow-sm dark:bg-white/10 dark:shadow-none">{icon}</div>
        <AvatarRow count={Math.min(avatars, 5)} />
      </div>
      <div className="mt-8">
        <div className="font-semibold">{title}</div>
        <div className="text-xs text-gray-500 dark:text-gray-300/70">{subtitle}</div>
      </div>
    </div>
  );
}

function ContinueCard({ img, title, xp, progress }: { img: string; title: string; xp: string; progress: number }) {
  return (
    <div className="rounded-3xl overflow-hidden bg-white border border-black/5 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none">
      <div className="relative h-40">
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute left-3 top-3 text-xs font-semibold rounded-md bg-white/90 px-2 py-1 shadow dark:bg-black/60 dark:text-white">{xp}</div>
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold mb-2 line-clamp-1">{title}</div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-white/10">
          <div className="h-full bg-red-500" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

