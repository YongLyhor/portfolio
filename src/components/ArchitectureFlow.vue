<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  steps: { type: Array, required: true },
})
</script>

<template>
  <div>
    <!-- Desktop: horizontal flow -->
    <ol
      class="hidden lg:flex lg:flex-wrap lg:items-stretch"
      aria-label="System architecture flow"
    >
      <li
        v-for="(step, i) in steps"
        :key="step.title"
        class="flex items-stretch"
      >
        <div
          class="flex w-44 flex-col justify-center rounded-xl border border-slate-200 bg-white px-4 py-4 text-center shadow-sm transition-colors hover:border-lime-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-lime-400"
        >
          <p
            class="font-mono text-[10px] font-semibold tracking-widest text-lime-600 uppercase dark:text-lime-400"
          >
            {{ String(i + 1).padStart(2, '0') }}
          </p>
          <h4 class="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
            {{ step.title }}
          </h4>
          <p class="mt-1 text-[11px] leading-snug text-slate-500 dark:text-slate-400">
            {{ step.description }}
          </p>
        </div>
        <span
          v-if="i < steps.length - 1"
          class="flex w-10 shrink-0 items-center justify-center text-slate-300 dark:text-slate-600"
          aria-hidden="true"
        >
          <AppIcon name="arrowRight" :size="18" />
        </span>
      </li>
    </ol>

    <!-- Mobile / tablet: vertical flow -->
    <ol class="space-y-0 lg:hidden" aria-label="System architecture flow">
      <li v-for="(step, i) in steps" :key="step.title">
        <div
          class="flex gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3.5 dark:border-white/10 dark:bg-white/[0.03]"
        >
          <span
            class="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-lime-500/10 font-mono text-xs font-bold text-lime-600 dark:bg-lime-400/10 dark:text-lime-400"
          >
            {{ i + 1 }}
          </span>
          <div>
            <h4 class="text-sm font-semibold text-slate-900 dark:text-white">
              {{ step.title }}
            </h4>
            <p class="mt-0.5 text-xs leading-snug text-slate-500 dark:text-slate-400">
              {{ step.description }}
            </p>
          </div>
        </div>
        <div
          v-if="i < steps.length - 1"
          class="flex justify-center py-0.5 text-slate-300 dark:text-slate-600"
          aria-hidden="true"
        >
          ↓
        </div>
      </li>
    </ol>
  </div>
</template>