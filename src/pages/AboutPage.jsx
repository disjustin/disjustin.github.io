import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <h2>&gt; About Me</h2>
      <div className="content">
        <p>
          Hello! I'm Justin Wong, a production test engineer with a passion for Linux, terminal interfaces, and building efficient systems.
        </p>
        <p>
          I enjoy working at the intersection of development and operations, creating tools and solutions that make developers' lives easier.
        </p>

        <div className="section">
          <h3>&gt;&gt; Skills</h3>
          <ul>
            <li>Linux System Administration</li>
            <li>Terminal & CLI Tools</li>
            <li>Web Development (React, Node.js)</li>
            <li>DevOps & Automation</li>
            <li>Shell Scripting (Bash, Python)</li>
          </ul>
        </div>

        <div className="section">
          <h3>&gt;&gt; Interests</h3>
          <ul>
            <li>Open Source Software</li>
            <li>Terminal Emulators & Multiplexers</li>
            <li>System Architecture</li>
            <li>Command-line Productivity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
