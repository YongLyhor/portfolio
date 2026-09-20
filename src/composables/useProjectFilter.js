import { computed, ref } from 'vue'
import { projectFilters, projects } from '../data/projects'

export function useProjectFilter(source = projects) {
  const activeFilter = ref('all')

  const filteredProjects = computed(() =>
    activeFilter.value === 'all'
      ? source
      : source.filter((project) => project.categories.includes(activeFilter.value)),
  )

  function setFilter(id) {
    activeFilter.value = id
  }

  return { projectFilters, activeFilter, filteredProjects, setFilter }
}