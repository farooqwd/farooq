import Sidebar from './Sidebar'
import TopBar from './TopBar'
import './Layout.css'

function Layout({ children, sidebarCollapsed, toggleSidebar, mobileMenuOpen, toggleMobileMenu }) {
  return (
    <div className="app-container">
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="sidebar-overlay" onClick={toggleMobileMenu}></div>
      )}
      
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={toggleSidebar}
        mobileOpen={mobileMenuOpen}
        onMobileClose={toggleMobileMenu}
      />
      <main className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <TopBar onMenuClick={toggleMobileMenu} />
        <div className="page-content">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
