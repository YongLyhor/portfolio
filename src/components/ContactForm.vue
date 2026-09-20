<script setup>
import { computed, reactive, ref } from 'vue'
import { profile } from '../data/profile'
import AppIcon from './AppIcon.vue'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({})
const touched = ref(false)
const submitted = ref(false)
const sending = ref(false)
const sentViaApi = ref(false)

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const mailtoHref = computed(() => {
  const subject = encodeURIComponent(form.subject || 'Message from portfolio')
  const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
  return `mailto:${profile.email}?subject=${subject}&body=${body}`
})

function validate() {
  errors.name = form.name.trim() ? '' : 'Please enter your name.'
  errors.email = emailPattern.test(form.email) ? '' : 'Please enter a valid email address.'
  errors.subject = form.subject.trim() ? '' : 'Please enter a subject.'
  errors.message = form.message.trim().length >= 10 ? '' : 'Message should be at least 10 characters.'
  return !errors.name && !errors.email && !errors.subject && !errors.message
}

async function handleSubmit() {
  touched.value = true
  validate()
  if (errors.name || errors.email || errors.subject || errors.message) return
  sending.value = true
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      }),
    })
    sentViaApi.value = response.ok
  } catch {
    sentViaApi.value = false
  } finally {
    sending.value = false
    submitted.value = true
  }
}

function handleReset() {
  submitted.value = false
  touched.value = false
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<template>
  <div class="card p-6 sm:p-8">
    <form v-if="!submitted" novalidate @submit.prevent="handleSubmit">
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            for="contact-name"
            class="mb-1.5 block text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400"
          >
            Name <span class="text-lime-500">*</span>
          </label>
          <input
            id="contact-name"
            v-model="form.name"
            name="name"
            type="text"
            autocomplete="name"
            placeholder="Your name"
            class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-lime-500 focus:outline-none dark:border-white/10 dark:bg-ink-800 dark:text-slate-100 dark:placeholder:text-slate-500"
            :aria-invalid="touched && errors.name ? 'true' : 'false'"
            :aria-describedby="touched && errors.name ? 'contact-name-error' : undefined"
          />
          <p
            v-if="touched && errors.name"
            id="contact-name-error"
            class="mt-1.5 text-xs text-rose-500"
            role="alert"
          >
            {{ errors.name }}
          </p>
        </div>

        <div>
          <label
            for="contact-email"
            class="mb-1.5 block text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400"
          >
            Email <span class="text-lime-500">*</span>
          </label>
          <input
            id="contact-email"
            v-model="form.email"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="you@example.com"
            class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-lime-500 focus:outline-none dark:border-white/10 dark:bg-ink-800 dark:text-slate-100 dark:placeholder:text-slate-500"
            :aria-invalid="touched && errors.email ? 'true' : 'false'"
            :aria-describedby="touched && errors.email ? 'contact-email-error' : undefined"
          />
          <p
            v-if="touched && errors.email"
            id="contact-email-error"
            class="mt-1.5 text-xs text-rose-500"
            role="alert"
          >
            {{ errors.email }}
          </p>
        </div>
      </div>

      <div class="mt-5">
        <label
          for="contact-subject"
          class="mb-1.5 block text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400"
        >
          Subject <span class="text-lime-500">*</span>
        </label>
        <input
          id="contact-subject"
          v-model="form.subject"
          name="subject"
          type="text"
          placeholder="What is this about?"
          class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-lime-500 focus:outline-none dark:border-white/10 dark:bg-ink-800 dark:text-slate-100 dark:placeholder:text-slate-500"
          :aria-invalid="touched && errors.subject ? 'true' : 'false'"
          :aria-describedby="touched && errors.subject ? 'contact-subject-error' : undefined"
        />
        <p
          v-if="touched && errors.subject"
          id="contact-subject-error"
          class="mt-1.5 text-xs text-rose-500"
          role="alert"
        >
          {{ errors.subject }}
        </p>
      </div>

      <div class="mt-5">
        <label
          for="contact-message"
          class="mb-1.5 block text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400"
        >
          Message <span class="text-lime-500">*</span>
        </label>
        <textarea
          id="contact-message"
          v-model="form.message"
          name="message"
          rows="5"
          placeholder="Tell me about your project or opportunity..."
          class="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-lime-500 focus:outline-none dark:border-white/10 dark:bg-ink-800 dark:text-slate-100 dark:placeholder:text-slate-500"
          :aria-invalid="touched && errors.message ? 'true' : 'false'"
          :aria-describedby="touched && errors.message ? 'contact-message-error' : undefined"
        />
        <p
          v-if="touched && errors.message"
          id="contact-message-error"
          class="mt-1.5 text-xs text-rose-500"
          role="alert"
        >
          {{ errors.message }}
        </p>
      </div>

      <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" class="btn-primary" :disabled="sending">
          <AppIcon :name="sending ? 'loader' : 'send'" :size="16" />
          {{ sending ? 'Sending…' : 'Send message' }}
        </button>
      </div>
    </form>

    <div v-else role="status" aria-live="polite">
      <span
        class="grid h-12 w-12 place-items-center rounded-xl bg-lime-500/10 text-lime-600 dark:bg-lime-400/10 dark:text-lime-400"
      >
        <AppIcon name="check" :size="22" />
      </span>
      <h3 class="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
        Thanks, {{ form.name.split(' ')[0] }}!
      </h3>
      <p
        v-if="sentViaApi"
        class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
      >
        Your message was sent. I'll get back to you at {{ form.email }} as soon as possible.
      </p>
      <p
        v-else
        class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
      >
        The email API wasn't reachable from here, so your message isn't sent automatically.
        Click below to send it through your email app.
      </p>
      <div v-if="!sentViaApi" class="mt-5 flex flex-wrap items-center gap-3">
        <a :href="mailtoHref" class="btn-primary">
          <AppIcon name="mail" :size="16" />
          Send via email
        </a>
      </div>
      <div class="mt-5 flex flex-wrap items-center gap-3">
        <button type="button" class="btn-ghost" @click="handleReset">
          Write another message
        </button>
      </div>
    </div>
  </div>
</template>