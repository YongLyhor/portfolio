<script setup>
import { experience } from '../data/experience'
import SectionHeading from './SectionHeading.vue'
import AppIcon from './AppIcon.vue'

const roleIcons = {
  'Intern AI Engineer': 'sparkles',
}
</script>

<template>
  <section id="experience" class="section" aria-label="Experience">
    <div class="container-x">
      <SectionHeading
        eyebrow="// experience"
        title="Where I'm learning by building"
        description="Project-backed experience across IoT, data engineering, AI and full-stack development."
      />

      <div class="mt-12">
        <ol class="relative space-y-10 border-l border-slate-200 pl-8 dark:border-white/10">
          <li
            v-for="(job, i) in experience"
            :key="job.company"
            v-reveal="{ delay: i * 100 }"
            class="relative"
          >
            <span
              class="absolute top-1 -left-[2.15rem] grid h-6 w-6 place-items-center rounded-full border-2 border-lime-500 bg-white text-lime-600 dark:bg-ink-950 dark:text-lime-400"
              aria-hidden="true"
            >
              <span class="h-2 w-2 rounded-full bg-lime-500" />
            </span>

            <div class="card p-6 sm:p-7">
              <div
                class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2"
              >
                <div class="flex items-center gap-3">
                  <span
                    class="grid h-10 w-10 place-items-center rounded-xl bg-lime-500/10 text-lime-600 dark:bg-lime-400/10 dark:text-lime-400"
                  >
                    <AppIcon :name="roleIcons[job.role] || 'code'" :size="18" />
                  </span>
                  <div>
                    <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
                      {{ job.role }}
                    </h3>
                    <p class="text-sm font-medium text-lime-600 dark:text-lime-400">
                      {{ job.company }}
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <span class="chip">{{ job.type }}</span>
                  <span class="chip">{{ job.period }}</span>
                </div>
              </div>

              <p class="mt-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {{ job.description }}
              </p>

              <ul class="mt-5 grid gap-2.5 sm:grid-cols-2">
                <li
                  v-for="point in job.highlights"
                  :key="point"
                  class="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                >
                  <AppIcon name="check" :size="15" class="mt-0.5 shrink-0 text-emerald-500" />
                  {{ point }}
                </li>
              </ul>

              <p class="mt-5 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                <AppIcon name="mapPin" :size="13" />
                {{ job.location }}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>