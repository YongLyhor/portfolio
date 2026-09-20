<script setup>
import { education } from '../data/education'
import SectionHeading from './SectionHeading.vue'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <section id="education" class="section" aria-label="Education">
    <div class="container-x">
      <div class="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="// education"
            title="Academic background"
            description="Studying the foundations of data science while shipping real software."
          />
        </div>

        <div v-reveal class="space-y-5">
          <article
            v-for="item in education"
            :key="item.school"
            class="card overflow-hidden"
          >
            <div class="flex flex-wrap items-start justify-between gap-4 p-6 sm:p-7">
              <div class="flex items-start gap-4">
                <span
                  class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime-500 text-slate-950 shadow-md shadow-lime-500/20"
                >
                  <AppIcon name="sparkles" :size="20" />
                </span>
                <div>
                  <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
                    {{ item.school }}
                  </h3>
                  <p class="mt-0.5 text-sm font-semibold text-lime-600 dark:text-lime-400">
                    {{ item.degree }}
                  </p>

                  <p class="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {{ item.description }}
                  </p>

                  <div class="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400 dark:text-slate-500">
                    <span class="flex items-center gap-1.5">
                      <AppIcon name="mapPin" :size="13" />
                      {{ item.location }}
                    </span>
                    <span class="flex items-center gap-1.5">
                      <AppIcon name="sun" :size="13" />
                      {{ item.level }} · Current
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>