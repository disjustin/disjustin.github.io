import { useState, useEffect } from 'react'
import Terminal from './components/Terminal'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
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

  const [displayedFacts, setDisplayedFacts] = useState([])

  useEffect(() => {
    // Select 4 random facts on mount
    const shuffled = [...randomFacts].sort(() => 0.5 - Math.random())
    setDisplayedFacts(shuffled.slice(0, 4))
  }, [])

  const handleCommand = (command) => {
    const cmd = command.trim().toLowerCase()

    setCommandHistory(prev => [...prev, { command, timestamp: new Date() }])

    if (cmd === 'cd /about' || cmd === 'cd about') {
      setCurrentPage('about')
    } else if (cmd === 'cd /resume' || cmd === 'cd resume') {
      setCurrentPage('resume')
    } else if (cmd === 'cd /blog' || cmd === 'cd blog') {
      setCurrentPage('blog')
    } else if (cmd === 'cd /guides' || cmd === 'cd guides') {
      setCurrentPage('guides')
    } else if (cmd === 'cd ~' || cmd === 'cd /' || cmd === 'cd' || cmd === 'cd /home') {
      setCurrentPage('home')
    } else if (cmd === 'clear' || cmd === 'cls') {
      setCommandHistory([])
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

  return (
    <div className="app">
      <Terminal
        currentPage={currentPage}
        onCommand={handleCommand}
        commandHistory={commandHistory}
        randomFacts={displayedFacts}
      />
    </div>
  )
}

export default App
