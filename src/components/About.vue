<script setup>
import { profile } from '../data/profile'
import { focusAreas } from '../data/skills'
import SectionHeading from './SectionHeading.vue'
import AppIcon from './AppIcon.vue'

const stack = ['Python', 'Vue.js', 'FastAPI', 'MQTT', 'TensorFlow', 'SQL', 'Docker']
</script>

<template>
  <section id="about" class="section" aria-label="About">
    <div class="container-x">
      <div class="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="// about"
            title="I work across the full data path"
            description="From sensors and pipelines to models and interfaces."
          />

          <div v-reveal class="mt-8 space-y-5 text-base leading-relaxed">
            <p>
              I'm a Data Science student at the
              <strong class="font-semibold text-slate-900 dark:text-white"
                >Institute of Technology of Cambodia (ITC)</strong
              >, based in {{ profile.location }}. My work spans the whole stack —
              building IoT data pipelines, engineering the backends that process
              them, and shipping the interfaces people actually use.
            </p>
            <p>
              Whether it's ingesting sensor telemetry over MQTT, training a vision
              model, wiring up a RAG chatbot, or designing a REST API — I care
              about the end result being a reliable, usable product built on clean
              foundations. I'm a continuous learner, picking up new tools and
              technologies by building with them.
            </p>
          </div>

          <div class="mt-10 grid gap-4 sm:grid-cols-2">
            <article
              v-for="(area, i) in focusAreas"
              :key="area.title"
              v-reveal="{ delay: i * 80 }"
              class="card p-5"
            >
              <div class="flex items-center gap-2.5">
                <span
                  class="grid h-9 w-9 place-items-center rounded-lg bg-lime-500/10 text-lime-600 dark:bg-lime-400/10 dark:text-lime-400"
                >
                  <AppIcon name="sparkles" :size="17" />
                </span>
                <h3 class="text-sm font-semibold text-slate-900 dark:text-white">
                  {{ area.title }}
                </h3>
              </div>
              <p class="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {{ area.description }}
              </p>
            </article>
          </div>
        </div>

        <aside v-reveal="{ delay: 150 }" class="lg:sticky lg:top-24">
          <div
            class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-card backdrop-blur-sm dark:border-white/10 dark:bg-ink-900/90"
          >
            <figure class="flex flex-col items-center px-6 pt-6 pb-5">
              <span class="relative mt-3 inline-block">
                <span
                  class="absolute -inset-1.5 rounded-full border border-dashed border-lime-500/40"
                  aria-hidden="true"
                />
                <span
                  class="block h-32 w-32 shrink-0 overflow-hidden rounded-full bg-slate-100 shadow-glow ring-4 ring-lime-500/30 transition-transform duration-300 hover:scale-105 dark:bg-ink-800"
                >
                  <img
                    :src="profile.aboutPhoto"
                    alt="Portrait of YONG Lyhor"
                    loading="lazy"
                    class="h-full w-full object-contain"
                  />
                </span>
                <span
                  class="absolute -right-0.5 -bottom-0.5 h-5 w-5 rounded-full border-4 border-slate-50 bg-emerald-500 dark:border-ink-950"
                  title="Available for work"
                  aria-hidden="true"
                />
              </span>
              <figcaption class="mt-4 text-center">
                <p class="text-lg font-bold text-slate-900 dark:text-white">YONG Lyhor</p>
                <p class="mt-1 font-mono text-xs font-medium text-lime-600 dark:text-lime-400">
                  Data Engineer • AI Engineer • Full-Stack
                </p>
              </figcaption>
            </figure>

            <div
              class="flex items-center gap-2 border-t border-slate-200/80 px-4 py-3 dark:border-white/10"
            >
              <span class="h-3 w-3 rounded-full bg-rose-500/80" />
              <span class="h-3 w-3 rounded-full bg-amber-400/80" />
              <span class="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span
                class="ml-3 font-mono text-xs text-slate-400 dark:text-slate-500"
                >at a glance</span
              >
            </div>

            <dl class="divide-y divide-slate-100 dark:divide-white/5">
              <div class="flex items-center justify-between gap-4 px-5 py-4">
                <dt class="text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                  Role
                </dt>
                <dd class="text-right text-sm font-medium text-slate-800 dark:text-slate-200">
                  Data Science Student
                </dd>
              </div>
              <div class="flex items-center justify-between gap-4 px-5 py-4">
                <dt class="text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                  Education
                </dt>
                <dd class="max-w-[55%] text-right text-sm font-medium text-slate-800 dark:text-slate-200">
                  Institute of Technology of Cambodia
                </dd>
              </div>
              <div class="flex items-center justify-between gap-4 px-5 py-4">
                <dt class="text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                  Internship
                </dt>
                <dd class="text-right text-sm font-medium text-slate-800 dark:text-slate-200">
                  AI Farm Robotics — AI Engineer
                </dd>
              </div>
              <div class="flex items-center justify-between gap-4 px-5 py-4">
                <dt class="text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                  Location
                </dt>
                <dd class="flex items-center gap-1.5 text-right text-sm font-medium text-slate-800 dark:text-slate-200">
                  <AppIcon name="mapPin" :size="14" />
                  {{ profile.location }}
                </dd>
              </div>
            </dl>

            <div class="border-t border-slate-200/80 px-5 py-4 dark:border-white/10">
              <p class="text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                Core stack
              </p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="tech in stack"
                  :key="tech"
                  class="chip font-mono"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>