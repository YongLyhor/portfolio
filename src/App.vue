<script setup>
import { onMounted } from 'vue'
import { useTheme } from './composables/useTheme'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CursorFX from './components/CursorFX.vue'

const { init } = useTheme()

onMounted(init)
</script>

<template>
  <div class="flex min-h-screen flex-col bg-slate-50 transition-colors duration-300 dark:bg-ink-950">
    <a href="#main" class="skip-link">Skip to main content</a>
    <Navbar />
    <main id="main" class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <Footer />
    <CursorFX />
  </div>
</template>