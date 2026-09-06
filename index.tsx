import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import valorantImg from "@/assets/valorant.jpg";
import minecraftImg from "@/assets/minecraft.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday Shikhar — Bhaichara Wala Dost" },
      { name: "description", content: "A legendary birthday tribute for Shikhar — 10+ years of professional friendship, Valorant clutches and Minecraft builds." },
    ],
  }),
  component: Index,
});

const STATS = [
  { label: "Years of Experience", value: "10+", sub: "Professional Dosti" },
  { label: "Valorant Clutches", value: "∞", sub: "1v5 Specialist" },
  { label: "Minecraft Worlds", value: "47", sub: "All Griefed Once" },
  { label: "Loyalty Level", value: "MAX", sub: "Bhaichara Certified" },
];

const SKILLS = [
  { name: "Bhaichara Management", level: 100 },
  { name: "Valorant Aiming", level: 92 },
  { name: "Minecraft Architecture", level: 88 },
  { name: "Late Night Bakchodi", level: 99 },
  { name: "Emergency Revive Calls", level: 95 },
];

const VALORANT_MOMENTS = [
  { title: "The 1v5 Ace", desc: "Last man standing. 12 HP. Full squad push. Shikhar said 'watch this' — and we all watched history." },
  { title: "Operator God Mode", desc: "One Op. Five headshots. The enemy team reported him twice in the same match." },
  { title: "The Clutch Call", desc: "'Rotate B. Trust me.' We rotated. We won. We never questioned him again." },
];

const MINECRAFT_MOMENTS = [
  { title: "The Mega Base", desc: "Three weeks, 40,000 blocks, zero sleep. The base had a base. It was beautiful." },
  { title: "Creeper Incident", desc: "He heard the hiss a second too late. The storage room never recovered. RIP diamonds." },
  { title: "Nether Rescue Op", desc: "Lost in the Nether at 3 AM. Shikhar came with a compass, a stack of cobblestone and zero fear." },
];

const TIMELINE = [
  { year: "Year 1", text: "Two strangers. One lobby. Instant bhaichara unlocked." },
  { year: "Year 3", text: "Ranked grind era. Wins, losses, and voice chat that never went silent." },
  { year: "Year 5", text: "Survived exams, jobs and server lag — together. Half a decade of dosti." },
  { year: "Year 7", text: "The legendary all-nighter Minecraft build. Villagers still talk about it." },
  { year: "Year 10", text: "A decade of bhaichara. Professional level friendship. Still queuing up." },
  { year: "Today", text: "Happy Birthday, Shikhar. Level up, legend. 🎂" },
];

function Index() {
  const [burst, setBurst] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground bg-grid">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_60%)]" />
        <p className="font-display mb-4 text-sm tracking-[0.5em] text-primary uppercase">
          Match Found · Party of Legends
        </p>
        <h1 className="font-display text-glow-red text-5xl font-black leading-tight sm:text-7xl md:text-8xl">
          HAPPY BIRTHDAY
          <span className="mt-2 block text-primary">SHIKHAR</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
          To the <span className="text-accent font-semibold">bhaichara wala dost</span> — a
          10+ year experienced professional in friendship, clutches and late-night chaos.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#profile" className="font-display rounded-md bg-primary px-8 py-3 text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-105">
            View Player Profile
          </a>
          <button onClick={() => setBurst(true)} className="font-display rounded-md border border-accent px-8 py-3 text-sm font-bold tracking-widest text-accent uppercase transition-transform hover:scale-105">
            🎉 Celebrate
          </button>
        </div>
        {burst && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="absolute animate-ping text-2xl"
                style={{ transform: `rotate(${i * 15}deg) translateY(-${120 + (i % 5) * 40}px)`, animationDuration: `${1 + (i % 4) * 0.4}s` }}>
                {["🎂", "🔥", "⭐", "🎮"][i % 4]}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* PLAYER PROFILE */}
      <section id="profile" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display mb-2 text-3xl font-bold uppercase tracking-wide sm:text-4xl">
          Player <span className="text-primary">Profile</span>
        </h2>
        <p className="mb-12 text-muted-foreground">Verified professional · 10+ years experience · Bhaichara Division</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-6 transition-transform hover:-translate-y-1">
              <p className="font-display text-4xl font-black text-primary">{s.value}</p>
              <p className="mt-2 font-semibold">{s.label}</p>
              <p className="text-sm text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-xl border border-border bg-card p-8">
          <h3 className="font-display mb-6 text-xl font-bold uppercase tracking-wide text-accent">Skill Tree</h3>
          <div className="space-y-5">
            {SKILLS.map((sk) => (
              <div key={sk.name}>
                <div className="mb-1 flex justify-between text-sm font-semibold">
                  <span>{sk.name}</span>
                  <span className="text-primary">{sk.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all" style={{ width: `${sk.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORANT */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 lg:grid-cols-2">
          <div>
            <p className="font-display mb-2 text-sm tracking-[0.4em] text-primary uppercase">Match History · File 01</p>
            <h2 className="font-display mb-6 text-3xl font-bold uppercase sm:text-4xl">The <span className="text-primary">Valorant</span> Legend</h2>
            <div className="space-y-4">
              {VALORANT_MOMENTS.map((m) => (
                <div key={m.title} className="rounded-lg border border-border bg-background p-5">
                  <h3 className="font-display font-bold text-primary">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <img src={valorantImg} alt="Shikhar's Valorant legacy artwork" loading="lazy" width={1280} height={720}
            className="rounded-xl border border-primary/30 shadow-[0_0_60px_-15px_var(--primary)]" />
        </div>
      </section>

      {/* MINECRAFT */}
      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 lg:grid-cols-2">
          <img src={minecraftImg} alt="Shikhar's Minecraft world at night" loading="lazy" width={1280} height={720}
            className="pixel-border order-last rounded-xl lg:order-first" />
          <div>
            <p className="font-display mb-2 text-sm tracking-[0.4em] text-accent uppercase">World Save · File 02</p>
            <h2 className="font-display mb-6 text-3xl font-bold uppercase sm:text-4xl">The <span className="text-accent">Minecraft</span> Architect</h2>
            <div className="space-y-4">
              {MINECRAFT_MOMENTS.map((m) => (
                <div key={m.title} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-display font-bold text-accent">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEMORY TIMELINE */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="font-display mb-2 text-center text-3xl font-bold uppercase sm:text-4xl">Memory <span className="text-primary">Log</span></h2>
          <p className="mb-14 text-center text-muted-foreground">10+ years of bhaichara, compressed into one timeline</p>
          <div className="relative space-y-10 border-l-2 border-primary/40 pl-8">
            {TIMELINE.map((t) => (
              <div key={t.year} className="relative">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background shadow-[0_0_12px_var(--primary)]" />
                <p className="font-display text-sm font-bold tracking-widest text-primary uppercase">{t.year}</p>
                <p className="mt-1 text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-display mb-4 text-sm tracking-[0.5em] text-accent uppercase">Incoming Transmission</p>
        <h2 className="font-display mb-8 text-3xl font-bold uppercase sm:text-4xl">From the <span className="text-primary">Bhaichara</span></h2>
        <blockquote className="rounded-xl border border-border bg-card p-10 text-lg leading-relaxed text-muted-foreground">
          "Shikhar bhai — 10+ saal ho gaye iss professional dosti ko. Har clutch, har build, har 3 AM ki call — sab legendary tha.
          <span className="mt-4 block font-display text-xl font-bold text-foreground">Happy Birthday, Legend. 🎮🔥</span>"
        </blockquote>
        <p className="mt-8 font-display text-xs tracking-[0.4em] text-muted-foreground uppercase">Bhaichara Forever · Est. 10+ Years Ago</p>
      </section>
    </main>
  );
}
