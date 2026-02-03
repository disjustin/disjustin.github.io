import { useState, useEffect } from 'react'
import MarkdownRenderer from '../components/MarkdownRenderer'
import './ResumePage.css'

function ResumePage() {
  const [resumeContent, setResumeContent] = useState('')

  useEffect(() => {
    fetch('/content/resume.md')
      .then(response => response.text())
      .then(text => setResumeContent(text))
      .catch(() => setResumeContent('# Resume\n\nResume content not found. Please add a resume.md file to the /public/content directory.'))
  }, [])

  return (
    <div className="resume-page">
      <h2>&gt; Resume</h2>
      <MarkdownRenderer content={resumeContent} />
    </div>
  )
}

export default ResumePage
