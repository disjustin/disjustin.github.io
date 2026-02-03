import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { useMemo } from 'react'
import './MarkdownRenderer.css'

function MarkdownRenderer({ content }) {
  const html = useMemo(() => {
    const rawHtml = marked(content)
    return DOMPurify.sanitize(rawHtml)
  }, [content])

  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default MarkdownRenderer
