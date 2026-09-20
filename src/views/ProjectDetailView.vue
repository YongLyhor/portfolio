<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectBySlug, getAdjacentProjects } from '../data/projects'
import ProjectCover from '../components/ProjectCover.vue'
import ArchitectureFlow from '../components/ArchitectureFlow.vue'
import AppIcon from '../components/AppIcon.vue'

const route = useRoute()
const project = computed(() => getProjectBySlug(route.params.slug))
const adjacent = computed(() => getAdjacentProjects(route.params.slug))

const detailSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'architecture', label: 'Architecture', showWhen: (p) => Boolean(p.architecture) },
  { id: 'features', label: 'Key features' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'challenges', label: 'Challenges' },
]

const visibleSections = computed(() =>
  detailSections.filter((section) => (section.showWhen ? section.showWhen(project.value) : true)),
)

function scrollToSection(id) {
  if (typeof document !== 'undefined') {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <div class="pt-4">
    <section v-if="project" class="section pt-10" aria-label="Project details">
      <div class="container-x">
        <RouterLink
          to="/projects"
          class="btn-ghost -ml-3"
          aria-label="Back to all projects"
        >
          <AppIcon name="arrowLeft" :size="15" />
          All projects
        </RouterLink>

        <div class="mt-8 max-w-3xl">
          <div class="flex flex-wrap gap-2" aria-label="Project categories">
            <span
              v-for="category in project.categories"
              :key="category"
              class="rounded-md bg-lime-500/10 px-2.5 py-1 font-mono text-xs font-medium text-lime-600 dark:bg-lime-400/10 dark:text-lime-400"
            >
              {{ category }}
            </span>
          </div>

          <h1 class="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            {{ project.title }}
          </h1>
          <p class="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg dark:text-slate-400">
            {{ project.tagline }}
          </p>

          <div class="mt-7 flex flex-wrap items-center gap-3">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >
              <AppIcon name="github" :size="16" />
              View source
            </a>
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
            >
              <AppIcon name="external" :size="16" />
              Live demo
            </a>
            <span
              v-if="project.featured"
              class="chip"
            >
              ★ Featured
            </span>
          </div>
        </div>

        <div v-reveal class="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 shadow-card dark:border-white/10">
          <ProjectCover :project="project" />
        </div>

        <div class="mt-6 flex flex-wrap gap-2 lg:hidden" aria-label="On this page">
          <button
            v-for="section in visibleSections"
            :key="section.id"
            type="button"
            @click="scrollToSection(section.id)"
            class="rounded-lg border border-slate-200 px-3 py-1.5 font-mono text-xs text-slate-500 transition-colors hover:border-lime-500 hover:text-lime-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-lime-400 dark:hover:text-lime-400"
          >
            {{ section.label }}
          </button>
        </div>

        <div class="mt-14 grid gap-12 lg:grid-cols-[220px_1fr]">
          <!-- In-page nav -->
          <aside class="hidden lg:block" aria-label="Sections on this page">
            <ul class="sticky top-28 space-y-1 border-l border-slate-200 dark:border-white/10">
              <li
                v-for="section in visibleSections"
                :key="section.id"
              >
                <a
                  :href="`#${section.id}`"
                  class="-ml-px block border-l-2 border-transparent py-1 pl-4 font-mono text-xs text-slate-400 transition-colors hover:border-lime-500 hover:text-lime-600 dark:text-slate-500 dark:hover:border-lime-400 dark:hover:text-lime-400"
                >
                  {{ section.label }}
                </a>
              </li>
            </ul>
          </aside>

          <div class="min-w-0 space-y-12">
            <section id="overview" aria-label="Overview" class="scroll-mt-24">
              <h2 class="section-eyebrow">// overview</h2>
              <p class="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                {{ project.overview }}
              </p>
            </section>

            <section id="problem" aria-label="Problem" class="scroll-mt-24">
              <h2 class="section-eyebrow">// problem</h2>
              <div class="card p-6">
                <p class="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                  {{ project.problem }}
                </p>
              </div>
            </section>

            <section id="solution" aria-label="Solution" class="scroll-mt-24">
              <h2 class="section-eyebrow">// solution</h2>
              <div class="card p-6">
                <p class="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                  {{ project.solution }}
                </p>
              </div>
            </section>

            <section
              v-if="project.architecture"
              id="architecture"
              aria-label="Architecture"
              class="scroll-mt-24"
            >
              <h2 class="section-eyebrow">// architecture</h2>
              <ArchitectureFlow :steps="project.architecture" />
            </section>

            <section id="features" aria-label="Key features" class="scroll-mt-24">
              <h2 class="section-eyebrow">// key features</h2>
              <ul class="grid gap-3 sm:grid-cols-2">
                <li
                  v-for="feature in project.features"
                  :key="feature"
                  class="card flex items-start gap-3 p-4"
                >
                  <AppIcon name="check" :size="16" class="mt-0.5 shrink-0 text-lime-600 dark:text-lime-400" />
                  <span class="text-sm text-slate-600 dark:text-slate-300">{{ feature }}</span>
                </li>
              </ul>
            </section>

            <section id="technologies" aria-label="Technology stack" class="scroll-mt-24">
              <h2 class="section-eyebrow">// technologies</h2>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="chip font-mono"
                >
                  {{ tech }}
                </span>
              </div>
            </section>

            <section id="challenges" aria-label="Challenges" class="scroll-mt-24">
              <h2 class="section-eyebrow">// challenges</h2>
              <ul class="space-y-3">
                <li
                  v-for="challenge in project.challenges"
                  :key="challenge"
                  class="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                >
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" aria-hidden="true" />
                  {{ challenge }}
                </li>
              </ul>
            </section>
          </div>
        </div>

        <!-- Prev / next -->
        <nav
          class="mt-16 grid gap-4 border-t border-slate-200/70 pt-8 sm:grid-cols-2 dark:border-white/10"
          aria-label="More projects"
        >
          <RouterLink
            :to="`/projects/${adjacent.prev.slug}`"
            class="card group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-500"
          >
            <AppIcon
              name="arrowLeft"
              :size="16"
              class="shrink-0 text-slate-400 transition-colors group-hover:text-lime-600 dark:group-hover:text-lime-400"
            />
            <span class="min-w-0">
              <span class="block font-mono text-xs text-slate-400 dark:text-slate-500">Previous</span>
              <span class="mt-0.5 block truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
                {{ adjacent.prev.title }}
              </span>
            </span>
          </RouterLink>

          <RouterLink
            :to="`/projects/${adjacent.next.slug}`"
            class="card group flex items-center justify-end gap-4 p-5 text-right transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-500"
          >
            <span class="min-w-0">
              <span class="block font-mono text-xs text-slate-400 dark:text-slate-500">Next</span>
              <span class="mt-0.5 block truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
                {{ adjacent.next.title }}
              </span>
            </span>
            <AppIcon
              name="arrowRight"
              :size="16"
              class="shrink-0 text-slate-400 transition-colors group-hover:text-lime-600 dark:group-hover:text-lime-400"
            />
          </RouterLink>
        </nav>
      </div>
    </section>

    <section v-else class="section" aria-label="Project not found">
      <div class="container-x text-center">
        <p class="font-mono text-sm text-lime-600 dark:text-lime-400">// 404</p>
        <h1 class="mt-3 text-2xl font-bold text-slate-900 dark:text-white">Project not found</h1>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
          That project doesn't exist — it may have been renamed or moved.
        </p>
        <RouterLink to="/projects" class="btn-primary mt-6">
          Back to projects
        </RouterLink>
      </div>
    </section>
  </div>
</template>