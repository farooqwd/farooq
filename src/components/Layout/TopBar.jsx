import './TopBar.css'

function TopBar({ onMenuClick }) {
  return (
    <header className="top-bar">
      <div className="top-bar-left">
        <button className="menu-toggle" onClick={onMenuClick}>
          <i className="fas fa-bars"></i>
        </button>
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="top-bar-right">
        <div className="notification">
          <i className="fas fa-bell"></i>
          <span className="notification-badge">5</span>
        </div>
        <a 
          href="https://www.linkedin.com/in/farooq-islam-930a67278/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="user-profile"
        >
          <img src="/farooq.jpg" alt="Farooq" />
          <span>Farooq</span>
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </header>
  )
}

export default TopBar
