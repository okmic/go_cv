import AppLayout from './components/Layout/AppLayout'
import Hero from './components/Hero/Hero'
import ValueProposition from './components/Sections/ValueProposition'
import Skills from './components/Sections/Skills'
import Contact from './components/Sections/Contact'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import { useEffect, useState } from 'react'

function App() {
  const [init, setInit] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (exiting) {
      const timer = setTimeout(() => {
        setInit(true)
        setTimeout(() => setMounted(true), 50)
      }, 600)

      return () => clearTimeout(timer)
    }
  }, [exiting])

  const handleSkip = () => {
    setExiting(true)
  }

  return (
    <AppLayout>
      {!init ? (
        <LoadingScreen
          onClick={handleSkip}
          isExiting={exiting}
        />
      ) : (
        <div
          className={`transition-all duration-700 ${
            mounted
              ? 'opacity-100 translate-y-0 blur-0'
              : 'opacity-0 translate-y-8 blur-sm'
          }`}
        >
          {/* Go-style decorative separator */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ADD8] to-transparent opacity-30"></div>
          </div>

          <Hero />
          
          {/* Matrix-style divider */}
          <div className="relative py-8">
            <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#00ADD8] to-transparent opacity-20"></div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-[#00ADD8]/20 text-xs font-mono tracking-[0.3em]">● ● ●</span>
              <span className="text-[#00ADD8]/10 text-2xl font-mono">⌘</span>
              <span className="text-[#00ADD8]/20 text-xs font-mono tracking-[0.3em]">● ● ●</span>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#00ADD8] to-transparent opacity-20"></div>
          </div>

          <ValueProposition />
          
          {/* Go-style divider with terminal prompt */}
          <div className="relative py-8">
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-[#00ADD8]/30 font-mono text-xs">
                <span className="text-[#00ADD8]/50">$</span>
                <span className="tracking-wider">go build</span>
              </div>
              <div className="w-px h-4 bg-[#00ADD8]/10"></div>
              <div className="flex items-center gap-2 text-[#00ADD8]/30 font-mono text-xs">
                <span className="text-[#00ADD8]/50">$</span>
                <span className="tracking-wider">go test</span>
              </div>
              <div className="w-px h-4 bg-[#00ADD8]/10"></div>
              <div className="flex items-center gap-2 text-[#00ADD8]/30 font-mono text-xs">
                <span className="text-[#00ADD8]/50">$</span>
                <span className="tracking-wider">go run</span>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#00ADD8]/20 to-transparent"></div>
          </div>

          <Skills />
          
          {/* Go-style final divider */}
          <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#00ADD8]/30 to-transparent w-full my-0" />
          
          <Contact />
        </div>
      )}
    </AppLayout>
  )
}

export default App