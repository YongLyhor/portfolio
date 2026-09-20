<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
})

const palettes = {
  blue: 'bg-lime-600',
  violet: 'bg-violet-700',
  amber: 'bg-amber-600',
  emerald: 'bg-emerald-700',
  rose: 'bg-rose-700',
  indigo: 'bg-indigo-700',
  cyan: 'bg-cyan-700',
  lime: 'bg-lime-600',
}

const paletteClass = computed(() => palettes[props.project.tone] || palettes.blue)

// Fall back to a locally bundled image when no `image` is set, e.g.
// public/projects/building-management-system.jpg
const imgSrc = ref(props.project.image ?? '')
const candidates = ['png', 'jpg', 'jpeg', 'webp'].map(
  (ext) => `/projects/${props.project.slug}.${ext}`,
)

function tryCandidate(index) {
  if (index >= candidates.length) return
  const image = new Image()
  image.onload = () => (imgSrc.value = candidates[index])
  image.onerror = () => tryCandidate(index + 1)
  image.src = candidates[index]
}

function onImgError() {
  imgSrc.value = ''
  tryCandidate(0)
}

onMounted(() => {
  if (!imgSrc.value) tryCandidate(0)
})
</script>

<template>
  <div class="relative aspect-[16/9] w-full overflow-hidden">
    <img
      v-if="imgSrc"
      :src="imgSrc"
      :alt="props.project.imageAlt || `${props.project.title} screenshot`"
      loading="lazy"
      class="h-full w-full object-cover"
      @error="onImgError"
    />

    <div
      v-else
      class="relative flex h-full w-full flex-col justify-between p-5"
      :class="paletteClass"
      role="img"
      :aria-label="`Project artwork for ${project.title}`"
    >
      <div class="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />

      <div
        class="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/15 blur-2xl"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-black/25 blur-2xl"
        aria-hidden="true"
      />

      <div class="relative">
        <span
          class="flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-white/80 uppercase"
        >
          <span class="inline-block h-1.5 w-1.5 rounded-full bg-white/90" aria-hidden="true" />
          {{ project.categories[0] }}
        </span>
      </div>

      <div class="relative flex items-end justify-between gap-4">
        <p class="font-mono text-xs text-white/70">[ record ]</p>
        <p class="text-right font-mono text-[10px] leading-relaxed text-white/70">
          {{ project.technologies.slice(0, 3).join(' · ') }}
        </p>
      </div>
    </div>
  </div>
</template>