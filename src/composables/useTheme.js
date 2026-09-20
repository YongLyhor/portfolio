import { ref } from 'vue'

const THEME_KEY = 'portfolio-theme'

export function useTheme() {
  const isDark = ref(true)

  function apply(value) {
    const root = document.documentElement
    root.classList.toggle('dark', value)
    root.style.colorScheme = value ? 'dark' : 'light'
    localStorage.setItem(THEME_KEY, value ? 'dark' : 'light')
  }

  function init() {
    const saved = localStorage.getItem(THEME_KEY)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = saved ? saved !== 'light' : true
    apply(isDark.value)
  }

  function toggle() {
    isDark.value = !isDark.value
    apply(isDark.value)
  }

  return { isDark, init, toggle }
}