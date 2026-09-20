<script setup>
import ProjectCard from './ProjectCard.vue'

const props = defineProps({
  projects: { type: Array, required: true },
  title: { type: String, default: '' },
})
</script>

<template>
  <section v-if="props.projects.length" :aria-label="title || 'Projects'">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="(project, i) in projects"
        :key="project.slug"
        :project="project"
        v-reveal="{ delay: (i % 3) * 90 }"
      />
    </div>
  </section>

  <div
    v-else
    class="card p-10 text-center"
    role="status"
    aria-live="polite"
  >
    <p class="font-mono text-sm text-slate-400 dark:text-slate-500">
      // no projects match this filter yet
    </p>
  </div>
</template>