import { Code2, Container, Cpu, Database, GitBranch, Network, Terminal, Server, Braces, Zap, Cloud } from "lucide-react"

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
    title: "Mico Go",
    buttonValue: "Написать",
    description: "Backend-разработчик с 4+ годами опыта. Пишу на Go, проектирую микросервисы, работаю с PostgreSQL, Redis, Docker. Ищу сложные проекты для профессионального роста.",
    stats: [
      { number: '4+', label: 'года коммерческого опыта' },
      { number: '2', label: 'года на Go' },
      { number: '20+', label: 'реализованных проектов' }
    ]
  },
  about: {
    title: "ОБО МНЕ",
    title1: "Backend",
    subTitle1: "разработчик",
    subSubTitle1: "на Go",
    subSubSubTitle1: "",
    title2: "Специализируюсь на разработке высоконагруженных backend-систем на Go. Проектирую архитектуру, оптимизирую производительность и пишу чистый, тестируемый код.",
    subTitle2: "Ищу интересные проекты, где могу применить свой опыт и решать сложные инженерные задачи",
    items: [
      {
        title: "Разработка на Go",
        description: "Пишу высокопроизводительные сервисы на Go. Работаю с горутинами, каналами, стандартной библиотекой. Разрабатываю REST API и gRPC сервисы.",
        metric: "2+ ГОДА",
        gradient: "from-[#00ADD8] to-[#5DC9E2]",
        icon: Braces,
        features: ["Goroutines", "Channels", "REST API", "gRPC"]
      },
      {
        title: "Базы данных и кеширование",
        description: "Проектирую схемы PostgreSQL, пишу оптимизированные запросы. Настраиваю кеширование с Redis, работаю с индексами и транзакциями.",
        metric: "PRODUCTION",
        gradient: "from-[#00ADD8] to-[#007D9C]",
        icon: Database,
        features: ["PostgreSQL", "Redis", "SQL", "Migrations"]
      },
      {
        title: "Микросервисы и инфраструктура",
        description: "Строю микросервисные архитектуры, контейнеризирую приложения с Docker, настраиваю CI/CD пайплайны. Работаю с облачными платформами.",
        metric: "DOCKER",
        gradient: "from-[#5DC9E2] to-[#00ADD8]",
        icon: Server,
        features: ["Docker", "CI/CD", "Kubernetes", "Linux"]
      }
    ],
    stats: [
      { 
        number: "4",
        label: "года коммерческой разработки",
        suffix: "+",
        gradient: "from-[#00ADD8] to-[#5DC9E2]",
        delay: "0s"
      },
      { 
        number: "2",
        label: "года на Go",
        suffix: "+",
        gradient: "from-[#5DC9E2] to-[#00ADD8]",
        delay: "0.1s"
      },
      { 
        number: "20",
        label: "реализованных проектов",
        suffix: "+",
        gradient: "from-[#00ADD8] to-[#007D9C]",
        delay: "0.2s"
      },
      { 
        number: "90",
        label: "покрытие кода тестами",
        suffix: "%",
        gradient: "from-[#5DC9E2] to-[#007D9C]",
        delay: "0.3s"
      }
    ],
  },
  skills: {
    title: "TECH STACK",
    title1: "Мой инструментарий",
    subtitle1: "Технологии, с которыми работаю ежедневно",
    skillIcons: {
      "Go": Server,
      "Goroutines": Zap,
      "Channels": Network,
      "PostgreSQL": Database,
      "Redis": Cpu,
      "Docker": Container,
      "Kubernetes": Cloud,
      "REST API": GitBranch,
      "gRPC": Network,
      "Git": GitBranch,
      "Linux": Terminal,
      "Testing": Code2,
    },
    categories: [
      {
        category: "Go",
        level: "Экспертный уровень",
        skills: [
          { name: "Goroutines & Channels", level: 92 },
          { name: "Standard Library", level: 90 },
          { name: "Testing (go test)", level: 88 },
          { name: "net/http & gRPC", level: 90 }
        ]
      },
      {
        category: "Базы данных",
        level: "Продакшен опыт",
        skills: [
          { name: "PostgreSQL", level: 90 },
          { name: "Redis", level: 85 },
          { name: "SQL & ORM", level: 88 },
          { name: "Migrations", level: 85 }
        ]
      },
      {
        category: "Инфраструктура",
        level: "DevOps",
        skills: [
          { name: "Docker", level: 90 },
          { name: "Kubernetes", level: 80 },
          { name: "CI/CD", level: 85 },
          { name: "Linux", level: 85 }
        ]
      },
      {
        category: "Архитектура",
        level: "Проектирование",
        skills: [
          { name: "Микросервисы", level: 88 },
          { name: "REST API", level: 92 },
          { name: "gRPC", level: 85 },
          { name: "Clean Architecture", level: 85 }
        ]
      }
    ],
    stats: {
      title1: "Проекты",
      title1Link: "https://okmic.github.io/MicoProjects/",
      title2: "Обо мне",
      title2Link: "https://okmic.github.io/MicoEngineer/",
    }
  },
  contacts: {
    title: "КОНТАКТЫ",
    title1: "Есть проект",
    title2: "или задача?",
    title3: "Напишите",
    title4: "Отвечу в течение дня. Расскажу о своём опыте, покажу pet-проекты на Go и обсудим, как я могу быть полезен. Готов присоединиться к команде или сделать проект под ключ.",
    footerTitle1: "Быстрый отклик",
    footerSubTitle1: "Отвечаю в течение дня",
    footerTitle2: "Открыт к общению",
    footerSubTitle2: "Всегда рад новым проектам",
    footerTitle3: "Честно",
    footerSubTitle3: "Без пафоса и обещаний",
    footerTitle: "Связаться",
    footer: `© ${new Date().getFullYear()} Go Developer`,
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
        description: "Код на Go, pet-проекты",
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
