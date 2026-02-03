import { useRef, useEffect, useState, useCallback, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CommandInput from './CommandInput'
import './Terminal.css'

const NAV_ITEMS = [
  { path: '/', label: 'Home', icon: '~' },
  { path: '/about', label: 'About', icon: '📄' },
  { path: '/resume', label: 'Resume', icon: '📋' },
  { path: '/blog', label: 'Blog', icon: '✏️' },
  { path: '/guides', label: 'Guides', icon: '📚' }
]

function Terminal({
  children,
  sidebarOpen,
  toggleSidebar,
  onCommand,
  commandHistory,
  addToHistory,
  currentPath
}) {
  const outputEndRef = useRef(null)
  const [focusedNavIndex, setFocusedNavIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [commandHistory])

  // Reset focused index when sidebar opens
  useEffect(() => {
    if (sidebarOpen) {
      const currentIndex = NAV_ITEMS.findIndex(item => item.path === currentPath)
      setFocusedNavIndex(currentIndex !== -1 ? currentIndex : 0)
    }
  }, [sidebarOpen, currentPath])

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't handle if user is typing in an input
      const activeElement = document.activeElement
      const isTyping = activeElement?.tagName === 'INPUT' || activeElement?.tagName === 'TEXTAREA'

      // Left arrow - open sidebar (only if not typing)
      if (e.key === 'ArrowLeft' && !sidebarOpen && !isTyping) {
        e.preventDefault()
        toggleSidebar()
        return
      }

      // Right arrow or Escape - close sidebar
      if ((e.key === 'ArrowRight' || e.key === 'Escape') && sidebarOpen) {
        e.preventDefault()
        toggleSidebar()
        return
      }

      // Up/Down arrows - navigate menu when sidebar is open (even when typing)
      if (sidebarOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        e.preventDefault()
        if (e.key === 'ArrowDown') {
          setFocusedNavIndex((prev) => (prev + 1) % NAV_ITEMS.length)
        } else {
          setFocusedNavIndex((prev) => (prev - 1 + NAV_ITEMS.length) % NAV_ITEMS.length)
        }
        return
      }

      // Enter - select focused item (only if not typing)
      if (e.key === 'Enter' && sidebarOpen && !isTyping) {
        e.preventDefault()
        const selectedItem = NAV_ITEMS[focusedNavIndex]
        navigate(selectedItem.path)
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [sidebarOpen, focusedNavIndex, toggleSidebar, navigate])

  const handleCommandSubmit = (command) => {
    const result = onCommand(command)

    if (result) {
      addToHistory(result)
    }
  }

  const getPageName = () => {
    const pathMap = {
      '/': 'home',
      '/about': 'about',
      '/resume': 'resume',
      '/blog': 'blog',
      '/guides': 'guides'
    }
    return pathMap[currentPath] || 'home'
  }

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span>Command Terminal</span>
          <button className="close-sidebar" onClick={toggleSidebar}>×</button>
        </div>

        <div className="sidebar-nav">
          <h3>Navigation</h3>
          <div className="keyboard-hint">Use ↑/↓ to navigate, Enter to select</div>
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${currentPath === item.path ? 'active' : ''} ${
                focusedNavIndex === index && sidebarOpen ? 'focused' : ''
              }`}
              onClick={toggleSidebar}
            >
              <span className="nav-icon">{item.icon}</span> {item.label}
            </Link>
          ))}
        </div>

        <div className="sidebar-terminal">
          <h3>Terminal Output</h3>
          <div className="terminal-output">
            {commandHistory.map((item, index) => (
              <div key={index} className={`output-line ${item.type}`}>
                {item.type === 'command' ? (
                  <div>$ {item.command}</div>
                ) : (
                  item.content.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))
                )}
              </div>
            ))}
            <div ref={outputEndRef} />
          </div>
          <CommandInput onSubmit={handleCommandSubmit} />
        </div>
      </div>

      {/* Main terminal container */}
      <div className={`terminal ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="terminal-header">
          <div className="terminal-left">
            <div className="terminal-cli-icon" onClick={toggleSidebar} title="Toggle Sidebar (←)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </div>
          </div>
          <div className="terminal-title">justin@portfolio:~/{getPageName()}</div>
          <div className="terminal-spacer"></div>
        </div>

        <div className="terminal-content">
          {children}
        </div>
      </div>
    </>
  )
}

export default Terminal
