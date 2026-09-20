<script setup>
import AppIcon from '../components/AppIcon.vue'
</script>

<template>
  <div class="section">
    <div class="container-x flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div
        class="grid h-14 w-14 place-items-center rounded-2xl bg-lime-500/10 text-lime-600 dark:bg-lime-400/10 dark:text-lime-400"
      >
        <AppIcon name="code" :size="22" />
      </div>
      <p class="mt-6 font-mono text-sm text-lime-600 dark:text-lime-400">
        <span class="terminal-cursor">▍</span> 404 — page not found
      </p>
      <p class="mt-3 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track.
      </p>
      <RouterLink to="/" class="btn-primary mt-8">
        Back to home
        <AppIcon name="arrowRight" :size="16" />
      </RouterLink>
    </div>
  </div>
</template>