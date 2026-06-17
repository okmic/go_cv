import { siteData } from '../../data'

export default function ValueProposition() {
  const { about } = siteData
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#00ADD8]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#5DC9E2]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-[#00ADD8]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,173,216,0.1) 0%, transparent 50%)`
      }}></div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ADD8] to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5DC9E2] to-transparent opacity-30"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-black/80 rounded-xl sm:rounded-2xl border border-[#00ADD8]/20 mb-6 sm:mb-8 backdrop-blur-xl">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00ADD8] rounded-full animate-pulse"></div>
            <span className="text-[#00ADD8] text-xs sm:text-sm font-mono font-bold tracking-[0.2em]">
              {about.title}
            </span>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADD8] via-[#5DC9E2] to-[#00ADD8]">
                {about.title1}
              </span>
              <span className="text-white">{about.subTitle1}</span>
            </h2>
            <h2 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5DC9E2] via-[#00ADD8] to-[#5DC9E2]">
                {about.subSubTitle1}
              </span>
              <span className="text-white"> {about.subSubSubTitle1}</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-[#A0B6C9] max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-light mt-6 sm:mt-8 px-2">
            {about.title2}
            <span className="text-white font-medium"> {about.subTitle2}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {about.items.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl group-hover:blur-lg scale-95 group-hover:scale-100`}></div>

                <div className="relative bg-black/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#00ADD8]/10 group-hover:border-[#00ADD8]/30 transition-all duration-500 backdrop-blur-xl h-full overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>

                  {/* Go-style corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-20">
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00ADD8] group-hover:border-[#5DC9E2] transition-colors duration-300"></div>
                  </div>

                  <div className="absolute -top-16 -right-16 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-bl from-[#00ADD8]/5 to-transparent rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                  <div className="absolute -bottom-16 -left-16 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-[#5DC9E2]/5 to-transparent rounded-full group-hover:scale-150 transition-transform duration-1000"></div>

                  <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 opacity-60">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00ADD8]/10 leading-none group-hover:text-[#00ADD8]/20 transition-colors duration-300 font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-4 sm:mb-6 flex-1">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r ${value.gradient} backdrop-blur-sm transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_0_30px_rgba(0,173,216,0.1)]`}>
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                        </div>

                        <div className={`inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r ${value.gradient} rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/20 shadow-[0_0_20px_rgba(0,173,216,0.1)]`}>
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                          <span className="text-white text-xs font-mono font-bold tracking-wider whitespace-nowrap">
                            {value.metric}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight font-mono tracking-wide">
                        {value.title}
                      </h3>

                      <p className="text-[#A0B6C9] text-sm sm:text-base leading-relaxed font-light">
                        {value.description}
                      </p>
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                      {value.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${value.gradient} flex-shrink-0`}></div>
                          <span className="leading-tight font-mono">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 right-3 sm:right-4 lg:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-[#00ADD8] to-[#5DC9E2] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,173,216,0.3)]">
                        <div className="w-2 h-2 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {about.stats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: stat.delay }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="absolute inset-0 bg-black/60 border border-[#00ADD8]/10 rounded-xl sm:rounded-2xl group-hover:border-[#00ADD8]/30 transition-all duration-300 backdrop-blur-sm"></div>

              <div className="relative z-10">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-1 sm:mb-2 font-mono">
                  {stat.number}
                  <span className="text-[#00ADD8]">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-gray-400 leading-tight font-light">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}