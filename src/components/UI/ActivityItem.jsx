import './ActivityItem.css'

function ActivityItem({ text, time, dotColor = 'blue', isLink = false }) {
  return (
    <div className="activity-item">
      <span className={`activity-dot ${dotColor}`}></span>
      <div className="activity-content">
        <div className={`activity-text ${isLink ? 'link' : ''}`}>{text}</div>
      </div>
      <div className="activity-time">{time}</div>
    </div>
  )
}

export default ActivityItem
