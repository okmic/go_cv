import { Code2, Container, Cpu, Database, GitBranch, Network, Terminal, Server, Braces, Languages, BookOpen } from "lucide-react"

export function getExperienceYears() {
  const currentYear = new Date().getFullYear()
  return currentYear - 2021
}

export const siteData = {
  navItems: [
    { id: 'about', label: 'Обо мне' },
    { id: 'experience', label: 'Опыт' },
    { id: 'skills', label: 'Стек' },
    { id: 'contact', label: 'Контакты' }
  ],
  hero: {
    title: "Backend Developer",
    buttonValue: "Написать",
    description: "4 года коммерческой разработки: 2 года на Node.js (backend), 2 года на React/TypeScript (fullstack). Сейчас активно изучаю Go и хочу перейти на него в коммерческой разработке.",
    stats: [
      { number: '4+', label: 'года коммерческого опыта' },
      { number: '2', label: 'года на Node.js' },
      { number: '2', label: 'года на React/TS' }
    ]
  },
  about: {
    title: "ОБО МНЕ",
    title1: "Fullstack",
    subTitle1: "разработчик",
    subSubTitle1: "→ Go",
    subSubSubTitle1: "",
    title2: "Начинал с Node.js, работал над backend-сервисами и fullstack-приложениями на React. Сейчас целенаправленно изучаю Go — горутины, каналы, стандартную библиотеку, пишу pet-проекты.",
    subTitle2: "Ищу возможность применить Go в реальных задачах. Готов учиться и быстро влиться в проект.",
    items: [
      {
        title: "Node.js backend",
        description: "Разрабатывал REST API на Express/Nest.js, работал с WebSocket, строил микросервисы. Настраивал очереди (RabbitMQ), писал интеграционные тесты, оптимизировал производительность.",
        metric: "2+ ГОДА",
        gradient: "from-emerald-500 to-cyan-500",
        icon: Braces,
        features: ["Express.js", "Nest.js", "WebSocket"]
      },
      {
        title: "React + TypeScript",
        description: "Строил SPA на React с TypeScript, внедрял архитектуру, работал с Redux Toolkit, React Query. Есть опыт с SSR на Next.js. Понимаю клиент-серверное взаимодействие.",
        metric: "2+ ГОДА",
        gradient: "from-blue-500 to-indigo-500",
        icon: Code2,
        features: ["React", "TypeScript", "Next.js"]
      },
      {
        title: "Изучаю Go",
        description: "Активно изучаю Go: прошел основы языка, разбираюсь в горутинах и каналах, работаю с net/http, database/sql. Пишу pet-проекты, чтобы закрепить навыки.",
        metric: "СЕЙЧАС",
        gradient: "from-purple-500 to-pink-500",
        icon: BookOpen,
        features: ["Goroutines", "net/http", "Pet-проекты"]
      }
    ],
    stats: [
      { 
        number: "4",
        label: "года коммерческой разработки",
        suffix: "+",
        gradient: "from-purple-500 to-pink-500",
        delay: "0s"
      },
      { 
        number: "2",
        label: "года Node.js backend",
        suffix: "+",
        gradient: "from-blue-500 to-cyan-500",
        delay: "0.1s"
      },
      { 
        number: "2",
        label: "года React + TypeScript",
        suffix: "+",
        gradient: "from-green-500 to-emerald-500",
        delay: "0.2s"
      },
      { 
        number: "0",
        label: "лет коммерческого Go (цель — перейти)",
        suffix: "",
        gradient: "from-orange-500 to-red-500",
        delay: "0.3s"
      }
    ],
  },

  skills: {
    title: "TECH STACK",
    title1: "Мой стек",
    subtitle1: "С чем работал в продакшене + технологии, которые изучаю",
    skillIcons: {
      "Node.js": Server,
      "React": Code2,
      "TypeScript": Languages,
      "Express": Network,
      "PostgreSQL": Database,
      "Redis": Cpu,
      "Docker": Container,
      "REST API": GitBranch,
      "WebSocket": Network,
      "Git": GitBranch,
      "Linux": Terminal,
      "Go": Server,
    },
    categories: [
      {
        category: "Backend (Node.js)",
        level: "2+ года в продакшене",
        skills: [
          { name: "Express.js / Nest.js", level: 90 },
          { name: "REST API", level: 92 },
          { name: "WebSocket", level: 85 },
          { name: "Микросервисы", level: 80 }
        ]
      },
      {
        category: "Frontend",
        level: "2+ года в продакшене",
        skills: [
          { name: "React", level: 90 },
          { name: "TypeScript", level: 88 },
          { name: "Next.js", level: 85 },
          { name: "Redux Toolkit", level: 82 }
        ]
      },
      {
        category: "Базы данных",
        level: "Продакшен опыт",
        skills: [
          { name: "PostgreSQL", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "Redis", level: 75 },
          { name: "SQL", level: 85 }
        ]
      },
      {
        category: "Изучаю",
        level: "Активно осваиваю",
        skills: [
          { name: "Go", level: 70 },
          { name: "Goroutines", level: 65 },
          { name: "net/http", level: 75 },
          { name: "Testing в Go", level: 60 }
        ]
      }
    ],
    stats: {
      title1: "Node.js",
      subTitle1: "2+ года коммерческой разработки",
      title2: "React/TS",
      subTitle2: "2+ года fullstack проектов",
      title3: "Go",
      subTitle3: "Изучаю, пишу pet-проекты",
    }
  },
  contacts: {
    title: "КОНТАКТЫ",
    title1: "Есть проект",
    title2: "или задача?",
    title3: "Напишите",
    title4: "Отвечу в течение дня. Расскажу о своём опыте на Node.js/React, покажу pet-проекты на Go и обсудим, как я могу быть полезен.",
    footerTitle1: "Быстрый отклик",
    footerSubTitle1: "Отвечаю в течение дня",
    footerTitle2: "Открыт к общению",
    footerSubTitle2: "Всегда рад новым проектам",
    footerTitle3: "Честно",
    footerSubTitle3: "Без пафоса и обещаний",
    footerTitle: "Связаться",
    footer: `© ${new Date().getFullYear()} Backend Developer`,
    items: [
      {
        platform: "Telegram",
        platformName: "Telegram",
        label: "@mico_developer",
        url: "https://t.me/@mico_developer",
        icon: "Telegram",
        status: "Online",
        description: "Быстрее всего отвечаю тут",
      },
      {
        platform: "GitHub",
        platformName: "GitHub",
        label: "github.com/okmic",
        url: "https://github.com/okmic",
        icon: "GitHub",
        status: "Pet-проекты",
        description: "Код на Node.js и Go",
      },
      {
        platform: "Email",
        platformName: "Почта",
        label: "okmic.dev@gmail.com",
        url: "mailto:okmic.dev@gmail.com",
        icon: "Email",
        description: "Для детального обсуждения",
        status: "Проверяю регулярно"
      }
    ]
  }
}