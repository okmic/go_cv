import { siteData } from '../../data'
import { Code2, Server, Cpu, Database, Zap, Cloud, Layers, BookOpen } from 'lucide-react'

export default function Skills() {
  const { skills } = siteData
  const getCategoryIcon = (categoryName: string) => {
    const icons: Record<string, React.ComponentType<any>> = {
      "Backend Engineering": Server,
      "Frontend Development": Code2,
      "DevOps & Infrastructure": Cpu,
      "Data & Databases": Database,
      "Go": Server,
      "Базы данных": Database,
      "Инфраструктура": Cloud,
      "Архитектура": Layers,
      "Изучаю": BookOpen
    }
    return icons[categoryName] || Zap
  }
  const getSkillIcon = (skillName: string) => {
    const icons: Record<string, React.ComponentType<any>> = skills.skillIcons
    return icons[skillName] || Zap
  }

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      {/* Matrix background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,173,216,0.06),transparent_50%)]"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,173,216,0.1) 0%, transparent 50%)`
      }}></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/80 rounded-xl border border-[#00ADD8]/20 mb-6 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ADD8] animate-pulse"></div>
            <span className="text-[#00ADD8] text-sm font-mono tracking-[0.2em] font-medium">
              {skills.title}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADD8] to-[#5DC9E2]">
              {skills.title1.split(' ')[0]}
            </span>
            <span className="text-white ml-2">{skills.title1.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0B6C9] max-w-2xl mx-auto font-light">
            {skills.subtitle1}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {skills.categories.map((category, index) => {
            const CategoryIcon = getCategoryIcon(category.category)
            const gradient = "from-[#00ADD8] to-[#5DC9E2]"
            const isLearning = category.category === "Изучаю"
            return (
              <div
                key={index}
                className={`group bg-black/80 rounded-2xl p-6 border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${isLearning
                    ? 'border-[#00ADD8]/30 hover:border-[#00ADD8]/60 shadow-[0_0_30px_rgba(0,173,216,0.05)]'
                    : 'border-[#00ADD8]/10 hover:border-[#00ADD8]/30'
                  }`}
              >
                {/* Go-style corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-20">
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00ADD8]"></div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-gradient-to-r ${gradient} rounded-lg shadow-[0_0_20px_rgba(0,173,216,0.2)]`}>
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-mono font-semibold text-white tracking-wide">
                      {category.category}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${gradient} rounded-full text-white text-xs font-mono font-medium shadow-[0_0_20px_rgba(0,173,216,0.15)]`}>
                    {category.level}
                  </span>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = getSkillIcon(skill.name)
                    return (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <SkillIcon className="w-4 h-4 text-[#A0B6C9] group-hover/skill:text-[#00ADD8] transition-colors duration-300" />
                            <span className="text-gray-300 text-sm font-mono group-hover/skill:text-white transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[#00ADD8] text-sm font-mono font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-900 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-1.5 rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, #00ADD8, #5DC9E2)`,
                              boxShadow: `0 0 10px rgba(0,173,216,0.3)`
                            }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <a
            href={skills.stats.title1Link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 sm:p-8 md:p-10 bg-black/60 rounded-xl border border-[#00ADD8]/10 hover:border-[#00ADD8]/30 transition-all duration-300 hover:bg-black/80 hover:shadow-[0_0_40px_rgba(0,173,216,0.08)] cursor-pointer"
          >
            <div className="flex items-center gap-3 justify-center mb-2">
              <div className="w-2 h-2 rounded-full bg-[#00ADD8] animate-pulse"></div>
              <span className="text-[#00ADD8] font-mono text-base sm:text-lg font-semibold">{skills.stats.title1}</span>
            </div>
            <div className="text-gray-400 text-sm sm:text-base font-light text-center">Проекты и портфолио →</div>
          </a>

          <a
            href={skills.stats.title2Link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 sm:p-8 md:p-10 bg-black/60 rounded-xl border border-[#00ADD8]/10 hover:border-[#00ADD8]/30 transition-all duration-300 hover:bg-black/80 hover:shadow-[0_0_40px_rgba(0,173,216,0.08)] cursor-pointer"
          >
            <div className="flex items-center gap-3 justify-center mb-2">
              <div className="w-2 h-2 rounded-full bg-[#5DC9E2] animate-pulse"></div>
              <span className="text-[#5DC9E2] font-mono text-base sm:text-lg font-semibold">{skills.stats.title2}</span>
            </div>
            <div className="text-gray-400 text-sm sm:text-base font-light text-center">Образование и ценности →</div>
          </a>
        </div>
      </div>
    </section>
  )
}