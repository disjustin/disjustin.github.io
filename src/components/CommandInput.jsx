import { useState, useRef, useEffect } from 'react'
import './CommandInput.css'

function CommandInput({ onSubmit, autoFocus = false }) {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onSubmit(input)
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="command-input">
      <span className="prompt-symbol">$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="command-field"
        placeholder="Type a command..."
        autoComplete="off"
      />
    </form>
  )
}

export default CommandInput
