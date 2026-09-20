<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'

const lines = [
  { type: 'comment', text: '// developer profile' },
  { type: 'keyword', text: 'const developer = {' },
  { type: 'code', text: "  name:    'YONG Lyhor'," },
  { type: 'code', text: "  role:    'Data Science Student'," },
  { type: 'code', text: "  focus:   ['Data', 'AI', 'Software']," },
  { type: 'code', text: "  location: 'Phnom Penh, Cambodia'," },
  { type: 'keyword', text: '};' },
]

const typed = reactive([])
const done = ref(false)
let timers = []

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function typeLine(index, charIndex) {
  if (index >= lines.length) {
    done.value = true
    return
  }
  const line = lines[index]
  if (charIndex <= line.text.length) {
    typed[index] = line.text.slice(0, charIndex)
    timers.push(
      setTimeout(() => typeLine(index, charIndex + 1), prefersReducedMotion() ? 0 : 8),
    )
  } else {
    typed[index] = line.text
    timers.push(
      setTimeout(() => typeLine(index + 1, 0), prefersReducedMotion() ? 0 : 260),
    )
  }
}

onMounted(() => {
  if (prefersReducedMotion()) {
    lines.forEach((line, i) => (typed[i] = line.text))
    done.value = true
    return
  }
  typeLine(0, 0)
})

onUnmounted(() => timers.forEach(clearTimeout))
</script>

<template>
  <div
    class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-card backdrop-blur-sm dark:border-white/10 dark:bg-ink-900/90"
  >
    <div
      class="flex items-center gap-2 border-b border-slate-200/80 px-4 py-3 dark:border-white/10"
    >
      <span class="h-3 w-3 rounded-full bg-rose-500/80" />
      <span class="h-3 w-3 rounded-full bg-amber-400/80" />
      <span class="h-3 w-3 rounded-full bg-emerald-500/80" />
      <span
        class="ml-3 font-mono text-xs text-slate-400 dark:text-slate-500"
        >profile.yaml — YONG Lyhor</span
      >
    </div>

    <div
      class="overflow-x-auto p-5 font-mono text-[13px] leading-6 whitespace-pre sm:text-sm"
      aria-label="Terminal showing developer profile"
    >
      <div
        v-for="(line, i) in lines"
        :key="i"
        :class="{
          'text-slate-500 dark:text-slate-500': line.type === 'comment',
          'text-lime-600 dark:text-lime-400': line.type === 'keyword',
          'text-slate-700 dark:text-slate-200': line.type === 'code',
        }"
      >
        {{ typed[i] || '' }}<span
          v-if="i === typed.length && i < lines.length - 1"
          class="terminal-cursor"
          >▍</span
        >
      </div>
      <div v-if="done" class="terminal-cursor text-lime-600 dark:text-lime-400">▍</div>
    </div>
  </div>
</template>