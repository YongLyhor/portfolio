<script setup>
import ProjectCover from './ProjectCover.vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  project: { type: Object, required: true },
})

const detailHref = `/projects/${props.project.slug}`
</script>

<template>
  <article
    class="group card rotate-card flex flex-col overflow-hidden"
    :aria-label="project.title"
  >
    <RouterLink
      :to="detailHref"
      class="block overflow-hidden focus-visible:outline-offset-4"
      :aria-label="`View case study of ${project.title}`"
    >
      <div class="transition-transform duration-500 group-hover:scale-[1.03]">
        <ProjectCover :project="project" />
      </div>
    </RouterLink>

    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <div class="flex flex-wrap gap-2" aria-label="Project categories">
        <span
          v-for="category in project.categories"
          :key="category"
          class="rounded-md bg-lime-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-lime-600 dark:bg-lime-400/10 dark:text-lime-400"
        >
          {{ category }}
        </span>
      </div>

      <h3 class="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
        <RouterLink
          :to="detailHref"
          class="transition-colors hover:text-lime-600 dark:hover:text-lime-400"
        >
          {{ project.title }}
        </RouterLink>
      </h3>

      <p class="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {{ project.tagline }}
      </p>

      <ul class="mt-4 flex flex-wrap gap-1.5" :aria-label="`${project.title} technologies`">
        <li
          v-for="tech in project.technologies.slice(0, 5)"
          :key="tech"
          class="rounded-md border border-slate-200 px-2 py-0.5 font-mono text-[11px] text-slate-500 dark:border-white/10 dark:text-slate-400"
        >
          {{ tech }}
        </li>
      </ul>

      <div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-white/5">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-lime-600 dark:text-slate-400 dark:hover:text-lime-400"
          :aria-label="`${project.title} source code on GitHub`"
        >
          <AppIcon name="github" :size="15" />
          Code
        </a>
        <span v-else class="font-mono text-xs text-slate-400 dark:text-slate-600">source: private</span>

        <RouterLink
          :to="detailHref"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-lime-600 transition-all hover:gap-2.5 dark:text-lime-400"
        >
          Case study
          <AppIcon name="arrowRight" :size="15" />
        </RouterLink>
      </div>
    </div>
  </article>
</template>