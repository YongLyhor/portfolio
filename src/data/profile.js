export const profile = {
  name: 'YONG Lyhor',
  firstName: 'YONG',
  lastName: 'Lyhor',
  monogram: 'YL',
  headline: 'Data Science Student',
  roles: 'Data Engineer • AI Engineer • Full-Stack Developer',
  heroStatement:
    'I build data-driven applications, intelligent systems, and modern software solutions.',
  summary:
    'Data Science student at the Institute of Technology of Cambodia (ITC). I work across the full stack — from IoT data pipelines and AI systems to web applications — building products that turn data into decisions.',
  location: 'Phnom Penh, Cambodia',
  photo: '/images/me.png',
  aboutPhoto: '/images/me2.png',
  availableForWork: true,

  email: 'yonglyhor1004@email.com',
  phone: '+855 88 56 888 16',

  socials: [
    { label: 'GitHub', href: 'https://github.com/yonglyhor', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yong-lyhor-449b073b2/',
      icon: 'linkedin',
    },
    { label: 'X / Twitter', href: 'https://twitter.com/yonglyhor', icon: 'twitter' },
    { label: 'Email', href: 'mailto:yonglyhor1004@email.com', icon: 'mail' },
  ],

  cvUrl: '/archivement/yong-lyhor-cv.pdf',
}

export const cvRequestHref = (() => {
  const subject = encodeURIComponent('CV request — YONG Lyhor')
  const body = encodeURIComponent(
    `Hi YONG,\n\nI'd like a copy of your latest CV.\n\nBest regards,`,
  )
  return `mailto:${profile.email}?subject=${subject}&body=${body}`
})()