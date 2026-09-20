<script setup>
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading.vue'
import ContactForm from './ContactForm.vue'
import AppIcon from './AppIcon.vue'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: 'phone' },
  { label: 'GitHub', value: 'github.com/yonglyhor', href: 'https://github.com/yonglyhor', icon: 'github' },
  {
    label: 'LinkedIn',
    value: 'in/yong-lyhor',
    href: 'https://www.linkedin.com/in/yong-lyhor-449b073b2/',
    icon: 'linkedin',
  },
  { label: 'Location', value: profile.location, href: null, icon: 'mapPin' },
]
</script>

<template>
  <section id="contact" class="section" aria-label="Contact">
    <div class="container-x">
      <div class="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="// contact"
            title="Let's build something"
            description="Whether you're hiring, collaborating, or just want to talk data, AI or software — my inbox is open."
          />

          <ul class="mt-10 space-y-4">
            <li
              v-for="(channel, i) in channels"
              :key="channel.label"
              v-reveal="{ delay: i * 80 }"
            >
              <a
                v-if="channel.href"
                :href="channel.href"
                class="card group flex items-center gap-4 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime-500/10 text-lime-600 dark:bg-lime-400/10 dark:text-lime-400"
                >
                  <AppIcon :name="channel.icon" :size="19" />
                </span>
                <span>
                  <span
                    class="block text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500"
                    >{{ channel.label }}</span
                  >
                  <span class="mt-0.5 block text-sm font-medium text-slate-800 dark:text-slate-200">
                    {{ channel.value }}
                  </span>
                </span>
              </a>

              <div
                v-else
                class="card flex items-center gap-4 p-4"
              >
                <span
                  class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime-500/10 text-lime-600 dark:bg-lime-400/10 dark:text-lime-400"
                >
                  <AppIcon :name="channel.icon" :size="19" />
                </span>
                <span>
                  <span
                    class="block text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500"
                    >{{ channel.label }}</span
                  >
                  <span class="mt-0.5 block text-sm font-medium text-slate-800 dark:text-slate-200">
                    {{ channel.value }}
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div v-reveal="{ delay: 150 }">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>