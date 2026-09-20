<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const dot = ref(null)
const ring = ref(null)
const visible = ref(false)
const hovering = ref(false)
const pressing = ref(false)

const x = ref(-100)
const y = ref(-100)
const ringX = ref(-100)
const ringY = ref(-100)

let raf = 0
let enabled = false

const INTERACTIVE = 'a, button, [role="button"], summary, label, input, select, textarea, [data-cursor]'

function onMouseMove(e) {
  x.value = e.clientX
  y.value = e.clientY
  if (!visible.value) visible.value = true
}

function onMouseOver(e) {
  hovering.value = Boolean(e.target.closest && e.target.closest(INTERACTIVE))
}

function onMouseOut() {
  hovering.value = false
}

watch(hovering, (value) => {
  document.documentElement.classList.toggle('cursor-hover', value)
})

function onMouseDown() {
  pressing.value = true
}

function onMouseUp() {
  pressing.value = false
}

function tick() {
  ringX.value += (x.value - ringX.value) * 0.18
  ringY.value += (y.value - ringY.value) * 0.18
  ring.value.style.transform = `translate3d(${ringX.value}px, ${ringY.value}px, 0) translate(-50%, -50%)`
  dot.value.style.transform = `translate3d(${x.value}px, ${y.value}px, 0) translate(-50%, -50%)`
  raf = requestAnimationFrame(tick)
}

onMounted(() => {
  if (!window.matchMedia('(pointer: fine)').matches) return
  enabled = true
  document.documentElement.classList.add('custom-cursor')
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  window.addEventListener('mouseover', onMouseOver, { passive: true })
  window.addEventListener('mouseout', onMouseOut, { passive: true })
  window.addEventListener('mousedown', onMouseDown, { passive: true })
  window.addEventListener('mouseup', onMouseUp, { passive: true })
  raf = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  if (!enabled) return
  document.documentElement.classList.remove('custom-cursor')
  cancelAnimationFrame(raf)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseover', onMouseOver)
  window.removeEventListener('mouseout', onMouseOut)
  window.removeEventListener('mousedown', onMouseDown)
  window.removeEventListener('mouseup', onMouseUp)
})
</script>

<template>
  <Teleport to="body">
    <div
      ref="dot"
      class="cursor-dot"
      :class="{ 'cursor-dot--active': visible && !hovering }"
    />
    <div
      ref="ring"
      class="cursor-ring"
      :class="{ 'cursor-ring--active': visible && !hovering, 'cursor-ring--press': pressing }"
    />
  </Teleport>
</template>

<style scoped>
.cursor-dot,
.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  pointer-events: none;
  border-radius: 9999px;
  will-change: transform;
  opacity: 0;
  transition: opacity 0.2s ease, width 0.25s ease, height 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
}

.cursor-dot {
  width: 8px;
  height: 8px;
  background-color: #a3e635;
  transition: opacity 0.2s ease, background-color 0.2s ease;
}

.cursor-dot--active {
  opacity: 1;
}

.cursor-ring {
  width: 34px;
  height: 34px;
  border: 2px solid rgba(163, 230, 53, 0.7);
}

.cursor-ring--active {
  opacity: 1;
}

.cursor-ring--press {
  width: 26px;
  height: 26px;
  background-color: rgba(163, 230, 53, 0.35);
}

@media (prefers-reduced-motion: reduce) {
  .cursor-dot,
  .cursor-ring {
    display: none;
  }
}
</style>