export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'Data Engineering', label: 'Data Engineering' },
  { id: 'Data Science', label: 'Data Science' },
  { id: 'AI', label: 'AI' },
  { id: 'Machine Learning', label: 'Machine Learning' },
  { id: 'IoT', label: 'IoT' },
  { id: 'Full Stack', label: 'Full Stack' },
]

export const projects = [
  {
    slug: 'portfolio-yong-lyhor',
    title: 'YONG Lyhor — Portfolio',
    tagline:
      'Single-page developer portfolio with live projects, achievements and a working contact form.',
    categories: ['Full Stack', 'Data Engineering'],
    tone: 'lime',
    featured: true,
    github: 'https://github.com/YongLyhor/portfolio',
    demo: 'https://yong-lyhor.vercel.app',
    image: '/projects/portfolio.jpg',
    overview:
      'The website you are looking at right now. A single-page Vue 3 portfolio that brings together my projects, experience, certificates, achievements and a production contact form backed by Resend — deployed continuously to Vercel.',
    problem:
      'A developer portfolio should present work clearly while actually demonstrating real front-end and deployment skills — not just a list of links.',
    solution:
      'Build it as a polished single-page app in Vue 3 + Vite with Tailwind CSS: scroll-spy navigation, custom cursor, live project data, a Resend-powered contact endpoint and full static deployment on Vercel.',
    architecture: null,
    technologies: ['Vue 3', 'Vite', 'Tailwind CSS', 'JavaScript', 'Resend', 'Vercel'],
    features: [
      'Single-page scroll-spy navigation',
      'Custom follow-dot cursor',
      'Live project showcase with local preview images',
      'Working contact form via Resend API',
      'Dark / light themes',
      'Optimized static bundle deployed to Vercel',
    ],
    challenges: [
      'Keeping the sticky navbar and anchor scrolling smooth across sections',
      'Wiring a serverless email endpoint so the form works in production',
    ],
  },
  {
    slug: 'building-management-system',
    title: 'Building Management System',
    tagline:
      'IoT platform for real-time monitoring of water, electricity, gas and cooling.',
    categories: ['IoT', 'Data Engineering', 'Full Stack'],
    tone: 'blue',
    featured: true,
    github: null,
    demo: null,
    image: '/projects/1-bms.png',
    overview:
      'An IoT-based Building Management System (BMS) that continuously monitors utilities such as water, electricity, gas and cooling. Sensor readings travel from the physical environment through an MQTT pipeline into a central database, where they power a live web dashboard for monitoring, analysis and billing — a project completed during the internship at AI FARM ROBOTICS alongside VISIONAI-related work.',
    problem:
      'Buildings consume multiple utilities that are often read manually and inconsistently. Missing central oversight makes it hard to detect abnormal consumption, track meter readings over time, or produce accurate monthly bills.',
    solution:
      'Attach IoT sensors to utility meters, forward readings over the MQTT protocol to an EMQX broker, ingest them through a FastAPI backend, and persist them in MySQL. A Vue.js dashboard then visualizes consumption in real time and supports analysis and monthly billing.',
    architecture: [
      { title: 'IoT Sensors', description: 'Measure water, electricity, gas and cooling usage.' },
      { title: 'EG71 Gateway', description: 'Aggregates sensor data at the building level.' },
      { title: 'MQTT', description: 'Lightweight publish/subscribe transport for telemetry.' },
      { title: 'EMQX Broker', description: 'Scales and routes MQTT messages between devices and backend.' },
      { title: 'FastAPI', description: 'Ingests messages, processes readings, exposes APIs.' },
      { title: 'MySQL', description: 'Stores meter readings and time-series utility data.' },
      { title: 'Web Dashboard', description: 'Vue.js app for real-time monitoring, analysis & billing.' },
    ],
    technologies: ['Vue.js', 'FastAPI', 'Python', 'MySQL', 'MQTT', 'EMQX', 'Docker'],
    features: [
      'Real-time utility monitoring',
      'MQTT data ingestion',
      'Automated meter readings',
      'Monthly billing generation',
      'Utility usage analysis',
      'Building management overview',
      'Dashboard data visualization',
    ],
    challenges: [
      'Designing a reliable MQTT ingestion flow that tolerates intermittent sensor connectivity',
      'Normalizing multi-source telemetry into a consistent schema',
      'Structuring time-series readings efficiently for queries over long periods',
    ],
  },
  {
    slug: 'coffee-aroma-platform',
    title: 'Coffee Aroma Platform',
    tagline:
      'Full-stack coffee ordering platform with real-time notifications and an admin dashboard.',
    categories: ['Full Stack'],
    tone: 'amber',
    featured: true,
    github: 'https://github.com/YongLyhor/Coffee_Aroma_Spring_Boot',
    demo: null,
    image: '/projects/2-coffee.png',
    overview:
      'A full-stack coffee ordering platform built with React.js, Spring Boot and MySQL. Customers browse and place orders, staff receive real-time notifications, and administrators manage the business through a dedicated dashboard.',
    problem:
      'Running a coffee shop on paper tickets and phone calls leads to lost orders, slow service and no visibility for the owner into daily operations.',
    solution:
      'Digitize the whole ordering flow: a React.js storefront, a Spring Boot REST backend and a MySQL database, plus Telegram-based notifications so staff never miss an order.',
    architecture: null,
    technologies: ['React.js', 'Spring Boot', 'Java', 'MySQL', 'REST API', 'Telegram Bot API'],
    features: [
      'Coffee ordering and order management',
      'Order notifications via Telegram Bot API',
      'Administration dashboard',
      'REST API backend',
    ],
    challenges: [
      'Designing a clean REST API consumed by multiple front-end flows',
      'Integrating Telegram notifications reliably with order lifecycle events',
    ],
  },
  {
    slug: 'image-caption-generator',
    title: 'Image Caption Generator',
    tagline: 'AI system that generates natural-language captions for images.',
    categories: ['AI', 'Machine Learning'],
    tone: 'violet',
    featured: false,
    github: 'https://github.com/YongLyhor/Image-Caption-Generator',
    demo: null,
    image: '/projects/3-image.png',
    overview:
      'An AI-powered image captioning system that combines computer vision and natural language processing. It uses DenseNet201 transfer learning to encode images and an LSTM decoder to generate descriptive captions, packaged in a Streamlit web app.',
    problem:
      'Describing image content automatically is hard — it needs a model that understands both what is in the image and how to express it in words.',
    solution:
      'Train an encoder-decoder model: DenseNet201 (pre-trained on large vision datasets) extracts visual features, and an LSTM decodes them into language. A Streamlit interface lets users upload any image and receive a caption.',
    architecture: null,
    technologies: ['Python', 'TensorFlow', 'DenseNet201', 'LSTM', 'Streamlit', 'NLP'],
    features: [
      'Automatic caption generation for uploaded images',
      'DenseNet201 transfer learning for visual feature extraction',
      'LSTM-based language decoding',
      'Streamlit web interface',
    ],
    challenges: [
      'Combining a vision encoder with a sequence decoder in TensorFlow',
      'Balancing model size with training cost using transfer learning',
    ],
  },
  {
    slug: 'cambodia-job-market-dashboard',
    title: 'Cambodia Job Market Dashboard',
    tagline: 'Data analytics dashboard for 900+ Cambodian job postings.',
    categories: ['Data Science', 'Data Engineering'],
    tone: 'emerald',
    featured: false,
    github: null,
    demo: null,
    image: '/projects/cambodia-job-market-dashboard.jpg',
    overview:
      'A data analytics project that analyzes 900+ Cambodian job posts to reveal salary trends, the most in-demand skills and the strongest industries. The result is a Power BI dashboard that turns raw job-market data into decision-ready insights.',
    problem:
      'Job seekers and students have little visibility into what the Cambodian market actually pays and which skills employers demand.',
    solution:
      'Collect job data, clean and enrich it with SQL and Python, then build an interactive Power BI dashboard that lets users explore salary and skill trends by role and industry.',
    architecture: null,
    technologies: ['Power BI', 'Excel', 'SQL', 'Python'],
    features: [
      'Analysis of 900+ Cambodian job posts',
      'Salary trend visualization',
      'In-demand skills breakdown',
      'Industry and employment insights',
    ],
    challenges: [
      'Cleaning noisy, heterogeneous job postings into a consistent dataset',
      'Designing dashboard filters that stay intuitive with many dimensions',
    ],
  },
  {
    slug: 'sign-language-detection-yolov11',
    title: 'Real-Time Sign Language Detection with YOLOv11',
    tagline: 'Real-time detection of 10 hand gestures using YOLOv11.',
    categories: ['AI', 'Machine Learning', 'Computer Vision'],
    tone: 'rose',
    featured: false,
    github: 'https://github.com/KheangDS/Sign-Language-Detection',
    demo: null,
    image: '/projects/5-sign.png',
    overview:
      'A real-time computer vision system that recognizes sign-language gestures from a webcam feed. The detection model (YOLOv11) was trained on a custom dataset of 900+ images to recognize 10 distinct gestures, with datasets curated in Roboflow.',
    problem:
      'Existing sign-language recognition tools are often slow, restricted to few gestures, or require specialist hardware.',
    solution:
      'Leverage a modern one-stage detector (YOLOv11) for speed and accuracy. A custom dataset of 900+ annotated gesture images was built with Roboflow, yielding recognition of 10 gestures at roughly 83% accuracy.',
    architecture: null,
    technologies: ['Python', 'YOLOv11', 'Roboflow', 'Machine Learning'],
    features: [
      'Real-time gesture detection from webcam input',
      'Custom dataset of 900+ annotated images',
      'Recognition of 10 sign-language gestures',
      '~83% detection accuracy',
    ],
    challenges: [
      'Collecting and annotating a consistent gesture dataset',
      'Tuning detection thresholds for real-time webcam latency',
    ],
  },
  {
    slug: 'ragkhmer-tutor-chatbot',
    title: 'RagKhmer-Tutor Chatbot',
    tagline: 'Bilingual (Khmer / English) AI tutor powered by RAG.',
    categories: ['AI', 'LLM'],
    tone: 'indigo',
    featured: false,
    github: 'https://github.com/YongLyhor/RagKhmer-Tutor-Chatbot',
    demo: null,
    image: '/projects/6-rag.png',
    overview:
      'An AI chatbot that answers questions in both Khmer and English. Built with Retrieval-Augmented Generation (RAG) on top of GPT-4o via the OpenAI API, it grounds answers in retrieved context and ships with a Streamlit chat interface.',
    problem:
      'A generic LLM often answers Khmer questions with shallow or unsourced responses, missing local context.',
    solution:
      'Augment GPT-4o with retrieval: relevant documents are fetched first and used as grounding context, improving accuracy and language quality in both Khmer and English.',
    architecture: null,
    technologies: ['Python', 'RAG', 'GPT-4o', 'OpenAI API', 'Streamlit'],
    features: [
      'Khmer and English question answering',
      'Retrieval-Augmented Generation (RAG)',
      'GPT-4o via the OpenAI API',
      'Streamlit chat interface',
    ],
    challenges: [
      'Handling the morphological richness of Khmer during retrieval',
      'Keeping retrieval context within token limits for longer answers',
    ],
  },
  {
    slug: 'ticket-management-system',
    title: 'Ticket Management System',
    tagline: 'Microservices-based ticketing platform with user management.',
    categories: ['Full Stack', 'Microservices'],
    tone: 'cyan',
    featured: false,
    github: 'https://github.com/YongLyhor/Ticket-Management-System-TMS-',
    demo: null,
    image: '/projects/7-ticket.png',
    overview:
      'A microservices-based ticket management system built with Spring Boot on the backend and React.js on the frontend, backed by PostgreSQL. It supports ticket tracking, user management, collaboration and independently scalable services.',
    problem:
      'Support teams juggling shared spreadsheets lose track of ticket status, ownership and history, especially as the team grows.',
    solution:
      'Split the domain into small, independently deployable services — tickets, users and collaboration — behind a coherent API, with a React.js frontend and persistent PostgreSQL storage.',
    architecture: null,
    technologies: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'AWS'],
    features: [
      'Ticket tracking and status management',
      'User management',
      'Team collaboration workflows',
      'Scalable microservices architecture',
    ],
    challenges: [
      'Deciding service boundaries that keep communication simple',
      'Coordinating data consistency across distributed services',
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) || null
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((project) => project.slug === slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  return { prev, next }
}