import './HomePage.css'

function HomePage({ randomFacts }) {
  const asciiArt = `
     ██╗██╗   ██╗███████╗████████╗██╗███╗   ██╗    ██╗    ██╗ ██████╗ ███╗   ██╗ ██████╗
     ██║██║   ██║██╔════╝╚══██╔══╝██║████╗  ██║    ██║    ██║██╔═══██╗████╗  ██║██╔════╝
     ██║██║   ██║███████╗   ██║   ██║██╔██╗ ██║    ██║ █╗ ██║██║   ██║██╔██╗ ██║██║  ███╗
██   ██║██║   ██║╚════██║   ██║   ██║██║╚██╗██║    ██║███╗██║██║   ██║██║╚██╗██║██║   ██║
╚█████╔╝╚██████╔╝███████║   ██║   ██║██║ ╚████║    ╚███╔███╔╝╚██████╔╝██║ ╚████║╚██████╔╝
 ╚════╝  ╚═════╝ ╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═══╝     ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝
  `

  return (
    <div className="home-page">
      <pre className="ascii-art">{asciiArt}</pre>

      <div className="welcome-text">
        <p>Welcome to my terminal-based portfolio.</p>
        <p>Click the CLI icon in the top-right corner to navigate.</p>
      </div>

      <div className="facts-section">
        <h3>&gt; Random Facts</h3>
        <div className="facts-list">
          {randomFacts.map((fact, index) => (
            <div key={index} className="fact-item">
              [{index + 1}] {fact}
            </div>
          ))}
        </div>
      </div>

      <div className="quick-commands">
        <h3>&gt; Quick Start</h3>
        <div className="commands-grid">
          <div className="command-item">cd /about</div>
          <div className="command-item">cd /resume</div>
          <div className="command-item">cd /blog</div>
          <div className="command-item">cd /guides</div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
