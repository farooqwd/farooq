import './StatCard.css'

function StatCard({ value, label, icon, iconColor = 'blue' }) {
  return (
    <div className="stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      <div className={`stat-icon ${iconColor}`}>
        <i className={`fas ${icon}`}></i>
      </div>
    </div>
  )
}

export default StatCard
