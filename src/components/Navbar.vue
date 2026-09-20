<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useTheme } from '../composables/useTheme'
import AppIcon from './AppIcon.vue'

const { isDark, toggle } = useTheme()

const scrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('home')

const navLinks = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'Skills', section: 'skills' },
  { label: 'Projects', section: 'projects' },
  { label: 'Experience', section: 'experience' },
  { label: 'Education', section: 'education' },
  { label: 'Certificates', section: 'certificates' },
  { label: 'Achievements', section: 'achievements' },
  { label: 'Contact', section: 'contact' },
]

const spySections = [
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'certificates',
  'achievements',
  'contact',
]

function isFocused(section) {
  return activeSection.value === section
}

function goTo(section) {
  menuOpen.value = false
  if (section === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function onScroll() {
  scrolled.value = window.scrollY > 12
  let current = 'home'
  for (const id of spySections) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= 120) current = id
  }
  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    :class="[
      'sticky inset-x-0 top-0 z-50 transition-all duration-300',
      scrolled
        ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-ink-950/80'
        : 'border-b border-transparent bg-transparent',
    ]"
  >
    <nav
      class="container-x flex h-16 items-center justify-between gap-4"
      aria-label="Primary navigation"
    >
      <RouterLink
        to="/"
        class="flex items-center rounded-lg py-1.5 pl-2 pr-2.5 font-mono text-base font-bold tracking-tight transition-colors hover:bg-slate-100 dark:hover:bg-white/5"
        aria-label="YONG Lyhor — home"
        @click="goTo('home')"
      >
        <span class="text-slate-400 dark:text-slate-500">&lt;</span>
        <span class="text-slate-900 dark:text-white">Yong Lyhor</span>
        <span class="text-slate-400 dark:text-slate-500">/&gt;</span>
      </RouterLink>

      <!-- Desktop links -->
      <ul class="hidden items-center gap-1 xl:flex">
        <li v-for="link in navLinks" :key="link.section">
          <a
            href="#"
            class="relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200"
            :class="
              isFocused(link.section)
                ? 'text-lime-600 dark:text-lime-400'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            "
            :aria-current="isFocused(link.section) ? 'true' : undefined"
            @click.prevent="goTo(link.section)"
          >
            {{ link.label }}
            <span
              v-if="isFocused(link.section)"
              class="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-lime-500"
            />
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-lime-500 hover:text-lime-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-lime-400 dark:hover:text-lime-400"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggle"
        >
          <AppIcon :name="isDark ? 'sun' : 'moon'" :size="17" />
        </button>

        <a
          href="#"
          class="hidden rounded-xl bg-lime-500 px-4 py-2 text-sm font-bold text-slate-950 shadow-md shadow-lime-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-400 hover:shadow-lime-400/30 sm:inline-flex"
          @click.prevent="goTo('contact')"
        >
          Hire Me
        </a>

        <button
          type="button"
          class="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-lime-500 hover:text-lime-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-lime-400 dark:hover:text-lime-400 xl:hidden"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <AppIcon :name="menuOpen ? 'x' : 'menu'" :size="18" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition origin-top duration-200 ease-out"
      enter-from-class="opacity-0 scale-y-95"
      leave-active-class="transition origin-top duration-150 ease-in"
      leave-to-class="opacity-0 scale-y-95"
    >
      <div
        v-if="menuOpen"
        class="border-t border-slate-200/70 bg-white/95 backdrop-blur-md dark:border-white/10 dark:bg-ink-950/95 xl:hidden"
      >
        <ul class="container-x flex flex-col gap-1 py-3">
          <li v-for="link in navLinks" :key="link.section">
            <a
              href="#"
              class="block rounded-lg px-3 py-2.5 text-base font-medium transition-colors"
              :class="
                isFocused(link.section)
                  ? 'bg-lime-500/10 text-lime-600 dark:bg-lime-400/10 dark:text-lime-400'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5'
              "
              @click.prevent="goTo(link.section)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>