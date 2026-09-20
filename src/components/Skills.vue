<script setup>
import { skillCategories } from '../data/skills'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="skills" class="section" aria-label="Skills">
    <div class="container-x">
      <SectionHeading
        eyebrow="// skills"
        title="Technologies & tools I work with"
        description="A practical stack across frontend, backend, data, AI and DevOps — chosen for building real, shippable systems."
      />

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(category, i) in skillCategories"
          :key="category.id"
          v-reveal="{ delay: (i % 3) * 90 }"
          class="group card rotate-card p-6"
        >
          <div
            class="grid h-11 w-11 place-items-center rounded-xl bg-lime-500/10 text-lime-600 transition-colors group-hover:bg-lime-500/20 dark:bg-lime-400/10 dark:text-lime-400 dark:group-hover:bg-lime-400/20"
          >
            <span class="font-mono text-sm font-bold tracking-wide">
              {{ category.title.slice(0, 2).toUpperCase() }}
            </span>
          </div>

          <h3 class="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
            {{ category.title }}
          </h3>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {{ category.description }}
          </p>

          <ul
            class="mt-4 flex flex-wrap gap-2"
            :aria-label="`${category.title} technologies`"
          >
            <li
              v-for="tech in category.technologies"
              :key="tech"
              class="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-600 transition-colors duration-200 hover:border-lime-500 hover:text-lime-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-lime-400 dark:hover:text-lime-400"
            >
              {{ tech }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>