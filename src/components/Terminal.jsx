import { useState, useRef, useEffect } from 'react'
import CommandInput from './CommandInput'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ResumePage from '../pages/ResumePage'
import BlogPage from '../pages/BlogPage'
import GuidesPage from '../pages/GuidesPage'
import './Terminal.css'

function Terminal({ currentPage, onCommand, commandHistory, randomFacts }) {
  const [output, setOutput] = useState([])
  const [showPrompt, setShowPrompt] = useState(false)
  const terminalRef = useRef(null)
  const outputEndRef = useRef(null)

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [output])

  const handleCommandSubmit = (command) => {
    // Add command to output
    setOutput(prev => [...prev, { type: 'command', content: `$ ${command}` }])

    // Execute command
    const result = onCommand(command)

    // Add result to output if any
    if (result) {
      setOutput(prev => [...prev, result])
    }
  }

  const togglePrompt = () => {
    setShowPrompt(!showPrompt)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage randomFacts={randomFacts} />
      case 'about':
        return <AboutPage />
      case 'resume':
        return <ResumePage />
      case 'blog':
        return <BlogPage />
      case 'guides':
        return <GuidesPage />
      default:
        return <HomePage randomFacts={randomFacts} />
    }
  }

  return (
    <div className="terminal" ref={terminalRef}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn close"></span>
          <span className="btn minimize"></span>
          <span className="btn maximize"></span>
        </div>
        <div className="terminal-title">justin@portfolio:~/{currentPage}</div>
        <div className="terminal-cli-icon" onClick={togglePrompt}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </div>
      </div>

      <div className="terminal-content">
        {renderPage()}

        <div className="terminal-output">
          {output.map((item, index) => (
            <div key={index} className={`output-line ${item.type}`}>
              {item.content.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          ))}
          <div ref={outputEndRef} />
        </div>
      </div>

      {showPrompt && (
        <div className="prompt-overlay" onClick={togglePrompt}>
          <div className="prompt-container" onClick={(e) => e.stopPropagation()}>
            <div className="prompt-header">
              <span>Command Prompt</span>
              <button className="close-prompt" onClick={togglePrompt}>×</button>
            </div>
            <CommandInput onSubmit={handleCommandSubmit} autoFocus={true} />
            <div className="prompt-help">
              Type 'help' for available commands
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Terminal
