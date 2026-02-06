import './ProgressColumn.css'

function ProgressColumn({ title, percent, color, items }) {
  return (
    <div className="progress-column">
      <div className={`progress-header ${color}`}>
        <div className="progress-title">{title}</div>
        <div className="progress-percent">{percent}</div>
      </div>
      <div className="progress-items">
        {items.map((item, index) => (
          <div key={index} className={`progress-item ${item.extraSpacing ? 'extra-spacing' : ''}`}>
            {item.label && <span className="item-label">{item.label}</span>}
            <div className="item-dots">
              {item.dots.map((dot, dotIndex) => (
                <span key={dotIndex} className={`num-dot ${dot.color}`}>
                  {dot.number}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressColumn
