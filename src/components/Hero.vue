<script setup>
import { profile } from '../data/profile'
import SocialLinks from './SocialLinks.vue'
import HeroTerminal from './HeroTerminal.vue'
import AppIcon from './AppIcon.vue'

const { heroStatement, location } = profile
</script>

<template>
  <section
    class="relative overflow-hidden bg-grid pt-16 pb-20 sm:pt-20 sm:pb-28"
    aria-label="Introduction"
  >
    <div
      class="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-lime-500/10 blur-3xl dark:bg-lime-500/15"
    />
    <div
      class="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-600/15"
    />

    <div class="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <div
          v-reveal
          class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
        >
          <span
            class="relative flex h-2 w-2"
            aria-hidden="true"
          >
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"
            />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to opportunities
        </div>

        <h1
          v-reveal="{ delay: 80 }"
          class="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
        >
          YONG <span class="text-gradient">Lyhor</span>
        </h1>

        <p
          v-reveal="{ delay: 140 }"
          class="mt-3 font-mono text-sm font-medium tracking-wide text-slate-600 sm:text-base dark:text-slate-400"
        >
          Data Science Student
        </p>
        <p
          v-reveal="{ delay: 180 }"
          class="mt-1 text-sm font-medium text-lime-600 sm:text-base dark:text-lime-400"
        >
          Data Engineer • AI Engineer • Full-Stack Developer
        </p>

        <p
          v-reveal="{ delay: 240 }"
          class="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
        >
          {{ heroStatement }}
        </p>

        <div v-reveal="{ delay: 300 }" class="mt-8 flex flex-wrap items-center gap-3">
          <RouterLink to="/projects" class="btn-primary">
            View Projects
            <AppIcon name="arrowRight" :size="16" />
          </RouterLink>
          <a
            href="https://2brothers-services.vercel.app/"
            class="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppIcon name="external" :size="16" />
            Services
          </a>
          <a
            :href="profile.cvUrl"
            class="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppIcon name="download" :size="16" />
            Download CV
          </a>
        </div>

        <div v-reveal="{ delay: 360 }" class="mt-8">
          <SocialLinks />
        </div>

        <p
          v-reveal="{ delay: 420 }"
          class="mt-6 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400"
        >
          <AppIcon name="mapPin" :size="15" />
          {{ location }}
        </p>
      </div>

      <div v-reveal="{ delay: 100 }" class="relative">
        <div
          class="mx-auto mb-6 w-full max-w-[12.8rem] overflow-hidden rounded-2xl border border-slate-200/80 shadow-card dark:border-white/10 sm:max-w-[15.4rem]"
        >
          <img
            :src="profile.photo"
            alt="Full portrait of YONG Lyhor, Data Science student at ITC"
            fetchpriority="high"
            class="w-full h-auto"
          />
          <div
            class="flex items-center justify-between border-t border-slate-200/80 bg-slate-50 px-4 py-2 dark:border-white/10 dark:bg-ink-900"
          >
            <span class="font-mono text-xs font-semibold text-lime-600 dark:text-lime-400">
              yong.lyhor
            </span>
            <span class="hidden font-mono text-[10px] text-slate-400 dark:text-slate-500 sm:block">
              Phnom Penh, Cambodia
            </span>
          </div>
        </div>

        <div class="animate-float">
          <HeroTerminal />
        </div>

        <div
          class="absolute -bottom-6 -left-4 hidden rounded-xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-card backdrop-blur-sm sm:block dark:border-white/10 dark:bg-ink-800/90"
        >
          <p class="text-xs font-medium text-slate-500 dark:text-slate-400">Currently building</p>
          <p class="font-mono text-sm font-semibold text-lime-600 dark:text-lime-400">
            Data · AI · Software systems
          </p>
        </div>

        <div
          class="absolute -top-5 -right-3 hidden rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2.5 font-mono text-xs font-medium text-violet-600 backdrop-blur-sm sm:block dark:text-violet-300"
        >
          Vue 3 · Python · Data
        </div>
      </div>
    </div>

    <div class="container-x relative mt-16">
      <dl
        class="grid max-w-2xl grid-cols-1 gap-4 border-t border-slate-200/70 pt-8 sm:grid-cols-3 dark:border-white/10"
      >
        <div>
          <dt class="text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
            Education
          </dt>
          <dd class="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
            ITC — Data Science
          </dd>
        </div>
        <div>
          <dt class="text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
            Internship
          </dt>
          <dd class="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
            AI Farm Robotics · AI Engineer
          </dd>
        </div>
        <div>
          <dt class="text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
            Featured projects
          </dt>
          <dd class="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
            AI, Data & Web platforms
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
