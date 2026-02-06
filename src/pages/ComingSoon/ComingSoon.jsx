import { Link } from 'react-router-dom'
import './ComingSoon.css'

function ComingSoon({ pageName }) {
  return (
    <div className="coming-soon">
      <div className="coming-soon-content">
        <div className="coming-soon-icon">
          <i className="fas fa-hard-hat"></i>
        </div>
        <h1>Coming Soon</h1>
        <p className="coming-soon-message">
          The <strong>{pageName}</strong> page is currently under development.
        </p>
        <p className="coming-soon-note">
          For testing purposes, only <strong>Dashboard</strong> and <strong>Perspectives</strong> screens are available.
        </p>
        <div className="coming-soon-actions">
          <Link to="/" className="btn btn-primary">
            <i className="fas fa-home"></i>
            Go to Dashboard
          </Link>
          <Link to="/perspectives" className="btn btn-secondary">
            <i className="fas fa-eye"></i>
            View Perspectives
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
