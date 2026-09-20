<script setup>
import { useProjectFilter } from '../composables/useProjectFilter'
import SectionHeading from '../components/SectionHeading.vue'
import ProjectGrid from '../components/ProjectGrid.vue'
import AppIcon from '../components/AppIcon.vue'

const { projectFilters, activeFilter, filteredProjects, setFilter } =
  useProjectFilter()
</script>

<template>
  <div class="pt-4">
    <section class="section pb-10" aria-label="Projects">
      <div class="container-x">
        <SectionHeading
          eyebrow="// projects"
          title="Selected projects"
          description="Systems I've built across IoT, data engineering, AI and full-stack development."
        />
      </div>
    </section>

    <section class="pb-10" aria-label="Project filters">
      <div class="container-x">
        <div
          class="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          <button
            v-for="filter in projectFilters"
            :key="filter.id"
            type="button"
            :aria-pressed="activeFilter === filter.id"
            @click="setFilter(filter.id)"
            class="rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200"
            :class="
              activeFilter === filter.id
                ? 'border-lime-500 bg-lime-500 text-slate-950 shadow-md shadow-lime-500/20'
                : 'border-slate-200 bg-white text-slate-600 hover:border-lime-500 hover:text-lime-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-lime-400 dark:hover:text-lime-400'
            "
          >
            {{ filter.label }}
          </button>
        </div>

        <p
          class="mt-4 font-mono text-xs text-slate-400 dark:text-slate-500"
          role="status"
          aria-live="polite"
        >
          // {{ filteredProjects.length }} project{{ filteredProjects.length === 1 ? '' : 's' }} · filters applied via computed
        </p>
      </div>
    </section>

    <section class="section pt-0" aria-label="Project list">
      <div class="container-x">
        <ProjectGrid :projects="filteredProjects" title="Projects" />

        <div class="mt-12 flex justify-center">
          <a
            href="https://github.com/yonglyhor"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary"
          >
            <AppIcon name="github" :size="16" />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  </div>
</template>