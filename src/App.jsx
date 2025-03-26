import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="fixed inset-0 bg-gradient-to-br from-orange-50/80 via-orange-50/50 to-orange-50/30 dark:from-orange-950 dark:via-gray-900 dark:to-gray-950 -z-10" />
      <nav className="fixed w-full z-50 backdrop-blur-sm bg-orange-50/80 dark:bg-gray-900/70 border-b border-orange-100 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Portfolio
            </span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-orange-100/80 dark:bg-gray-800 hover:bg-orange-200/80 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-orange-400" /> : <Moon className="w-5 h-5 text-orange-500" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative">
        <Hero />
        <Skills />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

export default App