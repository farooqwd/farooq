import './LeaderItem.css'

function LeaderItem({ name, role, score, image }) {
  return (
    <div className="leader-item">
      <img src={image} alt={name} />
      <div className="leader-info">
        <div className="leader-name">{name}</div>
        <div className="leader-role">{role}</div>
      </div>
      {score && <div className="leader-score">{score}</div>}
    </div>
  )
}

export default LeaderItem
