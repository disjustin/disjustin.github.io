import { useState, useEffect } from 'react'
import MarkdownRenderer from '../components/MarkdownRenderer'
import './BlogPage.css'

function BlogPage() {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    // In production, you would fetch this from a directory or API
    const blogPosts = [
      {
        id: 1,
        title: 'Getting Started with Linux Terminal',
        date: '2024-01-15',
        file: 'blog-post-1.md'
      },
      {
        id: 2,
        title: 'Building CLI Tools with Node.js',
        date: '2024-01-20',
        file: 'blog-post-2.md'
      }
    ]
    setPosts(blogPosts)
  }, [])

  const loadPost = async (filename) => {
    try {
      const response = await fetch(`/content/blog/${filename}`)
      const text = await response.text()
      setSelectedPost(text)
    } catch (error) {
      setSelectedPost('# Blog Post\n\nBlog post not found.')
    }
  }

  return (
    <div className="blog-page">
      <h2>&gt; Blog</h2>

      {!selectedPost ? (
        <div className="posts-list">
          {posts.length === 0 ? (
            <p className="no-posts">No blog posts yet. Add markdown files to /public/content/blog/</p>
          ) : (
            posts.map(post => (
              <div
                key={post.id}
                className="post-item"
                onClick={() => loadPost(post.file)}
              >
                <div className="post-date">[{post.date}]</div>
                <div className="post-title">{post.title}</div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="post-content">
          <button className="back-button" onClick={() => setSelectedPost(null)}>
            ← Back to posts
          </button>
          <MarkdownRenderer content={selectedPost} />
        </div>
      )}
    </div>
  )
}

export default BlogPage
