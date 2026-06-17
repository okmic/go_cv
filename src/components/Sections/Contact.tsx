import { siteData } from '../../data'
import { Mail, ArrowUpRight, Send, Shield, Clock } from 'lucide-react'
import { FaTelegram, FaPhone } from 'react-icons/fa'
import MaxIcon from '../Icons/MaxIcon'

type AccentColor = 'go' | 'teal' | 'cyan' | 'blue'

interface ContactConfig {
  icon: typeof FaTelegram | typeof MaxIcon | typeof Mail | typeof FaPhone
  gradient: string
  accent: AccentColor
}

interface ContactCardProps {
  contact: {
    url: string
    platform: string
    platformName: string
    status: string
    description: string
    label: string
  }
  config: ContactConfig
  isLast?: boolean
}

interface FeatureCardProps {
  icon: typeof Mail | typeof ArrowUpRight | typeof Send | typeof Shield | typeof Clock
  title: string
  description: string
  accent: AccentColor
}

const CONTACT_CARDS: ContactConfig[] = [
  {
    icon: FaTelegram,
    gradient: 'from-[#00ADD8] to-[#5DC9E2]',
    accent: 'go',
  },
  {
    icon: MaxIcon,
    gradient: 'from-[#5DC9E2] to-[#00ADD8]',
    accent: 'teal',
  },
  {
    icon: Mail,
    gradient: 'from-[#00ADD8] to-[#007D9C]',
    accent: 'cyan',
  },
  {
    icon: FaPhone,
    gradient: 'from-[#5DC9E2] to-[#007D9C]',
    accent: 'blue',
  },
]

const accentColors: Record<AccentColor, {
  badge: string
  icon: string
  dot: string
  link: string
  border: string
  glow: string
}> = {
  go: {
    badge: 'bg-[#00ADD8]/10 text-[#00ADD8] border-[#00ADD8]/20',
    icon: 'bg-[#00ADD8]/10 text-[#00ADD8]',
    dot: 'bg-[#00ADD8]',
    link: 'text-[#00ADD8]',
    border: 'border-[#00ADD8]/20 hover:border-[#00ADD8]/40',
    glow: 'shadow-[0_0_30px_rgba(0,173,216,0.1)]',
  },
  teal: {
    badge: 'bg-[#5DC9E2]/10 text-[#5DC9E2] border-[#5DC9E2]/20',
    icon: 'bg-[#5DC9E2]/10 text-[#5DC9E2]',
    dot: 'bg-[#5DC9E2]',
    link: 'text-[#5DC9E2]',
    border: 'border-[#5DC9E2]/20 hover:border-[#5DC9E2]/40',
    glow: 'shadow-[0_0_30px_rgba(93,201,226,0.1)]',
  },
  cyan: {
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    icon: 'bg-cyan-500/10 text-cyan-400',
    dot: 'bg-cyan-400',
    link: 'text-cyan-400',
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
    glow: 'shadow-[0_0_30px_rgba(34,211,238,0.1)]',
  },
  blue: {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    icon: 'bg-blue-500/10 text-blue-400',
    dot: 'bg-blue-400',
    link: 'text-blue-400',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.1)]',
  },
}

function ContactCard({ contact, config }: ContactCardProps) {
  const Icon = config.icon
  const colors = accentColors[config.accent]

  return (
    <a
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex flex-col sm:flex-row items-start gap-6 
        p-6 sm:p-8 rounded-2xl border bg-black/80 backdrop-blur-sm
        transition-all duration-300 hover:scale-[1.02]
        ${colors.border}
        ${colors.glow}
      `}
    >
      {/* Go-style corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00ADD8]"></div>
      </div>

      <div className={`
        shrink-0 w-14 h-14 rounded-xl flex items-center justify-center
        ${colors.icon}
      `}>
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
          <h3 className="text-lg sm:text-xl font-mono font-semibold text-white tracking-wide">
            {contact.platformName}
          </h3>
          <span className={`
            self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full 
            text-xs font-mono font-medium border
            ${colors.badge}
          `}>
            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} animate-pulse`}></span>
            {contact.status}
          </span>
        </div>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 max-w-xl">
          {contact.description}
        </p>

        <div className="flex items-center gap-2 text-sm font-mono">
          <span className={`${colors.link} font-mono tracking-wide`}>
            {contact.label}
          </span>
          <ArrowUpRight className={`w-4 h-4 ${colors.link} transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1`} />
        </div>
      </div>
    </a>
  )
}

function FeatureCard({ icon: Icon, title, description, accent }: FeatureCardProps) {
  const iconColors: Record<AccentColor, string> = {
    go: 'text-[#00ADD8]',
    teal: 'text-[#5DC9E2]',
    cyan: 'text-cyan-400',
    blue: 'text-blue-400',
  }

  return (
    <div className="group flex items-start gap-4 p-5 sm:p-6 rounded-xl bg-black/60 border border-[#00ADD8]/10 hover:border-[#00ADD8]/30 transition-all duration-300 hover:bg-black/80">
      <div className="shrink-0 mt-0.5">
        <Icon className={`w-5 h-5 ${iconColors[accent]} transition-transform duration-300 group-hover:scale-110`} />
      </div>
      <div>
        <h4 className="text-white font-mono font-medium mb-1 text-sm sm:text-base tracking-wide">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function Contact() {
  const { contacts } = siteData

  const items = CONTACT_CARDS.map((config, index) => ({
    ...config,
    contact: contacts.items.find(item =>
      item.platform === (index === 0 ? 'Telegram' : index === 1 ? 'Max' : index === 2 ? 'Email' : 'Phone')
    ),
  }))

  return (
    <section id='contact' className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      {/* Go-style gradient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,173,216,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(93,201,226,0.05),transparent_50%)]"></div>
      
      {/* Matrix-style grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(0,173,216,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0,173,216,0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative max-w-5xl mx-auto">
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1 h-6 bg-[#00ADD8]"></span>
            <p className="text-sm font-mono text-[#00ADD8] tracking-[0.2em] uppercase font-medium">
              {contacts.title1}
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 max-w-3xl">
            <span className="text-[#A0B6C9]">{contacts.title2}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADD8] to-[#5DC9E2]">
              {contacts.title3}
            </span>
          </h1>

          <p className="text-lg text-[#A0B6C9] max-w-2xl leading-relaxed font-light">
            {contacts.title4}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mb-16 sm:mb-20">
          {items.map((item, index) => (
            item.contact && (
              <ContactCard
                key={index}
                contact={item.contact}
                config={item}
              />
            )
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 sm:mb-20">
          <FeatureCard
            icon={Clock}
            title={contacts.footerTitle1}
            description={contacts.footerSubTitle1}
            accent="go"
          />
          <FeatureCard
            icon={Shield}
            title={contacts.footerTitle2}
            description={contacts.footerSubTitle2}
            accent="teal"
          />
          <FeatureCard
            icon={Send}
            title={contacts.footerTitle3}
            description={contacts.footerSubTitle3}
            accent="cyan"
          />
        </div>

        <div className="border-t border-[#00ADD8]/10 pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#00ADD8] animate-pulse"></span>
              <span className="text-sm font-mono text-gray-400 tracking-wide">{contacts.footerTitle}</span>
            </div>
            <p className="text-sm text-gray-600 font-mono">
              {contacts.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
