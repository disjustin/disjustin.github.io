import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useState, useCallback } from 'react'
import Terminal from './components/Terminal'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ResumePage from './pages/ResumePage'
import BlogPage from './pages/BlogPage'
import GuidesPage from './pages/GuidesPage'
import './App.css'

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [commandHistory, setCommandHistory] = useState([])

  const randomFacts = [
    "Fact: The first computer bug was an actual bug - a moth found in a computer in 1947.",
    "Fact: The original name for Windows was 'Interface Manager'.",
    "Fact: The first 1GB hard drive weighed over 500 pounds and cost $40,000.",
    "Fact: There are more possible iterations of a game of chess than atoms in the observable universe.",
    "Fact: The first computer mouse was made of wood.",
    "Fact: The average person spends about 6 years of their life dreaming.",
    "Fact: Honey never spoils. Archaeologists have found 3000-year-old honey that's still edible.",
    "Fact: Linux was originally developed as a hobby project by Linus Torvalds in 1991."
  ]

  const handleCommand = (command) => {
    const cmd = command.trim().toLowerCase()
    const timestamp = new Date()

    setCommandHistory(prev => [...prev, { command, timestamp, type: 'command' }])

    if (cmd === 'cd /about' || cmd === 'cd about') {
      navigate('/about')
      return { type: 'success', content: 'Navigated to /about' }
    } else if (cmd === 'cd /resume' || cmd === 'cd resume') {
      navigate('/resume')
      return { type: 'success', content: 'Navigated to /resume' }
    } else if (cmd === 'cd /blog' || cmd === 'cd blog') {
      navigate('/blog')
      return { type: 'success', content: 'Navigated to /blog' }
    } else if (cmd === 'cd /guides' || cmd === 'cd guides') {
      navigate('/guides')
      return { type: 'success', content: 'Navigated to /guides' }
    } else if (cmd === 'cd ~' || cmd === 'cd /' || cmd === 'cd' || cmd === 'cd /home') {
      navigate('/')
      return { type: 'success', content: 'Navigated to home' }
    } else if (cmd === 'clear' || cmd === 'cls') {
      setCommandHistory([])
      return null
    } else if (cmd === 'help') {
      return {
        type: 'help',
        content: `Available commands:
  cd /about    - View about page
  cd /resume   - View resume
  cd /blog     - View blog posts
  cd /guides   - View guides
  cd ~         - Return to home
  clear        - Clear terminal
  help         - Show this help message`
      }
    } else if (cmd) {
      return {
        type: 'error',
        content: `Command not found: ${command}. Type 'help' for available commands.`
      }
    }

    return null
  }

  const addToHistory = (item) => {
    setCommandHistory(prev => [...prev, item])
  }

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev)
  }, [])

  return (
    <Terminal
      sidebarOpen={sidebarOpen}
      toggleSidebar={toggleSidebar}
      onCommand={handleCommand}
      commandHistory={commandHistory}
      addToHistory={addToHistory}
      currentPath={location.pathname}
    >
      <Routes>
        <Route path="/" element={<HomePage randomFacts={randomFacts} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/guides" element={<GuidesPage />} />
      </Routes>
    </Terminal>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
