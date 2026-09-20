<script setup>
import { certificates } from '../data/certificates'
import SectionHeading from './SectionHeading.vue'
import AppIcon from './AppIcon.vue'

const gov = certificates.find((certificate) => certificate.verifyUrl)
const material = certificates.find((certificate) => certificate.image)
</script>

<template>
  <section id="certificates" class="section" aria-label="Certificates">
    <div class="container-x">
      <SectionHeading
        eyebrow="// credentials"
        title="Certificates & credentials"
        description="Official documents, verifiable through the Royal Government of Cambodia's platform."
      />

      <article v-reveal class="card mt-12 overflow-hidden">
        <div class="flex flex-col lg:flex-row">
          <div
            class="flex flex-1 flex-col items-center justify-center p-6 text-center sm:p-10"
          >
            <span
              class="grid h-12 w-12 place-items-center rounded-xl bg-lime-500 text-slate-950 shadow-md shadow-lime-500/20"
            >
              <AppIcon name="shield" :size="22" />
            </span>

            <h3 class="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
              {{ gov?.title }}
            </h3>
            <div class="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-400 dark:text-slate-500">
              <span v-if="gov?.issuer" class="font-medium text-slate-500 dark:text-slate-400">
                {{ gov.issuer }}
              </span>
              <span v-if="gov?.issuedDate" class="font-mono">
                {{ gov.issuedDate }}
              </span>
              <span class="inline-flex items-center gap-1 text-lime-600 dark:text-lime-400">
                <AppIcon name="check" :size="12" />
                Gov-verified
              </span>
            </div>

            <p class="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {{ gov?.description }}
            </p>

            <a
              :href="gov?.verifyUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary mt-6"
            >
              <AppIcon name="external" :size="15" />
              Verify on verify.gov.kh
            </a>
          </div>

          <div
            class="flex flex-1 items-center justify-center bg-slate-100 p-2 sm:p-3 dark:bg-ink-900/50"
          >
            <img
              v-if="material"
              :src="material.image"
              :alt="material.title"
              class="h-auto w-full rounded-xl border border-slate-200/80 bg-white shadow-card dark:border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>