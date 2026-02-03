import { useState, useEffect } from 'react'
import MarkdownRenderer from '../components/MarkdownRenderer'
import './GuidesPage.css'

function GuidesPage() {
  const [guides, setGuides] = useState([])
  const [selectedGuide, setSelectedGuide] = useState(null)

  useEffect(() => {
    // In production, you would fetch this from a directory or API
    const guidesList = [
      {
        id: 1,
        title: 'Setting up a Linux Development Environment',
        date: '2026-01-01',
        file: 'guide-1.md'
      },
      {
        id: 2,
        title: 'Essential Terminal Commands',
        date: '2026-01-02',
        file: 'guide-2.md'
      }
    ]
    setGuides(guidesList)
  }, [])

  const loadGuide = async (filename) => {
    try {
      const response = await fetch(`/content/guides/${filename}`)
      const text = await response.text()
      setSelectedGuide(text)
    } catch (error) {
      setSelectedGuide('# Guide\n\nGuide not found.')
    }
  }

  return (
    <div className="guides-page">
      <h2>&gt; Guides</h2>

      {!selectedGuide ? (
        <div className="guides-list">
          {guides.length === 0 ? (
            <p className="no-guides">No guides yet. Add markdown files to /public/content/guides/</p>
          ) : (
            guides.map(guide => (
              <div
                key={guide.id}
                className="guide-item"
                onClick={() => loadGuide(guide.file)}
              >
                <div className="guide-date">[{guide.date}]</div>
                <div className="guide-title">{guide.title}</div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="guide-content">
          <button className="back-button" onClick={() => setSelectedGuide(null)}>
            ← Back to guides
          </button>
          <MarkdownRenderer content={selectedGuide} />
        </div>
      )}
    </div>
  )
}

export default GuidesPage
