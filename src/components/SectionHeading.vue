<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <div class="max-w-2xl">
    <p class="section-eyebrow" v-text="eyebrow" />
    <h2
      class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
      v-text="title"
    />
    <p
      v-if="description"
      class="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400"
      v-text="description"
    />
  </div>
</template>