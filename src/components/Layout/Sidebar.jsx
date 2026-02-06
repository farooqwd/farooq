import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const navItems = [
  { path: '/', icon: 'fa-th-large', label: 'Dashboard' },
  { path: '/perspectives', icon: 'fa-eye', label: 'Perspectives' },
  { path: '/tasks', icon: 'fa-tasks', label: 'Tasks' },
  { path: '/documents', icon: 'fa-file-alt', label: 'Documents' },
  { path: '/reports', icon: 'fa-chart-bar', label: 'Reports' },
  { path: '/users', icon: 'fa-users', label: 'Users & Roles' },
]

function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }) {
  const handleNavClick = () => {
    // Close mobile menu when clicking a nav item
    if (window.innerWidth <= 768 && onMobileClose) {
      onMobileClose()
    }
  }

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="logo">
        <div className="logo-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <polygon points="16,2 30,28 2,28" fill="#e63946"/>
            <polygon points="16,8 24,24 8,24" fill="#1e2a3b"/>
          </svg>
        </div>
        <span className="logo-text">TAHWUL</span>
      </div>
      
      <button className="sidebar-toggle" onClick={onToggle}>
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <nav className="nav-menu">
        {navItems.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path} 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            <i className={`fas ${item.icon}`}></i>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
