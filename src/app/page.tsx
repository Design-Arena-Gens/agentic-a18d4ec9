"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  fellowships,
  featuredWorks,
  publications,
  researchThemes,
  signals,
} from "@/data/content";
import { MagneticButton } from "@/components/magnetic-button";
import { NeuralBackground } from "@/components/neural-background";

const easeCurve = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: easeCurve },
};

const pageDelay = (index: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: 0.12 * index },
});

const stats = [
  { label: "Years decoding neural systems", value: "12" },
  { label: "Peer-reviewed publications", value: "37" },
  { label: "Immersive installations", value: "18" },
  { label: "In-progress collaborations", value: "9" },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden pb-32">
      <NeuralBackground />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white/5 via-transparent to-black" />

      <header className="relative w-full pt-14">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="flex flex-col gap-1 text-sm uppercase tracking-[0.32em] text-slate-200/70"
          >
            <span>Dr. Elara Voss</span>
            <span className="text-xs tracking-[0.42em] text-slate-200/50">
              Computational Neuroscience · Neuroaesthetics
            </span>
          </motion.div>
          <MagneticButton href="#contact" icon={<span>✶</span>}>
            Initiate Contact
          </MagneticButton>
        </div>
      </header>

      <main className="relative w-full">
        <section className="relative mx-auto grid w-full max-w-6xl items-end gap-16 px-6 pb-24 pt-24 md:grid-cols-[1.2fr_1fr] lg:px-8 lg:pb-28 lg:pt-28">
          <motion.div
            {...pageDelay(1)}
            className="relative flex flex-col gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-neural-edge backdrop-blur-2xl"
          >
            <div className="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-slate-200/80">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-soft" />
              Cognitive Interfaces Lab
            </div>
            <div className="space-y-5">
              <h1 className="font-display text-4xl leading-[1.15] text-white md:text-5xl lg:text-6xl">
                Crafting ambient intelligences that translate neural waves into
                restorative human experiences.
              </h1>
              <p className="max-w-2xl text-lg text-slate-200/75 md:text-xl">
                My research converges adaptive computation, immersive design, and
                affective neuroscience to illuminate how the brain orchestrates
                fluid states of focus, creativity, and calm. I design humane systems
                where neural data breathes into spatial, sonic, and visual forms.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="relative"
                  {...pageDelay(2 + index)}
                >
                  <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/4 via-white/2 to-white/[0.02] p-5 backdrop-blur">
                    <span className="text-4xl font-semibold text-white">
                      {item.value}
                    </span>
                    <p className="mt-2 text-xs uppercase tracking-[0.32em] text-slate-200/60">
                      {item.label}
                    </p>
                    <motion.span
                      className="pointer-events-none absolute inset-x-2 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      animate={{ opacity: [0.25, 0.66, 0.25] }}
                      transition={{
                        duration: 6 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...pageDelay(3)}
            className="relative flex h-full flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-slate-200/70">
                <span className="inline-flex h-2 w-2 animate-pulse-soft rounded-full bg-emerald-300" />
                Currently
              </div>
              <div className="space-y-5">
                <p className="font-display text-2xl text-white">
                  Leading the Ambient Neurointerfaces Initiative at the Symbio City
                  Lab, Berlin.
                </p>
                <p className="text-sm text-slate-200/70">
                  Collaborating with architects, musicians, and cognitive scientists
                  to sculpt adaptive sanctuaries that breathe with neural states.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {signals.map((signal) => (
                <div
                  key={signal.label}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-sm text-slate-200/75"
                >
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-cyan-300/80 ring-4 ring-cyan-400/15" />
                  <div>
                    <p>{signal.label}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.32em] text-slate-200/45">
                      {signal.phase}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="research"
          className="relative mx-auto w-full max-w-6xl px-6 pb-24 lg:px-8 lg:pb-28"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-12 shadow-neural-edge backdrop-blur-2xl">
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.6 }}
            >
              <div className="absolute inset-0 bg-grid opacity-20 [background-size:120px_120px]" />
            </motion.div>
            <motion.div {...pageDelay(1)} className="relative mb-12 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.46em] text-slate-200/60">
                Research Orbits
              </span>
              <h2 className="max-w-3xl font-display text-3xl text-white md:text-4xl">
                Investigations into how neural rhythms choreograph perception,
                intention, and restorative states.
              </h2>
            </motion.div>
            <div className="relative grid gap-8 md:grid-cols-3">
              {researchThemes.map((theme, index) => (
                <motion.article
                  key={theme.title}
                  {...pageDelay(2 + index)}
                  className="group relative flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors duration-700 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate-200/55">
                      <span className="h-px flex-1 bg-white/10" />
                      Vector {index + 1}
                    </div>
                    <h3 className="font-display text-2xl text-white">
                      {theme.title}
                    </h3>
                    <p className="text-sm text-slate-200/70">
                      {theme.description}
                    </p>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-200/60">
                    {theme.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="relative pl-6 transition-transform duration-500 group-hover:translate-x-1"
                      >
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-emerald-300/70 group-hover:bg-cyan-300" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-[1.7rem] border border-white/5 opacity-0 blur"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="relative mx-auto w-full max-w-6xl px-6 pb-24 lg:px-8 lg:pb-28"
        >
          <motion.div
            {...pageDelay(1)}
            className="mb-12 flex flex-col gap-4"
          >
            <span className="text-xs uppercase tracking-[0.46em] text-slate-200/60">
              Featured Systems
            </span>
            <h2 className="max-w-3xl font-display text-3xl text-white md:text-4xl">
              Living experiments where neural computation meets ambient design.
            </h2>
          </motion.div>
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredWorks.map((work, index) => (
              <motion.div
                key={work.name}
                {...pageDelay(2 + index)}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-700 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.38em] text-slate-200/55">
                    <span>{work.year}</span>
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-200/80" />
                      Active
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-white">
                    {work.name}
                  </h3>
                  <p className="text-sm text-slate-200/70">{work.description}</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.32em] text-slate-200/50">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1 transition duration-500 group-hover:border-cyan-300/40 group-hover:text-cyan-200/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/10 via-white/0 to-transparent opacity-0 transition duration-700 group-hover:opacity-100"
                />

                <Link
                  href={work.link}
                  className="mt-8 inline-flex items-center gap-2 text-sm text-slate-200/70 transition duration-500 hover:text-cyan-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore interface
                  <motion.span
                    aria-hidden
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ↗
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="publications"
          className="relative mx-auto w-full max-w-6xl px-6 pb-24 lg:px-8 lg:pb-28"
        >
          <motion.div
            {...pageDelay(1)}
            className="mb-12 flex flex-col gap-4"
          >
            <span className="text-xs uppercase tracking-[0.46em] text-slate-200/60">
              Selected Publications
            </span>
            <h2 className="max-w-2xl font-display text-3xl text-white md:text-4xl">
              Peer-reviewed work revealing the choreography of neural flow states.
            </h2>
          </motion.div>
          <div className="space-y-6">
            {publications.map((paper, index) => (
              <motion.div
                key={paper.title}
                {...pageDelay(2 + index)}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-6 transition duration-700 hover:border-cyan-300/40 hover:bg-white/[0.06]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-slate-200/50">
                      {paper.venue}
                    </p>
                    <h3 className="mt-3 max-w-3xl font-display text-2xl text-white">
                      {paper.title}
                    </h3>
                  </div>
                  <Link
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.36em] text-slate-200/70 transition duration-500 hover:border-cyan-200/40 hover:text-cyan-200"
                  >
                    Read
                    <span aria-hidden className="text-lg leading-none">
                      ↗
                    </span>
                  </Link>
                </div>
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0"
                  animate={{ opacity: [0, 0.35, 0] }}
                  transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="honors"
          className="relative mx-auto w-full max-w-6xl px-6 pb-24 lg:px-8 lg:pb-28"
        >
          <motion.div
            {...pageDelay(1)}
            className="grid gap-12 rounded-3xl border border-white/10 bg-white/[0.03] p-12 shadow-neural-edge backdrop-blur-2xl md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.46em] text-slate-200/60">
                Fellowships & Residencies
              </span>
              <div className="space-y-6">
                {fellowships.map((item, index) => (
                  <motion.div
                    key={item.label}
                    {...pageDelay(2 + index)}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-slate-200/70 transition duration-700 hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <span className="text-xs uppercase tracking-[0.4em] text-slate-200/45">
                      {item.year}
                    </span>
                    <p className="font-display text-xl text-white">{item.label}</p>
                    <span className="text-xs uppercase tracking-[0.36em] text-slate-200/50">
                      {item.org}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-10 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.22),transparent_65%)] p-10">
              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase tracking-[0.46em] text-slate-200/60">
                  Method Notes
                </span>
                <h3 className="font-display text-3xl text-white">
                  Research methodologies blending computational precision with
                  sensory intuition.
                </h3>
                <p className="text-sm text-slate-200/70">
                  I craft custom tooling that respects the delicacy of neural data:
                  spatially aware decoders, temporal morphologies, and human-centered
                  interfaces that translate signals into meaning-rich experiences.
                </p>
              </div>
              <div className="space-y-4 text-sm text-slate-200/65">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  <p>Latent space cartography for neural population drift</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  <p>Multi-sensory prototyping for restorative adaptive media</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-300" />
                  <p>Ethical frameworks for affective signal design</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer
        id="contact"
        className="relative mx-auto mt-16 w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] px-6 py-16 text-center shadow-neural-edge backdrop-blur-2xl lg:px-8"
      >
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-400/20 via-transparent to-emerald-300/25 opacity-50"
          animate={{ opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.h2
          {...pageDelay(1)}
          className="mx-auto max-w-3xl font-display text-4xl text-white md:text-5xl"
        >
          Let&apos;s craft neural futures that feel as gentle as they are
          intelligent.
        </motion.h2>
        <motion.p
          {...pageDelay(2)}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-200/70"
        >
          I collaborate with research labs, cultural institutions, and artists to
          shape adaptive experiences. Share your question, your curiosity, or your
          dream project.
        </motion.p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <MagneticButton href="mailto:elara@synapticstudio.org">
            elara@synapticstudio.org
          </MagneticButton>
          <MagneticButton href="https://cal.com/elara-voss/45" icon={<span>◎</span>}>
            Schedule a Session
          </MagneticButton>
        </div>
        <motion.div
          {...pageDelay(3)}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.38em] text-slate-200/50"
        >
          <span>Berlin · MIT CSAIL Visiting Scholar</span>
          <span className="hidden md:block">|</span>
          <span>Sonic Residencies · Immersive Neuroaesthetics</span>
        </motion.div>
      </footer>
    </div>
  );
}
