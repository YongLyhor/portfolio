<script setup>
import { projects } from '../data/projects'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Experience from '../components/Experience.vue'
import Education from '../components/Education.vue'
import Certificates from '../components/Certificates.vue'
import Achievements from '../components/Achievements.vue'
import Contact from '../components/Contact.vue'
import SectionHeading from '../components/SectionHeading.vue'
import ProjectGrid from '../components/ProjectGrid.vue'
</script>

<template>
  <div>
    <Hero />
    <About />
    <Skills />

    <section id="projects" class="section" aria-label="Projects">
      <div class="container-x">
        <SectionHeading
          eyebrow="// selected work"
          title="Projects"
          description="Systems I've designed and built across data, AI, and the web."
        />

        <div class="mt-12">
          <ProjectGrid :projects="projects" title="Projects" />
        </div>
      </div>
    </section>

    <Experience />
    <Education />
    <Certificates />
    <Achievements />
    <Contact />
  </div>
</template>