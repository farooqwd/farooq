import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Perspectives from "./pages/Perspectives";
import ComingSoon from "./pages/ComingSoon";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <Layout
      sidebarCollapsed={sidebarCollapsed}
      toggleSidebar={toggleSidebar}
      mobileMenuOpen={mobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
    >
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/perspectives" element={<Perspectives />} />
        <Route path="/tasks" element={<ComingSoon pageName="Tasks" />} />
        <Route
          path="/documents"
          element={<ComingSoon pageName="Documents" />}
        />
        <Route path="/reports" element={<ComingSoon pageName="Reports" />} />
        <Route
          path="/users"
          element={<ComingSoon pageName="Users & Roles" />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
