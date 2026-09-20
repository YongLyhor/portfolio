<script setup>
import { profile } from '../data/profile'
import AppIcon from './AppIcon.vue'

defineProps({
  size: { type: [Number, String], default: 16 },
})
</script>

<template>
  <div class="flex items-center gap-2.5" role="list" aria-label="Social profiles">
    <a
      v-for="social in profile.socials"
      :key="social.label"
      :href="social.href"
      :aria-label="social.label"
      target="_blank"
      rel="noopener noreferrer"
      role="listitem"
      class="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-500 hover:text-lime-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-lime-400 dark:hover:text-lime-400"
    >
      <AppIcon :name="social.icon" :size="size" />
    </a>
  </div>
</template>