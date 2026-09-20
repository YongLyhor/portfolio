<script setup>
import { achievements } from '../data/achievements'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="achievements" class="section" aria-label="Achievements">
    <div class="container-x">
      <SectionHeading
        eyebrow="// recognition"
        title="Achievements"
        description="Certificates and recognitions earned along the way."
      />

      <div class="mt-12 grid gap-5 sm:grid-cols-2">
        <article
          v-for="(achievement, i) in achievements"
          :key="achievement.id"
          v-reveal="{ delay: i * 100 }"
          class="card overflow-hidden"
        >
          <img
            :src="achievement.image"
            :alt="achievement.title"
            class="h-auto w-full"
            loading="lazy"
          />
          <div class="p-5 sm:p-7">
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
              {{ achievement.title }}
            </h3>
            <p
              v-if="achievement.issuer || achievement.year"
              class="mt-1 font-mono text-xs font-medium text-lime-600 dark:text-lime-400"
            >
              {{ [achievement.issuer, achievement.year].filter(Boolean).join(' · ') }}
            </p>
            <p class="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {{ achievement.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>